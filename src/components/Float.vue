<template>
    <div class="float">
        <div class="ghost">
            <div class="ghostEyes"></div>
            <div class="ghostDimples"></div>
            <div class="ghostFeet">
                <div class="ghostFoot"></div>
                <div class="ghostFoot"></div>
                <div class="ghostFoot"></div>
                <div class="ghostFoot"></div>
            </div>
        </div>
        <div></div>
      

    </div>
</template>

<script>

export default {
   
}
</script>
<style>
    .ghost{
        position: relative;
        width: 150px;
        height: 225px;
        border-radius: 75px 75px 0 0 ;
        background-color: #fff;
        box-shadow: -17px 0 0 #dbdbdb inset,0 0 50px pink;
        animation: ghost 2s infinite;
        position: absolute;
        left: 90%;
        top: 10%;
    }
    .ghostEyes {
        display: flex;
        justify-content: space-around;
        width: 90px;
        padding-top: 70px;
        margin: 0 auto;
    }
    .ghostEyes::before , 
    .ghostEyes::after {
        content: '';
        width: 15px;
        height: 25px;
        border-radius: 40%;
        background-color: #00034b;
    }
    .ghostDimples {
        display: flex;
        justify-content: space-around;
        width: 130px;
        padding-top: 15px;
         margin: 0 auto;
    }
     .ghostDimples::before ,  .ghostDimples::after {
         content: '';
         width: 15px;
         height: 15px;
         border-radius: 50px;
         background-color: #ffbeff;
     }
    .ghostFeet{
        display: flex;
        width: 100%;
        position: absolute;
        bottom: -13px;
    }
    .ghostFoot{
        width: 25%;
        height: 26px;
        border-radius: 50%;
        background-color: #fff;
    }
    
    @keyframes ghost {
        0%,100%{
            transform: translateY(0);
        }
        50% {
            transform: translateY(-15px);
        }
    }
</style>