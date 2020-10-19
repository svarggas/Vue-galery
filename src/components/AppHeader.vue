<template>
    <div class="ui stackable menu">
        <div class="item">
            <i class="images big icon"></i>
        </div>
        <a href="/" class="header item">
            My stock
        </a>

        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
                <router-link to="/" class="ui item">Galery</router-link>
                <router-link to="/upload" class="ui item">Upload</router-link>
                <a class="ui item" @click="logout">Logout</a>
            </div>
            
            <div v-else>
                <a href="#" class="ui item" @click="login">Login</a>
            </div>

        </div>

    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'AppHeader',
        methods: mapActions(['login','logout']), 
        computed: mapGetters(['isLoggedIn'])
    }
</script>

<style scoped>
    .horizontal{
        display: flex;
        flex-direction: row;
    }
    .menu{
        font-size: 16px;
    }
    i{
        color: lightblue;
    }
</style>