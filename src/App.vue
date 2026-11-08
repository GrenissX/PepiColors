<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import StatsSection from './components/StatsSection.vue'
import HowItWorks from './components/HowItWorks.vue'
import PrizesSection from './components/PrizesSection.vue'
import VideosSection from './components/VideosSection.vue'
import ShopSection from './components/ShopSection.vue'
import ContactSection from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheNavbar />
  <main>
    <HeroSection />
    <StatsSection />
    <HowItWorks />
    <VideosSection />
    <PrizesSection />
    <ShopSection />
    <ContactSection />
  </main>
  <TheFooter />
</template>
