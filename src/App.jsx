import React from "react";

const featuredPosts = [
  {
    title: "How strong controls create stronger organizations",
    description:
      "Clear systems, clear ownership, and clear reporting are often the difference between friction and forward motion.",
    link: "#blog",
    tone: "violet",
  },
  {
    title: "What risk really looks like in day-to-day operations",
    description:
      "Risk is not always dramatic. Often it hides in routine exceptions, unclear approvals, and small breakdowns over time.",
    link: "#blog",
    tone: "rose",
  },
  {
    title: "Thoughtful work in a complex world",
    description:
      "Why judgment, clarity, and integrity still matter in leadership, governance, and professional life.",
    link: "#blog",
    tone: "amber",
  },
];

const courseIdeas = [
  {
    title: "Audit Writing That Gets Read",
    description:
      "A practical course on writing clear, persuasive, executive-ready audit observations and reports.",
    tone: "violet",
  },
  {
    title: "Internal Controls, Explained Simply",
    description:
      "A plain-language course for professionals who want to understand control design, breakdowns, and improvement.",
    tone: "sky",
  },
  {
    title: "Professional Judgment and Investigative Thinking",
    description:
      "A course on asking better questions, spotting patterns, and communicating issues with credibility.",
    tone: "amber",
  },
];

const strengths = [
  "15+ years across audit, risk, finance, and governance",
  "Experienced in audits, investigations, reconciliations, and control review",
  "Trusted for clear reporting, sound judgment, and practical recommendations",
  "Building a platform around writing, learning, and thoughtful professional growth",
];

const toneMap = {
  violet: {
    card: "from-violet-50 via-white to-fuchsia-50 border-violet-200",
    hover: "hover:shadow-violet-100 hover:border-violet-300",
    softText: "text-violet-700",
    pill: "bg-violet-100 text-violet-700 border-violet-200",
    button: "border-violet-200 hover:bg-violet-50 hover:text-violet-800",
  },
  rose: {
    card: "from-rose-50 via-white to-pink-50 border-rose-200",
    hover: "hover:shadow-rose-100 hover:border-rose-300",
    softText: "text-rose-700",
    pill: "bg-rose-100 text-rose-700 border-rose-200",
    button: "border-rose-200 hover:bg-rose-50 hover:text-rose-800",
  },
  amber: {
    card: "from-amber-50 via-white to-orange-50 border-amber-200",
    hover: "hover:shadow-amber-100 hover:border-amber-300",
    softText: "text-amber-700",
    pill: "bg-amber-100 text-amber-700 border-amber-200",
    button: "border-amber-200 hover:bg-amber-50 hover:text-amber-800",
  },
  sky: {
    card: "from-sky-50 via-white to-cyan-50 border-sky-200",
    hover: "hover:shadow-sky-100 hover:border-sky-300",
    softText: "text-sky-700",
    pill: "bg-sky-100 text-sky-700 border-sky-200",
    button: "border-sky-200 hover:bg-sky-50 hover:text-sky-800",
  },
};

function SectionLabel({ children }) {
  return (
    <div className="text-sm uppercase tracking-[0.28em] text-fuchsia-500">
      {children}
    </div>
  );
}

