import React, { useState, useEffect } from 'react';
import { TodoList } from '../components/TodoList';
import MyButton from '../components/MyButton';
import '../App.css';
import { MySelect } from '../components/MySelect';
import { TodoInput } from '../components/TodoInput';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ADD_TODO, CHANGE_LIST, DELETE_TODO, COMPLETE_TODO } from '../utils/constants.js';


export function Todo() {
  const [item, setItem] = useState("");

  const dispatch = useDispatch();
  const listOfTodo = useSelector(state => state.listOfTodos);
  const shown = useSelector(state => state.shown);
  console.log(listOfTodo);

  function handleChange(event) {
    dispatch({ type: CHANGE_LIST, shown: event.target.value })
  }

  const delItem = (id) => {
    dispatch({ type: DELETE_TODO, id: id })
  }

  const complItem = (id) => {
    dispatch({ type: COMPLETE_TODO, id: id })
  }

  const setList = () => {
    dispatch({ type: ADD_TODO, item: item });
    setItem("");
  }

  return (
    <>
      <section className='main'>
        <TodoInput setItem={setItem} setList={setList} shown={shown} item={item} />
        <MyButton set={setList} item={item} />
        <MySelect shown={shown} handleChange={handleChange} />
      </section>
      <TodoList list={listOfTodo} deleteItem={delItem} completeItem={complItem} shown={shown} />
    </>
  )
}
