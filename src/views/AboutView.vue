<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="triangle"></div>
    <div class="clip-trapezoid"></div>
    <div class="clip-trapezoid2"></div>
  </div>
</template>

<script>
export default{
  name: 'AboutPage',
  components:{

  },
  data(){
    
  }
}
</script>

<style scoped>
  .triangle {
    width: 0;
    height: 0;
    border-bottom: 100px solid #007bff;    /* 底邊較寬且有顏色 */
    border-left: 50px solid transparent;   /* 左邊透明 */
    border-right: 50px solid transparent;  /* 右邊透明 */
  }
  .clip-trapezoid {
    width: 200px;
    height: 100px;
    background-color: #28a745;
    clip-path: polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%);
  }
  .clip-trapezoid2 {
    width: 200px;
    height: 173.2px;
    background-color: #28a745;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  }
</style>