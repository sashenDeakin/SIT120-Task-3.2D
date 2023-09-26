<script setup>
import AboutMe from "../components/AboutMe.vue";
import Contact from "../components/Contact.vue";
import Experience from "../components/Experience.vue";
import Projects from "../components/Projects.vue";
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
</script>

<template>
  <main>
    <NavBar />
    <AboutMe :is-show="true" />
    <Experience :is-show="true" />
    <Projects :is-show="true" />
    <Contact :is-show="true" />
    <Footer />
  </main>
</template>
