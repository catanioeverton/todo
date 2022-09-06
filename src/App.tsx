import { Header } from './Pages/Header';
import { Container } from './Pages/Home';
import { TaskList } from './components/TaskList';

import './global.css';

export function App() {

  return (
    <div>
      <Header />
      <Container />     
      <TaskList  />

      <TaskList  />
    </div>
  )
}

