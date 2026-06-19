"use client"
import { motion, AnimatePresence } from "framer-motion"
import { X, ShieldCheck } from "lucide-react"

export default function LeadModal({ 
  isOpen, 
  onClose, 
  onSubmit, 
  loading, 
  selectedPlan,
  modalParentName,
  setModalParentName,
  modalPhone,
  setModalPhone,
  modalSuccess,
  activeMode
}: any) {
  
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      >
        <motion.div 
          initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
          className="relative w-full max-w-md border border-white/10 bg-zinc-950 p-6 sm:p-8 rounded-[28px] shadow-2xl space-y-6"
        >
          <button 
            type="button" onClick={onClose}
            className="absolute right-4 top-4 text-zinc-500 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>

          <div className="space-y-1">
            <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-widest">Plan Selected: {selectedPlan}</span>
            <h3 className="text-xl font-black tracking-tight text-white">Help My Child Understand Concepts</h3>
            <p className="text-xs text-zinc-500">Provide registration inputs to map your student's dedicated {activeMode === "online" ? "Online" : "Home"} subject tutor.</p>
          </div>

          {modalSuccess ? (
            <div className="py-8 text-center space-y-3">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/20 text-orange-500"><ShieldCheck size={22} /></div>
              <h4 className="text-sm font-bold text-white">Admissions Request Verified!</h4>
              <p className="text-xs text-zinc-400">Our advisor will contact your mobile line within 2 hours.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase text-zinc-400 font-bold">Parent Name</label>
                <input 
                  type="text" required value={modalParentName} onChange={(e) => setModalParentName(e.target.value)}
                  placeholder="Enter parent name" className="h-11 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-xs text-white focus:outline-none focus:border-orange-500/60 placeholder-zinc-700" 
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-mono uppercase text-zinc-400 font-bold">Mobile Number</label>
                <input 
                  type="tel" required value={modalPhone} onChange={(e) => setModalPhone(e.target.value)}
                  placeholder="WhatsApp Mobile Number *" className="h-11 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-xs text-white focus:outline-none focus:border-orange-500/60 placeholder-zinc-700" 
                />
              </div>

              <button 
                type="submit" disabled={loading}
                className="h-11 w-full rounded-xl bg-orange-500 text-xs font-extrabold uppercase tracking-wider text-black hover:bg-orange-400 transition-all flex items-center justify-center shadow-lg shadow-orange-500/10"
              >
                {loading ? "Processing Request..." : "Help My Child Score Better 🚀"}
              </button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}