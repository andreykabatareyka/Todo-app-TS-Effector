import {ReactNode} from 'react'
import styles from './Button.module.css'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  disabled?: boolean
}

export default function Button(props: Props) {
  const {children, disabled = false} = props

  return (
    <button {...props} className={styles.button} disabled={disabled}>
      {children}
    </button>
  )
}
