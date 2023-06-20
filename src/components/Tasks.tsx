import styles from './Tasks.module.css';
import {TaskType} from '../App';
import {Task} from './Task';
import clipboardImg from '../assets/clipboard.svg';

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

  const handleDeleteTask = (taskId: string) => {
    const newTasks = tasks.filter(task => task.id !== taskId);

    onChangeTasks(newTasks);
  };

  const renderTaskList = () => {
    if (tasks.length > 0) {
      return (
        <ul className={styles.tasksList}>
          {tasks.map(task => (
            <Task 
              key={task.id}
              task={task}
              onChangeTaskState={onChangeTaskStatus}
              onDeleteTask={handleDeleteTask}
            />
          ))}
      </ul>
      );
    }

    return (
      <div className={styles.noTasks}>
        <img src={clipboardImg} alt='Logo To Do List' />
        <h2>
          Você ainda não tem tarefas cadastradas
        </h2>
        <h3>
          Crie tarefas e organize seus itens a fazer
        </h3>
      </div>
    );
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

      {renderTaskList()}
    </div>
  )
}