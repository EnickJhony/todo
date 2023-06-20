import LogoTodo from './assets/logo.svg'
import { PlusCircle } from 'phosphor-react'
import styles from './App.module.css'
import './global.css'

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
      </div>
    </main>
  )
}
