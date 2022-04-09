import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { paths } from '@/router/paths'
import useUserAuthentificationController from '@/controllers/useUserAuthentificationController'
import { UserToLogin } from '@/types/user.model'

export default function useLogin() {
  const auth = useUserAuthentificationController()
  const router = useRouter()

  const user = reactive<UserToLogin>({
    email: '',
    password: '',
    rememberMe: false,
  })

  const clear = () => {
    user.email = ''
    user.password = ''
    user.rememberMe = false
  }

  const validate = (user: UserToLogin) => {
    return user.password.length >= 6 && user.email
  }

  const login = async () => {
    if (validate(user)) {
      try {
        await auth.login(user)
        router.push(paths.dashboard)
      } catch {
        clear()
      }
    }
  }

  return {
    user,
    login,
    clear,
  }
}
