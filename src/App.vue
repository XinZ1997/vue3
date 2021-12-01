<template>
  <router-view></router-view>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { getUserInfo, IUserInfo } from './service/user-info'
import { getMenuList, IMenu } from './service/menu'

export default defineComponent({
  setup() {
    const state: { userInfo: IUserInfo; menuList: IMenu[] } = reactive({
      userInfo: { id: 0 },
      menuList: [],
    })
    const init = async () => {
      state.userInfo = await getUserInfo()
      state.menuList = await getMenuList(state.userInfo.id)
    }
    onMounted(() => {
      init()
    })
    return { ...toRefs(state) }
  },
})
</script>
<style lang="stylus" scoped></style>
