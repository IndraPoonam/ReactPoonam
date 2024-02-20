// import React, { useState } from 'react'

// function Todo2() {
//     const[data,setData]=useState(1)

//     const handleReset = () => {
//         setData(); 
//       };
//   return (
//     <>
// <h1>TODO EFFECT={data}</h1>    
// <button onClick={()=>setData(data +1)}>Add</button>
// <button onClick={handleReset}>Delete</button>
//      </>
//   )
// }

// export default Todo2


// import React, { useState } from 'react';

// function Todo2() {
//   const [tasks, setTasks] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleAddTask = () => {
//     if (inputValue.trim() !== '') {
//       setTasks([...tasks, inputValue]);
//       setInputValue('');
//     }
//   };

//   const handleDeleteTask = (index) => {
//     const newTasks = tasks.filter((task, i) => i !== index);
//     setTasks(newTasks);
//   };

//   return (
//     <center>
//     <div>
//       <h1>Todo List</h1>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Add a new task"
//       />
//       <button onClick={handleAddTask}>Add Task</button>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>
//             {task}
//             <button onClick={() => handleDeleteTask(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//     </center>
//   );
// }

// export default Todo2;



import React, {useState}  from  'react'

function Todo2() {
  const [inputval, setInputVal]=useState('')
  const [inputArr, setInputArr]=useState([]);
  const addItems=()=>{
    if(!inputval){
   alert("please give me some data");
  }
  else{
    setInputArr([...inputArr,inputval])
    setInputVal('');
  }
}
const DeleteItem=(id)=>{
  
const newArr=inputArr.filter((val,ind)=>{
  return id!==ind
})
setInputArr(newArr);
}
const colorChange=()=>{
  if(inputval==="suryanshu"){
  
    
   
  }
}
const deleteallelement=()=>{

  setInputArr([]);
}
const editTask = (value,index) => {
  inputval(value[index]);
  setInputArr(index);
};
  return (
    <>
    <div style={{textAlign: "center"}}>
      <div>
      TODO APP <br/>
      <input type='text' value={inputval}
      onChange={(e)=>{setInputVal(e.target.value)}}
     
      />
      <button onClick={addItems}>ADD</button>
      <button onClick={()=>colorChange()}>magic button</button>
      
    </div>
    <div>
      <ul>
        {
          inputArr.map((val,ind)=>{
            return <li key={ind}>{val} <button onClick={()=>DeleteItem(ind)}>DELETE</button></li>
            
          })
          
        }
         <button onClick={()=>deleteallelement()}>DeleteAll</button>
         <button onClick={()=>editTask()}>EDIT ELEMENT</button>
       

      </ul>
     
    </div>
   
    </div>
    

    </>
    
    
   
    
    
    
  )
}

export default Todo2;
