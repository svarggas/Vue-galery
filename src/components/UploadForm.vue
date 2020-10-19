<template>
    <div class="dropper">
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
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'UploadForm',
    methods: mapActions (['uploadImages'])
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