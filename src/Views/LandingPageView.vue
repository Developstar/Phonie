<template>
  <section class="wrapper">
    <div class="underContruction">
      <p>This site is currently being updated !</p>
    </div>
    <section class="page_wrapper">
      <div class="Content-Wrapper">
        <div class="content">
          <h1 class="slogan">
            <span class="mobileSlogan">Connect with the world</span>
            <span class="desktopSlogan">Connect</span>
            <br />
            <span class="desktopSlogan"
              >with the world, one click at a time.</span
            >
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
        <img class="desktopHero" src="../assets/image-hero-desktop.png" />
        <img class="mobileHero" src="../assets/image-hero-mobile.png" />
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "LandingPageView",
};
</script>

<style>
.test {
  background: #726cee;
  height: 50vh;
  margin-top: 5rem;
}
.wrapper {
}
.page_wrapper {
  display: flex;

  width: 100vw;
  margin: auto;
  height: 70vh;
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
}

.underContruction p {
  font-size: 0.9rem;
  margin-top: 0.4rem;
  text-align: center;
}

.mobileSlogan {
  display: none;
}
span {
  font-size: 3rem;
}

.content {
  width: 70%;
  margin-left: 3rem;

  margin-top: 5rem;
}

.content h1,
p {
  text-align: left;
}

.content p {
  margin-top: 1.5rem;
}

.illustration-wrapper .desktopHero {
  width: 80%;
  margin-left: 5rem;
}

.mobileHero {
  display: none;
}

.desktopHero {
  height: 100%;
}

.learnMore button {
  background: #151515;
  color: white;
  cursor: pointer;

  margin: 1rem auto;
}

.illustration-wrapper {
  height: 70vh;
  width: 100%;
}

.illustration-wrapper img {
  width: 100%;
}

.Content-Wrapper {
  height: 70vh;

  width: 100%;
}

.content {
  width: 100%;
}

@media (min-width: 320px) and (max-width: 480px) {
  .underContruction p {
    font-size: 0.7rem;
    margin-top: 0.5rem;
  }

  .page_wrapper {
    display: flex;
    flex-direction: column-reverse;
    gap: 13rem;
    margin-top: 12rem;
  }

  .desktopHero {
    display: none;
  }

  .mobileHero {
    display: flex;
    margin-top: 25rem;
    margin-bottom: 2rem;
  }

  .content {
    width: 70%;
    margin-left: 3rem;

    margin-top: 3rem;
    align-items: center;

    width: 100%;
    margin: 0 auto;
  }

  .Content-Wrapper {
    width: 100%;
  }

  .mobileSlogan {
    display: block;
    font-size: 1.7rem;
    margin-top: 4rem;
    text-align: center;
  }

  .content p {
    margin-top: -2rem;
    text-align: center;
  }

  .desktopSlogan {
    display: none;
  }

  .learnMore {
    width: 30%;
    margin: 1.7rem auto;
  }

  .learnMore button {
    margin: auto;
  }
}
</style>
