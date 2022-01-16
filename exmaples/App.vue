<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Demo></Demo>
    <m-card 
    imgSrc="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F4k%2Fs%2F02%2F2109242332225H9-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644845569&t=6a8977928d8aad6228c0c6e2efe8324b"
    summary="这是我配置的详情内容"
    :imgHeight="imgHeight"
    >
    <template v-slot:footer>
       <div class="footer">
         <div class="level">
           火影忍者-波风水门
         </div>
         <div class="price">螺旋丸</div>
       </div>
    </template>
    </m-card>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      imgHeight:200
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
