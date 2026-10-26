:root {
  --bg: #f8f7f3;
  --surface: #ffffff;
  --surface-alt: #f2efe9;
  --text: #1d1d1f;
  --muted: #5f6470;
  --primary: #1f6feb;
  --primary-soft: rgba(31, 111, 235, 0.12);
  --border: rgba(29, 29, 31, 0.09);
  --shadow: 0 18px 45px rgba(22, 31, 52, 0.08);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(12px);
  background: rgba(248, 247, 243, 0.8);
  border-bottom: 1px solid var(--border);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
  gap: 1rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
}

.brand img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  color: var(--muted);
  font-size: 0.95rem;
}

.main-nav a:hover,
.text-link:hover,
.read-more:hover {
  color: var(--primary);
}

.hero {
  padding: 5.5rem 0 4rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 2rem;
  align-items: center;
}

.eyebrow,
.section-kicker {
  margin: 0 0 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--primary);
  font-size: 0.78rem;
  font-weight: 700;
}

.hero-copy h1 {
  margin: 0;
  font-size: clamp(2.5rem, 5vw, 4.3rem);
  line-height: 1.05;
  letter-spacing: -0.06em;
}

.lead {
  max-width: 620px;
  margin-top: 1rem;
  font-size: 1.1rem;
  color: var(--muted);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.4rem;
  border-radius: 999px;
  font-weight: 600;
  transition: 0.2s ease;
}

.btn-primary {
  background: var(--text);
  color: #fff;
}

.btn-primary:hover {
  background: #000;
}

.btn-secondary {
  background: var(--primary-soft);
  color: var(--primary);
}

.hero-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: var(--shadow);
}

.profile-badge {
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  background: #e0f0ff;
  color: var(--primary);
  font-size: 0.8rem;
  font-weight: 700;
}

.hero-card h2 {
  margin: 0 0 1rem;
  font-size: 1.6rem;
}

.hero-card ul {
  margin: 0;
  padding-left: 1.1rem;
  color: var(--muted);
}

.section {
  padding: 5rem 0;
}

.alt {
  background: var(--surface-alt);
}

.narrow {
  max-width: 720px;
}

.section h2 {
  margin: 0 0 1rem;
  font-size: clamp(2rem, 3.2vw, 2.8rem);
  line-height: 1.15;
  letter-spacing: -0.04em;
}

.section p {
  color: var(--muted);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.project-card,
.blog-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 10px 24px rgba(18, 24, 38, 0.04);
}

.tag {
  display: inline-block;
  margin-bottom: 1rem;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
}

.project-card h3,
.blog-card h3 {
  margin: 0 0 0.75rem;
  font-size: 1.3rem;
}

.project-card p,
.blog-card p {
  margin: 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 1rem;
  margin-bottom: 2rem;
}

.text-link {
  color: var(--primary);
  font-weight: 600;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.meta {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
  color: var(--muted);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.read-more {
  display: inline-block;
  margin-top: 1rem;
  color: var(--primary);
  font-weight: 600;
}

.site-footer {
  padding: 2rem 0 3rem;
  border-top: 1px solid var(--border);
}

.footer-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  color: var(--muted);
}

@media (max-width: 860px) {
  .hero-grid,
  .card-grid,
  .blog-grid {
    grid-template-columns: 1fr;
  }

  .main-nav {
    display: none;
  }

  .section-header,
  .footer-wrap {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero {
    padding-top: 4rem;
  }
}
