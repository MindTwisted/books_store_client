<template>
    <div class="users">
        
        <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
                <li>
                    <router-link to="/dashboard">Dashboard</router-link>
                </li>
                <li class="is-active">
                    <a href="#" aria-current="page">
                        Users
                    </a>
                </li>
            </ul>
        </nav>

        <table class="table is-fullwidth is-striped is-hoverable">

            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Email</th>
                    <th>Discount</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="user in users" v-bind:key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.role }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ (+user.discount).toFixed(2) | percent }}</td>
                    <td class="users__actions">
                        <router-link v-bind:to="'users/' + user.id + '/orders'" class="button is-info is-small">
                            Orders
                        </router-link>
                        <router-link v-bind:to="'users/' + user.id + '/edit'" class="button is-primary is-small">
                            Edit
                        </router-link>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </tfoot>

        </table>
    </div>
</template>

<script>
import Vuex from 'vuex'

export default {
    name: 'Users',
    computed: {
        ...Vuex.mapState([
            'users'
        ])
    }
}
</script>

<style lang="scss" scoped>
.users {
    &__actions {
        a {
            margin-right: 0.25rem;
        }
    }
}
</style>


