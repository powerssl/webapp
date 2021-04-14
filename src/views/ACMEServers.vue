<template>
  <div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">ACME Servers</h1>
    </div>
    <Error v-if="error">{{ error }}</Error>
    <Loading v-if="loading" />
    <b-table striped hover :items="acmeServers"></b-table>
  </div>
</template>

<script>
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import { ListACMEServersRequest } from "@/apiserver/v1/acme_server_pb";
import { ACMEServerServiceClient } from "@/apiserver/v1/acme_server_grpc_web_pb";

export default {
  name: "ACMEServers",
  components: {
    Error,
    Loading,
  },
  data() {
    return {
      loading: false,
      acmeServers: null,
      error: null,
    };
  },
  created() {
    this.acmeServerServiceClient = new ACMEServerServiceClient(
      "https://localhost:8883",
      null,
      null
    );
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.error = this.acmeServers = null;
      this.loading = true;

      const request = new ListACMEServersRequest();
      this.acmeServerServiceClient.list(
        request,
        { Authorization: `Bearer ${this.$store.getters["auth/token"]}` },
        (err, response) => {
          this.loading = false;
          if (err) {
            this.error = err.message;
          } else {
            const object = response.toObject();
            this.acmeServers = object.acmeServersList;
          }
        }
      );
    },
  },
};
</script>
