<template>
  <div v-if="user" class="user-profile">
    <div class="user-profile__heading">User Profile:</div>
    <div class="user-profile__name">
      <span class="user-profile__label">marketer:</span> {{ user.marketer.firstName }} {{ user.marketer.lastName }}
    </div>
    <div class="user-profile__name">
      <span class="user-profile__label">influencer:</span> {{ user.influencer.firstName }}
      {{ user.influencer.lastName }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, defineProps } from 'vue'
import { UserPublicInfo } from '@/types/user.model'
defineProps({
  user: {
    type: Object as PropType<UserPublicInfo>,
    default: undefined,
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/user/UserProfile';
</style>
