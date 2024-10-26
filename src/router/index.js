import { createRouter, createWebHistory } from 'vue-router';
import HelloPage from '@/components/HelloPage.vue';
import LoginPage from '@/components/LoginPage.vue';
import RegisterPage from '@/components/RegisterPage.vue';

import HomePage from '@/components/HomePage.vue';
import HistoryPage from '@/components/HistoryPage.vue';
import ScanPage from '@/components/ScanPage.vue';
import SettingsPage from '@/components/SettingsPage.vue';

import InBound from '@/components/InBound.vue';
import OutBound from '@/components/OutBound.vue';
import ConnectMetamask from '@/components/ConnectMetamask.vue';
import mobileCoverLayer from '@/components/mobileCoverLayer.vue';

const routes = [
    { path: '/', component: HelloPage },
    { path: '/mobile-cover-layer', component: mobileCoverLayer },
    { path: '/login', component: LoginPage, children: [
        { path: 'home', name: 'home', component: HomePage },
        { path: 'history', name: 'history', component: HistoryPage },
        { path: 'scan', name: 'scan', component: ScanPage },
        { path: 'settings', name: 'settings', component: SettingsPage },
        { path: 'home/inbound', name: 'inbound', component: InBound }, // 入库子组件
        { path: 'home/outbound', name: 'outbound', component: OutBound }, // 出库子组件
    ] },

    { path: '/register', component: RegisterPage, children: [
        {path: 'connectmetamask', name: 'connectmetamask', component: ConnectMetamask}
    ] },

  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
