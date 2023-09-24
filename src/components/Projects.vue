<script setup>
defineProps({
  isShow: Boolean,
});
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
      <a href="images/b-1.jpg" class="portfolio-box app" data-lightbox="work">
        <img
          alt=""
          src="https://camo.githubusercontent.com/4526dcc3ded0ed06b6274a47f7161b463af0391019dcbd168f809b3052e4f171/68747470733a2f2f646c2e64726f70626f7875736572636f6e74656e742e636f6d2f73636c2f66692f6e33386d36736b70686a716b7476787275686564372f356238356561323134373263353034643565326238323537666165392e706e673f726c6b65793d3035746d3138306e74307166786b333568786b39666973703226646c3d30"
          class="demo-img"
        />
        <p style="text-align: center; font-weight: 700; font-size: 20px">
          Awesome Github Readme Generator
        </p>
        <div class="demo">
          <button class="ui-button">Demo</button>
          <button class="ui-button">Source Code</button>
        </div>
      </a>
      <a href="images/b-1.jpg" class="portfolio-box app" data-lightbox="work">
        <img
          alt=""
          src="https://cdn.sanity.io/images/5mm9u6u8/production/4d9159a4388e316ecf350db91026683ab5aefb2a-3500x3500.png"
          class="demo-img"
        />
        <p style="text-align: center; font-weight: 700; font-size: 20px">
          Reddit Clone with REACT.JS
        </p>
        <div class="demo">
          <button class="ui-button">Demo</button>
          <button class="ui-button">Source Code</button>
        </div>
      </a>
      <a href="images/b-1.jpg" class="portfolio-box app" data-lightbox="work">
        <img
          alt=""
          src="https://cdn.sanity.io/images/5mm9u6u8/production/afd4fe25b3afabfe76e95c0a3d112b4d2a24bc6c-768x768.png"
          class="demo-img"
        />
        <p style="text-align: center; font-weight: 700; font-size: 20px">
          Instagram Clone with React.JS
        </p>
        <div class="demo">
          <button class="ui-button">Demo</button>
          <button class="ui-button">Source Code</button>
        </div>
      </a>
      <a href="images/b-1.jpg" class="portfolio-box app" data-lightbox="work">
        <img
          alt=""
          src="https://cdn.sanity.io/images/5mm9u6u8/production/9e4fc5fa01f8b18f8a005fa544ef8c6cceeb5437-1024x1024.png"
          class="demo-img"
        />
        <p style="text-align: center; font-weight: 700; font-size: 20px">
          Discord 2.0 with REACT.JS
        </p>
        <div class="demo">
          <button class="ui-button">Demo</button>
          <button class="ui-button">Source Code</button>
        </div>
      </a>
      <a href="images/b-1.jpg" class="portfolio-box app" data-lightbox="work">
        <img
          alt=""
          src="https://cdn.sanity.io/images/5mm9u6u8/production/82badf1c10a2607e2d1d7453740762096f05d576-1600x1200.png"
          class="demo-img"
        />
        <p style="text-align: center; font-weight: 700; font-size: 20px">
          Airbnb Clone with Next.js 13!
        </p>
        <div class="demo">
          <button class="ui-button">Demo</button>
          <button class="ui-button">Source Code</button>
        </div>
      </a>
      <a href="images/b-1.jpg" class="portfolio-box app" data-lightbox="work">
        <img
          alt=""
          src="https://camo.githubusercontent.com/79ef84c098dbe8924e95c43a95859ceed636c264b2667726c4b5a98cf3a44fdb/68747470733a2f2f6c68352e67677068742e636f6d2f326c3571793453393359777131435a62457562566f664d62533176764679414d4d476f4747623661774f51587362317264395670777145456f4f364b596c596c414d773d77333030"
          class="demo-img"
        />
        <p style="text-align: center; font-weight: 700; font-size: 20px">
          Photo Sharing Application with REACT.JS!
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
  padding: 15px;
  border: 1px solid #eeeeee;
  margin: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
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
