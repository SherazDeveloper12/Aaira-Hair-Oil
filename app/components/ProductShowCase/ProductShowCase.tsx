'use client'
import React from 'react'
import { motion } from 'motion/react'
import { Check, Minus, Plus, ShoppingBag, ShoppingCart } from 'lucide-react'
import { useSelector } from 'react-redux';
export default function ProductShowCase() {
  const products = useSelector((state: any) => state.products.Products);
  const hairoil = products.find((product: any) => product._id === '6ab0b22f2607dc6100c89403');

  console.log('hairoil', hairoil);
  const [quantity, setQuantity] = React.useState(1);
  const add = () => setQuantity(prev => prev + 1);
  
  return (
    <section id="product" className="overflow-hidden bg-[#0b0b0a] px-6 py-24 text-white md:px-10 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative flex min-h-[420px] items-center justify-center">
          <div className="absolute h-72 w-72 rounded-full bg-[#b9862f]/20 blur-3xl" />
          {hairoil && (
            <img src={hairoil.img[1]} alt={hairoil.name} className="float-slow relative z-10 max-h-[440px] w-auto object-contain" />
          )}
        </motion.div>
        <div className=" flex flex-col gap-5">
          <p className=" text-[10px] font-bold uppercase tracking-[0.3em] text-[#d5a044]">
            Your daily essential
          </p>
          {hairoil &&
            <h2 className="font-display text-4xl leading-[.88] tracking-[-0.03em] sm:text-8xl">
              {hairoil.title}
            </h2>
          }
          {hairoil &&
            <p className="max-w-md text-base leading-7 text-white/60">
              {hairoil.description}
            </p>
          }

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-[0.12em] text-white/80">
            {hairoil && hairoil.discount !== 0 && (
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#d5a044]" />On Sale
              </span>
            )}
            {hairoil && hairoil.freeShipping && (
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#d5a044]" />Free delivery
              </span>
            )}
            {hairoil && hairoil.newArrival && (
              <span className="flex items-center gap-2">
                <Check size={14} className="text-[#d5a044]" />New Arrival
              </span>
            )}


          </div>
          <div className=" flex flex-col flex-wrap  gap-5  ">
            <div className="  flex flex-col gap-5  border-t border-white/10 bg-[#0b0b0a]/50 pt-5">
              {hairoil &&
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  {hairoil.heading}
                </p>
              }
              <div className="flex flex-wrap gap-5 ">
                <p className={`text-2xl font-semibold ${hairoil && hairoil.discount ? 'line-through text-white/40' : ''}`}>
                  PKR {hairoil && hairoil.price}
                  <span className={`text-sm font-normal text-white/40 ${hairoil && hairoil.discount !== 0 ? 'line-through text-white/40' : ''} `}>
                    / 100ml</span>
                </p>


                {hairoil && hairoil.discount !== 0 &&
                  <p className={` text-2xl font-semibold ${hairoil.discount || hairoil.discount !== 0 ? '' : 'hidden'} `}>
                    PKR 1,000
                    <span className="text-sm font-normal text-white/40">
                      / 100ml</span>
                  </p>
                }

              </div>
            </div>

          </div>
          <div className="  flex flex-wrap items-center gap-5 border-t border-white/15 pt-7">
            <div className="ml-auto flex items-center rounded-full border border-white/20">
              <button onClick={add} className="flex w-full items-center justify-center gap-2 rounded-full bg-[#d5a044] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#efc16a] sm:w-auto">
                <ShoppingCart size={15} />
               Purchase Now
              </button>
              {/* <button onClick={() => dispatch(removeProduct())} aria-label="Remove one" className="p-3 text-white/70 transition hover:text-white">
                <Minus size={15} />
              </button>
              <span className="min-w-6 text-center text-sm">
                {quantity}
              </span>
              <button onClick={add} aria-label="Add one" className="p-3 text-white/70 transition hover:text-white">
                <Plus size={15} />
              </button> */}
            </div>
            <button onClick={add} className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-xs font-bold uppercase hover:text-primary hover:border-primary cursor-pointer tracking-[0.16em]  transition  sm:w-auto">
              <ShoppingBag size={15} />
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </section>

  )
}
