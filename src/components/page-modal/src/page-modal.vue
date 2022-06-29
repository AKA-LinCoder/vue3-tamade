<template>
  <div class="page-model">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center>
      <lin-form v-bind="modalConfig" v-model="formData"></lin-form>
      <!-- <span
          >It should be noted that the content will not be aligned in center by
          default</span
        > -->
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >Confirm</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LinForm from '@/base-ui/form'

export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    LinForm
  },
  setup() {
    const dialogVisible = ref(true)
    const formData = ref({})
    return {
      dialogVisible,
      formData
    }
  }
})
</script>

<style scoped></style>
