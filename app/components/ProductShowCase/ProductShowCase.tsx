'use client'
import React from 'react'
import { motion } from 'motion/react'
import { Check, Minus, Plus, ShoppingBag } from 'lucide-react'
export default function ProductShowCase() {
  const [quantity, setQuantity] = React.useState(1);
  const add = () => setQuantity(prev => prev + 1);
  const remove = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  return (
    <section id="product" className="overflow-hidden bg-[#0b0b0a] px-6 py-24 text-white md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative flex min-h-[420px] items-center justify-center">
          <div className="absolute h-72 w-72 rounded-full bg-[#b9862f]/20 blur-3xl" />
          <img src="/bottle.png" alt="Aaira Hair Oil bottle" className="float-slow relative z-10 max-h-[440px] w-auto object-contain" />
        </motion.div>
        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#d5a044]">
            Your daily essential
          </p>
          <h2 className="font-display text-6xl leading-[.88] tracking-[-0.03em] sm:text-8xl">
            Nourish.
            <br />
            <span className="text-[#d5a044]">
              Strengthen.
            </span>
            <br />
            Shine.
          </h2>
          <p className="mt-7 max-w-md text-base leading-7 text-white/60">
            A beautiful, uncomplicated hair oil for roots that feel stronger and lengths that look alive.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-[0.12em] text-white/80">
            {['Organic & homemade', '100% original', 'Free delivery'].map((item) =>
              <span key={item} className="flex items-center gap-2">
                <Check size={14} className="text-[#d5a044]" />{item}
              </span>
            )}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-white/15 pt-7">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                Aaira Hair Oil
              </p>
              <p className="mt-1 text-2xl font-semibold">
                PKR 1,000
                <span className="text-sm font-normal text-white/40">
                  / 100ml</span>
              </p>
            </div>
            <div className="ml-auto flex items-center rounded-full border border-white/20">
              <button onClick={() => dispatch(removeProduct())} aria-label="Remove one" className="p-3 text-white/70 transition hover:text-white">
                <Minus size={15} />
              </button>
              <span className="min-w-6 text-center text-sm">
                {quantity}
              </span>
              <button onClick={add} aria-label="Add one" className="p-3 text-white/70 transition hover:text-white">
                <Plus size={15} />
              </button>
            </div>
            <button onClick={add} className="flex w-full items-center justify-center gap-2 rounded-full bg-[#d5a044] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#efc16a] sm:w-auto">
              <ShoppingBag size={15} />
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>

  )
}
