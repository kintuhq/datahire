"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CareerResourcesPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center cursor-pointer hover:opacity-80 transition-opacity duration-200"
              onClick={() => router.push("/")}
            >
              <Image
                src="/logo.png"
                alt="DataHire logo"
                width={56}
                height={56}
                className="h-14 w-14 mr-2"
                priority
              />
              <div>
                <h1 className="text-2xl font-bold">
                  <span className="text-black">Data</span> <span className="text-blue-600">Hire</span>
                </h1>
                <p className="text-muted-foreground -mt-1 text-sm">Data Analyst Jobs</p>
              </div>
            </div>
            <Button
              onClick={() => router.push("/register")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300 px-6 py-3 h-11 cursor-pointer"
            >
              Post a Job
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">Career Resources</h1>
          <p className="text-lg text-muted-foreground mb-8">
            A curated, practical guide to help you land (and excel in) Data Analyst roles—whether you're just getting started or stepping up to senior.
          </p>

          <div className="prose prose-lg max-w-none">
            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Table of Contents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <ol className="space-y-1">
                  <li><a href="#how-to-use" className="text-primary hover:underline">How to Use This Page</a></li>
                  <li><a href="#career-paths" className="text-primary hover:underline">Career Paths & Levels</a></li>
                  <li><a href="#skills-map" className="text-primary hover:underline">Skills Map</a></li>
                  <li><a href="#tooling-guide" className="text-primary hover:underline">Tooling Guide</a></li>
                  <li><a href="#portfolio" className="text-primary hover:underline">Portfolio Playbook</a></li>
                  <li><a href="#resume-linkedin" className="text-primary hover:underline">Resume & LinkedIn Templates</a></li>
                  <li><a href="#cover-letter" className="text-primary hover:underline">Cover Letter Template</a></li>
                  <li><a href="#interview-prep" className="text-primary hover:underline">Interview Prep</a></li>
                </ol>
                <ol start={9} className="space-y-1">
                  <li><a href="#take-home" className="text-primary hover:underline">Take‑Home Assignment Guide</a></li>
                  <li><a href="#salary-negotiation" className="text-primary hover:underline">Offer, Salary & Negotiation</a></li>
                  <li><a href="#job-search" className="text-primary hover:underline">Job Search Workflow</a></li>
                  <li><a href="#networking" className="text-primary hover:underline">Networking That Works</a></li>
                  <li><a href="#first-90-days" className="text-primary hover:underline">30/60/90 Day Plan</a></li>
                  <li><a href="#specialized-tracks" className="text-primary hover:underline">Specialized Tracks</a></li>
                  <li><a href="#data-ethics" className="text-primary hover:underline">Data Ethics & Privacy</a></li>
                  <li><a href="#faq" className="text-primary hover:underline">FAQ</a></li>
                </ol>
              </div>
              <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Tip:</strong> Use the checklists as your weekly ritual.
                </p>
              </div>
            </div>

            <section id="how-to-use" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">How to Use This Page</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Pick a lane & level.</strong> Then follow the Skills Map.</li>
                <li><strong>Build 2–3 portfolio projects</strong> that mirror real job postings.</li>
                <li><strong>Apply weekly with intent</strong> (targeted roles + tailored resume bullets).</li>
                <li><strong>Practice interviews</strong> using the question banks and case templates.</li>
                <li><strong>Track everything</strong> (applications, outreach, interview notes).</li>
              </ul>
            </section>

            <section id="career-paths" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Career Paths & Levels</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Paths</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Business/Data Analyst (Generalist):</strong> Reporting, dashboards, ad‑hoc analysis.</li>
                  <li><strong>Product Analyst:</strong> Experimentation, product metrics, funnels, feature impact.</li>
                  <li><strong>Marketing/Growth Analyst:</strong> Attribution, channel performance, cohort/LTV.</li>
                  <li><strong>Operations/Supply Chain Analyst:</strong> Throughput, forecasting, logistics.</li>
                  <li><strong>Financial/Data Analyst:</strong> Revenue/COGS, variance, driver‑based planning.</li>
                  <li><strong>People/HR Analyst:</strong> Retention, performance, headcount analytics.</li>
                  <li><strong>Geospatial Analyst:</strong> Location data, routing, catchment analysis.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Levels (signals)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Entry/Junior:</strong> Solid Excel/Sheets, SQL CRUD & joins, a dashboard, 2 projects.</li>
                  <li><strong>Mid:</strong> SQL window functions, data modeling basics, Python/R for EDA, A/B test design, stakeholder comms.</li>
                  <li><strong>Senior:</strong> End‑to‑end from problem framing to recommendation; owns KPIs, mentors others, productionizes reporting, partners cross‑functionally.</li>
                </ul>
              </div>
            </section>

            <section id="skills-map" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Skills Map (What to Learn, In What Order)</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Foundation</h3>
                  <ol className="space-y-1 text-sm text-muted-foreground">
                    <li>Spreadsheet fluency (lookup/index-match/xlookup, pivots, arrays, regex, charts)</li>
                    <li>SQL core (SELECT, WHERE, GROUP BY, HAVING, ORDER, LIMIT)</li>
                    <li>Joins & set ops (INNER/LEFT/RIGHT/FULL, UNION/EXCEPT/INTERSECT)</li>
                    <li>Aggregations & windows (ROW_NUMBER, RANK, SUM/AVG OVER, partitions)</li>
                    <li>Data cleaning (dedupe, outliers, nulls, date/time handling)</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Analysis Toolkit</h3>
                  <ol className="space-y-1 text-sm text-muted-foreground">
                    <li>Descriptive stats (mean/median, variance, CI, percentiles)</li>
                    <li>Experimentation (A/B, power, lift, significance, pitfalls)</li>
                    <li>Cohorts & funnels (retention, conversion stages, drop‑off)</li>
                    <li>Forecasting basics (seasonality, moving averages, simple regressions)</li>
                    <li>Visualization design (chart choice, clutter reduction, labeling)</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Automation & Production</h3>
                  <ol className="space-y-1 text-sm text-muted-foreground">
                    <li>Python or R for EDA & scripting (pandas/dplyr, matplotlib/ggplot)</li>
                    <li>BI tools (Tableau/Power BI/Looker/Mode/Superset) & dashboard craft</li>
                    <li>SQL modeling (CTEs, materialized views, star schemas, date dimensions)</li>
                    <li>Version control (Git basics) & reproducibility (notebooks, dbt basics)</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Soft Skills</h3>
                  <ol className="space-y-1 text-sm text-muted-foreground">
                    <li>Framing questions, stakeholder interviews, storytelling, writing clear TL;DRs.</li>
                  </ol>
                </div>
              </div>

              <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Shortcut:</strong> Learn just enough to ship—then iterate in public on your portfolio.
                </p>
              </div>
            </section>

            <section id="tooling-guide" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Tooling Guide</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Spreadsheets</h3>
                  <p className="text-muted-foreground">Must‑know: Pivot Tables, XLOOKUP/INDEX‑MATCH, TEXT/DATE functions, FILTER/UNIQUE, conditional formatting, Named Ranges.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">SQL</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li><strong>Practice:</strong> joins, windows, CTEs, date bucketing, CASE, subqueries, pivot/unpivot.</li>
                    <li><strong>Performance:</strong> EXPLAIN basics, limiting scans, pre‑aggregations, proper indexing (where applicable).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Python/R</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li><strong>Python:</strong> pandas, numpy, matplotlib; notebooks with tidy headings; virtual envs.</li>
                    <li><strong>R:</strong> tidyverse (dplyr, tidyr, ggplot2); RMarkdown for reports.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">BI/Dashboarding</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li><strong>Principles:</strong> 1‑page KPI view, consistent filters, responsive layouts, drill‑downs.</li>
                    <li><strong>Governance:</strong> single source of truth, definitions dictionary, refresh cadence.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Versioning & Reproducibility</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li><strong>Git workflow:</strong> branch → commit → PR; write concise commit messages.</li>
                    <li><strong>Project structure:</strong> /data, /notebooks, /src, /reports; README with how‑to‑run.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="portfolio" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Portfolio Playbook</h2>

              <div className="mb-6">
                <p className="text-lg text-muted-foreground mb-4">
                  <strong>Your goal:</strong> Prove you can produce business impact in the employer's stack.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3">Signature Projects (pick 2–3)</h3>
                <ol className="space-y-3 text-muted-foreground">
                  <li><strong>1. Business KPI Dashboard</strong> – Ingest (csv/api), model with SQL, build a BI dashboard. Include refresh plan and a short Loom‑style walkthrough.</li>
                  <li><strong>2. A/B Test Deep‑Dive</strong> – Simulate or analyze an experiment; cover design, power, sanity checks, lift calc, and clear recommendation.</li>
                  <li><strong>3. Cohort Retention Analysis</strong> – Define cohorts, compute retention curves, segment, identify drivers, propose experiments.</li>
                  <li><strong>4. Revenue & Margin Bridge</strong> – Decompose change over time (price, volume, mix) and present a waterfall chart with insights.</li>
                  <li><strong>5. Supply Chain/Inventory Forecast</strong> – Create a simple forecasting model with seasonality and service‑level scenarios.</li>
                </ol>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Deliverables Checklist</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Git repo (or clean Google Drive folder) with reproducible steps</li>
                  <li>• Executive summary (≤200 words) + slides (5–8 pages) + BI link</li>
                  <li>• Data dictionary & metric definitions</li>
                  <li>• Readme: how to run, assumptions, limitations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Public Proof</h3>
                <p className="text-muted-foreground">Post short write‑ups, visuals, and lessons learned on LinkedIn/Twitter.</p>
              </div>
            </section>

            <section id="resume-linkedin" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Resume & LinkedIn Templates</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Resume (1 page)</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Header:</strong> Name · Email · City (or Remote) · Portfolio/LinkedIn/GitHub</li>
                  <li><strong>Summary (2–3 lines):</strong> Your impact, toolset, domains.</li>
                  <li><strong>Skills:</strong> SQL · Excel/Sheets · Python/R · Tableau/Looker/Power BI · A/B Testing · Statistics · Data Modeling · Communication</li>
                  <li><strong>Experience:</strong> 3–5 bullets per role, each with <strong>Action → Method → Impact</strong> and a <strong>number</strong>.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Bullet formula examples</h3>
                <div className="bg-card border border-border rounded-lg p-4 space-y-2 text-sm">
                  <p>"Built a weekly revenue dashboard in Looker (SQL + derived tables) used by Sales; reduced time‑to‑insight by 70% and surfaced a 5% upsell opportunity."</p>
                  <p>"Designed checkout A/B (power=0.8); variant increased conversion +1.9% (p=0.03) → $240k incremental ARR."</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">LinkedIn</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li><strong>Headline:</strong> "Data Analyst • SQL | Python | Tableau • Experimentation & Growth"</li>
                  <li><strong>About:</strong> 3–5 short paragraphs; link 2–3 projects; list domains (e.g., ecommerce, fintech).</li>
                </ul>
              </div>
            </section>

            <section id="cover-letter" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Cover Letter Template</h2>

              <div className="bg-card border border-border rounded-lg p-6">
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Opening (2–3 lines):</h4>
                    <p className="text-muted-foreground">I'm a Data Analyst with experience in [domain] who loves turning messy data into clear decisions. I'm excited about [company] because [specific reason/tie to mission/product].</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Middle (3 bullets):</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Recent win: [one quantified impact].</li>
                      <li>• Relevant project: [portfolio link + 1‑line business outcome].</li>
                      <li>• Tool/stack match: [their posting says X; you have X].</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Close (1–2 lines):</h4>
                    <p className="text-muted-foreground">I'd love to share how I can help [team] hit [KPI/goal]. Thanks for your time.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="interview-prep" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Interview Prep</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">A. Recruiter/Screen (10–20 min)</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Crisp story: who you are, top 2–3 wins, tools, domains, why this company.</li>
                    <li>• Be ready with compensation range and timeline.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">B. SQL/Technical (45–60 min)</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li><strong>Topics:</strong> joins, windows, CTEs, date bucketing, conditional aggregation, top‑N, percentiles.</li>
                    <li><strong>Question pattern:</strong>
                      <ul className="ml-4 mt-1 space-y-1">
                        <li>• "Find 7‑day rolling active users per product."</li>
                        <li>• "Return top 3 categories by monthly revenue growth."</li>
                      </ul>
                    </li>
                    <li><strong>Checklist:</strong> ask clarifying Qs, sketch schema, write readable SQL (CTEs), test with edge cases.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">C. Analytics/Case (45–60 min)</h3>
                  <div className="mb-3">
                    <h4 className="font-semibold text-foreground mb-2">Framework (4 steps):</h4>
                    <ol className="space-y-1 text-muted-foreground">
                      <li>1. Clarify the goal & metric(s)</li>
                      <li>2. Hypothesize drivers & segments</li>
                      <li>3. Plan analysis (cuts, visuals, tests)</li>
                      <li>4. Recommend action + success metric</li>
                    </ol>
                  </div>
                  <p className="text-muted-foreground">Sample prompts: "Sign‑ups fell 10% WoW," "Cart‑to‑purchase lags," "New feature—how to measure impact?"</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">D. BI/Visualization (30–45 min)</h3>
                  <p className="text-muted-foreground">Give a before/after dashboard: declutter, better chart choice, narrative title, callouts.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">E. Stakeholder/Behavioral</h3>
                  <p className="text-muted-foreground">STAR your stories (Situation, Task, Action, Result). Prepare 6 stories: conflict, impacting a KPI, mistake/learning, influencing without authority, ambiguous ask, urgent deadline.</p>
                </div>
              </div>
            </section>

            <section id="take-home" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Take‑Home Assignment Guide (and Rubric)</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">What good looks like</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Clear README with business context, assumptions, and reproducible steps.</li>
                  <li>• Clean SQL/Python notebooks; thoughtful visuals; concise executive summary.</li>
                  <li>• Recommendations with trade‑offs, risks, and next steps.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Self‑Score Rubric (0–3)</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li><strong>Business Understanding:</strong> 0 (none) → 3 (sharp framing, measurable goal)</li>
                  <li><strong>Data Hygiene:</strong> 0 (messy) → 3 (validated, edge cases handled)</li>
                  <li><strong>SQL/Code Quality:</strong> 0 (hard to read) → 3 (modular, tested)</li>
                  <li><strong>Insights & Storytelling:</strong> 0 (descriptive only) → 3 (actionable drivers)</li>
                  <li><strong>Visualization:</strong> 0 (clutter) → 3 (clean, labeled, purposeful)</li>
                  <li><strong>Reproducibility:</strong> 0 (can't run) → 3 (one‑click/clear steps)</li>
                </ul>
              </div>
            </section>

            <section id="salary-negotiation" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Offer, Salary & Negotiation</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Preparation</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Research band ranges by level, location, and company size; note base + bonus + equity.</li>
                    <li>• Identify your walk‑away and ideal numbers; list trade‑offs (remote, growth, title).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Negotiation script</h3>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">"I'm excited about the role. Based on the scope and market data for [city/level], I'm targeting a <strong>total</strong> range of [X–Y]. Is there flexibility on base or equity to get closer to that?"</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Levers</h3>
                  <p className="text-muted-foreground">Start date, sign‑on bonus, performance review timing, remote stipend, L&D budget.</p>
                </div>
              </div>
            </section>

            <section id="job-search" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Job Search Workflow (Weekly Plan + Tracker)</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Weekly Plan</h3>
                  <p className="text-muted-foreground">15 targeted applications; 10 tailored outreaches; 2 portfolio improvements; 2 mock interviews.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Tracker Columns</h3>
                  <p className="text-muted-foreground">Company, Role, Link, Date Applied, Contact, Stage, Next Action, Notes, Outcome.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Signals to pivot</h3>
                  <p className="text-muted-foreground">&lt;5% screen rate → fix resume/targets; stalls at SQL → practice with timed sets.</p>
                </div>
              </div>
            </section>

            <section id="networking" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Networking That Works</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Warm outreach (ex‑colleagues, alumni):</h3>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">"Could I get 15 minutes for advice on your team's analyst role? I built a similar dashboard here [link] and would value your perspective."</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Cold outreach</h3>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">"Saw you lead analytics at [Company]. I built a [relevant] project that mirrors your stack. If helpful, I can share a 5‑minute walkthrough—open to a quick chat?"</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Events & communities</h3>
                  <p className="text-muted-foreground">Contribute answers, share dashboards, offer quick analyses that help others.</p>
                </div>
              </div>
            </section>

            <section id="first-90-days" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">30/60/90 Day Plan (Once You're Hired)</h2>

              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Days 0–30:</strong> Meet stakeholders; map metrics and data sources; fix a nagging reporting pain; ship a small dashboard.</li>
                <li><strong>Days 31–60:</strong> Own a KPI; create definitions; automate a weekly report; document a data contract.</li>
                <li><strong>Days 61–90:</strong> Propose an experiment or roadmap; mentor a junior; present a QBR‑style insights deck.</li>
              </ul>
            </section>

            <section id="specialized-tracks" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Specialized Tracks</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Product Analytics</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li><strong>Metrics:</strong> activation, retention, feature adoption, North Star.</li>
                    <li><strong>Tools:</strong> event tracking, experiment platforms.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Marketing Analytics</h3>
                  <p className="text-sm text-muted-foreground">MMM vs MTA basics, cohorts, CAC/LTV, incrementality tests.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Finance Analytics</h3>
                  <p className="text-sm text-muted-foreground">Driver trees, variance analysis, scenario planning.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Ops/Supply Chain</h3>
                  <p className="text-sm text-muted-foreground">Forecast accuracy, inventory turns, SLA adherence, route optimization.</p>
                </div>

                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Geospatial</h3>
                  <p className="text-sm text-muted-foreground">Spatial joins, clustering, isochrones; maps that tell a story (not just pretty).</p>
                </div>
              </div>
            </section>

            <section id="data-ethics" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Data Ethics & Privacy Basics</h2>

              <ul className="space-y-1 text-muted-foreground">
                <li>• Minimize PII, use least‑privilege access, log data lineage.</li>
                <li>• Understand high‑level obligations (consent, purpose limitation, retention).</li>
                <li>• Sanity‑check bias, fairness, and explainability in decisions.</li>
              </ul>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">FAQ</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Q: Do I need both Python and R?</h3>
                  <p className="text-muted-foreground">A: No. Pick one and get effective. Python is more common; R shines for quick stats and visuals.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Q: How many projects are enough?</h3>
                  <p className="text-muted-foreground">A: Two excellent, business‑oriented projects beat ten generic ones.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Q: I get stuck in SQL interviews—now what?</h3>
                  <p className="text-muted-foreground">A: Practice with realistic schemas, time yourself, and always narrate your approach.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Q: I have no experience—how do I start?</h3>
                  <p className="text-muted-foreground">A: Volunteer a small analysis for a local org/startup, ship a KPI dashboard, and write up the impact.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="mx-auto px-4 py-12" style={{ maxWidth: "1240px" }}>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <a href="/" className="inline-block">
                <div className="flex items-center mb-3 hover:opacity-80 transition-opacity duration-200">
                  <Image
                    src="/logo.png"
                    alt="DataHire Logo"
                    width={32}
                    height={32}
                    className="h-8 w-8 mr-2"
                    loading="lazy"
                  />
                  <h3 className="text-2xl font-bold text-foreground">
                    Data <span className="text-primary">Hire</span>
                  </h3>
                </div>
              </a>
              <p className="text-muted-foreground mb-4 max-w-md">
                The global platform connecting talented data analysts with companies worldwide.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">For Analysts</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="/career-resources" className="hover:text-primary transition-colors">
                    Career Resources
                  </a>
                </li>
                <li>
                  <a href="/data-analysis-tips" className="hover:text-primary transition-colors">
                    Data Analysis Tips
                  </a>
                </li>
              </ul>
            </div>

            {/* For Companies */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">For Companies</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="/login" className="hover:text-primary transition-colors">
                    Login
                  </a>
                </li>
                <li>
                  <a href="/hiring-guide" className="hover:text-primary transition-colors">
                    Hiring Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect With Us */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">Connect With Us</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2025 Data Hire.
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="/contact" className="hover:text-primary transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}