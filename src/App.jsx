import React from "react";

const strengths = [
  "15+ years across audit, risk, finance, and governance",
  "Experienced in audits, investigations, reconciliations, and control review",
  "Trusted for clear reporting, sound judgment, and practical recommendations",
  "Building a platform around writing, learning, and thoughtful professional growth",
];

export default function JacquelineEvansLesseWebsite() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[linear-gradient(180deg,#fff8fc_0%,#ffffff_18%,#fffdf7_55%,#f7fbff_100%)] text-slate-700">
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-10 lg:px-12">
        <header className="mb-16 flex flex-col gap-6 border-b border-violet-100 pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-violet-500">
              Jacqueline Evans-Lesse
            </div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-800 md:text-5xl">
              Audit. <span className="bg-gradient-to-r from-violet-700 via-fuchsia-600 to-amber-500 bg-clip-text text-transparent">Insight.</span> Integrity.
            </h1>
          </div>

          <nav className="flex flex-wrap gap-4 text-sm text-slate-600 md:justify-end">
            <a href="#about" className="transition hover:text-violet-700">About</a>
            <a href="#work" className="transition hover:text-fuchsia-700">Work</a>
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
                I help people and organizations{" "}
                <span className="bg-gradient-to-r from-violet-700 via-fuchsia-600 to-amber-500 bg-clip-text text-transparent">
                  find what matters.
                </span>
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-violet-900/80 md:text-xl">
                Risk. Control gaps. Process breakdowns. Hidden friction. I look closely, ask better questions, and turn complexity into clarity.
              </p>
              <p className="max-w-2xl leading-8 text-slate-600">
                This site is the home for my professional work, writing, future courses, and ideas for thoughtful people building stronger systems and stronger careers.
              </p>
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
                <div className="text-sm uppercase tracking-[0.28em] text-fuchsia-500">
                  Core strengths
                </div>
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
        </section>

        <section id="about" className="border-t border-violet-100 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-fuchsia-500">
                About
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-800 md:text-4xl">
                Thoughtful work,{" "}
                <span className="bg-gradient-to-r from-violet-700 via-fuchsia-600 to-amber-500 bg-clip-text text-transparent">
                  clearly communicated.
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                I am an internal audit and risk professional with more than 15 years of experience across financial services, governance, compliance, operational review, and finance.
              </p>
              <p>
                My work focuses on helping organizations understand where risk exists, where controls break down, and how systems can be strengthened.
              </p>
              <p>
                Over time, this site will also become a home for my writing, teaching, and practical resources for professionals who want to think more clearly and work more effectively.
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="border-t border-violet-100 py-20">
          <div className="mb-10">
            <div className="text-sm uppercase tracking-[0.28em] text-fuchsia-500">
              Work
            </div>
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

        <section id="courses" className="border-t border-violet-100 py-20">
          <div className="mb-10">
            <div className="text-sm uppercase tracking-[0.28em] text-fuchsia-500">
              Courses
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-800 md:text-4xl">
              Courses designed to sharpen how you think, write, and lead.
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-600">
              Practical, experience-informed learning for professionals working in audit, risk, governance, and complex decision-making environments.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-violet-200 bg-gradient-to-br from-violet-50 to-white p-7 shadow-lg">
              <div className="inline-flex rounded-full border border-violet-200 bg-violet-100 px-3 py-1 text-xs uppercase tracking-[0.22em] text-violet-700">
                Now Enrolling
              </div>
              <h3 className="mt-4 text-2xl font-medium text-slate-800">
                Executive-Ready Audit Writing
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Learn how to write audit observations and reports that are clear, persuasive, and taken seriously by leadership.
              </p>
              <div className="mt-4 text-sm font-medium text-violet-700">
                Early Access Pricing: CAD $97
              </div>
              <div className="mt-6 flex gap-3">
                <button className="rounded-2xl border border-violet-200 px-5 py-3 text-sm font-medium text-violet-700 hover:bg-violet-50">
                  Learn More
                </button>
                <a
                  href="mailto:jcevans26@yahoo.com?subject=Enroll in Executive-Ready Audit Writing"
                  className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 text-sm font-medium text-white"
                >
                  Enroll Now
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-7">
              <div className="inline-flex rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs uppercase tracking-[0.22em] text-sky-700">
                Upcoming
              </div>
              <h3 className="mt-4 text-2xl font-medium text-slate-800">
                Internal Controls, Clearly Explained
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                A practical, plain-language approach to understanding, evaluating, and improving internal controls.
              </p>
              <div className="mt-4 text-sm font-medium text-sky-700">
                Request Early Pricing
              </div>
              <div className="mt-6 flex gap-3">
                <button className="rounded-2xl border border-sky-200 px-5 py-3 text-sm font-medium text-sky-700 hover:bg-sky-50">
                  Learn More
                </button>
                <a
                  href="mailto:jcevans26@yahoo.com?subject=Interest in Internal Controls Course"
                  className="rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 px-5 py-3 text-sm font-medium text-white"
                >
                  Request Early Pricing
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-7">
              <div className="inline-flex rounded-full border border-amber-200 bg-amber-100 px-3 py-1 text-xs uppercase tracking-[0.22em] text-amber-700">
                Upcoming
              </div>
              <h3 className="mt-4 text-2xl font-medium text-slate-800">
                Judgment & Investigative Thinking
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Develop sharper professional judgment and the ability to recognize patterns, risks, and red flags early.
              </p>
              <div className="mt-4 text-sm font-medium text-amber-700">
                Request Early Pricing
              </div>
              <div className="mt-6 flex gap-3">
                <button className="rounded-2xl border border-amber-200 px-5 py-3 text-sm font-medium text-amber-700 hover:bg-amber-50">
                  Learn More
                </button>
                <a
                  href="mailto:jcevans26@yahoo.com?subject=Interest in Judgment & Investigative Thinking Course"
                  className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-3 text-sm font-medium text-white"
                >
                  Request Early Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-violet-100 py-20">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-fuchsia-500">
                Contact
              </div>
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