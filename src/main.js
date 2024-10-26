import { createApp } from 'vue';
import App from './App.vue';
import router from './router';


createApp(App)
  .use(router)
  .mount('#app');

// import "./style.css"
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// const app = createApp(App)

// app.use(ElementPlus)
// app.mount('#app')

// document.querySelector("#app").innerHTML = `
//   <button class="enableEthereumButton">Enable Ethereum</button>
//   <h2>Account: <span class="showAccount"></span></h2>`
