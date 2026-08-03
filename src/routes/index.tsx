import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { StepLogo } from "@/components/StepLogo";
import { hubGroups, socialLinks, whatsappUrl, type HubLink } from "@/lib/step-links";
import spaceHero from "@/assets/space-hero.jpg";
import robotMascot from "@/assets/robot-mascot.png";

const TITLE = "STEP Educação — Central de acessos";
const DESCRIPTION =
  "Plataformas, materiais e canais de suporte da STEP Educação reunidos em um único lugar.";

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
    <div className="min-h-screen bg-step-navy-deep text-white">
      <header className="relative overflow-hidden pb-20">
        <img
          src={spaceHero}
          alt="Fundo espacial STEP"
          width={1920}
          height={1088}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in oklab, var(--step-navy-deep) 45%, transparent), transparent 40%, var(--step-navy-deep))",
          }}
        />

        <div className="fixed inset-x-0 top-0 z-40 px-4 py-4">
          <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full bg-white/95 border border-white/10 px-5 py-3 shadow-2xl backdrop-blur-xl sm:px-7">
            <a href="#topo" className="flex items-center" aria-label="STEP Educação — início">
              <StepLogo />
            </a>

            <div className="hidden items-center gap-7 text-sm font-medium text-step-navy md:flex">
              {hubGroups.map((group) => (
                <a key={group.id} href={`#${group.id}`} className="transition-opacity hover:opacity-70">
                  {group.label}
                </a>
              ))}
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display rounded-full bg-step-red px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-transform duration-200 hover:bg-step-red-hover active:scale-[0.97]"
            >
              Entrar em contato
            </a>
          </nav>
        </div>

        <div className="relative z-10 mx-auto grid max-w-5xl gap-8 px-5 pt-28 md:grid-cols-[1.1fr_0.9fr] md:pt-32">
          <div className="max-w-xl">
            <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-step-yellow">
              Tudo da STEP em um só lugar
            </p>
            <h1 className="font-display mt-4 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl">
              Central de acessos
              <br />
              STEP Educação
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80">
              Plataformas, materiais, formações e suporte reunidos em uma única página. Salve este link e acesse tudo com
              facilidade.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#plataformas"
                className="inline-flex items-center gap-2 rounded-full bg-step-red px-7 py-3.5 text-sm font-bold text-white transition-transform duration-200 hover:bg-step-red-hover active:scale-[0.97]"
              >
                Ver todos os acessos
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20"
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
              className="animate-float-slow w-72 max-w-full drop-shadow-2xl sm:w-80 md:w-full md:max-w-[400px]"
            />
          </div>
        </div>
      </header>

      <main className="relative -mt-14 pb-20">
        <div className="mx-auto max-w-5xl space-y-14 px-5">
          {hubGroups.map((group) => (
            <section key={group.id} id={group.id} className="scroll-mt-28">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-step-red" />
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

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div className="flex items-center justify-center gap-3 rounded-full bg-white/10 px-4 py-2 sm:justify-start">
            <StepLogo className="h-8" />
          </div>

          <div className="flex items-center justify-center gap-3 sm:justify-start">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <p className="text-xs text-white/50">STEP Educação © {new Date().getFullYear()}</p>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-step-green text-white shadow-2xl transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
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
      className="group flex min-h-[180px] flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-xl"
          style={{ backgroundColor: `color-mix(in oklab, ${color} 22%, transparent)` }}
        >
          <Icon className="h-5 w-5" style={{ color }} />
        </span>
        <ArrowUpRight className="h-5 w-5 text-white/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
      </div>

      <div className="mt-4">
        <h3 className="font-display text-base font-bold text-white">{link.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-white/70">{link.description}</p>
      </div>
    </a>
  );
}
