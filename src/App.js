import { useReducer, useState } from 'react';
import './App.css';
import {todoList} from './config';
import {reducer} from './reducer'

function App() {
  const [inputValue,setInputValue] = useState('');

  const [state, dispatch] = useReducer(reducer,todoList);

  const createTodo = () => {
    if(inputValue){
      dispatch({type:'addTodo',value:inputValue});
      setInputValue('')
    }
  }

  const handler = (type,value,elType,index) =>{
    dispatch({type,value,elType,index})
  }

  return (
    <>
      <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
      <button onClick={createTodo}>新增</button>
      <ul className="listUl">
        {Object.keys(state).map((list,index)=>(
           <div className="listLi" key={index}>
            <h1>{list}</h1>
            <li>
                {state[list].map((item,i)=>(
                  <div key={i}>
                    <div>
                      <div className="listItem">
                        {item}
                      </div>
                      <div className="listItem action">
                        {list === 'todo' && <button onClick={()=>{handler('toDoing',item,list,i)}}>
                          to doing
                        </button>}
                        {list === 'doing' && <button onClick={()=>{handler('toDone',item,list,i)}}>
                          to done
                        </button>}
                        {list !== 'delete' && <button onClick={()=>{handler('delete',item,list,i)}}>
                          delete
                        </button>}
                      </div>
                    </div>
                  </div>
                ))}
            </li>
           </div>
        ))}
      </ul>
    </>
  );
}

export default App;
