import { useRef, useState, useEffect } from "react";
import { User } from "lucide-react";
import { useLang } from "@/lib/i18n";

const names = [
  "Daniel Fischer", "Michael Weber", "Peter Hoffmann",
  "Thomas Schneider", "Andreas Wagner", "Julia Becker",
  "Markus Richter", "Sabine Keller", "Klaus Zimmermann",
  "Nicole Hartmann", "Stefan König", "Christina Vogel",
];

export function Testimonials() {
  const { t } = useLang();
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const isDragging = useRef(false);
  const dragOffset = useRef(0);
  const startXRef = useRef(0);
  const startOffsetRef = useRef(0);
  const totalPages = Math.ceil(names.length / itemsPerPage);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const step = containerRef.current.offsetWidth;
    setOffset(-step * page);
    dragOffset.current = -step * page;
  }, [page]);

  const onDragStart = (clientX: number) => {
    isDragging.current = true;
    startXRef.current = clientX;
    startOffsetRef.current = offset;
    dragOffset.current = offset;
  };

  const onDragMove = (clientX: number) => {
    if (!isDragging.current) return;
    const dx = clientX - startXRef.current;
    dragOffset.current = startOffsetRef.current + dx;
    setOffset(dragOffset.current);
  };

  const onDragEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const step = containerRef.current?.offsetWidth ?? 0;
    const moved = dragOffset.current - startOffsetRef.current;
    if (Math.abs(moved) > step * 0.2) {
      const dir = moved > 0 ? -1 : 1;
      const next = Math.max(0, Math.min(totalPages - 1, page + dir));
      if (next !== page) setPage(next);
      else {
        const snap = -step * page;
        setOffset(snap);
        dragOffset.current = snap;
      }
    } else {
      const snap = -step * page;
      setOffset(snap);
      dragOffset.current = snap;
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#f8f8f8] to-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <h2 className="text-center text-[clamp(2rem,4.5vw,3.5rem)] font-light leading-tight text-[#2d2d38]" style={{ fontFamily: "'Inter','Poppins','Open Sans',sans-serif", fontWeight: 300 }}>
          {t("testiTitle")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-gray-500 sm:mt-6 sm:text-lg md:text-xl">
          {t("testiSub")}
        </p>

        <div
          ref={containerRef}
          className="relative mt-10 overflow-hidden select-none sm:mt-12 md:mt-16"
          onMouseDown={(e) => onDragStart(e.clientX)}
          onMouseMove={(e) => onDragMove(e.clientX)}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => onDragMove(e.touches[0].clientX)}
          onTouchEnd={onDragEnd}
        >
          <div
            className="flex cursor-grab active:cursor-grabbing"
            style={{
              transform: `translateX(${offset}px)`,
              transition: isDragging.current ? "none" : "transform 500ms ease-in-out",
            }}
          >
            {names.map((name, i) => (
              <div
                key={i}
                className={itemsPerPage === 1 ? "w-full shrink-0 px-2" : itemsPerPage === 2 ? "w-1/2 shrink-0 px-2" : "w-1/3 shrink-0 px-2 md:px-3"}
              >
                <div className="flex h-full flex-col justify-between rounded-[18px] bg-white p-5 shadow-[0_2px_20px_rgba(0,0,0,0.06)] sm:p-6 md:p-8">
                  <div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, s) => (
                        <span key={s} className="text-lg" style={{ color: "#FFC107" }}>★</span>
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-gray-700 sm:text-[15px] md:text-[17px]">
                      {t(`testi${i + 1}` as never)}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent md:h-11 md:w-11">
                      <User className="h-4 w-4 text-accent-foreground md:h-5 md:w-5" />
                    </div>
                    <span className="text-sm font-bold text-black md:text-lg">{name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 sm:mt-10">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === page ? "bg-[#3B82F6]" : "bg-[#E5E7EB]"
              }`}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
