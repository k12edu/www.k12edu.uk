<!-- AI 學習助手 -->
<template>
    <div class="subject-item" :style="subjectStyle">
      <div class="gray-background"></div>
      <div class="main-div">
        <div class="left-div">
          <h1 style="color: white;">{{ Title }}</h1>
          <div class="main-item">
            <h2>主要功能</h2>
            <p>我們的AI學習助手融合了最新的LLM（大語言模型）和RAG（檢索增強生成）技術，能夠在學生學習過程中提供即時幫助，解決學習上的疑難問題，讓學習更具互動性和高效。</p>
          </div>
          <div class="main-item">
            <h2>原始模型與訓練</h2>
            <p>我們的AI學習助手基於 yentinglin/Llama-3-Taiwan-8B-Instruct 模型進行開發，並針對數學、自然科學、資訊工程及常識等領域進行微調訓練，確保學生能夠獲得精準且有深度的學習輔導。</p>
          </div>
          <div class="main-item">
            <h2>使用的開源庫</h2>
            <p>為了確保AI學習助手的穩定運行，我們採用了多種強大的開源技術，包括LLaMA-Factory（用於模型訓練）、ollama（用於模型運行）、以及ragflow（用於實現檢索增強生成技術）。這些技術的組合保證了AI助手在處理學習問題時的高效性與準確性。</p>
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
          backgroundImage: `url(${require(`../assets/img${this.idx}.jpg`)})`, // 修正引號
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