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
}

export default function CartDrawer({ isOpen, toggleCart, cart, removeItem }: CartDrawerProps) {
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
      className={`fixed top-0 right-0 w-full md:w-[400px] h-full bg-[#0a0a0a] z-[100] border-l border-white/10 p-8 flex flex-col shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center mb-10">
        <h2 className="font-brutal text-xl uppercase italic">Keranjang</h2>
        <button
          onClick={toggleCart}
          className="text-[10px] uppercase tracking-widest border border-white/20 px-4 py-2 hover:bg-red-600 transition"
        >
          Close
        </button>
      </div>
      <div id="cart-items" className="flex-1 overflow-y-auto space-y-6">
        {cart.length === 0 ? (
          <p className="text-gray-600 text-center italic mt-20">Your bag is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-center bg-white/5 p-4 border border-white/5"
            >
              <div>
                <h4 className="font-bold text-xs uppercase">{item.name}</h4>
                <p className="text-blue-500 text-[10px] font-bold mt-1">
                  {item.qty} x IDR {item.price.toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => removeItem(item.name)}
                className="text-gray-500 hover:text-red-500 transition"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          ))
        )}
      </div>
      <div className="mt-8 border-t border-white/10 pt-8">
        <div className="flex justify-between text-2xl font-bold mb-6 font-brutal">
          <span>TOTAL</span>
          <span id="cart-total" className="text-blue-500">
            {total.toLocaleString()}
          </span>
        </div>
        <button
          onClick={checkoutWhatsApp}
          className="w-full bg-green-600 py-6 font-bold uppercase tracking-widest hover:bg-green-700 transition"
        >
          Checkout to WA
        </button>
      </div>
    </div>
  );
}
