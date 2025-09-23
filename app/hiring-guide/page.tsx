export default function HiringGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto px-4 py-12" style={{ maxWidth: "1240px" }}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">Hiring Guide: Data Analysts</h1>
          <p className="text-lg text-muted-foreground mb-8">
            A practical, end‑to‑end playbook to help companies scope roles, attract great candidates, run fair and predictive interviews, and onboard analysts who deliver business impact fast.
          </p>

          <div className="prose prose-lg max-w-none">
            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Table of Contents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <ol className="space-y-1">
                  <li><a href="#role-definition" className="text-primary hover:underline">1. Role Definition & Business Outcomes</a></li>
                  <li><a href="#competency-model" className="text-primary hover:underline">2. Competency Model & Levels</a></li>
                  <li><a href="#job-descriptions" className="text-primary hover:underline">3. Job Description Templates (JD)</a></li>
                  <li><a href="#sourcing" className="text-primary hover:underline">4. Sourcing Strategy</a></li>
                  <li><a href="#screening" className="text-primary hover:underline">5. Screening & Scoping Call</a></li>
                  <li><a href="#interview-loop" className="text-primary hover:underline">6. Interview Loop Design</a></li>
                  <li><a href="#question-banks" className="text-primary hover:underline">7. Question Banks</a></li>
                  <li><a href="#take-home" className="text-primary hover:underline">8. Take‑Home Assignment + Rubric</a></li>
                </ol>
                <ol start={9} className="space-y-1">
                  <li><a href="#scorecards" className="text-primary hover:underline">9. Scorecards & Decision Framework</a></li>
                  <li><a href="#compensation" className="text-primary hover:underline">10. Compensation & Career Ladders</a></li>
                  <li><a href="#dei" className="text-primary hover:underline">11. DEI & Bias Reduction</a></li>
                  <li><a href="#references" className="text-primary hover:underline">12. Reference Checks</a></li>
                  <li><a href="#offer-strategy" className="text-primary hover:underline">13. Offer Strategy & Closing</a></li>
                  <li><a href="#onboarding" className="text-primary hover:underline">14. Onboarding: 30/60/90</a></li>
                  <li><a href="#success-metrics" className="text-primary hover:underline">15. Success Metrics</a></li>
                  <li><a href="#pitfalls" className="text-primary hover:underline">16. Common Pitfalls</a></li>
                </ol>
              </div>
              <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Principles:</strong> (1) Hire for <strong>business impact</strong>, not tools alone. (2) Use a <strong>structured, repeatable</strong> process. (3) <strong>Decide with evidence</strong>, not vibes.
                </p>
              </div>
            </div>

            <section id="role-definition" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">1) Role Definition & Business Outcomes</h2>
              <p className="text-muted-foreground mb-6">Before posting, align on <strong>why</strong> you are hiring.</p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Business outcomes (pick 2–4):</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Faster decisions via reliable dashboards (time‑to‑insight ↓)</li>
                  <li>• KPI ownership and weekly instrumentation health (data quality ↑)</li>
                  <li>• Experimentation velocity and rigor (A/B cadence, MDE planning)</li>
                  <li>• Growth and monetization insights (pricing, LTV/CAC, churn)</li>
                  <li>• Operational efficiency (forecast accuracy, SLA adherence)</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Scope & stakeholders</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• <strong>Primary partners:</strong> Product, Marketing/Growth, Finance, Ops, Exec.</li>
                  <li>• <strong>Decision rights:</strong> advisory vs owner of KPIs; definitions council participation.</li>
                  <li>• <strong>Tech stack:</strong> warehouse (e.g., Snowflake/BigQuery), BI (Looker/Power BI/Tableau), orchestration (dbt/Airflow), experiment platform.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Success statement (example)</h3>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-sm text-muted-foreground italic">
                    "In 90 days, our analyst will ship a single‑source KPI dashboard used in weekly exec, establish metric definitions, and identify 2 experiments with expected impact of +2–3% conversion."
                  </p>
                </div>
              </div>
            </section>

            <section id="competency-model" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">2) Competency Model & Levels</h2>
              <p className="text-muted-foreground mb-6">Hire against explicit competencies; calibrate by level.</p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Core competencies</h3>
                <ol className="space-y-2 text-muted-foreground">
                  <li><strong>1. Business Acumen & Problem Framing</strong> – Defines the question, identifies drivers, proposes analyses.</li>
                  <li><strong>2. SQL & Data Modeling</strong> – Clean, performant queries; joins/windows; builds durable models.</li>
                  <li><strong>3. Statistics & Experimentation</strong> – Descriptive stats; A/B design; inference basics.</li>
                  <li><strong>4. Visualization & Communication</strong> – Clear dashboards; narrative summaries; stakeholder fit.</li>
                  <li><strong>5. Tooling & Reproducibility</strong> – BI/reports; Python/R for EDA; version control; documentation.</li>
                  <li><strong>6. Collaboration & Influence</strong> – Works cross‑functionally; sets expectations; handles ambiguity.</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Level signals</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>Junior/Associate:</strong> Executes scoped tasks, solid SQL CRUD/joins, basic charts, needs guidance.</li>
                  <li><strong>Mid‑Level:</strong> Owns projects E2E, windows/CTEs, basic A/B design, stakeholder comms.</li>
                  <li><strong>Senior:</strong> Sets roadmap, models complex domains, mentors, drives KPI movement.</li>
                  <li><strong>Lead/Principal:</strong> Cross‑team strategy, definitions governance, experimentation program.</li>
                </ul>
              </div>
            </section>

            <section id="job-descriptions" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">3) Job Description Templates (JD)</h2>
              <p className="text-muted-foreground mb-6">Use clear, impact‑oriented JDs. Avoid laundry lists of tools.</p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">Template – Mid‑Level Data Analyst</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">About the role</h4>
                    <p className="text-sm text-muted-foreground">We're hiring a Data Analyst to turn data into decisions across [product/domain]. You'll own key KPIs, partner with [teams], and ship dashboards/analyses that drive measurable outcomes.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">What you'll do</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Own [KPI(s)] and deliver a reliable weekly/monthly reporting cadence</li>
                      <li>• Build SQL models and dashboards that become the source of truth</li>
                      <li>• Partner with [Product/Marketing/Finance] to frame questions and test hypotheses</li>
                      <li>• Design and analyze experiments with clear recommendations</li>
                      <li>• Document metric definitions and data quality checks</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">What we're looking for</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Strong SQL (joins, windows, CTEs); proficiency in [BI tool]</li>
                      <li>• Experience turning ambiguous asks into clear analyses</li>
                      <li>• Working knowledge of A/B testing and statistical reasoning</li>
                      <li>• Bonus: Python/R for EDA; dbt or similar modeling tools</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Nice to have (not required)</h4>
                    <p className="text-sm text-muted-foreground">Domain experience in [e.g., ecommerce/fintech/SaaS].</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Template – Senior Data Analyst</h3>
                <p className="text-muted-foreground">Add: KPI ownership, roadmap influence, mentoring, stakeholder leadership, modeling at scale, experimentation strategy.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Inclusive language tips</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Avoid "rockstar/ninja," years‑heavy gatekeeping, and unnecessary degrees.</li>
                  <li>• Focus on <strong>outcomes</strong> and <strong>skills</strong> over pedigree.</li>
                </ul>
              </div>
            </section>

            <section id="sourcing" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">4) Sourcing Strategy (Inbound + Outbound)</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Inbound</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Post to targeted communities (analytics forums, local meetups, university alumni).</li>
                    <li>• Showcase real problems in the JD; link to blog posts/dashboards to attract doers.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Outbound</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Search portfolios (GitHub/Notion/BI Public) for relevant projects.</li>
                    <li>• Boolean strings: <code className="text-xs bg-muted px-1 rounded">("data analyst" OR analytics) AND (Looker OR Tableau OR "Power BI") AND (SQL) AND (A/B OR experiment OR cohort)</code></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Employer brand</h3>
                  <p className="text-muted-foreground">Publish a "How we use data" post; share your stack; highlight analyst impact.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Diversity sourcing</h3>
                  <p className="text-muted-foreground">Partner with communities serving underrepresented talent; use structured outreach.</p>
                </div>
              </div>
            </section>

            <section id="screening" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">5) Screening & Scoping Call (15–30 min)</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Goals</h3>
                <p className="text-muted-foreground">Confirm problem‑solving orientation, SQL baseline, communication, salary band, timing.</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Suggested questions</h3>
                <div className="bg-card border border-border rounded-lg p-4 space-y-2 text-sm">
                  <p>"Walk me through a recent analysis from request → decision. What changed as a result?"</p>
                  <p>"What's a metric you defined or defended? How did you align stakeholders?"</p>
                  <p>"Pick a project you'd do here based on our JD. How would you start?"</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Red flags</h3>
                <p className="text-muted-foreground">Tool‑only focus without business framing; inability to quantify impact; vague stakeholders.</p>
              </div>
            </section>

            <section id="interview-loop" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">6) Interview Loop Design (Structure & Timing)</h2>
              <p className="text-muted-foreground mb-6">Aim for a <strong>4–5 stage</strong> loop completed within <strong>2 weeks</strong>. Keep tasks scoped.</p>

              <ol className="space-y-2 text-muted-foreground mb-6">
                <li><strong>1. Technical SQL (45–60 min)</strong> – realistic schema; joins, windows, edge cases.</li>
                <li><strong>2. Analytics Case (45–60 min)</strong> – problem framing → insights → recs.</li>
                <li><strong>3. BI/Visualization (30–45 min)</strong> – critique & improve a dashboard; build/storyboard.</li>
                <li><strong>4. Collaboration/Stakeholder (30–45 min)</strong> – partner scenarios, ambiguity handling.</li>
                <li><strong>5. (Optional) Take‑Home (2–4 hrs)</strong> – reproducible mini‑project aligned to your stack.</li>
              </ol>

              <div className="p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Calibrate difficulty by level; keep the same rubric across candidates.
                </p>
              </div>
            </section>

            <section id="question-banks" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">7) Question Banks</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">SQL (use CTEs, clear naming; judge correctness + readability)</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Top‑N per group with tie handling</li>
                    <li>• 7‑day rolling metrics; month‑over‑month growth</li>
                    <li>• Deduplicate latest record by user and source</li>
                    <li>• Cohort retention: cohort vs weeks‑since index</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Analytics Case (prompts)</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Sign‑ups down 12% WoW. Is it acquisition, conversion, or tracking?</li>
                    <li>• Which marketing channel portfolio maximizes LTV at a fixed CAC target?</li>
                    <li>• Free‑to‑paid conversion is flat; propose analyses and experiments.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">BI/Visualization</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Show a cluttered dashboard; ask for a storyboard: title → key visuals → callouts.</li>
                    <li>• Ask candidate to define a KPI card with filters and drill‑downs.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Product Sense & Experimentation</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Design an A/B for onboarding checklist; define primary metric, MDE, guardrails.</li>
                    <li>• Interpret output with CIs; discuss trade‑offs and next steps.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Communication/Behavioral (STAR)</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Conflict over metric definition; how did you resolve it?</li>
                    <li>• A time you made a mistake in analysis—what changed afterward?</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="take-home" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">8) Take‑Home Assignment (Optional) + Rubric</h2>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Design</h3>
                <p className="text-muted-foreground">2–4 hours max; provide realistic but <strong>small</strong> dataset; allow SQL or notebooks; ask for an executive summary (≤200 words) + reproducible steps.</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Prompt (example)</h3>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-sm text-muted-foreground italic">
                    "You're analyzing a 3‑month conversion drop on our checkout. Provide a weekly KPI view, segment by device and channel, identify top 2 drivers, and propose 2 experiments. Include assumptions and risks."
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Rubric (0–3 each; target ≥11/18)</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• <strong>Business Understanding:</strong> frames goal, states assumptions</li>
                  <li>• <strong>Data Hygiene:</strong> nulls/outliers handled; joins validated</li>
                  <li>• <strong>SQL/Code Quality:</strong> readable, modular; correct edge cases</li>
                  <li>• <strong>Insights & Recommendations:</strong> specific, testable, prioritized</li>
                  <li>• <strong>Visualization:</strong> clean, labeled, purposeful</li>
                  <li>• <strong>Reproducibility:</strong> clear README; environment/versions noted</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Anti‑cheat</h3>
                <p className="text-muted-foreground">Unique datasets, rotate variants, ask live follow‑up.</p>
              </div>
            </section>

            <section id="scorecards" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">9) Scorecards & Decision Framework</h2>
              <p className="text-muted-foreground mb-6">Use structured scorecards per interview; decide on <strong>evidence</strong>, not averages.</p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Scorecard dimensions</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Business Acumen (0–3)</li>
                  <li>• SQL & Modeling (0–3)</li>
                  <li>• Statistics/Experimentation (0–3)</li>
                  <li>• Visualization/Storytelling (0–3)</li>
                  <li>• Collaboration/Communication (0–3)</li>
                  <li>• Overall Recommendation (Strong No → Strong Yes)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Hiring bar</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Define 'must‑haves' vs 'nice‑to‑haves'. A single <strong>must‑have miss</strong> = No hire.</li>
                  <li>• Use a brief debrief meeting; the hiring manager makes the final call with notes.</li>
                </ul>
              </div>
            </section>

            <section id="compensation" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">10) Compensation, Titles & Career Ladders (Guidance)</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Calibrate titles conservatively; align with scope and expected autonomy.</li>
                <li>• Comp mix: base + bonus; equity for growth roles. Publish bands where possible.</li>
                <li>• Provide growth paths: Analyst → Senior → Lead/Manager → Principal.</li>
                <li>• Avoid 'one‑person data team' under‑leveling; pay for the expected breadth.</li>
              </ul>
            </section>

            <section id="dei" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">11) DEI, Bias Reduction & Candidate Experience</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Structured interviews</strong> with consistent prompts and rubrics.</li>
                <li>• <strong>Work samples over resumes</strong>; de‑emphasize pedigree/brand names.</li>
                <li>• <strong>Inclusive JDs</strong> and sourcing; diverse interview panels.</li>
                <li>• <strong>Humane process:</strong> clear timelines, prep guides, and prompt feedback.</li>
              </ul>
            </section>

            <section id="references" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">12) Reference Checks (What to Ask)</h2>
              <div className="bg-card border border-border rounded-lg p-4 space-y-2 text-sm">
                <p>"What business outcomes did they directly influence?"</p>
                <p>"How did they handle ambiguous asks and conflicting stakeholders?"</p>
                <p>"Would you rehire them? At what level and why?"</p>
              </div>
            </section>

            <section id="offer-strategy" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">13) Offer Strategy & Closing</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Move quickly with a written summary of scope, manager, and 90‑day goals.</li>
                <li>• Share team artifacts (dashboards, docs) to make work tangible.</li>
                <li>• Be transparent on growth expectations and evaluation cadence.</li>
              </ul>
            </section>

            <section id="onboarding" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">14) Onboarding: 30/60/90 for New Analysts</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>0–30 days:</strong> meet stakeholders, access secured, metric dictionary reviewed, ship one small dashboard; log data quality issues.</li>
                <li><strong>31–60 days:</strong> own a KPI; establish weekly reporting; document definitions; fix 1–2 data quality issues.</li>
                <li><strong>61–90 days:</strong> ship an experiment or strategic analysis; present QBR‑style deck; propose analytics roadmap.</li>
              </ul>
            </section>

            <section id="success-metrics" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">15) Success Metrics & First‑Year Outcomes</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Time‑to‑first‑insight (TTI) and dashboard adoption</li>
                <li>• % of decisions supported by data (tracked in product/ops reviews)</li>
                <li>• Experiment cadence and win rate; KPI movement tied to recommendations</li>
                <li>• Data quality SLAs met; definition disputes reduced</li>
              </ul>
            </section>

            <section id="pitfalls" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">16) Common Pitfalls (and How to Avoid Them)</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Vague JD</strong> → Tie to specific business outcomes and KPIs.</li>
                <li>• <strong>Tool checklist interviews</strong> → Use real scenarios and scorecards.</li>
                <li>• <strong>Oversized take‑homes</strong> → Keep ≤4 hours and score reproducibility.</li>
                <li>• <strong>No definitions governance</strong> → Empower analysts to own a metric dictionary.</li>
                <li>• <strong>Hiring too senior/too junior</strong> → Match level to scope and support available.</li>
              </ul>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Great hiring is a process, not a guess. Keep iterating, measure outcomes, and raise the bar with every hire.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}