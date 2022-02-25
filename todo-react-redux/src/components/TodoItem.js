import '../App.css';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const MyButton = styled(Button)`
  border: 2px solid #f5e941;
  border-radius: 20%;
  height: 25px;
  width: 30px;
  padding-bottom: 25px;
  padding-right: 25px;
`;

const MyButton2 = styled(MyButton)`
  border: 2px solid #f5e941;
  border-radius: 20%;
  width: 35px;
  padding-bottom: 25px;
  padding-right: 23px;
  padding-left: 10px;
`;

const TodoItem = ({ id, todo, deleteItem, completeItem, shown }) => {
  return (
    <section className='item'>
      <li className={shown}>{todo}</li>
      <MyButton2 variant="danger" size="sm" id={id} data-tooltip="Удалить?" onClick={() => deleteItem(id)}>✖</MyButton2>
      <MyButton variant="success" size="sm" id={id} data-tooltip={shown === "active" ? "Завершить?" : "Восстановить?"} onClick={() => completeItem(id)}>{shown === "active" ? "✔" : "⟲"}</MyButton>
    </section>
  )
}

export default TodoItem;

