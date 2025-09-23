"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function DataAnalysisTipsPage() {
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
          <h1 className="text-4xl font-bold text-foreground mb-6">Data Analysis Tips</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Practical, battle‑tested advice to make your analyses faster, clearer, and more impactful—whether you're working in spreadsheets, SQL, Python/R, or a BI tool.
          </p>

          <div className="prose prose-lg max-w-none">
            <div className="bg-card border border-border rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Table of Contents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <ol className="space-y-1">
                  <li><a href="#principles" className="text-primary hover:underline">Principles & Mindset</a></li>
                  <li><a href="#workflow" className="text-primary hover:underline">Analysis Workflow</a></li>
                  <li><a href="#problem-framing" className="text-primary hover:underline">Problem Framing & Hypotheses</a></li>
                  <li><a href="#data-access" className="text-primary hover:underline">Data Access & Validation</a></li>
                  <li><a href="#cleaning" className="text-primary hover:underline">Cleaning & Preparation Checklist</a></li>
                  <li><a href="#eda" className="text-primary hover:underline">Exploratory Data Analysis (EDA)</a></li>
                  <li><a href="#metrics" className="text-primary hover:underline">Metrics & Definitions</a></li>
                  <li><a href="#sql-patterns" className="text-primary hover:underline">SQL Patterns That Save Time</a></li>
                  <li><a href="#python-r" className="text-primary hover:underline">Python/R Patterns for EDA</a></li>
                  <li><a href="#visualization" className="text-primary hover:underline">Visualization & Dashboard Craft</a></li>
                </ol>
                <ol start={11} className="space-y-1">
                  <li><a href="#experimentation" className="text-primary hover:underline">Experimentation & Causal Thinking</a></li>
                  <li><a href="#storytelling" className="text-primary hover:underline">Storytelling & Executive Summaries</a></li>
                  <li><a href="#stakeholder-comm" className="text-primary hover:underline">Stakeholder Communication</a></li>
                  <li><a href="#reproducibility" className="text-primary hover:underline">Reproducibility & Version Control</a></li>
                  <li><a href="#quality-assurance" className="text-primary hover:underline">Quality Assurance & Review</a></li>
                  <li><a href="#performance" className="text-primary hover:underline">Performance, Cost & Scale Tips</a></li>
                  <li><a href="#privacy-security" className="text-primary hover:underline">Privacy, Security & Data Ethics</a></li>
                  <li><a href="#pitfalls" className="text-primary hover:underline">Common Pitfalls</a></li>
                  <li><a href="#templates" className="text-primary hover:underline">Templates & Snippets</a></li>
                  <li><a href="#resources" className="text-primary hover:underline">Resources & Further Practice</a></li>
                </ol>
              </div>
              <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Keep it simple, test assumptions early, and show the <em>decision</em>, not just the data.
                </p>
              </div>
            </div>

            <section id="principles" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Principles & Mindset</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Decision‑centric:</strong> Start with the decision someone will make using your output. Work backwards.</li>
                <li><strong>Iterative:</strong> Ship small, verifiable increments. Validate direction before polishing.</li>
                <li><strong>Trustworthy by default:</strong> Show definitions, caveats, and sample sizes; add sanity checks.</li>
                <li><strong>Readable over clever:</strong> Prefer transparent SQL/plots to over‑optimized one‑liners.</li>
                <li><strong>Reproducible:</strong> Make it easy for someone else (or future you) to rerun the analysis.</li>
              </ul>
            </section>

            <section id="workflow" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Analysis Workflow (End‑to‑End)</h2>
              <ol className="space-y-2 text-muted-foreground">
                <li><strong>1. Clarify goal</strong> → what decision, which metric(s), by when, for whom.</li>
                <li><strong>2. Collect & validate</strong> → find tables/sources, row counts, date ranges, join keys.</li>
                <li><strong>3. Prepare</strong> → clean types, handle nulls/outliers, dedupe, normalize units.</li>
                <li><strong>4. Explore</strong> → distributions, segments, trends, cohort cuts, anomalies.</li>
                <li><strong>5. Model/Test</strong> → comparisons, statistical tests, experiments (if applicable).</li>
                <li><strong>6. Synthesize</strong> → insights → recommendations → impact estimate.</li>
                <li><strong>7. Deliver</strong> → doc + visuals + appendix; open a PR/dashboard link.</li>
                <li><strong>8. Follow‑through</strong> → track adoption; set a refresh cadence; note limitations.</li>
              </ol>
            </section>

            <section id="problem-framing" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Problem Framing & Hypotheses</h2>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li><strong>One‑liner brief:</strong> "We are investigating [X] because [Y outcome]. Success = [metric moves by Z]. Deadline: [date]."</li>
                <li><strong>Assumptions log:</strong> Note what must be true (e.g., tracking is accurate past N days).</li>
                <li><strong>Hypothesis set:</strong> 3–5 plausible drivers; define tests you'll run to validate each.</li>
                <li><strong>Scope guardrails:</strong> What you are <em>not</em> analyzing and why.</li>
              </ul>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Prompt examples</h3>
                <div className="bg-card border border-border rounded-lg p-4 space-y-2 text-sm">
                  <p>"Sign‑ups dropped 10% WoW; is it acquisition, conversion, or tracking?"</p>
                  <p>"Which channels drive highest LTV given last 6 months of cohorts?"</p>
                </div>
              </div>
            </section>

            <section id="data-access" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Data Access & Validation</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Row counts & ranges:</strong> Check min/max dates; spot gaps; confirm timezone handling.</li>
                <li><strong>Join keys:</strong> Cardinality checks (1:1? 1:N?); detect duplicate keys.</li>
                <li><strong>Freshness:</strong> Is the table batch or streaming? Lag vs dashboard expectations.</li>
                <li><strong>Sampling:</strong> Use LIMIT for scans, then expand. Validate on a small slice first.</li>
                <li><strong>Lineage:</strong> Note upstream sources; link to docs; track known quirks.</li>
              </ul>
            </section>

            <section id="cleaning" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Cleaning & Preparation Checklist</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Types:</strong> Cast strings→dates/ints; standardize currencies/units.</li>
                <li><strong>Nulls:</strong> Decide fill/drop rules; differentiate truly missing vs not applicable.</li>
                <li><strong>Outliers:</strong> Winsorize or cap with justification; keep raw stats in appendix.</li>
                <li><strong>Deduplication:</strong> Use composite keys + window functions to pick latest/first.</li>
                <li><strong>Dates/Time:</strong> Build a proper date spine; align to business weeks/timezones.</li>
                <li><strong>Text:</strong> Trim, lower/upper case normalization; regex for ids/emails; parse UTM.</li>
                <li><strong>IDs:</strong> Stable primary keys; avoid joining on names or descriptions.</li>
              </ul>
            </section>

            <section id="eda" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Exploratory Data Analysis (EDA)</h2>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li><strong>Start with shapes:</strong> n rows/cols, NA %, basic uniques, top categories.</li>
                <li><strong>Univariate plots:</strong> histograms, boxplots, ECDFs to see spread/outliers.</li>
                <li><strong>Bivariate cuts:</strong> segment by channel, plan, region; check Simpson's paradox.</li>
                <li><strong>Time series:</strong> moving averages, seasonality; annotate events/releases.</li>
                <li><strong>Cohorts:</strong> acquisition month/week; retention curves; revenue by tenure.</li>
                <li><strong>Anomaly scans:</strong> sudden spikes/drops; compare to prior periods & same weekday.</li>
              </ul>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Quick EDA questions</h3>
                <p className="text-muted-foreground">Are the main metrics stable? Any tracking breaks? Which 2 segments are most different? What's the simplest story the data tells?</p>
              </div>
            </section>

            <section id="metrics" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Metrics & Definitions (Build a Source of Truth)</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Definition doc:</strong> Name, formula, filters, grain, source tables, owner.</li>
                <li><strong>KPI types:</strong> level (count), rate (%), ratio (per user), change (∆), index (=100 baseline).</li>
                <li><strong>Guardrails:</strong> sanity ranges, data quality checks, min sample sizes.</li>
                <li><strong>Versioning:</strong> Track metric definition changes in Git and communicate widely.</li>
              </ul>
            </section>

            <section id="sql-patterns" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">SQL Patterns That Save Time</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Date spine + left join</h3>
                  <p className="text-muted-foreground mb-3">For complete time series (even when no events).</p>
                  <div className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm"><code>{`with dates as (
  select date_trunc('day', d)::date as d
  from generate_series('2025-01-01'::date, '2025-12-31'::date, interval '1 day') as gs(d)
)
select d.d, coalesce(sum(o.amount),0) as revenue
from dates d
left join orders o on o.order_date::date = d.d
group by 1
order by 1;`}</code></pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Top‑N per group</h3>
                  <p className="text-muted-foreground mb-3">Using window functions.</p>
                  <div className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm"><code>{`select category, product, revenue
