import { createFileRoute, Link } from "@tanstack/react-router";
import { CreditCard, FileText, Mail, Package, Scale, ShoppingCart } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "AGB – GARTEN-GESPANN" },
      {
        name: "description",
        content:
          "Lesen Sie unsere Verkaufsbedingungen zu Bestellung, Preisen, Zahlung, Lieferung, Rückgabe und Kontakt.",
      },
    ],
  }),
  component: TermsPage,
});

type Block = {
  icon: typeof FileText;
  title: string;
  intro?: string;
  bullets?: string[];
  outro?: string;
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
    title: "Conditions de vente",
    intro:
      "Les présentes conditions de vente s’appliquent aux commandes passées sur le site GARTEN-GESPANN. Elles ont pour objet de présenter, de manière claire, les principales informations relatives à l’achat de nos produits. Pour toute question avant ou après une commande, notre équipe reste à votre disposition.",
    blocks: [
      {
        icon: FileText,
        title: "1. Vendeur et champ d’application",
        bullets: [
          "Vendeur : GARTEN-GESPANN, Goethestraße 51, 56743 Mendig-Niedermendig, Allemagne.",
          "Contact : Kontakt@gartengespann.de — +49 178 4228814.",
          "Les présentes conditions s’appliquent aux commandes effectuées via notre site pour les produits proposés à la vente (outils et équipements pour le jardin, les travaux extérieurs et les usages concernés par notre catalogue).",
        ],
      },
      {
        icon: ShoppingCart,
        title: "2. Produits, informations et prix",
        bullets: [
          "Les caractéristiques essentielles des produits sont présentées sur les fiches produit du site. Nous vous invitons à les consulter attentivement avant de valider votre commande.",
          "Les prix sont indiqués en euros (€) tels qu’affichés sur le site au moment de la commande.",
          "La disponibilité des produits peut évoluer ; les informations affichées au moment de la commande font foi pour celle-ci.",
        ],
      },
      {
        icon: CreditCard,
        title: "3. Commande et paiement",
        intro: "Le processus de commande sur notre site comprend notamment :",
        bullets: [
          "La sélection des produits et leur ajout au panier, puis la saisie des informations nécessaires au traitement de la commande (coordonnées et adresse de livraison).",
          "La validation de la commande et la redirection vers une page de paiement sécurisée afin de finaliser le règlement.",
          "Le paiement est traité lors de la finalisation de la commande. La commande est enregistrée dans le cadre du processus d’achat et de paiement mis en place sur le site.",
        ],
      },
      {
        icon: Package,
        title: "4. Livraison",
        bullets: [
          "Les informations relatives à la livraison (zone, délais indicatifs, traitement des commandes et particularités éventuelles selon les produits) sont présentées sur notre page Livraison.",
          "Sauf indication particulière, la livraison est proposée gratuitement en Allemagne, avec un délai indicatif de 3 à 5 jours ouvrables après le traitement de la commande.",
        ],
        outro: "Pour plus de détails, consultez la page Livraison.",
      },
      {
        icon: Scale,
        title: "5. Rétractation, retours et remboursements",
        bullets: [
          "Les consommateurs disposent, conformément à la législation applicable, d’un droit légal de rétractation dans les conditions prévues par la loi.",
          "Les modalités relatives aux retours, aux exceptions éventuelles et aux remboursements sont détaillées sur notre page Retours et remboursements.",
          "Les droits légaux des consommateurs demeurent applicables.",
        ],
        outro: "Pour plus de détails, consultez la page Retours et remboursements.",
      },
      {
        icon: Mail,
        title: "6. Contact et assistance",
        intro:
          "Pour toute question concernant un produit, une commande, un paiement, une livraison ou un retour, vous pouvez nous contacter :",
        bullets: [
          "Par e-mail : Kontakt@gartengespann.de",
          "Par téléphone : +49 178 4228814",
          "Par courrier : GARTEN-GESPANN, Goethestraße 51, 56743 Mendig-Niedermendig, Allemagne",
          "Via le formulaire de contact disponible sur notre site.",
        ],
        outro:
          "Afin de faciliter le traitement de votre demande, merci d’indiquer votre nom et, le cas échéant, la référence de votre commande.",
      },
    ],
    contactTitle: "Une question avant de commander ?",
    contactText:
      "Notre équipe vous accompagne avec transparence pour vous aider à choisir vos produits et à finaliser votre commande en toute sérénité.",
    contactButton: "Nous contacter",
  },
  de: {
    title: "Verkaufsbedingungen",
    intro:
      "Diese Verkaufsbedingungen gelten für Bestellungen, die über die Website von GARTEN-GESPANN aufgegeben werden. Sie sollen die wichtigsten Informationen zum Kauf unserer Produkte klar und transparent darstellen. Bei Fragen vor oder nach einer Bestellung steht Ihnen unser Team gerne zur Verfügung.",
    blocks: [
      {
        icon: FileText,
        title: "1. Verkäufer und Geltungsbereich",
        bullets: [
          "Verkäufer: GARTEN-GESPANN, Goethestraße 51, 56743 Mendig-Niedermendig, Deutschland.",
          "Kontakt: Kontakt@gartengespann.de — +49 178 4228814.",
          "Diese Bedingungen gelten für Bestellungen, die über unsere Website für die zum Verkauf angebotenen Produkte (Werkzeuge und Ausrüstung für Garten, Außenarbeiten und die in unserem Katalog abgedeckten Einsatzbereiche) getätigt werden.",
        ],
      },
      {
        icon: ShoppingCart,
        title: "2. Produkte, Informationen und Preise",
        bullets: [
          "Die wesentlichen Eigenschaften der Produkte werden auf den jeweiligen Produktseiten dargestellt. Bitte prüfen Sie diese Angaben sorgfältig, bevor Sie Ihre Bestellung abschließen.",
          "Die Preise werden in Euro (€) so angezeigt, wie sie zum Zeitpunkt der Bestellung auf der Website ausgewiesen sind.",
          "Die Verfügbarkeit von Produkten kann sich ändern; maßgeblich für die jeweilige Bestellung sind die zum Zeitpunkt der Bestellung angezeigten Informationen.",
        ],
      },
      {
        icon: CreditCard,
        title: "3. Bestellung und Zahlung",
        intro: "Der Bestellvorgang auf unserer Website umfasst insbesondere:",
        bullets: [
          "Die Auswahl der Produkte und das Hinzufügen zum Warenkorb sowie die Eingabe der für die Bearbeitung der Bestellung erforderlichen Angaben (Kontaktdaten und Lieferadresse).",
          "Die Bestätigung der Bestellung und die Weiterleitung zu einer sicheren Zahlungsseite, um die Zahlung abzuschließen.",
          "Die Zahlung erfolgt im Rahmen des Bestellabschlusses. Die Bestellung wird im Rahmen des auf der Website eingerichteten Bestell- und Zahlungsprozesses erfasst.",
        ],
      },
      {
        icon: Package,
        title: "4. Lieferung",
        bullets: [
          "Informationen zur Lieferung (Gebiet, unverbindliche Lieferzeiten, Bearbeitung der Bestellungen sowie ggf. produktspezifische Besonderheiten) finden Sie auf unserer Seite „Lieferung“.",
          "Sofern nicht anders angegeben, erfolgt die Lieferung innerhalb Deutschlands kostenlos mit einer unverbindlichen Lieferzeit von 3 bis 5 Werktagen nach Bearbeitung der Bestellung.",
        ],
        outro: "Weitere Einzelheiten finden Sie auf der Seite „Lieferung“.",
      },
      {
        icon: Scale,
        title: "5. Widerruf, Rückgaben und Erstattungen",
        bullets: [
          "Verbrauchern steht nach dem geltenden Recht ein gesetzliches Widerrufsrecht unter den gesetzlich vorgesehenen Voraussetzungen zu.",
          "Einzelheiten zu Rückgaben, möglichen Ausnahmen und Erstattungen sind auf unserer Seite „Rückgaben und Erstattungen“ dargestellt.",
          "Die gesetzlichen Rechte der Verbraucher bleiben unberührt.",
        ],
        outro: "Weitere Einzelheiten finden Sie auf der Seite „Rückgaben und Erstattungen“.",
      },
      {
        icon: Mail,
        title: "6. Kontakt und Unterstützung",
        intro:
          "Bei Fragen zu einem Produkt, einer Bestellung, einer Zahlung, der Lieferung oder einer Rückgabe können Sie uns kontaktieren:",
        bullets: [
          "Per E-Mail: Kontakt@gartengespann.de",
          "Telefonisch: +49 178 4228814",
          "Per Post: GARTEN-GESPANN, Goethestraße 51, 56743 Mendig-Niedermendig, Deutschland",
          "Über das auf unserer Website verfügbare Kontaktformular.",
        ],
        outro:
          "Um die Bearbeitung Ihrer Anfrage zu erleichtern, geben Sie bitte Ihren Namen und – falls vorhanden – Ihre Bestellreferenz an.",
      },
    ],
    contactTitle: "Fragen vor Ihrer Bestellung?",
    contactText:
      "Unser Team unterstützt Sie transparent bei der Auswahl Ihrer Produkte und begleitet Sie bis zum Abschluss Ihrer Bestellung.",
    contactButton: "Kontakt aufnehmen",
  },
  en: {
    title: "Terms of sale",
    intro:
      "These terms of sale apply to orders placed on the GARTEN-GESPANN website. They are intended to present, in a clear manner, the main information relating to the purchase of our products. If you have any questions before or after placing an order, our team is here to help.",
    blocks: [
      {
        icon: FileText,
        title: "1. Seller and scope",
        bullets: [
          "Seller: GARTEN-GESPANN, Goethestraße 51, 56743 Mendig-Niedermendig, Germany.",
          "Contact: Kontakt@gartengespann.de — +49 178 4228814.",
          "These terms apply to orders placed through our website for the products offered for sale (tools and equipment for the garden, outdoor work and the uses covered by our catalogue).",
        ],
      },
      {
        icon: ShoppingCart,
        title: "2. Products, information and prices",
        bullets: [
          "The essential characteristics of the products are presented on the product pages of the website. Please review them carefully before placing your order.",
          "Prices are shown in euros (€) as displayed on the website at the time of ordering.",
          "Product availability may change; the information displayed at the time of ordering applies to that order.",
        ],
      },
      {
        icon: CreditCard,
        title: "3. Ordering and payment",
        intro: "The ordering process on our website includes in particular:",
        bullets: [
          "Selecting products and adding them to the cart, then entering the information required to process the order (contact details and delivery address).",
          "Confirming the order and being redirected to a secure payment page to complete payment.",
          "Payment is completed as part of the checkout process. The order is recorded within the purchasing and payment process provided on the website.",
        ],
      },
      {
        icon: Package,
        title: "4. Delivery",
        bullets: [
          "Information relating to delivery (area, indicative timeframes, order processing and any product-specific details) is provided on our Delivery page.",
          "Unless otherwise indicated, delivery is offered free of charge within Germany, with an indicative timeframe of 3 to 5 working days after order processing.",
        ],
        outro: "For more details, please see the Delivery page.",
      },
      {
        icon: Scale,
        title: "5. Withdrawal, returns and refunds",
        bullets: [
          "Consumers have, in accordance with applicable law, a statutory right of withdrawal under the conditions provided by law.",
          "Details regarding returns, any applicable exceptions and refunds are set out on our Returns and refunds page.",
          "Consumers’ statutory rights remain applicable.",
        ],
        outro: "For more details, please see the Returns and refunds page.",
      },
      {
        icon: Mail,
        title: "6. Contact and support",
        intro:
          "If you have any questions about a product, an order, payment, delivery or a return, you can contact us:",
        bullets: [
          "By email: Kontakt@gartengespann.de",
          "By phone: +49 178 4228814",
          "By post: GARTEN-GESPANN, Goethestraße 51, 56743 Mendig-Niedermendig, Germany",
          "Via the contact form available on our website.",
        ],
        outro:
          "To help us process your request, please provide your name and, where applicable, your order reference.",
      },
    ],
    contactTitle: "Questions before placing an order?",
    contactText:
      "Our team supports you with transparency to help you choose your products and complete your order with confidence.",
    contactButton: "Contact us",
  },
};

function TermsPage() {
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

                {block.outro && (
                  <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-muted-foreground md:text-base">
                    {block.outro}
                  </p>
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
