import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux'

function App() {
    const [data, SetData] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.todos);

    function addtodo(e) {
        e.preventDefault();
        dispatch({type: 'todo/addtodo', payload: data})
        SetData('');
    }
  return <div>
    <form onSubmit={addtodo}>
        <input type="text" value={data} onChange={(e) => SetData(e.target.value)} />
        <button >Add Todo</button>

    </form>
    <ol>
        { 
            todos.map((todo) => <li key={todo.id} onClick={()=> dispatch({type: 'todo/removeSingleTodo', payload: todo.id})} >{todo.text}</li>)
        }
    </ol>
  </div>;
}

export default App;
