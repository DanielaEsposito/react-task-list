import { useState } from 'react'
import './App.css'

function App() {
  const tasks = [
    {
      id: 1,
      title: "Implementare la homepage",
      priority: 1,
      estimatedTime: 120,
      state: "completed"
    },
    {
      id: 2,
      title: "Sviluppare il menu di navigazione",
      priority: 2,
      estimatedTime: 60,
      state: "completed"
    },
    {
      id: 3,
      title: "Creare il footer del sito",
      priority: 3,
      estimatedTime: 30,
      state: "completed"
    },
    {
      id: 4,
      title: "Ottimizzare le performance",
      priority: 1,
      estimatedTime: 180,
      state: "completed"
    },
    {
      id: 5,
      title: "Scrivere test per i componenti",
      priority: 2,
      estimatedTime: 90,
      state: "completed"
    },
    {
      id: 6,
      title: "Implementare la pagina dei contatti",
      priority: 3,
      estimatedTime: 60,
      state: "completed"
    },
    {
      id: 7,
      title: "Aggiungere animazioni CSS",
      priority: 2,
      estimatedTime: 30,
      state: "backlog"
    },
    {
      id: 8,
      title: "Integrare l'API di autenticazione",
      priority: 1,
      estimatedTime: 120,
      state: "in_progress"
    },
    {
      id: 9,
      title: "Aggiornare la documentazione",
      priority: 3,
      estimatedTime: 60,
      state: "backlog"
    },
    {
      id: 10,
      title: "Rifattorizzare il codice CSS",
      priority: 2,
      estimatedTime: 90,
      state: "in_progress"
    }
  ];
  
  console.log(tasks);

  const currentTasksSearched = tasks.filter((task) => task.state !== "completed")
  //console.log(currentTasks);
  const currentTasks = ()=>(
     currentTasksSearched.map((task)=>(
      <ul key={task.id} >
        <li calssName= "fw-bold">{task.title} <span calssName="badge text-bg-primary">{task.state}</span></li>
        <li>Priority: {task.priority}</li>
        <li>Est.time:{task.estimatedTime}</li>
      </ul>
        
      ))
    
  )
  console.log(currentTasks());
  
  const completedTasksSearched = tasks.filter((task) => task.state === "completed")
  //console.log(currentTasks);
  const completedTasks = ()=>(
     completedTasksSearched.map((task)=>(
      <ul key={task.id} >
        <li calssName= "fw-bold">{task.title} <span calssName="badge text-bg-primary">{task.state}</span></li>
        <li>Priority: {task.priority}</li>
        <li>Est.time:{task.estimatedTime}</li>
      </ul>
        
      ))
    
  )
  
  return (<>
  <header calssName="header">
   <div className="container">
   <h1>TASK LIST</h1>
   </div>
  </header>
  <div className="container">
    <h2>CURRENT TASKS</h2>
    <div className="container">
    {currentTasks()}
    </div>
   
    <h2>COMPLETED TASKS</h2>
    <div className="container">
    {completedTasks()}
    </div>
    
  </div>
  
  </>
  )
  
}

export default App