from (
  select category, product, revenue,
         row_number() over (partition by category order by revenue desc) as rn
  from sales
) s where rn <= 3;`}</code></pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Dedup to latest record</h3>
                  <div className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm"><code>{`select * from (
  select *, row_number() over (partition by user_id order by updated_at desc) as rn
  from user_profile
) t where rn = 1;`}</code></pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Cohort retention skeleton</h3>
                  <div className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm"><code>{`with signup as (
  select user_id, date_trunc('week', signup_at)::date as cohort_week from users
),
activity as (
  select user_id, date_trunc('week', activity_at)::date as act_week from events
)
select s.cohort_week,
       date_diff('week', s.cohort_week, a.act_week) as weeks_since,
       count(distinct a.user_id) * 1.0 / count(distinct s.user_id) over (partition by s.cohort_week) as retention
from signup s
left join activity a using (user_id)
where a.act_week is not null;`}</code></pre>
                  </div>
                </div>
              </div>
            </section>

            <section id="python-r" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Python/R Patterns for EDA</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Python (pandas)</h3>
                  <div className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm"><code>{`import pandas as pd
import numpy as np

# Quick data health
summary = df.describe(include='all').T
summary['null_pct'] = df.isna().mean().round(3)

# Date spine join
date_index = pd.date_range(df.date.min(), df.date.max(), freq='D')
spine = pd.DataFrame({'date': date_index})
series = spine.merge(df.groupby('date', as_index=False)['revenue'].sum(), on='date', how='left').fillna(0)

