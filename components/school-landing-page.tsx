import Image from 'next/image'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Heart,
  MapPin,
  Users,
} from 'lucide-react'

const crestUrl =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/maranatha%20school%20badge-SgSHbtwIDX4t5xbJ6YL47WcgZKmemO.jpg'

const directionsUrl =
  'https://www.google.com/maps/search/?api=1&query=Maranatha+Seventh-Day+Adventist+Church%2C+Lumley%2C+Freetown%2C+Sierra+Leone'

const learningPillars = [
  {
    number: '01',
    title: 'A curious mind',
    description:
      'We believe learning grows through curiosity, thoughtful guidance, and a lasting love of discovery.',
    Icon: BookOpen,
  },
  {
    number: '02',
    title: 'Character with purpose',
    description:
      'Kindness, integrity, responsibility, and confidence are part of the foundation we hope to build.',
    Icon: Heart,
  },
  {
    number: '03',
    title: 'Faith in action',
    description:
      'Guided by Adventist values, we aim to connect learning with compassion, service, and hope.',
    Icon: Users,
  },
]

const communityGatherings = [
  {
    number: '01',
    title: 'Community gatherings',
    description: 'Local community and church-related events bring people together.',
    Icon: Users,
  },
  {
    number: '02',
    title: 'Youth and women’s ministries',
    description: 'Ministries create space for connection, service, and shared growth.',
    Icon: Heart,
  },
  {
    number: '03',
    title: 'Regional training',
    description: 'The premises also host regional training programs and gatherings.',
    Icon: BookOpen,
  },
]

function SchoolHeader() {
  return (
    <header className="school-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="header-inner">
        <a className="school-brand" href="#home" aria-label="Maranatha Adventist International School home">
          <span className="brand-crest">
            <Image src={crestUrl} alt="" width={96} height={100} unoptimized />
          </span>
          <span className="brand-copy">
            <span className="brand-name">Maranatha</span>
            <span className="brand-subtitle">Adventist International School</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#approach">Our approach</a>
          <a href="#community">Community</a>
          <a href="#visit">Find us</a>
          <a className="header-cta" href="#visit">
            Plan a visit <ArrowUpRight aria-hidden="true" />
          </a>
        </nav>

        <details className="mobile-menu">
          <summary aria-controls="mobile-navigation">
            <span>Menu</span>
            <span className="menu-icon" aria-hidden="true">
              <span />
              <span />
            </span>
          </summary>
          <nav id="mobile-navigation" className="mobile-panel" aria-label="Mobile navigation">
            <a href="#approach">Our approach</a>
            <a href="#community">Community</a>
            <a href="#visit">Find us</a>
            <a className="mobile-cta" href="#visit">
              Plan a visit <ArrowUpRight aria-hidden="true" />
            </a>
          </nav>
        </details>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-inner page-width">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            A new chapter in learning · Lumley, Freetown
          </p>
          <h1 id="hero-title">
            Nurturing minds.
            <span>
              Shaping the <em>future.</em>
            </span>
          </h1>
          <p className="hero-description">
            A learning community where every learner is encouraged to grow in knowledge,
            character, and purpose.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#approach">
              Discover our approach <ArrowRight aria-hidden="true" />
            </a>
            <a className="text-link" href="#visit">
              Find us in Lumley <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="hero-footnote">
            <span className="founding-mark">26</span>
            <span>
              <strong>Founded 2026</strong>
              <span>Rooted in the Maranatha SDA community</span>
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="crest-frame">
            <Image
              src="/maranatha-badge.png"
              alt="Maranatha Adventist International School crest, founded 2026, with a book, a brain held in caring hands, a graduation cap, and a pen."
              width={944}
              height={982}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ApproachSection() {
  return (
    <section className="approach-section section-padding" id="approach" aria-labelledby="approach-title">
      <div className="page-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow section-eyebrow">The Maranatha approach</p>
            <h2 id="approach-title">
              Education for the <em>whole person.</em>
            </h2>
          </div>
          <p className="section-intro">
            Inspired by the Adventist tradition, our vision is to nurture minds, shape
            character, and help young people discover a life of meaning and service.
          </p>
        </div>

        <div className="pillar-grid">
          {learningPillars.map(({ number, title, description, Icon }) => (
            <article className="pillar-card" key={number}>
              <div className="pillar-card-top">
                <span className="pillar-icon"><Icon aria-hidden="true" /></span>
                <span className="pillar-number">{number}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="pillar-rule" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CommunitySection() {
  return (
    <section className="community-section section-padding" id="community" aria-labelledby="community-title">
      <div className="community-inner page-width">
        <div className="community-copy">
          <p className="eyebrow community-eyebrow">Beyond the classroom</p>
          <h2 id="community-title">
            A place to learn.<br />
            <em>A community to belong to.</em>
          </h2>
          <p>
            The Maranatha SDA Church and its premises are also a gathering place for
            local community and church-related events, youth and women&apos;s ministries,
            and regional training programs.
          </p>
          <a className="community-link" href="#visit">
            Explore our community <ArrowRight aria-hidden="true" />
          </a>
        </div>

        <div className="community-list">
          {communityGatherings.map(({ number, title, description, Icon }) => (
            <article className="community-item" key={number}>
              <span className="community-number">{number}</span>
              <div className="community-item-copy">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              <Icon className="community-icon" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function VisitSection() {
  return (
    <section className="visit-section section-padding" id="visit" aria-labelledby="visit-title">
      <div className="visit-inner page-width">
        <div className="visit-copy">
          <p className="eyebrow section-eyebrow">Come find us</p>
          <h2 id="visit-title">
            Rooted in Lumley.<br />
            <em>Open to possibility.</em>
          </h2>
          <p>
            Find Maranatha Adventist International School in the Lumley community of
            Freetown, Sierra Leone.
          </p>
          <a className="button button-dark" href={directionsUrl} target="_blank" rel="noreferrer">
            Open directions <ArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="visit-details">
          <article className="address-card">
            <div className="address-card-heading">
              <span className="address-icon"><MapPin aria-hidden="true" /></span>
              <span className="address-label">Visit the school</span>
            </div>
            <h3>Our Lumley location</h3>
            <address>
              Off Freetown Road, behind the Lumley Police Station,<br />
              Lumley, Freetown, Sierra Leone
            </address>
            <span className="address-divider" aria-hidden="true" />
            <p className="landmark-note">The Lumley Police Station is a nearby landmark.</p>
          </article>

          <article className="mailing-card">
            <span className="mailing-label">Mailing address</span>
            <p>
              P.O. Box 294,<br />
              c/o SDA Mission,<br />
              Freetown, Sierra Leone
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

function SchoolFooter() {
  return (
    <footer className="school-footer">
      <div className="footer-inner page-width">
        <a className="footer-brand" href="#home">
          <span className="footer-brand-name">Maranatha</span>
          <span>Adventist International School</span>
        </a>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#approach">Our approach</a>
          <a href="#community">Community</a>
          <a href="#visit">Find us</a>
        </nav>
        <p className="footer-location">Lumley · Freetown · Sierra Leone</p>
      </div>
    </footer>
  )
}

export function SchoolLandingPage() {
  return (
    <div className="school-page">
      <SchoolHeader />
      <main id="main-content">
        <HeroSection />
        <ApproachSection />
        <CommunitySection />
        <VisitSection />
      </main>
      <SchoolFooter />
    </div>
  )
}
