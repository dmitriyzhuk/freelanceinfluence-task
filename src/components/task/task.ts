import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { paths } from '@/router/paths'
import useTaskController from '@/controllers/useTaskController'
import { TaskToAdd } from '@/types/task.model'
import { Currency } from '@/types/money.model'
import { Platform } from '@/types/platform.model'

export default function useTask() {
  const taskController = useTaskController()
  const router = useRouter()

  const task = reactive<TaskToAdd>({
    title: '',
    description: '',
    budget: {
      value: 0,
      currency: Currency.USD,
    },
    platforms: [...Object.values(Platform)],
    filesIds: [],
  })

  const clear = () => {
    task.title = ''
    task.description = ''
    task.budget.value = 0
    task.platforms = [...Object.values(Platform)]
    task.filesIds = []
  }

  const validate = (task: TaskToAdd) => {
    return task.title && task.description && task.budget.value >= 100 && task.platforms.length >= 1
  }

  const createTask = async () => {
    if (validate(task)) {
      try {
        await taskController.createTask(task)
        router.push(paths.dashboard)
      } catch {
        clear()
      }
    } else {
      console.log('error with task', task)
    }
  }

  return {
    task,
    createTask,
    clear,
  }
}
