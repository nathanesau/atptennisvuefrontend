<template>
  <div>
    <b-btn id="btnCallPlayers" variant="success" @click="callBracketApi()">
      bracket (GET)
    </b-btn>
    <bracket :rounds="rounds">
      <template #player="{ player }">{{ player.name }}</template>
    </bracket>
  </div>
</template>

<script>
import api from "./backend-api";
import Bracket from "vue-tournament-bracket";

/*const rounds = [
  //Semi finals
  {
    games: [
      {
        player1: { id: "1", name: "Competitor 1", winner: false },
        player2: { id: "4", name: "Competitor 4", winner: true }
      },
      {
        player1: { id: "5", name: "Competitor 5", winner: false },
        player2: { id: "8", name: "Competitor 8", winner: true }
      }
    ]
  },
  //Final
  {
    games: [
      {
        player1: { id: "4", name: "Competitor 4", winner: false },
        player2: { id: "8", name: "Competitor 8", winner: true }
      }
    ]
  }
];*/

export default {
  name: "Example",

  components: {
    Bracket
  },
  data() {
    return {
      rounds: [],
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
    callBracketApi() {
      api
        .bracket()
        .then(response => {
          this.backendResponse = response.data;

          // get rounds
          let roundsMap = new Map();
          for (var matchup of this.backendResponse) {
            var round = matchup["roundNum"];
            var winner1 = (matchup["winnerName"] === matchup["player1Name"]);
            var game = { "player1": { "id": matchup["player1Id"], "name": matchup["player1Name"], winner: winner1 }, "player2": { "id": matchup["player2Id"], "name": matchup["player2Name"], winner: !winner1 } };
            if (roundsMap.has(round)) {
              var games = roundsMap.get(round);
              games.push(game)
              roundsMap.set(round, games);
            } else {
              roundsMap.set(round, [game]);
            }
          }

          this.rounds = [];
          for (let value of roundsMap.values()) {
            this.rounds.push({ "games": value })
            console.log(value);
          }
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

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.vtb-item {
  align-content: center;
}
</style>
