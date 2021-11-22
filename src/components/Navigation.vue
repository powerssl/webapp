<template>
  <nav class="col-md-3 col-lg-2 d-md-block bg-light sidebar">
    <div class="sidebar-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <b-link :to="{ name: 'Dashboard' }" class="nav-link">
            <span data-feather="home"></span>
            Dashboard <span class="sr-only">(current)</span>
          </b-link>
        </li>
        <li class="nav-item">
          <b-link :to="{ name: 'ACMEAccounts' }" class="nav-link">
            <span data-feather="file"></span>
            ACME Accounts
          </b-link>
        </li>
        <li class="nav-item">
          <b-link :to="{ name: 'ACMEServersIndex' }" class="nav-link">
            <span data-feather="file"></span>
            ACME Servers
          </b-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>
