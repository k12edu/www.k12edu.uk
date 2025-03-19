<!-- 數位學習遊戲 -->
<template>
    <div class="subject-item" :style="subjectStyle">
      <div class="gray-background"></div>
      <div class="main-div">
        <div class="left-div">
          <h1 style="color: white;">{{ Title }}</h1>
          <div class="main-item">
            <h2>主要功能</h2>
            <p>本平台結合學術與IT知識，讓學生在享受遊戲樂趣的同時，輕鬆學習並掌握相關知識</p>
            <p>透過互動性強的遊戲設計，學習過程更加生動有趣</p>
          </div>
          <div class="main-item">
            <h2>遊戲特色</h2>
            <p>遊戲採用RPG模式，玩家將探索地下城、獲得金幣與經驗值、與商人交易、接取NPC任務...等</p>
            <p>當學習遇到問題時，也能詢問AI學習助手</p>
          </div>
          <div class="main-item">
            <h2>核心玩法</h2>
            <p>遊戲結合問答式戰鬥與程式編寫任務</p>
            <p>學生解決問題的同時，提升他們的學術和編程能力，讓學習與娛樂無縫結合</p>
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