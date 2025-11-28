<!-- eslint-disable vue/valid-template-root -->
<template></template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
//挂载在 window 方便与在js中使用
// 它唯一的作用：把 Element Plus 的 ElMessage 挂到全局 window 上，让项目里的纯 JS 文件也能使用消息提示
// 可以直接使用 ElMessage.success('操作成功')
// 这些文件不是 Vue 组件实例环境中，你直接用 ElMessage 可能会报错，又或者你不想在每个文件里都 import Element Plus。
window['$message'] = ElMessage
</script>
