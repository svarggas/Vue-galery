<template>
    <div class="notLoggedIn">  
        <img src="../../public/lost.svg" >
        <h2>
            Are you lost?
            <br>
            Please log in to see your photos
        </h2>
        <button type="button" class="ui secondary button">
            <router-link to="/" class="white">
                <i class="icon caret left"></i>
                Return Home
            </router-link>
        </button>
    </div>
</template>

<script>
export default {
    name: 'ErrorPage'
}
</script>

<style scoped>
    .notLoggedIn{
        align-content: center;
        text-align: center;
    }
    .notLoggedIn img{
        width: 80vh;
        height: auto;
    }
    .white{
        color: white;
    }
    .button{
        background: lightblue !important;
    }
</style>