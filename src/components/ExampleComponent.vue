<template>
  <div>
    <b-btn id="btnCallPlayers" variant="success" @click="callPlayersApi()"
      >players (GET)</b-btn
    >
    <div>
      Message:
      <ul>
        <li v-for="player of backendResponse" :key="player.playerName">
          {{ player.playerName }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from "./backend-api";

export default {
  name: "Example",

  data() {
    return {
      msg: "Nice Bootstrap candy!",
      showResponse: false,
      backendResponse: "",
      fullResponse: {
        config: {
          foo: "",
          bar: ""
        }
      },
      httpStatusCode: "",
      httpStatusText: "",
      headers: ["Noting here atm. Did you call the Service?"],
      errors: []
    };
  },
  methods: {
    callPlayersApi() {
      api
        .players()
        .then(response => {
          this.backendResponse = response.data;
          this.httpStatusCode = response.status;
          this.httpStatusText = response.statusText;
          this.headers = response.headers;
          this.fullResponse = response;
          this.showResponse = true;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>
