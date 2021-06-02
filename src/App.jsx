import React,{useState} from 'react';
import ToDo from "./ToDo";

const App = () => {


  let[item,setItem]= useState([]);
  let [curText, setText]=useState("");

  const inputText=(event)=>{
    setText(event.target.value);
  };

  const display=(event)=>{
    event.preventDefault();

    setItem((oldValue)=>{
      return [...oldValue,curText];
    });
    setText("");

  };

  const deleteItem = (id) => {
    console.log('Deleted');
    setItem((oldValue)=>{
      return oldValue.filter((arrElement, index)=>{
        return index !==id
        
      })
    })
  };

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>ToDo List </h1>
          <br />
          <input type="text" placeholder="Add Items " onChange={inputText}
            value={curText}
          />
          <button onClick={display}>+</button>
          <ol>

            {item.map((itemval, index)=>{
              return (
                <ToDo 
                text={itemval} 
                key={index} 
                id={index}
                onSelect={deleteItem}
                />

            );

            })}
          
          
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
