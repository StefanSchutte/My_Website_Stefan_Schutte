<template>
<div class="about-sub-nav-bar">
  <router-link to="/about"><div class="nav-item"><img src="../../public/information-button.png" alt="About" title="About"/>About</div></router-link>
  <router-link to="/education"><div class="nav-item"><img src="../../public/graduation.png" alt="Education" title="Education"/>Education</div></router-link>
  <router-link to="/experience"><div class="nav-item"><img src="../../public/portfolio.png" alt="Experience" title="Experience"/>Experience</div></router-link>
  <router-link to="/skills"><div class="nav-item"><img src="../../public/skills.png" alt="Skills" title="Skills"/>Skills</div></router-link>
</div>
</template>

<style>
.about-sub-nav-bar{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #494747;
  padding: 1rem;
}
</style>
<script setup lang="ts">
</script>