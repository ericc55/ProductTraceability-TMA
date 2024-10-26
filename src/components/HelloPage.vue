<template>
  <div class="container">
    <h1 class="title">「フードチェーン」へようこそ</h1>
    <el-button type="primary" size="large" class="custom-button" @click="goToLogin">ログイン</el-button>
    <el-button type="success" size="large" class="custom-button" @click="goToRegister">新規登録</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push('/login');
    },
    goToRegister() {
      this.$router.push('/register');
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  max-width: 480px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  font-size: 24px;
  margin-bottom: 40px;
  text-align: center;
}

.custom-button {
  width: 80%;
  height: 60px;
  font-size: 20px;
  margin-bottom: 20px;
}

/* Override Element Plus button styles */
:deep(.el-button--large) {
  padding: 15px 20px;
}
</style>
