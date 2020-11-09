<template>
    <div>

        <div v-if="!isLoggedIn" class="notLoggedInDiv">
            <img src="../../public/imgs/LogInPlease.png" class="notLoggedInImg">
            <h1>Please log in or register in IMGUR to enter</h1>
        </div>
        <div v-else class="landingDiv">
            <img src="../../public/imgs/smile.png" class="landingImg">
            <h1>Hello, welcome aboard</h1>
        </div>

    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'Landing',
        methods: mapActions(['login','logout']), 
        computed: mapGetters(['isLoggedIn'])
    }
</script>

<style scoped>
    .notLoggedInDiv{
        text-align: center;
    }
    .notLoggedInImg{
        width: 70%;
        height: auto;
    }
    .landingDiv{
        text-align: center;
        padding-top: 5%;
    }
    .landingImg{
        width: 30%;
        height: auto;
    }
    h1{
        font-size: 48px;
    }
</style>