<template>
    <div>
        <div v-if="isLoggedIn" class="image-container">
            <img v-for="image in allImages" 
                :src="image.link" 
                :key="image.id"/>
        </div>
        <div v-else>  
            <NotLoggedIn/>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import NotLoggedIn from './NotLoggedIn'

export default {
    name: 'ImageList',
    methods: mapActions(['fetchImages']),
    computed: mapGetters(['allImages', 'isLoggedIn']),
    components: {
        NotLoggedIn
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
</style>