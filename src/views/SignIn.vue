<template>
  <AuthIFrame action="login" :display="true" />
</template>

<script>
import AuthIFrame from "@/components/AuthIFrame.vue";

export default {
  name: "SignIn",
  components: {
    AuthIFrame,
  },
  created() {
    this.$watch(
      () => this.$store.getters["auth/token"],
      () => {
        this.$router.push("/");
      }
    );
  },
};
</script>
