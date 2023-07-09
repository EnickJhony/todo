import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Card } from './components/Card'
import { EmptyCard } from './components/EmptyCard'
import LogoTodo from './assets/logo.svg'
import { PlusCircle } from 'phosphor-react'
import styles from './App.module.css'
import './global.css'

interface Task {
  id: string
  content: string
  isCompleted: boolean
}

export default function App() {
  const [task, setTask] = useState<Task[]>([])

  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTask([
      ...task,
      {
        id: uuid(),
        content: newTaskText,
        isCompleted: false
      }
    ])

    setNewTaskText('')
  }

  function newTaskTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTaskText(event.target.value)
  }

  function deleteTask(id: string) {
    const newTaskList = task.filter(task => task.id !== id)
    setTask(newTaskList)
  }

  function toggleTaskCompleted(id: string) {
    const tasksWithUpdatedCompletedStatus = task.map(task => {
      if (task.id === id) {
        const updatedTask = { ...task }
        updatedTask.isCompleted = !task.isCompleted
        return updatedTask
      }
      return task
    })
    setTask(tasksWithUpdatedCompletedStatus)
  }

  let count = 0
  task.forEach(task => {
    if (task.isCompleted === true) {
      count++
    }
  })

  return (
    <main>
      <header className={styles.header}>
        <img src={LogoTodo} alt="Logo Ignite Todo" />
      </header>
      <div className={styles.wrapper}>
        <form onSubmit={handleCreateNewTask} className={styles.newTask}>
          <textarea
            name="task"
            placeholder="Adicione uma nova tarefa"
            value={newTaskText}
            onChange={newTaskTextChange}
          />
          <button type="submit">
            Criar
            <PlusCircle size={20} />
          </button>
        </form>
        <div className={styles.taskInfo}>
          <div className={styles.taskCount}>
            <p>Tarefas criadas</p> <span>{task.length}</span>
          </div>
          <div className={styles.taskDone}>
            <p>Concluídas</p>{' '}
            <span>
              {count} de {task.length}
            </span>
          </div>
        </div>

        {task.length <= 0 ? (
          <EmptyCard />
        ) : (
          task.map(task => {
            return (
              <Card
                key={task.id}
                id={task.id}
                content={task.content}
                isCompleted={task.isCompleted}
                onDeleteTask={deleteTask}
                onCheckbox={toggleTaskCompleted}
              />
            )
          })
        )}
      </div>
    </main>
  )
}