function GradientWord({ children }) {
  return (
    <span className="bg-gradient-to-r from-violet-700 via-fuchsia-600 to-amber-500 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

export default function JacquelineEvansLesseWebsite() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#fff8fc_0%,#ffffff_18%,#fffdf7_55%,#f7fbff_100%)] text-slate-700">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[44rem] opacity-100">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(217,70,239,0.14),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.14),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.16),transparent_26%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-8 md:px-10 lg:px-12">
        <header className="mb-16 flex flex-col gap-6 border-b border-violet-100 pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-violet-500">
              Jacqueline Evans-Lesse
            </div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-800 md:text-5xl">
              Audit. <GradientWord>Insight.</GradientWord> Integrity.
            </h1>
          </div>

          <nav className="flex flex-wrap gap-4 text-sm text-slate-600 md:justify-end">
            <a href="#about" className="transition hover:text-violet-700">About</a>
            <a href="#work" className="transition hover:text-fuchsia-700">Work</a>
            <a href="#blog" className="transition hover:text-rose-700">Blog</a>
            <a href="#newsletter" className="transition hover:text-violet-700">Newsletter</a>
            <a href="#courses" className="transition hover:text-amber-700">Courses</a>
            <a href="#contact" className="transition hover:text-sky-700">Contact</a>
          </nav>
        </header>

        <section className="grid gap-10 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-fuchsia-200 bg-gradient-to-r from-violet-50 via-fuchsia-50 to-amber-50 px-4 py-2 text-sm text-violet-700 shadow-sm">
              Internal Audit • Governance • Investigations • Writing
            </div>

            <div className="space-y-5">
              <h2 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-slate-800 md:text-6xl">
                I help people and organizations <GradientWord>find what matters.</GradientWord>
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-violet-900/80 md:text-xl">
                Risk. Control gaps. Process breakdowns. Hidden friction. I look closely, ask better questions, and turn complexity into clarity.
              </p>
              <p className="max-w-2xl leading-8 text-slate-600">
                This site is the home for my professional work, writing, future courses, and ideas for thoughtful people building stronger systems and stronger careers.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#newsletter"
                className="rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 px-6 py-3 font-medium text-white shadow-lg shadow-fuchsia-200 transition hover:scale-[1.01]"
              >
                Join the newsletter
              </a>
              <a
                href="#blog"
                className="rounded-2xl border border-violet-200 bg-white/80 px-6 py-3 font-medium text-violet-700 transition hover:bg-violet-50 hover:text-violet-800"
              >
                Read the blog
              </a>
              <a
                href="#courses"
                className="rounded-2xl border border-sky-200 bg-white/80 px-6 py-3 font-medium text-sky-700 transition hover:bg-sky-50 hover:text-sky-800"
              >
                Explore courses
              </a>
            </div>
          </div>

          <div className="grid gap-6">
  <div className="overflow-hidden rounded-[2rem] border border-fuchsia-100 bg-white/80 shadow-2xl shadow-fuchsia-100/70 backdrop-blur-sm">
    <img
      src="/hero.jpg"
      alt="Jacqueline Evans-Lesse"
      className="h-full w-full object-cover"
    />
  </div>

  <div className="rounded-[2rem] border border-violet-100 bg-white/80 p-8 shadow-2xl shadow-violet-100/70 backdrop-blur-sm">
    <div className="mb-5 flex items-center justify-between gap-3">
      <SectionLabel>Core strengths</SectionLabel>
      <span className="rounded-full bg-gradient-to-r from-violet-100 via-fuchsia-100 to-amber-100 px-3 py-1 text-xs font-medium text-fuchsia-700">
        Strategic + Human
      </span>
    </div>
    <div className="space-y-3">
      {strengths.map((item, index) => (
        <div
          key={item}
          className={`rounded-2xl border bg-gradient-to-r px-4 py-3 text-sm leading-7 text-slate-700 ${
            index === 0
              ? "from-violet-50/70 to-white border-violet-100"
              : index === 1
              ? "from-rose-50/70 to-white border-rose-100"
              : index === 2
              ? "from-sky-50/70 to-white border-sky-100"
              : "from-amber-50/70 to-white border-amber-100"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  </div>
</div>

                  <div className="text-center">
                    <h3 className="bg-gradient-to-r from-violet-700 via-fuchsia-600 to-amber-500 bg-clip-text text-2xl font-semibold text-transparent">
                      Jacqueline Evans-Lesse
                    </h3>
                    <p className="mt-2 text-sm text-fuchsia-700/80">
                      Internal Audit • Risk • Governance • Investigations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-violet-100 bg-white/80 p-8 shadow-2xl shadow-violet-100/70 backdrop-blur-sm">
              <div className="mb-5 flex items-center justify-between gap-3">
                <SectionLabel>Core strengths</SectionLabel>
                <span className="rounded-full bg-gradient-to-r from-violet-100 via-fuchsia-100 to-amber-100 px-3 py-1 text-xs font-medium text-fuchsia-700">
                  Strategic + Human
                </span>
              </div>
              <div className="space-y-3">
                {strengths.map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-2xl border bg-gradient-to-r px-4 py-3 text-sm leading-7 text-slate-700 ${index === 0 ? "from-violet-50/70 to-white border-violet-100" : index === 1 ? "from-rose-50/70 to-white border-rose-100" : index === 2 ? "from-sky-50/70 to-white border-sky-100" : "from-amber-50/70 to-white border-amber-100"}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-violet-100 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionLabel>About</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-800 md:text-4xl">
                Thoughtful work, <GradientWord>clearly communicated.</GradientWord>
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                I am an internal audit and risk professional with more than 15 years of experience across financial services, governance, compliance, operational review, and finance.
              </p>
              <p>
                My work focuses on helping organizations understand where risk exists, where controls break down, and how systems can be strengthened. I care about thoughtful work — the kind that brings clarity, strengthens accountability, and supports better decision-making.
              </p>
              <p>
                Over time, this site will also become a home for my writing, teaching, and practical resources for professionals who want to think more clearly and work more effectively.
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="border-t border-violet-100 py-20">
          <div className="mb-10">
            <SectionLabel>Work</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-800 md:text-4xl">
              What I do, in simple terms.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-violet-200 bg-gradient-to-br from-violet-50 to-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-100">
              <h3 className="text-xl font-medium text-slate-800">Audit & Risk</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                I lead and support risk-based reviews that help organizations strengthen governance, controls, and operational effectiveness.
              </p>
            </div>

            <div className="rounded-[2rem] border border-rose-200 bg-gradient-to-br from-rose-50 to-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-100">
              <h3 className="text-xl font-medium text-slate-800">Investigations & Review</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                I examine anomalies, breakdowns, and control issues with a practical focus on clarity, accountability, and improvement.
              </p>
            </div>

            <div className="rounded-[2rem] border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-100">
              <h3 className="text-xl font-medium text-slate-800">Advisory & Communication</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                I translate complex issues into reports, observations, and recommendations that leaders can act on with confidence.
              </p>
            </div>
          </div>
        </section>

        <section id="blog" className="border-t border-violet-100 py-20">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>Blog</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-800 md:text-4xl">
                Writing on work, risk, judgment, and growth.
              </h2>
            </div>
            <a href="#newsletter" className="text-sm text-violet-600 underline-offset-4 hover:text-violet-800 hover:underline">
              Get new posts by email
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredPosts.map((post) => {
              const tone = toneMap[post.tone];
              return (
                <a
                  key={post.title}
                  href={post.link}
                  className={`rounded-[2rem] border bg-gradient-to-br p-7 transition hover:-translate-y-1 hover:shadow-xl ${tone.card} ${tone.hover}`}
                >
                  <div className="text-xs uppercase tracking-[0.25em] text-fuchsia-500">Article</div>
                  <h3 className="mt-4 text-2xl font-medium tracking-tight text-slate-800">{post.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {post.description}
                  </p>
                  <div className={`mt-6 text-sm font-medium ${tone.softText}`}>
                    Read more
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section id="newsletter" className="border-t border-violet-100 py-20">
          <div className="rounded-[2rem] border border-fuchsia-100 bg-gradient-to-br from-violet-50/70 via-white to-amber-50/70 p-8 shadow-xl shadow-fuchsia-100/50 md:p-10">
            <div className="max-w-3xl space-y-5">
              <SectionLabel>Newsletter</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-800 md:text-4xl">
                Notes on better work, <GradientWord>clearer thinking,</GradientWord> and stronger systems.
              </h2>
              <p className="leading-8 text-slate-600">
                Join my newsletter for essays, practical insights, and thoughtful observations on audit, risk, leadership, and professional growth.
              </p>
            </div>

            <form className="mt-8 flex flex-col gap-4 md:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-2xl border border-violet-200 bg-white px-5 py-4 text-slate-700 placeholder:text-slate-400 focus:border-fuchsia-300 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 px-6 py-4 font-medium text-white shadow-lg shadow-fuchsia-200 transition hover:opacity-90"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-4 text-sm text-fuchsia-600/80">
              You can later connect this form to ConvertKit, Mailchimp, Substack, or Beehiiv.
            </p>
          </div>
        </section>

        <section id="courses" className="border-t border-violet-100 py-20">
          <div className="mb-10">
            <SectionLabel>Courses</SectionLabel>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-800 md:text-4xl">
              Courses and learning resources you can sell from this site.
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-600">
              This section is designed so you can later add paid learning products, workshops, templates, or coaching offers without redesigning the site.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {courseIdeas.map((course) => {
              const tone = toneMap[course.tone];
              return (
                <div
                  key={course.title}
                  className={`rounded-[2rem] border bg-gradient-to-br p-7 transition hover:-translate-y-1 hover:shadow-xl ${tone.card} ${tone.hover}`}
                >
                  <div className={`inline-flex rounded-full border px-3 py-1 text-xs uppercase tracking-[0.22em] ${tone.pill}`}>
                    Coming soon
                  </div>
                  <h3 className="mt-4 text-2xl font-medium tracking-tight text-slate-800">{course.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{course.description}</p>
                  <button className={`mt-6 rounded-2xl border px-5 py-3 text-sm font-medium transition ${tone.button}`}>
                    Join waitlist
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        <section id="contact" className="border-t border-violet-100 py-20">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionLabel>Contact</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-800 md:text-4xl">
                Let’s connect.
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-600">
                I’m open to conversations about audit, governance, advisory work, writing, course ideas, and thoughtful professional collaboration.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:jcevans26@yahoo.com"
                className="block rounded-2xl border border-violet-100 bg-gradient-to-r from-violet-50 to-fuchsia-50/50 px-5 py-4 transition hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/50"
              >
                <div className="text-xs uppercase tracking-[0.25em] text-fuchsia-500">Email</div>
                <div className="mt-2 font-medium text-slate-800">jcevans26@yahoo.com</div>
              </a>

              <div className="rounded-2xl border border-amber-100 bg-gradient-to-r from-amber-50 to-white px-5 py-4">
                <div className="text-xs uppercase tracking-[0.25em] text-fuchsia-500">Resume</div>
                <div className="mt-2 font-medium text-slate-800">Available upon request</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}