import { useState } from 'react'

const categories = [
  { title: 'Real Estate', type: 'PROPERTY FILMS', posterSrc: '/images/real-estate.svg' },
  { title: 'Talking Head', type: 'INTERVIEWS & CREATOR CONTENT', posterSrc: '/images/talking-head.svg' },
  { title: 'Short Form', type: 'REELS & SOCIAL', posterSrc: '/images/short-form.svg' },
  { title: 'Long Form', type: 'YOUTUBE & STORIES', posterSrc: '/images/long-form.svg' },
]

const services = [
  'Short-Form\nContent',
  'Commercial\nAds',
  'Motion\nGraphics',
  'Color\nGrading',
  'YouTube\nEditing',
  'UGC Ads',
]

const videos = [
  { id: 'trial-raw-j32-11', title: 'Trial raw J32_11', youtubeId: 'Zc34oq41Dn4', categories: ['Real Estate', 'Long Form'] },
  { id: 'perla-revised', title: 'Perla revised', videoSrc: '/videos/perla-revised.mp4', categories: ['Real Estate', 'Talking Head', 'Short Form'] },
]

function App() {
  const [openCategories, setOpenCategories] = useState({})

  return (
    <main className="portfolio" id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Avneesh Tripathi home">
          <span className="wordmark-name">AVNEESH TRIPATHI<small>VIDEO EDITOR</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a className="contact-link" href="https://wa.me/917355167784" target="_blank" rel="noreferrer">Contact <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-label hero-label-left">VIDEO EDITOR</div>
        <div className="hero-label hero-label-right">2026</div>
        <h1 id="hero-title" aria-label="Portfolio">
          <span aria-hidden="true">PORTF</span>
          <img className="hero-portrait" src="/images/portfolio-face-cutout.png" alt="" aria-hidden="true" />
          <span aria-hidden="true">LIO</span>
        </h1>
        <div className="hero-symbols" aria-hidden="true">
          <span className="symbol-burst">✹</span>
          <span className="symbol-diamond">✦</span>
          <span className="symbol-flower">✿</span>
        </div>
        <div className="hero-bottom-left">AVNEESH TRIPATHI</div>
        <a className="hero-bottom-right" href="#work">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
      </section>

      <div className="format-strip" aria-label="Editing formats">
        <span>REAL ESTATE</span><i aria-hidden="true">✳</i>
        <span>TALKING HEAD</span><i aria-hidden="true">✳</i>
        <span>SHORT FORM</span><i aria-hidden="true">✳</i>
        <span>LONG FORM</span>
      </div>

      <section className="portfolio-transition" aria-label="Animated portfolio transition">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/5b3391253749437.6a7165e039d9c.gif"
          alt="Animated portfolio artwork"
          loading="lazy"
          decoding="async"
        />
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="about-layout">
          <div className="about-main-column">
            <div className="about-intro">
              <p className="eyebrow">02 — ABOUT ME</p>
              <h2 id="about-title">HELLO</h2>
              <h3>Hi, I’m Avneesh Tripathi.</h3>
              <p>Great editing is more than smooth transitions and visual effects. It’s about capturing attention, keeping viewers engaged, and delivering a message people remember.</p>
              <p>I create cinematic video edits and motion design for brands, creators, and businesses, with a focus on clear storytelling and purposeful pacing.</p>
            </div>
            <section className="education-block" aria-labelledby="education-title">
              <h3 id="education-title">EDUCATION</h3>
              <p className="education-program">B.TECH. IN COMPUTER SCIENCE ENGINEERING</p>
              <p className="education-specialization">CLOUD COMPUTING &amp; ARTIFICIAL INTELLIGENCE <span>·</span> 2022–2026</p>
            </section>
          </div>

          <aside className="about-sidebar">
            <section className="skills-block" aria-labelledby="skills-title">
              <h3 id="skills-title">SKILLS</h3>
              <div className="skill-grid">
                <div className="skill-tile skill-premiere" role="img" aria-label="Adobe Premiere Pro">
                  <span className="skill-app-mark">Pr</span>
                </div>
                <div className="skill-tile skill-after-effects" role="img" aria-label="Adobe After Effects">
                  <span className="skill-app-mark">Ae</span>
                </div>
                <div className="skill-tile skill-photoshop" role="img" aria-label="Adobe Photoshop"><span className="skill-app-mark">Ps</span></div>
                <div className="skill-tile skill-resolve" role="img" aria-label="DaVinci Resolve">
                  <img className="resolve-mark" src="/images/davinci-resolve-logo.svg" alt="" />
                </div>
              </div>
            </section>
            <section className="experience-block" aria-labelledby="experience-title">
              <h3 id="experience-title">EXPERIENCE</h3>
              <p className="experience-date">2024–PRESENT</p>
              <p className="experience-heading">VIDEO EDITOR &amp; MOTION DESIGNER</p>
              <p className="experience-role">Cinematic edits, motion graphics, and social content.</p>
              <p className="experience-copy">Real estate · Talking head · Short form · Long form</p>
            </section>
            <a className="text-link" href="https://wa.me/917355167784" target="_blank" rel="noreferrer">LET’S WORK TOGETHER <span aria-hidden="true">↗</span></a>
          </aside>

          <figure className="about-portrait">
            <div className="portrait-frame">
              <div className="portrait-image-mask">
                <img
                  className="about-portrait-image"
                  src="/images/avneesh-real-madrid-portrait.png"
                  alt="Avneesh Tripathi standing in a white football jersey and jeans"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="portrait-serial">AT / 01</span>
              <span className="crop-handle crop-top-left" aria-hidden="true" />
              <span className="crop-handle crop-top-center" aria-hidden="true" />
              <span className="crop-handle crop-top-right" aria-hidden="true" />
              <span className="crop-handle crop-middle-left" aria-hidden="true" />
              <span className="crop-handle crop-middle-right" aria-hidden="true" />
              <span className="crop-handle crop-bottom-left" aria-hidden="true" />
              <span className="crop-handle crop-bottom-center" aria-hidden="true" />
              <span className="crop-handle crop-bottom-right" aria-hidden="true" />
            </div>
            <figcaption><span>AVNEESH TRIPATHI</span><span>VIDEO EDITOR · 2026</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="services-section" id="services" aria-labelledby="services-title">
        <div className="services-hero">
          <p className="services-kicker">03 — WHAT I DO</p>
          <div className="services-hero-title" aria-hidden="true">
            <span className="services-title-cycle">
              <span>VIDEO EDITOR</span><i>♦ ♣</i>
              <span>MOTION DESIGNER</span><i>♦ ♣</i>
            </span>
            <span className="services-title-cycle" aria-hidden="true">
              <span>VIDEO EDITOR</span><i>♦ ♣</i>
              <span>MOTION DESIGNER</span><i>♦ ♣</i>
            </span>
          </div>
          <img className="services-portrait" src="/images/avneesh-services-cutout.png" alt="" aria-hidden="true" loading="lazy" decoding="async" />
        </div>
        <div className="services-paper">
          <div className="services-content">
            <h2 className="services-side-title" id="services-title">SERVICES</h2>
            <div className="services-main">
              <p className="services-caption">EDITING & MOTION FOR EVERY FRAME</p>
              <div className="services-grid">
                {services.map((service, index) => (
                  <article className="service-card" key={service}>
                    <span className="service-tape" aria-hidden="true" />
                    <div className="service-note">
                      <span className="service-number">0{index + 1}</span>
                      <h3>{service}</h3>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 — SELECTED PROJECTS</p>
            <h2>Work by category</h2>
          </div>
          <p className="section-note">Open a category<br />to view the edits.</p>
        </div>

        <div className="category-groups">
          {categories.map((category, index) => {
            const categoryVideos = videos.filter((video) => video.categories.includes(category.title))
            const isOpen = Boolean(openCategories[category.title])
            const contentId = `category-content-${index}`

            return (
              <section className={`category-group${isOpen ? ' is-open' : ''}`} key={category.title}>
                <button
                  className="category-toggle"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => setOpenCategories((current) => ({
                    ...current,
                    [category.title]: !current[category.title],
                  }))}
                >
                  <span className="category-number">0{index + 1}</span>
                  <span className="category-label">
                    <span className="category-title">{category.title}</span>
                    <span className="category-type">{category.type}</span>
                  </span>
                  <span className="category-action">
                    <span>{categoryVideos.length} {categoryVideos.length === 1 ? 'VIDEO' : 'VIDEOS'}</span>
                    <span className={`category-chevron${isOpen ? ' is-open' : ''}`} aria-hidden="true">+</span>
                  </span>
                </button>
                <div className="project-grid" id={contentId} hidden={!isOpen}>
                  {isOpen && categoryVideos.map((video, videoIndex) => (
                    <article className="project-card" key={video.id}>
                      <div className="project-art">
                        {video.youtubeId ? (
                          <iframe
                            className="project-video"
                            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                            title={`${video.title} video`}
                            loading="lazy"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          />
                        ) : (
                          <video
                            className="project-video"
                            src={video.videoSrc}
                            poster={category.posterSrc}
                            controls
                            playsInline
                            preload="none"
                            aria-label={`${video.title} video`}
                          />
                        )}
                      </div>
                      <div className="project-meta">
                        <span>0{videoIndex + 1}</span>
                        <h3>{video.title}</h3>
                        <span>VIDEO EDITING</span>
                      </div>
                    </article>
                  ))}
                  {categoryVideos.length === 0 && <p className="empty-category">New work in this format is coming soon.</p>}
                </div>
              </section>
            )
          })}
        </div>
      </section>

      <footer className="site-footer">
        <a className="footer-mark" href="#top">AVNEESH TRIPATHI</a>
        <p>© {new Date().getFullYear()} · VIDEO EDITOR</p>
        <div className="footer-contact">
          <a href="mailto:tavneesh04@gmail.com">TAVNEESH04@GMAIL.COM <span aria-hidden="true">↗</span></a>
          <a href="tel:+917355167784">+91 73551 67784 <span aria-hidden="true">↗</span></a>
        </div>
      </footer>
    </main>
  )
}

export default App
