<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled, 'navbar--open': menuOpen }">
    <div class="navbar__container">
      <!-- Logo -->
      <NuxtLink to="/" class="navbar__logo" @click="menuOpen = false">
        <span class="navbar__logo-text">VICHNA</span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <ul class="navbar__links">
        <li v-for="link in navLinks" :key="link.href">
          <a :href="link.href" class="navbar__link" @click="scrollToSection(link.href)">
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- CTA Button -->
      <a href="#contact" class="btn-primary navbar__cta" @click="scrollToSection('#contact')">
        <span>Hire Me</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>

      <!-- Hamburger -->
      <button
        class="navbar__hamburger"
        :class="{ active: menuOpen }"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="navbar__mobile" :class="{ open: menuOpen }">
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        class="navbar__mobile-link"
        @click="() => { scrollToSection(link.href); menuOpen = false; }"
      >
        {{ link.label }}
      </a>
      <a href="#contact" class="btn-primary" style="margin-top:12px; width:100%; justify-content:center;" @click="() => { scrollToSection('#contact'); menuOpen = false; }">
        Hire Me
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
const isScrolled = ref(false)
const menuOpen = ref(false)

const navLinks = [
  { href: '#home', label: 'HOME' },
  { href: '#about', label: 'ABOUT' },
  { href: '#certificates', label: 'CERTIFICATES' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#contact', label: 'CONTACT' },
]

const scrollToSection = (href: string) => {
  const el = document.querySelector(href)
  if (el) {
    const offset = 80
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 20
  }
  window.addEventListener('scroll', handleScroll)
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--nav-height);
  transition: var(--transition);
  padding: 0 16px;
}

.navbar--scrolled {
  background: rgba(8, 8, 18, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-pink);
  box-shadow: 0 4px 30px rgba(255, 45, 120, 0.1);
}

.navbar__container {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 40px;
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  flex-shrink: 0;
}

.navbar__logo-text {
  font-family: var(--font-alt);
  font-size: 22px;
  font-weight: 800;
  letter-spacing: 0.12em;
  background: linear-gradient(135deg, #fff 30%, var(--pink-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding: 4px 16px;
  border: 1px solid var(--border-pink);
  border-radius: 8px;
  transition: var(--transition);
}

.navbar__logo-text:hover {
  border-color: var(--pink-primary);
  box-shadow: 0 0 20px rgba(255, 45, 120, 0.3);
}

.navbar__links {
  display: flex;
  list-style: none;
  gap: 32px;
  margin: 0;
  padding: 0;
  margin-left: auto;
}

.navbar__link {
  font-family: var(--font-alt);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  text-decoration: none;
  transition: var(--transition);
  position: relative;
  padding-bottom: 4px;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--pink-primary), var(--pink-light));
  border-radius: 1px;
  transition: width 0.3s ease;
}

.navbar__link:hover {
  color: var(--text-primary);
}

.navbar__link:hover::after {
  width: 100%;
}

.navbar__cta {
  margin-left: 20px;
  white-space: nowrap;
  flex-shrink: 0;
  font-size: 13px;
  padding: 10px 22px;
}

/* Hamburger */
.navbar__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: auto;
}

.navbar__hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--pink-light);
  border-radius: 2px;
  transition: var(--transition);
}

.navbar__hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.navbar__hamburger.active span:nth-child(2) { opacity: 0; }
.navbar__hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

/* Mobile Menu */
.navbar__mobile {
  display: none;
  flex-direction: column;
  gap: 8px;
  padding: 16px 24px 24px;
  background: rgba(8, 8, 18, 0.97);
  backdrop-filter: blur(20px);
  border-top: 1px solid var(--border-pink);
  transform: translateY(-100%);
  opacity: 0;
  transition: var(--transition);
}

.navbar__mobile.open {
  transform: translateY(0);
  opacity: 1;
}

.navbar__mobile-link {
  font-family: var(--font-alt);
  font-size: 15px;
  font-weight: 600;
  color: var(--text-secondary);
  padding: 10px 0;
  border-bottom: 1px solid var(--border-subtle);
  transition: color 0.2s;
}

.navbar__mobile-link:hover {
  color: var(--pink-light);
}

@media (max-width: 900px) {
  .navbar__links, .navbar__cta { display: none; }
  .navbar__hamburger { display: flex; }
  .navbar__mobile { display: flex; }
}
</style>
