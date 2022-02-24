import TodoItem from './TodoItem';
import '../styles/TodoList.css';

export function TodoList({list, deleteItem, completeItem, shown}) {
  return (
    <ol>
      {list.map((item,index) => <TodoItem key={index} id={index} todo={item} deleteItem={deleteItem} completeItem={completeItem} shown={shown}/>)} 
    </ol>
  )
}
