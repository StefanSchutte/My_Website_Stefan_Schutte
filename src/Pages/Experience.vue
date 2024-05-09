
<template>
  <div>
    <h2 id="experience">EXPERIENCE</h2>
    <div class="experience_info">
      <div v-for="(experience, index) in experiences" :key="index">
        <div class="experienceHeadingContainer">

        <h3 class="experienceHeading" @click="toggleParagraph(index)">
          {{ experience.title }}
          <p>{{experience.place}}</p>
          <p class="experienceDate">{{experience.date}}</p>
        </h3>

        </div>

        <p v-show="experience.show">
          <div v-for="item in experience.description.split('\n')" :key="item">{{ item }}</div>
          <div class="exp-skill">{{experience.skills}}</div>
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
  cursor: pointer; /* Add cursor pointer for better UX */
  color: #8f8c8c;
  margin-right: 10px;
  padding: 8px 16px;
  border: 1px solid #8f8c8c;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}
.experienceHeading:hover {
  transform: scale(1.01);
  color: #075c07;
  border: 1px solid #525952;
}

.experienceDate {
  font-size: medium;
  color: rgb(127, 131, 127);

}

.experienceHeadingContainer {

  align-items: center; /* Align items vertically */
}

.experienceHeadingContainer p {
  margin-left: 0rem;
  color: rgb(127, 131, 127);
}

.experience_info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 2rem;
  align-items: center; /* Align items vertically */
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

.exp-skill {
  margin: 1rem;
}

@media only screen and (max-width: 1000px) {

  .experience_info {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
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
    skills: "Skills: Teaching English as a Foreign Language · Teacher Training · Teaching · Language Teaching · Computer Literacy · Communication · Problem Solving · Adaptability · Attention to Detail · Organization Skills · Microsoft Word · Microsoft Excel",
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
    skills: "Skills: CMS · Communication · Computer Literacy · Local Area Network (LAN) · Analytical Skills · Instructional Skills · Problem Solving · Soft Skills · Microsoft Office · Microsoft Word · Microsoft Excel · Microsoft Outlook",
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
    skills: "Skills: English · Teaching English as a Foreign Language · Language Teaching · Microsoft Excel · Microsoft Word · Administration · Writing",
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
    skills: "Quality Assurance · Quality Control · Quality System · Quality Auditing · Microsoft Excel · Microsoft Office · Cloud Storage · Communication",
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
    skills: "Skills: Microsoft Office · Microsoft Excel · Microsoft Word · Quality Assurance · Quality Control · Logistics · Cloud Storage · Quality System · Import/Export Operations",
    show: false
  },
  {
    date: "April 2016 - November 2017",
    title: "General Foreman",
    place: "Cristoffel Loock Boerdery",
    description: "- General foreman.\n" +
        "- General farm operations and activities. \n" +
        "- Repairing motorized vehicles and implements.\n" +
        "- Repairing pipes and electrical lines. \n" +
        "- Roof construction, painting. \n" +
        "- Planting of grains. \n" +
        "- Pruning supervision. \n" +
        "- Conveyance of new orchards and irrigation system. \n" +
        "- Livestock and wild life animals. \n" +
        "- Hunting activities. \n" +
        "- Co-managed the pack house. \n" +
        "- Labelling, packing, quality, production and operations.",
    skills: "Skills: Time Management · Team Management · Teamwork · Construction · Mechanical, Electrical, and Plumbing (MEP) · Hunting · Import/Export Operations",
    show: false
  },
]);

const toggleParagraph = (index: number) => {
  experiences.value[index].show = !experiences.value[index].show;
};
</script>