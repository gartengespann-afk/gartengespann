import { createFileRoute, Link } from "@tanstack/react-router";
import { CreditCard, Lock, Mail, Receipt, ShieldCheck } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/payment")({
  head: () => ({
    meta: [
      { title: "Zahlungsarten – GARTEN-GESPANN" },
      {
        name: "description",
        content:
          "Erfahren Sie mehr über akzeptierte Zahlungsarten, sichere Transaktionen und Hilfe beim Bezahlen.",
      },
    ],
  }),
  component: PaymentPage,
});

type Block = {
  icon: typeof CreditCard;
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
    title: "Modes de paiement",
    intro:
      "Cette page présente les informations relatives au paiement des commandes passées sur GARTEN-GESPANN. Le règlement s’effectue dans le cadre du processus de commande du site, de manière simple et sécurisée.",
    blocks: [
      {
        icon: CreditCard,
        title: "1. Paiement lors de la commande",
        intro: "Lors de la finalisation de votre commande :",
        bullets: [
          "Vous renseignez vos informations de commande et validez votre panier.",
          "Vous êtes ensuite redirigé vers une page de paiement sécurisée afin de finaliser le règlement.",
          "Les options de paiement disponibles sont celles proposées sur cette page de paiement au moment de la commande.",
        ],
      },
      {
        icon: Receipt,
        title: "2. Devise et montant",
        bullets: [
          "Les prix des produits sont indiqués en euros (€) tels qu’affichés sur le site.",
          "Le montant à régler correspond au total de votre commande présenté avant la validation du paiement.",
        ],
      },
      {
        icon: Lock,
        title: "3. Sécurité du paiement",
        bullets: [
          "Le paiement est réalisé via une page de paiement sécurisée mise à disposition lors du processus de commande.",
          "Le traitement du paiement est effectué dans le cadre de ce service de paiement sécurisé. Pour votre sécurité, évitez de transmettre vos informations de paiement par e-mail ou via le formulaire de contact.",
        ],
      },
      {
        icon: ShieldCheck,
        title: "4. Confirmation et suivi",
        bullets: [
          "Une fois le paiement finalisé, votre commande est prise en compte conformément au processus en vigueur sur le site.",
          "Si vous disposez d’un compte, les informations liées à vos commandes peuvent être consultées depuis votre espace client, selon les fonctionnalités disponibles.",
        ],
      },
      {
        icon: Mail,
        title: "5. Besoin d’aide concernant un paiement",
        intro:
          "En cas de question ou de difficulté lors du paiement, vous pouvez nous contacter :",
        bullets: [
          "Par e-mail : Kontakt@gartengespann.de",
          "Par téléphone : +49 178 4228814",
          "Par courrier : GARTEN-GESPANN, Goethestraße 51, 56743 Mendig-Niedermendig, Allemagne",
          "Via le formulaire de contact disponible sur notre site.",
        ],
        outro:
          "Pour nous permettre de vous aider efficacement, indiquez si possible votre nom, votre adresse e-mail et les détails utiles concernant votre commande ou votre tentative de paiement.",
      },
    ],
    contactTitle: "Une question sur le paiement ?",
    contactText:
      "Notre équipe est à votre disposition pour vous accompagner en cas de question sur le règlement de votre commande.",
    contactButton: "Nous contacter",
  },
  de: {
    title: "Zahlungsmethoden",
    intro:
      "Diese Seite informiert über die Zahlung von Bestellungen auf GARTEN-GESPANN. Die Bezahlung erfolgt im Rahmen des Bestellprozesses auf der Website einfach und sicher.",
    blocks: [
      {
        icon: CreditCard,
        title: "1. Zahlung während der Bestellung",
        intro: "Beim Abschluss Ihrer Bestellung:",
        bullets: [
          "Sie geben Ihre Bestellinformationen ein und bestätigen Ihren Warenkorb.",
          "Anschließend werden Sie zu einer sicheren Zahlungsseite weitergeleitet, um die Zahlung abzuschließen.",
          "Die verfügbaren Zahlungsoptionen sind diejenigen, die zum Zeitpunkt der Bestellung auf dieser Zahlungsseite angeboten werden.",
        ],
      },
      {
        icon: Receipt,
        title: "2. Währung und Betrag",
        bullets: [
          "Die Produktpreise werden in Euro (€) so angezeigt, wie sie auf der Website ausgewiesen sind.",
          "Der zu zahlende Betrag entspricht dem Gesamtbetrag Ihrer Bestellung, der vor Bestätigung der Zahlung angezeigt wird.",
        ],
      },
      {
        icon: Lock,
        title: "3. Sicherheit der Zahlung",
        bullets: [
          "Die Zahlung erfolgt über eine sichere Zahlungsseite, die im Rahmen des Bestellprozesses bereitgestellt wird.",
          "Die Zahlungsabwicklung erfolgt über diesen sicheren Zahlungsdienst. Übermitteln Sie Ihre Zahlungsdaten zu Ihrer Sicherheit nicht per E-Mail oder über das Kontaktformular.",
        ],
      },
      {
        icon: ShieldCheck,
        title: "4. Bestätigung und Übersicht",
        bullets: [
          "Nach Abschluss der Zahlung wird Ihre Bestellung gemäß dem auf der Website vorgesehenen Ablauf berücksichtigt.",
          "Wenn Sie über ein Kundenkonto verfügen, können Sie – je nach verfügbaren Funktionen – Informationen zu Ihren Bestellungen in Ihrem Kundenbereich einsehen.",
        ],
      },
      {
        icon: Mail,
        title: "5. Hilfe bei Fragen zur Zahlung",
        intro:
          "Bei Fragen oder Schwierigkeiten während der Zahlung können Sie uns kontaktieren:",
        bullets: [
          "Per E-Mail: Kontakt@gartengespann.de",
          "Telefonisch: +49 178 4228814",
          "Per Post: GARTEN-GESPANN, Goethestraße 51, 56743 Mendig-Niedermendig, Deutschland",
          "Über das auf unserer Website verfügbare Kontaktformular.",
        ],
        outro:
          "Damit wir Ihnen effizient helfen können, geben Sie bitte nach Möglichkeit Ihren Namen, Ihre E-Mail-Adresse und hilfreiche Angaben zu Ihrer Bestellung oder Ihrem Zahlungsversuch an.",
      },
    ],
    contactTitle: "Fragen zur Zahlung?",
    contactText:
      "Unser Team steht Ihnen bei Fragen zur Bezahlung Ihrer Bestellung gerne zur Verfügung.",
    contactButton: "Kontakt aufnehmen",
  },
  en: {
    title: "Payment methods",
    intro:
      "This page provides information about how payments are made for orders placed on GARTEN-GESPANN. Payment is completed as part of the website’s checkout process in a simple and secure way.",
    blocks: [
      {
        icon: CreditCard,
        title: "1. Payment during checkout",
        intro: "When completing your order:",
        bullets: [
          "You enter your order information and confirm your cart.",
          "You are then redirected to a secure payment page to complete the payment.",
          "The payment options available are those offered on that payment page at the time of ordering.",
        ],
      },
      {
        icon: Receipt,
        title: "2. Currency and amount",
        bullets: [
          "Product prices are shown in euros (€) as displayed on the website.",
          "The amount to be paid corresponds to your order total shown before you confirm the payment.",
        ],
      },
      {
        icon: Lock,
        title: "3. Payment security",
        bullets: [
          "Payment is made through a secure payment page provided during the checkout process.",
          "Payment processing is handled through this secure payment service. For your security, do not send your payment details by email or via the contact form.",
        ],
      },
      {
        icon: ShieldCheck,
        title: "4. Confirmation and tracking",
        bullets: [
          "Once payment is completed, your order is taken into account in accordance with the process in place on the website.",
          "If you have an account, information related to your orders may be available in your customer area, depending on the features provided.",
        ],
      },
      {
        icon: Mail,
        title: "5. Help with a payment",
        intro:
          "If you have a question or experience difficulty during payment, you can contact us:",
        bullets: [
          "By email: Kontakt@gartengespann.de",
          "By phone: +49 178 4228814",
          "By post: GARTEN-GESPANN, Goethestraße 51, 56743 Mendig-Niedermendig, Germany",
          "Via the contact form available on our website.",
        ],
        outro:
          "To help us assist you effectively, please include your name, your email address and any useful details about your order or payment attempt, where possible.",
      },
    ],
    contactTitle: "Questions about payment?",
    contactText:
      "Our team is available to assist you with any questions about paying for your order.",
    contactButton: "Contact us",
  },
};

function PaymentPage() {
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
