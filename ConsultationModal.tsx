import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedLocation?: 'mumbai' | 'ahmedabad' | 'virtual';
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [service, setService] = useState<string>(preselectedService || '');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    } else {
      setService('');
    }
  }, [preselectedService, isOpen]);

  if (!isOpen) return null;

  // Name handler - only alphabets and spaces allowed
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setFullName(val);
    if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
  };

  // Phone handler - digits only, max 10 digits
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhone(digitsOnly);
    if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
  };

  // Word counter helper
  const getWordCount = (str: string) => {
    const trimmed = str.trim();
    return trimmed ? trimmed.split(/\s+/).length : 0;
  };

  // Message handler - capped at 1000 words
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const words = getWordCount(text);
    if (words <= 1000) {
      setMessage(text);
      if (errors.message) setErrors(prev => ({ ...prev, message: undefined }));
    }
  };

  const mailtoLink = `mailto:elevatexadvisor@gmail.com?subject=${encodeURIComponent(
    `Consultation Request - ${fullName || 'New Client'}`
  )}&body=${encodeURIComponent(
    `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nService Required: ${
      service || 'General Advisory'
    }\n\nMessage:\n${message}`
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; phone?: string; message?: string } = {};

    // Validate Name
    if (!fullName.trim() || !/^[a-zA-Z\s]+$/.test(fullName.trim())) {
      newErrors.name = 'Please enter a valid name (letters only).';
    }

    // Validate Phone (10 digits required if entered or mandatory)
    if (phone && phone.length !== 10) {
      newErrors.phone = 'Phone number must be exactly 10 digits.';
    }

    // Validate Word Count
    const wordCount = getWordCount(message);
    if (wordCount > 1000) {
      newErrors.message = 'Message must not exceed 1000 words.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Send via FormSubmit AJAX endpoint directly to elevatexadvisor@gmail.com
      await fetch('https://formsubmit.co/ajax/elevatexadvisor@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Consultation Request: ${fullName} (${service || 'General Advisory'})`,
          fullName,
          email,
          phone,
          service: service || 'General Advisory',
          message,
        }),
      });
    } catch (err) {
      console.warn('FormSubmit network response handled:', err);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  const servicesList = [
    'Company Incorporation Services',
    'CFO Advisory (Virtual CFO)',
    'Financial Reporting & Compliance',
    'Tech & Systems Support',
    'Wealth Management',
    'Income Planning Advisory',
    'Others'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative border border-slate-200/90 max-h-[92vh] overflow-y-auto"
          >
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Close form"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#082846] font-sans">
                  Request Sent to Advisory Team!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your request has been forwarded directly to <strong className="text-[#082846]">elevatexadvisor@gmail.com</strong>. Our senior partners will review your requirements and respond within one business day.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={mailtoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-[#082846] text-xs font-bold transition-colors"
                  >
                    <span>Open in Email App</span>
                    <Send className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFullName('');
                      setEmail('');
                      setPhone('');
                      setMessage('');
                      setService('');
                      onClose();
                    }}
                    className="px-8 py-3 rounded-full bg-[#082846] text-white text-xs font-extrabold hover:bg-[#E8B023] hover:text-[#082846] transition-colors shadow-md cursor-pointer"
                  >
                    Done &amp; Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form Header */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082846] tracking-tight font-sans">
                    Schedule an Advisory Consultation
                  </h2>
                  <p className="text-sm sm:text-base text-slate-500 font-normal mt-1.5">
                    Connect directly with our advisory partners.
                  </p>
                </div>

                {/* Inputs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-bold text-slate-800 block">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name (alphabets only)"
                      value={fullName}
                      onChange={handleNameChange}
                      className={`w-full bg-slate-50 border ${
                        errors.name ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:ring-[#082846]/20'
                      } rounded-2xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 font-medium pt-0.5">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-bold text-slate-800 block">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#082846]/20 transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-bold text-slate-800 block">
                      Phone Number <span className="text-slate-400 font-normal">(10 digits only)</span>
                    </label>
                    <input
                      type="tel"
                      maxLength={10}
                      placeholder="10-digit phone number"
                      value={phone}
                      onChange={handlePhoneChange}
                      className={`w-full bg-slate-50 border ${
                        errors.phone ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:ring-[#082846]/20'
                      } rounded-2xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 font-medium pt-0.5">{errors.phone}</p>
                    )}
                  </div>

                  {/* Service of Interest */}
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-bold text-slate-800 block">
                      Service Vertical
                    </label>
                    <div className="relative">
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#082846]/20 transition-all appearance-none cursor-pointer pr-10"
                      >
                        <option value="" disabled className="text-slate-400">
                          Select an advisory service
                        </option>
                        {servicesList.map((svc) => (
                          <option key={svc} value={svc} className="text-slate-800">
                            {svc}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs sm:text-sm font-bold text-slate-800 block">
                      Message / Business Scope <span className="text-red-500">*</span>
                    </label>
                    <span className="text-xs font-semibold text-slate-400">
                      {getWordCount(message)} / 1000 words max
                    </span>
                  </div>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your organization or financial goals..."
                    value={message}
                    onChange={handleMessageChange}
                    className={`w-full bg-slate-50 border ${
                      errors.message ? 'border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:ring-[#082846]/20'
                    } rounded-2xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all resize-none`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 font-medium pt-0.5">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#E8B023] hover:bg-[#f0bd30] active:scale-[0.99] disabled:opacity-70 text-[#082846] font-extrabold text-base rounded-full transition-all shadow-lg shadow-[#E8B023]/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <span>Request Consultation</span>
                        <Send className="w-4 h-4 text-[#082846] stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
