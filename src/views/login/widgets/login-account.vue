<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="user" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="user.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="user.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import { useStore } from 'vuex'
import { rules } from '../config/account-config'
import localeCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const store = useStore()
    const user = reactive({
      name: localeCache.getCache('name') ?? '',
      password: localeCache.getCache('password') ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('真正执行登录逻辑')
          //1.判断是否记住密码
          if (isKeepPassword) {
            //本地缓存
            localeCache.setCache('name', user.name)
            localeCache.setCache('password', user.password)
          } else {
            localeCache.deleteCache('name')
            localeCache.deleteCache('password')
          }
          //2.开始进行登录验证
          store.dispatch('login/accountLoginAction', { ...user })
        }
      })
    }

    return {
      user,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
