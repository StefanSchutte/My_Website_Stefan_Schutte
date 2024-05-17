<template>
  <div class="singleProject">
    <div>
      <h3>{{ project.title }}</h3>
      <img :src="project.imageSrc" :alt="project.imageAlt" :width="project.imageWidth" :height="project.imageHeight"/>
      <div>
        <h4>{{ project.name }}</h4>
        <div class="singleProjectLinks">
          <a :href="project.codeLink" target="_blank">Code</a>
          <a :href="project.deployedLink" target="_blank">Deployed Site</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.singleProject {
display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
}

.singleProjectLinks {
  display: flex;
}

.singleProjectLinks a {
  color: #8f8c8c;
  margin-right: 10px;
  padding: 8px 16px;
  border: 1px solid #8f8c8c;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.singleProjectLinks a:hover {
  color: #075c07;
  transition: background-color 0.3s ease;
}
</style>
<script setup lang="ts">
const project = {
  title: 'Current Project',
  imageSrc: '/singleProject.png',
  imageAlt: 'Current Project Image',
  imageWidth: '600px',
  imageHeight: '350px',
  name: 'Shopping List',
  codeLink: 'https://github.com/StefanSchutte/shopping-list',
  deployedLink: 'https://maryke-travel-list.netlify.app'
};
</script>