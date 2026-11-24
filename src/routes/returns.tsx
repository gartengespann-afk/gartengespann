import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Euro, Mail, PackageX, RefreshCw } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { useLang, type Lang } from "@/lib/i18n";

export const Route = createFileRoute("/returns")({
  head: () => ({
    meta: [
      { title: "Rückgabe und Erstattung – GARTEN-GESPANN" },
      {
        name: "description",
        content:
          "Informationen zu Widerruf, Rücksendung, Erstattung und möglichen Kosten bei GARTEN-GESPANN.",
      },
    ],
  }),
  component: ReturnsPage,
});

type Block = {
  icon: typeof RefreshCw;
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
    title: "Retours et remboursements",
    intro:
      "Cette page présente les conditions applicables aux retours et aux remboursements des commandes effectuées sur GARTEN-GESPANN, conformément à la législation applicable en Allemagne et dans l'Union européenne.",
    blocks: [
      {
        icon: Clock,
        title: "1. Délai de retour",
        bullets: [
          "Conformément à la législation applicable, les consommateurs disposent en principe d'un délai de 14 jours pour exercer leur droit légal de rétractation.",
          "Ce délai commence à compter du jour où le consommateur, ou un tiers désigné par lui autre que le transporteur, prend physiquement possession du produit.",
          "Pour exercer ce droit, le consommateur doit nous informer clairement de sa décision de se rétracter avant l'expiration du délai de 14 jours.",
        ],
      },
      {
        icon: PackageX,
        title: "2. Produits et exceptions au droit de rétractation",
        intro:
          "Le droit légal de rétractation peut faire l'objet d'exceptions dans certains cas expressément prévus par la législation applicable.",
        bullets: [
          "Cela concerne notamment certains produits personnalisés ou fabriqués selon les spécifications du consommateur, ainsi que certaines autres catégories de marchandises prévues par la loi.",
          "Toute exception au droit de rétractation est appliquée conformément aux dispositions légales en vigueur.",
          "Pour toute question concernant un produit, vous pouvez nous contacter avant de passer commande.",
        ],
      },
      {
        icon: RefreshCw,
        title: "3. Remboursement",
        bullets: [
          "En cas d'exercice valable du droit de rétractation, le remboursement est effectué conformément aux obligations légales applicables.",
          "Le remboursement intervient au plus tard dans les 14 jours suivant la réception de la notification de rétractation.",
          "Nous pouvons différer le remboursement jusqu'à la récupération des marchandises ou jusqu'à ce que le consommateur fournisse une preuve de leur expédition, selon la première de ces éventualités.",
          "Le remboursement est effectué au moyen de paiement utilisé lors de la transaction initiale, sauf accord exprès contraire avec le consommateur.",
        ],
      },
      {
        icon: Euro,
        title: "4. Frais de retour",
        bullets: [
          "Les frais directs de retour sont à la charge du consommateur, sauf indication contraire de notre part ou disposition légale différente.",
        ],
      },
      {
        icon: Mail,
        title: "5. Comment nous contacter",
        intro:
          "Pour toute question relative à un retour ou à un remboursement, vous pouvez nous contacter :",
        bullets: [
          "Par e-mail : Kontakt@gartengespann.de",
          "Par téléphone : +49 178 4228814",
          "Par courrier : GARTEN-GESPANN, Goethestraße 51, 56743 Mendig-Niedermendig, Allemagne",
          "Via le formulaire de contact disponible sur notre site.",
        ],
        outro:
          "Pour faciliter le traitement de votre demande, veuillez indiquer votre nom et, si possible, la référence de votre commande.\n\nL'exercice du droit légal de rétractation ne nécessite pas d'autorisation préalable de notre part.",
      },
    ],
    contactTitle: "Une question sur un retour ou un remboursement ?",
    contactText:
      "Contactez-nous pour toute question relative à un retour, à une rétractation ou à un remboursement.",
    contactButton: "Nous contacter",
  },
  de: {
    title: "Rückgaben und Erstattungen",
    intro:
      "Diese Seite erläutert die Bedingungen für Rückgaben und Erstattungen von Bestellungen auf GARTEN-GESPANN gemäß dem in Deutschland und der Europäischen Union geltenden Recht.",
    blocks: [
      {
        icon: Clock,
        title: "1. Rückgabefrist",
        bullets: [
          "Verbrauchern steht nach dem geltenden Recht grundsätzlich ein gesetzliches Widerrufsrecht von 14 Tagen zu.",
          "Die Frist beginnt mit dem Tag, an dem der Verbraucher oder ein von ihm benannter Dritter, der nicht der Beförderer ist, die Ware physisch in Besitz nimmt.",
          "Um dieses Recht auszuüben, muss der Verbraucher uns vor Ablauf der 14-tägigen Frist eindeutig über seinen Entschluss zum Widerruf informieren.",
        ],
      },
      {
        icon: PackageX,
        title: "2. Produkte und Ausnahmen vom Widerrufsrecht",
        intro:
          "Das gesetzliche Widerrufsrecht kann in bestimmten, gesetzlich ausdrücklich vorgesehenen Fällen ausgeschlossen sein.",
        bullets: [
          "Dies betrifft insbesondere bestimmte personalisierte oder nach Kundenspezifikation angefertigte Produkte sowie weitere gesetzlich vorgesehene Warenkategorien.",
          "Ausnahmen vom Widerrufsrecht werden im Einklang mit den geltenden gesetzlichen Bestimmungen angewendet.",
          "Bei Fragen zu einem Produkt können Sie uns vor Ihrer Bestellung kontaktieren.",
        ],
      },
      {
        icon: RefreshCw,
        title: "3. Erstattung",
        bullets: [
          "Im Falle eines wirksamen Widerrufs erfolgt die Erstattung gemäß den geltenden gesetzlichen Pflichten.",
          "Die Erstattung erfolgt spätestens binnen 14 Tagen nach Eingang der Widerrufserklärung.",
          "Wir können die Erstattung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis der Verbraucher den Nachweis erbracht hat, dass er die Waren zurückgesandt hat, je nachdem, welches der frühere Zeitpunkt ist.",
          "Die Erstattung erfolgt über dasselbe Zahlungsmittel, das bei der ursprünglichen Transaktion eingesetzt wurde, es sei denn, mit dem Verbraucher wurde ausdrücklich etwas anderes vereinbart.",
        ],
      },
      {
        icon: Euro,
        title: "4. Rücksendekosten",
        bullets: [
          "Die unmittelbaren Kosten der Rücksendung trägt der Verbraucher, sofern wir nichts anderes angegeben haben oder eine abweichende gesetzliche Regelung gilt.",
        ],
      },
      {
        icon: Mail,
        title: "5. So kontaktieren Sie uns",
        intro:
          "Bei Fragen zu einer Rückgabe oder Erstattung können Sie uns kontaktieren:",
        bullets: [
          "Per E-Mail: Kontakt@gartengespann.de",
          "Telefonisch: +49 178 4228814",
          "Per Post: GARTEN-GESPANN, Goethestraße 51, 56743 Mendig-Niedermendig, Deutschland",
          "Über das auf unserer Website verfügbare Kontaktformular.",
        ],
        outro:
          "Um die Bearbeitung Ihrer Anfrage zu erleichtern, geben Sie bitte Ihren Namen und, sofern möglich, die Bestellreferenz an.\n\nFür die Ausübung des gesetzlichen Widerrufsrechts ist keine vorherige Genehmigung unsererseits erforderlich.",
      },
    ],
    contactTitle: "Fragen zu Rückgabe oder Erstattung?",
    contactText:
      "Kontaktieren Sie uns bei Fragen zu Rückgabe, Widerruf oder Erstattung.",
    contactButton: "Kontakt aufnehmen",
  },
  en: {
    title: "Returns and refunds",
    intro:
      "This page sets out the conditions applicable to returns and refunds for orders placed on GARTEN-GESPANN, in accordance with the legislation applicable in Germany and the European Union.",
    blocks: [
      {
        icon: Clock,
        title: "1. Return period",
        bullets: [
          "In accordance with applicable law, consumers generally have a 14-day period to exercise their statutory right of withdrawal.",
          "This period begins on the day on which the consumer, or a third party designated by them other than the carrier, takes physical possession of the goods.",
          "To exercise this right, the consumer must clearly inform us of their decision to withdraw before the 14-day period expires.",
        ],
      },
      {
        icon: PackageX,
        title: "2. Products and exceptions to the right of withdrawal",
        intro:
          "The statutory right of withdrawal may be subject to exceptions in certain cases expressly provided for by applicable law.",
        bullets: [
          "This applies in particular to certain products that are personalised or made to the consumer's specifications, as well as certain other categories of goods provided for by law.",
          "Any exception to the right of withdrawal is applied in accordance with the applicable legal provisions.",
          "If you have any questions about a product, you may contact us before placing your order.",
        ],
      },
      {
        icon: RefreshCw,
        title: "3. Refunds",
        bullets: [
          "Where the right of withdrawal is validly exercised, the refund is made in accordance with the applicable legal obligations.",
          "The refund is made no later than 14 days after we receive notice of the withdrawal.",
          "We may withhold the refund until we have received the goods back or until the consumer has supplied evidence of having sent back the goods, whichever is the earliest.",
          "The refund is made using the same means of payment as used for the initial transaction, unless expressly agreed otherwise with the consumer.",
        ],
      },
      {
        icon: Euro,
        title: "4. Return costs",
        bullets: [
          "The direct costs of returning the goods are borne by the consumer, unless we indicate otherwise or a different legal provision applies.",
        ],
      },
      {
        icon: Mail,
        title: "5. How to contact us",
        intro:
          "If you have any questions about a return or a refund, you can contact us:",
        bullets: [
          "By email: Kontakt@gartengespann.de",
          "By phone: +49 178 4228814",
          "By post: GARTEN-GESPANN, Goethestraße 51, 56743 Mendig-Niedermendig, Germany",
          "Via the contact form available on our website.",
        ],
        outro:
          "To help us process your request, please provide your name and, if possible, your order reference.\n\nExercising the statutory right of withdrawal does not require our prior authorisation.",
      },
    ],
    contactTitle: "Questions about a return or refund?",
    contactText:
      "Contact us if you have any questions about a return, withdrawal or refund.",
    contactButton: "Contact us",
  },
};

function ReturnsPage() {
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
