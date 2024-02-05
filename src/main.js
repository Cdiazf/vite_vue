// main.js
import Vue from 'vue';
import App from './App.vue';
import router from './router'; // Assuming your router file is named router.js
import Navbar from './components/Navbar.vue';

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

// Register the navbar globally
Vue.component('Navbar', Navbar);
