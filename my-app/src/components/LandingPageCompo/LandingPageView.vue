<template>
  <section class="page_wrapper">
    <div class="Content-Wrapper">
      <div class="content">
        <h1 class="slogan">
            <span>Connect</span> 
            <span>with the world, one click at a time.</span>
        </h1>
        <p>
            Helping individuals and businesses stay connected and thrive in today's hyper-connected world
        </p>
        <button></button>
    </div>
    </div>
    <div class="illustration-wrapper">
      <img src="../../assets/image-hero-desktop.png" />
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
  border: 1px solid greenyellow;
  margin-top: 3rem;
}

.Content-Wrapper {
  border: 1px solid red;
  height: 70vh;
  
  width: 65%;
}

.content {
  border: 1px solid red;
  width: 95%;
  margin-top: 5rem;
}

.slogan{
    display: flex;
    flex-direction: column;
    font-weight: bolder;
    font-size: 2.5rem;
}

.illustration-wrapper {
  border: 1px solid green;
  height: 70vh;
  width: 35%;
}

.illustration-wrapper img {
  height: 100%;
  width: 100%;
}
</style>
