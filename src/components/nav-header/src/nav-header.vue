<template>
  <div class="nav-header">
    <el-icon class="fold-menu">
      <component :is="iconName" @click="handleFoldClick"></component
    ></el-icon>
    <div class="content">
      <lin-bread-curmb :breadcrumbs="breadCrumbs"></lin-bread-curmb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import userInfo from './user-info.vue'
import LinBreadCurmb, { IBreadcrumb } from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'

export default defineComponent({
  emits: ['foldChange'],

  components: {
    userInfo,
    LinBreadCurmb
  },
  setup(props, { emit }) {
    const iconName = ref('Fold')
    const isFold = ref(false)
    const store = useStore()
    const breadCrumbs = computed(() => {
      const route = useRoute()
      const currentPath = route.path
      const userMenus = store.state.login.userMenus
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
      if (isFold.value === false) {
        iconName.value = 'Expand'
      } else {
        iconName.value = 'Fold'
      }
    }

    return {
      isFold,
      iconName,
      breadCrumbs,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.fold-menu {
  font-size: 30px;
  cursor: pointer;
}
.nav-header {
  display: flex;
  width: 100%;
}
.content {
  flex: 1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
