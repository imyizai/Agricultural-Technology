<template>
 <div id="app">
   <header>
     <Navbar />
     <router-view comminicate></router-view>
   </header>
 </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  header {
    background: dimgrey;
    width: auto;
    height: 20px;
  }
</style>
