import { Circle, Trash } from 'phosphor-react'
import styles from './Card.module.css'
import { useState } from 'react'

export function Card() {
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
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam dicta ad
        sequi repudiandae cumque nostrum atque sit placeat, accusamus ex
        mollitia delectus impedit ullam, optio saepe quam numquam consequuntur
        suscipit!
      </p>
      <a href="#" className={styles.trash}>
        <Trash size={20} />
      </a>
    </div>
  )
}
