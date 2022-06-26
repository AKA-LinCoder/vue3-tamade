<template>
  <div class="user">
    <PageSearch :search-form-config="searchFormConfig"></PageSearch>
    <div class="contend"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from '@/store'

import { searchFormConfig } from './config/search.config'
import pageSearch from '@/components/page-search'
import PageSearch from '@/components/page-search/src/page-search.vue'

export default defineComponent({
  name: 'user',
  components: { PageSearch },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped lang="less"></style>
