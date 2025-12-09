import Link from 'next/link';
import Header from '@/components/Header';

const categories = [
  {
    title: 'Digitizing Services',
    description:
      'Preserve tapes, film, and photos with trusted digitizing partners carefully vetted by our editors.',
    link: '/digitizing/best-digitizing-services',
    badge: 'HeritageBox Featured',
  },
  {
    title: 'Affordable Housing & Section 8',
    description:
      'Practical guides and tools for finding Section 8 and affordable rentals without the confusion.',
    link: '/housing/section-8-housing',
    badge: 'Casa8 Featured',
  },
  {
    title: 'Baby Name Generators',
    description:
      'Evidence-based name ideas powered by AI, with meaning, trends, and cultural context.',
    link: '/baby-names/best-baby-name-generators',
    badge: 'AIBabyNamer Featured',
  },
  {
    title: 'AI Marketing & Automation',
    description:
      'Deep reviews of AI agencies and tools that actually move revenue, not vanity metrics.',
    link: '/ai-marketing/best-ai-marketing-agencies',
    badge: 'Coregent Solutions Featured',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      {/* Hero */}
      <main className="mx-auto max-w-6xl px-4 pb-20 pt-12 md:pt-16">
        <section className="grid gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Independent product & service reviews
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 md:text-5xl lg:text-[3.25rem]">
              Smarter decisions for
              <span className="block text-emerald-600">everyday consumers</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              SmartConsumerInsight is a research-driven review publication. We compare real
              products and services side‑by‑side so you can skip the noise and go straight to
              what works.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/digitizing/best-digitizing-services"
                className="rounded-lg bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                View top digitizing services
              </Link>
              <Link
                href="/housing/section-8-housing"
                className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
              >
                Explore housing guides
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Editorial scoring, not pay‑to‑play rankings
              </span>
              <span className="hidden h-4 w-px bg-slate-300 md:inline" />
              <span className="hidden md:inline">
                Updated regularly as pricing and features change
              </span>
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Featured categories
            </p>
            <ul className="mt-3 space-y-3 text-sm">
              {categories.slice(0, 3).map((category) => (
                <li key={category.link} className="group flex items-start justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 transition hover:border-emerald-200 hover:bg-emerald-50">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {category.title}
                    </p>
                    <p className="mt-1 text-xs text-slate-600 line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                  <Link
                    href={category.link}
                    className="mt-1 text-xs font-semibold text-emerald-600 opacity-0 transition group-hover:opacity-100"
                  >
                    View →
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              Every guide is written from hands‑on testing, structured scorecards, and
              transparent methodology.
            </p>
          </aside>
        </section>

        {/* Category grid */}
        <section className="mt-16 border-t border-slate-200 pt-10 md:mt-20 md:pt-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Deep‑dive review hubs
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
                Start with a category below to see our ranked shortlists, comparison tables,
                and full editorial notes.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.link}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-500">
                    {category.badge}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {category.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs font-medium text-slate-600">
                  <span className="inline-flex items-center gap-1 text-emerald-600 group-hover:text-emerald-700">
                    View the rankings
                    <span aria-hidden>→</span>
                  </span>
                  <span className="text-slate-400">Updated {new Date().getFullYear()}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section className="mt-16 border-t border-slate-200 pt-10 md:mt-20 md:pt-14">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                How we review
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                Our goal is to make SmartConsumerInsight feel like having a trusted operator
                in every category you care about—testing services the way you actually use them.
              </p>
            </div>
            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <p className="font-semibold text-slate-900">Hands‑on evaluation</p>
                <p className="mt-1 text-slate-600">
                  We sign up, purchase, or demo each service, documenting the full experience
                  from onboarding to support.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Structured scorecards</p>
                <p className="mt-1 text-slate-600">
                  Every pick is graded on clear criteria: value, reliability, usability,
                  support, and long‑term ownership.
                </p>
              </div>
            </div>
            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <p className="font-semibold text-slate-900">Independence first</p>
                <p className="mt-1 text-slate-600">
                  Partnerships never dictate rankings. If we feature a brand we own, it is
                  clearly labeled and must earn its spot.
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Always being updated</p>
                <p className="mt-1 text-slate-600">
                  Pricing, features, and competitors move fast. Our editors revisit
                  recommendations on a set schedule.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-slate-200 py-8 text-xs text-slate-500">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} SmartConsumerInsight.com. Independent reviews. No
              pay‑to‑play rankings.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/about" className="hover:text-slate-700">
                About
              </Link>
              <Link href="/privacy" className="hover:text-slate-700">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-slate-700">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-slate-700">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
