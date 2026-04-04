import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { DiscordIcon, XIcon } from '../components/icons/SocialIcons';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';

const socials = [
  { href: 'https://x.com/unicity_labs', icon: <XIcon className="w-6 h-6" />, label: 'X' },
  { href: 'https://discord.gg/BGuqUtwZp3', icon: <DiscordIcon className="w-6 h-6" />, label: 'Discord' },
  { href: 'https://github.com/unicity-sphere/sphere', icon: <Github className="w-6 h-6" />, label: 'GitHub' },
  { href: 'https://www.linkedin.com/company/unicity-labs/', icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn' },
];

export function ThankYouSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      {/* Video background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-30" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/40" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16">

        {/* Thank You */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[#fefefe] text-[48px] sm:text-[72px] lg:text-[96px] leading-none tracking-tight text-center"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          THANK <span className="text-orange-400">YOU</span>
        </motion.h1>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-[2px] w-24 sm:w-36 bg-gradient-to-r from-transparent via-orange-500 to-transparent origin-center mt-4 sm:mt-5"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-4 sm:mt-6 text-[#fefefe]/60 text-sm sm:text-base lg:text-lg text-center max-w-lg"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Infrastructure for the agentic economy
        </motion.p>

        {/* Contact */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-6 sm:mt-8 text-orange-400/80 text-xs sm:text-sm tracking-wider"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Sphere: @mike
        </motion.p>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-6 sm:mt-8 flex items-center gap-6 sm:gap-8"
        >
          {socials.map(({ href, icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="text-[#fefefe]/50 hover:text-orange-400 transition-colors cursor-pointer"
              aria-label={label}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
