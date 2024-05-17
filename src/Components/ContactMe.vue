<template>

  <div class="footerContainer">

    <footer class="footer">
      <h1>Contact Me</h1>
      <div id="contactLinks" class="contactDetailSection">

        <div class="contact">
          <a href="https://github.com/StefanSchutte"
             target="_blank"><img
              src="../../public/gh.png"
              alt="github" width="100" height="100" title="Github"
          ><span>Github</span></a>
        </div>

        <div class="contact">
          <a href="https://www.linkedin.com/in/stefan-schutte-668578292/"
             target="_blank"><img
              src="../../public/lk.png"
              alt="linkin" width="100" height="100" title="Linkedin"><span>Linkedin</span></a>
        </div>
        <div class="contact">
          <a href="https://www.instagram.com/stefan.schutte/" target="_blank"><img
              src="../../public/ig.png"
              alt="Instagram" width="100" height="100" title="Instagram"><span>Instagram</span></a>
        </div>
        <div class="contact">
          <a href="https://www.facebook.com/stefan.schutte1" target="_blank"><img
              src="../../public/fb.png"
              alt="Facebook" width="100" height="100" title="Facebook"
          ><span>Facebook</span></a>
        </div>

        <div class="contact">
          <a href="https://www.youtube.com/channel/UCPkJAECROt6Wqdns2yD4msw"
             target="_blank"><img
              src="../../public/yt.png"
              alt="youtube" width="100" height="100" title="Youtube"><span>Youtube</span></a>
        </div>
        <div class="contact">
          <a href="mailto:stefanschutte@icloud.com"
             target="_blank"><img
              src="../../public/ml.png"
              alt="stefanschutte@icloud.com" width="100" height="100" title="Email"><span>Mail</span></a>
        </div>
        <div class="contact">
          <a href="tel:+27672658798"
             target="_blank"><img
              src="../../public/pn.png"
              alt="+27672658798" width="100" height="100" title="Call"><span>Call</span></a>
        </div>

        <div class="contact">
          <a href="tel:+27765314027"
             target="_blank"><img
              src="../../public/wa.png"
              alt="whatsapp" width="100" height="100" title="Whatsapp"><span>Whatsapp</span></a>
        </div>




      </div>


    </footer>
  </div>
</template>

<style scoped>
h1 {
  color: white;
  padding: 1rem;
  font-family: "Oswald", sans-serif;
  font-size: 5vh;
  display: flex;
  justify-content: center;
}

 .footerContainer {
   text-align: center;
 }

.footer {
  margin-bottom: 0;
  padding: 2rem 0;
}

.contactDetailSection {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
}

.contact {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
}

.contact img {
  overflow: hidden;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
}

footer a {
  font-size: 100%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  margin-top: 15px;
}

.contact:hover {
  background-color: rgb(36, 49, 34);
  transform: scale(1.10);
}

span {
  color: white;
  margin-left: 2rem;
  text-align: center;
  padding: 1rem;
  font-size: large;
}

@media only screen and (max-width: 1000px) {

  .contactDetailSection {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    align-items: center;
  }
}

</style>
<script setup lang="ts">
</script>