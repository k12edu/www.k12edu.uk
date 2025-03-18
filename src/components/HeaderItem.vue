<template>
    <div class="header">
      <h1 class="big-title">{{ title }}</h1>
      <div class="image-container">
        <img :src="images[currentImageIndex]" class="fade-image" :class="{ 'fade-in2': !isTransitioning, 'fade-out': isTransitioning }" />
        <img :src="images[nextImageIndex]" class="fade-image" :class="{ 'fade-in': isTransitioning, 'fade-out2': !isTransitioning }"/>
      </div>
      <div class="gray-background"></div>
      <div class="gray-background2"></div>
      <div class="introduce-field">
        <h1>{{ TitleArray[nextImageIndex] }}</h1>
        <p>{{ introduceTextArray[nextImageIndex] }}</p>
      </div>
      <div class="router-list">
        <div class="router-item" @mouseover="setImage(0)" @click="this.$emit('MoveToObject',1)"><h3>AI學習助手</h3></div>
        <div class="router-item" @mouseover="setImage(1)" @click="this.$emit('MoveToObject',2)"><h3>數位學習遊戲</h3></div>
        <div class="router-item" @mouseover="setImage(2)" @click="this.$emit('MoveToObject',3)"><h3>教師題目上傳平台</h3></div>
        <div class="router-item" @mouseover="setImage(3)" @click="this.$emit('MoveToObject',4)"><h3>Linux Lab</h3></div>
      </div>
    </div>
  </template>
  
  <script>
  export default{
    name: 'HeaderItem',
    components:{
      

    },
    data(){
      return {
        title:"K12數位學習遊戲與AI學習助手",
        introduceText: "遊戲與AI結合\n\n解決現存教育問題\n\n讓學習更有趣且高效",
        introduceTextArray:["大型語言模型結合RAG知識庫與網路檢索\n精準回答學生和教師問題","基於Unity引擎開發的數位學習遊戲\n結合AI學習助手\n提升學習即時性與學習效率","便於教師管理與製作題目\n結合AI學習助手生成題目與詳解\n自動糾錯題目設計","更豐富的IT知識和技術指南","遊戲與AI結合\n\n解決現存教育問題\n\n讓學習更有趣且高效"],
        TitleArray:["AI學習助手","數位學習遊戲","教師題目上傳平台","Linux Lab",""],
        currentImageIndex: 4,
        nextImageIndex: 4,
        images: [
          require('../assets/img1.png'),
          require('../assets/img2.png'),
          require('../assets/img3.png'),
          require('../assets/img4.png'),
          require('../assets/img5.png'),
        ],
        isTransitioning: false,
      }
    },
    methods:{
      setImage(index) {
        if(index == this.currentImageIndex || this.isTransitioning) return;
        this.nextImageIndex = index;
        this.startTransition(() => {
          this.currentImageIndex = this.nextImageIndex;
        });
        
      },
      startTransition(updateImage) {
        this.isTransitioning = true; // 開始淡出
        setTimeout(() => {
          this.isTransitioning = false;
          updateImage();
        }, 500); // 500ms 之後更新圖片（淡出時間）
      }
    },
  }
  </script>
  
  <style scoped>
    .introduce-field{
      display: flex;
      align-items: center;
      flex-direction: column;
      height: 40%;
      width: 40%;
      text-wrap: wrap;
      padding: 2%;
      font-size: 20px;
      font-weight: bold;
      white-space: pre-wrap; /* 換行 */
      font-size: 30px;
    }
    .image-container {
      z-index: -3;
      position: absolute; /* 使用相對定位 */
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }

    .fade-image {
      position: absolute; /* 絕對定位使圖片重疊 */
      min-height: 100%; /* 確保圖片最小高度 */
      min-width: 100%; /* 確保圖片最小寬度 */
      left: 50%; /* 居中 */
      top: 50%; /* 居中 */
      object-fit: cover; /* 保持比例並填滿容器 */
      transform: translate(-50%, -50%); /* 精確居中 */
      
    }
    .gray-background{
      position: absolute;
      left: 0;
      top: 0;
      height: 100vh;
      width: 100vw;
      z-index: -2;
      background-color: rgba(128, 128, 128, 0.3);
    }
    .gray-background2{
      position: absolute;
      left: 15vw;
      top: 0;
      height: 100vh;
      width: 70vw;
      z-index: -1;
      background-color: rgba(64, 64, 64, 0.7);;
    }
    .fade-in {
      opacity: 1; /* 顯示圖片 */
      transition: opacity 0.7s ease-in-out; /* 設定過渡效果 */
    }

    .fade-out {
      opacity: 0; /* 隱藏圖片 */
      transition: opacity 0.5s ease-in-out; /* 設定過渡效果 */
    }
    .fade-in2 {
      opacity: 1; /* 顯示圖片 */
      transition: opacity 0s; /* 設定過渡效果 */
    }

    .fade-out2 {
      opacity: 0; /* 隱藏圖片 */
      transition: opacity 0s; /* 設定過渡效果 */
    }
    .big-title{
      font-size: 60px;
    }
    .header{
      color: white;
      position: relative;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      flex-direction: column;
      height:100vh;
      overflow: hidden;
      text-wrap: nowrap;
    }
    .router-list{
      display: flex;
      justify-content: center;
      margin-bottom: 100px;
      height: 60px;
      width: 100%; /* 確保元素寬度填滿父容器 */
    }
    .router-item{
      display: flex;
      height: 100%;
      border-radius: 10px;
      border: 3px solid rgb(255, 255, 255);
      user-select:none;
      cursor: pointer;
      align-items: center ;
      justify-content: center;
      
      padding: 10px;
      margin: 0px 10px;
    }
    .router-item:hover{
      background-color: rgba(145, 215, 95, 0.3);
    }
    @media(max-width:1050px){
      .big-title{
        font-size: 36px;
        text-wrap: wrap;
      }
      .router-list{
        display: none;
      }
      .gray-background2{
        left: 0vw;
        width: 100vw;
      }
      h1{
        font-size: 18px;
      }
      .introduce-field{
        margin-bottom: 40%;
      }
    }
  </style>