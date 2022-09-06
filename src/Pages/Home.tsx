import './Home.css';

import { TaskList } from '../components/TaskList';
import { useState } from 'react';

const tasks = [
    
]


interface User {
    studentName: string;
}

export function Container() {
    const [ tasks, setTasks] = useState([
        'Teste '
    ])  

    const [newTask, setNewTask] = useState('')


    function handleCreateNewTask () {
        event?.preventDefault()

        setTasks([...tasks, newTask]);
        setNewTask('');
        

    }

    return (
        <form onSubmit={ handleCreateNewTask} className="container">
            <textarea
                name="tasks" 
                placeholder="Digite sua tarefa" 
                value={newTask}
                onChange={handleCreateNewTask}
            />
            <button type="button">Adicionar</button>            
        </form>
        
    )
}

