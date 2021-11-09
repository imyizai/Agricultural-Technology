<template>
  <nav class="nav">
    <div class="logo"><img src="../assets/logo.jpg"></div>
    <div class="el-menu-item" href="#">首页</div>
    <div class="el-menu-item" href="#">资讯</div>
    <div class="el-menu-item" href="#">视频</div>
    <div class="el-menu-item" href="#">提问</div>
    <div class="el-menu-item" link to="/comminicate">交流</div>
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
