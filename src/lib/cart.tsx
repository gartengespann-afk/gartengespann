import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type CartItem = {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type Ctx = {
  items: CartItem[];
  add: (item: Omit<CartItem, "quantity">, qty?: number) => void;
  remove: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
  total: number;
  count: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<Ctx>({
  items: [], add: () => {}, remove: () => {}, updateQty: () => {}, clear: () => {}, total: 0, count: 0,
  isOpen: false, openCart: () => {}, closeCart: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem("cart");
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const add: Ctx["add"] = (item, qty = 1) => {
    setItems((prev) => {
      const found = prev.find((p) => p.id === item.id);
      if (found) return prev.map((p) => (p.id === item.id ? { ...p, quantity: p.quantity + qty } : p));
      return [...prev, { ...item, quantity: qty }];
    });
  };
  const remove = (id: string) => setItems((p) => p.filter((x) => x.id !== id));
  const updateQty = (id: string, qty: number) =>
    setItems((p) => p.map((x) => (x.id === id ? { ...x, quantity: Math.max(1, qty) } : x)));
  const clear = () => setItems([]);
  const total = items.reduce((s, x) => s + x.price * x.quantity, 0);
  const count = items.reduce((s, x) => s + x.quantity, 0);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    <CartContext.Provider value={{ items, add, remove, updateQty, clear, total, count, isOpen, openCart, closeCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);