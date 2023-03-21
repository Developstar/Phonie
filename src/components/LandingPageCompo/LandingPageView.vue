<template>
  <div class="underContruction">
      <p>This site is currently being updated !</p>
    </div>
  <section class="page_wrapper">
    
    
    <div class="Content-Wrapper">
      <div class="content">
        <h1 class="slogan">
          <span>Connect</span>
          <span>with the world, one click at a time.</span>
        </h1>
        <p>
          Helping individuals and businesses stay connected and thrive in
          today's hyper-connected world
        </p>
        <div class="AccessButton learnMore">
          <button>Learn More</button>
        </div>
      </div>
    </div>
    <div class="illustration-wrapper">
      <img class="desktopHero" src="../../assets/image-hero-desktop.png" />
      <img class="mobileHero" src="../../assets/image-hero-mobile.png" />
    </div>
  </section>
</template>

<script>
export default {
  name: "LandingPageView",
};
</script>

<style>
.page_wrapper {
  display: flex;
  /* gap: 20rem; */
  width: 80vw;
  margin: auto;
  height: 90vh;
  /* border: 1px solid greenyellow; */
  margin-top: 7rem;
}

.underContruction {
  position: fixed;
  top: 3.5rem;
  left: 0;
  background-color: #726cee;
  width: 100vw;
  height: 1.8rem;
  color: aliceblue;
  text-align: center;
}

.underContruction p {
  font-size: 0.9rem;
  margin-top: 0.4rem;
}

.Content-Wrapper {
  /* border: 1px solid red; */
  height: 70vh;

  width: 65%;
}

.content {
  /* border: 1px solid red; */
  width: 95%;
  margin-top: 5rem;
}

.slogan {
  display: flex;
  flex-direction: column;
  font-weight: bolder;
  font-size: 2.5rem;
}

.illustration-wrapper {
  height: 70vh;
  width: 35%;
}

.illustration-wrapper img {
  height: 100%;
  width: 100%;
}

.mobileHero{
  display: none;
}

.learnMore button{
  background: #151515;
  color: white;
  cursor: pointer;
}


@media (min-width:320px) and (max-width:480px){
  .underContruction p {
  font-size: 0.7rem;
  margin-top: 0.5rem;
}

.page_wrapper {
  display: flex;
  flex-direction: column-reverse;
}

.desktopHero{
  display: none;
}

.mobileHero{
  display: flex;
}
}

.page_wrapper {
  width: 100vw;
  margin-top: 15rem;
}

.illustration-wrapper {
  height: 70vh;
  width: 100%;
  
}

.Content-Wrapper {
  /* border: 1px solid red; */
  height: 70vh;

  width: 100%;
}

.content {
  /* border: 1px solid red; */
  width: 100%;
  
  text-align: center;
}
</style>
