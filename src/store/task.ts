import { computed, Ref, ref } from 'vue'

import { TaskPublicInfo } from '@/types/task.model'

const tasks: Ref<Array<TaskPublicInfo>> = ref([])

export default function useUserStore() {
  const getTasks = computed(() => tasks.value)
  const setTasks = (data: Array<TaskPublicInfo>) => {
    tasks.value = data
  }

  const addTask = (data: TaskPublicInfo) => {
    tasks.value.unshift(data)
  }

  const removeTask = (id: string) => {
    tasks.value = tasks.value.filter((i) => i.id != id)
  }

  const reset = () => {
    setTasks([])
  }

  return {
    getTasks,
    setTasks,
    addTask,
    removeTask,
    reset,
  }
}
