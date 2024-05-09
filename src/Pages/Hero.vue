<template>
  <aside>
    <div class="img">
      <picture >
        <img src="../../public/stefan.JPG" alt="img" width="70" height="100" >
      </picture>
    </div>

    <div>
      <header>
        <h1 class="text-red-700">Stefan Schutte</h1>
        <p>My Website.</p>
      </header>
    </div>
  </aside>
</template>

<style>



aside {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 70vh;
  width: 100%;
  background-image: url(../../public/IMG-9965.JPG);
  opacity: 0.6;
  background-position: center;
  background-size: cover;
}

header {
  font-size: 8vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 5rem;
}


h1 {
  color: black;
  font-family: "Quicksand", sans-serif;
}

header p {
  font-size: 3vh;
  color: rgb(66, 66, 66);
}

/* Profile Image */

.img {
  overflow: hidden;
  border-radius: 50%;
  max-width: 350px;
  height: 350px;
  display: flex;
  align-items: flex-start;

  animation: imgSlide 2s ease forwards;
}
@keyframes imgSlide {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(15%);
  }
}

.img img {
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 1000px) {

  aside {
    flex-direction: row;

    align-items: center;
  }

  .img {
    max-width: 280px;
    height: 280px;
    margin-top: 10px;
    animation: imgSlide 2s ease forwards;
  }

  header {
    font-size: 3vh;
    margin-top: -60px;
    margin-left: 3rem;

  }


  header p {
    font-size: 2vh;
    padding: 1px;
  }

}

@media only screen and (max-width: 550px) {
  body {
    font-size: 15px;
  }

  /* aside */
  aside {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .img {
    margin: 0;
    max-width: 250px;
    height: 250px;
    margin-top: 15px;
    animation: none;
  }

  header {
    font-size: 25px;
    margin: 0;
    margin-top: 30px;
    text-align: center;
    animation: none;
  }

  header p {
    font-size: 2vh;
    padding: 1px;
  }

}

</style>