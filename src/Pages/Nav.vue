<template>
  <nav>
    <ul class="nav">
      <router-link to="/home"><div class="nav-item"><img src="../../public/home.png" alt="Home" title="Home"/>Home</div></router-link>
      <router-link to="/about"><div class="nav-item"><img src="../../public/information-button.png" alt="About" title="About"/>About</div></router-link>
      <router-link to="/education"><div class="nav-item"><img src="../../public/graduation.png" alt="Education" title="Education"/>Education</div></router-link>
      <router-link to="/experience"><div class="nav-item"><img src="../../public/portfolio.png" alt="Experience" title="Experience"/>Experience</div></router-link>
      <router-link to="/projects"><div class="nav-item"><img src="../../public/project.png" alt="Projects" title="Projects"/>Projects</div></router-link>
      <router-link to="/skills"><div class="nav-item"><img src="../../public/skills.png" alt="Skills" title="Skills"/>Skills</div></router-link>
      <router-link to="/stefan"><div class="nav-item"><img src="../../public/user.png" alt="user" title="Stefan"/>Contact Me</div></router-link>
    </ul>
  </nav>
</template>

<style>
nav {
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5c5a5a;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav li {
  list-style-type: none;
  display: inline-block;
  margin: 1px;
  ;
}

nav ul img {
  margin: 1rem;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  text-align: center;
  max-width: calc(100vw / 7);;
}

.nav-item img {
  max-width: 100%;
  width: 2rem;
  padding: 1px;
}

.nav-item:hover {
  background-color: rgb(36, 49, 34);
  transform: scale(1.20);
  border-radius: 10px;
}



a {
  text-decoration: none;
  color: rgb(5, 5, 5);
}

@media only screen and (max-width: 1000px) {

  .nav-item img {
    width: 2rem;
    padding: 3px;
  }
}

@media only screen and (max-width: 550px) {
  .nav-item {
    flex: 1; /* Allow items to take full width */
    text-align: center;
    max-width: none; /* Remove max-width */
    margin: 0.3rem; /* Adjust margin as needed */
  }

  .nav-item img {
    max-width: 100%; /* Ensure images do not overflow */
    width: 1rem; /* Adjust width as needed */
    height: auto; /* Maintain aspect ratio */
  }

  nav ul {
    display: flex;
    flex-wrap: wrap; /* Allow items to wrap onto multiple lines */
    justify-content: center;
    gap: 0.1rem; /* Adjust gap between items */
  }
}

</style>
<script setup lang="ts">
</script>