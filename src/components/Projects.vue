<script setup>
import { onMounted, ref } from "vue";

defineProps({
  isShow: Boolean,
});

const projects = ref([]);

const fetchPost = async () => {
  try {
    const response = await fetch(
      "https://globalmusicbeats.github.io/skill/project.json"
    );
    if (response.ok) {
      const data = await response.json();
      projects.value = data;
    } else {
      console.error("Failed to fetch JSON data:", response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
};

onMounted(fetchPost);
</script>

<template>
  <section id="project">
    <div class="project-heading">
      <span v-if="isShow">Let's See My Work</span>
      <h3 v-if="isShow">MY PROJECTS</h3>
    </div>
    <ul class="portfolio-filter">
      <li class="list portfolio-filter-active" data-filter="all">All</li>
      <li class="list" data-filter="app">Application</li>
      <li class="list" data-filter="appdesign">App Design</li>
      <li class="list" data-filter="web">Website Designs</li>
      <li class="list" data-filter="ai">AI</li>
    </ul>
    <div class="portfolio-container">
      <a
        href="images/b-1.jpg"
        class="portfolio-box app"
        data-lightbox="work"
        v-for="(project, index) in projects"
        :key="index"
      >
        <img alt="" :src="project.image" class="demo-img" />
        <p style="text-align: center; font-weight: 700; font-size: 20px">
          {{ project.name }}
        </p>
        <div class="demo">
          <button class="ui-button">Demo</button>
          <button class="ui-button">Source Code</button>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  font-family: poppins;
  box-sizing: border-box;
}

.demo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
}

a {
  text-decoration: none;
}
ul {
  list-style: none;
}
body {
  margin: 0px;
  padding: 0px;
  font-family: poppins;
}
#project {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px 0px;
}
.project-heading {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
.project-heading h3 {
  font-size: 2.7rem;
  font-weight: 600;
  text-transform: uppercase;
}
.project-heading span {
  color: #f33c3c;
}
.portfolio-filter {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border: 1px solid rgb(237, 237, 237, 0.6);
  flex-wrap: wrap;
  margin: 20px;
}
.portfolio-filter li {
  margin: 10px;
  padding: 5px 20px;
  color: #9b9b9b;
  font-size: 1rem;
  letter-spacing: 0.5px;
  font-weight: 400;
  cursor: pointer;
  user-select: none;
}
.portfolio-filter-active {
  background-color: #f0f0f0;
  color: #272727 !important;
}
.portfolio-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
}
.portfolio-box {
  width: 330px;
  height: 330px;
  padding: 15px;
  border: 1px solid #eeeeee;
  margin: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: #addfff;
}

.portfolio-box img {
  width: 50%;
  border-radius: 5px;
  overflow: hidden;
  align-items: center;
}

.ui-button {
  display: inline-block;
  padding: 8px 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.ui-button:hover {
  background-color: #2980b9;
}

@media (max-width: 740px) {
  .portfolio-filter {
    background-color: #f9f9f9;
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
  .portfolio-filter-active {
    background-color: #ffffff;
    border: 1px solid rgb(219, 219, 219);
  }
  .portfolio-box {
    width: 80%;
  }
}
@media (max-width: 550px) {
  .project-heading h3 {
    font-size: 1.8rem;
  }
}
</style>
