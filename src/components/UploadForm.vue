<template>
    <div v-if="isLoggedIn" class="dropper">
        <input type="file" 
        @change="uploadImages($event.target.files)"
        multiple 
        accept="image/*"/>
        <div class="textUploader">
            <i class="images huge icon uploader"></i>
            <br/>
            <h1 class="uploader">Drag and drop or browse files!</h1> 
        </div>
    </div>
    <div v-else>
        <ErrorPage/>
    </div>  
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ErrorPage from './ErrorPage'

export default {
    name: 'UploadForm',
    methods: mapActions (['uploadImages']),
    computed: mapGetters(['isLoggedIn']),
    components: {
        ErrorPage
    },
}
</script>

<style scoped>
    .dropper{
        height: 30vh;
        border: 2px #86c5d8 dashed;
        border-radius: 5px;
        justify-content: center;
        align-items: center;
        display: flex;
        position: relative;
    }
    .droppper:hover{
        background: #eee;
    }
    input{
        width: 100%;
        height: 30vh;
        position: absolute;
        opacity: 0;
    }
    .uploader{
        color: lightblue;
    }
    .textUploader{
        text-align: center;
    }
</style>