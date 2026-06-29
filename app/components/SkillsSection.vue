<template>
  <section id="skills" class="section skills">
    <div class="container">
      <div class="section-title">
        <h2>
          <span class="sakura-icon">🌸</span>
          <span>My</span> Skills
          <span class="sakura-icon">🌸</span>
        </h2>
        <p>Technologies I work with</p>
        <div class="pink-divider"></div>
      </div>

      <div class="skills__grid">
        <div v-for="category in skillCategories" :key="category.name" class="skills__category">
          <h3 class="skills__cat-title">{{ category.name }}</h3>
          <div class="skills__list">
            <div v-for="skill in category.skills" :key="skill.name" class="skill-item">
              <div class="skill-item__header">
                <span class="skill-item__name">{{ skill.name }}</span>
                <span class="skill-item__pct">{{ skill.pct }}%</span>
              </div>
              <div class="skill-item__bar">
                <div
                  class="skill-item__fill"
                  :style="{ width: animating ? skill.pct + '%' : '0%', background: skill.color }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const animating = ref(false)

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'Vue.js / Nuxt', pct: 92, color: 'linear-gradient(90deg, #41b883, #00dc82)' },
      { name: 'React / Next.js', pct: 85, color: 'linear-gradient(90deg, #61dafb, #0ea5e9)' },
      { name: 'TypeScript', pct: 88, color: 'linear-gradient(90deg, #3178c6, #60a5fa)' },
      { name: 'CSS / Tailwind', pct: 95, color: 'linear-gradient(90deg, var(--pink-primary), var(--pink-light))' },
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', pct: 80, color: 'linear-gradient(90deg, #68a063, #84cc16)' },
      { name: 'Python', pct: 72, color: 'linear-gradient(90deg, #3b82f6, #6366f1)' },
      { name: 'REST APIs', pct: 88, color: 'linear-gradient(90deg, var(--pink-primary), #a855f7)' },
      { name: 'PostgreSQL', pct: 76, color: 'linear-gradient(90deg, #336791, #60a5fa)' },
    ]
  },
  {
    name: 'Design & Tools',
    skills: [
      { name: 'Figma', pct: 85, color: 'linear-gradient(90deg, #f24e1e, #ff7854)' },
      { name: 'UI/UX Design', pct: 82, color: 'linear-gradient(90deg, #a855f7, var(--pink-light))' },
      { name: 'Git / GitHub', pct: 90, color: 'linear-gradient(90deg, #f05032, #fd8d66)' },
      { name: 'Docker', pct: 70, color: 'linear-gradient(90deg, #2496ed, #60a5fa)' },
    ]
  },
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => { animating.value = true }, 200)
      }
    })
  }, { threshold: 0.3 })

  const el = document.querySelector('#skills')
  if (el) observer.observe(el)
})
</script>

<style scoped>
.skills {
  position: relative;
}

.sakura-icon { font-size: 22px; }

.skills__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
}

.skills__category {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 20px;
  padding: 28px;
  transition: var(--transition);
}

.skills__category:hover {
  border-color: var(--border-pink);
  box-shadow: 0 8px 32px rgba(255, 45, 120, 0.12);
}

.skills__cat-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--pink-light);
  margin-bottom: 24px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
  gap: 8px;
}

.skills__cat-title::before {
  content: '';
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: linear-gradient(135deg, var(--pink-primary), var(--pink-light));
}

.skills__list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.skill-item__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.skill-item__name {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-primary);
}

.skill-item__pct {
  font-size: 12px;
  font-weight: 700;
  color: var(--pink-light);
}

.skill-item__bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 3px;
  overflow: hidden;
}

.skill-item__fill {
  height: 100%;
  border-radius: 3px;
  transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 8px rgba(255, 45, 120, 0.5);
}

@media (max-width: 900px) {
  .skills__grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 600px) {
  .skills__grid { grid-template-columns: 1fr; }
}
</style>
