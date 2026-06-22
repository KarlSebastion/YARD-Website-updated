import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    word: "RESULTS",
    line: "Train with purpose. See real change.",
    emoji: "🔥",
    gradient: "from-red-900/60 via-background to-background",
    accent: "bg-primary/20",
  },
  {
    word: "STRENGTH",
    line: "Built through structure, not chaos.",
    emoji: "💪",
    gradient: "from-orange-900/40 via-background to-background",
    accent: "bg-orange-500/15",
  },
  {
    word: "ENERGY",
    line: "Open air. Raw iron. Full oxygen.",
    emoji: "⚡",
    gradient: "from-yellow-900/30 via-background to-background",
    accent: "bg-yellow-500/10",
  },
  {
    word: "FOCUS",
    line: "Six people. One coach. Zero noise.",
    emoji: "🎯",
    gradient: "from-blue-900/30 via-background to-background",
    accent: "bg-blue-500/10",
  },
  {
    word: "COMMUNITY",
    line: "Small group. Big accountability.",
    emoji: "🤝",
    gradient: "from-emerald-900/30 via-background to-background",
    accent: "bg-emerald-500/10",
  },
];

const SlideCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  const handleManual = (fn: () => void) => {
    setIsAutoPlaying(false);
    fn();
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const slide = slides[current];

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-primary text-sm tracking-[0.3em] mb-4 text-center">
          WHAT DRIVES US
        </p>
        <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center">
          FIVE PILLARS OF <span className="text-gradient">THE YARD</span>
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Slide */}
          <div
            className={`relative min-h-[320px] md:min-h-[380px] flex flex-col items-center justify-center text-center p-8 md:p-12 border border-border bg-gradient-to-b ${slide.gradient} transition-all duration-700`}
          >
            {/* Accent blob */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl ${slide.accent} pointer-events-none`}
            />

            <span className="text-5xl md:text-6xl mb-4 relative z-10">
              {slide.emoji}
            </span>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-medium text-gradient relative z-10 mb-4 tracking-tight">
              {slide.word}
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground relative z-10 max-w-md">
              {slide.line}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={() => handleManual(prev)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    handleManual(() => setCurrent(i));
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-primary"
                      : "w-3 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => handleManual(next)}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlideCarousel;
