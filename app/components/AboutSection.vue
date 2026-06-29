<template>
  <section id="about" class="section about">
    <div class="container">
      <!-- Section Badge -->
      <div class="about__badge">
        <span class="pink-badge">GET TO KNOW ME</span>
      </div>

      <div class="about__grid">
        <!-- Left: Fan Image + Stats -->
        <div class="about__left">
          <div class="about__fan-wrapper">
            <div class="about__fan-glow"></div>
            <img src="/japanese_fan.png" alt="Decorative Japanese Fan" class="about__fan animate-float" />
          </div>

          <div class="about__stats">
            <div v-for="stat in stats" :key="stat.label" class="about__stat">
              <span class="about__stat-number">{{ stat.value }}</span>
              <span class="about__stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <!-- Center: About Text -->
        <div class="about__center">
          <h2 class="about__title">
            <span class="sakura-icon">🌸</span>
            About <span class="gradient-text">Me</span>
            <span class="sakura-icon">🌸</span>
          </h2>
          <p class="about__description">
            I am a passionate developer with years of experience in creating
            beautiful and functional web applications. I love turning ideas into
            reality through code and design.
          </p>
          <p class="about__description">
            My expertise spans across modern frontend frameworks, crafting
            pixel-perfect interfaces with smooth interactions that captivate
            users and deliver exceptional experiences.
          </p>

          <a href="#contact" class="btn-primary about__cta" @click.prevent="scrollTo('#contact')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            Let's Talk
          </a>
        </div>

        <!-- Right: Philosophy Cards -->
        <div class="about__right">
          <div class="glass-card about__card">
            <div class="about__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 class="about__card-title">My Philosophy</h3>
            <p class="about__card-text">
              Blending traditional inspiration with modern frontend technologies to
              create unique, high-performance web experiences.
            </p>
          </div>

          <div class="glass-card about__card">
            <div class="about__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
              </svg>
            </div>
            <h3 class="about__card-title">The Mission</h3>
            <p class="about__card-text">
              Transforming complex ideas into clean, pixel-perfect, and responsive
              interactive interfaces that captivate users.
            </p>
          </div>

          <div class="glass-card about__card">
            <div class="about__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                <path d="M8 12l3 3 5-5"/>
              </svg>
            </div>
            <h3 class="about__card-title">The Vision</h3>
            <p class="about__card-text">
              Building a future where digital experiences feel intuitive, inclusive,
              and aesthetically beautiful for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '20+', label: 'Happy Clients' },
  { value: '24/7', label: 'Dedicated Support' },
]

const scrollTo = (href: string) => {
  const el = document.querySelector(href)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.about {
  position: relative;
  overflow: hidden;
}

.about::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(255, 45, 120, 0.04) 0%, transparent 70%);
  pointer-events: none;
}

.about__badge {
  text-align: left;
  margin-bottom: 24px;
}

.about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  align-items: start;
}

/* Left */
.about__left {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.about__fan-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
}

.about__fan-glow {
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(255, 45, 120, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.about__fan {
  width: 280px;
  height: 320px;
  object-fit: contain;
  position: relative;
  z-index: 1;
  filter: drop-shadow(0 10px 40px rgba(255, 45, 120, 0.4));
}

.about__stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.about__stat {
  text-align: center;
  padding: 16px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  transition: var(--transition);
}

.about__stat:hover {
  border-color: var(--border-pink);
  box-shadow: 0 4px 20px rgba(255, 45, 120, 0.15);
}

.about__stat-number {
  display: block;
  font-size: 28px;
  font-weight: 800;
  font-family: var(--font-alt);
  background: linear-gradient(135deg, var(--pink-primary), var(--pink-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 4px;
}

.about__stat-label {
  font-size: 11px;
  color: var(--text-muted);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/* Center */
.about__center {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.about__title {
  font-size: clamp(30px, 4vw, 42px);
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}

.about__description {
  font-size: 14px;
  line-height: 1.8;
  color: var(--text-secondary);
}

.about__cta {
  margin-top: 16px;
  align-self: flex-start;
}

/* Right */
.about__right {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.about__card {
  padding: 24px;
}

.about__card-icon {
  width: 44px;
  height: 44px;
  background: var(--pink-soft);
  border: 1px solid var(--border-pink);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--pink-primary);
  margin-bottom: 12px;
}

.about__card-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.about__card-text {
  font-size: 13px;
  line-height: 1.7;
  color: var(--text-secondary);
}

.sakura-icon {
  font-size: 20px;
}

@media (max-width: 1024px) {
  .about__grid {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
  .about__left { grid-column: 1 / -1; align-items: center; }
  .about__fan { width: 220px; height: 260px; }
}

@media (max-width: 640px) {
  .about__grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .about__title { justify-content: center; }
  .about__description { text-align: center; }
  .about__cta { align-self: center; }
}
</style>
