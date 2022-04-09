<template>
  <AppNav />

  <router-view />
</template>

<script lang="ts" setup>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import useAuthStore from '@/store/auth'
import useResetStore from './store/reset'
import AppNav from './components/layout/AppNav.vue'
import { paths } from '@/router/paths'
import useUserAuthentificationController from '@/controllers/useUserAuthentificationController'
import useTaskController from '@/controllers/useTaskController'

const router = useRouter()
const { isAuthenticated } = useAuthStore()
const { reset } = useResetStore()
const { fetchProfile } = useUserAuthentificationController()
const { fetchTasks } = useTaskController()

if (!isAuthenticated.value && router.currentRoute.value.meta?.requiresAuth) {
  router.push(paths.login)
} else {
  fetchProfile()
  fetchTasks(5)
}

watch(isAuthenticated, (c) => {
  if (!c) {
    if (router.currentRoute.value.meta?.requiresAuth) {
      router.push(paths.login)
    }
    reset()
  }
})
</script>

<style lang="scss">
@import '@/assets/styles/reset';
@import '@/assets/styles/main';
</style>
