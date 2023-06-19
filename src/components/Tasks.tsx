import styles from './Tasks.module.css';
import {TaskType} from '../App';
import {Task} from './Task';

interface TasksProps {
  tasks: TaskType[];
  onChangeTasks: (newTasks: TaskType[]) => void;
}

export function Tasks({ tasks, onChangeTasks }: TasksProps) {

  const completedTasksCount = () => {
    const completedTasks =  tasks.filter(task => task.completed).length;

    if (completedTasks > 0) {
      return `${completedTasks} de ${tasks.length}`;
    }

    return completedTasks;
  };

  const onChangeTaskStatus = (taskId: string) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed
        };
      }

      return task;
    });

    onChangeTasks(newTasks);
  };

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.createdTasks}>
          Tarefas criadas
          <span className={styles.badgeCount}>{tasks.length}</span>
        </div>
        <div className={styles.completedTasks}>
          Concluídas
          <span className={styles.badgeCount}>{completedTasksCount()}</span>
        </div>
      </header>

      <ul className={styles.tasksList}>
        {tasks.map(task => (
          <Task 
            key={task.id}
            task={task}
            onChangeTaskState={onChangeTaskStatus}
          />
        ))}
      </ul>
    </div>
  )
}