import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";

const SLIDES = [
  {
    src: "/hero-trailer.webp",
    mobileSrc: "/hero-trailer-mobile.webp",
    key: "trailers",
    position: "50% 50%",
  },
  {
    src: "/hero-lawn-mower.webp",
    mobileSrc: "/hero-lawn-mower-mobile.webp",
    key: "lawn-mowers",
    position: "72% 55%",
  },
  {
    src: "/hero-chainsaw.webp",
    mobileSrc: "/hero-chainsaw-mobile.webp",
    key: "chainsaws",
    position: "55% 50%",
  },
  { src: "/50-1.webp", mobileSrc: "/50-1-mobile.webp", key: "firewood", position: "50% 50%" },
  {
    src: "/accessories-trailer-hitch.webp",
    mobileSrc: "/accessories-trailer-hitch-mobile.webp",
    key: "accessories",
    position: "70% 50%",
  },
  { src: "/51-1.webp", mobileSrc: "/51-1-mobile.webp", key: "wood-pellets", position: "50% 50%" },
  {
    src: "/49-1.webp",
    mobileSrc: "/49-1-mobile.webp",
    key: "wood-briquettes",
    position: "50% 50%",
  },
  {
    src: "/52-1.webp",
    mobileSrc: "/52-1-mobile.webp",
    key: "firelighters-kindling",
    position: "50% 50%",
  },
  { src: "/53-1.webp", mobileSrc: "/53-1-mobile.webp", key: "wood-stoves", position: "50% 50%" },
] as const;

const AUTOPLAY_MS = 6000;
const FADE_MS = 1400;

export function Hero() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const activeRef = useRef(0);
  const transitionTimeout = useRef<number | null>(null);

  const changeSlide = useCallback((next: number) => {
    if (next === activeRef.current) return;

    setPrevious(activeRef.current);
    activeRef.current = next;
    setActive(next);

    if (transitionTimeout.current !== null) {
      window.clearTimeout(transitionTimeout.current);
    }
    transitionTimeout.current = window.setTimeout(() => {
      setPrevious(null);
      transitionTimeout.current = null;
    }, FADE_MS);
  }, []);

  useEffect(() => {
    if (paused) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(
      () => changeSlide((activeRef.current + 1) % SLIDES.length),
      AUTOPLAY_MS,
    );

    return () => window.clearInterval(interval);
  }, [paused, changeSlide]);

  useEffect(
    () => () => {
      if (transitionTimeout.current !== null) {
        window.clearTimeout(transitionTimeout.current);
      }
    },
    [],
  );

  return (
    <section
      className="relative isolate flex min-h-[calc(100svh-8.5rem)] w-full items-center overflow-hidden bg-[#1d130b] text-white sm:min-h-[calc(100svh-8.75rem)] md:min-h-[calc(100svh-9.25rem)]"
      role="region"
      aria-roledescription="carousel"
      aria-label={t("heroCarouselLabel")}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Background carousel */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {(previous === null ? [active] : [previous, active]).map((index) => {
          const slide = SLIDES[index];
          const isActive = index === active;

          return (
            <picture
              key={slide.key}
              className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              <source media="(max-width: 767px)" srcSet={slide.mobileSrc} type="image/webp" />
              <img
                src={slide.src}
                alt=""
                width={1920}
                height={1080}
                loading={isActive ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
                style={{ objectPosition: slide.position }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </picture>
          );
        })}

        {/* Warm dark overlay (~45%) for legibility */}
        <div className="absolute inset-0 bg-[#2a1a0e]/45" />

        {/* Extra gradient on the text side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#160d06]/85 via-[#160d06]/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#120a05]/80 to-transparent" />
      </div>

      {/* Fixed content */}
      <div className="container mx-auto px-4 pb-24 pt-12 md:pb-28 md:pt-20">
        <div className="max-w-3xl text-left">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent sm:text-sm">
            {t("heroKicker")}
          </p>

          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            {t("heroTitle")}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:mt-6 md:text-xl">
            {t("heroSubtitle")}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-10">
            <Button
              asChild
              size="lg"
              className="h-12 bg-accent px-7 text-base font-semibold text-accent-foreground shadow-lg shadow-black/20 transition-colors hover:bg-accent/90"
            >
              <Link to="/shop">
                {t("heroCtaPrimary")}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 border-white/70 bg-transparent px-7 text-base font-semibold text-white transition-colors hover:bg-white hover:text-[#1d130b]"
            >
              <Link to="/contact">
                <Phone className="h-5 w-5" />
                {t("heroCtaSecondary")}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel dots */}
      <div className="absolute inset-x-0 bottom-12 md:bottom-14">
        <div className="container mx-auto px-4">
          <div
            className="flex items-center justify-center gap-2.5"
            role="group"
            aria-label={t("heroCarouselLabel")}
          >
            {SLIDES.map((slide, index) => {
              const isActive = index === active;
              return (
                <button
                  key={slide.key}
                  type="button"
                  aria-current={isActive ? "true" : undefined}
                  aria-label={`${t("heroSlideLabel")} ${index + 1}`}
                  onClick={() => changeSlide(index)}
                  className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1d130b] ${
                    isActive ? "w-9 bg-accent" : "w-2.5 bg-white/45 hover:bg-white/80"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
