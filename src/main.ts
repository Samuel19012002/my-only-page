import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import Oruga from '@oruga-ui/oruga-next';
import { bulmaConfig } from '@oruga-ui/theme-bulma';
import './styles/_all.scss';
import App from './App.vue';
import { localPlugin } from './store/plugin';

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
    history: createWebHistory(),
    routes,
});
const pinia = createPinia();

pinia.use(localPlugin);

createApp(App)
    .use(router)
    .use(Oruga, {
        ...bulmaConfig,
        iconPack: 'fas',
    })
    .use(pinia)
    .mount('#app');