# Cohort index
df['cohort'] = df['signup_at'].dt.to_period('W').apply(lambda r: r.start_time)
df['weeks_since'] = ((df['event_at'] - df['cohort']).dt.days // 7).clip(lower=0)`}</code></pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">R (tidyverse)</h3>
                  <div className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm"><code>{`library(dplyr)
library(lubridate)

summary <- df %>% summarise(across(everything(), list(nas = ~mean(is.na(.)))))
spine <- tibble(date = seq.Date(min(df$date), max(df$date), by = 'day'))
series <- spine %>% left_join(df %>% count(date, wt = revenue, name = 'revenue'), by='date') %>% mutate(revenue = coalesce(revenue, 0))`}</code></pre>
                  </div>
                </div>
              </div>
            </section>

            <section id="visualization" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Visualization & Dashboard Craft</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>One‑page narrative:</strong> Title states the takeaway; subtitle gives context.</li>
                <li><strong>Chart choice:</strong> bars for discrete comparisons, lines for trends, scatter for relationships, box/violin for distributions.</li>
                <li><strong>Reduce clutter:</strong> sort descending, limit categories, consistent units, direct labels.</li>
                <li><strong>Color with purpose:</strong> encode category or status; never rely solely on color for key info.</li>
                <li><strong>Interactivity:</strong> default to useful filters (time, segment); provide drill‑downs not overwhelm.</li>
                <li><strong>Refresh plan:</strong> state frequency, data freshness, and owner.</li>
              </ul>
            </section>

            <section id="experimentation" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Experimentation & Causal Thinking</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Before you run:</strong> define primary metric, MDE (minimum detectable effect), power, unit of randomization, and guardrails.</li>
                <li><strong>Sanity checks:</strong> sample ratio mismatch, pre‑period balance, invariant metrics.</li>
                <li><strong>Analysis:</strong> use CUPED/bucketing where appropriate; avoid peeking; report CI and p‑values alongside effect sizes.</li>
                <li><strong>When you can't A/B:</strong> use diff‑in‑diff, synthetic controls, or well‑argued observational designs.</li>
              </ul>
            </section>

            <section id="storytelling" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Storytelling & Executive Summaries</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>TL;DR first:</strong> 3–5 bullet takeaways; what changed, why, what to do.</li>
                <li><strong>Structure:</strong> Context → Insight → Recommendation → Impact estimate → Risks.</li>
                <li><strong>Numbers that matter:</strong> absolute impact (e.g., +$240k/quarter), not just relative %.</li>
                <li><strong>Visual callouts:</strong> annotate spikes, cutlines, and thresholds.</li>
              </ul>
            </section>

            <section id="stakeholder-comm" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Stakeholder Communication</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Intake questions:</strong> Who is the decision owner? Deadline? Must‑have vs nice‑to‑have?</li>
                <li><strong>Checkpoints:</strong> share a wireframe/mock before heavy lifting; confirm definitions.</li>
                <li><strong>Feedback loops:</strong> summarize agreements/open questions in writing; avoid rework.</li>
                <li><strong>Disagree & commit:</strong> propose the simplest shippable version to keep momentum.</li>
              </ul>
            </section>

            <section id="reproducibility" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Reproducibility & Version Control</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Project layout:</strong> <code>/data</code>, <code>/notebooks</code>, <code>/src</code>, <code>/reports</code>, <code>/docs</code>.</li>
                <li><strong>Environment:</strong> <code>requirements.txt</code>/<code>environment.yml</code>; pin versions.</li>
                <li><strong>Randomness:</strong> set seeds; record parameter configs.</li>
                <li><strong>Git hygiene:</strong> small commits with clear messages; PRs with context and screenshots.</li>
                <li><strong>Data contracts:</strong> define schemas & SLAs with producers; alert on breaks.</li>
              </ul>
            </section>

            <section id="quality-assurance" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Quality Assurance & Review</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Unit tests:</strong> for key transforms (e.g., revenue calc); validate joins (row counts before/after).</li>
                <li><strong>Spot checks:</strong> manual samples; compare against known dashboards/reports.</li>
                <li><strong>Edge cases:</strong> zero/negative values, leap days, DST shifts, late events.</li>
                <li><strong>Peer review:</strong> require at least one reviewer for logic and narrative.</li>
              </ul>
            </section>

            <section id="performance" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Performance, Cost & Scale Tips</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>SQL:</strong> project only needed columns; pre‑aggregate; use partitions & clustering well.</li>
                <li><strong>Pipelines:</strong> cache intermediate outputs; schedule off‑peak when possible.</li>
                <li><strong>BI:</strong> limit row counts in visuals; leverage extracts; avoid heavy cross‑joins.</li>
                <li><strong>Cloud costs:</strong> monitor query bytes scanned; set budgets and alerts.</li>
              </ul>
            </section>

            <section id="privacy-security" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Privacy, Security & Data Ethics</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Least privilege:</strong> restrict PII; separate keys & secrets; rotate access.</li>
                <li><strong>Minimize:</strong> collect only what's necessary; define retention & deletion.</li>
                <li><strong>De‑identify:</strong> hash or tokenize where possible; avoid pulling raw PII into notebooks.</li>
                <li><strong>Fairness:</strong> evaluate segment impacts; document trade‑offs and potential bias.</li>
              </ul>
            </section>

            <section id="pitfalls" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Common Pitfalls (and How to Avoid Them)</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>Metric drift:</strong> definition changes without comms → version metrics & broadcast changes.</li>
                <li><strong>Double counting:</strong> joins across multi‑touch tables → dedupe rules & unique keys.</li>
                <li><strong>Simpson's paradox:</strong> aggregated trend reverses in segments → always segment by 1–2 key dims.</li>
                <li><strong>Multiple comparisons:</strong> many cuts inflate false positives → adjust thresholds or pre‑register.</li>
                <li><strong>Bad denominators:</strong> rates without clear base population → define eligibility sets.</li>
                <li><strong>Timezones:</strong> mixing UTC and local → standardize then localize for display.</li>
              </ul>
            </section>

            <section id="templates" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Templates & Snippets</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Executive Summary (paste into PR or doc)</h3>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Goal & audience:</li>
                      <li>• Primary metric(s):</li>
                      <li>• Key findings (3 bullets):</li>
                      <li>• Recommendation(s):</li>
                      <li>• Expected impact (range + assumptions):</li>
                      <li>• Risks/limitations:</li>
                      <li>• Next steps & owners:</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Analysis Checklist (pre‑ship)</h3>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• [ ] Definitions confirmed & documented</li>
                      <li>• [ ] Freshness/row counts validated</li>
                      <li>• [ ] Edge cases tested</li>
                      <li>• [ ] Visuals labeled & legible</li>
                      <li>• [ ] Repro steps in README</li>
                      <li>• [ ] Peer review complete</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">SQL Review Mini‑Rubric</h3>
                  <p className="text-muted-foreground">Readability (CTEs, naming) / Correctness (joins, filters) / Performance (scans, predicates).</p>
                </div>
              </div>
            </section>

            <section id="resources" className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Resources & Further Practice</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>Practice datasets: make 2–3 small, realistic projects (KPIs, cohorts, A/B).</li>
                <li>Participate in community challenges; rewrite dashboards you admire.</li>
                <li>Teach what you learn—short posts sharpen thinking and build your portfolio.</li>
              </ul>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Great analysis is a service business:</strong> make it easy for others to act.
                </p>
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