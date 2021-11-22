<template>
  <iframe ref="iframeRef" :src="src" v-show="display"></iframe>
</template>

<script>
export default {
  name: "AuthIFrame",
  props: {
    action: String,
    display: Boolean,
  },
  computed: {
    src() {
      const uri = this.$appConfig.authURI;
      return `${uri}${this.action ? `/?${this.action}` : ""}`;
    },
  },
  methods: {
    logout() {
      setTimeout(() => {
        this.$refs.iframeRef.contentWindow.postMessage(
          { action: "logout" },
          this.$appConfig.authURI
        );
      }, 500);
    },
    receiveMessage(event) {
      if (event.origin !== this.$appConfig.authURI) return;
      if (typeof event.data !== "object" || event.data === null) return;
      console.log(event.data);
      switch (event.data.action) {
        case "http.redirect":
          window.location.replace(event.data.url);
          break;
        case "auth.token":
          this.$store.commit("auth/token", event.data.jwt);
          break;
      }
    },
  },
  mounted() {
    window.addEventListener("message", this.receiveMessage);
    switch (this.action) {
      case "logout":
        this.logout();
        break;
    }
  },
  unmounted() {
    window.removeEventListener("message", this.receiveMessage);
  },
};
</script>

<style scoped>
iframe {
  border: 0;
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1000000;
}
</style>
