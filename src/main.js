import { createApp } from "vue"; // Importar la función createApp
import App from "./App.vue"; // Importar el componente App.vue
import { createVuetify } from "vuetify"; // Importar la función createVuetify
import "vuetify/styles"; // Estilos de Vuetify
import "@mdi/font/css/materialdesignicons.css"; // Iconos opcionales 

const vuetify = createVuetify(); // Inicialización de Vuetify

const app = createApp(App);
app.use(vuetify); // Actvar vuetify para el diseño
app.mount("#app"); // Montar la aplicacon con id app

