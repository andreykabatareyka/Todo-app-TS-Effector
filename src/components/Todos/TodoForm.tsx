import {useStore} from 'effector-react'
import {$text, onSubmit, setText} from '../../models/todo-form'
import Button from '../UI/Button'
import styles from './TodoForm.module.css'

interface Props {
  addTodo: (text: string) => void
}
function TodoForm({addTodo}: Props) {
  const text = useStore($text)

  const onSubmitHandler = (event: any) => {
    event.preventDefault() // todo: move effector
    addTodo(text) // todo: move effector
    onSubmit()
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter new todo"
        />
        <Button type="submit" title="Submit">
          Submit
        </Button>
      </form>
    </div>
  )
}
export default TodoForm
