import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { useLang, pickName } from "@/lib/i18n";
import { categories } from "@/lib/data";
import {
  ArrowRight,
  BadgeCheck,
  Eye,
  Handshake,
  HeartHandshake,
  Leaf,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Über uns – GARTEN-GESPANN" },
      {
        name: "description",
        content:
          "Erfahren Sie mehr über GARTEN-GESPANN, unser Sortiment für Garten, Transport und Heizung sowie unsere Werte.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t, lang } = useLang();

  const commitments = [
    {
      icon: ShieldCheck,
      title: t("aboutCommitmentQualityTitle"),
      text: t("aboutCommitmentQualityText"),
    },
    {
      icon: Scale,
      title: t("aboutCommitmentTransparencyTitle"),
      text: t("aboutCommitmentTransparencyText"),
    },
    {
      icon: HeartHandshake,
      title: t("aboutCommitmentSatisfactionTitle"),
      text: t("aboutCommitmentSatisfactionText"),
    },
    {
      icon: Handshake,
      title: t("aboutCommitmentSeriousnessTitle"),
      text: t("aboutCommitmentSeriousnessText"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <PageHeader title={t("about")} />

      <main className="flex-1">
        {/* Identity / Intro */}
        <section className="container mx-auto px-4 py-10 md:py-14">
          <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                <Leaf className="h-3.5 w-3.5 text-accent" />
                GARTEN-GESPANN
              </p>
              <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl">
                {t("heroTitle")}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {t("aboutIntroText")}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {t("aboutText")}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link to="/shop">
                  <Button size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
                    {t("heroCtaPrimary")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    {t("aboutCtaContact")}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/5 via-card to-accent/10 p-6 shadow-sm md:p-8">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-2xl" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-foreground md:text-xl">{t("aboutRange")}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                {t("aboutRangeText")}
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-2 text-sm text-foreground sm:grid-cols-2">
                {[
                  t("heroKicker"),
                  t("freeShippingShort"),
                  t("returns30"),
                  t("deliveryTime"),
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="border-y bg-muted/20">
          <div className="container mx-auto px-4 py-10 md:py-14">
            <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 md:gap-6">
              <article className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Target className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-semibold text-foreground md:text-2xl">{t("aboutMission")}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {t("aboutMissionText")}
                </p>
              </article>

              <article className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Eye className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-semibold text-foreground md:text-2xl">{t("aboutVision")}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {t("aboutVisionText")}
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Values & Commitments */}
        <section className="container mx-auto px-4 py-10 md:py-14">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">{t("aboutCommitmentsTitle")}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                {t("aboutCommitmentsIntro")}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
              {commitments.map((item) => (
                <article key={item.title} className="rounded-2xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md md:p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-accent">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground md:text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Distinction / Motivation */}
        <section className="container mx-auto px-4 pb-10 md:pb-14">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_1fr] md:gap-8">
            <article className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Sparkles className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold text-foreground md:text-2xl">{t("aboutDistinctTitle")}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                {t("aboutDistinctText")}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-muted/40 p-4">
                  <h3 className="text-sm font-semibold text-foreground">{t("aboutExpertise")}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t("aboutExpertiseText")}</p>
                </div>
                <div className="rounded-xl bg-muted/40 p-4">
                  <h3 className="text-sm font-semibold text-foreground">{t("aboutService")}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t("aboutServiceText")}</p>
                </div>
              </div>
            </article>

            <article className="rounded-2xl border bg-gradient-to-br from-primary to-primary/85 p-6 text-primary-foreground shadow-sm md:p-8">
              <h2 className="text-xl font-semibold md:text-2xl">{t("categories")}</h2>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/85 md:text-base">
                {t("aboutRangeText")}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <Link
                    key={c.id}
                    to="/shop"
                    search={{ category: c.slug }}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-white/20 sm:text-sm"
                  >
                    {pickName(c, lang)}
                  </Link>
                ))}
              </div>
              <div className="mt-6">
                <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-semibold text-white underline-offset-4 hover:underline">
                  {t("aboutCta")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t bg-muted/20">
          <div className="container mx-auto px-4 py-10 md:py-14">
            <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 rounded-2xl border bg-card p-6 shadow-sm md:flex-row md:items-center md:p-8">
              <div>
                <h2 className="text-xl font-semibold text-foreground md:text-2xl">{t("aboutCta")}</h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  {t("supportDesc")} {t("contactText")}
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Link to="/shop">
                  <Button size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
                    {t("shopNow")}
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    {t("aboutCtaContact")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
