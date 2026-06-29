<template>
  <section id="projects" class="section projects">
    <div class="container">
      <div class="section-title">
        <h2>
          <span class="sakura-icon">🌸</span>
          My <span>Projects</span>
          <span class="sakura-icon">🌸</span>
        </h2>
        <p>Things I've built with passion</p>
        <div class="pink-divider"></div>
      </div>

      <!-- Filter Tabs -->
      <div class="projects__filters">
        <button
          v-for="filter in filters"
          :key="filter"
          class="filter-btn"
          :class="{ active: activeFilter === filter }"
          @click="activeFilter = filter"
        >
          {{ filter }}
        </button>
      </div>

      <div class="projects__grid">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card glass-card"
        >
          <div class="project-card__img-wrap">
            <div class="project-card__img-placeholder" :style="{ background: project.gradient }">
              <span class="project-card__icon">{{ project.icon }}</span>
            </div>
            <div class="project-card__overlay">
              <a :href="project.demo" target="_blank" rel="noopener" class="project-card__overlay-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
                Live Demo
              </a>
              <a :href="project.github" target="_blank" rel="noopener" class="project-card__overlay-btn project-card__overlay-btn--outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>

          <div class="project-card__body">
            <div class="project-card__header">
              <h3 class="project-card__title">{{ project.title }}</h3>
              <span class="pink-badge">{{ project.category }}</span>
            </div>
            <p class="project-card__desc">{{ project.description }}</p>
            <div class="project-card__tags">
              <span
                v-for="tag in project.tags"
                :key="tag.name"
                class="tech-tag"
                :class="tag.class"
              >{{ tag.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const filters = ['All', 'Frontend', 'Fullstack', 'Design']
const activeFilter = ref('All')

const projects = [
  {
    id: 1,
    title: 'Sakura E-Commerce',
    description: 'A modern e-commerce platform with stunning UI, real-time cart, and seamless checkout flow.',
    category: 'Fullstack',
    gradient: 'linear-gradient(135deg, #1a0a1e, #3d0a2e)',
    icon: '🛍️',
    demo: '#',
    github: '#',
    tags: [
      { name: 'Nuxt 4', class: 'nuxt' },
      { name: 'Vue 3', class: 'vue' },
      { name: 'Node.js', class: 'node' },
    ]
  },
  {
    id: 2,
    title: 'Portfolio Builder',
    description: 'Drag-and-drop portfolio website builder with real-time preview and export functionality.',
    category: 'Frontend',
    gradient: 'linear-gradient(135deg, #0a1a1e, #0a2a3d)',
    icon: '✨',
    demo: '#',
    github: '#',
    tags: [
      { name: 'React', class: 'react' },
      { name: 'TypeScript', class: 'node' },
      { name: 'Tailwind', class: 'tailwind' },
    ]
  },
  {
    id: 3,
    title: 'AI Dashboard',
    description: 'Real-time analytics dashboard with AI-powered insights and beautiful data visualizations.',
    category: 'Fullstack',
    gradient: 'linear-gradient(135deg, #0a0a1e, #1a0a3d)',
    icon: '🤖',
    demo: '#',
    github: '#',
    tags: [
      { name: 'Vue 3', class: 'vue' },
      { name: 'Python', class: 'research' },
      { name: 'MongoDB', class: 'mongo' },
    ]
  },
  {
    id: 4,
    title: 'Brand Design System',
    description: 'A comprehensive design system and component library with consistent aesthetic language.',
    category: 'Design',
    gradient: 'linear-gradient(135deg, #1e0a0a, #3d0a0a)',
    icon: '🎨',
    demo: '#',
    github: '#',
    tags: [
      { name: 'Figma', class: 'figma' },
      { name: 'Vue 3', class: 'vue' },
      { name: 'Storybook', class: 'express' },
    ]
  },
  {
    id: 5,
    title: 'Chat Application',
    description: 'Real-time messaging app with end-to-end encryption, file sharing, and voice messages.',
    category: 'Fullstack',
    gradient: 'linear-gradient(135deg, #0a1e0a, #0a2a0a)',
    icon: '💬',
    demo: '#',
    github: '#',
    tags: [
      { name: 'Next.js', class: 'react' },
      { name: 'Socket.io', class: 'node' },
      { name: 'PostgreSQL', class: 'node' },
    ]
  },
  {
    id: 6,
    title: 'Motion UI Library',
    description: 'A Vue component library focused on smooth micro-animations and delightful interactions.',
    category: 'Frontend',
    gradient: 'linear-gradient(135deg, #1e1a0a, #3d2a0a)',
    icon: '🌊',
    demo: '#',
    github: '#',
    tags: [
      { name: 'Vue 3', class: 'vue' },
      { name: 'GSAP', class: 'prototype' },
      { name: 'TypeScript', class: 'node' },
    ]
  },
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects
  return projects.filter(p => p.category === activeFilter.value)
})
</script>

<style scoped>
.projects { position: relative; }
.sakura-icon { font-size: 22px; }

/* Filters */
.projects__filters {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 40px 0 50px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 8px 24px;
  border-radius: 50px;
  border: 1px solid var(--border-subtle);
  background: transparent;
  color: var(--text-secondary);
  font-family: var(--font-main);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
}

.filter-btn:hover {
  border-color: var(--border-pink);
  color: var(--pink-light);
}

.filter-btn.active {
  background: linear-gradient(135deg, var(--pink-primary), var(--pink-dark));
  border-color: transparent;
  color: white;
  box-shadow: 0 4px 20px rgba(255, 45, 120, 0.4);
}

/* Grid */
.projects__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.project-card {
  overflow: hidden;
  padding: 0;
}

.project-card__img-wrap {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.project-card__img-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.project-card__icon {
  font-size: 56px;
  filter: drop-shadow(0 4px 12px rgba(255, 45, 120, 0.5));
  transition: var(--transition);
}

.project-card:hover .project-card__icon {
  transform: scale(1.15);
}

.project-card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(8, 8, 18, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(4px);
}

.project-card:hover .project-card__overlay {
  opacity: 1;
}

.project-card__overlay-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;
  background: linear-gradient(135deg, var(--pink-primary), var(--pink-dark));
  color: white;
  border: none;
}

.project-card__overlay-btn--outline {
  background: transparent;
  border: 1px solid var(--pink-primary);
  color: var(--pink-light);
}

.project-card__overlay-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(255, 45, 120, 0.5);
}

.project-card__body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.project-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
}

.project-card__title {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
}

.project-card__desc {
  font-size: 13px;
  line-height: 1.7;
  color: var(--text-secondary);
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

@media (max-width: 1024px) {
  .projects__grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 640px) {
  .projects__grid { grid-template-columns: 1fr; }
}
</style>
