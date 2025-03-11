import { createContext, ReactNode, useEffect, useState } from 'react'

export interface newTask {
  id: number
  description: string
  done: boolean
}

interface TaskContextType {
  tasks: newTask[]
  setTasks: React.Dispatch<React.SetStateAction<newTask[]>>
}
interface TaskContextProviderProps {
  children: ReactNode
}

export const TaskContext = createContext({} as TaskContextType)
export function TaskProvider({ children }: TaskContextProviderProps) {
  const [tasks, setTasks] = useState<newTask[]>([])

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]')
    setTasks(storedTasks)
  }, [])

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  )
}
