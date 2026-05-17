import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import { PERSONAL } from '../constants';
import { fadeUp } from '../animations/variants';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'info',
        message:
          'Email service is not configured yet. Please add VITE_EMAILJS_* variables or email me directly.',
      });
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: PERSONAL.name,
        },
        publicKey
      );
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus({ type: 'error', message: 'Failed to send. Please try again or email directly.' });
    } finally {
      setLoading(false);
    }
  };

  const contacts = [
    { icon: FaEnvelope, label: 'Email', href: `mailto:${PERSONAL.email}`, value: PERSONAL.email },
    { icon: FaPhone, label: 'Phone', href: `tel:${PERSONAL.phone.replace(/\s/g, '')}`, value: PERSONAL.phone },
    { icon: FaLinkedin, label: 'LinkedIn', href: PERSONAL.linkedin, value: 'Connect on LinkedIn' },
    { icon: FaGithub, label: 'GitHub', href: PERSONAL.github, value: 'View my repositories' },
  ];

  return (
    <section id="contact" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle subtitle="Get In Touch" title="Contact Me" />
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
                className="glass gradient-border flex items-center gap-4 rounded-2xl p-5 transition hover:glow-blue"
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

          <form onSubmit={handleSubmit} className="glass gradient-border rounded-3xl p-6 md:p-8">
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-orange-500/50 light-mode:text-slate-800"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-orange-500/50 light-mode:text-slate-800"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-orange-500/50 light-mode:text-slate-800"
              />
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 py-3 font-semibold text-white transition hover:shadow-lg hover:shadow-orange-500/30 disabled:opacity-60"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>
              {status.message && (
                <p
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
