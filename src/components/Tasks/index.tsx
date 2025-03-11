import { useContext } from 'react'
import { Task } from '../Task'
import { EmptyTaskContainer, TasksContainer } from './styles'
import { ClipboardText } from 'phosphor-react'
import { TaskContext } from '../../contexts/TaskContext'

export function Tasks() {
  const { tasks } = useContext(TaskContext)
  const tasksDone = tasks.filter((task) => task.done).length

  return (
    <TasksContainer>
      <header>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasks.length}</span>
        </div>
        <div>
          <p>Concluídas</p>
          <span>
            {tasksDone} de {tasks.length}
          </span>
        </div>
      </header>
      {tasks.length > 0 ? (
        <Task />
      ) : (
        <EmptyTaskContainer>
          <ClipboardText size={56} />
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>{' '}
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </EmptyTaskContainer>
      )}
    </TasksContainer>
  )
}
