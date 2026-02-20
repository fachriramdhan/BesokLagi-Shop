export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="bg-white text-black py-20 md:py-28 overflow-hidden relative"
    >
      <div className="absolute top-10 right-0 font-brutal text-[20vw] md:text-[12vw] leading-none opacity-[0.04] pointer-events-none select-none translate-x-1/4 -rotate-12 md:rotate-0">
        PROTEST
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="w-full md:w-[40%] relative" data-aos="zoom-in-up">
            <div className="relative z-10 overflow-hidden border-[6px] md:border-[10px] border-black aspect-[4/3] shadow-[20px_20px_0px_0px_rgba(0,0,0,0.05)]">
              <img
                src="https://image-cdn.hypb.st/https%3A%2F%2Fid.hypebeast.com%2Ffiles%2F2025%2F01%2F13%2Fdirty-business-comeback-dengan-dirty-sport-series-collection-7.jpg?q=75&w=800&cbr=1&fit=max"
                className="w-full h-full object-cover grayscale active:grayscale-0 md:hover:grayscale-0 transition-all duration-700"
                alt="Manifesto Image"
              />
            </div>

            <div className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 bg-blue-600 text-white p-4 md:p-6 font-brutal text-xs md:text-xl z-20 shadow-2xl rotate-3 active:rotate-0 transition-transform duration-500 cursor-default">
              <span className="animate-pulse">●</span> DON'T BELIEVE
              <br className="hidden md:block" />
              THE HYPE.
            </div>
          </div>

          <div className="w-full md:w-[55%]" data-aos="fade-up">
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <span className="h-[2px] w-8 md:w-12 bg-blue-600"></span>
              <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600">
                Our Core Belief
              </span>
            </div>

            <h2 className="font-brutal text-5xl md:text-7xl mb-6 leading-[0.85] tracking-tighter">
              THE BRUTAL<br />
              <span className="italic text-gray-300 md:text-gray-400">MANIFESTO</span>
            </h2>

            <p className="text-sm md:text-lg leading-relaxed mb-8 md:mb-10 max-w-lg text-zinc-700">
              We don't design for everyone.
              <span className="bg-black text-white px-1.5 py-0.5 inline-block -rotate-1 mx-1">
                BesokLagi™
              </span>
              is a protest against the speed that kills originality.
              <span className="block mt-4 text-zinc-400 italic text-xs md:text-sm">
                "We are not always online. But when we are, we shape the future."
              </span>
            </p>

            <div className="mb-12">
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-6">
                Found us here:
              </p>
              <div className="grid grid-cols-2 md:flex md:flex-wrap gap-3 md:gap-8">
                <a
                  href="#"
                  className="flex items-center justify-center md:justify-start gap-3 p-3 md:p-0 border border-black/5 md:border-none rounded-sm active:bg-zinc-50 transition-all"
                >
                  <i className="fa-solid fa-bag-shopping text-lg md:text-xl text-orange-500"></i>
                  <span className="font-bold text-[10px] md:text-xs uppercase tracking-widest border-b-2 border-orange-500/20 md:border-orange-500">
                    Shopee
                  </span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center md:justify-start gap-3 p-3 md:p-0 border border-black/5 md:border-none rounded-sm active:bg-zinc-50 transition-all"
                >
                  <i className="fa-solid fa-store text-lg md:text-xl text-green-500"></i>
                  <span className="font-bold text-[10px] md:text-xs uppercase tracking-widest border-b-2 border-green-500/20 md:border-green-500">
                    Tokopedia
                  </span>
                </a>
                <a
                  href="#"
                  className="col-span-2 md:col-span-1 flex items-center justify-center md:justify-start gap-3 p-3 md:p-0 border border-black/5 md:border-none rounded-sm active:bg-zinc-50 transition-all"
                >
                  <i className="fa-brands fa-instagram text-lg md:text-xl text-pink-500"></i>
                  <span className="font-bold text-[10px] md:text-xs uppercase tracking-widest border-b-2 border-pink-500/20 md:border-pink-500">
                    Instagram
                  </span>
                </a>
              </div>
            </div>

            <a
              href="#"
              className="group relative flex md:inline-flex items-center justify-between md:justify-start gap-6 overflow-hidden border border-black/10 md:border-none p-4 md:p-0"
            >
              <span className="font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] md:border-b md:border-black/10 md:pb-1 group-hover:border-blue-600 transition-colors">
                Read Our Story
              </span>
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border border-black rounded-full group-hover:bg-black group-hover:text-white transition-all duration-500">
                <i className="fa-solid fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
