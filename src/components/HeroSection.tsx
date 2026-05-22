import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import FadingVideo from './FadingVideo';

export default function HeroSection() {
  const videoUrl = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4";

  return (
    <section id="personal" className="relative min-h-screen flex flex-col overflow-hidden group">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <FadingVideo 
          src={videoUrl}
          className="w-full h-full object-cover object-bottom"
        />
        {/* Subtle dark overlay that becomes more pronounced on hover or interaction */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 group-focus-within:bg-black/50 group-hover:backdrop-blur-[1px] transition-all duration-1000 z-[1]" />
      </div>

      {/* Navbar */}
      <nav className="relative z-50 px-6 py-6 w-full">
        <div className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto border border-white/5">
          <div className="flex items-center gap-8">
            <a href="#personal" className="flex items-center gap-2.5 font-semibold text-lg text-white hover:text-[#93C5FD] transition-colors">
              <Globe className="w-6 h-6" />
              <span className="tracking-tight">袁颖</span>
            </a>
            <div className="hidden md:flex items-center gap-10 text-sm font-bold tracking-[0.2em] uppercase">
              <a href="#personal" className="text-white/40 hover:text-[#93C5FD] transition-all relative group py-1">
                首页
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#93C5FD] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#experience" className="text-white/40 hover:text-[#93C5FD] transition-all relative group py-1">
                工作经历
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#93C5FD] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#portfolio" className="text-white/40 hover:text-[#93C5FD] transition-all relative group py-1">
                作品展示
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#93C5FD] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="liquid-glass rounded-full px-8 py-2.5 text-[#93C5FD] text-sm font-bold hover:bg-[#93C5FD]/10 transition-all border border-[#93C5FD]/20">
              CONTACT ME
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[10%] md:-translate-y-[15%]">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-7xl lg:text-[8rem] mb-12 tracking-tighter whitespace-nowrap leading-none font-bold bg-gradient-to-r from-[#93C5FD] to-[#FDE68A] bg-clip-text text-transparent"
          style={{ fontFamily: '"Alibaba PuHuiTi", "PingFang SC", "Microsoft YaHei", sans-serif' }}
        >
          袁颖 / YUAN
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-3xl w-full"
        >
          <div className="liquid-glass rounded-2xl px-8 py-6 border border-white/5 inline-block">
            <p className="text-white/80 text-sm md:text-base leading-relaxed font-light tracking-wide text-left">
              拥有3年亚马逊电商设计实战经验，擅长从产品拍摄、精修排版到主图、A+页面及视频剪辑的全流程设计。熟悉亚马逊平台规则与用户视觉偏好，能精准把控品牌调性，高效输出符合转化目标的视觉方案。具备着扎实的美术功底与较强的学习能力，可快速适应电商快节奏工作，配合团队达成业务目标。
            </p>
          </div>
        </motion.div>
      </div>

      {/* Software Icons Footer */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-12 mt-auto">
        <div className="flex flex-wrap justify-center items-end gap-6 md:gap-12">
          {[
            { name: "PS", icon: "https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg" },
            { name: "C4D", icon: "/c4d.png" },
            { name: "AE", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg" },
            { name: "Procreate", icon: "/procreate.png" },
            { name: "GPT", icon: "/GPT-icon.png" },
            { name: "MJ", icon: "/MJ-icon.png" },
            { name: "即梦", icon: "/即梦-icon.png" },
            { name: "豆包", icon: "/豆包-icon.jpg" }
          ].map((software, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 liquid-glass rounded-2xl flex items-center justify-center p-3 border border-white/10 group-hover:border-[#93C5FD]/50 group-hover:bg-[#93C5FD]/10 transition-all duration-500 shadow-lg overflow-hidden">
                <img 
                  src={software.icon} 
                  alt={software.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white/40 group-hover:text-[#93C5FD] transition-colors uppercase">
                {software.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
