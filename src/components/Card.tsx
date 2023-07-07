import { Trash } from 'phosphor-react'
import styles from './Card.module.css'

interface CardProps {
  content: string
  id: string
  isCompleted: boolean
  onDeleteTask: (id: string) => void
}

export function Card({ content, id, onDeleteTask }: CardProps) {
  function handleDeleteTask(id: string) {
    onDeleteTask(id)
  }

  return (
    <div className={styles.card}>
      <input className={styles.checkbox} type="checkbox" />
      <p>{content}</p>
      <button
        title="Deletar Task!"
        className={styles.trash}
        onClick={() => handleDeleteTask(id)}
      >
        <Trash size={20} />
      </button>
    </div>
  )
}
