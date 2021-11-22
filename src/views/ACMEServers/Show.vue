<template>
  <div>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">ACME Server</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group mr-2">
          <b-button
            :to="{ name: 'ACMEServersIndex' }"
            type="button"
            class="btn-sm"
            variant="outline-secondary"
            >Back</b-button
          >
          <b-button
            @click="showDeleteModal"
            type="button"
            class="btn-sm"
            variant="outline-danger"
            >Delete</b-button
          >
        </div>
      </div>
    </div>
    <Error v-if="error">{{ error }}</Error>
    <Loading v-if="loading" />
    <ul v-if="acmeServer" class="list-group">
      <li class="list-group-item">Name: {{ acmeServer.name }}</li>
      <li class="list-group-item">Create Time: {{ acmeServer.createTime }}</li>
      <li class="list-group-item">Update Time: {{ acmeServer.updateTime }}</li>
      <li class="list-group-item">
        Display Name: {{ acmeServer.displayName }}
      </li>
      <li class="list-group-item">Title: {{ acmeServer.title }}</li>
      <li class="list-group-item">Description: {{ acmeServer.description }}</li>
      <li class="list-group-item">Labels Map: {{ acmeServer.labelsMap }}</li>
      <li class="list-group-item">
        Directory Url: {{ acmeServer.directoryUrl }}
      </li>
      <li class="list-group-item">
        Integration Name: {{ acmeServer.integrationName }}
      </li>
    </ul>
  </div>
</template>

<script>
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import {
  DeleteACMEServerRequest,
  GetACMEServerRequest,
} from "@/apiserver/v1/acme_server_pb";
import { ACMEServerServiceClient } from "@/apiserver/v1/acme_server_grpc_web_pb";

export default {
  name: "ACMEServersShow",
  components: {
    Error,
    Loading,
  },
  data() {
    return {
      loading: false,
      acmeServer: null,
      error: null,
    };
  },
  created() {
    this.acmeServerServiceClient = new ACMEServerServiceClient(
      this.$appConfig.grpcWebURI,
      null,
      null
    );
    this.fetchData();
  },
  computed: {
    name() {
      return `acmeServer/${this.$route.params.acmeServerId}`;
    },
  },
  methods: {
    fetchData() {
      this.error = this.acmeServer = null;
      this.loading = true;

      const request = new GetACMEServerRequest();
      request.setName(this.name);
      this.acmeServerServiceClient.get(
        request,
        this.$store.getters["auth/metadata"],
        (err, response) => {
          this.loading = false;
          if (err) {
            this.error = err.message;
          } else {
            this.acmeServer = response.toObject();
          }
        }
      );
    },
    showDeleteModal() {
      this.$bvModal
        .msgBoxConfirm("Are you sure?")
        .then((value) => {
          if (value) this.deleteResource();
        })
        .catch((err) => {
          console.error(err);
        });
    },
    deleteResource() {
      this.error = null;
      this.loading = true;

      const request = new DeleteACMEServerRequest();
      request.setName(this.name);
      this.acmeServerServiceClient.delete(
        request,
        this.$store.getters["auth/metadata"],
        (err) => {
          this.loading = false;
          if (err) {
            this.error = err.message;
          } else {
            this.$router.push({ name: "ACMEServersIndex" });
          }
        }
      );
    },
  },
};
</script>
