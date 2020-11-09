<template>
    <div v-if="isLoggedIn">
        <div class="dropper">
            <input type="file" class="fileUp"
            @change="previewFiles($event.target.files);uploadImages($event.target.files);"
            multiple 
            accept="image/*"/>
            <div class="textUploader">
                <i class="upload huge icon uploader"></i>
                <br/>
                <h1 class="uploader">Drag and drop or browse files!</h1> 
            </div>
        </div>   
        <h2>Files attached</h2>
        <table class="ui fixed celled table striped">
            <thead>
                <th>#</th>
                <th>Name</th>
                <th>Size</th>
                <th>Type</th>
            </thead>
            <tbody>
                <tr v-for="file in arrayFiles" v-bind:key="file.id">
                    <td>{{ file.id }}</td>
                    <td>{{ file.name }}</td>
                    <td>{{ file.size }}</td>
                    <td>{{ file.type }}</td>
                </tr>
            </tbody>
        </table> 
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
    data() {
        return {
            arrayFiles: [],
            showFiles: false
        }
    },
    methods: {
        ...mapActions (['uploadImages']),
        previewFiles: function (event) {
            let temp, counter = 1
            event.forEach( file => {
                temp = {
                    id: counter,
                    name: file['name'],
                    size: file['size'] + ' bytes',
                    type: file['type']
                }
                this.$set(this.arrayFiles, this.arrayFiles.length, temp)
                counter++
            });
            this.showFiles = true
            console.log(this.$data.arrayFiles)
        }
    },
    computed: mapGetters(['isLoggedIn']),
    components: {
        ErrorPage
    }
}
</script>

<style scoped>
    .dropper{
        height: 30vh;
        border: 2px dashed;
        border-radius: 5px;
        justify-content: center;
        align-items: center;
        display: flex;
        position: relative;
        margin-top: 15px;
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
    .table{
        margin-top: 15px;
        width: 100%;
    }
    .nothing{
        text-align: center !important;
    }
</style>