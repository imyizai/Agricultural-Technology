<template>
  <nav class="nav">
    <div class="logo"><img src="../assets/logo.png"></div>
    <div class="el-menu-item" href="#">首页</div>
    <div class="el-menu-item" href="#">资讯</div>
    <div class="el-menu-item" href="#">视频</div>
    <div class="el-menu-item" href="#">提问</div>
    <div class="el-menu-item" href="#">交流</div>
    <div class="el-menu-item" href="#">直播</div>
    <div class="el-menu-item" href="#">供求信息</div>
    <div class="el-menu-item" href="#">知网书屋</div>

  </nav>
</template>
<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="css">
nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .el-menu-item {
  color:black;
  padding: 15px 35px;
  position: relative;
  text-align: center;
  border-bottom: transparent;
  display: flex;
  flex-direction: row;
  transition: 0.4s;
  font-size: larger;
  font-weight: bold;
}
nav .el-menu-item:hover {
  background-color: darkgray;
  border-bottom: solid 6px;
  border-bottom-color: brown;
  height: 80px;
}
.nav {
    background-color:#fff;
}
</style>
