<template>
  <div class="app">
    <el-config-provider :locale="local">
      <router-view></router-view
    ></el-config-provider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default defineComponent({
  name: 'App',

  components: {
    // ElConfigProvider
  },
  props: {
    name: {
      type: String
    }
  },
  setup() {
    let local = zhCn
    // const zhCn = ElementPlusLocaleZhCn
    return {
      local
    }
  }
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
