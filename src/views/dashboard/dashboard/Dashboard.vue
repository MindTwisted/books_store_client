<template>
    <div class="dashboard">
        <h1 class="title">Dashboard</h1>

        <div class="box">
            <h2 class="is-size-4">Shop stats</h2>
            <bar-chart :data="getBarChartData()"></bar-chart>
        </div>

        <div class="box">
            <h2 class="is-size-4">Orders activity</h2>
            <area-chart :data="getAreaChartData()"></area-chart>
        </div>
    </div>
</template>

<script>
import Vuex from 'vuex'

export default {
    name: 'Dashboard',
    computed: {
        ...Vuex.mapState([
            'auth',
            'books',
            'authors',
            'genres',
            'users',
            'orders'
        ])
    },
    methods: {
        getBarChartData() {
            return [
                ['Books', this.books.length],
                ['Authors', this.authors.length],
                ['Genres', this.genres.length],
                ['Users', this.users.length],
                ['Orders', this.orders.length]
            ]
        },
        getAreaChartData() {
            let data = {};
            
            this.orders.map(order => {
                let date = order.created_at.split(' ')[0];

                if (!data[date]) {
                    data[date] = 0;
                }

                data[date]++;
            });

            return data;
        }
    }

}
</script>

