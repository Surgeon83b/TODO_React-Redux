import '../App.css';
import Button from 'react-bootstrap/Button';

const TodoItem = ({ id, todo, deleteItem, completeItem, shown }) => {
  return (
    <section className='item'>
      <li className={shown}>{todo}</li>
      <Button variant="danger" size="sm" id={id} data-tooltip="Удалить?" onClick={() => deleteItem(id)}>✖</Button>
      <Button variant="success" size="sm" id={id} data-tooltip={shown==="active" ? "Завершить?" : "Восстановить?"} onClick={() => completeItem(id)}>{shown==="active" ? "✔" : "⟲"}</Button>
    </section>
  )
}

export default TodoItem;

