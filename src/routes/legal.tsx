import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, FileText, Mail, Scale } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Impressum – GARTEN-GESPANN" },
      {
        name: "description",
        content:
          "Impressum von GARTEN-GESPANN mit Angaben zum Betreiber, Kontaktdaten und rechtlichen Informationen.",
      },
    ],
  }),
  component: LegalPage,
});

type Item = { label: string; details: string };
type Block = {
  icon: typeof Scale;
  title: string;
  intro?: string;
  items?: Item[];
  bullets?: string[];
};

type Content = {
  title: string;
  intro: string;
  blocks: Block[];
  contactTitle: string;
  contactText: string;
  contactButton: string;
};

const CONTENT: Record<Lang, Content> = {
  fr: {
    title: "Mentions légales",
    intro:
      "Les informations ci-dessous sont fournies sur la base des éléments effectivement disponibles dans le projet. Les mentions légales obligatoires peuvent nécessiter des informations complémentaires propres à l’exploitant du site (forme juridique, immatriculation, représentant légal, etc.) : lorsqu’une information n’est pas disponible, elle est signalée comme à compléter.",
    blocks: [
      {
        icon: Building2,
        title: "1. Éditeur du site",
        intro: "Informations disponibles concernant l’exploitant du site :",
        bullets: [
          "Nom / enseigne : GARTEN-GESPANN",
          "Adresse : Goethestraße 51, 56743 Mendig-Niedermendig, Allemagne",
          "Téléphone : +49 178 4228814",
          "E-mail : Kontakt@gartengespann.de",
        ],
      },
      {
        icon: FileText,
        title: "2. Responsable du contenu",
        bullets: [
          "Garten-Gespann, Goethestraße 51, 56743 Mendig-Niedermendig",
        ],
      },
      {
        icon: Scale,
        title: "3. Règlement en ligne des litiges et résolution des litiges de consommation",
        intro:
          "Informations relatives aux dispositifs de règlement des litiges (à préciser selon la situation réelle de l’entreprise) :",
        bullets: [
          "Plateforme européenne de règlement en ligne des litiges (RLL/ODR) : https://ec.europa.eu/consumers/odr/",
        ],
      },
      {
        icon: Mail,
        title: "4. Contact",
        intro: "Pour toute question concernant le site ou ces mentions légales, vous pouvez nous contacter :",
        bullets: [
          "E-mail : Kontakt@gartengespann.de",
          "Téléphone : +49 178 4228814",
          "Adresse postale : GARTEN-GESPANN, Goethestraße 51, 56743 Mendig-Niedermendig, Allemagne",
          "Formulaire de contact : disponible sur la page Contact du site.",
        ],
      },
    ],
    contactTitle: "Une question juridique ou sur le site ?",
    contactText:
      "Contactez-nous pour toute demande d’information relative au site ou aux présentes mentions légales.",
    contactButton: "Nous contacter",
  },
  de: {
    title: "Impressum",
    intro:
      "Die nachfolgenden Angaben basieren auf den im Projekt tatsächlich verfügbaren Informationen. Für ein vollständiges Impressum können weitere betreiberbezogene Angaben erforderlich sein (z. B. Rechtsform, Registereintrag, Vertretungsberechtigte). Soweit Informationen nicht vorliegen, sind diese als zu ergänzen gekennzeichnet.",
    blocks: [
      {
        icon: Building2,
        title: "1. Anbieter / Betreiber der Website",
        intro: "Verfügbare Angaben zum Betreiber:",
        bullets: [
          "Name / Bezeichnung: GARTEN-GESPANN",
          "Anschrift: Goethestraße 51, 56743 Mendig-Niedermendig, Deutschland",
          "Telefon: +49 178 4228814",
          "E-Mail: Kontakt@gartengespann.de",
        ],
      },
      {
        icon: FileText,
        title: "2. Verantwortlich für den Inhalt",
        bullets: [
          "Garten-Gespann, Goethestraße 51, 56743 Mendig-Niedermendig",
        ],
      },
      {
        icon: Scale,
        title: "3. Online-Streitbeilegung und Verbraucherstreitbeilegung",
        intro:
          "Angaben zu Streitbeilegungsverfahren (entsprechend der tatsächlichen Situation des Unternehmens zu ergänzen):",
        bullets: [
          "Plattform der EU-Kommission zur Online-Streitbeilegung (OS/ODR): https://ec.europa.eu/consumers/odr/",
        ],
      },
      {
        icon: Mail,
        title: "4. Kontakt",
        intro: "Bei Fragen zur Website oder zu diesem Impressum können Sie uns kontaktieren:",
        bullets: [
          "E-Mail: Kontakt@gartengespann.de",
          "Telefon: +49 178 4228814",
          "Postanschrift: GARTEN-GESPANN, Goethestraße 51, 56743 Mendig-Niedermendig, Deutschland",
          "Kontaktformular: über die Kontaktseite der Website verfügbar.",
        ],
      },
    ],
    contactTitle: "Fragen zum Impressum oder zur Website?",
    contactText:
      "Kontaktieren Sie uns bei Fragen zu diesen Angaben oder zur Website.",
    contactButton: "Kontakt aufnehmen",
  },
  en: {
    title: "Legal notice",
    intro:
      "The information below is based on the details actually available in the project. A complete legal notice may require additional operator-specific information (such as legal form, registration, or legal representatives). Where information is not available, it is marked as to be completed.",
    blocks: [
      {
        icon: Building2,
        title: "1. Website operator / provider",
        intro: "Available information about the site operator:",
        bullets: [
          "Name / business name: GARTEN-GESPANN",
          "Address: Goethestraße 51, 56743 Mendig-Niedermendig, Germany",
          "Phone: +49 178 4228814",
          "Email: Kontakt@gartengespann.de",
        ],
      },
      {
        icon: FileText,
        title: "2. Person responsible for content",
        bullets: [
          "Garten-Gespann, Goethestraße 51, 56743 Mendig-Niedermendig",
        ],
      },
      {
        icon: Scale,
        title: "3. Online dispute resolution and consumer dispute resolution",
        intro:
          "Information on dispute resolution mechanisms (to be specified according to the company’s actual situation):",
        bullets: [
          "European Commission Online Dispute Resolution (ODR) platform: https://ec.europa.eu/consumers/odr/",
        ],
      },
      {
        icon: Mail,
        title: "4. Contact",
        intro: "If you have questions about this website or this legal notice, you can contact us:",
        bullets: [
          "Email: Kontakt@gartengespann.de",
          "Phone: +49 178 4228814",
          "Postal address: GARTEN-GESPANN, Goethestraße 51, 56743 Mendig-Niedermendig, Germany",
          "Contact form: available on the website’s Contact page.",
        ],
      },
    ],
    contactTitle: "Questions about this legal notice or the website?",
    contactText:
      "Contact us if you need information regarding this legal notice or the website.",
    contactButton: "Contact us",
  },
};

