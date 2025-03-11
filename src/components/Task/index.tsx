import { CheckCircle, Trash } from 'phosphor-react'
import {
  ButtonCheckBox,
  ButtonDelete,
  StrikedSpan,
  TaskContentContainer,
} from './styles'
import { useContext, useEffect } from 'react'
import { newTask, TaskContext } from '../../contexts/TaskContext'

export function Task() {
  const { setTasks, tasks } = useContext(TaskContext)

  function handleComplete(id: number) {
    const task = tasks.find((task) => task.id === id)

    if (task) {
      task.done = true
      localStorage.setItem('tasks', JSON.stringify(tasks))
      const existingTasks = JSON.parse(localStorage.getItem('tasks') || '[]')
      setTasks(existingTasks)
    } else {
      console.log('task nao encontrada')
    }
  }

  function handleDelete(id: number) {
    const task = tasks.find((task) => task.id === id)
    const existingTasks = JSON.parse(localStorage.getItem('tasks') || '[]')

    if (task) {
      const updatedTasks = existingTasks.filter(
        (task: newTask) => task.id !== id,
      )
      localStorage.setItem('tasks', JSON.stringify(updatedTasks))

      console.log(`Task ${id} deleted`)
      setTasks(updatedTasks)
    } else {
      console.log('task nao encontrada')
    }
  }
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]')
    setTasks(storedTasks)
  }, [setTasks])
  return (
    <>
      {tasks.map((task) => {
        return task.done ? (
          <TaskContentContainer key={task.id}>
            <CheckCircle size={24} weight="duotone" />
            <StrikedSpan>{task.description}</StrikedSpan>
            <ButtonDelete onClick={() => handleDelete(task.id)}>
              <Trash size={24} />
            </ButtonDelete>
          </TaskContentContainer>
        ) : (
          <TaskContentContainer key={task.id}>
            <ButtonCheckBox
              onClick={() => handleComplete(task.id)}
            ></ButtonCheckBox>
            <p>{task.description}</p>
            <ButtonDelete onClick={() => handleDelete(task.id)}>
              <Trash size={24} />
            </ButtonDelete>
          </TaskContentContainer>
        )
      })}
    </>
  )
}
