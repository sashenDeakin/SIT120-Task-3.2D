<script setup>
import { ref } from "vue";
import { auth, db } from "../firebase/init";
import { collection, addDoc } from "firebase/firestore";

const userName = ref("");
const blogName = ref("");
const blogDes = ref("");

const createBlogPost = async (e) => {
  e.preventDefault();

  try {
    const colRef = collection(db, "blog");

    const blogObjects = {
      userName: userName.value,
      blogName: blogName.value,
      blog: blogDes.value,
      time: Date.now(),
    };

    const dogRef = await addDoc(colRef, blogObjects);

    blogName.value = "";
    blogDes.value = "";
  } catch (error) {
    console.log(error.message);
  }
};
</script>

<template>
  <div class="subscribe-box" v-if="auth.currentUser">
    <h2>Create Blog</h2>
    <form class="subscribe" v-if="auth.currentUser.photoURL === 'admin'">
      <input
        type="text"
        placeholder="Blog Name"
        autocomplete="off"
        required="required"
        v-model="blogName"
      />
      <input
        type="text"
        placeholder="Blog Description"
        autocomplete="off"
        required="required"
        v-model="blogDes"
      />
      <button @click="createBlogPost">Submit</button>
    </form>
  </div>
</template>

<style scoped>
.subscribe-box {
  background: transparent;
  font-family: "Gothic A1", serif;
  padding: 6em 0;
  text-align: center;
}
.subscribe-box h2 {
  margin: 0 0 0.85em 0;
  font-weight: 100;
  font-size: 30px;
  font-family: "Marcellus", serif;
}
.subscribe-box .subscribe {
  width: 100%;
  max-width: 600px;
  margin: auto;
}
.subscribe-box .subscribe input {
  width: 100%;
  background: transparent;
  border: 0;
  border-bottom: 1px solid;
  padding: 1em 0 0.8em;
  text-align: center;
  font-size: 18px;
  font-family: inherit;
  font-weight: 300;
  line-height: 1.5;
  color: inherit;
  outline: none;
}
.subscribe-box .subscribe input::-moz-placeholder {
  color: rgba(255, 255, 255, 0.5);
}
.subscribe-box .subscribe input:-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.5);
}
.subscribe-box .subscribe input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}
.subscribe-box .subscribe button {
  all: unset;
  margin-top: 2.4em;
  background: transparent;
  border: 2px solid white;
  padding: 1em 4em;
  border-radius: 50px;
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  position: relative;
  transition: all 300ms ease;
}
.subscribe-box .subscribe button span {
  display: inline-block;
  transition: all 300ms ease;
}
.subscribe-box .subscribe button:before,
.subscribe-box .subscribe button:after {
  content: "";
  display: block;
  position: absolute;
  transition: all 300ms ease;
  opacity: 0;
}
.subscribe-box .subscribe button:before {
  height: 7px;
  width: 7px;
  background: transparent;
  border-right: 2px solid;
  border-top: 2px solid;
  right: 30px;
  top: 21px;
  transform: rotate(45deg);
}
.subscribe-box .subscribe button:after {
  background: white;
  height: 2px;
  width: 50px;
  left: 0;
  top: 1.49em;
}
.subscribe-box .subscribe button:hover span {
  transform: translateX(-10px);
}
.subscribe-box .subscribe button:hover:before {
  opacity: 1;
}
.subscribe-box .subscribe button:hover:after {
  width: 14px;
  opacity: 1;
  transform: translateX(160px);
}
</style>
