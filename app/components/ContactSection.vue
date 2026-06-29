<template>
  <section id="contact" class="section contact">
    <div class="container">
      <div class="section-title">
        <h2>
          <span class="sakura-icon">🌸</span>
          Get In <span>Touch</span>
          <span class="sakura-icon">🌸</span>
        </h2>
        <p>Let's work together on something amazing</p>
        <div class="pink-divider"></div>
      </div>

      <div class="contact__grid">
        <!-- Left Info -->
        <div class="contact__info">
          <h3 class="contact__info-title">Let's create something beautiful together</h3>
          <p class="contact__info-text">
            I'm always open to discussing new projects, creative ideas or opportunities
            to be part of your visions. Don't hesitate to reach out!
          </p>

          <div class="contact__details">
            <div class="contact__detail-item" v-for="item in contactInfo" :key="item.label">
              <div class="contact__detail-icon" v-html="item.svg"></div>
              <div>
                <span class="contact__detail-label">{{ item.label }}</span>
                <a :href="item.href" class="contact__detail-value">{{ item.value }}</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Form -->
        <form class="contact__form glass-card" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name" class="form-label">Full Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              class="form-input"
              placeholder="Your name"
              required
            />
          </div>

          <div class="form-group">
            <label for="email" class="form-label">Email Address</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="form-input"
              placeholder="your@email.com"
              required
            />
          </div>

          <div class="form-group">
            <label for="subject" class="form-label">Subject</label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              class="form-input"
              placeholder="Project inquiry..."
              required
            />
          </div>

          <div class="form-group">
            <label for="message" class="form-label">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              class="form-input form-textarea"
              placeholder="Tell me about your project..."
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" class="btn-primary contact__submit" :class="{ loading: sending }">
            <svg v-if="!sending && !sent" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            <span>{{ sent ? '✓ Message Sent!' : sending ? 'Sending...' : 'Send Message' }}</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const form = reactive({ name: '', email: '', subject: '', message: '' })
const sending = ref(false)
const sent = ref(false)

const contactInfo = [
  {
    label: 'Email',
    value: 'hello@vichna.dev',
    href: 'mailto:hello@vichna.dev',
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
  },
  {
    label: 'Location',
    value: 'Phnom Penh, Cambodia',
    href: '#',
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/vichna',
    href: 'https://linkedin.com',
    svg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
  },
]

const handleSubmit = async () => {
  sending.value = true
  await new Promise(resolve => setTimeout(resolve, 1500))
  sending.value = false
  sent.value = true
  Object.assign(form, { name: '', email: '', subject: '', message: '' })
  setTimeout(() => { sent.value = false }, 4000)
}
</script>

<style scoped>
.contact { position: relative; }
.sakura-icon { font-size: 22px; }

.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 60px;
  margin-top: 60px;
  align-items: start;
}

.contact__info-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.4;
  margin-bottom: 16px;
}

.contact__info-text {
  font-size: 14px;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 40px;
}

.contact__details {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact__detail-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.contact__detail-icon {
  width: 44px;
  height: 44px;
  background: var(--pink-soft);
  border: 1px solid var(--border-pink);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--pink-primary);
  flex-shrink: 0;
}

.contact__detail-label {
  display: block;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin-bottom: 2px;
}

.contact__detail-value {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
  transition: color 0.2s;
}

.contact__detail-value:hover {
  color: var(--pink-light);
}

/* Form */
.contact__form {
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-label {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
}

.form-input {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  padding: 12px 16px;
  font-family: var(--font-main);
  font-size: 14px;
  color: var(--text-primary);
  transition: var(--transition);
  outline: none;
  width: 100%;
}

.form-input::placeholder {
  color: var(--text-muted);
}

.form-input:focus {
  border-color: var(--pink-primary);
  box-shadow: 0 0 0 3px rgba(255, 45, 120, 0.12);
  background: rgba(255, 45, 120, 0.04);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
  font-family: var(--font-main);
}

.contact__submit {
  width: 100%;
  justify-content: center;
  font-size: 15px;
  padding: 14px;
}

.contact__submit.loading {
  opacity: 0.8;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .contact__grid { grid-template-columns: 1fr; gap: 40px; }
  .contact__form { padding: 24px; }
}
</style>
