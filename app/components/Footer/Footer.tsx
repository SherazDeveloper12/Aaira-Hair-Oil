import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-[#0b0b0a] px-6 py-10 text-white md:px-10">
            <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div>
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="Aaira logo" className="h-12 w-12 object-contain" />
                        <div>
                            <p className="text-lg font-semibold tracking-[0.15em]">AAIRA Hair Oil</p>
                            <p className="text-[9px] uppercase tracking-[0.3em] text-white/50">Naturally beautiful</p>
                        </div>
                    </div>
                    <p className="mt-6 max-w-xs text-xs leading-6 text-white/40">Simple, beautiful care for the hair you live in.</p>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                    <a href="#about" className="transition hover:text-[#d5a044]">Our story</a>
                    <a href="#product" className="transition hover:text-[#d5a044]">The oil</a>
                    <a href="#contact" className="transition hover:text-[#d5a044]">Contact</a>
                    <a href="#top" className="flex items-center gap-2 text-[#d5a044]">Back to top <ArrowUpRight size={14} /></a>
                </div>
            </div>
            <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.15em] text-white/30">© 2026 Aaira Hair Oil · Made with intention in Pakistan</div>
        </footer>
    )
}
