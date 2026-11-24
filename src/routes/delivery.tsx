import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Mail, Package, Truck } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/delivery")({
  head: () => ({
    meta: [
      { title: "Lieferung – GARTEN-GESPANN" },
      {
        name: "description",
        content:
          "Informationen zu Liefergebieten, Versandkosten, Lieferzeiten und zur Bearbeitung Ihrer Bestellung.",
      },
    ],
  }),
  component: DeliveryPage,
});

type Item = { label: string; details: string };
type Block = {
  icon: typeof Truck;
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
    title: "Livraison",
    intro:
      "Cette page présente les informations de livraison telles qu’indiquées sur notre site. Les conditions effectivement applicables peuvent varier selon le produit : veuillez également consulter les informations figurant sur la fiche produit concernée.",
    blocks: [
      {
        icon: Truck,
        title: "1. Zone et frais de livraison",
        bullets: [
          "Livraison gratuite en Allemagne pour toutes les commandes, comme indiqué sur notre site.",
          "Pour toute question concernant une destination ou des conditions particulières non précisées sur le site, contactez-nous avant de passer commande.",
        ],
      },
      {
        icon: Clock,
        title: "2. Délais de livraison",
        items: [
          {
            label: "Délai indicatif",
            details:
              "Le délai de livraison généralement indiqué est de 3 à 5 jours ouvrés pour les livraisons en Allemagne.",
          },
          {
            label: "Variations selon les produits",
            details:
              "Certains produits peuvent présenter des conditions ou délais spécifiques mentionnés sur leur fiche (par exemple livraison directe depuis le fabricant, délai différent, livraison franco, ou informations/documents fournis avec le produit). En cas de différence, les informations du produit concerné prévalent.",
          },
        ],
      },
      {
        icon: Package,
        title: "3. Traitement et réception",
        bullets: [
          "Après validation de la commande et confirmation du paiement, la commande est préparée et expédiée selon les modalités applicables au produit commandé.",
          "Les informations nécessaires à la livraison sont celles fournies lors de la commande (coordonnées et adresse). Veillez à ce qu’elles soient exactes et complètes.",
          "Si des informations de suivi ou des modalités particulières sont disponibles pour votre commande, elles vous seront communiquées dans le cadre du processus de commande/service client lorsque prévu.",
        ],
      },
      {
        icon: Mail,
        title: "4. Questions ou demande concernant une livraison",
        intro:
          "Pour toute question sur la livraison, un délai, l’état d’une commande ou une demande liée à la réception, vous pouvez nous contacter :",
        bullets: [
          "Par e-mail : Kontakt@gartengespann.de (indiquez si possible votre nom, votre adresse e-mail et la référence/les détails de la commande).",
          "Par téléphone : +49 178 4228814.",
          "Par courrier : GARTEN-GESPANN, Goethestraße 51, 56743 Mendig-Niedermendig, Allemagne.",
          "Via le formulaire de contact du site.",
        ],
      },
    ],
    contactTitle: "Besoin d’aide pour une livraison ?",
    contactText:
      "Notre équipe vous répond pour toute question relative à la livraison, aux délais ou au suivi de votre commande.",
    contactButton: "Nous contacter",
  },
  de: {
    title: "Versand und Lieferung",
    intro:
      "Diese Seite enthält die auf unserer Website angegebenen Informationen zur Lieferung. Die tatsächlich geltenden Bedingungen können je nach Produkt abweichen – bitte beachten Sie daher auch die Angaben auf der jeweiligen Produktseite.",
    blocks: [
      {
        icon: Truck,
        title: "1. Liefergebiet und Versandkosten",
        bullets: [
          "Kostenloser Versand innerhalb Deutschlands für alle Bestellungen, wie auf unserer Website angegeben.",
          "Bei Fragen zu einem nicht angegebenen Lieferziel oder zu besonderen Bedingungen kontaktieren Sie uns bitte vor Ihrer Bestellung.",
        ],
      },
      {
        icon: Clock,
        title: "2. Lieferzeiten",
        items: [
          {
            label: "Reguläre Lieferzeit",
            details:
              "Die auf der Website angegebene Lieferzeit beträgt in der Regel 3 bis 5 Werktage für Lieferungen innerhalb Deutschlands.",
          },
          {
            label: "Abweichungen je nach Produkt",
            details:
              "Für bestimmte Produkte können auf der Produktseite abweichende Bedingungen oder Lieferzeiten angegeben sein (z. B. Lieferung direkt vom Hersteller, abweichende Lieferzeit, frachtfreie Lieferung oder mit dem Produkt gelieferte Unterlagen/Informationen). Im Einzelfall gelten die Angaben des jeweiligen Produkts.",
          },
        ],
      },
      {
        icon: Package,
        title: "3. Bearbeitung und Zustellung",
        bullets: [
          "Nach Bestätigung der Bestellung und des Zahlungseingangs wird die Bestellung gemäß den für das jeweilige Produkt geltenden Bedingungen vorbereitet und versendet.",
          "Für die Lieferung werden die bei der Bestellung angegebenen Daten (Kontakt- und Adressdaten) verwendet. Bitte stellen Sie sicher, dass diese korrekt und vollständig sind.",
          "Sofern für Ihre Bestellung Sendungsverfolgungs- oder besondere Lieferinformationen verfügbar sind, werden diese im Rahmen des Bestell-/Kundenserviceprozesses bereitgestellt, soweit vorgesehen.",
        ],
      },
      {
        icon: Mail,
        title: "4. Fragen zur Lieferung",
        intro:
          "Bei Fragen zur Lieferung, zu Lieferzeiten, zum Status einer Bestellung oder zur Zustellung können Sie uns kontaktieren:",
        bullets: [
          "Per E-Mail: Kontakt@gartengespann.de (bitte nach Möglichkeit Name, betroffene E-Mail-Adresse und Bestellangaben angeben).",
          "Telefonisch: +49 178 4228814.",
          "Per Post: GARTEN-GESPANN, Goethestraße 51, 56743 Mendig-Niedermendig, Deutschland.",
          "Über das Kontaktformular der Website.",
        ],
      },
    ],
    contactTitle: "Hilfe bei Ihrer Lieferung benötigt?",
    contactText:
      "Unser Team beantwortet Ihre Fragen zur Lieferung, zu Lieferzeiten oder zum Status Ihrer Bestellung.",
    contactButton: "Kontakt aufnehmen",
  },
  en: {
    title: "Delivery",
    intro:
      "This page provides the delivery information stated on our website. The conditions that apply may vary depending on the product—please also check the information shown on the relevant product page.",
    blocks: [
      {
        icon: Truck,
        title: "1. Delivery area and shipping costs",
        bullets: [
          "Free shipping within Germany on all orders, as stated on our website.",
          "If you have questions about a destination or specific conditions not specified on the site, please contact us before placing your order.",
        ],
      },
      {
        icon: Clock,
        title: "2. Delivery times",
        items: [
          {
            label: "Indicative delivery time",
            details:
              "The delivery time generally indicated on the website is 3 to 5 business days for deliveries within Germany.",
          },
          {
            label: "Product-specific variations",
            details:
              "Some products may have specific conditions or delivery times stated on their product page (for example direct delivery from the manufacturer, a different delivery time, free-freight delivery, or documents/information supplied with the product). Where they differ, the information for the relevant product applies.",
          },
        ],
      },
      {
        icon: Package,
        title: "3. Processing and receipt",
        bullets: [
          "After your order is placed and payment is confirmed, the order is prepared and shipped according to the conditions applicable to the ordered product.",
          "Delivery uses the contact and address details provided during checkout. Please make sure they are accurate and complete.",
          "If tracking or specific delivery information is available for your order, it will be provided as part of the order/customer service process where applicable.",
        ],
      },
      {
        icon: Mail,
        title: "4. Questions or delivery-related requests",
        intro:
          "For questions about delivery, timeframes, order status or receipt, you can contact us:",
        bullets: [
          "By email: Kontakt@gartengespann.de (please include your name, the relevant email address and, if possible, your order details).",
          "By phone: +49 178 4228814.",
          "By post: GARTEN-GESPANN, Goethestraße 51, 56743 Mendig-Niedermendig, Germany.",
          "Via the website contact form.",
        ],
      },
    ],
    contactTitle: "Need help with a delivery?",
    contactText:
      "Our team can assist with questions about delivery, timeframes or the status of your order.",
    contactButton: "Contact us",
  },
};

function DeliveryPage() {
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
