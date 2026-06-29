<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="container footer__grid">
        <div class="footer__brand">
          <span class="footer__logo">VICHNA</span>
          <p class="footer__tagline">
            Crafting beautiful digital experiences with passion and precision.
          </p>
          <div class="footer__socials">
            <a href="https://tiktok.com" target="_blank" rel="noopener" class="footer__social" aria-label="TikTok">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34l.04-8.44a8.24 8.24 0 004.82 1.55V5.03a4.85 4.85 0 01-1.09-.34z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener" class="footer__social" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" class="footer__social" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener" class="footer__social" aria-label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="footer__links-col">
          <h4 class="footer__col-title">Navigation</h4>
          <ul class="footer__links">
            <li v-for="link in navLinks" :key="link.href">
              <a :href="link.href" class="footer__link">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <div class="footer__links-col">
          <h4 class="footer__col-title">Services</h4>
          <ul class="footer__links">
            <li v-for="service in services" :key="service">
              <span class="footer__link">{{ service }}</span>
            </li>
          </ul>
        </div>

        <div class="footer__links-col">
          <h4 class="footer__col-title">Tech Stack</h4>
          <ul class="footer__links">
            <li v-for="tech in techList" :key="tech">
              <span class="footer__link">{{ tech }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <p>© {{ new Date().getFullYear() }} Vichna. All rights reserved. Built with 🌸 using Nuxt 4 & Vue 3</p>
        <div class="footer__bottom-links">
          <a href="#" class="footer__link">Privacy Policy</a>
          <a href="#" class="footer__link">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const services = ['UI/UX Design', 'Frontend Development', 'Fullstack Apps', 'API Integration', 'Consulting']
const techList = ['Vue.js / Nuxt 4', 'React / Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS']
</script>

<style scoped>
.footer {
  background: var(--bg-card);
  border-top: 1px solid var(--border-pink);
  position: relative;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--pink-primary), transparent);
}

.footer__top {
  padding: 60px 0 40px;
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
}

.footer__logo {
  font-family: var(--font-alt);
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 0.12em;
  background: linear-gradient(135deg, #fff 30%, var(--pink-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
  margin-bottom: 12px;
}

.footer__tagline {
  font-size: 13px;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 20px;
  max-width: 260px;
}

.footer__socials {
  display: flex;
  gap: 10px;
}

.footer__social {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--bg-card2);
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: var(--transition);
  text-decoration: none;
}

.footer__social:hover {
  border-color: var(--pink-primary);
  color: var(--pink-light);
  box-shadow: 0 4px 16px rgba(255, 45, 120, 0.3);
}

.footer__col-title {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.footer__links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__link {
  font-size: 13px;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s;
  cursor: pointer;
}

.footer__link:hover {
  color: var(--pink-light);
}

/* Bottom */
.footer__bottom {
  border-top: 1px solid var(--border-subtle);
  padding: 20px 0;
}

.footer__bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.footer__bottom p {
  font-size: 12px;
  color: var(--text-muted);
}

.footer__bottom-links {
  display: flex;
  gap: 20px;
}

@media (max-width: 900px) {
  .footer__grid { grid-template-columns: 1fr 1fr; }
  .footer__brand { grid-column: 1 / -1; }
}

@media (max-width: 500px) {
  .footer__grid { grid-template-columns: 1fr; }
  .footer__bottom-inner { flex-direction: column; text-align: center; }
}
</style>
