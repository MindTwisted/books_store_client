<template>
    <div class="dashboard">
        <h1 class="title">Welcome, {{ auth.name }}</h1>
    </div>
</template>

<script>
import Vuex from 'vuex'

export default {
    name: 'Dashboard',
    computed: {
        ...Vuex.mapState([
            'auth'
        ])
    }

}
</script>

