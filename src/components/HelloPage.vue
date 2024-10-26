<template>
    <div class="container">
      <h1 class="title">Hello, this is TuiSeki</h1>
      <button class="login-button" @click="goToLogin">登録</button>
      <button class="register-button" @click="goToRegister">新規登録</button>
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
    max-width: 480px; /* 适应手机屏幕宽度 */
    margin: 0 auto;
  }
  
  .title {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }

  
  .login-button,
  .register-button {
    width: 50%; /* 长方形按钮 */
    height: 50px;
    background-color: #28a745; /* 可根据需要自定义颜色 */
    color: white;
    border: none;
    font-size: 18px;
    font-weight: bold;
    border-radius: 8px;
    margin-bottom: 15px;
    cursor: pointer;
  }
  
  .register-button {
    background-color: #dc3545; /* 注册按钮颜色 */
  }
  
  /* 悬停效果 */
  button:hover {
    opacity: 0.8;
  }
  </style>
  