import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
    path: '/',
    redirect: '/home',
},
{
    path: '/home',
    name: 'home',
    redirect: { name: 'main' },
    component: () =>
        import('@/views/home'),
    children: [{
        path: 'main',
        name: 'main',
        component: () =>
            import('@/views/home/main')
    }, {
        path: 'article',
        name: 'article',
        component: () =>
            import('@/views/home/article'),
    }]
},

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router