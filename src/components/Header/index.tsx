import { ButtonContainer, FormContainer, HeaderContainer } from './styles'
import logo from '../../assets/Logo.png'
import { PlusCircle } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { TaskContext } from '../../contexts/TaskContext'

const TaskSchema = z.object({
  description: z.string(),
})

type TaskSchemaInputs = z.infer<typeof TaskSchema>
export function Header() {
  const { setTasks } = useContext(TaskContext)
  const { handleSubmit, register, reset } = useForm<TaskSchemaInputs>({
    resolver: zodResolver(TaskSchema),
  })

  function handleCreateTask(data: TaskSchemaInputs) {
    const existingTasks = JSON.parse(localStorage.getItem('tasks') || '[]')
    const newTask = {
      id: Math.random(),
      description: data.description,
      done: false,
    }

    const updatedTasks = [...existingTasks, newTask]
    setTasks(updatedTasks)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))

    reset()
  }

  return (
    <>
      <HeaderContainer>
        <img src={logo} alt="" />
        <FormContainer onSubmit={handleSubmit(handleCreateTask)} method="POST">
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            required
            {...register('description')}
          />
          <ButtonContainer type="submit">
            Criar <PlusCircle size={16} />
          </ButtonContainer>
        </FormContainer>
      </HeaderContainer>
    </>
  )
}
