<template>
  <nav v-if="$route.name !== 'SignIn'" class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <b-link :to="{ name: 'Dashboard' }" class="navbar-brand col-md-3 col-lg-2 mr-0 px-3">PowerSSL</b-link>
    <!--      <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">-->
    <div class="w-100"></div>
    <CopyAuth />
    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <b-link :to="{ name: 'SignOut' }" class="nav-link">Sign out</b-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import CopyAuth from "@/components/CopyAuth";

export default {
  name: "Header",
  components: {
    CopyAuth,
  },
};
</script>
