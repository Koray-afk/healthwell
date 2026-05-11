"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center overflow-y-auto p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-background p-6 shadow-2xl sm:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute right-6 top-6 rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X className="size-5" />
              </button>

              <div className="mb-8 text-center">
                <h2 className="font-display text-4xl font-semibold tracking-tight">
                  Request a <span className="text-[#1D5BFF]">Demo</span>
                </h2>
                <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
                  See how Wizzaid can transform your healthcare organization. Fill out the form below and our team will contact you to schedule a personalized demo.
                </p>
              </div>

              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-foreground">First Name *</label>
                    <input required type="text" placeholder="John" className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-[#1D5BFF] focus:ring-1 focus:ring-[#1D5BFF]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-foreground">Last Name *</label>
                    <input required type="text" placeholder="Doe" className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-[#1D5BFF] focus:ring-1 focus:ring-[#1D5BFF]" />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-foreground">Email Address *</label>
                    <input required type="email" placeholder="john.doe@example.com" className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-[#1D5BFF] focus:ring-1 focus:ring-[#1D5BFF]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-foreground">Phone Number *</label>
                    <input required type="tel" placeholder="+1 (555) 123-4567" className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-[#1D5BFF] focus:ring-1 focus:ring-[#1D5BFF]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-foreground">Role *</label>
                  <select required className="w-full appearance-none rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-[#1D5BFF] focus:ring-1 focus:ring-[#1D5BFF]">
                    <option value="" disabled selected hidden>Select your role</option>
                    <option value="physician">Physician</option>
                    <option value="administrator">Administrator</option>
                    <option value="nurse">Nurse</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-foreground">Organization Name *</label>
                  <input required type="text" placeholder="Your Hospital/Clinic Name" className="w-full rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-[#1D5BFF] focus:ring-1 focus:ring-[#1D5BFF]" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-foreground">Number of Providers *</label>
                  <select required className="w-full appearance-none rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-[#1D5BFF] focus:ring-1 focus:ring-[#1D5BFF]">
                    <option value="" disabled selected hidden>Select range</option>
                    <option value="1-10">1 - 10</option>
                    <option value="11-50">11 - 50</option>
                    <option value="51-200">51 - 200</option>
                    <option value="200+">200+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-foreground">Additional Information (Optional)</label>
                  <textarea rows={4} placeholder="Tell us about your specific needs or questions..." className="w-full resize-none rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-[#1D5BFF] focus:ring-1 focus:ring-[#1D5BFF]"></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full rounded-xl bg-[#1D5BFF] py-6 text-base font-semibold text-white hover:bg-[#1A52E5]">
                  <Send className="mr-2 size-5" />
                  Submit Request
                </Button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
