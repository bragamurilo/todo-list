import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './TaskCreator.module.css';
import { PlusCircle } from 'phosphor-react';

interface TaskCreatorProps {
  onCreateTask: (name: string) => void;
}

export function TaskCreator({ onCreateTask }: TaskCreatorProps) {

  const [taskNameText, setTaskNameText] = useState('');

  const handleCreateNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskNameText(event.target.value);
  };

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();
    onCreateTask(taskNameText);
    setTaskNameText('');
  }

  return (
    <form className={styles.taskCreatorForm} onSubmit={handleCreateNewTask}>
      <input 
        type='text' 
        name='task' 
        id='task' 
        placeholder='Adicione uma nova tarefa'
        value={taskNameText}
        onChange={handleCreateNewTaskChange}
      />

      <button type='submit' disabled={taskNameText.length === 0}>
        Criar
        <PlusCircle size={16}/>
      </button>
    </form>
  )
}