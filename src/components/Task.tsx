import styles from './Task.module.css';
import {TaskType} from '../App';
import { Trash } from 'phosphor-react';

interface TasksProps {
  task: TaskType;
  onChangeTaskState: (id: string) => void;
}

export function Task({ task, onChangeTaskState }: TasksProps) {

  const handleTaskStateChange = () => {
    console.log('teste', task.id);
    onChangeTaskState(task.id);
  };

  return (
    <li className={styles.task}>
      <input 
        type="checkbox" 
        id={`task-${task.id}`} 
        name={`task-${task.id}`} 
        value={styles.id} 
        checked={task.completed}
        onChange={handleTaskStateChange}
      />
      <span className={task.completed ? styles.taskCompleted : ''}>{task.name}</span>
      <button>
        <Trash size={14}/>
      </button>
    </li>
  )
}