<template>
    <div class="dashboard">

        <div class="dashboard__aside">
            <aside class="menu">
                <p class="menu-label">
                    General
                </p>
                <ul class="menu-list">
                    <li>
                        <router-link to="/dashboard" exact active-class="is-active">
                            Dashboard
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/dashboard/users" active-class="is-active">
                            Users
                        </router-link>
                    </li>
                     <li>
                        <router-link to="/dashboard/orders" active-class="is-active">
                            Orders
                        </router-link>
                    </li>
                </ul>
                <p class="menu-label">
                    Resources
                </p>
                <ul class="menu-list">
                    <li>
                        <router-link to="/dashboard/books" active-class="is-active">
                            Books
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/dashboard/genres" active-class="is-active">
                            Genres
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/dashboard/authors" active-class="is-active">
                            Authors
                        </router-link>
                    </li>
                </ul>
            </aside>
        </div>

        <div class="dashboard__content">
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
import Vuex from 'vuex'

export default {
    name: 'Index',
    mounted() {
        this.setLoading();
    
        let promises = [];

        promises.push(this.getBooks());
        promises.push(this.getAuthors());
        promises.push(this.getGenres());
        promises.push(this.getOrders());
        promises.push(this.getPaymentTypes());
        promises.push(this.getUsers());

        Promise.all(promises)
            .finally(() => {
                this.removeLoading();
            });
    },
    methods: {
        ...Vuex.mapActions([
            'getBooks',
            'getAuthors',
            'getGenres',
            'getCart',
            'getOrders',
            'getPaymentTypes',
            'getUsers'
        ]),
        ...Vuex.mapMutations([
            'setLoading',
            'removeLoading'
        ])
    }
}
</script>

<style lang="scss" scoped>
.dashboard {

    &__aside {
        position: fixed;
        width: 12rem;
        padding: 0.75rem;
    }

    &__content {
        margin-left: 12rem;
        padding: 1rem;
    }

    @media screen and (max-width: 769px) {
        &__aside {
            position: relative;
            width: 100%;
        }

        &__content {
            margin-left: 0;
            margin-top: 2rem;
        }
    }
}
</style>


