import {sample} from 'effector'
import {$text, onSubmit, setText} from '.'

sample({
  clock: setText,
  target: $text,
})

$text.reset(onSubmit)
