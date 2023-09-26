<script setup>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/init";
import { useRouter } from "vue-router";
import { ref } from "vue";

const email = ref("");
const password = ref("");
const router = useRouter();

const login = () => {
  try {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(() => {
        alert("Login Successfully");
      })
      .catch((error) => {
        alert(error.message);
      })
      .then(() => {
        router.push("/");
      });
  } catch (error) {
    console.log(error.message);
  }
};
</script>

<template>
  <div class="bg-img" style="height: 80vh">
    <div class="content">
      <header>Login</header>
      <form action="#" @submit.prevent="login">
        <div class="field">
          <span class="fa fa-user"></span>
          <input
            type="text"
            required
            placeholder="Email or Phone"
            v-model="email"
          />
        </div>
        <div class="field space">
          <span class="fa fa-lock"></span>
          <input
            type="password"
            class="pass-key"
            v-model="password"
            required
            placeholder="Password"
          />
          <span class="show">SHOW</span>
        </div>
        <div class="pass">
          <a href="#">Forgot Password?</a>
        </div>
        <div class="field">
          <input type="submit" value="LOGIN" @click="login()" />
        </div>
      </form>
      <div class="login">Or login with</div>
      <div class="links">
        <div class="facebook">
          <i class="fab fa-facebook-f"><span>Facebook</span></i>
        </div>
        <div class="instagram">
          <i class="fab fa-instagram"><span>Instagram</span></i>
        </div>
      </div>
      <div class="signup">
        Don't have account?
        <a href="#"> <RouterLink to="/signup">Signup Now</RouterLink></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
  text-align: center;
  padding: 60px 32px;
  width: 370px;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.04);
  box-shadow: -1px 4px 28px 0px rgba(0, 0, 0, 0.75);
}
.content header {
  color: white;
  font-size: 33px;
  font-weight: 600;
  margin: 0 0 35px 0;
  font-family: "Montserrat", sans-serif;
}
.field {
  position: relative;
  height: 45px;
  width: 100%;
  display: flex;
  background: rgba(255, 255, 255, 0.94);
}
.field span {
  color: #222;
  width: 40px;
  line-height: 45px;
}
.field input {
  height: 100%;
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: #222;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
}
.space {
  margin-top: 16px;
}
.show {
  position: absolute;
  right: 13px;
  font-size: 13px;
  font-weight: 700;
  color: #222;
  display: none;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
}
.pass-key:valid ~ .show {
  display: block;
}
.pass {
  text-align: left;
  margin: 10px 0;
}
.pass a {
  color: white;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
}
.pass:hover a {
  text-decoration: underline;
}
.field input[type="submit"] {
  background: #3498db;
  border: 1px solid #2691d9;
  color: white;
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 600;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
}
.field input[type="submit"]:hover {
  background: #2691d9;
}
.login {
  color: white;
  margin: 20px 0;
  font-family: "Poppins", sans-serif;
}
.links {
  display: flex;
  cursor: pointer;
  color: white;
  margin: 0 0 20px 0;
}
.facebook,
.instagram {
  width: 100%;
  height: 45px;
  line-height: 45px;
  margin-left: 10px;
}
.facebook {
  margin-left: 0;
  background: #4267b2;
  border: 1px solid #3e61a8;
}
.instagram {
  background: #e1306c;
  border: 1px solid #df2060;
}
.facebook:hover {
  background: #3e61a8;
}
.instagram:hover {
  background: #df2060;
}
.links i {
  font-size: 17px;
}
i span {
  margin-left: 8px;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
}
.signup {
  font-size: 15px;
  color: white;
  font-family: "Poppins", sans-serif;
}
.signup a {
  color: #3498db;
  text-decoration: none;
}
.signup a:hover {
  text-decoration: underline;
}
</style>
