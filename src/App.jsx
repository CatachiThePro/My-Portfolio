import { useState } from 'react'

const categories = [
  { title: 'Real Estate', type: 'PROPERTY FILMS', posterSrc: '/images/real-estate.svg' },
  { title: 'Talking Head', type: 'INTERVIEWS & CREATOR CONTENT', posterSrc: '/images/talking-head.svg' },
  { title: 'Short Form', type: 'REELS & SOCIAL', posterSrc: '/images/short-form.svg' },
  { title: 'Long Form', type: 'YOUTUBE & STORIES', posterSrc: '/images/long-form.svg' },
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
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a className="contact-link" href="https://wa.me/917355167784" target="_blank" rel="noreferrer">Contact <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-label hero-label-left">VIDEO EDITOR</div>
        <div className="hero-label hero-label-right">2026</div>
        <h1 id="hero-title">PORTFOLIO</h1>
        <img
          className="hero-portrait"
          src="/images/portfolio-portrait.png"
          alt="Original anonymous line-art portrait illustration"
        />
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

      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 — SELECTED PROJECTS</p>
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

      <section className="about-section" id="about">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 — ABOUT</p>
            <h2>About me</h2>
          </div>
          <span className="about-symbol" aria-hidden="true">✳</span>
        </div>
        <div className="about-copy">
          <h3>Thoughtful edits.<br />Clear storytelling.</h3>
          <div className="about-details">
            <p>I’m Avneesh Tripathi, a video editor working across real estate, talking-head, short-form, and long-form content. I focus on clear storytelling, thoughtful pacing, and edits tailored to each project.</p>
            <div className="tools-line"><span>TOOLS</span><p>Adobe Premiere Pro <i>✳</i> Adobe After Effects</p></div>
            <a className="text-link" href="https://wa.me/917355167784" target="_blank" rel="noreferrer">LET’S WORK TOGETHER <span aria-hidden="true">↗</span></a>
          </div>
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
