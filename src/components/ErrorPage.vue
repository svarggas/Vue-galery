<template>
    <div class="notLoggedIn">  
        <img src="../../public/lost.svg" >
        <h2>
            Are you lost?
            <br>
            Please log in to see your photos
        </h2>
        <button type="button" class="ui secondary button">
            <i class="icon caret left"></i>Return Home
            <!--- Return to landing page with router --->
        </button>
    </div>
</template>

<script>
export default {
    name: 'NotLoggedIn'
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
</style>