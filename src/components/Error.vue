<template>
  <b-alert dismissible :show="true" variant="danger">
    <slot></slot>
  </b-alert>
</template>

<script>
export default {
  name: "Error",
};
</script>
