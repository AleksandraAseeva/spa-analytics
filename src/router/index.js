import {createRouter, createWebHistory } from 'vue-router';
import Stocks from '@/views/StocksView.vue';
import Incomes from '@/views/IncomesView.vue';
import Orders from '@/views/OrdersView.vue';
import Sales from '@/views/SalesView.vue';

const routes = [
    {
        path: '/',
        name: 'Stocks',
        component: Stocks
    },
    {
        path: '/incomes',
        name: 'Incomes',
        component: Incomes
    },
    {
        path: '/orders',
        name: 'Orders',
        component: Orders
    },
    {
        path: '/sales',
        name: 'Sales',
        component: Sales
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;