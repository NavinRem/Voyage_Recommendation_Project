<script setup>
    import { RouterLink, useRouter} from 'vue-router';
    import { ref } from 'vue';
    import { defineProps } from 'vue';
</script>

<template>
    <div class="Main_Container">
        <div class="Search_Section">
            <h1>Your Destination Ahead<br>From Le Centre Ville</h1>
            <form action="/search" method="get">
                <div class="wrapper">
                    <input type="search" name="search_info" id="search_info" placeholder="Search...">
                    <img src="../assets/svg/search-svg.svg" alt="" width="30px">
                </div>
            </form>
        </div>
        <img src="../assets/image/search_section_bg.png" alt="">
    </div>
</template>

<style scoped>
    .Main_Container{
        height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
    }
    .Search_Section{
        height: 100vh;
        background: #00000099 url("../assets/image/search_section_bg.png");
        background-blend-mode: darken;
        background-repeat: no-repeat;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .wrapper{
        width: 700px;
        height: 50px;
        padding: 5px 15px;
        border-radius: 50px;
        background-color: aliceblue;
        border: 1px solid #dcdcdc;
        outline-color: none;
        cursor: text;
        display:flex;
        flex-direction: row;
        align-items: center;
        box-sizing: border-box;
    }
    .wrapper:hover{
        box-shadow: 1px 1px 8px 1px #dcdcdc;
    }

    h1{
        font-size: 3rem;
        color: aliceblue;
        text-align: center;
    }
    form{
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    input[type="search"]{
        color: rgba(0,0,0,.87);
        outline-color: none;
        background-color: transparent;
        border:none;
        height:100%;
        flex-grow:1;
        font-size: 15px;
    }
    input[type="search"]:focus{
        border-color: #228B22;
        outline: none;
    }
    input[type="search"]::placeholder{
        font-weight: bold;
        font-size: 1.3rem;
    }
</style>