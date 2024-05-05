
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
        </div>
        <p v-show="experience.show">
          {{ experience.description }}
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
</style>

<script setup lang="ts">
import { ref } from 'vue';

const experiences = ref([

  {
    date: "June 2021 - July 2023",
    title: "Talking Club Academy",
    description: "I taught English to elementary school students. A rigid syllabus was followed. I also had administrative responsibilities and report cards.",
    show: false
  },

  {
    date: "April 2020 - May 2021",
    title: "Sunday's River Citrus Company",
    description: "My responsibilities as Program Specification Specialist included utilizing CMS system to ensure specifications and volume as required by the markets are adhere to. I executed packing programs and ensured that role players are informed of status of packing and facilitated time effective change-overs.",
    show: false
  },

  {
    date: "October 2018 - October 2019",
    title: "EBY Talking Cub",
    description: "I taught English for elementary, middle school and adult students at E Bo Young Talking Club in Yeosu, South Korea. My responsibilities included teaching. administrative duties, report cards and the listening parts of Toefl.",
    show: false
  },

  {
    date: "April - October 2018",
    title: "FQMS, Tru-Cape, & SRCC",
    description: "My responsibilities as an inspector for FQMS included checking quality of fruit in pack houses throughout the Langkloof area for Tru-Cape, reports and databases on inspections. I also worked in the Kirkwood and Addo area, where my responsibilities were auditing the program specifications for SRCC.",
    show: false
  },
  {
    date: "November 2017 - April 2018",
    title: "Hochland/Courageous Cat",
    description: "Courageous Cats is a fund which together with UFF / Old Mutal Agri-investment and other investors own the farms. My duties as Quality control manager included fruit quality standards fulfillment, monitoring samples, creating databases to combat claims from buyers and exporters, assisting the line manager with pack machine and operations, and logistic databases on daily pack out. I also did a quality report daily.",
    show: false
  },
  {
    date: "April 2016 - November 2017",
    title: "Cristoffel Loock Boerdery",
    description: "Appointed as general foreman, I were responsible for general farm operations and activities. Experience were attained in repairing motorized vehicles and implements, repairing pipes and electrical lines, roof construction, painting, planting of grains and pruning supervision. I helped with the conveyance of new orchards and irrigation system. I worked with the livestock and wild life animals.  I also helped with hunting activities offered on the farm. During packing season I co-managed the pack house. Responsibilities included labelling, packing, quality, production and operations.",
    show: false
  },

  {
    date: "January - April 2016",
    title: "FQMS & Hortgro's FEMA Project",
    description: "I assisted a quality control inspector for Tru-Cape with inspection of quality on various apples and pears. The inspections focused on cosmetic and progressive traits of the fruit. Quality assesments in Hortgro's FEMA project were done as well.",
    show: false
  },
  // Add other experience objects similarly
]);

const toggleParagraph = (index: number) => {
  experiences.value[index].show = !experiences.value[index].show;
};
</script>