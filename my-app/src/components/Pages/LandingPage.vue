<template>
  <HeaderSection/>
  <LandingPageView/>
</template>

<script>
import HeaderSection from '../LandingPageCompo/HeaderSection.vue'
import LandingPageView from "../LandingPageCompo/LandingPageView.vue"
export default {
  name: 'LandingPage',
  components: {
    HeaderSection,
    LandingPageView
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
