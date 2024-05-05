<template>
  <div class="footerContainer">
    <footer class="footer">
      <div id="contactLinks" class="contactDetailSection">

        <div class="contact">
          <a href="https://github.com/StefanSchutte"
             target="_blank"><img
              src="../../public/gh.png"
              alt="github" width="100" height="100" title="Github"
          ></a>
        </div>

        <div class="contact">
          <a href="https://www.linkedin.com/in/stefan-schutte-668578292/"
             target="_blank"><img
              src="../../public/lk.png"
              alt="linkin" width="100" height="100" title="Linkedin"></a>
        </div>
        <div class="contact">
          <a href="https://www.instagram.com/stefan.schutte/" target="_blank"><img
              src="../../public/ig.png"
              alt="Instagram" width="100" height="100" title="Instagram"></a>
        </div>
        <div class="contact">
          <a href="https://www.facebook.com/stefan.schutte1" target="_blank"><img
              src="../../public/fb.png"
              alt="Facebook" width="100" height="100" title="Facebook"
          ></a>
        </div>

        <div class="contact">
          <a href="https://www.youtube.com/channel/UCPkJAECROt6Wqdns2yD4msw"
             target="_blank"><img
              src="../../public/yt.png"
              alt="youtube" width="100" height="100" title="Youtube"></a>
        </div>
        <div class="contact">
          <a href="mailto:stefanschutte@icloud.com"
             target="_blank"><img
              src="../../public/ml.png"
              alt="stefanschutte@icloud.com" width="100" height="100" title="Email"></a>
        </div>
        <div class="contact">
          <a href="tel:+27672658798"
             target="_blank"><img
              src="../../public/pn.png"
              alt="+27672658798" width="100" height="100" title="Call"></a>
        </div>

        <div class="contact">
          <a href="tel:+27765314027"
             target="_blank"><img
              src="../../public/wa.png"
              alt="whatsapp" width="100" height="100" title="Whatsapp"></a>
        </div>




      </div>


    </footer>
  </div>
</template>

<style>

.footerContainer {
  text-align: center;
}

.footer {
  background-color: rgb(58, 57, 57);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  margin-bottom: 0;
}

.contactDetailSection {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  justify-content: center;
  align-items: center;
}

.contact img {
  overflow: hidden;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
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

@media only screen and (max-width: 1000px) {
  .contactDetailSection {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
  }
}

@media only screen and (max-width: 550px) {
  .contactDetailSection {
    grid-template-columns: repeat(4, 1fr);
  }
}

</style>
<script setup lang="ts">
</script>