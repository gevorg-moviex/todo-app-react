import { useState, useCallback, useReducer } from 'react'
import './App.css'
import Items from './Components/tasks/tasks'
import InputBlock from './Components/input_block/input_block';

function reducer(state, action){
  if (action.type == "add"){
    return [
      ...state,
      {
        text: action.payload.text,
        id: action.payload.id
      }
    ]
  } else if (action.type == "delete"){
    return state.filter((task) => task.id !== action.payload.id);
  }
}

function App() {
  const [text, setText] = useState("")
  const [tasks, dispatch] = useReducer(reducer, [])
  const [count, setCount] = useState(0)
  
  console.log(tasks);
  const handleDelete = useCallback((id) => {
    dispatch({
      type: 'delete',
      payload: { id }
    });
  }, [])

  const addTask = useCallback(() => {
    console.log("Task added:", text);
    const newId = count + 1;
    dispatch({
      type: "add",
      payload: {
        id: newId,
        text: text
      }
    })
    setCount(newId);
    setText("");
  }, [text]);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addTask();
    }
  }, [addTask]);

  return (
    <>
      <InputBlock text={text} setText={setText} addTask={addTask} handleKeyDown={handleKeyDown} />
      <Items tasks={tasks} onDelete={handleDelete} />
    </>
  )
}

export default App
