import { useEffect, useState } from 'react';

export default function Footer() {
  const [time, setTime] = useState('00:00:00');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString =
        now.getHours().toString().padStart(2, '0') +
        ':' +
        now.getMinutes().toString().padStart(2, '0') +
        ':' +
        now.getSeconds().toString().padStart(2, '0');
      setTime(timeString);
    };
    const interval = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      id="contact"
      className="relative bg-gray-100 dark:bg-[#050505] pt-32 pb-10 px-6 overflow-hidden border-t border-black/5 dark:border-white/5 transition-colors duration-300"
    >
      <div className="absolute -bottom-10 left-0 w-full pointer-events-none select-none opacity-[0.02] font-brutal text-[20vw] leading-none whitespace-nowrap text-black dark:text-white transition-colors duration-300">
        BESOKLAGI™
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-7" data-aos="fade-right">
            <h4 className="font-brutal text-5xl md:text-8xl leading-none tracking-tighter mb-8 text-black dark:text-white transition-colors duration-300">
              LET'S <br />
              <span className="text-blue-600 italic">CONNECT_</span>
            </h4>
            <p className="text-gray-600 dark:text-gray-500 max-w-sm text-sm tracking-widest uppercase leading-loose transition-colors duration-300">
              We don’t live online. We build the future there. Send a DM or track us down in the
              digital shadows.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col justify-end space-y-8" data-aos="fade-left">
            <div className="grid grid-cols-1 gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-4 hover:border-blue-600 transition-colors"
              >
                <span className="text-[10px] font-bold tracking-[0.5em] text-gray-500 group-hover:text-blue-500 transition-colors">
                  01. INSTAGRAM
                </span>
                <i className="fa-brands fa-instagram text-xl group-hover:rotate-12 transition-transform text-black dark:text-white"></i>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-4 hover:border-blue-600 transition-colors"
              >
                <span className="text-[10px] font-bold tracking-[0.5em] text-gray-500 group-hover:text-blue-500 transition-colors">
                  02. TIKTOK
                </span>
                <i className="fa-brands fa-tiktok text-xl group-hover:rotate-12 transition-transform text-black dark:text-white"></i>
              </a>
              <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-4 hover:border-blue-600 transition-colors"
              >
                <span className="text-[10px] font-bold tracking-[0.5em] text-gray-500 group-hover:text-blue-500 transition-colors">
                  03. WHATSAPP
                </span>
                <i className="fa-brands fa-whatsapp text-xl group-hover:rotate-12 transition-transform text-black dark:text-white"></i>
              </a>
            </div>

            <div className="pt-4">
              <a
                href="mailto:hello@besoklagi.com"
                className="inline-block bg-blue-600 px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 text-white"
              >
                Send Transmission
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-8 pt-12 border-t border-black/5 dark:border-white/5 transition-colors duration-300">
          <div className="flex flex-col gap-2">
            <div className="text-[9px] font-bold text-blue-600 uppercase tracking-widest">
              System Status: Optimal
            </div>
            <div className="text-[13px] font-medium text-gray-900 dark:text-gray-100 uppercase tracking-[0.4em] transition-colors duration-300">
              © 2026 BESOKLAGI™ — ALL RIGHTS RESERVED
            </div>
          </div>

          <div className="text-right hidden md:block">
            <div className="text-[9px] font-bold text-black dark:text-white uppercase tracking-widest mb-1 transition-colors duration-300">
              LOCAL TIME [ID]
            </div>
            <div id="footer-time" className="text-[18px] font-brutal text-gray-500 dark:text-gray-400 transition-colors duration-300">
              {time}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
