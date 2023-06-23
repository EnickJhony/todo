// import { EmptyCard } from './components/EmptyCard'

import LogoTodo from './assets/logo.svg'
import { PlusCircle } from 'phosphor-react'
import styles from './App.module.css'
import './global.css'
import { Card } from './components/Card'

export default function App() {
  return (
    <main>
      <header className={styles.header}>
        <img src={LogoTodo} alt="Logo Ignite Todo" />
      </header>
      <div className={styles.wrapper}>
        <form className={styles.newTask}>
          <textarea name="task" placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            Criar
            <PlusCircle size={20} />
          </button>
        </form>
        <div className={styles.taskInfo}>
          <div className={styles.taskCount}>
            <p>Tarefas criadas</p> <span>20</span>
          </div>
          <div className={styles.taskDone}>
            <p>Concluídas</p> <span>10 de 20</span>
          </div>
        </div>
        <Card />
        {/* <EmptyCard /> */}
      </div>
    </main>
  )
}
