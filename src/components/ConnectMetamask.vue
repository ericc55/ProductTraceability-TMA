<template>
  <div id="app">
    <button @click="enableEthereum" class="enableEthereumButton">Connect to MetaMask</button>
    <h2>Account: <span class="showAccount">{{ account }}</span></h2>
  </div>
</template>

<script>
import detectEthereumProvider from "@metamask/detect-provider";

export default {
  data() {
    return {
      account: null,
    };
  },
  methods: {
    async enableEthereum() {
      const provider = await detectEthereumProvider();

      // Determine the platform
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      let isMobile = /android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

      if (isMobile) {
        // Redirect to MetaMask mobile app
        const dappUrl = encodeURIComponent(window.location.href); // URL encode the current page
        const metamaskAppDeepLink = `https://metamask.app.link/dapp/${dappUrl}`;
        window.location.href = metamaskAppDeepLink;
      } else if (provider && provider === window.ethereum) {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          this.account = accounts[0];
          console.log("Connected Account:", this.account);
        } catch (error) {
          console.error("Error connecting to MetaMask:", error);
        }
      } else {
        alert("Please install MetaMask!");
      }
    },
  },
};
</script>

<style scoped>
.enableEthereumButton {
  padding: 10px 20px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
