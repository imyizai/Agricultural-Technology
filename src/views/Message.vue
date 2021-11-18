<template>
  <div class="container">
    <div class="cont">
      <div class="lo">
        <div class="lo1">
          <img class="logo1" src="../assets/1.jpg" />
          <p class="logotext">供求 统计</p>
          <div class="lo2">
            <p>供应数量：8545</p>
            <p class="l">求购数量：1256</p>
          </div>
        </div>
      </div>

      <div class="frame">
        <div class="fra">
          <p>供应</p>
          <p class="f1">求购</p>

          <div class="ff2">
            <div class="f2">
              <p>各种花卉</p>
              <img class="imf" src="../assets/message/013.jpg" />
            </div>
            <div class="f3">
              <p>出售各种绿化苗木...[详情]</p>
              <p class="fp">2021-11-13 22:10:39</p>
            </div>
          </div>

          <div class="ff3">
            <div class="f2">
              <p>塘蟹</p>
              <img class="imf" src="../assets/message/014.jpg" />
            </div>
            <div class="f3">
              <p>3母4公...[详情]</p>
              <p class="fp">2021-11-13 09:26:13</p>
            </div>
          </div>

          <div class="ff3">
            <div class="f2">
              <p>花白鲢</p>
              <img class="imf" src="../assets/message/015.jpg" />
            </div>
            <div class="f3">
              <p>白4花4...[详情]</p>
              <p class="fp">2021-11-13 09:24:19</p>
            </div>
          </div>

          <div class="ff3">
            <div class="f2">
              <p>无絮杨树苗</p>
              <img class="imf" src="../assets/message/016.jpg" />
            </div>
            <div class="f3">
              <p>大量出售无絮杨树苗，种苗，1.5—10公分的都有，...[详情]</p>
              <p class="fp">2021-11-12 18:43:46</p>
            </div>
          </div>

          <div class="ff3">
            <div class="f2">
              <p>鸡蛋</p>
              <img class="imf" src="../assets/message/017.jpg" />
            </div>
            <div class="f3">
              <p>鸡蛋...[详情]</p>
              <p class="fp">2021-11-10 15:51:38</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style>
.frame {
  display: flex;
  flex-direction: column;
  /* margin-left: 20px; */
  background-color: rgba(226, 225, 225, 0.164);
  width: 80%;
}
.fra {
  margin-left: 20px;
}
.container {
  width: 70%;
  display: flex;
  margin: auto;
}
.cont {
  padding-top: 20px;
  display: flex;
  margin-left: auto;
}
.lo {
  width: 280px;
  /* background-color: rgb(238, 30, 30); */
  background-color: rgba(226, 225, 225, 0.164);
}
.lo1 {
  width: 240px;
  margin: auto;
}
.lo2 {
  width: 240px;
  text-align: center;
  font-family: "宋体";
}
.l {
  margin-top: 20px;
}
.logo1 {
  width: 240px;
  height: 100px;
  opacity: 0.3 ;
}
.logotext {
  position: relative;
  top: -65px;
  text-align: center;
  font-weight: bold;
}
.f1 {
  margin-top: -21px;
  margin-left: 50px;
}
.imf {
  margin-top: 20px;
  width: 150px;
  height: 100px;
}
.f2 {
  font-size: 20px;
}
.ff2 {
  padding-top: 40px;
}
.ff3 {
  padding-top: 80px;
}
.f3 {
  margin-left: 170px;
  margin-top: -100px;
}
.fp {
}
</style>
