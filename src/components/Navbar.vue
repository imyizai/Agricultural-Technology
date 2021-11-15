<template>
  <nav class="nav">
    <div class="logo"><img src="../assets/logo.jpg"></div>
    <div class="el-menu-item" @click="push('home')">首页</div>
    <div class="el-menu-item" @click="push('news')">资讯</div>
    <div class="el-menu-item" @click="push('video')">视频</div>
    <div class="el-menu-item" @click="push('questions')">提问</div>
    <div class="el-menu-item" @click="push('comminicate')">交流</div>
    <div class="el-menu-item" @click="push('live')">直播</div>
    <div class="el-menu-item" @click="push('message')">供求信息</div>
    <div class="el-menu-item" @click="push('bookstore')">知网书屋</div>
  </nav>
</template>
<script>

export default {
  name: 'Navbar',
  methods: {
    push (path) {
      console.log(path)
      this.$router.push('/' + path)
    }
  }
}

</script>

<style lang="css">
nav {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .logo{
  height: 150px;
  width: 180px;
  padding-right:550px;
  display: flex;
  background-color: #fff;
}
nav .el-menu-item {
  color:black;
  padding:1px 20px;
  position: relative;
  text-align: center;
  border-bottom: transparent;
  display: flex;
  flex-direction: row;
  transition: 0.4s;
  font-size:larger;
  font-weight: bold;
}
nav .el-menu-item:hover {
  background-color: #fff;
  border-bottom: solid 2px;
  border-bottom-color: #009e01;
  height: 80px;
}

</style>
