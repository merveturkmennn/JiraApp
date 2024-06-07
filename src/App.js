import './App.css';
import { useState } from "react";
import React from 'react';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
export function App() {
  const [tasks, setTasks] = useState([]);
  const createTask=(title,taskDesc)=>{
   const createdTasks=[
    ...tasks,{
      id:Math.round(Math.random()*999999),
      title:title,
      taskDesc:taskDesc
    }
   ];
   setTasks(createdTasks);
  };
  const deleteTaskById =(id)=>{
  const afterDeletedTask= tasks.filter((task)=>{
    return task.id !== id ;
    
   });
   setTasks(afterDeletedTask);
  }
  const editTaskById =(id,updatedTitle,updatedTaskDesc)=>{
   const updatedTasks= tasks.map((task)=>{
      if(task.id ===id){
        return {
        id:id,
        title:updatedTitle,
        taskDesc:updatedTaskDesc}
      }else {
        return task;
      }
   })
   setTasks(updatedTasks);
     };
  
  return (
  <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>GÖREVLER</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById} />
    </div>
  );
}
export default App;