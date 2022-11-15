import {createRouter, createWebHistory} from "vue-router/dist/vue-router";

const routes = [
    {
        path: '/',
        component: () => import('../Pages/HeroRow')
    },
    {
        path:'/services',
        component: () => import('../Pages/ServiceRow')
    },
    {
        path: '/features',
        component: () => import('../Pages/FeaturesRow')
    },
    {
        path: '/projects',
        component: () => import('../Pages/ProjectRow')
    },
    {
        path: '/pricing',
        component: () => import('../Pages/PricingRow')
    },
    {
        path: '/team',
        component: () => import('../Pages/TeamRow')
    },
    {
        path: '/blog',
        component: () => import('../Pages/BlogRow')
    },
    {
        path: '/contact',
        component: () => import('../Pages/ContactRow')
    },
    {
        path: '/creator',
        component: () => import('../Pages/CreatorRow')
    },
    {
        path: '/condidates',
        component: () => import('../Pages/CondidateRow')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})