import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import About from './Pages/About.vue'
import Education from './Pages/Education.vue'
import Experience from './Pages/Experience.vue'
import Projects from './Pages/Projects.vue'
import Skills from './Pages/Skills.vue'
import Hero from "./Pages/Hero.vue";
import Stefan from "./Pages/Stefan.vue";

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Hero },
    { path: '/about', component: About },
    { path: '/education', component: Education },
    { path: '/experience', component: Experience },
    { path: '/projects', component: Projects },
    { path: '/skills', component: Skills },
    { path: '/stefan', component: Stefan },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
