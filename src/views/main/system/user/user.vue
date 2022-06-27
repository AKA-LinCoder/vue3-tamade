<template>
  <div class="user">
    <pageSearch :search-form-config="searchFormConfig"></pageSearch>
    <page-content page-name="user" :content-table-config="contentTableConfig">
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'

export default defineComponent({
  name: 'user',
  components: { pageSearch, pageContent },
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped lang="less">
.user {
  .content {
    padding: 20px;
    border-top: 20px solid #f5f5f5;
  }
}
</style>
