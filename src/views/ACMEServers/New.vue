<template>
  <div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">New ACME Server</h1>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group mr-2">
          <b-button :to="{ name: 'ACMEServersIndex' }" type="button" class="btn-sm">Back</b-button>
        </div>
      </div>
    </div>
    <Error v-if="error">{{ error }}</Error>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="display-name-group"
        label="Display Name:"
        label-for="display-name"
      >
        <b-form-input
          id="display-name"
          v-model="form.displayName"
          placeholder="Display Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="directory-url-group"
        label="Directory URL:"
        label-for="directory-url"
      >
        <b-form-input
          id="directory-url"
          v-model="form.directoryURL"
          placeholder="Directory URL"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="integration-name-group"
        label="Integration Name:"
        label-for="integration-name"
      >
        <b-form-input
          id="integration-name"
          v-model="form.integrationName"
          placeholder="Integration Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import Error from "@/components/Error";
import { ACMEServer, CreateACMEServerRequest } from "@/apiserver/v1/acme_server_pb";
import { ACMEServerServiceClient } from "@/apiserver/v1/acme_server_grpc_web_pb";

export default {
  name: "ACMEServersNew",
  components: {
    Error,
  },
  data() {
    return {
      form: {
        directoryURL: "",
        displayName: "",
        integrationName: "",
      },
      show: true,
      error: null,
    };
  },
  created() {
    this.acmeServerServiceClient = new ACMEServerServiceClient(
      this.$appConfig.grpcWebURI,
      null,
      null
    );
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.error = null;

      const acmeServer = new ACMEServer();
      acmeServer.setDirectoryUrl(this.form.directoryURL);
      acmeServer.setDisplayName(this.form.displayName);
      acmeServer.setIntegrationName(this.form.integrationName);
      const request = new CreateACMEServerRequest();
      request.setAcmeServer(acmeServer);
      this.acmeServerServiceClient.create(
        request,
        this.$store.getters["auth/metadata"],
        (err, response) => {
          if (err) {
            this.error = err.message;
          } else {
            this.$router.push({
              name: "ACMEServersShow",
              params: { acmeServerId: response.getName().split("/")[1] },
            });
          }
        }
      );
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.directoryURL = "";
      this.form.displayName = "";
      this.form.integrationName = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
