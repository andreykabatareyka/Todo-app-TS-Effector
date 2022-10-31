import {createEvent, createStore} from 'effector'

// Form text management

export const $text = createStore<string>('')

export const setText = createEvent<string>()

// On submit

export const onSubmit = createEvent()
