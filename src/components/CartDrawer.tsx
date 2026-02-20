interface CartItem {
  name: string;
  price: number;
  qty: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  toggleCart: () => void;
  cart: CartItem[];
  removeItem: (name: string) => void;
  updateQty: (name: string, delta: number) => void;
}

export default function CartDrawer({ isOpen, toggleCart, cart, removeItem, updateQty }: CartDrawerProps) {
  const WA_NUMBER = "628123456789"; // GANTI NOMOR ANDA DISINI

  const checkoutWhatsApp = () => {
    if (cart.length === 0) return alert("Bag is empty!");
    let msg = `*ORDER - BESOKLAGI™*\n\n`;
    cart.forEach((i) => (msg += `- ${i.name} (${i.qty}x)\n`));
    const total = cart.reduce((acc, i) => acc + i.price * i.qty, 0);
    msg += `\n*Total: IDR ${total.toLocaleString()}*`;
    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  const total = cart.reduce((acc, i) => acc + i.price * i.qty, 0);

  return (
    <div
      id="cart-drawer"
      className={`fixed top-0 right-0 w-full md:w-[400px] h-full bg-white dark:bg-[#0a0a0a] z-[100] border-l border-black/10 dark:border-white/10 p-8 flex flex-col shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center mb-10">
        <h2 className="font-brutal text-xl uppercase italic text-black dark:text-white transition-colors duration-300">Keranjang</h2>
        <button
          onClick={toggleCart}
          className="text-[10px] uppercase tracking-widest border border-black/20 dark:border-white/20 px-4 py-2 hover:bg-red-600 hover:text-white hover:border-red-600 transition text-black dark:text-white"
        >
          Close
        </button>
      </div>
      <div id="cart-items" className="flex-1 overflow-y-auto space-y-6">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-6 opacity-60">
            <div className="w-20 h-20 border border-black/10 dark:border-white/10 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/5 transition-colors duration-300">
              <i className="fa-solid fa-bag-shopping text-3xl text-gray-400 dark:text-gray-500"></i>
            </div>
            <div>
              <p className="font-brutal text-lg uppercase tracking-widest mb-2 text-black dark:text-white transition-colors duration-300">Empty Void</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Your bag contains nothing.</p>
            </div>
            <button 
              onClick={toggleCart}
              className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-blue-600 pb-1 hover:text-blue-500 transition-colors text-black dark:text-white"
            >
              Return to Shop
            </button>
          </div>
        ) : (
          cart.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-center bg-gray-50 dark:bg-white/5 p-4 border border-black/5 dark:border-white/5 transition-colors duration-300"
            >
              <div className="flex-1">
                <h4 className="font-bold text-xs uppercase text-black dark:text-white transition-colors duration-300">{item.name}</h4>
                <p className="text-blue-500 text-[10px] font-bold mt-1">
                  IDR {item.price.toLocaleString()}
                </p>
              </div>

              <div className="flex items-center gap-3 mr-4">
                <button 
                  onClick={() => updateQty(item.name, -1)}
                  className="w-6 h-6 flex items-center justify-center border border-black/20 dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/10 text-[10px] transition-colors text-black dark:text-white"
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
                <span className="text-xs font-bold min-w-[1.5em] text-center text-black dark:text-white transition-colors duration-300">{item.qty}</span>
                <button 
                  onClick={() => updateQty(item.name, 1)}
                  className="w-6 h-6 flex items-center justify-center border border-black/20 dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/10 text-[10px] transition-colors text-black dark:text-white"
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>

              <button
                onClick={() => removeItem(item.name)}
                className="text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-500 transition"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          ))
        )}
      </div>
      <div className="mt-8 border-t border-black/10 dark:border-white/10 pt-8 transition-colors duration-300">
        <div className="flex justify-between text-2xl font-bold mb-6 font-brutal text-black dark:text-white transition-colors duration-300">
          <span>TOTAL</span>
          <span id="cart-total" className="text-blue-500">
            {total.toLocaleString()}
          </span>
        </div>
        <button
          onClick={checkoutWhatsApp}
          className="w-full bg-green-600 py-6 font-bold uppercase tracking-widest hover:bg-green-700 transition text-white"
        >
          Checkout to WA
        </button>
      </div>
    </div>
  );
}
