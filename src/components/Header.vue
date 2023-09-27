<script setup>
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { auth } from "../firebase/init.js";
import { signOut } from "firebase/auth";

const name = ref("");
const router = useRouter();

const loggedInOut = () => {
  try {
    signOut(auth)
      .then(() => {
        name.value = "";
      })
      .then(() => {
        alert("LoginOut Success!");
        router.push("/login");
      });
  } catch (error) {
    console.log(error.message);
  }
};

if (auth.currentUser) {
  name.value = auth.currentUser.displayName;
}
</script>

<template>
  <div class="navbar" style="overflow: hidden">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/3/33/Cartoon_space_rocket.png"
      class="logo"
    />
    <ul>
      <li>
        <a href=""><RouterLink to="/">HOME</RouterLink></a>
      </li>
      <!--       <li>
        <a href=""><RouterLink to="/about">ABOUT</RouterLink></a>
      </li>
      <li>
        <a href="#"><RouterLink to="/skill">SKILLS</RouterLink></a>
      </li> -->
      <li>
        <a href="#"><RouterLink to="/work">MY WORKS</RouterLink></a>
      </li>
      <li>
        <a href="#"><RouterLink to="/contact">CONTACT</RouterLink></a>
      </li>
      <li>
        <a href="#"><RouterLink to="/resume">RESUME</RouterLink></a>
      </li>
      <li v-if="auth.currentUser">
        <a href="#"><RouterLink to="/blog">MY BLOG</RouterLink></a>
      </li>
      <li v-if="!name">
        <a href="#"><RouterLink to="/login">LOGIN</RouterLink></a>
      </li>
      <li v-else @click="loggedInOut()">
        <a href="#">SIGN OUT</a>
      </li>
    </ul>
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
</style>
