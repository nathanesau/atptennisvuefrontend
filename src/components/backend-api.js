import axios from "axios";

const AXIOS = axios.create({
  baseURL: `/api/v1`,
  timeout: 1000
});

export default {
  players() {
    return AXIOS.get(`/players/get`);
  },
  bracket() {
    return AXIOS.get(`/draws/get?tournament_name=Rotterdam2019`);
  }
};
