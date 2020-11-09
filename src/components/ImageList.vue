<template>
    <div>
        <div v-if="isLoggedIn">
            <div v-if="allImages.length != 0" class="image-container">
                <img v-for="image in allImages" 
                :src="image.link" 
                :key="image.id"/>
            </div>
            <div v-else class="questionMarkContiner">
                <span class="questionMark">?</span><br/>
                <h1>There are no images uploaded right now!</h1>    
            </div>
        </div>
        <div v-else>  
            <ErrorPage/>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import ErrorPage from './ErrorPage'

    export default {
        name: 'ImageList',
        methods: mapActions(['fetchImages']),
        computed: mapGetters(['allImages', 'isLoggedIn']),
        components: {
            ErrorPage
        },
        created(){
            this.fetchImages();
        }
    }
</script>

<style scoped>
    img{
        max-width: 100%;
        padding: 5px;
        border-radius: 10px;
    }
    .image-container{
        column-count: 3;
        column-gap: 0;
    }
    .questionMarkContiner{
        text-align: center;
        padding-top: 20%;
    }
    .questionMark{
        color: lightblue;
        font-size: 400px;
        font-weight: 1000;
        text-decoration: italic;
    }
</style>