import React from 'react';

const ToDo = (props) => {

  return (
    <>
      <div className="todo_style">
      <i className="fa fa-times" araia-hidden="true" onClick={()=>{
        props.onSelect(props.id);
      }}></i>
        <li> {props.text} </li>
      </div>
    </>
  );
};

export default ToDo;
