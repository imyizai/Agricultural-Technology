<template>
  <div class="container">
  <div v-for="(item,index) in list" :key="index">
    <div class="main">
      <el-card class="box-card" >
      <div class="info">
          <el-avatar :size="size" :src="circleUrl"></el-avatar>
        <span class="name">{{item.name}}</span>
        <span class="time">{{item.time}}</span>
        <p class="content">{{item.content}}</p>
        <div class="small">
          <span>点赞:{{item.zan}}</span>
          <span>收藏:{{item.collect}}</span>
          <span>评论:{{item.comment}}</span>
        </div>
      </div>
      <div class="img">
      <img src="../assets/1.jpg" style="width: 100px; height: 100px">
      </div>
      </el-card>
    </div>
  </div>
  <div class="next">
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[3, 5, 7, 9]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="24">
    </el-pagination>
  </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      list: [
        {
          // avatar: 'http://first-bucket20201002.oss-cn-hangzhou.aliyuncs.com/img/img/picture/me.jpg',
          name: '迈克',
          time: '2021-11-14 22:30:01',
          content: 'hello, im Mike !',
          zan: 12,
          collect: 50,
          comment: 100
        },
        {
          // avatar: 'http://first-bucket20201002.oss-cn-hangzhou.aliyuncs.com/img/img/picture/me.jpg'
          name: '威尔',
          time: '2021-11-14 20:25:03',
          content: 'hello, im Will !',
          zan: 10,
          collect: 20,
          comment: 80
        },
        {
          // avatar: 'http://first-bucket20201002.oss-cn-hangzhou.aliyuncs.com/img/img/picture/me.jpg'
          name: '温蒂',
          time: '2021-11-13 12:30:55',
          content: 'hello, im Wendy !',
          zan: 20,
          collect: 61,
          comment: 121
        },
        {
          // avatar: 'http://first-bucket20201002.oss-cn-hangzhou.aliyuncs.com/img/img/picture/me.jpg'
          name: '玛丽',
          time: '2021-11-12 08:30:20',
          content: 'hello, im Mari !',
          zan: 20,
          collect: 33,
          comment: 95
        },
        {
          // avatar: 'http://first-bucket20201002.oss-cn-hangzhou.aliyuncs.com/img/img/picture/me.jpg',
          name: '迈克',
          time: '2021-11-14 22:30:01',
          content: 'hello, im Mike !',
          zan: 12,
          collect: 50,
          comment: 100
        },
        {
          // avatar: 'http://first-bucket20201002.oss-cn-hangzhou.aliyuncs.com/img/img/picture/me.jpg'
          name: '威尔',
          time: '2021-11-14 20:25:03',
          content: 'hello, im Will !',
          zan: 10,
          collect: 20,
          comment: 80
        },
        {
          // avatar: 'http://first-bucket20201002.oss-cn-hangzhou.aliyuncs.com/img/img/picture/me.jpg'
          name: '温蒂',
          time: '2021-11-13 12:30:55',
          content: 'hello, im Wendy !',
          zan: 20,
          collect: 61,
          comment: 121
        },
        {
          // avatar: 'http://first-bucket20201002.oss-cn-hangzhou.aliyuncs.com/img/img/picture/me.jpg'
          name: '玛丽',
          time: '2021-11-12 08:30:20',
          content: 'hello, im Mari !',
          zan: 20,
          collect: 33,
          comment: 95
        },
        {
          // avatar: 'http://first-bucket20201002.oss-cn-hangzhou.aliyuncs.com/img/img/picture/me.jpg',
          name: '迈克',
          time: '2021-11-14 22:30:01',
          content: 'hello, im Mike !',
          zan: 12,
          collect: 50,
          comment: 100
        },
        {
          // avatar: 'http://first-bucket20201002.oss-cn-hangzhou.aliyuncs.com/img/img/picture/me.jpg'
          name: '威尔',
          time: '2021-11-14 20:25:03',
          content: 'hello, im Will !',
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
.time {
  margin: 11px ;
  margin-left: 60px;
  position: absolute;
}
.content{
  margin: 25px;
}
.small{
  font-size: 12px;
  position: relative;
}
.el-card{
  width: 90%;
  height: 180px;
  margin-left: 85px;
  /* align-items: center; */
}
.img {
  float: right;
}
.info{
  float: left;
}
.next {
  align-items: center;
  margin-top: 20px;
  padding-left: 380px;
}
</style>
