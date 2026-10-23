import { useState } from 'react'

const categories = [
  { title: 'Real Estate', type: 'PROPERTY FILMS', tone: 'amber', posterSrc: '/images/real-estate.svg' },
  { title: 'Talking Head', type: 'INTERVIEWS & CREATOR CONTENT', tone: 'blue', posterSrc: '/images/talking-head.svg' },
  { title: 'Short Form', type: 'REELS & SOCIAL', tone: 'rose', posterSrc: '/images/short-form.svg' },
  { title: 'Long Form', type: 'YOUTUBE & STORIES', tone: 'olive', posterSrc: '/images/long-form.svg' },
]

const videos = [
  { id: 'trial-raw-j32-11', title: 'Trial raw J32_11', youtubeId: 'Zc34oq41Dn4', categories: ['Real Estate', 'Long Form'] },
  { id: 'perla-revised', title: 'Perla revised', videoSrc: '/videos/perla-revised.mp4', categories: ['Real Estate', 'Talking Head', 'Short Form'] },
]

function App() {
  const [openCategories, setOpenCategories] = useState({})

  return (
    <main className="min-h-screen bg-[#10110f] text-[#f2f0e9]">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Home">
          AVNEESH TRIPATHI
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
          <a className="contact-link" href="https://wa.me/917355167784" target="_blank" rel="noreferrer">
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS</p>
          <h1>Stories shaped<br /><em>with purpose.</em></h1>
          <div className="hero-foot">
            <p>Video editor creating polished, engaging content for brands, creators, and businesses.</p>
            <a href="#work" className="scroll-link">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract cinematic still placeholder" role="img">
          <div className="art-sun" />
          <div className="art-horizon" />
          <span className="art-caption">FRAME 001 — YOUR STORY STARTS HERE</span>
          <span className="art-index">01 / 03</span>
        </div>
        <span className="hero-side-note">CUT WITH INTENTION · BASED ANYWHERE</span>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">FOUR FORMATS, ONE EDITORIAL EYE</p>
            <h2>Work by category<span className="accent">.</span></h2>
          </div>
          <p className="section-note">A selection of stories, shaped<br />one frame at a time.</p>
        </div>

        <div className="category-groups">
          {categories.map((category, index) => {
            const categoryVideos = videos.filter((video) => video.categories.includes(category.title))
            const isOpen = Boolean(openCategories[category.title])
            const contentId = `category-content-${index}`

            return (
              <section className="category-group" key={category.title}>
                <div className="category-heading">
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
                    <span className="category-label">
                      <span className="category-title">{category.title}</span>
                      <span className="category-type">{category.type}</span>
                    </span>
                    <span className="category-action">
                      <span>{categoryVideos.length} {categoryVideos.length === 1 ? 'VIDEO' : 'VIDEOS'}</span>
                      <span className={`category-chevron${isOpen ? ' is-open' : ''}`} aria-hidden="true">⌄</span>
                    </span>
                  </button>
                </div>
                <div className="project-grid" id={contentId} hidden={!isOpen}>
                  {isOpen && categoryVideos.map((video) => (
                    <article className="project-card" key={video.id}>
                      <div className={`project-art ${category.tone}`}>
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
                        <h4>{video.title}</h4>
                        <span>EDITED VIDEO</span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </section>

      <section className="about-section" id="about">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <div className="about-copy">
          <h2>Thoughtful edits.<br />Clear storytelling.</h2>
          <div>
            <p>I’m Avneesh Tripathi, a video editor working across real estate, talking-head, short-form, and long-form content. I focus on clear storytelling, thoughtful pacing, and edits tailored to each project.</p>
            <p className="tools-line"><span>TOOLS</span>Adobe Premiere Pro · Adobe After Effects</p>
            <a className="text-link" href="https://wa.me/917355167784" target="_blank" rel="noreferrer">LET’S MAKE SOMETHING <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="#top">AVNEESH TRIPATHI</a>
        <p>© {new Date().getFullYear()} · AVNEESH TRIPATHI</p>
        <div className="footer-contact">
          <a href="mailto:tavneesh04@gmail.com">TAVNEESH04@GMAIL.COM <span aria-hidden="true">↗</span></a>
          <a href="tel:+917355167784">+91 73551 67784 <span aria-hidden="true">↗</span></a>
        </div>
      </footer>
    </main>
  )
}

export default App
