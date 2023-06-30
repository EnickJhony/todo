import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Card } from './components/Card'
import { EmptyCard } from './components/EmptyCard'
import LogoTodo from './assets/logo.svg'
import { PlusCircle } from 'phosphor-react'

import styles from './App.module.css'
import './global.css'

export interface Task {
  id: string
  content: string
  isCompleted: boolean
}

const tasks: Task[] = [
  {
    id: uuid(),
    content: 'Estudar React',
    isCompleted: false
  }
]

export default function App() {
  const [task, setTask] = useState(tasks)

  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask() {
    event?.preventDefault()

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

  function newTaskChange() {
    setNewTaskText(event.target.value)
  }

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
            onChange={newTaskChange}
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
            <p>Concluídas</p> <span>10 de {task.length}</span>
          </div>
        </div>

        {tasks.length <= 0 ? (
          <EmptyCard />
        ) : (
          task.map(task => {
            return (
              <Card
                key={task.id}
                id={task.id}
                content={task.content}
                isCompleted={task.isCompleted}
              />
            )
          })
        )}
      </div>
    </main>
  )
}
