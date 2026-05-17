import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40',
  secondary:
    'glass text-white border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300',
  outline:
    'border border-orange-500/50 text-orange-400 hover:bg-orange-500/10',
};

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium transition-all duration-300 text-sm md:text-base';

  const Component = href ? 'a' : 'button';
  const linkProps = href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {};

  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
      <Component
        className={`${base} ${variants[variant]} ${className}`}
        onClick={onClick}
        {...linkProps}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  );
}
