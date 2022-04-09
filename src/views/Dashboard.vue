<template>
  <main class="dashboard">
    <h1 class="page-title">Dashboard view</h1>

    <UserProfile :user="getMyProfile" />

    <div v-for="task in getTasks" :key="task.id" class="dashboard__tasks">
      <TaskItem :task="task" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import UserProfile from '@/components/user/UserProfile.vue'
import TaskItem from '@/components/task/TaskItem.vue'
import useUserStore from '@/store/user'
import useTaskStore from '@/store/task'

const { getMyProfile } = useUserStore()
const { getTasks } = useTaskStore()
</script>

<style lang="scss" scoped>
@import '@/assets/styles/views/Dashboard';
</style>
