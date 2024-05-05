<template>
  <div>
    <h2 id="education">EDUCATION</h2>
    <ul class="education">
      <li v-for="(education, index) in educations" :key="index">
        <h3 class="educationHeading" @click="toggleParagraph(index)">
          {{ education.title }}
        </h3>
        <p v-show="education.show">{{ education.grad }}</p>
        <p v-show="education.show">{{ education.date }}</p>
        <p v-show="education.show">{{ education.location }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const educations = ref([
  { title: 'Software Development/Web Development.',grad:'Certificate', date: '2024', location: 'CodeSpace Academy.', show: false },
  { title: 'HTML, CSS & JavaScript Certification Course for Beginners.',grad:'Certificate', date: '2023', location: 'Udemy.', show: false },
  { title: 'Ultimate CSS Grid Course: From Beginner to Advanced.',grad:'Certificate', date: '2023', location: 'Udemy.', show: false },
  { title: 'Automated Software Testing with Puppeteer.',grad:'Certificate', date: '2023', location: 'Udemy.', show: false },
  { title: 'JAVASCRIPT WEB PROJECTS; 20 PROJECTS TO BUILD YOUR PORTFOLIO.',grad:'Certificate', date: '2023', location: 'Udemy.', show: false },
  { title: 'MAKE MUSIC WITH CODE: COMPLETE GUIDE TO CODING WITH SONIC PI.',grad:'Certificate', date: '2023', location: 'Udemy.', show: false },
  { title: 'THE COMPLETE JAVASCRIPT COURSE 2023: FROM ZERO TO EXPERT!',grad:'Certificate', date: '2022-2023', location: 'Udemy.', show: false },
  { title: 'AUDIO ENGINEERING FUNDAMENTALS CERTIFICATE',grad:'Certificate', date: '2021', location: 'Udemy.', show: false },
  { title: 'PADI OPEN WATER DIVER & PADI ADVANCED OPEN WATER DIVER',grad:'Certificate', date: '2019', location: 'Padi, Busan South Korea', show: false },
  { title: 'TEFL LEVEL 5 CERTIFICATE',grad:'Certificate', date: '2019', location: 'The TEFL Academy, England', show: false },
  { title: 'TEACHERS TRAINING COURSE CERTIFICATE',grad:'Certificate', date: '2018', location: 'Seoul, South Korea.', show: false },
  { title: 'B.A. COMMUNICATION SCIENCE (MEDIA STUDIES AND JOURNALISM)',grad:'B.A. Communication Studies Degree', date: '2012 - 2015', location: 'University of the Free State', show: false },
  { title: 'National Senior Certificate',grad:'Certificate', date: '2011', location: 'Uniondale High School, South Africa', show: false },
]);

const toggleParagraph = (index: any) => {
  educations.value[index].show = !educations.value[index].show;
};
</script>

<style>

#education {
  font-family: "Oswald", sans-serif;
  font-size: 5vh;
  display: flex;
  justify-content: center;
  padding: 3%;
}

.educationHeading {
  font-size: large;
  color: rgb(198, 198, 146);
  cursor: pointer;
}

.educationHeading:hover {
  transform: scale(1.30);
  color: #075c07;
}

.education {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  margin: 2rem;
}

@media only screen and (max-width: 1000px) {

  .education {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
}

@media only screen and (max-width: 550px) {
  .education {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>