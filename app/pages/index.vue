<template>
  <main>
    <HeroSection />
    <AboutSection />
    <CertificatesSection />
    <SkillsSection />
    <ProjectsSection />
    <EducationSection />
    <ContactSection />

    <!-- AI Chat Widget -->
    <AiChat />

    <!-- Back to top button -->
    <Transition name="fade">
      <button
        v-if="showBackToTop"
        class="back-to-top"
        @click="scrollToTop"
        aria-label="Back to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
    </Transition>
  </main>
</template>

<script setup lang="ts">
// SEO
useHead({
  title: 'Vichna - Creative Developer Portfolio',
  meta: [
    { name: 'description', content: 'Vichna is a passionate creative developer specializing in Vue.js, Nuxt.js, React, and modern web technologies. Crafting beautiful digital experiences.' }
  ]
})

const showBackToTop = ref(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  const handleScroll = () => {
    showBackToTop.value = window.scrollY > 500
  }
  window.addEventListener('scroll', handleScroll)
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<style scoped>
main {
  position: relative;
  z-index: 1;
}

/* Back to top */
.back-to-top {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--pink-primary), var(--pink-dark));
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 999;
  box-shadow: 0 4px 20px rgba(255, 45, 120, 0.5);
  transition: var(--transition);
}

.back-to-top:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(255, 45, 120, 0.7);
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
