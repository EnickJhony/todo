import { Circle, Trash } from 'phosphor-react'
import styles from './Card.module.css'
import { useState } from 'react'
import { Task } from '../App'

export function Card(props: Task) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div className={styles.card}>
      <a
        href="#"
        className={`${styles.circle} ${isHovered ? styles.hovered : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Circle size={20} weight={isHovered ? 'duotone' : 'regular'} />
      </a>
      <p>{props.content}</p>
      <a href="#" className={styles.trash}>
        <Trash size={20} />
      </a>
    </div>
  )
}
