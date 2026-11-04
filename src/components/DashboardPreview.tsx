
'use client'

import { useEffect, useState } from 'react'

type Period = '7D' | '30D' | '90D'

const analytics = {
  '7D': {
    revenue: '$18,420',
    leads: '1,284',
    conversions: '8.6%',
    growth: '+18.4%',
    bars: [32, 48, 38, 65, 52, 78, 92],
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  '30D': {
    revenue: '$84,620',
    leads: '5,842',
    conversions: '9.2%',
    growth: '+24.8%',
    bars: [35, 48, 42, 65, 54, 75, 95],
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'],
  },
  '90D': {
    revenue: '$246,800',
    leads: '18,420',
    conversions: '10.4%',
    growth: '+32.6%',
    bars: [22, 35, 30, 52, 48, 76, 98],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  },
}

const notifications = [
  {
    title: 'New customer acquired',
    detail: 'AI converted a qualified lead into a customer.',
    amount: '+$1,250',
  },
  {
    title: 'AI closed a new deal',
    detail: 'Automated sales follow-up completed successfully.',
    amount: '+$2,400',
  },
  {
    title: 'New lead generated',
    detail: 'Website visitor submitted a contact form.',
    amount: '+1 qualified lead',
  },
]

const workflows = [
  {
    number: '01',
    icon: '◎',
    title: 'Website attracts visitors',
    description:
      'A professional website showcases services, builds trust and attracts potential customers.',
    result: 'More website traffic',
  },
  {
    number: '02',
    icon: '◈',
    title: 'AI captures leads',
    description:
      'Smart forms and AI chatbots collect customer details and understand their requirements.',
    result: 'Qualified prospects',
  },
  {
    number: '03',
    icon: '✳',
    title: 'AI converts customers',
    description:
      'Automated conversations, follow-ups and sales assistance help turn prospects into buyers.',
    result: 'More conversions',
  },
  {
    number: '04',
    icon: '$',
    title: 'Business generates revenue',
    description:
      'Companies earn through product sales, services, subscriptions and recurring customers.',
    result: 'Business revenue',
  },
]

export default function DashboardPreview() {
  const [period, setPeriod] = useState<Period>('30D')
  const [showModal, setShowModal] = useState(false)
  const [notice, setNotice] = useState(0)
  const [showNotice, setShowNotice] = useState(false)

  const data = analytics[period]
  const activeNotice = notifications[notice]

  useEffect(() => {
    const initial = setTimeout(() => setShowNotice(true), 1800)

    const timer = setInterval(() => {
      setShowNotice(false)

      setTimeout(() => {
        setNotice((previous) => (previous + 1) % notifications.length)
        setShowNotice(true)
      }, 450)
    }, 5500)

    return () => {
      clearTimeout(initial)
      clearInterval(timer)
    }
  }, [])

  return (
    <section className="md-preview" aria-label="AI business revenue dashboard">

      <div className="md-glow md-glow-one" />
      <div className="md-glow md-glow-two" />

      {/* Dashboard header */}

      <div className="md-heading">
        <div>
          <span className="md-eyebrow">
            <i className="md-live-dot" />
            THE AI BUSINESS ECOSYSTEM
          </span>

          <h2>
            Turn technology into
            <span> business growth.</span>
          </h2>

          <p>
            See how websites, AI automation and intelligent sales systems
            help businesses attract customers and generate revenue.
          </p>
        </div>

        <div className="md-status">
          <i />
          AI SYSTEM ACTIVE
        </div>
      </div>

      {/* Main dashboard */}

      <div className="md-dashboard">

        <div className="md-topbar">
          <div className="md-brand">
            <div className="md-brand-icon">M</div>
            <div>
              <strong>MineDev</strong>
              <small>Business Intelligence</small>
            </div>
          </div>

          <div className="md-top-actions">
            <span className="md-online">
              <i /> Live dashboard
            </span>
            <span className="md-avatar">MD</span>
          </div>
        </div>

        <div className="md-dashboard-body">

          {/* Sidebar */}

          <aside className="md-sidebar">
            <small>WORKSPACE</small>
            <div className="md-nav active"><span>◫</span> Overview</div>
            <div className="md-nav"><span>↗</span> Revenue</div>
            <div className="md-nav"><span>◎</span> AI Automation</div>
            <div className="md-nav"><span>◈</span> Customers</div>
            <div className="md-nav"><span>▤</span> Analytics</div>

            <div className="md-sidebar-bottom">
              <div className="md-ai-mini">
                <span>✳</span>
                <strong>AI Assistant</strong>
                <small>Working automatically</small>
                <i />
              </div>
            </div>
          </aside>

          {/* Dashboard content */}

          <main className="md-main">

            <div className="md-main-heading">
              <div>
                <span className="md-muted">OVERVIEW / BUSINESS</span>
                <h3>Revenue overview</h3>
                <p>Track your business performance in real time.</p>
              </div>

              <div className="md-periods">
                {(['7D', '30D', '90D'] as Period[]).map((item) => (
                  <button
                    key={item}
                    onClick={() => setPeriod(item)}
                    className={period === item ? 'selected' : ''}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* KPI cards */}

            <div className="md-stats">

              <div className="md-stat">
                <div className="md-stat-top">
                  <span>Total revenue</span>
                  <i>↗</i>
                </div>
                <strong>{data.revenue}</strong>
                <small><b>{data.growth}</b> compared to previous period</small>
              </div>

              <div className="md-stat">
                <div className="md-stat-top">
                  <span>Qualified leads</span>
                  <i>◎</i>
                </div>
                <strong>{data.leads}</strong>
                <small><b>+16.2%</b> new opportunities</small>
              </div>

              <div className="md-stat">
                <div className="md-stat-top">
                  <span>Conversion rate</span>
                  <i>⌁</i>
                </div>
                <strong>{data.conversions}</strong>
                <small><b>+4.8%</b> sales efficiency</small>
              </div>

            </div>

            {/* Analytics graph */}

            <div className="md-analytics">

              <div className="md-analytics-heading">
                <div>
                  <h4>Revenue performance</h4>
                  <p>Illustrative business revenue analytics</p>
                </div>

                <span className="md-chart-label">
                  <i /> Revenue growth
                </span>
              </div>

              <div className="md-chart">
                <div className="md-chart-grid">
                  <span>$25k</span>
                  <span>$20k</span>
                  <span>$15k</span>
                  <span>$10k</span>
                  <span>$5k</span>
                </div>

                <div className="md-bars">
                  {data.bars.map((height, index) => (
                    <div className="md-bar-column" key={`${period}-${index}`}>
                      <div className="md-bar-track">
                        <div
                          className="md-bar"
                          style={{ '--bar-height': `${height}%` } as React.CSSProperties}
                        >
                          <span className="md-bar-tooltip">
                            {height}%
                          </span>
                        </div>
                      </div>
                      <small>{data.labels[index]}</small>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Revenue sources */}

            <div className="md-bottom-grid">

              <div className="md-revenue-box">
                <h4>Where does the money come from?</h4>
                <p>Different ways businesses monetize technology.</p>

                <div className="md-source">
                  <span className="md-source-icon purple">W</span>
                  <div>
                    <strong>Website & eCommerce</strong>
                    <small>Product sales and online services</small>
                  </div>
                  <b>Sales</b>
                </div>

                <div className="md-source">
                  <span className="md-source-icon green">AI</span>
                  <div>
                    <strong>AI automation</strong>
                    <small>Automated sales and business operations</small>
                  </div>
                  <b>Efficiency</b>
                </div>

                <div className="md-source">
                  <span className="md-source-icon blue">↻</span>
                  <div>
                    <strong>SaaS subscriptions</strong>
                    <small>Monthly and yearly recurring payments</small>
                  </div>
                  <b>Recurring</b>
                </div>
              </div>

              <div className="md-ai-box">
                <div className="md-ai-box-top">
                  <span>✳</span>
                  <span className="md-ai-live">● ACTIVE</span>
                </div>

                <h4>Your AI sales agent</h4>
                <p>
                  An intelligent assistant that works around the clock
                  to support your business.
                </p>

                <div className="md-ai-tasks">
                  <span>✓ Responds to customer inquiries</span>
                  <span>✓ Qualifies potential leads</span>
                  <span>✓ Automates follow-ups</span>
                  <span>✓ Supports sales operations</span>
                </div>

                <button onClick={() => setShowModal(true)}>
                  Explore AI workflow <span>↗</span>
                </button>
              </div>

            </div>

          </main>
        </div>

        <div className="md-demo-note">
          <span>ⓘ</span>
          Interactive concept preview · All analytics figures are illustrative.
        </div>

      </div>

      {/* Floating notification */}

      <div className={`md-notification ${showNotice ? 'visible' : ''}`}>
        <div className="md-notice-icon">↗</div>
        <div>
          <strong>{activeNotice.title}</strong>
          <p>{activeNotice.detail}</p>
          <small>{activeNotice.amount}</small>
        </div>
        <span className="md-notice-dot" />
      </div>

      {/* How money is generated */}

      <div className="md-business-model">

        <div className="md-section-heading">
          <span className="md-eyebrow">THE REVENUE ENGINE</span>
          <h3>From website visitor to paying customer.</h3>
          <p>
            This is how technology creates measurable business value.
          </p>
        </div>

        <div className="md-workflow">
          {workflows.map((step, index) => (
            <div className="md-workflow-step" key={step.number}>
              <div className="md-workflow-icon">
                {step.icon}
                <small>{step.number}</small>
              </div>

              <h4>{step.title}</h4>
              <p>{step.description}</p>

              <div className="md-result">
                <span>✓</span> {step.result}
              </div>

              {index !== workflows.length - 1 && (
                <div className="md-workflow-arrow">→</div>
              )}
            </div>
          ))}
        </div>

        <div className="md-business-cta">
          <div>
            <span className="md-eyebrow">BUSINESS GROWTH WITH AI</span>
            <h3>Build smarter. Automate more. Grow faster.</h3>
            <p>
              Discover how websites and AI solutions can transform
              everyday business operations.
            </p>
          </div>

          <button onClick={() => setShowModal(true)}>
            See how it works <span>↗</span>
          </button>
        </div>

      </div>

      {/* Interactive popup modal */}

      {showModal && (
        <div
          className="md-modal-overlay"
          onClick={() => setShowModal(false)}
        >
          <div
            className="md-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="md-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="md-modal-close"
              onClick={() => setShowModal(false)}
              aria-label="Close popup"
            >
              ×
            </button>

            <div className="md-modal-icon">✳</div>

            <span className="md-eyebrow">AI + WEB TECHNOLOGY</span>
            <h3 id="md-modal-title">How businesses make money with AI</h3>

            <p>
              Technology helps businesses attract customers, improve
              operations and create additional revenue opportunities.
            </p>

            <div className="md-modal-list">
              {workflows.map((item) => (
                <div key={item.number}>
                  <span>{item.number}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <small>{item.result}</small>
                  </div>
                  <i>✓</i>
                </div>
              ))}
            </div>

            <button
              className="md-modal-action"
              onClick={() => setShowModal(false)}
            >
              Got it, explore dashboard
              <span>→</span>
            </button>
          </div>
        </div>
      )}

      {/* All component styles */}

      <style jsx>{`
        .md-preview {
          --green: #a3ff4b;
          --green-soft: #75d936;
          --surface: #11151b;
          --muted: #858d9a;
          position: relative;
          width: 100%;
          padding: 90px 0;
          color: #f4f7f2;
          overflow: hidden;
          isolation: isolate;
          font-family: inherit;
        }

        .md-glow {
          position: absolute;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          filter: blur(130px);
          opacity: .10;
          pointer-events: none;
          z-index: -1;
        }

        .md-glow-one {
          background: #79ed29;
          top: 10%;
          right: -160px;
        }

        .md-glow-two {
          background: #5544ff;
          bottom: 5%;
          left: -180px;
        }

        .md-heading,
        .md-dashboard,
        .md-business-model {
          width: min(1100px, calc(100% - 40px));
          margin-left: auto;
          margin-right: auto;
        }

        .md-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 35px;
        }

        .md-eyebrow {
          color: var(--green);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .md-live-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          margin-right: 8px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 12px var(--green);
        }

        .md-heading h2 {
          max-width: 650px;
          margin: 18px 0 12px;
          font-size: clamp(32px, 5vw, 53px);
          line-height: 1.08;
          letter-spacing: -2px;
          font-weight: 800;
        }

        .md-heading h2 span {
          color: var(--green);
        }

        .md-heading p,
        .md-section-heading p {
          max-width: 560px;
          color: #949ba7;
          font-size: 14px;
          line-height: 1.8;
        }

        .md-status {
          flex-shrink: 0;
          padding: 11px 15px;
          border: 1px solid #34412b;
          border-radius: 30px;
          color: #c7e8b0;
          background: #171e17;
          font-size: 10px;
          font-weight: 700;
        }

        .md-status i,
        .md-online i {
          display: inline-block;
          width: 7px;
          height: 7px;
          margin-right: 7px;
          border-radius: 50%;
          background: var(--green);
        }

        /* Dashboard */

        .md-dashboard {
          position: relative;
          border: 1px solid rgba(255,255,255,.10);
          border-radius: 19px;
          overflow: hidden;
          background: #0e1116;
          box-shadow: 0 35px 100px rgba(0,0,0,.35);
          animation: md-appear .8s ease both;
        }

        .md-topbar {
          height: 70px;
          padding: 0 25px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #252a32;
        }

        .md-brand,
        .md-top-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .md-brand-icon {
          width: 37px;
          height: 37px;
          display: grid;
          place-items: center;
          border-radius: 11px;
          background: var(--green);
          color: #10140c;
          font-weight: 900;
        }

        .md-brand strong,
        .md-brand small {
          display: block;
        }

        .md-brand strong { font-size: 14px; }
        .md-brand small { color: var(--muted); font-size: 10px; margin-top: 3px; }

        .md-online {
          font-size: 10px;
          color: #a7b2a2;
        }

        .md-avatar {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #252d37;
          font-size: 11px;
          font-weight: 700;
        }

        .md-dashboard-body {
          display: grid;
          grid-template-columns: 185px minmax(0, 1fr);
          min-height: 610px;
        }

        .md-sidebar {
          display: flex;
          flex-direction: column;
          padding: 28px 15px;
          border-right: 1px solid #252a32;
        }

        .md-sidebar > small {
          margin: 0 0 20px 10px;
          color: #666f7c;
          font-size: 9px;
          letter-spacing: 1.5px;
        }

        .md-nav {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 11px;
          margin-bottom: 5px;
          border-radius: 8px;
          color: #919aa7;
          font-size: 12px;
        }

        .md-nav span {
          font-size: 16px;
        }

        .md-nav.active {
          color: var(--green);
          background: rgba(163,255,75,.08);
          border: 1px solid rgba(163,255,75,.12);
        }

        .md-sidebar-bottom {
          margin-top: auto;
        }

        .md-ai-mini {
          position: relative;
          padding: 15px 12px;
          border: 1px solid #34442a;
          border-radius: 10px;
          background: #151d14;
        }

        .md-ai-mini > span {
          color: var(--green);
          margin-right: 6px;
        }

        .md-ai-mini strong {
          font-size: 11px;
        }

        .md-ai-mini small {
          display: block;
          margin-top: 9px;
          color: #929d8c;
          font-size: 9px;
        }

        .md-ai-mini i {
          position: absolute;
          top: 17px;
          right: 12px;
          width: 6px;
          height: 6px;
          background: var(--green);
          border-radius: 50%;
        }

        .md-main {
          min-width: 0;
          padding: 28px;
        }

        .md-main-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 24px;
        }

        .md-muted {
          font-size: 9px;
          color: #777f8d;
          letter-spacing: 1px;
        }

        .md-main-heading h3 {
          margin: 9px 0 5px;
          font-size: 23px;
        }

        .md-main-heading p,
        .md-analytics-heading p {
          margin: 0;
          font-size: 11px;
          color: #858d99;
        }

        .md-periods {
          display: flex;
          padding: 4px;
          border: 1px solid #2c333d;
          border-radius: 9px;
          background: #151a21;
        }

        .md-periods button {
          padding: 8px 12px;
          border: 0;
          border-radius: 6px;
          background: transparent;
          color: #8c95a2;
          cursor: pointer;
          font-size: 10px;
          transition: .2s;
        }

        .md-periods button.selected {
          color: #11180c;
          background: var(--green);
          font-weight: 800;
        }

        /* Statistics */

        .md-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 13px;
          margin-bottom: 17px;
        }

        .md-stat {
          min-width: 0;
          padding: 17px;
          border: 1px solid #2b313b;
          border-radius: 11px;
          background: linear-gradient(145deg, #191f27, #12161c);
          transition: transform .25s, border-color .25s;
        }

        .md-stat:hover {
          transform: translateY(-4px);
          border-color: #759c4d;
        }

        .md-stat-top {
          display: flex;
          justify-content: space-between;
          color: #9aa2ae;
          font-size: 10px;
        }

        .md-stat-top i {
          color: var(--green);
          font-style: normal;
          font-size: 17px;
        }

        .md-stat > strong {
          display: block;
          margin: 15px 0 8px;
          font-size: clamp(20px, 2.5vw, 29px);
          letter-spacing: -.8px;
          overflow-wrap: anywhere;
        }

        .md-stat > small {
          display: block;
          color: #838c98;
          font-size: 9px;
        }

        .md-stat > small b {
          color: var(--green);
        }

        /* Chart */

        .md-analytics {
          padding: 20px;
          border: 1px solid #2b313b;
          border-radius: 12px;
          background: #151a21;
        }

        .md-analytics-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .md-analytics-heading h4,
        .md-revenue-box h4 {
          margin: 0 0 6px;
          font-size: 13px;
        }

        .md-chart-label {
          color: #a6b29e;
          font-size: 9px;
        }

        .md-chart-label i {
          display: inline-block;
          width: 7px;
          height: 7px;
          margin-right: 5px;
          border-radius: 50%;
          background: var(--green);
        }

        .md-chart {
          position: relative;
          display: grid;
          grid-template-columns: 35px 1fr;
          height: 170px;
          margin-top: 24px;
        }

        .md-chart-grid {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #6f7884;
          font-size: 9px;
          padding-bottom: 20px;
        }

        .md-bars {
          position: relative;
          display: flex;
          justify-content: space-around;
          align-items: stretch;
          gap: 12px;
          border-bottom: 1px solid #39404a;
          background: repeating-linear-gradient(
            to bottom,
            transparent 0,
            transparent 32px,
            rgba(255,255,255,.055) 33px
          );
        }

        .md-bar-column {
          display: flex;
          flex: 1;
          min-width: 0;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
        }

        .md-bar-track {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: flex-end;
          justify-content: center;
        }

        .md-bar {
          position: relative;
          width: min(30px, 75%);
          height: var(--bar-height);
          min-height: 8px;
          border-radius: 5px 5px 1px 1px;
          background: linear-gradient(to top, #3b8c22, #a3ff4b);
          box-shadow: 0 0 15px rgba(163,255,75,.12);
          animation: md-bar-grow .9s ease both;
          transition: filter .2s, height .5s;
        }

        .md-bar:hover {
          filter: brightness(1.4);
        }

        .md-bar-tooltip {
          position: absolute;
          top: -25px;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          font-size: 9px;
          color: var(--green);
          transition: opacity .2s;
        }

        .md-bar:hover .md-bar-tooltip {
          opacity: 1;
        }

        .md-bar-column > small {
          padding-top: 8px;
          color: #818a96;
          font-size: 9px;
        }

        /* Revenue and AI cards */

        .md-bottom-grid {
          display: grid;
          grid-template-columns: 1.15fr .85fr;
          gap: 14px;
          margin-top: 16px;
        }

        .md-revenue-box,
        .md-ai-box {
          padding: 19px;
          border: 1px solid #2b313b;
          border-radius: 12px;
          background: #151a21;
        }

        .md-revenue-box > p,
        .md-ai-box > p {
          margin: 0 0 15px;
          color: #858e9a;
          font-size: 10px;
          line-height: 1.6;
        }

        .md-source {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 0;
          border-top: 1px solid #2a3038;
        }

        .md-source-icon {
          width: 33px;
          height: 33px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          border-radius: 9px;
          font-size: 11px;
          font-weight: 800;
        }

        .md-source-icon.purple { background: #30264b; color: #c5a4ff; }
        .md-source-icon.green { background: #203523; color: var(--green); }
        .md-source-icon.blue { background: #20344a; color: #78b8ff; }

        .md-source > div {
          min-width: 0;
          flex: 1;
        }

        .md-source strong,
        .md-source small {
          display: block;
        }

        .md-source strong { font-size: 10px; }
        .md-source small { margin-top: 4px; color: #828c99; font-size: 9px; }

        .md-source > b {
          color: #b8c0ca;
          font-size: 9px;
        }

        .md-ai-box {
          border-color: #435536;
          background: linear-gradient(145deg, #1c2719, #141a18);
        }

        .md-ai-box-top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 17px;
        }

        .md-ai-box-top > span:first-child {
          color: var(--green);
          font-size: 23px;
        }

        .md-ai-live {
          height: fit-content;
          padding: 5px 8px;
          border-radius: 20px;
          color: var(--green);
          background: rgba(163,255,75,.1);
          font-size: 8px;
        }

        .md-ai-box h4 {
          margin: 0 0 9px;
          font-size: 15px;
        }

        .md-ai-tasks {
          display: grid;
          gap: 11px;
          margin: 17px 0;
        }

        .md-ai-tasks span {
          color: #b5c0ae;
          font-size: 10px;
        }

        .md-ai-tasks span::first-letter {
          color: var(--green);
        }

        .md-ai-box > button,
        .md-business-cta > button {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          width: 100%;
          padding: 12px 14px;
          border: 0;
          border-radius: 8px;
          background: var(--green);
          color: #10170c;
          font-size: 10px;
          font-weight: 800;
          cursor: pointer;
          transition: .25s;
        }

        .md-ai-box > button:hover,
        .md-business-cta > button:hover {
          background: #c2ff82;
          transform: translateY(-2px);
        }

        .md-demo-note {
          display: flex;
          gap: 7px;
          align-items: center;
          padding: 13px 20px;
          border-top: 1px solid #272e37;
          color: #89929e;
          font-size: 9px;
        }

        .md-demo-note span {
          color: var(--green);
        }

        /* Notification */

        .md-notification {
          position: fixed;
          right: 25px;
          bottom: 25px;
          z-index: 50;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          width: min(340px, calc(100vw - 30px));
          padding: 16px;
          border: 1px solid rgba(163,255,75,.3);
          border-radius: 13px;
          background: #171f18;
          box-shadow: 0 15px 50px rgba(0,0,0,.45);
          opacity: 0;
          visibility: hidden;
          transform: translateY(15px) scale(.97);
          transition: .4s cubic-bezier(.2,.8,.2,1);
          pointer-events: none;
        }

        .md-notification.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }

        .md-notice-icon {
          width: 35px;
          height: 35px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          border-radius: 9px;
          background: rgba(163,255,75,.12);
          color: var(--green);
          font-size: 17px;
        }

        .md-notification strong {
          display: block;
          font-size: 11px;
        }

        .md-notification p {
          margin: 5px 0;
          color: #9ca69a;
          font-size: 9px;
          line-height: 1.5;
        }

        .md-notification small {
          color: var(--green);
          font-size: 10px;
          font-weight: 800;
        }

        .md-notice-dot {
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          margin-left: auto;
          border-radius: 50%;
          background: var(--green);
        }

        /* Workflow */

        .md-business-model {
          margin-top: 105px;
        }

        .md-section-heading {
          margin-bottom: 35px;
          text-align: center;
        }

        .md-section-heading h3 {
          margin: 14px 0 9px;
          font-size: clamp(25px, 4vw, 38px);
          letter-spacing: -1px;
        }

        .md-section-heading p {
          margin: auto;
        }

        .md-workflow {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 13px;
        }

        .md-workflow-step {
          position: relative;
          padding: 22px 17px;
          border: 1px solid #2b333d;
          border-radius: 13px;
          background: linear-gradient(145deg, #181e26, #11161c);
          transition: .3s;
        }

        .md-workflow-step:hover {
          transform: translateY(-6px);
          border-color: #759b4e;
        }

        .md-workflow-icon {
          position: relative;
          display: grid;
          place-items: center;
          width: 45px;
          height: 45px;
          margin-bottom: 22px;
          border-radius: 12px;
          background: rgba(163,255,75,.1);
          color: var(--green);
          font-size: 23px;
        }

        .md-workflow-icon small {
          position: absolute;
          top: -8px;
          right: -8px;
          padding: 3px 5px;
          border-radius: 5px;
          background: #2b3725;
          font-size: 8px;
        }

        .md-workflow-step h4 {
          margin: 0 0 10px;
          font-size: 13px;
          line-height: 1.5;
        }

        .md-workflow-step > p {
          min-height: 75px;
          margin: 0;
          color: #929ba7;
          font-size: 10px;
          line-height: 1.8;
        }

        .md-result {
          padding-top: 13px;
          margin-top: 13px;
          border-top: 1px solid #303640;
          color: #c0d5af;
          font-size: 9px;
        }

        .md-result span {
          color: var(--green);
          margin-right: 4px;
        }

        .md-workflow-arrow {
          position: absolute;
          top: 40px;
          right: -18px;
          z-index: 2;
          color: var(--green);
          font-size: 19px;
        }

        /* CTA */

        .md-business-cta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 25px;
          margin-top: 35px;
          padding: 35px;
          border: 1px solid #394a30;
          border-radius: 16px;
          background:
            radial-gradient(ellipse at 90% 50%, rgba(163,255,75,.12), transparent 50%),
            #171e17;
        }

        .md-business-cta h3 {
          margin: 10px 0;
          font-size: clamp(20px, 3vw, 28px);
        }

        .md-business-cta p {
          margin: 0;
          color: #9ca698;
          font-size: 11px;
          line-height: 1.7;
        }

        .md-business-cta > button {
          width: auto;
          min-width: 180px;
        }

        /* Popup modal */

        .md-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: grid;
          place-items: center;
          padding: 20px;
          background: rgba(3,6,5,.8);
          backdrop-filter: blur(12px);
          animation: md-fade .25s ease both;
        }

        .md-modal {
          position: relative;
          width: min(470px, 100%);
          max-height: 85vh;
          overflow-y: auto;
          padding: 32px;
          border: 1px solid #435536;
          border-radius: 18px;
          background: #151c17;
          box-shadow: 0 30px 100px rgba(0,0,0,.55);
          animation: md-modal-in .35s cubic-bezier(.2,.8,.2,1) both;
        }

        .md-modal-close {
          position: absolute;
          top: 16px;
          right: 18px;
          width: 33px;
          height: 33px;
          border: 1px solid #39433a;
          border-radius: 9px;
          background: #202a20;
          color: white;
          font-size: 21px;
          cursor: pointer;
        }

        .md-modal-icon {
          display: grid;
          place-items: center;
          width: 48px;
          height: 48px;
          margin-bottom: 22px;
          border-radius: 13px;
          background: rgba(163,255,75,.12);
          color: var(--green);
          font-size: 26px;
        }

        .md-modal h3 {
          margin: 12px 0;
          font-size: 25px;
          line-height: 1.25;
        }

        .md-modal > p {
          color: #9ca69b;
          font-size: 12px;
          line-height: 1.8;
        }

        .md-modal-list {
          display: grid;
          gap: 10px;
          margin: 24px 0;
        }

        .md-modal-list > div {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px;
          border: 1px solid #303b30;
          border-radius: 9px;
          background: #1b241d;
        }

        .md-modal-list > div > span {
          color: var(--green);
          font-size: 11px;
          font-weight: 800;
        }

        .md-modal-list > div > div {
          flex: 1;
        }

        .md-modal-list strong,
        .md-modal-list small {
          display: block;
        }

        .md-modal-list strong { font-size: 11px; }
        .md-modal-list small { margin-top: 4px; color: #919d90; font-size: 9px; }
        .md-modal-list i { color: var(--green); font-style: normal; }

        .md-modal-action {
          display: flex;
          justify-content: space-between;
          width: 100%;
          padding: 14px;
          border: 0;
          border-radius: 9px;
          background: var(--green);
          color: #11180c;
          font-size: 11px;
          font-weight: 800;
          cursor: pointer;
        }

        /* Animations */

        @keyframes md-appear {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes md-bar-grow {
          from { height: 0; }
          to { height: var(--bar-height); }
        }

        @keyframes md-fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes md-modal-in {
          from { opacity: 0; transform: translateY(20px) scale(.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @media (max-width: 850px) {
          .md-dashboard-body {
            grid-template-columns: 65px minmax(0,1fr);
          }

          .md-sidebar {
            padding: 20px 8px;
          }

          .md-sidebar > small,
          .md-nav:not(.active),
          .md-nav.active {
            font-size: 0;
          }

          .md-nav {
            justify-content: center;
            padding: 13px 5px;
          }

          .md-nav span { font-size: 19px; }

          .md-ai-mini {
            padding: 12px 5px;
            text-align: center;
          }

          .md-ai-mini strong,
          .md-ai-mini small {
            display: none;
          }

          .md-ai-mini > span { margin: 0; }
          .md-ai-mini i { top: 7px; right: 7px; }

          .md-main { padding: 20px; }

          .md-workflow {
            grid-template-columns: repeat(2, minmax(0,1fr));
          }

          .md-workflow-arrow { display: none; }
        }

        @media (max-width: 560px) {
          .md-preview { padding: 60px 0; }

          .md-heading {
            display: block;
          }

          .md-heading h2 { letter-spacing: -1px; }

          .md-status {
            display: inline-block;
            margin-top: 12px;
          }

          .md-dashboard-body {
            display: block;
          }

          .md-sidebar { display: none; }

          .md-topbar { padding: 0 14px; }

          .md-main { padding: 16px 12px; }

          .md-main-heading {
            align-items: flex-start;
            flex-direction: column;
          }

          .md-stats {
            grid-template-columns: 1fr;
          }

          .md-stat {
            padding: 14px;
          }

          .md-stat > strong {
            margin: 9px 0 5px;
          }

          .md-bottom-grid {
            grid-template-columns: 1fr;
          }

          .md-chart {
            height: 145px;
          }

          .md-bars { gap: 5px; }

          .md-workflow {
            grid-template-columns: 1fr;
          }

          .md-workflow-step > p {
            min-height: auto;
          }

          .md-business-cta {
            align-items: flex-start;
            flex-direction: column;
            padding: 23px;
          }

          .md-business-cta > button {
            width: 100%;
          }

          .md-notification {
            right: 15px;
            bottom: 15px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .md-preview *,
          .md-preview *::before,
          .md-preview *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

    </section>
  )
}
