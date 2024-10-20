<!-- src/components/TelegramWebApp.vue -->
<template>
    <main role="main">
      <div align="center">
        <a href="https://ton.org/">
          <img src="@/assets/tapps.png" alt="logo of telegram web apps" width="48" />
        </a>
      </div>
  
      <h1>Modals</h1>
      <button @click="launchAlert">Launch Alert</button>
      <button @click="launchPopup">Launch Popup</button>
  
      <h1>Links</h1>
      <ul>
        <li><a @click="openTelegramLink('https://t.me/trendingapps')">Open link within Telegram</a></li>
        <li><a @click="openExternalLink('https://ton.org/')">Open link in external browser</a></li>
        <li><a @click="openInternalLink('https://telegra.ph/api')">Open link inside Telegram webview</a></li>
      </ul>
  
      <h1>Buttons</h1>
      <button @click="expandWebview">Expand Webview</button>
      <button @click="toggleMainButton">Toggle Main Button</button>
      <button @click="openCamera">Open Camera</button>
  
      <div id="viewport"></div>
      <div id="viewport-params-size"></div>
      <div id="viewport-params-expand"></div>
  
      <div id="camera-layer" :style="cameraLayerStyle">
        <button @click="closeCamera">Cancel</button>
      </div>
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const cameraLayerStyle = ref({
    display: 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    overflow: 'auto'
  })
  
  const launchAlert = () => {
    // Implement alert logic
  }
  
  const launchPopup = () => {
    // Implement popup logic
  }
  
  const openTelegramLink = (url) => {
    window.Telegram.WebApp.openTelegramLink(url)
  }
  
  const openExternalLink = (url) => {
    window.Telegram.WebApp.openLink(url)
  }
  
  const openInternalLink = (url) => {
    window.Telegram.WebApp.openLink(url, {try_instant_view: true})
  }
  
  const expandWebview = () => {
    // Implement webview expansion logic
  }
  
  const toggleMainButton = () => {
    // Implement main button toggle logic
  }
  
  const openCamera = () => {
    cameraLayerStyle.value.display = 'flex'
  }
  
  const closeCamera = () => {
    cameraLayerStyle.value.display = 'none'
  }
  </script>
  
<style>
  body {
      --bg-color: var(--tg-theme-bg-color);
      font: 12px/18px "Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, Verdana, sans-serif;
      background-color: var(--bg-color);
      color: var(--tg-theme-text-color);
      margin: 48px 24px;
      padding: 0;
      color-scheme: var(--tg-color-scheme);
  }

  a {
      color: var(--tg-theme-link-color);
  }
  #viewport {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      height: var(--tg-viewport-stable-height, 100vh);
      pointer-events: none;
      transition: all .2s ease;
  }
  #viewport:after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border-width: 4px;
      border-style: solid;
      border-image: linear-gradient(45deg, rgba(64, 224, 208, .5), rgba(173, 255, 47, .5)) 1;
  }

  #viewport-params-size,
  #viewport-params-expand {
      content: attr(text);
      position: absolute;
      display: inline-block;
      background: var(--tg-theme-link-color, rgb(64, 224, 208));
      right: 4px;
      left: auto;
      font-size: 8px;
      padding: 4px;
      vertical-align: top;
  }
  #viewport-params-size {
      top: 4px;
  }
  #viewport-params-expand {
      top: 30px;
  }
</style>