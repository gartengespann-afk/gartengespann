-- Ajoute les champs nécessaires à la vérification du paiement Stripe et au suivi des commandes payées.
ALTER TABLE orders
  ADD COLUMN stripe_session_id VARCHAR(255) NULL AFTER status,
  ADD COLUMN stripe_payment_intent_id VARCHAR(255) NULL AFTER stripe_session_id,
  ADD COLUMN paid_at DATETIME NULL AFTER stripe_payment_intent_id,
  ADD KEY idx_orders_stripe_session (stripe_session_id);
