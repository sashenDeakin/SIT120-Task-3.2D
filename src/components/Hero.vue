<script>
defineProps({
  title: String,
});
</script>

<template>
  <header class="hero center px3 py4 white">
    <h1 class="h1 h0-responsive mt4 mb0 regular">{{ title }}</h1>
  </header>
</template>

<style scoped>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 200px;
  /*  background-image: url(http://graphicburger.com/preview/html-templates/outline/images/bg_2.jpg); */
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.hero h1 {
  font-family: Myriad Pro;
  color: #fff;
  text-align: center;
  font-weight: 700;
  font-size: 70px;
}
</style>
