interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  tag?: string;
  tagColor?: string;
  desc: string;
}

interface DropSectionProps {
  addToCart: (name: string, price: number) => void;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Vandal Hoodie',
    price: 450000,
    image: 'https://image-cdn.hypb.st/https%3A%2F%2Fs3.store.hypebeast.com%2Fmedia%2Fimage%2Ff4%2Fba%2Fhoodie-2-1-c7ab5.jpg?fit=max&w=720&q=90',
    tag: 'SALE',
    tagColor: 'bg-blue-600 text-white',
    desc: '330gsm Heavy Cotton',
  },
  {
    id: 2,
    name: '"Besok" Tee',
    price: 249000,
    image: 'https://mauiandsons.com/cdn/shop/files/MTS15590-BLACK_1.jpg?v=1751494459&width=1500',
    tag: 'BEST',
    tagColor: 'bg-white text-black',
    desc: 'Boxy Fit Architecture',
  },
  {
    id: 3,
    name: 'Cyber Kicks',
    price: 899000,
    image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F07%2F28%2Fnigel-sylvester-x-air-jordan-4-rm-driveway-grey-profile.jpg?w=1080&cbr=1&q=90&fit=max',
    desc: 'Limited Utility',
  },
];

export default function DropSection({ addToCart }: DropSectionProps) {
  return (
    <section id="drop" className="py-20 bg-gray-50 dark:bg-[#050505] overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4" data-aos="fade-up">
          <div className="space-y-1">
            <span className="text-[9px] font-bold tracking-[0.4em] text-blue-500 uppercase block">
              Drop 001/26
            </span>
            <h2 className="font-brutal text-4xl md:text-5xl uppercase tracking-tighter text-black dark:text-white transition-colors duration-300">
              Current <span className="text-blue-600 italic">Drop</span>
            </h2>
          </div>
          <span className="text-[8px] font-bold tracking-[0.2em] border border-black/10 dark:border-white/10 px-3 py-1.5 uppercase text-gray-500 transition-colors duration-300">
            EST. 2026 © IDENTITY
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative flex flex-col"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="relative overflow-hidden bg-gray-200 dark:bg-zinc-900 aspect-[4/5] border border-black/5 dark:border-white/5 transition-colors duration-300">
                {product.tag && (
                  <div
                    className={`absolute top-0 right-0 z-20 ${product.tagColor} text-[8px] font-bold px-3 py-1 uppercase tracking-widest`}
                  >
                    {product.tag}
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-brutal text-xl uppercase tracking-tighter text-black dark:text-white leading-none transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-[9px] uppercase tracking-[0.1em] mt-1">
                      {product.desc}
                    </p>
                  </div>
                  <p className="font-bold text-blue-500 text-lg tracking-tighter">
                    {product.price.toLocaleString()}K
                  </p>
                </div>

                <button
                  onClick={() => addToCart(product.name, product.price)}
                  className="group/btn relative w-full inline-flex items-center justify-center gap-3 py-3 border border-black/10 dark:border-white/10 hover:border-blue-600 transition-all duration-500 overflow-hidden bg-black/5 dark:bg-white/5"
                >
                  <span className="text-[8px] font-bold uppercase tracking-[0.2em] relative z-10 text-black dark:text-white transition-colors duration-300">
                    Add to Cart
                  </span>
                  <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-500"></div>
                  <i className="fa-solid fa-plus text-[8px] relative z-10 text-black dark:text-white transition-colors duration-300"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
