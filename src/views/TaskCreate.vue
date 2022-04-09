<template>
  <main class="task-create">
    <h1 class="page-title">Task Create view</h1>

    <form class="task-create-form" @submit.prevent="createTask">
      <label class="label">
        Title:
        <input v-model="task.title" class="text-input" type="text" />
      </label>

      <label class="label">
        Description:
        <textarea v-model="task.description" class="textarea-input"></textarea>
      </label>

      <label class="label">
        Budget:
        <input v-model="task.budget.value" class="text-input" type="number" />
      </label>

      <label class="label">
        Platforms:
        <label v-for="platform in Platform" :key="platform" class="checkbox-label">
          <input v-model="task.platforms" :value="platform" class="checkbox" type="checkbox" /> {{ platform }}
        </label>
      </label>

      <button class="button">Create Task</button>
    </form>
  </main>
</template>

<script lang="ts" setup>
import { Platform } from '@/types/platform.model'
import useTask from '@/components/task/task'

const { task, createTask } = useTask()
</script>

<style lang="scss" scoped>
@import '@/assets/styles/views/TaskCreate';
</style>
