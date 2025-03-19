<!-- Linux Lab -->
<template>
    <div class="subject-item" :style="subjectStyle">
      <div class="gray-background"></div>
      <div class="main-div">
        <div class="left-div">
          <h1 style="color: white;">{{ Title }}</h1>
          <div class="main-item">
            <h2>主要功能</h2>
            <p>更豐富的IT知識和技術指南，以便學生深入學習IT領域</p>
          </div>
          <div class="main-item">
            <h2>平台特色</h2>
            <p>將技術基本分為基礎、中階、進階</p>
            <p>具備Roadmap學習路線圖，以便學生紀錄學習進度</p>
          </div>
          <div class="main-item">
            <h2>使用方式</h2>
            <p>進入Linux Lab網頁，依照自身能力選擇不同技術分類</p>
            <p>跟著路線圖逐步學習，提升IT專業力</p>
          </div>
        </div>
        <div class="right-div">
          <div class="part-img"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default{
    name: 'HeaderItem',
    components:{
  
    },
    data(){
      
    },
    props:{
      Title:String,
      idx:Number,
    },
    computed:{
      subjectStyle(){
        return {
          backgroundImage: `url(${require(`../assets/img${this.idx}.png`)})`, // 修正引號
          backgroundSize: 'cover', // 如果需要覆蓋整個元素
          backgroundPosition: 'center' // 如果需要置中顯示
        };
      }
    },
    methods:{
      
    }
  }
  </script>
  
  <style scoped>
    .part-img{
      height: 60%;
      width: 100%;
      border: 4px solid white;
      margin-top: 10%;
    }
    .right-div{
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      width: 80%;
    }
    .left-div{
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: start;
      height: 100%;
      width: 80%;
    }
    .main-item{
      display: flex;
      flex-direction: column;
      align-items: start;
      height: 30%;
      width: 90%;
      margin: 20px 0px;
      color: white;
      text-overflow: ellipsis;
      overflow: hidden; 
    }
    .main-div{
      z-index: 1;
      display: flex;
      justify-content: space-between;
      height: 90%;
      width: 90%;
    }
    .subject-item{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      
    }
    .gray-background{
      position: absolute;
      height: 100vh;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
    p{
      text-wrap: wrap;
      text-align: left;
    }
    h2{
      margin-bottom: 0px;
    }
    @media(max-width:700px){
      .right-div{
        display: none;
      }
      .main-item{
        width: 70%;
      }
    }
  </style>