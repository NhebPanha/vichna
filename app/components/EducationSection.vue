<template>
  <section id="education" class="section education">
    <div class="container">
      <div class="education__grid">
        <!-- Left Image -->
        <div class="education__image-side">
          <div class="education__image-glow"></div>
          <img src="/cherry_blossom.png" alt="Cherry Blossom" class="education__image animate-float" />
        </div>

        <!-- Right Content -->
        <div class="education__content">
          <div class="section-title" style="text-align:left">
            <h2>
              <span class="sakura-icon">🌸</span>
              <span>Education</span>
              <span class="sakura-icon">🌸</span>
            </h2>
            <p style="text-align:left">My academic journey</p>
            <div class="pink-divider" style="margin-left:0"></div>
          </div>

          <div class="education__timeline">
            <div
              v-for="(edu, index) in education"
              :key="edu.id"
              class="edu-item"
              :class="{ 'edu-item--active': index === 0 }"
            >
              <div class="edu-item__dot">
                <div class="edu-item__dot-inner"></div>
              </div>
              <div class="edu-item__content">
                <div class="edu-item__header">
                  <h3 class="edu-item__degree">{{ edu.degree }}</h3>
                  <span class="edu-item__gpa">{{ edu.gpa }}</span>
                </div>
                <div class="edu-item__meta">
                  <span class="edu-item__school">{{ edu.school }}</span>
                  <span class="edu-item__period">{{ edu.period }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const education = [
  {
    id: 1,
    degree: "Master's in Computer Science",
    school: 'University of Technology',
    period: '2021 – 2023',
    gpa: '✦ 4.0 GPA',
  },
  {
    id: 2,
    degree: "Bachelor's in Software Engineering",
    school: 'Institute of Technology',
    period: '2017 – 2021',
    gpa: '✦ 3.8 GPA',
  },
  {
    id: 3,
    degree: 'Web Development Bootcamp',
    school: 'Coding Academy',
    period: '2016',
    gpa: '✦ Excellence',
  },
]
</script>

<style scoped>
.education {
  position: relative;
  overflow: hidden;
}

.education::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 45, 120, 0.04) 0%, transparent 70%);
  pointer-events: none;
}

.education__grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 80px;
  align-items: center;
}

/* Left Image */
.education__image-side {
  position: relative;
  display: flex;
  justify-content: center;
}

.education__image-glow {
  position: absolute;
  width: 350px;
  height: 350px;
  background: radial-gradient(circle, rgba(255, 45, 120, 0.18) 0%, transparent 70%);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.education__image {
  width: 100%;
  max-width: 380px;
  height: 450px;
  object-fit: cover;
  border-radius: 20px;
  position: relative;
  z-index: 1;
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(255, 45, 120, 0.2);
  filter: brightness(1.05);
}

/* Right Timeline */
.education__content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.education__timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
}

.education__timeline::before {
  content: '';
  position: absolute;
  left: 11px;
  top: 24px;
  bottom: 24px;
  width: 2px;
  background: linear-gradient(180deg, var(--pink-primary), rgba(255, 45, 120, 0.1));
}

.edu-item {
  display: flex;
  gap: 20px;
  padding: 20px 0;
  position: relative;
  transition: var(--transition);
}

.edu-item__dot {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-dark);
  border-radius: 50%;
  border: 2px solid var(--border-pink);
  position: relative;
  z-index: 1;
  margin-top: 4px;
  transition: var(--transition);
}

.edu-item__dot-inner {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--pink-primary);
  transition: var(--transition);
}

.edu-item--active .edu-item__dot {
  border-color: var(--pink-primary);
  box-shadow: 0 0 12px rgba(255, 45, 120, 0.5);
}

.edu-item--active .edu-item__dot-inner {
  width: 12px;
  height: 12px;
  box-shadow: 0 0 8px var(--pink-primary);
}

.edu-item:hover .edu-item__dot {
  border-color: var(--pink-primary);
  box-shadow: 0 0 12px rgba(255, 45, 120, 0.4);
}

.edu-item__content {
  flex: 1;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  padding: 20px 24px;
  transition: var(--transition);
}

.edu-item:hover .edu-item__content {
  border-color: var(--border-pink);
  box-shadow: 0 4px 20px rgba(255, 45, 120, 0.12);
}

.edu-item__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}

.edu-item__degree {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
}

.edu-item__gpa {
  font-size: 12px;
  font-weight: 600;
  color: var(--pink-light);
  white-space: nowrap;
}

.edu-item__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}

.edu-item__school {
  font-size: 13px;
  color: var(--pink-light);
  font-weight: 500;
}

.edu-item__period {
  font-size: 12px;
  color: var(--text-muted);
}

.sakura-icon {
  font-size: 20px;
}

@media (max-width: 768px) {
  .education__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .education__image { max-width: 100%; height: 280px; }
  .education__image-glow { width: 250px; height: 250px; }
}
</style>
