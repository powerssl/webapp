<template>
  <div>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">ACME Accounts</h1>
    </div>
    <Error v-if="error">{{ error }}</Error>
    <Loading v-if="loading" />
    <b-table striped hover :items="acmeAccounts"></b-table>
  </div>
</template>

<script>
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import { ListACMEAccountsRequest } from "@/apiserver/v1/acme_account_pb";
import { ACMEAccountServiceClient } from "@/apiserver/v1/acme_account_grpc_web_pb";

export default {
  name: "ACMEAccounts",
  components: {
    Error,
    Loading,
  },
  data() {
    return {
      loading: false,
      acmeAccounts: null,
      error: null,
    };
  },
  created: function () {
    this.acmeServerServiceClient = new ACMEAccountServiceClient(
      "https://localhost:8883",
      null,
      null
    );
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.error = this.acmeAccounts = null;
      this.loading = true;

      const request = new ListACMEAccountsRequest();
      this.acmeServerServiceClient.list(
        request,
        { Authorization: `Bearer ${this.$store.getters["auth/token"]}` },
        (err, response) => {
          this.loading = false;
          if (err) {
            this.error = err.message;
          } else {
            this.error = null;
            const object = response.toObject();
            this.acmeServers = object.acmeAccountsList;
            console.log(response.toObject());
          }
        }
      );
    },
  },
};
</script>
