import styled from 'styled-components';

const MyInput = styled.input`
::placeholder {
  color: red;
}
`;

export const TodoInput = ({ setItem, setList, shown, item }) => {
  return (
    <MyInput placeholder="Введите задачу" id="todo_item"
      onChange={(e) => setItem(e.target.value)}
      onKeyUp={(e) => (e.which === 13) && item && setList()}
      value={item}
      disabled={shown == 'completed' || shown == 'deleted'}>
    </MyInput>
  )
}
