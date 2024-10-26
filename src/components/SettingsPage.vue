<template>
  <div class="settings-page">
    <h2 class="page-title">情報について</h2>
  </div>
</template>

<script>
export default {
  name: 'SettingsPage',
};
</script>

<style scoped>
.settings-page {
  padding: 20px; /* 页面内边距 */
  height: 100vh; /* 使页面适应手机屏幕 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 向上对齐 */
}

.page-title {
  margin: 0; /* 去掉默认的上下间距 */
}
</style>
