<template>
  <Menu :moduleTree="moduleTree"></Menu>
  <router-view></router-view>
</template>
<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs } from 'vue'
import { getUserInfo, IUserInfo } from './service/user-info'
import { getMenuList, IModuleTree } from './service/menu'
import Menu from './components/menu/index.vue'

export default defineComponent({
  components: {
    Menu,
  },
  setup() {
    const state: { userInfo: IUserInfo; moduleTree: IModuleTree } = reactive({
      userInfo: { id: 0 },
      moduleTree: { children: [] },
    })
    onBeforeMount(() => {
      init()
    })
    const init = async () => {
      state.userInfo = await getUserInfo()
      state.moduleTree = await getMenuList(state.userInfo.id)
    }
    return { ...toRefs(state) }
  },
})
</script>
<style lang="stylus" scoped></style>
