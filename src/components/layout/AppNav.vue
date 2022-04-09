<template>
  <nav class="nav">
    <template v-if="isAuthenticated">
      <router-link class="nav-item" :to="{ name: 'Dashboard' }">Dashboard</router-link>
      <router-link class="nav-item" :to="{ name: 'TaskCreate' }">Create Task</router-link>
      <button class="nav-item logout-button" @click="logout">Log out</button>
    </template>
  </nav>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { paths } from '@/router/paths'
import useAuthStore from '@/store/auth'
import useUserAuthentificationController from '@/controllers/useUserAuthentificationController'

const router = useRouter()
const { isAuthenticated } = useAuthStore()
const authController = useUserAuthentificationController()

const logout = () => {
  authController.logout()
  router.push(paths.login)
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/layout/AppNav';
</style>
