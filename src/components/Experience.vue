<script setup>
defineProps({
  isShow: Boolean,
});
</script>

<template>
  <section id="experience">
    <p v-if="isShow" class="section__text__p1">Explore My</p>
    <h1 v-if="isShow" class="title">Experience</h1>
    <div class="experience-details-container">
      <div class="about-containers">
        <div class="details-container">
          <h2 class="experience-sub-title">Frontend Development</h2>
          <div class="article-container">
            <article>
              <img
                src="https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png"
                alt="Experience icon"
                class="icon"
              />
              <div>
                <h3>HTML</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img
                src="https://th.bing.com/th/id/R.12644856e97889db8644e1c8cac2a426?rik=K1L5Z4p4p5pXUA&riu=http%3a%2f%2fbenjaminfevrat.com%2fpictures%2ftechnos_logo%2fcss_logo.png&ehk=eB%2bU19LWYMMG1m%2bGIInA%2bXGa6TI2yDz%2f8FJ08iKSX00%3d&risl=&pid=ImgRaw&r=0"
                alt="Experience icon"
                class="icon"
              />
              <div>
                <h3>CSS</h3>
                <p>Experienced</p>
              </div>
            </article>
            <article>
              <img
                src="https://miro.medium.com/max/1024/1*9U1toerFxB8aiFRreLxEUQ.png"
                alt="Experience icon"
                class="icon"
              />
              <div>
                <h3>SASS</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img
                src="https://th.bing.com/th/id/R.3c7053268b216e0f3cd081fdcff3c1e9?rik=%2fCD4EjWyxYCGlw&pid=ImgRaw&r=0"
                alt="Experience icon"
                class="icon"
              />
              <div>
                <h3>JavaScript</h3>
                <p>Basic</p>
              </div>
            </article>
            <article>
              <img
                src="https://th.bing.com/th/id/R.86a627bd7a966a122f44164ab2b445e7?rik=YChLImhMC9h%2fyw&pid=ImgRaw&r=0"
                alt="Experience icon"
                class="icon"
              />
              <div>
                <h3>TypeScript</h3>
                <p>Basic</p>
              </div>
            </article>
            <article>
              <img
                src="https://th.bing.com/th/id/R.ae988748ef23e4d83d773a1b91cbc091?rik=XrgOxGS6yv5%2bAA&pid=ImgRaw&r=0"
                alt="Experience icon"
                class="icon"
              />
              <div>
                <h3>Material UI</h3>
                <p>Intermediate</p>
              </div>
            </article>
          </div>
        </div>
        <div class="details-container">
          <h2 class="experience-sub-title">Backend Development</h2>
          <div class="article-container">
            <article>
              <img
                src="https://th.bing.com/th/id/R.bab2c760c60f17191cb3a002e08a3dbf?rik=zJoEjAb2we9vbQ&pid=ImgRaw&r=0"
                alt="Experience icon"
                class="icon"
              />
              <div>
                <h3>SQL</h3>
                <p>Basic</p>
              </div>
            </article>
            <article>
              <img
                src="https://th.bing.com/th/id/R.093bd57c711ea2f031fb4579f9da9547?rik=BkDQC6mdRxAxOA&pid=ImgRaw&r=0"
                alt="Experience icon"
                class="icon"
              />
              <div>
                <h3>Node JS</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img
                src="https://th.bing.com/th/id/R.8587dd0647ca82fb4ca0372a93f2e358?rik=2LnrvTZ4bwvqUg&pid=ImgRaw&r=0"
                alt="Experience icon"
                class="icon"
              />
              <div>
                <h3>Express JS</h3>
                <p>Intermediate</p>
              </div>
            </article>
            <article>
              <img
                src="https://th.bing.com/th/id/R.2a95c58dee56186e6b9adfd1addef584?rik=N%2b6MHpznWEeBNA&pid=ImgRaw&r=0"
                alt="Experience icon"
                class="icon"
              />
              <div>
                <h3>Git</h3>
                <p>Intermediate</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#experience {
  position: relative;
}

.icon {
  cursor: pointer;
  height: 2rem;
}

.experience-sub-title {
  color: #ff8a71;
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 2rem;
}

.experience-details-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.article-container {
  display: flex;
  text-align: initial;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 2.5rem;
  justify-content: space-around;
}

article {
  display: flex;
  width: 10rem;
  justify-content: space-around;
  gap: 0.5rem;
}

article .icon {
  cursor: default;
}
p {
  color: #ff8a71;
}
.title {
  font-size: 3rem;
  text-align: center;
}
</style>
