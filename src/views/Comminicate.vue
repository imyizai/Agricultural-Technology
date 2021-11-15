<template>
  <div class="container">
  <div v-for="(item,index) in list" :key="index"></div>
  </div>
</template>
<script>

// export default {

//   data: function() {
//       return{
//         list: [
//     {
//     // avatar: 'http://first-bucket20201002.oss-cn-hangzhou.aliyuncs.com/img/img/picture/me.jpg'
//      name:'杨瑞'
//   },
//    {
//     // avatar: 'http://first-bucket20201002.oss-cn-hangzhou.aliyuncs.com/img/img/picture/me.jpg'
//      name:'杨瑞'
//   },
//    {
//     // avatar: 'http://first-bucket20201002.oss-cn-hangzhou.aliyuncs.com/img/img/picture/me.jpg'
//      name:'杨瑞'
//   },
//    {
//     // avatar: 'http://first-bucket20201002.oss-cn-hangzhou.aliyuncs.com/img/img/picture/me.jpg'
//      name:'杨瑞'
//   },
//   ]
//       }
//   }
//   // components: {},
//   // mounted: {},
// }
