<template>
  <div v-if="task" class="task-item">
    <div class="task-item__content">
      <div class="task-item__proposal-count">{{ task.proposalCount }}</div>
      <div class="task-item__info">
        <div class="task-item__title">{{ task.title }}</div>
        <div class="task-item__description">{{ task.description }}</div>
      </div>
      <div class="task-item__budget">${{ task.budget.value }}</div>
    </div>
    <div class="task-item__footer">
      <span v-for="platform of task.platforms" :key="platform" class="task-item__platform">{{ platform }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, defineProps } from 'vue'
import { TaskPublicInfo } from '@/types/task.model'
defineProps({
  task: {
    type: Object as PropType<TaskPublicInfo>,
    default: undefined,
  },
})
</script>
<style lang="scss" scoped>
@import '@/assets/styles/components/task/TaskItem';
</style>
