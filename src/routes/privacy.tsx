import { createFileRoute, Link } from "@tanstack/react-router";
import { Cookie, Database, FileText, Mail, ShieldCheck, Trash2 } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Datenschutz – GARTEN-GESPANN" },
      {
        name: "description",
        content:
          "Erfahren Sie, wie GARTEN-GESPANN Ihre Daten erhebt, nutzt und schützt und wie Sie Ihre Rechte ausüben.",
      },
    ],
  }),
  component: PrivacyPage,
});

type Item = { label: string; details: string };
type Block = {
  icon: typeof ShieldCheck;
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
    title: "Politique de confidentialité",
    intro:
      "Cette page explique quelles données personnelles sont réellement collectées sur ce site, pourquoi elles sont traitées, combien de temps elles sont conservées, ainsi que la façon de nous contacter pour demander leur suppression. Aucune donnée n’est collectée à des fins publicitaires et aucun outil de mesure d’audience ou de suivi marketing n’est utilisé.",
    blocks: [
      {
        icon: Database,
        title: "1. Données collectées et finalités",
        intro: "Nous collectons uniquement les données nécessaires aux services demandés :",
        items: [
          {
            label: "Formulaire de contact",
            details:
              "Données : nom, adresse e-mail, sujet et message. Finalité : recevoir votre demande, y répondre et assurer le suivi de la communication.",
          },
          {
            label: "Création de compte / connexion",
            details:
              "Données : prénom, nom, adresse e-mail et mot de passe (enregistré sous forme hachée, jamais en clair). Finalité : créer et gérer votre compte, vous authentifier et sécuriser l’accès à votre espace.",
          },
          {
            label: "Commande et paiement",
            details:
              "Données : informations de contact et de livraison/facturation fournies lors de la commande, contenu du panier/articles commandés, montant et informations nécessaires au suivi de la commande et du paiement (y compris les références de transaction/paiement générées lors du paiement en ligne). Finalité : traiter votre commande, gérer le paiement, la livraison, le service après-vente, les factures/reçus et les obligations légales liées à la vente.",
          },
          {
            label: "Espace client (fonctionnalités liées au compte)",
            details:
              "Données : historique de commandes/factures/reçus associé à votre compte et, si vous êtes connecté, vos favoris enregistrés. Finalité : vous permettre de consulter vos informations et d’utiliser les fonctionnalités de votre compte.",
          },
        ],
      },
      {
        icon: Cookie,
        title: "2. Cookies, stockage local et outils de mesure",
        intro: "Le site utilise uniquement des technologies nécessaires à son fonctionnement :",
        items: [
          {
            label: "Cookie de session (nécessaire)",
            details:
              "Un cookie de session est utilisé pour la connexion, la gestion de la session et la protection contre les requêtes abusives (protection CSRF). Il est nécessaire au fonctionnement sécurisé du compte et de certaines étapes (formulaires/commande).",
          },
          {
            label: "Stockage local du navigateur (nécessaire/fonctionnel)",
            details:
              "Le navigateur peut conserver localement : le contenu de votre panier, la langue choisie et votre choix concernant le bandeau cookies. Ces informations servent à faire fonctionner le site selon vos actions et préférences.",
          },
          {
            label: "Outils de mesure / suivi",
            details:
              "Aucun outil d’analyse d’audience, de publicité ou de suivi marketing (analytics, pixels, traceurs publicitaires, etc.) n’est utilisé sur ce site. Aucun traceur non nécessaire n’est déposé sans votre accord.",
          },
        ],
      },
      {
        icon: FileText,
        title: "3. Durées de conservation",
        bullets: [
          "Messages du formulaire de contact : conservés le temps nécessaire au traitement de votre demande et à son suivi, puis supprimés ou archivés de manière limitée lorsque la demande est close, sauf obligation légale ou nécessité de protection en cas de litige.",
          "Compte client : conservé tant que votre compte est actif ; vous pouvez demander sa suppression (voir section 4).",
          "Données de commande, facturation/paiement et reçus : conservées le temps d’exécuter la commande et, lorsque les obligations légales s’appliquent, pendant les délais de conservation prévus par le droit commercial et fiscal (en général 6 à 10 ans conformément aux §§ 257 HGB et 147 AO), puis supprimées ou limitées.",
          "Cookie de session : en principe pour la durée de la session de navigation (supprimé à la fermeture du navigateur).",
          "Données stockées localement (panier, langue, choix cookies) : conservées dans votre navigateur jusqu’à leur suppression par vous-même ou par les paramètres/nettoyage de votre navigateur.",
        ],
      },
      {
        icon: Trash2,
        title: "4. Demander la suppression de vos données / contact",
        intro:
          "Vous pouvez demander l’accès, la rectification ou la suppression de vos données personnelles, dans les limites prévues par la réglementation applicable.",
        bullets: [
          "Par e-mail : Kontakt@gartengespann.de (indiquez votre nom, l’adresse e-mail concernée et la nature de votre demande : suppression de compte, suppression d’un message de contact, etc.).",
          "Par téléphone : +49 178 4228814.",
          "Par courrier : GARTEN-GESPANN, Goethestraße 51, 56743 Mendig-Niedermendig, Allemagne.",
          "Vous pouvez également nous écrire via la page de contact du site.",
        ],
      },
    ],
    contactTitle: "Une question ou une demande de suppression ?",
    contactText:
      "Contactez-nous et nous traiterons votre demande dans les meilleurs délais, conformément aux obligations légales applicables.",
    contactButton: "Nous contacter",
  },
  de: {
    title: "Datenschutzerklärung",
    intro:
      "Diese Seite erläutert, welche personenbezogenen Daten auf dieser Website tatsächlich erhoben werden, zu welchen Zwecken sie verarbeitet werden, wie lange sie gespeichert werden und wie Sie uns zur Löschung Ihrer Daten kontaktieren können. Es werden keine Daten zu Werbezwecken erhoben und keine Analyse- oder Marketing-Tracking-Tools eingesetzt.",
    blocks: [
      {
        icon: Database,
        title: "1. Erhobene Daten und Zwecke",
        intro: "Wir erheben nur Daten, die für die angeforderten Dienste erforderlich sind:",
        items: [
          {
            label: "Kontaktformular",
            details:
              "Daten: Name, E-Mail-Adresse, Betreff und Nachricht. Zweck: Entgegennahme, Bearbeitung und Beantwortung Ihrer Anfrage sowie Kommunikation im Zusammenhang damit.",
          },
          {
            label: "Kontoerstellung / Anmeldung",
            details:
              "Daten: Vorname, Nachname, E-Mail-Adresse und Passwort (als Hash gespeichert, niemals im Klartext). Zweck: Erstellung und Verwaltung Ihres Kontos, Authentifizierung und Schutz des Zugriffs auf Ihren Bereich.",
          },
          {
            label: "Bestellung und Zahlung",
            details:
              "Daten: bei der Bestellung angegebene Kontakt- und Liefer-/Rechnungsdaten, Warenkorbinhalt/bestellte Artikel, Betrag sowie für die Abwicklung und Nachverfolgung von Bestellung und Zahlung erforderliche Informationen (einschließlich der bei der Online-Zahlung erzeugten Transaktions-/Zahlungsreferenzen). Zweck: Abwicklung Ihrer Bestellung, Zahlungsabwicklung, Lieferung, Kundenservice, Rechnungen/Belege und Erfüllung gesetzlicher Pflichten im Zusammenhang mit dem Verkauf.",
          },
          {
            label: "Kundenbereich (kontobezogene Funktionen)",
            details:
              "Daten: Ihrem Konto zugeordnete Bestellungen/Rechnungen/Belege sowie – wenn Sie angemeldet sind – Ihre gespeicherten Favoriten. Zweck: Bereitstellung und Nutzung der Kontofunktionen.",
          },
        ],
      },
      {
        icon: Cookie,
        title: "2. Cookies, lokale Speicherung und Messtools",
        intro: "Die Website verwendet nur technisch notwendige Technologien:",
        items: [
          {
            label: "Sitzungs-Cookie (notwendig)",
            details:
              "Ein Sitzungs-Cookie wird für Anmeldung, Sitzungsverwaltung und Schutz vor missbräuchlichen Anfragen (CSRF-Schutz) verwendet. Es ist für die sichere Nutzung des Kontos und bestimmter Abläufe (Formulare/Bestellung) erforderlich.",
          },
          {
            label: "Lokale Speicherung im Browser (notwendig/funktional)",
            details:
              "Im Browser können lokal gespeichert werden: der Inhalt Ihres Warenkorbs, die gewählte Sprache und Ihre Auswahl im Cookie-Banner. Diese Informationen dienen der funktionalen Bereitstellung der Website entsprechend Ihren Aktionen und Einstellungen.",
          },
          {
            label: "Mess- und Tracking-Tools",
            details:
              "Es werden keine Analyse-, Werbe- oder Marketing-Tracking-Tools (Analytics, Pixel, Werbe-Tracker usw.) eingesetzt. Nicht erforderliche Tracker werden ohne Ihre Einwilligung nicht gesetzt.",
          },
        ],
      },
      {
        icon: FileText,
        title: "3. Speicherdauer",
        bullets: [
          "Nachrichten über das Kontaktformular: Speicherung für die Dauer der Bearbeitung Ihrer Anfrage und der anschließenden Kommunikation, danach Löschung oder eingeschränkte Aufbewahrung, sofern keine gesetzlichen Pflichten oder berechtigten Interessen (z. B. Rechtsverteidigung) entgegenstehen.",
          "Kundenkonto: Speicherung, solange Ihr Konto aktiv ist; eine Löschung können Sie beantragen (siehe Abschnitt 4).",
          "Bestell-, Rechnungs-/Zahlungs- und Belegdaten: Speicherung zur Vertragsabwicklung und – soweit einschlägig – zur Erfüllung gesetzlicher Aufbewahrungspflichten des Handels- und Steuerrechts (in der Regel 6 bis 10 Jahre gemäß §§ 257 HGB und 147 AO), anschließend Löschung oder Einschränkung der Verarbeitung.",
          "Sitzungs-Cookie: grundsätzlich für die Dauer der Browsersitzung (Löschung beim Schließen des Browsers).",
          "Lokal gespeicherte Daten (Warenkorb, Sprache, Cookie-Auswahl): verbleiben in Ihrem Browser, bis Sie diese selbst oder über Browser-Einstellungen/-Bereinigung löschen.",
        ],
      },
      {
        icon: Trash2,
        title: "4. Löschung Ihrer Daten beantragen / Kontakt",
        intro:
          "Sie können Auskunft, Berichtigung oder Löschung Ihrer personenbezogenen Daten im Rahmen der geltenden gesetzlichen Vorgaben verlangen.",
        bullets: [
          "Per E-Mail: Kontakt@gartengespann.de (bitte nennen Sie Ihren Namen, die betroffene E-Mail-Adresse und Ihr Anliegen, z. B. Kontolöschung oder Löschung einer Kontaktanfrage).",
          "Telefonisch: +49 178 4228814.",
          "Per Post: GARTEN-GESPANN, Goethestraße 51, 56743 Mendig-Niedermendig, Deutschland.",
          "Sie können uns auch über die Kontaktseite der Website erreichen.",
        ],
      },
    ],
    contactTitle: "Fragen oder Wunsch auf Löschung?",
    contactText:
      "Kontaktieren Sie uns – wir bearbeiten Ihr Anliegen so schnell wie möglich im Rahmen der geltenden gesetzlichen Pflichten.",
    contactButton: "Kontakt aufnehmen",
  },
  en: {
    title: "Privacy Policy",
    intro:
      "This page explains what personal data is actually collected on this website, why it is processed, how long it is kept, and how you can contact us to request deletion. No data is collected for advertising purposes and no analytics or marketing tracking tools are used.",
    blocks: [
      {
        icon: Database,
        title: "1. Data collected and purposes",
        intro: "We only collect data necessary for the services you request:",
        items: [
          {
            label: "Contact form",
            details:
              "Data: name, email address, subject and message. Purpose: to receive, handle and respond to your enquiry and manage follow-up communication.",
          },
          {
            label: "Account creation / sign-in",
            details:
              "Data: first name, last name, email address and password (stored in hashed form, never in plain text). Purpose: to create and manage your account, authenticate you and secure access to your area.",
          },
          {
            label: "Orders and payment",
            details:
              "Data: contact and delivery/billing information provided during checkout, cart contents/ordered items, amount and information needed to process and track the order and payment (including transaction/payment references generated during online payment). Purpose: to process your order, handle payment and delivery, provide customer service, issue invoices/receipts and comply with legal obligations related to sales.",
          },
          {
            label: "Customer account (account-related features)",
            details:
              "Data: orders/invoices/receipts linked to your account and, when signed in, your saved favourites. Purpose: to let you view your information and use account features.",
          },
        ],
      },
      {
        icon: Cookie,
        title: "2. Cookies, local storage and measurement tools",
        intro: "The website uses only technologies necessary for its operation:",
        items: [
          {
            label: "Session cookie (necessary)",
            details:
              "A session cookie is used for sign-in, session management and protection against abusive requests (CSRF protection). It is required for secure use of the account and certain steps (forms/checkout).",
          },
          {
            label: "Browser local storage (necessary/functional)",
            details:
              "Your browser may store locally: your cart contents, selected language and your cookie-banner choice. This information is used to make the site work according to your actions and preferences.",
          },
          {
            label: "Measurement / tracking tools",
            details:
              "No analytics, advertising or marketing tracking tools (analytics, pixels, ad trackers, etc.) are used on this site. No non-essential trackers are set without your consent.",
          },
        ],
      },
      {
        icon: FileText,
        title: "3. Retention periods",
        bullets: [
          "Contact form messages: kept for as long as needed to handle your request and follow-up communication, then deleted or kept in a limited way unless legal obligations or legitimate interests (e.g. legal defence) require otherwise.",
          "Customer account: kept while your account is active; you can request deletion (see section 4).",
          "Order, billing/payment and receipt data: kept to perform the contract and, where applicable, to comply with statutory commercial and tax retention obligations (generally 6 to 10 years under §§ 257 HGB and 147 AO), then deleted or restricted.",
          "Session cookie: generally for the duration of the browser session (deleted when the browser is closed).",
          "Locally stored data (cart, language, cookie choice): kept in your browser until you delete it yourself or clear your browser data.",
        ],
      },
      {
        icon: Trash2,
        title: "4. Request deletion of your data / contact",
        intro:
          "You can request access to, correction or deletion of your personal data, subject to applicable legal requirements.",
        bullets: [
          "By email: Kontakt@gartengespann.de (please include your name, the relevant email address and what you are requesting, e.g. account deletion or deletion of a contact message).",
          "By phone: +49 178 4228814.",
          "By post: GARTEN-GESPANN, Goethestraße 51, 56743 Mendig-Niedermendig, Germany.",
          "You can also reach us via the website contact page.",
        ],
      },
    ],
    contactTitle: "Questions or a deletion request?",
    contactText:
      "Contact us and we will handle your request as promptly as possible, in line with applicable legal obligations.",
    contactButton: "Contact us",
  },
};

function PrivacyPage() {
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
