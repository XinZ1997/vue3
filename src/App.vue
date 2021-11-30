<template>
  <router-view></router-view>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import { getUserInfo } from './service/user-info'
import { getMenuList } from './service/menu'

export default defineComponent({
  setup() {
    const state = reactive({
      userInfo: {},
      menuList: [],
    })
    let userInfo = reactive({ id: '' })
    let menuList = reactive({})
    onMounted(() => {
      init()
    })
    const init = async () => {
      state.userInfo = await getUserInfo()
      state.menuList = await getMenuList(userInfo.id)
    }

    return { userInfo, menuList }
  },
})
</script>
<style lang="stylus" scoped></style>
