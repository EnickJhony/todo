import LogoTodo from './assets/logo.svg'
import styles from './App.module.css'
import './global.css'

export default function App() {
  return (
    <main>
      <header className={styles.header}>
        <img src={LogoTodo} alt="Logo Ignite Todo" />
      </header>
    </main>
  )
}
