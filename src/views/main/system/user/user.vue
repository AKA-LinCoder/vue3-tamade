<template>
  <div class="user">
    <pageSearch :search-form-config="searchFormConfig"></pageSearch>
    <pageContent page-name="users" :content-table-config="contentTableConfig">
    </pageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'

export default defineComponent({
  name: 'users',
  components: { pageSearch, pageContent },
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped lang="less"></style>
