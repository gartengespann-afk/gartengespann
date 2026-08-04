import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang } from "@/lib/i18n";
import { Shield, Wrench, Headphones, Star } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Über uns — GARTEN-GESPANN" },
      { name: "description", content: "Ihr Spezialist für hochwertige Anhänger, Aufsitzmäher, Kettensägen und Zubehör." },
      { property: "og:title", content: "Über uns — GARTEN-GESPANN" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();
  const values = [
    { icon: Shield, title: t("aboutQuality"), text: t("aboutQualityText") },
    { icon: Wrench, title: t("aboutExpertise"), text: t("aboutExpertiseText") },
    { icon: Headphones, title: t("aboutService"), text: t("aboutServiceText") },
    { icon: Star, title: t("aboutSatisfaction"), text: t("aboutSatisfactionText") },
  ];
  const rangeItems = [
    { img: "/1-1.png", label: "Anhänger / Remorques / Trailers" },
    { img: "/12-1.webp", label: "Aufsitzmäher / Tondeuses / Lawn Tractors" },
    { img: "/46-1.jpg", label: "Kettensägen / Tronçonneuses / Chainsaws" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageHeader title={t("about")} />

      {/* Hero / Mission */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("aboutMission")}</h2>
              <p className="text-muted-foreground leading-relaxed">{t("aboutMissionText")}</p>
            </div>
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src="/img-g.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="rounded-lg border bg-card p-6 text-center">
                <v.icon className="mx-auto h-10 w-10 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Range Showcase */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("aboutRange")}</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">{t("aboutRangeText")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {rangeItems.map((item, i) => (
            <div key={i} className="rounded-lg border bg-card overflow-hidden">
              <div className="aspect-[4/3]">
                <img
                  src={item.img}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-4 text-center text-sm font-medium text-muted-foreground">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-14 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("aboutRange")}</h2>
          <p className="text-lg opacity-80 mb-8 max-w-xl mx-auto">{t("aboutRangeText")}</p>
          <Link
            to="/shop"
            className="inline-block rounded-lg bg-accent text-accent-foreground px-8 py-3 font-semibold hover:bg-accent/90 transition-colors"
          >
            {t("aboutCta")} →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
