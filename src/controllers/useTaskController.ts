import api from '@/services/api'
import { TaskToAdd, TaskPublicInfo } from '@/types/task.model'
import useTaskStore from '@/store/task'

const { addTask, setTasks } = useTaskStore()

const fetchTasks = async (limit: number) => {
  return await api.get<{ tasks: Array<TaskPublicInfo> }>('tasks', { params: { limit } }).then((response) => {
    setTasks(response.data.tasks)
    return response
  })
}

const createTask = async (data: TaskToAdd) => {
  return await api.post<TaskPublicInfo>('tasks', data).then((response) => {
    addTask(response.data)
    return response
  })
}

export default function useTaskController() {
  return {
    fetchTasks,
    createTask,
  }
}
