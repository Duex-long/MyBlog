<template>
    <div class="login">
        <div class="login_card">
            <div class="login_face"><img src="../assets/logo.png"></div>

            <div class="login_input">
                <p class="login_user"><input placeholder="UserName"/></p>
                <p class="login_psd"><input placeholder="Password"/></p>
            </div>
            
            <div class="login_btn">
                <button>Login</button>
               
            </div>
        </div>
    </div>
</template>

<style lang="scss">
   .login{
       background-image: repeating-linear-gradient(to left,#fbc,#a6c);
       border:0;
       border-radius: 30px;
    //    background:white;
       position: absolute;
       left: 60%;
       top: 25%;
       width: 500px;
       height: 450px;
       display: flex;
    // 主轴居中   
       justify-content: center;
    // 侧轴居中
        align-items: center;    
   }
    .login_face{
        position: relative;
        left: 0%;
        margin-bottom:25px ;
        width: 80px;
        height: 80px;
        overflow: hidden;
        box-shadow: 0px 5px 10px  ;
        border-radius: 100%;
            img{
                width: 100%;
                height: 100%;
            }
    }
   
   
    .login_user input,.login_psd input{
        border: 0;
        height: 30px;
        border-bottom: solid 2px gray;
        font-size: 15px;
        text-transform: uppercase;
       background-image: repeating-linear-gradient(to left,#fbc,#a6c);
    }
   .login_btn {
       
       display: flex;
       justify-content: space-around;
   }
   .login_btn button{
    width:200px;
    height: 50px;
    background-image: repeating-linear-gradient(to right,#fbc,#a6c);
    border-radius: 10px;
    border: 0;
    font-size:20px ;
    color: honeydew;

   }
</style>