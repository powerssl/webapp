<template>
  <b-dropdown size="sm" text="Actions" class="m-md-2" boundary="viewport">
    <b-dropdown-item @click="copyLoginCommand">
      Copy Login Command
    </b-dropdown-item>
    <b-dropdown-item @click="copyLoginToken">
      Copy Login Token
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  name: "CopyAuth",
  methods: {
    copy(value) {
      const el = document.createElement("textarea");
      el.value = value;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      const selected =
        document.getSelection().rangeCount > 0
          ? document.getSelection().getRangeAt(0)
          : false;
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
    },
    copyLoginCommand() {
      this.copy(`powerctl login --addr ${this.$appConfig.apiURI} --auth-token ${this.$store.getters["auth/token"]}`);
    },
    copyLoginToken() {
      this.copy(this.$store.getters["auth/token"]);
    },
  },
};
</script>
