<template>
  <div class="page-search">
    <lin-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级搜索</h1>
      </template>
      <template #footer>
        <div class="footer">
          <el-button type="primary" @click="handleResetClick">重置</el-button>
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
  setup(props) {
    // 双向绑定的属性应该是由配置文件的field来决定
    // 1.优化一: formData中的属性应该动态来决定
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    // 2.优化二: 当用户点击重置
    const handleResetClick = () => {
      // for (const key in formOriginData) {
      //   formData.value[`${key}`] = formOriginData[key]
      // }
      formData.value = formOriginData
    }
    return {
      formData,
      handleResetClick
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
