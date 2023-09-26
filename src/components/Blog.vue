<script setup>
import { ref } from "vue";
import { auth, db } from "../firebase/init";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";

const blogs = ref([]);
const isShow = ref(false);
const updateBlogName = ref("");
const updateBlogDescription = ref("");
const currentId = ref("");

const getBlogPost = async () => {
  const querySnap = await getDocs(query(collection(db, "blog")));
  blogs.value = querySnap.docs;
};

getBlogPost();

const deleteBlogs = async (deleteId) => {
  alert("Delete Doc");
  await deleteDoc(doc(db, "blog", deleteId));
  getBlogPost();
};

const onShow = (currentUpdateId) => {
  isShow.value = true;
  currentId.value = currentUpdateId;
};

const updateBlog = async (updateId) => {
  try {
    const docRef = doc(db, "blog", updateId);

    await updateDoc(docRef, {
      blogName: updateBlogName.value,
      blog: updateBlogDescription.value,
    });

    getBlogPost();
  } catch (error) {
    alert(error.message);
  }
};
</script>

<template>
  <button class="btn_primary" @click="getBlogPost()">Refresh</button>
  <div style="margin: 100px">
    <div class="box">
      <div class="blog_post" v-for="(item, index) in blogs" :key="index">
        <div class="container_copy">
          <h1>{{ item.data().blogName }}</h1>
          <p>
            {{ item.data().blog }}
          </p>
          <div
            class="button-contr"
            v-if="auth.currentUser.photoURL === 'admin'"
          >
            <button
              v-if="item.id !== currentId"
              class="custom-button update"
              href="#"
              target="_blank"
              @click="onShow(item.id)"
            >
              Update
            </button>
            <button
              class="custom-button delete"
              target="_blank"
              @click="deleteBlogs(item.id)"
            >
              Delete
            </button>
          </div>
          <div v-if="isShow">
            <div style="margin-top: 20px" v-if="item.id === currentId">
              <div class="input-group">
                <label for="inputField1">Blog Name:</label>
                <input
                  type="text"
                  id="inputField1"
                  name="inputField1"
                  :placeholder="item.data().blogName"
                  v-model="updateBlogName"
                />
              </div>

              <div class="input-group">
                <label for="inputField2">Blog Description:</label>
                <input
                  type="text"
                  id="inputField2"
                  name="inputField2"
                  :placeholder="item.data().blog"
                  v-model="updateBlogDescription"
                />
              </div>
              <button href="#" target="_blank" @click="updateBlog(item.id)">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button-contr {
  display: flex;
  justify-content: start;
  gap: 20px;
  align-items: center;
}

.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.input-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
}
.box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}

.custom-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.update {
  background-color: #3498db;
}

.delete {
  background-color: #ff5e62;
}

/* Hover effect */
.custom-button:hover {
  background-color: #2980b9;
}
.blog_post {
  background: #fff;
  max-width: 500px;
  border-radius: 10px;
  box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
}

.container_copy {
  padding: 6rem 4rem 5rem 4rem;
}

.img_pod {
  height: 110px;
  width: 110px;
  background: linear-gradient(90deg, #ff9966, #ff5e62);
  z-index: 10;
  box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  border-radius: 100%;
  position: absolute;
  left: -10%;
  top: -13%;
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  height: 8.3rem;
  width: 8.3rem;
  position: relative;
  border-radius: 100%;
  box-shadow: 1px 1px 2rem rgba(0, 0, 0, 0.3);
  z-index: 1;
}

h3 {
  margin: 0 0 0.5rem 0;
  color: #999;
  font-size: 1.25rem;
}

h1 {
  margin: 0 0 1rem 0;
  font-size: 2.5rem;
  letter-spacing: 0.5px;
  color: #333;
}

p {
  margin: 0 0 4.5rem 0;
  font-size: 1.5rem;
  line-height: 1.45;
  color: #333;
}

.btn_primary {
  border: none;
  outline: none;
  background: linear-gradient(90deg, #ff9966, #ff5e62);
  padding: 1.5rem 2rem;
  border-radius: 50px;
  color: white;
  font-size: 1.2rem;
  box-shadow: 1px 10px 2rem rgba(255, 94, 98, 0.5);
  transition: all 0.2s ease-in;
  text-decoration: none;
  margin-left: 100px;
}

.btn_primary:hover {
  box-shadow: 0px 5px 1rem rgba(255, 94, 98, 0.5);
}

@media only screen and (max-width: 650px) {
  body {
    background-color: black;
  }

  .img_pod {
  }
}
</style>
