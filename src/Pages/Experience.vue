
<template>
  <div>
    <h2 id="experience">EXPERIENCE</h2>
    <div class="experience_info">
      <div v-for="(experience, index) in experiences" :key="index">
        <div class="experienceHeadingContainer">
        <h4 class="experienceDate"> {{experience.date}} </h4>
        <h3 class="experienceHeading" @click="toggleParagraph(index)">
          {{ experience.title }}
        </h3>
          <p>{{experience.place}}</p>
        </div>

        <p v-show="experience.show">
          <div v-for="item in experience.description.split('\n')" :key="item">{{ item }}</div>
        </p>
      </div>
    </div>
  </div>
</template>

<style>
#experience {
  font-family: "Oswald", sans-serif;
  font-size: 5vh;
  display: flex;
  justify-content: center;
  padding: 3%;
}

.experienceHeading {
  font-size: large;
  color: rgb(107, 186, 107);
  cursor: pointer; /* Add cursor pointer for better UX */
}
.experienceHeading:hover {
  transform: scale(1.40);
  color: #075c07;
}

.experienceDate {
  font-size: medium;
  color: rgb(127, 131, 127);
  margin-top: 30px;
  margin-right: 3rem;

}

.experienceHeadingContainer {
  display: flex;
  align-items: center; /* Align items vertically */
}

.experience_info {
  margin: 2rem;
}

.experienceList {
  list-style-type: none; /* Remove default list styles */
  padding: 0; /* Remove default padding */
}

.experienceList li {
  margin-bottom: 10px; /* Add spacing between list items */
  border-bottom: 1px solid #ccc; /* Add a border between list items */
  padding-bottom: 10px; /* Add padding to the bottom of each list item */
}
</style>

<script setup lang="ts">
import { ref } from 'vue';

const experiences = ref([

  {
    date: "June 2021 - July 2023",
    title: "Teacher",
    place: "Talking Club Academy",
    description: "- English elementary school students teacher. \n" +
        "- Rigid syllabus. \n" +
        "- Administrative responsibilities. \n" +
        "- Report cards.",
    show: false
  },

  {
    date: "April 2020 - May 2021",
    title: "Program Specialist",
    place: "Sunday's River Citrus Company",
    description: "- Utilizing CMS system.\n" +
        "- Ensure compliance with market specifications and volume requirements.\n" +
        "- Executed packing programs.\n" +
        "- Inform role-players of status of packing.\n" +
        "- Facilitated time effective change-overs.",
    show: false
  },

  {
    date: "October 2018 - October 2019",
    title: "Teacher",
    place: "EBY Talking Cub",
    description: "- English teacher for elementary, middle school and adult students. \n" +
        "- Teaching. \n" +
        "- Administrative duties. \n" +
        "- Report cards.",
    show: false
  },

  {
    date: "April - October 2018",
    title: "Quality Assurance Specialist",
    place: "FQMS, Tru-Cape, & SRCC",
    description: "- Fruit Quality Inspector/Auditor. \n" +
        "- Quality inspection of fruit in pack houses throughout the Langkloof area for Tru-Cape. \n" +
        "- Reports and databases on inspections. \n" +
        "- Auditing the program specifications for SRCC.",
    show: false
  },
  {
    date: "November 2017 - April 2018",
    title: "Quality Assurance Manager",
    place: "Hochland/Courageous Cat",
    description: "- Courageous Cats / UFF / Old Mutal Agri-investment Farms.\n" +
        "- Quality control manager.\n" +
        "- Fruit quality standards fulfillment. \n" +
        "- Monitoring samples. \n" +
        "- Databases to combat claims from buyers and exporters. \n" +
        "- Assisting Line manager with pack machine and operations.\n" +
        "- Logistic databases on daily pack out. \n" +
        "- Daily quality report.",
    show: false
  },
  {
    date: "April 2016 - November 2017",
    title: "General Foreman",
    place: "Cristoffel Loock Boerdery",
    description: "- Courageous Cats / UFF / Old Mutal Agri-investment Farms.\n" +
        "- Quality control manager.\n" +
        "- Fruit quality standards fulfillment. \n" +
        "- Monitoring samples. \n" +
        "- Databases to combat claims from buyers and exporters. \n" +
        "- Assisting Line manager with pack machine and operations.\n" +
        "- Logistic databases on daily pack out. \n" +
        "- Daily quality report.",
    show: false
  },

  {
    date: "January - April 2016",
    title: "Delivery Services",
    place: "Marketing Department, University of the Free State",
    description: "I assisted a quality control inspector for Tru-Cape with inspection of quality on various apples and pears. The inspections focused on cosmetic and progressive traits of the fruit. Quality assesments in Hortgro's FEMA project were done as well.",
    show: false
  },
  // Add other experience objects similarly
]);

const toggleParagraph = (index: number) => {
  experiences.value[index].show = !experiences.value[index].show;
};
</script>