<template>
  <section id="home" class="hero">
    <!-- Background decoration -->
    <div class="hero__bg-circle hero__bg-circle--1"></div>
    <div class="hero__bg-circle hero__bg-circle--2"></div>

    <div class="container hero__container">
      <!-- Left Content -->
      <div class="hero__content">
        <div class="hero__label">
          <span class="sakura-icon">🌸</span>
          <span>VICHNA OUDOM</span>
        </div>

        <h1 class="hero__name">
          Hi, I'm <span class="gradient-text">VICHNA</span>
          <span class="sakura-icon">🌸</span>
        </h1>

        <div class="hero__title-wrapper">
          <span class="hero__title-prefix">I'm a </span>
          <span class="hero__typing">{{ displayedText }}<span class="cursor">|</span></span>
        </div>

        <p class="hero__description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis ut
          harum dolorem sit minus illo nostrum? Tempore, nobis. Recusandae neque
          exercitationem voluptates tempore tempora saepe.
        </p>

        <div class="hero__actions">
          <a href="/cv.pdf" download class="btn-primary hero__cv-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Download CV
          </a>

          <div class="hero__socials">
            <a href="https://tiktok.com" target="_blank" rel="noopener" class="social-btn" aria-label="TikTok">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34l.04-8.44a8.24 8.24 0 004.82 1.55V5.03a4.85 4.85 0 01-1.09-.34z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener" class="social-btn" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" class="social-btn" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Right - Portrait Image -->
      <div class="hero__image-wrapper">
        <div class="hero__image-glow"></div>
        <div class="hero__image-ring"></div>
        <img
          src="/hero_portrait.png"
          alt="Vichna - Creative Developer"
          class="hero__portrait animate-float"
        />
      </div>
    </div>

    <!-- Tech Stack Bar -->
    <div class="hero__techbar">
      <div class="hero__techbar-inner">
        <div v-for="tech in techStack" :key="tech.name" class="hero__tech-item">
          <div class="hero__tech-icon" :style="{ color: tech.color }" v-html="tech.svg"></div>
          <span>{{ tech.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const typingTexts = ['Creator', 'Developer', 'Designer', 'Innovator']
const displayedText = ref('')
let textIndex = 0
let charIndex = 0
let isDeleting = false
let timeoutId: ReturnType<typeof setTimeout>

const typeEffect = () => {
  const current = typingTexts[textIndex]
  if (!isDeleting) {
    displayedText.value = current.slice(0, charIndex + 1)
    charIndex++
    if (charIndex === current.length) {
      isDeleting = true
      timeoutId = setTimeout(typeEffect, 1800)
      return
    }
  } else {
    displayedText.value = current.slice(0, charIndex - 1)
    charIndex--
    if (charIndex === 0) {
      isDeleting = false
      textIndex = (textIndex + 1) % typingTexts.length
    }
  }
  timeoutId = setTimeout(typeEffect, isDeleting ? 80 : 120)
}

const techStack = [
  {
    name: 'React JS',
    color: '#61DAFB',
    svg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.12.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.468zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.468a23.357 23.357 0 0 0-1.364-3.578l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.12c3.517.889 5.535 2.398 5.535 4.139s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.932 2.079 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.468C4.237 5.058 4.794 2.575 6.321 1.7c1.527-.875 3.791.12 6.043 2.679l.328.384-.384.328a23.552 23.552 0 0 0-2.653 2.953l-.132.162-.198.033a23.moderately 23.585 0 0 0-3.792.633l-.223.073zm1.019-6.369c-.427 0-.848.111-1.215.33-1.006.576-1.408 2.383-.721 5.065a24.898 24.898 0 0 1 3.282-.535 24.976 24.976 0 0 1 2.317-2.540c-1.269-1.386-2.537-2.32-3.663-2.32z"/></svg>`
  },
  {
    name: 'Vue JS',
    color: '#41B883',
    svg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/></svg>`
  },
  {
    name: 'Tailwind CSS',
    color: '#38BDF8',
    svg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>`
  },
  {
    name: 'Next JS',
    color: '#ffffff',
    svg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474.0005.9167.0123 1.0976.1082 1.7915.7853 5.4563 4.7407 9.8764 10.1381 11.3758 1.1925.3147 2.4495.5084 3.8068.5855.4594.025 2.4781.025 2.9375 0 2.0548-.1285 3.8505-.5464 5.4319-1.2791a5.8978 5.8978 0 00-.352-.4723l-3.4632-4.2902-4.3408-6.4218c-.2288-.337-.4559-.6723-.6811-1.0046-.0227-.033-.046.0005-.046.0344l-.0015 3.2009c-.0013.579-.0013.5804-.0234.6198-.0335.0608-.0975.1073-.1797.1311-.0641.0191-.189.023-.8052.023H7.244c-.0797 0-.1667-.0143-.2297-.0608a.3614.3614 0 01-.1278-.2526c-.0111-.0844-.0111-.2437-.0111-.5726V7.7052c0-.3289 0-.4882.0111-.5727a.3614.3614 0 01.1278-.2525c.063-.0465.15-.0608.2297-.0608h2.0352c.5977 0 .7212.0005.8052.023.0822.0238.1462.0703.1797.1311.0221.0394.0221.0408.0234.6198l.0015 3.2009c0 .0339.0233.0674.046.0344.2252-.3323.4523-.6676.6811-1.0046l4.3408-6.4218 3.4632-4.2902c.1148-.1419.237-.2784.352-.4723-1.4959-.6944-3.1726-1.1151-4.9373-1.2443-.4594-.0313-2.4781-.0313-2.9375 0z"/></svg>`
  },
  {
    name: 'Nuxt JS',
    color: '#00DC82',
    svg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M13.4642 19.8295H21.2005C21.4232 19.8295 21.6417 19.7707 21.8331 19.6594C22.0246 19.5481 22.1821 19.3883 22.2898 19.1962C22.3974 19.0041 22.451 18.787 22.4448 18.5674C22.4387 18.3479 22.3731 18.1341 22.2549 17.9483L17.8521 10.7305C17.7361 10.5484 17.5751 10.3993 17.384 10.2978C17.193 10.1962 16.9784 10.1456 16.7613 10.1508C16.5441 10.156 16.3322 10.2167 16.1463 10.3271C15.9605 10.4375 15.8068 10.5938 15.7000 10.7814L13.4642 14.5447L9.94723 8.64867C9.83916 8.45852 9.68311 8.3008 9.49475 8.19114C9.30639 8.08148 9.09229 8.02372 8.87383 8.02372C8.65537 8.02372 8.44127 8.08148 8.25291 8.19114C8.06455 8.3008 7.9085 8.45852 7.80043 8.64867L1.74999 18.9483C1.63184 19.1341 1.56619 19.3479 1.56007 19.5674C1.55395 19.787 1.60754 20.0041 1.71519 20.1962C1.82283 20.3883 1.98029 20.5481 2.17177 20.6594C2.36325 20.7707 2.58172 20.8295 2.80449 20.8295H8.13386C9.95886 20.8295 11.3232 20.0682 12.2666 18.5777L14.9751 13.9669L16.7613 11.0501L22.2549 19.9483L17.8521 20.8295H13.4642Z"/></svg>`
  },
]

onMounted(() => {
  typeEffect()
})

onUnmounted(() => {
  clearTimeout(timeoutId)
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.hero__bg-circle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.hero__bg-circle--1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 45, 120, 0.12) 0%, transparent 70%);
  top: -200px;
  right: -100px;
}

.hero__bg-circle--2 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(140, 0, 255, 0.08) 0%, transparent 70%);
  bottom: 100px;
  left: -100px;
}

