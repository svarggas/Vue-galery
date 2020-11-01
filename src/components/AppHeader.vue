<template>

    <div class="ui container">
        <div class="ui large secondary pointing menu">
            <div class="item">
                &nbsp;
            </div>
            <a href="/" class="header item">
                IMGR Private Galery
            </a>

            <div class="right menu">
                <div v-if="isLoggedIn" class="horizontal">
                    <router-link to="/galery" class="ui item">Galery</router-link>
                    <router-link to="/upload" class="ui item">Upload</router-link>
                    <a class="ui item" @click="logout">Logout</a>
                </div>
                
                <div v-else>
                    <a class="ui item" @click="login">Login</a>
                </div>

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
    .container{
        padding-top: 15px;
    }
</style>