<template>
  <div>
    <!-- 图片主体区域 -->
    <div>
      <ul>
        <!--  v-show="index===num" 只显示当前需要显示的图片，其他的都隐藏-->
        <li
          v-for="(imgUrl, index) in bannerList"
          :key="index"
          style="float: left"
          v-show="index === num"
        >
          <a href="#">
            <img :src="imgUrl.src" style="width: 200px; height: 200px" />
          </a>
        </li>
      </ul>
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

    <!-- 左右箭头 -->
    <div class="arrow">
      <span class="arrow_left" @click="arrowLeft"> &lt; </span>
      <span class="arrow_right" @click="arrowRight"> &gt; </span>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    num: 0,
    timer: null,
    bannerList: [
      'http://first-bucket20201002.oss-cn-hangzhou.aliyuncs.com/img/img/picture/1.jpg',
      'http://first-bucket20201002.oss-cn-hangzhou.aliyuncs.com/img/img/picture/10.jpg',
      'http://first-bucket20201002.oss-cn-hangzhou.aliyuncs.com/img/img/picture/3.jpg',
      'http://first-bucket20201002.oss-cn-hangzhou.aliyuncs.com/img/img/picture/2.jpg',
      'http://first-bucket20201002.oss-cn-hangzhou.aliyuncs.com/img/img/picture/5.jpg'
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
