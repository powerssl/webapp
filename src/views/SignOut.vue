<template>
  <div>
    <AuthIFrame action="logout" />
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">Sign out</h1>
    </div>
    <Loading />
  </div>
</template>

<script>
import AuthIFrame from "@/components/AuthIFrame.vue";
import Loading from "@/components/Loading.vue";

export default {
  name: "SignOut",
  components: {
    AuthIFrame,
    Loading,
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
