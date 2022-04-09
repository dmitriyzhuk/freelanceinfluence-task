import { computed, Ref, ref } from 'vue'

const platforms: Ref<Array<string>> = ref([])

export default function useUserStore() {
  const getPlatforms = computed(() => platforms.value)
  const setPlatforms = (data: Array<string>) => {
    platforms.value = data
  }

  const reset = () => {
    setPlatforms([])
  }

  return {
    getPlatforms,
    setPlatforms,
    reset,
  }
}
