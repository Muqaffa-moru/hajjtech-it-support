import { useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, CheckCircle2, ChevronDown,
  Code2, Laptop, Menu, MessageCircle, MonitorCog, Network, ShieldCheck,
  Wrench, X, Zap, CircleHelp, Mail, MapPin, Clock3, Send, BriefcaseBusiness
} from 'lucide-react'
import { Analytics } from "@vercel/analytics/next"

const services = [
  { icon: Laptop, number: '01', title: 'Computer support', text: 'Troubleshooting, software installation, system updates and practical maintenance to keep devices working smoothly.', tags: ['Windows', 'Software', 'Maintenance'] },
  { icon: Code2, number: '02', title: 'Website development', text: 'Responsive websites for small businesses, personal brands, student portfolios and community organisations.', tags: ['React', 'Responsive design', 'Maintenance'] },
  { icon: Network, number: '03', title: 'Networking', text: 'Help diagnosing connectivity issues, setting up routers and improving everyday home or small-office networks.', tags: ['Wi-Fi', 'Routers', 'Diagnostics'] },
  { icon: ShieldCheck, number: '04', title: 'Security support', text: 'Security updates, account-protection guidance, backup practices and basic hardening for devices you own or are authorised to manage.', tags: ['Updates', 'Backups', 'Account security'] },
]

const projects = [
  { type: 'WEB APPLICATION', title: 'CampusPulse', description: 'A campus event discovery and management concept designed to help students find activities and organisers share event information.', stack: ['React Native', 'Expo', 'JavaScript'], status: 'IN DEVELOPMENT', icon: BriefcaseBusiness },
  { type: 'DESKTOP APPLICATION', title: 'Student Budget Tracker', description: 'A budgeting system concept for recording income and expenses, reviewing spending categories and understanding monthly trends.', stack: ['Python', 'MySQL', 'UI design'], status: 'PROJECT WORK', icon: MonitorCog },
  { type: 'IT SUPPORT LAB', title: 'Troubleshooting Lab', description: 'A documented learning lab covering command-line diagnostics, ports, service checks and safe testing in a controlled environment.', stack: ['Linux', 'Networking', 'Documentation'], status: 'LEARNING LAB', icon: Wrench },
]

