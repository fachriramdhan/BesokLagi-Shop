import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxLayers = document.querySelectorAll('.parallax-layer');
      parallaxLayers.forEach((layer) => {
        const speed = parseFloat(layer.getAttribute('data-speed') || '0');
        (layer as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="hero-trigger"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-32 overflow-hidden bg-[#050505]"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <h2
          className="parallax-layer absolute top-10 left-[-2%] text-[12rem] md:text-[18rem] font-black text-white/[0.10] font-brutal leading-none"
          data-speed="-0.5"
        >
          01
        </h2>

        <div
          className="parallax-layer absolute top-[15%] right-[-5%] w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[120px]"
          data-speed="1.5"
        ></div>

        <div className="absolute bottom-[20%] left-0 w-full opacity-[0.10] font-brutal text-2xl md:text-3xl whitespace-nowrap animate-marquee tracking-[0.4em] uppercase italic select-none">
          URBAN SURVIVAL KIT — NO COMPROMISE — FUTURE IS LATE — IDENTITY FRAGMENT —
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="w-full md:w-7/12 flex flex-col items-start">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-[10px] font-bold tracking-[0.4em] uppercase mb-8 shadow-lg shadow-blue-600/20"
              data-aos="fade-down"
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
              Drop 001/2026
            </div>

            <h1 className="font-brutal leading-[0.8] tracking-tighter mb-10">
              <span
                className="block text-6xl md:text-[7rem] lg:text-[8.5rem] mix-blend-difference text-white"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                FUTURE
              </span>
              <div className="flex items-center gap-4 mt-4">
                <span
                  className="h-[2px] w-12 md:w-20 bg-blue-600 hidden md:block"
                  data-aos="scale-x"
                  data-aos-delay="400"
                ></span>
                <span
                  id="scramble-text"
                  className="text-blue-500 italic text-4xl md:text-[5.5rem] lg:text-[7rem] animate-glitch"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  IS LATE
                </span>
              </div>
            </h1>

            <div
              className="max-w-xs md:ml-24 border-l-2 border-white/10 pl-6 py-2"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <p className="text-gray-400 text-sm md:text-[15px] leading-relaxed mb-8 font-light">
                Born from the city’s chaos. Raw streetwear for the ones who don't seek permission.
                <span className="text-blue-500/60 block mt-2 uppercase tracking-widest text-[10px] font-bold">
                  Limited Edition 01/50
                </span>
              </p>

              <a
                href="#drop"
                className="group relative inline-flex items-center gap-6 py-4 px-8 border border-white/20 hover:border-blue-600 transition-all duration-500 overflow-hidden bg-white/5 backdrop-blur-md"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] relative z-10">
                  Explore Identity
                </span>
                <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <i className="fa-solid fa-arrow-right-long text-[10px] transition-transform group-hover:translate-x-2 relative z-10"></i>
              </a>
            </div>
          </div>

          <div
            className="w-full md:w-5/12 absolute md:relative top-[15%] md:top-0 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 flex justify-center md:justify-end opacity-40 md:opacity-100 z-0 md:z-10 pointer-events-none md:pointer-events-auto"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <div className="absolute -top-4 -right-4 md:-right-4 z-30 bg-white text-black px-3 py-2 md:px-5 md:py-3 shadow-[4px_4px_0px_0px_rgba(59,130,246,1)] md:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] rotate-12 md:rotate-6 transition-transform pointer-events-none scale-75 md:scale-100">
              <span className="block text-[6px] md:text-[8px] font-bold uppercase tracking-widest opacity-60">
                Identity
              </span>
              <span className="font-brutal text-[8px] md:text-sm">330GSM COTTON</span>
            </div>

            <div className="relative p-1.5 md:p-2 border border-white/5 md:border-white/10 bg-zinc-900/20 md:bg-zinc-900/30 backdrop-blur-sm md:backdrop-blur-md group">
              <div className="relative overflow-hidden w-[65vw] md:w-[300px] lg:w-[360px] aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8"
                  alt="Streetwear Hero"
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 md:bg-transparent md:bg-gradient-to-t md:from-black/60 md:via-transparent md:to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 w-full overflow-visible z-50">
        <div className="bg-blue-600 py-5 border-y-2 border-black rotate-[-1.5deg] w-[110%] relative left-[-5%] shadow-2xl transition-transform hover:rotate-0 duration-700 cursor-default">
          <div className="flex whitespace-nowrap animate-marquee font-brutal font-bold text-black uppercase tracking-[0.2em] text-xl md:text-3xl">
            <span className="mx-12">Limited Drop Available Now</span>
            <span className="mx-12 text-white italic">No Compromise</span>
            <span className="mx-12 font-black">BesokLagi™</span>
            <span className="mx-12 text-white italic">Future is Late</span>
            <span className="mx-12">Limited Drop Available Now</span>
            <span className="mx-12 text-white italic">No Compromise</span>
            <span className="mx-12 font-black">BesokLagi™</span>
            <span className="mx-12 text-white italic">Future is Late</span>
          </div>
        </div>
      </div>
    </section>
  );
}
