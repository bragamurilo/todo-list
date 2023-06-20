import styles from './Task.module.css';
import { TaskType } from '../App';
import { Trash } from 'phosphor-react';
import { CheckBox } from './Checkbox';

interface TasksProps {
  task: TaskType;
  onChangeTaskState: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({ task, onChangeTaskState, onDeleteTask }: TasksProps) {

  const handleTaskStateChange = () => {
    onChangeTaskState(task.id);
  };

  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  return (
    <li className={styles.task}>
      <CheckBox 
        id={`task-${task.id}`} 
        name={`task-${task.id}`} 
        value={styles.id} 
        checked={task.completed}
        onChange={handleTaskStateChange}
      />
      <span className={task.completed ? styles.taskCompleted : ''}>{task.name}</span>
      <button onClick={handleDeleteTask}>
        <Trash size={14}/>
      </button>
    </li>
  )
}