function SectionHeading({ eyebrow, title, description, light = false }) {
  return <div className={`section-heading ${light ? 'light' : ''}`}>
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {description && <p className="section-description">{description}</p>}
  </div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', service: 'Computer support', urgency: 'Normal', details: '' })
  const [formMessage, setFormMessage] = useState('')
  const [copied, setCopied] = useState(false)

  const goTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const updateForm = (event) => setForm({ ...form, [event.target.name]: event.target.value })

  const submitRequest = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`HajjTech support request: ${form.service}`)
    const body = encodeURIComponent(
      `Hello HajjTech,\n\nI would like to request IT support.\n\nName: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\nUrgency: ${form.urgency}\n\nProblem details:\n${form.details}\n\nPlease contact me about the next steps.`
    )
    setFormMessage('Your request is ready in an email draft. Please send it from your email app to complete the request.')
    window.location.href = `support@hajjtech.com?subject=${subject}&body=${body}`
  }

  const copyProjectNote = async () => {
    const text = 'HajjTech IT Support — Portfolio project. Replace this note with a concise description of the work, your role, technologies used, screenshots and verified outcomes.'
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return <div className="site-shell">
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="#home" className="brand" aria-label="HajjTech home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark"><MonitorCog size={23} /></span>
          <span className="brand-copy"><strong>HajjTech</strong><small>IT SUPPORT & DIGITAL SOLUTIONS</small></span>
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <button onClick={() => window.location.href = '/contribute.html'}> Contribute</button>
          <button onClick={() => goTo('services')}>Services</button>
          <button onClick={() => goTo('work')}>Portfolio</button>
          <button onClick={() => goTo('about')}>About</button>
          <button onClick={() => goTo('contact')}>Contact</button>
          <button className="nav-cta" onClick={() => goTo('request')}>Request support <ArrowUpRight size={16} /></button>
        </nav>
      </div>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot"></span> PRACTICAL IT SUPPORT. HUMAN APPROACH.</div>
            <h1>Technology should work <span>for you.</span></h1>
            <p className="hero-lead">Reliable IT support and digital solutions for individuals, students and growing businesses. Clear advice, thoughtful fixes and technology built around your needs.</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => goTo('request')}>Tell us what you need <ArrowUpRight size={18} /></button>
              <button className="button button-quiet" onClick={() => goTo('work')}>Explore portfolio <ArrowDownRight size={18} /></button>
            </div>
            <div className="hero-trust">
              <div className="trust-icon"><CheckCircle2 size={18} /></div>
              <p><strong>Clear communication</strong><span>Understand the issue and the next step.</span></p>
              <div className="trust-divider"></div>
              <div className="trust-icon"><Zap size={18} /></div>
              <p><strong>Practical solutions</strong><span>Support that fits the actual problem.</span></p>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-glow"></div>
            <div className="dashboard-window">
              <div className="window-bar"><div className="window-dots"><i></i><i></i><i></i></div><span>HAJJTECH / SUPPORT DESK</span><span className="window-live">● ONLINE</span></div>
              <div className="dashboard-body">
                <div className="dash-intro"><div><span className="dash-kicker">YOUR TECH, UNDER CONTROL</span><h3>How can we help?</h3></div><div className="dash-avatar"><MonitorCog size={22} /></div></div>
                <div className="dash-search"><CircleHelp size={17} /><span>Describe a technical issue...</span><ArrowRight size={16} /></div>
                <div className="dash-label">SUPPORT CATEGORIES</div>
                <div className="dash-categories">
                  <div><span className="category-icon cyan"><Laptop size={19}/></span><b>Computer</b><small>Devices & software</small></div>
                  <div><span className="category-icon violet"><Code2 size={19}/></span><b>Websites</b><small>Design & development</small></div>
                  <div><span className="category-icon green"><Network size={19}/></span><b>Networking</b><small>Connection & setup</small></div>
                  <div><span className="category-icon amber"><ShieldCheck size={19}/></span><b>Security</b><small>Safer systems</small></div>
                </div>
                <div className="dash-note"><span className="note-check"><CheckCircle2 size={17}/></span><div><b>One step at a time</b><small>We explain the fix, not just the fault.</small></div><ArrowUpRight size={17} /></div>
              </div>
            </div>
            <div className="floating-card float-top"><span className="float-icon"><CheckCircle2 size={18}/></span><div><b>Solution-focused</b><small>Support with clarity</small></div></div>
            <div className="floating-card float-bottom"><span className="float-icon purple"><Code2 size={18}/></span><div><b>Digital projects</b><small>Design. Build. Improve.</small></div></div>
          </div>
        </div>
        <div className="container hero-bottom">
          <span>BUILT FOR REAL-WORLD NEEDS</span><div><span>COMPUTER SUPPORT</span><i></i><span>WEB DEVELOPMENT</span><i></i><span>NETWORKING</span><i></i><span>SECURITY GUIDANCE</span></div></div>
      </section>

      <section id="services" className="section services-section">
        <div className="container">
          <SectionHeading eyebrow="WHAT WE CAN HELP WITH" title={<>Technology challenges, <span>made manageable.</span></>} description="From fixing everyday computer issues to building your online presence, start with the problem and find a practical way forward." />
          <div className="service-grid">
            {services.map(({ icon: Icon, number, title, text, tags }) => <article className="service-card" key={number}>
              <div className="service-top"><span className="service-icon"><Icon size={22}/></span><span className="service-number">{number}</span></div>
              <h3>{title}</h3><p>{text}</p>
              <div className="tag-row">{tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <button className="text-link" onClick={() => { setForm({ ...form, service: title }); goTo('request') }}>Request this service <ArrowUpRight size={16}/></button>
            </article>)}
          </div>
          <div className="service-footnote"><ShieldCheck size={18}/><p>We only perform work you have authorised. Scope, price and timing are agreed before paid work begins.</p></div>
        </div>
      </section>

      <section id="work" className="section portfolio-section">
        <div className="container">
          <div className="portfolio-heading"><SectionHeading eyebrow="SELECTED WORK & LEARNING" title={<>Projects that show <span>how I think.</span></>} description="A growing collection of application work, IT practice and problem-solving. Project status is shown honestly."/><button className="button button-outline" onClick={copyProjectNote}>{copied ? 'Copied project note' : 'Portfolio checklist'} <ArrowUpRight size={17}/></button></div>
          <div className="project-grid">
            {projects.map(({ type, title, description, stack, status, icon: Icon }, i) => <article className="project-card" key={title}>
              <div className={`project-art art-${i + 1}`}>
                <div className="project-art-top"><span>{type}</span><span className="project-art-icon"><Icon size={19}/></span></div>
                {i === 0 ? <div className="mini-event-ui"><div className="mini-ui-header"><span></span><span></span><span></span></div><div className="mini-ui-content"><div className="mini-banner"></div><div className="mini-lines"><i></i><i></i><i></i></div><div className="mini-blocks"><i></i><i></i><i></i></div></div></div> : i === 1 ? <div className="mini-budget-ui"><div className="budget-total"><small>MONTHLY OVERVIEW</small><b>Budget dashboard</b><span>Income · Expenses · Summary</span></div><div className="budget-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div> : <div className="mini-terminal"><span>$ ip addr</span><span className="term-muted">Network interfaces</span><span>$ nmap -sV localhost</span><span className="term-green">PORT     STATE  SERVICE</span><span>22/tcp   open   ssh</span><span>80/tcp   open   http</span><span className="term-muted"># authorised lab only</span></div>}
              </div>
              <div className="project-content"><div className="project-status"><span>{status}</span><span>0{i + 1} / 03</span></div><h3>{title}</h3><p>{description}</p><div className="project-stack">{stack.map(s => <span key={s}>{s}</span>)}</div><button className="text-link" onClick={() => goTo('contact')}>Discuss a similar project <ArrowUpRight size={16}/></button></div>
            </article>)}
          </div>
          <p className="portfolio-note"><CircleHelp size={16}/> These are portfolio summaries, not claims of client work or completed production deployments. Add screenshots, repository links and verified results as each project progresses.</p>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="container about-layout">
          <div className="about-visual">
            <div className="about-code">
              <div className="code-title"><span></span><span></span><span></span><b>approach.js</b></div>
              <pre><code><span className="code-purple">const</span> approach = {'{'}{'\n'}  listen: <span className="code-green">"understand"</span>,{'\n'}  analyse: <span className="code-green">"find the cause"</span>,{'\n'}  solve: <span className="code-green">"fix with care"</span>,{'\n'}  explain: <span className="code-green">"keep it clear"</span>{'\n'}{'}'};</code></pre>
              <div className="code-footer"><CheckCircle2 size={15}/> A thoughtful process for every problem</div>
            </div>
            <div className="about-badge"><span><Wrench size={19}/></span><div><b>Learn. Solve. Improve.</b><small>One issue at a time.</small></div></div>
          </div>
          <div className="about-copy"><p className="eyebrow">ABOUT HAJJTECH</p><h2>Good IT support starts with <span>listening.</span></h2><p>HajjTech is a growing IT support and digital-solutions brand focused on making technology easier to use. The approach is straightforward: understand the problem, explain the options, and work towards a reliable solution.</p><p>This website is also a living portfolio: a place to document technical projects, show practical skills and demonstrate a commitment to continuous learning.</p>
            <div className="principles"><div><CheckCircle2 size={18}/><span><b>Transparent communication</b><small>Clear scope, expectations and next steps.</small></span></div><div><CheckCircle2 size={18}/><span><b>Responsible practice</b><small>Authorised access and respect for privacy.</small></span></div><div><CheckCircle2 size={18}/><span><b>Continuous improvement</b><small>Documenting lessons and improving solutions.</small></span></div></div>
            <button className="button button-primary" onClick={() => goTo('contact')}>Let's talk about your needs <ArrowUpRight size={18}/></button>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <SectionHeading eyebrow="HOW IT WORKS" title={<>Simple steps. <span>No guesswork.</span></>} description="A straightforward process keeps support requests clear and expectations realistic."/>
          <div className="process-grid">
            {[['01','Tell us the problem','Share what is happening, your device or system, and what you have already tried.'],['02','Agree on a plan','We clarify the scope, possible next steps, timing and any fee before starting paid work.'],['03','Resolve & explain','Work through the agreed solution and explain what changed and any recommended follow-up.']].map(([n,title,desc]) => <div className="process-step" key={n}><span className="process-number">{n}</span><h3>{title}</h3><p>{desc}</p></div>)}
          </div>
        </div>
      </section>

      <section id="request" className="section request-section">
        <div className="container request-layout">
          <div className="request-copy"><p className="eyebrow">REQUEST IT SUPPORT</p><h2>Tell us what's <span>not working.</span></h2><p>Give us a few details and we can work out the next step. Please don't include passwords, recovery codes or other secrets in your description.</p>
            <div className="request-points"><div><span><MessageCircle size={19}/></span><div><b>Start with the details</b><small>Describe the issue in your own words.</small></div></div><div><span><Clock3 size={19}/></span><div><b>Set expectations</b><small>We will agree on timing and scope before work starts.</small></div></div><div><span><Mail size={19}/></span><div><b>Use your email app</b><small>This starter form prepares a draft; it does not store or send requests to a server.</small></div></div></div>
          </div>
          <form className="request-form" onSubmit={submitRequest}>
            <div className="form-heading"><div><span className="form-icon"><Send size={19}/></span><h3>Support request</h3></div><span className="required-note">* Required</span></div>
            <div className="form-row"><label>Your name *<input name="name" value={form.name} onChange={updateForm} required placeholder="e.g. Ama Mensah"/></label><label>Email address *<input type="email" name="email" value={form.email} onChange={updateForm} required placeholder="you@example.com"/></label></div>
            <label>What do you need help with? *<span className="select-wrap"><select name="service" value={form.service} onChange={updateForm} required>{['Computer support','Website development','Networking','Security support','Other IT issue'].map(x => <option key={x}>{x}</option>)}</select><ChevronDown size={17}/></span></label>
            <label>How urgent is it?<span className="select-wrap"><select name="urgency" value={form.urgency} onChange={updateForm}>{['Normal','Time-sensitive','Business-critical'].map(x => <option key={x}>{x}</option>)}</select><ChevronDown size={17}/></span></label>
            <label>Describe the issue *<textarea name="details" value={form.details} onChange={updateForm} required rows="4" placeholder="What is happening? Which device or software is involved? What have you tried?"/></label>
            <button type="submit" className="button button-primary form-submit">Prepare email request <ArrowUpRight size={18}/></button>
            {formMessage && <p className="form-message" role="status">{formMessage}</p>}
            <p className="privacy-note"><ShieldCheck size={15}/> Don't submit passwords or sensitive account information.</p>
          </form>
        </div>
      </section>

      <section id="contact" className="contact-strip"><div className="container contact-inner"><div><p className="eyebrow">HAVE A PROJECT IN MIND?</p><h2>Let's make technology <span>work better.</span></h2><p>Describe your challenge and start a conversation about the right next step.</p></div><button className="button button-light" onClick={() => goTo('request')}>Get in touch <ArrowUpRight size={18}/></button></div></section>
    </main>
    <Analytics />
    <footer className="site-footer">
      <div className="container footer-main">
        <a href="#home" className="brand footer-brand">
          <span className="brand-mark"><MonitorCog size={22}/></span>
          <span className="brand-copy"><strong>HajjTech</strong><small>IT SUPPORT & DIGITAL SOLUTIONS</small></span>
        </a><p>Practical support. Thoughtful solutions. Technology made more manageable.</p>
          <div className="footer-links">
            <button onClick={() => goTo('services')}>Services</button>
            <button onClick={() => goTo('work')}>Portfolio</button>
            <button onClick={() => goTo('about')}>About</button>
            <button onClick={() => goTo('request')}>Request support</button>
          </div>
      </div>
          <div className="container footer-bottom">
            <span>© {new Date().getFullYear()} HajjTech IT Support. All rights reserved.</span>
            <span><MapPin size={14}/> Ghana · Remote support by arrangement</span>
         </div>
      </footer>
  </div>
}

export default App
