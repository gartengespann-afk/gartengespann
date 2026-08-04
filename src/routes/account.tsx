import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";
import { useLang } from "@/lib/i18n";
import { getOrders } from "@/lib/data";

export const Route = createFileRoute("/account")({
  head: () => ({ meta: [{ title: "Mein Konto — GARTEN-GESPANN" }] }),
  component: AccountPage,
});

function AccountPage() {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const { t } = useLang();

  useEffect(() => { if (!loading && !user) navigate({ to: "/auth" }); }, [user, loading, navigate]);

  const orders = getOrders();

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-10 md:py-14 mb-6 md:mb-8">
        <h1 className="text-center text-2xl md:text-4xl font-bold">{t("account")}</h1>
      </div>
      <div className="container mx-auto px-4 py-4 md:py-8 flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8 mt-4 md:mt-8">
          <div>
            <p className="text-muted-foreground text-sm break-all">{user.email}</p>
          </div>
          <Button variant="outline" className="w-full sm:w-auto" onClick={() => signOut().then(() => navigate({ to: "/" }))}>
            {t("logout")}
          </Button>
        </div>
        <h2 className="text-xl font-semibold mb-4">{t("myOrders")}</h2>
        {orders.length === 0 ? (
          <p className="text-muted-foreground">{t("noOrders")}</p>
        ) : (
          <div className="space-y-4">
            {orders.map((o) => (
              <div key={o.id} className="rounded-lg border p-4 bg-card">
                <div className="flex justify-between mb-2">
                  <span className="font-mono text-xs">#{o.id.slice(0, 8)}</span>
                  <span className="text-sm">{new Date(o.created_at).toLocaleDateString()}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {(o.order_items as unknown as unknown[])?.length ?? 0} items
                </div>
                <div className="font-bold mt-2">{Number(o.total_eur).toFixed(2)} €</div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}