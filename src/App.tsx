import { Card } from './components/Card'
import { EmptyCard } from './components/EmptyCard'

import LogoTodo from './assets/logo.svg'
import { PlusCircle } from 'phosphor-react'
// import { v4 as uuid } from 'uuid'

import styles from './App.module.css'
import './global.css'
import { useState } from 'react'

// export interface Task {
//   id: string
//   content: string
//   isCompleted: boolean
// }

// const tasks: Task[] = [
//   {
//     id: uuid(),
//     content: 'Terminar o desafio!',
//     isCompleted: false
//   },
//   {
//     id: uuid(),
//     content: 'Nova tarefa!',
//     isCompleted: false
//   }
// ]

export default function App() {
  const [taskTest, setTaskTest] = useState([])

  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask() {
    event?.preventDefault()
    setTaskTest([...taskTest, newTaskText])
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
            <p>Tarefas criadas</p> <span>{taskTest.length}</span>
          </div>
          <div className={styles.taskDone}>
            <p>Concluídas</p> <span>10 de {taskTest.length}</span>
          </div>
        </div>

        {taskTest.length <= 0 ? (
          <EmptyCard />
        ) : (
          taskTest.map(taskt => {
            return <Card key={taskt} content={taskt} />
          })

          // tasks.map(task => {
          //   return (
          //     <Card
          //       key={task.id}
          //       id={task.id}
          //       content={task.content}
          //       isCompleted={task.isCompleted}
          //     />
          //   )
          // })
        )}
      </div>
    </main>
  )
}
