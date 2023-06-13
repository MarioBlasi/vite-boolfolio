import { createApp } from "vue";
import App from "./App.vue";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import axios from "axios";

// Utilizza Axios per effettuare una richiesta GET
axios
  .get("https://api.example.com/data")
  .then((response) => {
    // Gestisci la risposta
    console.log(response.data);
  })
  .catch((error) => {
    // Gestisci l'errore6
    console.error(error);
  });
createApp(App).mount("#app");
