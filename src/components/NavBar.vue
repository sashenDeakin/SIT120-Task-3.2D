<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="main">
    <div class="navbar">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/33/Cartoon_space_rocket.png"
        class="logo"
      />
      <ul>
        <li>
          <a href=""><RouterLink to="/">HOME</RouterLink></a>
        </li>
        <li>
          <a href=""><RouterLink to="/about">ABOUT</RouterLink></a>
        </li>
        <li>
          <a href="#"><RouterLink to="/skill">SKILLS</RouterLink></a>
        </li>
        <li>
          <a href="#"><RouterLink to="/work">MY WORKS</RouterLink></a>
        </li>
        <li>
          <a href="#"><RouterLink to="/contact">CONTACT</RouterLink></a>
        </li>
        <li>
          <a href="#"><RouterLink to="/login">LOGIN</RouterLink></a>
        </li>
      </ul>
    </div>
    <div class="info">
      <!--  <h3>Hi, I'm <span>Sashen</span>.</h3> -->
      <div class="waviy">
        <span style="--i: 1">I'</span>
        <span style="--i: 2">M</span>
        <span style="--i: 3">" "</span>
        <span style="--i: 4">S</span>
        <span style="--i: 5">A</span>
        <span style="--i: 6">S</span>
        <span style="--i: 7">H</span>
        <span style="--i: 8">E</span>
        <span style="--i: 9">N</span>
        <!--   <span style="--i: 10">N</span> -->
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1 class="animate-charcter">WED DESIGNER</h1>
          </div>
        </div>
      </div>
      <div class="icon-list">
        <a href="https://github.com/SashenJayathilaka"
          ><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        /></a>
        <a href="https://www.linkedin.com/in/sashen-jayathilaka-9a7170231"
          ><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
        /></a>
        <a href="https://twitter.com/SashenHasinduJ">
          <img
            src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png"
        /></a>
        <a href="https://sashenjayathilaka.online/">
          <img
            src="https://cdn.pixabay.com/photo/2016/08/31/00/44/www-1632431_1280.png"
        /></a>
      </div>

      <a class="button-style" href="#">Hire Me</a>
    </div>

    <div class="image">
      <img
        src="https://static.vecteezy.com/system/resources/previews/022/506/235/non_2x/free-spaceman-illustration-icon-free-png.png"
        class="girl"
      />
    </div>
    <div class="icons">
      <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
      <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
      <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  width: 86%;
  display: flex;
  margin: auto;
  padding: 15px 0;
  align-items: center;
  justify-content: space-between;
}

.icon-list {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
  width: 150px;
}

.icon-list > a > img {
  width: 30px;
  text-decoration: none;
}

.navbar .logo {
  width: 100px;
  cursor: pointer;
  margin-left: -2%;
}

ul {
  margin-top: -4%;
}

ul li {
  list-style: none;
  display: inline-block;
  padding: 10px 16px;
}

ul li a {
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  color: #ff8a71;
  margin-top: -3%;
  transition: 0.4s ease;
}

ul li a:hover {
  color: rgb(230, 104, 59);
}

.info {
  margin-left: 7%;
  align-items: center;
  margin-top: 15%;
}

.info h1 {
  font-size: 85px;
  color: rgb(36, 32, 30);
}

.info h3 {
  font-size: 25px;
  letter-spacing: 1px;
  line-height: 24px;
}

.info span {
  color: rgb(230, 104, 59);
}

.button-style {
  text-decoration: none;
  color: #fff;
  background: rgb(36, 32, 30);
  margin: 26px 0;
  padding: 10px 18px;
  border-radius: 10px;
  display: inline-block;
  transition: 0.4s ease;
}

.button-style:hover {
  background: rgb(59, 174, 209);
}

.image {
  width: 30%;
  height: 60%;
  position: absolute;
  right: 100px;
  bottom: 0;
}

.image img {
  position: absolute;
  height: 140%;
  left: 40%;
  transform: translate(-55%);
  bottom: 0;
  transition: left 2s ease;
}

.image:hover .girl {
  left: 55%;
}

.icons a {
  text-decoration: none;
  color: #000;
}

.icons ion-icon {
  margin-left: 7%;
  color: #000;
  margin-right: -60px;
  font-size: 40px;
  transition: 0.4s ease;
}

.icons ion-icon:hover {
  color: rgb(59, 174, 209);
}

.animate-charcter {
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #231557 0%,
    #44107a 29%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 190px;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

.waviy {
  position: relative;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
  font-size: 60px;
}
.waviy span {
  font-family: "Alfa Slab One", cursive;
  position: relative;
  display: inline-block;
  color: #fff;
  text-transform: uppercase;
  animation: waviy 1s infinite;
  animation-delay: calc(0.1s * var(--i));
}
@keyframes waviy {
  0%,
  40%,
  100% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-20px);
  }
}
</style>
