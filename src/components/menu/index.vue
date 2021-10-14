<template>
  <n-menu @update:value="handleUpdateValue" :options="menuOptions"></n-menu>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { menuOptions } from './common'
export default defineComponent({
  setup() {
    return menuOptions
  },
})
</script>
<style lang="stylus" scoped></style>
