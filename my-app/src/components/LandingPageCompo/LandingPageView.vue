<template>
  <section class="page_wrapper">
    <div class="Content-Wrapper">
      <div class="content">
        <h1>Connecting you to the world, one click at a time.</h1>
        <p>
          The world has become increasingly connected in recent years, with the
          internet and mobile phones playing a crucial role in facilitating
          communication and interaction across borders. A telecommunications
          website acts as a gateway to this connected world, providing users
          with access to various communication technologies and services that
          allow them to connect with anyone, anywhere, at any time. With just a
          click of a button, users can access high-speed internet, make phone
          calls, send messages, and even stream their favorite TV shows and
          movies. At its core, a telecommunications website is all about
          connecting people, and with its help, individuals and businesses can
          stay connected and thrive in today's hyper-connected world.
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
  text-align: center;
  width: 65%;
}

.content {
  border: 1px solid red;
  width: 80%;
  margin-top: 5rem;
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
