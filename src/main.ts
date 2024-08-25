import { createApp } from "vue";
import axiosRetry from "axios-retry";
import axios from "axios";
import "./style.css";
import App from "./App";
import { useAxiosCounter } from "./composables/state";

axiosRetry(axios, {
  retries: 3,
  retryDelay: (retryCount) => {
    useAxiosCounter.count = retryCount;
    return retryCount * 1000;
  },
  retryCondition: (error) => {
    if (error?.response?.status) {
      return error?.response?.status >= 400;
    }
    return false;
  },
});

createApp(App).mount("#app");
