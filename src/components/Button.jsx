import { motion } from 'framer-motion';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useMagnetic } from '../hooks/useMagnetic';

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
  magnetic = true,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium transition-all duration-300 text-sm md:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50';

  const Component = href ? 'a' : 'button';
  const linkProps = href
    ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' }
    : {};

  const isDesktop = useMediaQuery('(min-width: 768px)');
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(0.25);
  const useMagneticEffect = magnetic && isDesktop;

  return (
    <motion.div
      ref={useMagneticEffect ? ref : undefined}
      className="inline-block"
      whileHover={{ scale: useMagneticEffect ? 1 : 1.03 }}
      whileTap={{ scale: 0.97 }}
      onMouseMove={useMagneticEffect ? onMouseMove : undefined}
      onMouseLeave={useMagneticEffect ? onMouseLeave : undefined}
    >
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
