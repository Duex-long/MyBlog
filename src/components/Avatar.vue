<template>
    <div class="avatar">
        <ul :style="{left:`-${currentIndex*94}%`}">
            <li 
            v-for="todo in todos" :key="todo.name" 
            ></li>
        </ul>
    </div>
</template>

<script>
    import { mapMutations, mapState} from 'vuex'
    export default {
        computed:{
            ...mapState(['currentIndex','todos'])
        },
        mounted(){
            let onMouse = {}
            this.$el.addEventListener('mousedown',evt=>{
                onMouse.startX = evt.screenX
                onMouse.endX = 0 
            })
            this.$el.addEventListener('mouseup',evt=>{
                 onMouse.endX = evt.screenX
                 console.log(onMouse.endX)
                 console.log(onMouse.startX)
                 if(!!onMouse.endX || onMouse.startX-onMouse.endX < 10)
                 if(onMouse.endX < onMouse.startX) {
                    this.nextPage()
                 }else{
                     this.prevPage()
                 }
            })
        },
        methods:{
            ...mapMutations(['nextPage','prevPage'])
        }
    }


</script>


<style scoped>
    .avatar{
        
        margin-top:1%;
        border-radius:60px;
        box-shadow: inset 1px 2px 5px gray;
        height:500px ;
        width: 80%;
        position: relative;
        left: 10%;
        border: solid 1px;
        overflow: hidden;
        
        
    }
    .avatar ul {
        margin-top:5%;
        list-style: none;
        white-space: nowrap;
        height: 80%;
        position: relative;
        left: -0%;
          transition: all 2s ease;
        
    }
    .avatar ul li{
        margin: 0 6%;
        display: inline-block;
        width: 85%;
        height: 80%;
        border: solid 1px;
        vertical-align:top;
        border-radius: 15px;
        box-shadow: 1px 2px 5px inset, 1px 2px 5px gray;
        
    }
</style>