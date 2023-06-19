import {v4 as uuidv4} from 'uuid';
import './global.css';
import styles from './App.module.css';
import { Header } from './components/Header';
import { TaskCreator } from './components/TaskCreator';
import { Tasks } from './components/Tasks';
import { useState } from 'react';

export interface TaskType {
  id: string;
  name: string;
  completed: boolean;
};

const tasks: TaskType[] = [
  {
    id: uuidv4(),
    name: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    completed: true
  },
];

function App() {
  const [tasksList, setTasksList] = useState(tasks);

  const onCreateNewTask = (taskName: string) => {
    setTasksList([...tasksList, {
      id: uuidv4(),
      name: taskName,
      completed: false
    }]);
  };

  const onChangeTasks = (tasks: TaskType[]) => {
    setTasksList(tasks);
  };

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <TaskCreator onCreateTask={onCreateNewTask} />
          <Tasks 
            onChangeTasks={onChangeTasks}
            tasks={tasksList}
          />
        </main>
      </div>
    </>
  )
}

export default App
