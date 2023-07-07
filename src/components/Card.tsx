import { Trash } from 'phosphor-react'
import styles from './Card.module.css'
import { Task } from '../App'

export function Card({ content }: Task) {
  return (
    <div className={styles.card}>
      <input className={styles.checkbox} type="checkbox" />
      <p>{content}</p>
      <button title="Deletar Task!" className={styles.trash}>
        <Trash size={20} />
      </button>
    </div>
  )
}
