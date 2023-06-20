import clipboard from '../assets/Clipboard.png'
import styles from './EmptyCard.module.css'

export function EmptyCard() {
  return (
    <div className={styles.emptyCard}>
      <img src={clipboard} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
