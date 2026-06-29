<template>
  <section id="certificates" class="section certificates">
    <div class="container">
      <div class="section-title">
        <h2>
          <span class="sakura-icon">🌸</span>
          <span>Certificates</span>
          <span class="sakura-icon">🌸</span>
        </h2>
        <p>Professional achievements &amp; certifications</p>
        <div class="pink-divider"></div>
      </div>

      <div class="certificates__grid">
        <div
          v-for="cert in certificates"
          :key="cert.id"
          class="glass-card cert-card"
        >
          <div class="cert-card__header">
            <div class="cert-card__info">
              <h3 class="cert-card__title">{{ cert.title }}</h3>
              <span class="cert-card__org">{{ cert.org }}</span>
            </div>
            <span class="cert-card__year">{{ cert.year }}</span>
          </div>

          <div class="cert-card__tags">
            <span
              v-for="tag in cert.tags"
              :key="tag.name"
              class="tech-tag"
              :class="tag.class"
            >{{ tag.name }}</span>
          </div>

          <a :href="cert.link" target="_blank" rel="noopener" class="cert-card__link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
            View Certificate
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const certificates = [
  {
    id: 1,
    title: 'Advanced React Development',
    org: 'Meta',
    year: '2024',
    link: '#',
    tags: [
      { name: 'React', class: 'react' },
      { name: 'Hooks', class: 'react' },
      { name: 'Context API', class: 'research' },
    ]
  },
  {
    id: 2,
    title: 'Full Stack JavaScript',
    org: 'IBM',
    year: '2023',
    link: '#',
    tags: [
      { name: 'Node.js', class: 'node' },
      { name: 'Express', class: 'express' },
      { name: 'MongoDB', class: 'mongo' },
    ]
  },
  {
    id: 3,
    title: 'UI/UX Design',
    org: 'Google',
    year: '2024',
    link: '#',
    tags: [
      { name: 'Figma', class: 'figma' },
      { name: 'User Research', class: 'research' },
      { name: 'Prototyping', class: 'prototype' },
    ]
  },
  {
    id: 4,
    title: 'Vue.js & Nuxt Mastery',
    org: 'Vue School',
    year: '2024',
    link: '#',
    tags: [
      { name: 'Vue 3', class: 'vue' },
      { name: 'Nuxt 4', class: 'nuxt' },
      { name: 'Pinia', class: 'vue' },
    ]
  },
  {
    id: 5,
    title: 'Tailwind CSS Pro',
    org: 'Frontend Masters',
    year: '2023',
    link: '#',
    tags: [
      { name: 'Tailwind', class: 'tailwind' },
      { name: 'Responsive', class: 'prototype' },
      { name: 'Animation', class: 'research' },
    ]
  },
  {
    id: 6,
    title: 'TypeScript Expert',
    org: 'Microsoft',
    year: '2023',
    link: '#',
    tags: [
      { name: 'TypeScript', class: 'node' },
      { name: 'Generics', class: 'research' },
      { name: 'Patterns', class: 'express' },
    ]
  },
]
</script>

<style scoped>
.certificates {
  position: relative;
}

.sakura-icon {
  font-size: 22px;
}

.certificates__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 50px;
}

.cert-card {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  overflow: hidden;
}

.cert-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--pink-primary), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

.cert-card:hover::before {
  opacity: 1;
}

.cert-card__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.cert-card__info {
  flex: 1;
}

.cert-card__title {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
  margin-bottom: 4px;
}

.cert-card__org {
  font-size: 12px;
  color: var(--text-muted);
  font-weight: 500;
}

.cert-card__year {
  display: inline-block;
  background: linear-gradient(135deg, var(--pink-primary), var(--pink-dark));
  color: white;
  font-size: 12px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
  white-space: nowrap;
  flex-shrink: 0;
}

.cert-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.cert-card__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: var(--pink-light);
  text-decoration: none;
  transition: var(--transition);
  margin-top: auto;
}

.cert-card__link:hover {
  color: var(--pink-primary);
  gap: 8px;
}

@media (max-width: 1024px) {
  .certificates__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .certificates__grid { grid-template-columns: 1fr; }
}
</style>
