<template>
  <div class="logo" flex justify-start align-center>
    <img :src="Logo" w30px h30px class="img" />
    <div ml4 class="title">Kuroko</div>
  </div>
</template>

<script setup lang="ts">
import Logo from '../assets/logo.png'
</script>

<style scoped lang="less">
.logo{
    font-size: 16px;
    // line-height: 100%;
    align-items: center;
}
.img{
  display: block;
  margin-left: 32px;
}
.title{
    font-size: 24px;
    color:#acacac;
    font-family: PingFangSC-Semibold, sans-serif;
    position: relative;
    line-height: 60px;
}
.title::after{
    content: 'Kuroko';
    color: #ffedd5;
    position: absolute;
    right: 2px;
}
</style>