function LegalPage() {
  const { lang } = useLang();
  const content = CONTENT[lang] ?? CONTENT.de;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <PageHeader title={content.title} />

      <main className="container mx-auto flex-1 px-4 py-10 md:py-14">
        <div className="mx-auto max-w-5xl">
          <section className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{content.intro}</p>
          </section>

          <div className="mt-8 grid gap-4 md:mt-10 md:gap-6">
            {content.blocks.map((block, idx) => (
              <section key={idx} className="rounded-2xl border bg-card p-6 shadow-sm md:p-8">
                <div className="mb-4 flex items-start gap-3">
                  <div className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-accent">
                    <block.icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-semibold leading-tight text-foreground md:text-2xl">{block.title}</h2>
                </div>

                {block.intro && (
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{block.intro}</p>
                )}

                {block.items && (
                  <div className="mt-4 space-y-3">
                    {block.items.map((item, i) => (
                      <div key={i} className="rounded-xl border bg-muted/20 p-4 md:p-5">
                        <h3 className="text-base font-semibold text-foreground md:text-lg">{item.label}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{item.details}</p>
                      </div>
                    ))}
                  </div>
                )}

                {block.bullets && (
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground md:text-base">
                    {block.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <section className="mt-8 rounded-2xl border bg-gradient-to-br from-primary to-primary/85 p-6 text-primary-foreground shadow-sm md:mt-10 md:p-8">
            <h2 className="text-xl font-semibold md:text-2xl">{content.contactTitle}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-primary-foreground/85 md:text-base">
              {content.contactText}
            </p>
            <div className="mt-5">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
              >
                {content.contactButton}
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
