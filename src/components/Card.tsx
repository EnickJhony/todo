import { CheckCircle, Circle, Trash } from 'phosphor-react'
import styles from './Card.module.css'
import { useState } from 'react'

interface CardProps {
  content: string
  id: string
  isCompleted: boolean
  onDeleteTask: (id: string) => void
  onCheckbox: (id: string) => void
}

export function Card({
  content,
  id,
  isCompleted,
  onDeleteTask,
  onCheckbox
}: CardProps) {
  function handleDeleteTask(id: string) {
    onDeleteTask(id)
  }

  function handleCheckbox(id: string) {
    onCheckbox(id)
  }

  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div className={styles.card}>
      <button
        className={`${styles.checkbox} ${isHovered ? styles.hovered : ''}`}
        onClick={() => handleCheckbox(id)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isCompleted ? (
          <CheckCircle className={styles.circleHovered} size={20} weight={isHovered ? 'fill' : 'fill'} />
        ) : (
          <Circle size={20} weight={isHovered ? 'duotone' : 'regular'} />
        )}
      </button>

      {isCompleted ? (
        <p className={styles.notCompletedText}>{content}</p>
        ): (
        <p className={styles.completedText}>{content}</p>
      )}

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
