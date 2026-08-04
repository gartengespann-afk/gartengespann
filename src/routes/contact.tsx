import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLang } from "@/lib/i18n";
import { Building2, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontakt — GARTEN-GESPANN" },
      { name: "description", content: "Kontaktieren Sie uns per E-Mail, Telefon oder Adresse." },
      { property: "og:title", content: "Kontakt" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLang();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:gartengespann@gmail.com?subject=${encodeURIComponent(formData.subject || t("contactRequest"))}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <PageHeader title={t("contact")} />
      <div className="container mx-auto flex-1 px-4 py-10 md:py-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-semibold text-foreground">{t("contactFormTitle")}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{t("contactFormDesc")}</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="name">{t("contactName")}</label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder={t("contactNamePlaceholder")} required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="email">{t("contactEmail")}</label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder={t("contactEmailPlaceholder")} required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="subject">{t("contactSubject")}</label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder={t("contactSubjectPlaceholder")} required />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="message">{t("contactMessage")}</label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder={t("contactMessagePlaceholder")} rows={6} required />
              </div>

              <Button type="submit" className="w-full sm:w-auto">
                {t("contactSubmit")}
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border bg-primary/5 p-6">
              <h2 className="text-xl font-semibold text-foreground">{t("contactCompanyInfo")}</h2>
              <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{t("contactCompanyDesc")}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>+49 178 4228814</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>gartengespann@gmail.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>Goethestraße 51, 56743 Mendig-Niedermendig</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{t("contactHours")}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}