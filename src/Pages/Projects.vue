<template>
  <div>
    <h2 id="projects">PROJECTS</h2>
    <div class="carousel-container">
      <div class="carousel">
        <div class="project-card" v-for="(project, index) in projects" :key="index">
          <h4>{{ project.title }}</h4>
          <img :src="project.image" :alt="project.title" @click="showOverlay(index)"/>

        </div>
      </div>

    <button @click="prevSlide" class="carousel-control prev">&#10094;</button>
    <button @click="nextSlide" class="carousel-control next">&#10095;</button>
    </div>
    <div class="overlay" v-if="isOverlayVisible">
      <div class="overlay-content">
        <img :src="projects[currentIndex].image" :alt="projects[currentIndex].title" class="overlay-image"/>
        <h3>{{ projects[currentIndex].title }}</h3>
        <p>{{ projects[currentIndex].description }}</p>
        <div class="linksGitDep">
          <a :href="projects[currentIndex].githubLink" target="_blank">Code</a>
          <a :href="projects[currentIndex].netlifyLink" target="_blank">Deployed Site</a>
        </div>
        <button @click="hideOverlay">Close</button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';

const projects = ref([

  {
    title: 'My Digital Resume',
    image: '/public/Capture.png',
    githubLink: 'https://github.com/StefanSchutte/STESCH302_FTO2308_GroupC_Stefan-Schutte_ITW_Final_Digital_Resume',
    netlifyLink: 'https://stefanschutte-digital-resume.netlify.app/',
    description: 'My Digital Resume created using HTML and CSS.'
  },
  {
    title: 'Podcast App',
    image: '/public/podcastimg.png',
    githubLink: 'https://github.com/StefanSchutte/STESCH302_FTO2308_GroupA2_Stefan-Schutte_DWACapstone',
    netlifyLink: 'https://podcasted-podcast-app.netlify.app/',
    description: 'A podcast app that allows users to browse various podcasts shows, play episodes and track their favorite episodes.'
  },
  {
    title: 'Book Connect',
    image: '/public/bookconnect.png',
    githubLink: 'https://github.com/StefanSchutte/STESCH302_FTO2308_GroupB2_Stefan_Schutte_IWACapstone',
    netlifyLink: 'https://bookconnect-app-js.netlify.app/',
    description: 'Interactive Web App where I applied JavaScript to achieve required functionality.'
  },
  {
    title: 'Calculator App',
    image: '/public/Capture4.png',
    githubLink: 'https://github.com/StefanSchutte/Calculator',
    netlifyLink: 'https://project1.netlify.app',
    description: 'Calculator created with JS.'
  },
  {
    title: 'Mapty App',
    image: '/public/Capture2.png',
    githubLink: 'https://github.com/StefanSchutte/Mapty',
    netlifyLink: 'https://mapty-stafan.netlify.app/',
    description: 'An app that tracks a users running/cycling activities.'
  },
  {
    title: 'Bankist',
    image: '/public/Capture3.png',
    githubLink: 'https://github.com/StefanSchutte/Bankist_app',
    netlifyLink: 'https://bankist-dom-stefan.netlify.app/',
    description: 'This project is a minimalist banking website called Bankist. It is a static website created using HTML, CSS, and JavaScript. The website showcases various sections, including features, operations, testimonials, and a sign-up section.'
  },
  {
    title: 'Bookmark App',
    image: '/public/Capture5.png',
    githubLink: 'https://github.com/StefanSchutte/Bookkeeper_Application',
    netlifyLink: 'https://bookmark-app-stefan.netlify.app/',
    description: 'Bookmark App is a simple web application that allows users to manage and save bookmarks for their favorite websites. Users can add, delete, and visit bookmarks with ease. '
  },
  {
    title: 'Paint Clone',
    image: '/public/paint.png',
    githubLink: 'https://github.com/StefanSchutte/Paint_Clone',
    netlifyLink: 'https://paint-clone-stefan.netlify.app/',
    description: 'A simple web-based painting application that allows users to draw, erase, change brush sizes, and manipulate colors. The application provides features such as saving and loading the canvas from local storage, clearing the canvas, and downloading the created artwork as an image file.'
  },
]);
let currentIndex = 0;
const isOverlayVisible = ref(false);

const prevSlide = () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
};

const nextSlide = () => {
  if (currentIndex < projects.value.length - 1) {
    currentIndex++;
    updateCarousel();
  }
};

const updateCarousel = () => {
  const carousel = document.querySelector('.carousel');
  const projectCards = document.querySelectorAll('.project-card');
  const cardWidth = projectCards[0].offsetWidth;
  carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
};

const showOverlay = (index) => {
  currentIndex = index;
  isOverlayVisible.value = true;
};

const hideOverlay = () => {
  isOverlayVisible.value = false;
};
</script>

<style>
/* Styles for carousel container and controls */
.carousel-container {
  position: relative;
  overflow: hidden;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
  height: 60%;
  position: relative;
}

.carousel-control {
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  background: #434141;
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 100;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-control:hover {
  background-color: #075c07;
  transition: background-color 0.3s ease;
}

.prev {
  left: 0;
}

.next {
  right: 0;
}

h4 {
  margin: 1rem;
  color: #b84d4d;
  font-size: large;
}

.project-card {
  flex: 0 0 auto;
  margin-right: 20px;
  width: 30rem;
  height: 30rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease;
}
.project-card:hover {
  transform: scale(1.05);
}

.project-card img {
  width: 100%;
  height: 50%;
  object-fit: cover;
}

.project-card h3 {
  font-size: 1.4rem;
  color: #813a3a;
}

.project-card p {
  font-size: medium;
  color: #333;
}

#projects {
  font-family: "Oswald", sans-serif;
  font-size: 5vh;
  display: flex;
  justify-content: center;
  padding: 3%;
}

.linksGitDep {
  display: flex;
}

.linksGitDep a {
  color: #8f8c8c;
  margin-right: 10px;
  padding: 8px 16px;
  border: 1px solid #8f8c8c;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.linksGitDep a:hover {
  color: #075c07;
  transition: background-color 0.3s ease;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay-content {
  position: relative;
  background-color: #292626;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  width: 70%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.overlay button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: red;
  color: white;
  padding: 10px;
  border-radius: 5px;
}

.overlay-image {
  max-width: 25rem;
  height: 15rem;
}

.overlay h3 {
  color: #aa5454;
  font-size: 2rem;
}

@media only screen and (max-width: 1000px) {

}

@media only screen and (max-width: 550px) {

  .project-card {
    flex: 0 0 auto;
    margin-right: 20px; /* Adjust margin right as needed */
    width: 250px; /* Adjust width as needed */
    height: 400px; /* Adjust height as needed */
    border-radius: 10px; /* Adjust border radius as needed */
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Add box shadow */
    transition: transform 0.5s ease; /* Add transition for hover effect */
  }
  .overlay-image {
    max-width: 10rem;
    height: 5rem;
  }
}
</style>