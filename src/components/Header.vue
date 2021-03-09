<template>
  <div class="header-nav">
      <ul class="header-nav_ul">
        <li>Index</li>
        <li>Another</li>
        <li>Another</li>
        <li>Another</li>
      </ul>
      <span><input placeholder="Search"/></span>
  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header-nav{
    box-shadow: inset 1px 2px 5px gray;
    background:white;
    margin-top: 2%;
    width: 80%;
    position: relative;
    left: 10%;
    border-radius: 60px;
    
    display: flex;
    justify-content: space-between;
    border: solid 1px;
  }
  .header-nav_ul{
    margin: 0;
  
    margin-left:60px ;
    list-style: none;
    overflow: hidden;
  }
  .header-nav_ul li{
    font-size: 26px;
    margin: 10px 20px ;
    float: left;
  }
  .header-nav span {
    margin-right: 20% ;
    line-height: 50px;
  }
  .header-nav span input{
    border: 0;
    font-size:20px ;
    border-bottom: solid 1px;
    scale: (0.5);
  }

</style>
