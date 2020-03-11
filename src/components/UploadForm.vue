<template>
    <div class="dropper">
        <input type="file" 
        @change="uploadImages($event.target.files)"
        multiple 
        accept="image/*"/>
        <h3>Drag some files here to upload!</h3> 
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
        border: 2px black dashed;
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
</style>