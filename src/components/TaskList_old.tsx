import { useState } from 'react';

import './TaskList.css';

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function TaskList() {
  
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  function handleCreateNewTask() {
    if(!newTaskTitle) return;

    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false,    
    }
    setTasks(oldState => [...oldState, newTask]);
    setNewTaskTitle('');
  }


}