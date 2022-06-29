<template>
  <div class="goods">
    <page-content :contentTableConfig="contentTableConfig" pageName="goods">
      <template #image="scope">
        <el-image
          style="width: 60px; height=60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          @click="handleClickItem"
          fit="cover"
          append-to-body
        ></el-image
      ></template>
      <template #oldPrice="scope">{{ '¥' + scope.row.oldPrice }}</template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
export default defineComponent({
  name: 'goods',
  components: {
    PageContent
  },

  setup() {
    const handleClickItem = () => {
      // this.$nextTick(() => {
      //   //获取遮罩层dom
      //   let domImageMask = document.querySelector('.el-image-viewer__mask')
      //   if (!domImageMask) {
      //     return
      //   }
      //   domImageMask.addEventListener('click', () => {
      //     //点击遮罩层时调用关闭按钮的click事件
      //     document.querySelector('.el-image-viewer__close')?.click()
      //   })
      // })
    }
    return {
      contentTableConfig,
      handleClickItem
    }
  }
})
</script>

<style scoped></style>
