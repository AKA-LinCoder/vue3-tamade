<template>
  <div class="page-search">
    <lin-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级搜索</h1>
      </template>
      <template #footer>
        <div class="footer">
          <el-button type="primary">重置</el-button>
          <el-button type="primary">搜索</el-button>
        </div>
      </template>
    </lin-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LinForm from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    LinForm
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      formData
    }
  }
})
</script>

<style scoped lang="less">
.header {
  color: red;
  text-align: left;
}
.footer {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
