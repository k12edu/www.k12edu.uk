<template>
    <HeaderItem @moveToObject="moveToObject"></HeaderItem>
    <SubjectItem id="subject-div1" :Title="title[0]" :idx=1></SubjectItem>
    <SubjectItem2 id="subject-div2" :Title="title[1]" :idx=2></SubjectItem2>
    <SubjectItem3 id="subject-div3" :Title="title[2]" :idx=3></SubjectItem3>
    <SubjectItem4 id="subject-div4" :Title="title[3]" :idx=4></SubjectItem4>
  </template>
  
  <script>
  import HeaderItem from '../HeaderItem.vue';
  import SubjectItem from '../SubjectItem.vue';
  import SubjectItem2 from '../SubjectItem2.vue';
  import SubjectItem3 from '../SubjectItem3.vue';
  import SubjectItem4 from '../SubjectItem4.vue';

  export default{
    name: 'HomePage',
    components:{
        HeaderItem,
        SubjectItem,
        SubjectItem2,
        SubjectItem3,
        SubjectItem4
    },
    data(){
      return{
        title:["AI學習助手","數位學習遊戲","教師題目上傳平台","Linux Lab"],
      }
    },
    methods:{
      moveToObject(idx){
        console.log(idx);
        const element = document.getElementById(`subject-div${idx}`);
        element.scrollIntoView({ behavior: "smooth" }); // 平滑滾動到元素
      },
    },
  }
  </script>
  
  <style scoped>
    
  </style>