.hero__container {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
  padding-top: calc(var(--nav-height) + 60px);
  padding-bottom: 40px;
}

/* Left Content */
.hero__label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-bottom: 20px;
  animation: slide-up 0.6s ease forwards;
}

.sakura-icon {
  font-size: 18px;
}

.hero__name {
  font-size: clamp(36px, 5vw, 58px);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 16px;
  animation: slide-up 0.7s ease forwards;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.hero__title-wrapper {
  font-size: clamp(22px, 3.5vw, 36px);
  font-weight: 700;
  color: var(--pink-light);
  margin-bottom: 24px;
  animation: slide-up 0.8s ease forwards;
  font-family: var(--font-alt);
}

.hero__typing {
  display: inline;
}

.cursor {
  display: inline-block;
  color: var(--pink-primary);
  animation: typing-cursor 1s step-end infinite;
  font-weight: 300;
}

.hero__description {
  font-size: 14px;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 40px;
  max-width: 480px;
  animation: slide-up 0.9s ease forwards;
}

.hero__actions {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  animation: slide-up 1s ease forwards;
}

.hero__cv-btn {
  font-size: 14px;
}

.hero__socials {
  display: flex;
  gap: 12px;
}

.social-btn {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: var(--transition);
  text-decoration: none;
}

.social-btn:hover {
  border-color: var(--pink-primary);
  color: var(--pink-light);
  box-shadow: 0 4px 20px rgba(255, 45, 120, 0.35);
  transform: translateY(-3px);
}

/* Right Image */
.hero__image-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fade-in 1s ease forwards;
}

.hero__image-glow {
  position: absolute;
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, rgba(255, 45, 120, 0.25) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse-glow 3s ease-in-out infinite;
}

.hero__image-ring {
  position: absolute;
  width: 420px;
  height: 420px;
  border: 1px solid rgba(255, 45, 120, 0.2);
  border-radius: 50%;
  animation: float 8s ease-in-out infinite reverse;
}

.hero__portrait {
  width: 380px;
  height: 480px;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  box-shadow:
    0 0 60px rgba(255, 45, 120, 0.4),
    0 0 120px rgba(180, 0, 255, 0.2),
    0 20px 60px rgba(0, 0, 0, 0.5);
  filter: brightness(1.05) contrast(1.05);
}

/* Tech Stack Bar */
.hero__techbar {
  background: rgba(15, 15, 32, 0.8);
  box-shadow:
    0 -1px 20px rgba(255, 45, 120, 0.2),
    0 1px 20px rgba(255, 45, 120, 0.15);
  backdrop-filter: blur(10px);
  padding: 0;
  overflow: hidden;
}

.hero__techbar-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  flex-wrap: wrap;
}

.hero__tech-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px 40px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  transition: var(--transition);
  cursor: default;
}

.hero__tech-item:hover {
  color: var(--text-primary);
  background: var(--pink-soft);
}

.hero__tech-icon {
  display: flex;
  align-items: center;
  transition: var(--transition);
}

.hero__tech-item:hover .hero__tech-icon {
  filter: drop-shadow(0 0 6px currentColor);
}

@media (max-width: 768px) {
  .hero__container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 40px;
    padding-top: calc(var(--nav-height) + 40px);
  }
  .hero__label { justify-content: center; }
  .hero__name { justify-content: center; }
  .hero__description { margin: 0 auto 40px; }
  .hero__actions { justify-content: center; }
  .hero__portrait { width: 280px; height: 350px; }
  .hero__image-glow, .hero__image-ring { width: 280px; height: 280px; }
  .hero__tech-item { padding: 16px 20px; }
}
</style>
