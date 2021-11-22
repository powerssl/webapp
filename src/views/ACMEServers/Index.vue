<template>
  <div>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">ACME Servers</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group mr-2">
          <b-button
            :to="{ name: 'ACMEServersNew' }"
            type="button"
            class="btn-sm"
            variant="outline-secondary"
            >New</b-button
          >
        </div>
      </div>
    </div>
    <Error v-if="error">{{ error }}</Error>
    <Loading v-if="loading" />
    <b-table striped hover :items="acmeServers" :fields="fields">
      <template #cell(actions)="row">
        <b-button
          size="sm"
          :to="{
            name: 'ACMEServersShow',
            params: { acmeServerId: row.item.name.split('/')[1] },
          }"
          class="mr-1"
        >
          Show
        </b-button>
        <b-button
          size="sm"
          @click="showDeleteModal(row.item.name)"
          class="mr-1"
          variant="danger"
        >
          Delete
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import {
  DeleteACMEServerRequest,
  ListACMEServersRequest,
} from "@/apiserver/v1/acme_server_pb";
import { ACMEServerServiceClient } from "@/apiserver/v1/acme_server_grpc_web_pb";

export default {
  name: "ACMEServersIndex",
  components: {
    Error,
    Loading,
  },
  data() {
    return {
      fields: [
        { key: "displayName", label: "Name" },
        { key: "integrationName", label: "Integration" },
        { key: "actions", label: "Actions" },
      ],
      loading: false,
      acmeServers: null,
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
  methods: {
    fetchData() {
      this.acmeServers = null;
      this.loading = true;

      const request = new ListACMEServersRequest();
      this.acmeServerServiceClient.list(
        request,
        this.$store.getters["auth/metadata"],
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
    showDeleteModal(name) {
      this.$bvModal
        .msgBoxConfirm("Are you sure?")
        .then((value) => {
          if (value) this.deleteResource(name);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    deleteResource(name) {
      this.error = null;
      this.loading = true;

      const request = new DeleteACMEServerRequest();
      request.setName(name);
      this.acmeServerServiceClient.delete(
        request,
        this.$store.getters["auth/metadata"],
        (err) => {
          this.loading = false;
          if (err) {
            this.error = err.message;
          } else {
            this.fetchData();
          }
        }
      );
    },
  },
};
</script>
