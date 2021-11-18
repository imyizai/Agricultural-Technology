<template>
  <div>
    <div class="container">
      <img class="image" src="../assets/bookstore/004.jpg" />
    </div>
    <div class="container2">
      <div class="kua1">
        <img class="image1" src="../assets/bookstore/003.jpg" />
        <p class="name1">期刊</p>
      </div>

      <div class="kua2">
        <img class="image2" src="../assets/bookstore/006.jpg" />
        <p class="name2">图书</p>
      </div>
    </div>

    <div class="container2">
      <div class="kua1">
        <img class="image1" src="../assets/bookstore/009.jpg" />
        <p class="name1">视屏</p>
      </div>

      <div class="kua2">
        <img class="image2" src="../assets/bookstore/012.jpg" />
        <p class="name2">挂图</p>
      </div>
    </div>
  </div>

</template>

<script>
</script>

<style>
.name1,
.name2 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "宋体";
  font-size: 20px;
  font-weight: bold;
}
.kua1 {
  margin-top: 50px;
  margin-right: 180px;
}
.kua2 {
  margin-top: 50px;
  margin-left: 180px;
}
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container2 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.image {
  width: 70%;
  margin-top: 50px;
}
.image1 {
  width: 200px;
  height: 200px;
}
.image2 {
  width: 200px;
  height: 200px;
}
</style>
