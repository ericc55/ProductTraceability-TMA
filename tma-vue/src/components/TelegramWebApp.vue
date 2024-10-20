<!-- src/components/TelegramWebApp.vue -->
<template>
  <div role="main">
    <h1>Telegram Web App</h1>
    <p>Status: {{ telegramStatus }}</p>

    <div align="center">
      <a href="https://ton.org/">
        <img src="../assets/tapps.png" alt="logo of telegram web apps" width="48" />
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      telegram: null,
      telegramStatus: 'Not initialized',
      cameraLayerStyle: {
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
      }
    }
  },
  mounted() {
    // Initialize Telegram Web App when component is mounted
    if (window.Telegram && window.Telegram.WebApp) {
      this.telegram = window.Telegram.WebApp;
      this.telegramStatus = 'Initialized';
    } else {
      this.telegramStatus = 'Telegram WebApp is not available';
      console.error('Telegram WebApp is not available');
    }
  },
  methods: {
    launchAlert() {
      alert('Alert launched!');
    },
    launchPopup() {
      alert('Popup launched!');
    },
    openTelegramLink(url) {
      if (this.telegram) {
        this.telegram.openTelegramLink(url);
      } else {
        alert(`Would open Telegram link: ${url}`);
      }
    },
    openExternalLink(url) {
      if (this.telegram) {
        this.telegram.openLink(url);
      } else {
        window.open(url, '_blank');
      }
    },
    openInternalLink(url) {
      if (this.telegram) {
        this.telegram.openLink(url, {try_instant_view: true});
      } else {
        alert(`Would open internal link: ${url}`);
      }
    },
    expandWebview() {
      alert('Expand Webview clicked!');
    },
    toggleMainButton() {
      alert('Toggle Main Button clicked!');
    },
    openCamera() {
      document.getElementById('camera-layer').style.display = 'flex';
    },
    closeCamera() {
      document.getElementById('camera-layer').style.display = 'none';
    }
  }
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>