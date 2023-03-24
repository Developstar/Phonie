<template>
  <div class="HeaderSection">
    <div class="logo">
      <router-link to="/" style="text-decoration: none">Phonie</router-link>
    </div>
    <div class="AccessButton rightSideNav">
      <div class="login">Login</div>
      <div><button class="earlyAcessButton">Request Early Access</button></div>
      <div><button class="Acess">Signup</button></div>
    </div>
  </div>
</template>

<style>
.HeaderSection {
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  color: #22253e;
  height: 10vh;
}

.logo {
  font-size: 2rem;
  font-weight: bold;
  margin-left: 1rem;
}

.logo a {
  color: black;
}

.rightSideNav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.Acess {
  display: none;
}

.AccessButton {
  margin-right: 1rem;
}

.AccessButton button {
  background: white;

  padding: 0.7rem;
  border-radius: 0.4rem;
}

.login,
.earlyAcessButton {
  cursor: pointer;
}

@media (min-width: 320px) and (max-width: 480px) {
  .rightSideNav {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 1rem;
  }

  .login {
  }

  .Acess {
    display: block;
  }

  .earlyAcessButton {
    display: none;
  }
}
</style>
