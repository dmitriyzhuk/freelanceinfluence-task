import api from '@/services/api'

const fetchPlatforms = async () => {
  return await api.get<Array<string>>('platforms').then((response) => {
    console.log(response)
    return response
  })
}

export default function usePlatformController() {
  return {
    fetchPlatforms,
  }
}
