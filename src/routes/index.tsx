import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { StepLogo } from "@/components/StepLogo";
import { hubGroups, socialLinks, whatsappUrl, type HubLink } from "@/lib/step-links";
import spaceHero from "@/assets/space-hero.jpg";
import robotMascot from "@/assets/robot-mascot.png";

const TITLE = "STEP Educação — Central de links e plataformas";
const DESCRIPTION =
  "Um só endereço para acessar todas as plataformas, materiais e canais de suporte da STEP Educação.";

export const Route = createFileRoute("/")({
  component: HubPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const accentVar: Record<HubLink["accent"], string> = {
  red: "var(--step-red)",
  yellow: "var(--step-yellow)",
  cyan: "var(--step-cyan)",
  green: "var(--step-green)",
};

function HubPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--step-navy-deep)" }}>
      <Hero />
      <LinksSection />
      <SiteFooter />
      <WhatsappButton />
    </div>
  );
}

/* ─── Hero espacial ─── */
function Hero() {
  return (
    <header className="relative overflow-hidden pb-28" style={{ backgroundColor: "var(--step-navy-deep)" }}>
      <img
        src={spaceHero}
        alt=""
        width={1920}
        height={1088}
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in oklab, var(--step-navy-deep) 45%, transparent), transparent 40%, var(--step-navy-deep))",
        }}
      />

      {/* Navbar pílula */}
      <div className="relative z-20 px-4 pt-5">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full bg-white px-5 py-3 shadow-2xl sm:px-7">
          <a href="#topo" className="flex items-center" aria-label="STEP Educação — início">
            <StepLogo />
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium md:flex" style={{ color: "var(--step-navy)" }}>
            {hubGroups.map((g) => (
              <a key={g.id} href={`#${g.id}`} className="transition-opacity hover:opacity-60">
                {g.label}
              </a>
            ))}
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-transform duration-200 active:scale-[0.97]"
            style={{ backgroundColor: "var(--step-red)" }}
          >
            Entrar em contato
          </a>
        </nav>
      </div>

      {/* Conteúdo */}
      <div
        id="topo"
        className="relative z-10 mx-auto grid max-w-5xl items-center gap-8 px-5 pt-16 md:grid-cols-[1.15fr_0.85fr] md:pt-20"
      >
        <div>
          <p
            className="font-display text-sm font-bold uppercase tracking-[0.18em]"
            style={{ color: "var(--step-yellow)" }}
          >
            Tudo da STEP em um só lugar
          </p>
          <h1 className="font-display mt-4 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl">
            Central de acessos
            <br />
            STEP Educação
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/80">
            Plataformas, materiais, formações e suporte reunidos em uma única página. Guarde este link e chegue
            direto onde precisa.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#plataformas"
              className="font-display inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-transform duration-200 active:scale-[0.97]"
              style={{ backgroundColor: "var(--step-red)" }}
            >
              Ver todos os acessos
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20"
            >
              Falar com especialista
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <img
            src={robotMascot}
            alt="Mascote robô da STEP"
            width={1200}
            height={1408}
            className="animate-float-slow w-52 max-w-full drop-shadow-2xl sm:w-64 md:w-full md:max-w-[300px]"
          />
        </div>
      </div>
    </header>
  );
}

/* ─── Links agrupados ─── */
function LinksSection() {
  return (
    <main className="relative -mt-16 pb-20">
      <div className="mx-auto max-w-5xl space-y-14 px-5">
        {hubGroups.map((group) => (
          <section key={group.id} id={group.id} className="scroll-mt-28">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "var(--step-red)" }} />
              <h2 className="font-display text-xl font-bold text-white sm:text-2xl">{group.label}</h2>
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.links.map((link) => (
                <li key={link.title}>
                  <LinkCard link={link} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}

function LinkCard({ link }: { link: HubLink }) {
  const color = accentVar[link.accent];
  const Icon = link.icon;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08]"
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-xl"
          style={{ backgroundColor: `color-mix(in oklab, ${color} 22%, transparent)` }}
        >
          <Icon className="h-5 w-5" style={{ color }} />
        </span>
        <ArrowUpRight className="h-5 w-5 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
      </div>

      <h3 className="font-display mt-4 text-base font-bold text-white">{link.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-white/60">{link.description}</p>
    </a>
  );
}

/* ─── Rodapé ─── */
function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-5 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="rounded-full bg-white px-4 py-2">
          <StepLogo />
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <p className="text-xs text-white/50">
          STEP Educação © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

/* ─── WhatsApp flutuante ─── */
function WhatsappButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-2xl transition-transform duration-200 hover:scale-105 active:scale-95"
      style={{ backgroundColor: "var(--step-green)" }}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
