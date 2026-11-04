import { ActionLink, Badge, PageFrame } from '@/components/Design'

export const articles = [
  { 
    title: 'How AI automation saves hours every week', 
    description: 'Eliminate manual grunt work and cut costs so your team can focus purely on scaling revenue.', 
    date: 'Field notes', 
    read: '5 min read', 
    theme: '', 
    initials: 'YA' 
  },
  { 
    title: 'Why website speed decides conversions', 
    description: 'A slow site leaks cash. Discover simple fixes that instantly turn visitors into paying buyers.', 
    date: 'Web performance', 
    read: '4 min read', 
    theme: 'b', 
    initials: 'YA' 
  },
  { 
    title: 'AI agents vs. chatbots', 
    description: 'Stop losing leads to dumb bots. See how real AI sales agents close deals 24/7 on autopilot.', 
    date: 'Artificial intelligence', 
    read: '6 min read', 
    theme: 'c', 
    initials: 'YA' 
  },
] as const

export default function BlogPage() {
  return (
    <PageFrame>
      <div className="hd w-full flex flex-col items-center justify-center text-center" style={{ marginTop: 40 }}>
        <Badge icon="news" className="rv">Growth Insights & Strategies</Badge>
        <h1>Scale Your Business With Proven AI & Web Systems</h1>
        <p>Practical playbooks on how high-performing companies multiply revenue, automate workflows, and dominate their competition.</p>
      </div>
      <div className="grid w-full">
        {articles.map((article) => (
          <article className="card sp rv" key={article.title}>
            <div className={`th${article.theme ? ` ${article.theme}` : ''}`} />
            <div className="row flex items-center flex-wrap gap-2">
              <span className="pl">{article.date}</span>
              <span className="pl">{article.read}</span>
            </div>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <div className="au flex items-center gap-2.5">
              <b className="grid place-items-center">{article.initials}</b>
              <span>MineDev Agency<br /><small>Revenue Playbooks</small></span>
            </div>
          </article>
        ))}
      </div>
      <section className="cc w-full flex flex-col items-center justify-center text-center">
        <Badge icon="sparkles" className="rv">Ready to 10X Your Revenue?</Badge>
        <h2>Let&apos;s build an AI system that prints money for your business.</h2>
        <p>Book a free strategy call and let&apos;s map out your custom growth roadmap.</p>
        <div className="cta flex items-center justify-center">
          <ActionLink href="/contact">Claim Free Consultation</ActionLink>
        </div>
      </section>
    </PageFrame>
  )
}