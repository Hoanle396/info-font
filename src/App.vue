<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  
}
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
body{
  background-attachment:fixed;
  background-repeat: no-repeat;
  /* background-image: url('./assets/hinh-nen-thien-nhien-dep-nhat-100-1024x576.jpg'); */
  background-image: url('./assets/hinh-nen.jpg');
  overflow-x:hidden !important;
}
</style>
