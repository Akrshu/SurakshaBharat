export function meta() {
  return [
    { title: "Suraksha Bharat — Street safety, reimagined" },
    {
      name: "description",
      content: "AI-assisted street safety, starting with women. An idea-stage initiative by Arshiya Sharma.",
    },
  ];
}

const problems = [
  {
    number: "01",
    title: "The walk home can feel uncertain.",
    text: "After dark, familiar streets and campus routes can feel very different when you are navigating them alone.",
  },
  {
    number: "02",
    title: "Getting help takes coordination.",
    text: "When something feels wrong, the right people may not know what is happening soon enough to respond.",
  },
  {
    number: "03",
    title: "Safety information is fragmented.",
    text: "People and systems that could help often operate separately, leaving important context scattered.",
  },
];

const approach = [
  {
    number: "01",
    title: "Notice risk earlier",
    text: "Explore ways to recognise potential risk situations, ideally using infrastructure already in place.",
  },
  {
    number: "02",
    title: "Reach the right people",
    text: "Share an alert with the people best placed to help, with a human verifying it before any action.",
  },
  {
    number: "03",
    title: "Coordinate and learn",
    text: "Support a faster, more coordinated response—and learn from every incident to improve what comes next.",
  },
];

export default function HomeRoute() {
  return (
    <main className="suraksha-site">
      <header className="site-header">
        <a className="brand-lockup" href="#home" aria-label="Suraksha Bharat home">
          <span className="brand-mark" aria-hidden="true"><i /></span>
          <span>Suraksha <b>Bharat</b></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#approach">Our approach</a>
          <a href="#about">Where we are</a>
          <a className="nav-contact" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> A safer way forward</p>
          <h1>Safety should<br />move <em>with you.</em></h1>
          <p className="hero-tagline">AI-assisted street safety, starting with women</p>
          <p className="hero-mission">Making public spaces safer, so that no woman has to think twice before stepping out.</p>
          <a className="button-primary" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
          <p className="hero-founder">An idea by <strong>Arshiya Sharma</strong><span>·</span> Chandigarh University</p>
        </div>
        <div className="hero-art" aria-label="Abstract illustration of a connected, safer route">
          <div className="art-topline"><span>THE WAY HOME</span><span>ALWAYS IN VIEW</span></div>
          <div className="route-map">
            <div className="map-grid" />
            <svg className="route-lines" viewBox="0 0 540 450" fill="none" aria-hidden="true">
              <path d="M57 361C126 337 99 263 180 257C261 251 236 165 323 176C409 187 379 104 494 79" />
              <path className="route-glow" d="M57 361C126 337 99 263 180 257C261 251 236 165 323 176C409 187 379 104 494 79" />
              <path className="secondary-route" d="M38 156C123 185 121 116 201 104C280 92 293 132 363 103C423 78 427 42 495 37" />
              <circle cx="57" cy="361" r="8" /><circle cx="180" cy="257" r="6" /><circle cx="323" cy="176" r="6" /><circle cx="494" cy="79" r="10" />
            </svg>
            <span className="map-label label-origin">CAMPUS</span>
            <span className="map-label label-mid">YOUR ROUTE</span>
            <span className="map-label label-destination">HOME</span>
            <span className="map-ping"><i /></span>
            <div className="route-note"><span className="note-dot" /> A little more peace of mind</div>
          </div>
          <div className="art-caption"><span>01 / 04</span><span>Built around people, not just technology</span></div>
          <span className="art-stamp" aria-hidden="true">SB<br /><small>◆</small></span>
        </div>
        <div className="hero-bottom"><span>01 — A different kind of safety</span><a href="#problem">Scroll to explore <span aria-hidden="true">↓</span></a></div>
      </section>

      <section className="problem-section section-pad" id="problem">
        <div className="section-heading">
          <p className="eyebrow"><span className="eyebrow-line" /> The problem</p>
          <h2>Feeling safe shouldn’t<br /><em>be a matter of luck.</em></h2>
          <p className="section-intro">For many women, getting from one place to another can mean making a plan around uncertainty.</p>
        </div>
        <div className="problem-list">
          {problems.map((item) => (
            <article className="problem-item" key={item.number}>
              <span className="item-number">{item.number}</span>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
              <span className="item-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="approach-section section-pad" id="approach">
        <div className="approach-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> Our approach</p>
            <h2>From uncertainty<br />to <em>being prepared.</em></h2>
          </div>
          <p className="planned-label"><span /> A direction we’re exploring<br /><b>Planned, not yet built</b></p>
        </div>
        <div className="approach-grid">
          {approach.map((item) => (
            <article className="approach-card" key={item.number}>
              <span className="approach-number">{item.number}</span>
              <span className="approach-symbol" aria-hidden="true">{item.number === "01" ? "⌁" : item.number === "02" ? "↗" : "◎"}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="approach-footnote"><span>01—03</span><p>Technology can help connect the dots.<br /><strong>People stay at the centre.</strong></p></div>
      </section>

      <section className="privacy-section section-pad" id="privacy">
        <div className="privacy-symbol" aria-hidden="true"><span>◈</span><i /></div>
        <div className="privacy-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Privacy first</p>
          <h2>Trust is part of<br /><em>feeling safe.</em></h2>
        </div>
        <div className="privacy-detail">
          <p>Any approach we explore must respect the people it is designed to support.</p>
          <ul>
            <li><span>01</span> Collect only what is needed</li>
            <li><span>02</span> Make consent matter</li>
            <li><span>03</span> Handle data securely</li>
            <li><span>04</span> Keep humans in the loop</li>
          </ul>
        </div>
      </section>

      <section className="status-section section-pad" id="about">
        <div className="status-marker"><span /> Where we are</div>
        <div className="status-content">
          <p className="eyebrow"><span className="eyebrow-line" /> Early by design</p>
          <h2>Good ideas start<br />by <em>listening.</em></h2>
          <p className="status-statement">Idea stage. Validating with a campus pilot. Looking for mentors and feedback.</p>
          <p className="status-note">Currently learning through conversations with students, hostel wardens and security staff. No product has been built yet.</p>
          <div className="founder-card"><span className="founder-initial">AS</span><span><small>FOUNDER</small><strong>Arshiya Sharma</strong><small>B.Tech CSE (Cyber Security) student<br />Chandigarh University</small></span><span className="founder-star" aria-hidden="true">✳</span></div>
        </div>
        <div className="status-aside"><span className="aside-index">01</span><p>Listen closely.<br />Build thoughtfully.<br /><em>Keep people first.</em></p><span className="aside-rule" /></div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="contact-topline"><span>THE NEXT STEP</span><span>LET’S TALK</span></div>
        <div className="contact-content">
          <p className="eyebrow"><span className="eyebrow-line" /> Open conversation</p>
          <h2>Better streets<br />start with <em>a conversation.</em></h2>
          <p>Open to feedback, mentors and collaborators.</p>
          <a className="button-light" href="https://www.linkedin.com/in/arshiya-sharma-a43809325/" target="_blank" rel="noreferrer">Connect on LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
        <div className="contact-orbit" aria-hidden="true"><span /><i /><b /></div>
        <div className="contact-bottom"><span>Suraksha Bharat · A safer way forward</span><span>Idea stage</span></div>
      </section>

      <footer className="site-footer"><a className="brand-lockup" href="#home"><span className="brand-mark" aria-hidden="true"><i /></span><span>Suraksha <b>Bharat</b></span></a><span>© Suraksha Bharat. Idea stage.</span><a href="#home">Back to top ↑</a></footer>
    </main>
  );
}
