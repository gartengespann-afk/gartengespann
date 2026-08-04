-- Allow guest (anon) checkout: anon can insert orders with user_id = null
GRANT INSERT ON public.orders TO anon;
GRANT INSERT ON public.order_items TO anon;

-- Separate policies per role (authenticated policy already exists)
CREATE POLICY "Guests can create orders" ON public.orders FOR INSERT TO anon
  WITH CHECK (user_id IS NULL);

CREATE POLICY "Guests can create order items" ON public.order_items FOR INSERT TO anon
  WITH CHECK (EXISTS(SELECT 1 FROM public.orders o WHERE o.id = order_id AND o.user_id IS NULL));
