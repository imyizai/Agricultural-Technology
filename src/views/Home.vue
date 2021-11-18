<template>
  <div >
    <!-- 图片主体区域 -->
    <div>
        <!--  v-show="index===num" 只显示当前需要显示的图片，其他的都隐藏-->
        <div
          v-for="(imgUrl, index) in bannerList"
          :key="index"
          style="float: left; width:100%; height:240px;margin-left:-60px;margin-top:20px"
          v-show="index === num"
>
            <img :src="imgUrl" class="img" />
        </div>
    </div>
    <!-- 小圆圈 -->
    <div class="bar">
      <span
        v-for="(imgUrl, index) in bannerList"
        :key="index"
        class="circle"
        :class="{ activeCircle: index === num }"
        @click="circleClick(index, imgUrl)"
      ></span>
      <!-- 可以把当前的index和当前的元素传给这个事件，然后对进行处理-->
    </div>
    <div class="fontpage">
      <div class="point">
        <div>头条</div>
      </div>
      <div class="item">
        <div class="item-cards">
          <div class="item-card"></div>
          <div class="item-card"></div>
        </div>
        <div class="item-cards">
          <div class="item-card"></div>
          <div class="item-card"></div>
        </div>
      </div>
      <div>
          <div class="more" @click="push('news')">查看更多</div>
      </div>
    </div>
     <div class="fontpage">
      <div class="point" style="background-color:#10d063 ;">
        <div>提问</div>
      </div>

      <div>
        <div class="more" @click="push('news')">查看更多</div>
      </div>
    </div>
      <div class="fontpage">
        <div class="point" style="background-color:#2790da ;">
          <div>视频</div>
        </div>
      <div>
          <div class="more" @click="push('news')">查看更多</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    num: 0,
    timer: null,
    bannerList: [
      'http://object.jsnjy.net.cn/OSS/20211111/37359cfc57834c7691e82fb93685bec9.jpg',
      'http://object.jsnjy.net.cn/OSS/20211027/bff2415b71144909b3458ad0cd08e614.jpg',
      'http://object.jsnjy.net.cn/OSS/20211112/99117716bc9643208cdceec67b5be572.jpg',
      'http://object.jsnjy.net.cn/OSS/20211109/10b236b05f0b42dfb893076c5a3b9d83.jpg',
      'http://object.jsnjy.net.cn/OSS/20211112/9e3e535de539461a95b78ee3a1762043.jpg'

    ] // 轮播图数组
  }),
  methods: {
    // 自动轮播
    autoPlay () {
      this.num++
      if (this.num === this.bannerList.length) {
        this.num = 0
      }
    },
    // 设置计时器，周期循环，在created生命周期调用这个函数
    set () {
      this.timer = setInterval(this.autoPlay, 2000)
    },
    // 删除定时器
    // 主要用于优化效果,（比如设置定时器为2秒，当在1.9秒的时候点击了左/右箭头/小圆圈，则会出发事件切换图片，但是会出现在0.1秒后又会立马触发定时器事件（0.1秒后立马又切换图片）的问题；
    // 解决这个问题的方法是 在点击 箭头、圆圈时，把定时器清除掉（clear方法），然后切换图片后再重新设置定时器（set方法））
    clear () {
      clearInterval(this.timer)
    },
    // 点击左右箭头
    arrowLeft () {
      this.clear()
      this.num--
      this.set()
      if (this.num < 0) {
        this.num = this.bannerList.length - 1
      }
    },
    arrowRight () {
      this.clear()
      this.num++
      this.set()
      if (this.num > this.bannerList.length - 1) {
        this.num = 0
      }
    },
    // 点击小圆圈
    circleClick (index, imgUrl) {
      this.clear()
      this.num = index
      this.set()
    }
  },
  // created生命周期
  created () {
    this.set()
  }
}
</script>
<style scoped>
.img{
  width: 90%;
  height: 260px ;

}
.fontpage{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 450px;
}
.point{
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color:#e85a00;
  margin-top: 50px;
  margin-left: 70px;
  display:flex;
  justify-content:center;
  align-items: center;
  color: #ffffff;
}
.item{
  background-color: #ffffff ;
  display: flex;
  flex-direction: row;
  margin-left: 5%;
  margin-top: -20px;
  margin-left: 5%;
  z-index: -1;
  width: 90%;
  height: 320px;
}
.item-cards{
  background-color: #ffffff ;
  width: 100%;
  height: 50%;
}
.item-card{
  background-color: #fafafa ;
  margin-top:4% ;
  margin-left: 5%;
  width: 90%;
  height: 80%;
}
.more{
  background-color:  #ffffff;
  width: 90%;
  margin-left: 5%;
  height: 40px;
   display:flex;
  justify-content:center;
   align-items: center;
   margin-top: 1.5px;
}
</style>
