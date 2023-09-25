<script setup>
defineProps({
  isShow: Boolean,
});
</script>

<template>
  <section id="about">
    <p v-if="isShow" class="section__text__p1">Get To Know More</p>
    <h1 v-if="isShow" class="title">About Me</h1>
    <div class="section-container">
      <div class="section__pic-container">
        <img
          src="https://sashenjayathilaka.online/static/media/aboutT.9faa3362e2aba5412d79.png"
          alt="Profile picture"
          class="about-pic"
        />
      </div>
      <div class="about-details-container">
        <div class="about-containers">
          <div class="details-container">
            <img
              src="https://www.freeiconspng.com/uploads/experience-logo-company-infographic-management-organization-business-computer-icons-0.png"
              alt="Experience icon"
              class="icon"
            />
            <h3>Experience</h3>
            <p>2+ years <br />Frontend Development</p>
          </div>
          <div class="details-container">
            <img
              src="https://www.pngkey.com/png/full/131-1311026_school-icon-png.png"
              alt="Education icon"
              class="icon"
            />
            <h3>Education</h3>
            <p>B.Sc. Bachelors Degree<br /></p>
          </div>
        </div>
        <div class="text-container">
          <p>
            I'm Sashen Jayathilaka. currently, I'm an undergraduate at the
            Deakin University and I'm studying cloud computing. Full Stack React
            Developer | Javascript, Typescript | Node/Express | MEAN, Blockchain
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#about {
  position: relative;
}

.about-containers {
  gap: 2rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.about-details-container {
  justify-content: center;
  flex-direction: column;
}

.about-containers,
.about-details-container {
  display: flex;
}

.about-pic {
  border-radius: 2rem;
}
.icon {
  cursor: pointer;
  height: 2rem;
}

.arrow {
  position: absolute;
  right: -5rem;
  bottom: 2.5rem;
}

p {
  color: #ff8a71;
}
.title {
  font-size: 3rem;
  text-align: center;
}
</style>
