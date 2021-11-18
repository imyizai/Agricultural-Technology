<template>
  <div class="container">
  <div v-for="(item,index) in list" :key="index">
    <div class="main">
      <el-card class="box-card">
      <div class="info">
          <el-avatar :size="size" :src="circleUrl"></el-avatar>
        <span class="name">{{item.name}}</span>
        <span class="time1">{{item.time}}</span>
        <p class="content1">{{item.content}}</p>
      </div>
      <div class="img1">
      <img src="../assets/1.jpg"  style="width: 100px; height: 100px">

      </div>
       <div class="img2">
      <img src="../assets/2.jpg"  style="width: 100px; height: 100px">

      </div>
      </el-card>
    </div>
  </div>
    <div class="ans">
      <el-card class="answer">
   <div slot="header" class="clearfix">
    <span>回复列表</span>
   </div>
     </el-card>
      </div>
  </div>
</template>
<script>

export default {
  created () {
    console.log('res')
    this.axios({
      method: 'POST',
      url: '/faqs/communition/list',
      data: {
        'startIndex': 1,
        'pageSize': 5,
        'time': '1637024828196'
      }
    }).then(res => {
      console.log('123')
      console.log(res)
    })
  },
  data () {
    return {
      list: [
        {
          // avatar: 'http://first-bucket20201002.oss-cn-hangzhou.aliyuncs.com/img/img/picture/me.jpg',
          name: '迈克 农技推广人员',
          time: '2021-11-17 12:30:01',
          content: 'Yes, its me !',
          zan: 12,
          collect: 50,
          comment: 100
        },
        {
          // avatar: 'http://first-bucket20201002.oss-cn-hangzhou.aliyuncs.com/img/img/picture/me.jpg'
          name: '威尔 农技推广人员',
          time: '2021-11-18 10:25:03',
          content: 'Yes，thats me !',
          zan: 10,
          collect: 20,
          comment: 80
        }
      ]
    }
  },
  computed: {
  }
}

</script>
<style lang="css">
.name {
 margin:10px;
 position:absolute;
 /* font-size: 20px; */
}
.time1 {
  position: fixed;
  margin-left: 1070px;
  position: absolute;
}
.content1 {
  margin: 1px;
}
.small {
  font-size: 12px;
  position: relative;
}
.box-card {
  width: 90%;
  height: 200px;
  margin-left: 85px;
  /* align-items: center; */
}
.img1 {
  margin-right: 1100px;
  margin-bottom: 20px;
  width: 100px;
  height: 80px;
  /* float: right; */
}
.img2 {
  margin-top: -30px;
  margin-right: 1045px;
  /* margin-bottom: 20px; */
  width: 100px;
  height: 80px;
  float: right;
}
.info {
  float: left;
}
.next {
  align-items: center;
  margin-top: 20px;
  padding-left: 380px;
}
.ans {
  width: 96%;
  padding-left: 85px;
}
</style>
