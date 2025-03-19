<!-- AI 學習助手 -->
<template>
    <div class="subject-item" :style="subjectStyle">
      <div class="gray-background"></div>
      <div class="main-div">
        <div class="left-div">
          <h1 style="color: white;">{{ Title }}</h1>
          <div class="main-item">
            <h2>主要功能</h2>
            <p>結合大型語言模型(LLM)、檢索增強生成(RAG)、網路檢索...等功能</p>
            <p>提供學生與教師精準且即時的教學輔助</p>
          </div>
          <div class="main-item">
            <h2>支援模型</h2>
            <p>Goolgle Gemini 2.0 Flash為目前平台預設模型</p>
            <p>將來會釋出利用合成資料技術與開源資料集訓練的大型語言模型</p>
          </div>
          <div class="main-item">
            <h2>使用的開源庫</h2>
            <p>Ollama運行大型語言模型和嵌入式模型、LangChain製作工作流程</p>
            <p>Unsloth的QLoRA策略提升訓練速度並降低顯存需求</p>
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