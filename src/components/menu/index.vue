<template>
  <n-menu :options="options"></n-menu>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { IModuleTree } from '../../service/menu'

export default defineComponent({
  name: 'Menu',
  props: {
    moduleTree: {
      type: Object,
      default: { children: [] },
    },
  },
  setup(props) {
    const processModuleTree = (moduleTree: IModuleTree[]) => {
      return moduleTree
        .filter((item) => item.status && !item.moduleType)
        .map((item) => {
          item = Object.assign({}, item)
          if (item.children) {
            item.children = processModuleTree(item.children)
          }
          return {
            label: item.label,
            key: item.id,
            children: item.children,
          }
        })
    }
    const options = processModuleTree(props.moduleTree.children)
    return { options }
  },
})
</script>
<style lang="stylus" scoped></style>
