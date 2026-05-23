import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import { PERSONAL } from '../constants';
import { fadeUp } from '../animations/variants';
import { sendToWhatsApp } from '../utils/whatsapp';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      sendToWhatsApp({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });
      setStatus({
        type: 'success',
        message: 'Opening WhatsApp… Complete send in the app to reach me.',
      });
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus({
        type: 'error',
        message: 'Could not open WhatsApp. Please message me directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  const contacts = [
    { icon: FaEnvelope, label: 'Email', href: `mailto:${PERSONAL.email}`, value: PERSONAL.email },
    { icon: FaPhone, label: 'Phone', href: `tel:+91${PERSONAL.phone.replace(/\D/g, '').slice(-10)}`, value: PERSONAL.phone },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      href: `https://wa.me/${PERSONAL.whatsapp}`,
      value: 'Chat on WhatsApp',
    },
    { icon: FaLinkedin, label: 'LinkedIn', href: PERSONAL.linkedin, value: 'Connect on LinkedIn' },
    { icon: FaGithub, label: 'GitHub', href: PERSONAL.github, value: 'View my repositories' },
  ];

  return (
    <section id="contact" className="section-spacing relative px-4 pb-20" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          subtitle="Get In Touch"
          title="Contact Me"
          description="Have a project, internship, or collaboration in mind? Fill the form — it opens WhatsApp with your message ready to send."
        />
        <motion.div
          className="grid gap-10 lg:grid-cols-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            {contacts.map((c) => {
              const Icon = c.icon;
              return (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="glass glass-premium gradient-border flex items-center gap-4 rounded-2xl p-5 transition hover:glow-blue"
                  whileHover={{ x: 6 }}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/15 text-xl text-orange-400">
                    <Icon />
                  </span>
                  <div>
                    <p className="text-xs tracking-wider text-white/40 uppercase">{c.label}</p>
                    <p className="font-medium text-white/90 light-mode:text-slate-800">{c.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass glass-premium gradient-border rounded-3xl p-6 md:p-8"
            aria-label="Contact form via WhatsApp"
          >
            <p className="mb-4 text-sm text-white/50 light-mode:text-slate-600">
              Submit the form to send your message to my WhatsApp.
            </p>
            <div className="space-y-4">
              <label className="sr-only" htmlFor="contact-name">
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                autoComplete="name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-orange-500/50 focus-visible:ring-2 focus-visible:ring-orange-500/40 light-mode:text-slate-800"
              />
              <label className="sr-only" htmlFor="contact-email">
                Your Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                autoComplete="email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-orange-500/50 focus-visible:ring-2 focus-visible:ring-orange-500/40 light-mode:text-slate-800"
              />
              <label className="sr-only" htmlFor="contact-message">
                Your Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message / Description"
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-orange-500/50 focus-visible:ring-2 focus-visible:ring-orange-500/40 light-mode:text-slate-800"
              />
              <motion.button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] py-3 font-semibold text-white transition hover:shadow-lg hover:shadow-green-500/25 disabled:opacity-60"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaWhatsapp className="text-xl" />
                {loading ? 'Opening WhatsApp…' : 'Send via WhatsApp'}
              </motion.button>
              {status.message && (
                <p
                  role="status"
                  className={`text-center text-sm ${
                    status.type === 'success'
                      ? 'text-cyan-400'
                      : status.type === 'error'
                        ? 'text-red-400'
                        : 'text-orange-300'
                  }`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
