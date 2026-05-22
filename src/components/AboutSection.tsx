import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { User, GraduationCap, Phone, Mail, Award, Briefcase, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    "教师资格证", "三维设计工程师", "普通话二级乙",
    "三年国家奖学金", "校运会log优秀奖学院", "动漫设计三等奖"
  ];

  const skillContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const experienceContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };

  const experienceItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const experience = [
    {
      company: "图雅网络科技有限公司",
      role: "亚马逊设计/2023.10-24.12 (包包类)",
      points: [
        "<span class='whitespace-nowrap'>负责亚马逊主图/A+/品牌设计每周产出3套，高效完成视觉迭代。</span>",
        "配合运营团队完成产品视频剪辑，把控质感与品牌调性。",
        "主导产品拍摄，前期策划到后期落地全流程负责。",
        "多渠道收集设计素材，结合人工智能AI生图制图。"
      ]
    },
    {
      company: "绿洲源电子商务有限公司",
      role: "亚马逊/wayfair/2025.1-26.1.25 (家具类)",
      points: [
        "负责亚马逊和wayfair平台的主副图及A+页面全流程设计。",
        "累计完成100+套产品视觉方案，提升产品点击率与转化率。",
        "配合运营完成视频剪辑与制作产品展示视频，增强用户购买决策，助力多款产品跻身品类销量前列。"
      ]
    }
  ];

  return (
    <section ref={ref} id="about" className="py-32 px-6 overflow-hidden relative min-h-screen flex flex-col justify-center bg-black">
      {/* Decorative background elements inspired by user image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#93C5FD]/5 rounded-full blur-[150px] animate-pulse" />
        
        {/* Colorful sparkles/stardust concentrated in a central "galaxy" belt */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
              y: [0, -40, -80],
            }}
            transition={{ 
              duration: 4 + Math.random() * 4, 
              repeat: Infinity,
              delay: Math.random() * 10 
            }}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              left: (20 + Math.random() * 60) + '%',
              top: (40 + Math.random() * 40) + '%',
              backgroundColor: ['#93C5FD', '#FDE68A', '#FFFFFF', '#F472B6', '#818CF8'][Math.floor(Math.random() * 5)],
              boxShadow: `0 0 8px 1px ${['#93C5FD', '#FDE68A', '#FFFFFF'][Math.floor(Math.random() * 3)]}`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        {/* Top: Skills & Awards (Full Width & Centered) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="bg-white/[0.03] backdrop-blur-2xl rounded-[3rem] p-8 md:p-10 border border-white/10 relative overflow-hidden text-center">
            <div className="flex flex-col items-center justify-center mb-6">
              <Award className="w-8 h-8 text-[#FDE68A] mb-3 drop-shadow-[0_0_10px_rgba(253,230,138,0.4)]" />
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">技能 / 获奖 Skills</h3>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#93C5FD] to-transparent rounded-full opacity-40" />
            </div>
            
            <motion.div 
              variants={skillContainerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-wrap justify-center gap-x-10 gap-y-4 max-w-6xl mx-auto px-4"
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill} 
                  variants={skillItemVariants}
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  transition={{
                    y: {
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }
                  }}
                  whileHover={{ scale: 1.1, color: "#fff" }}
                  className="flex items-center gap-2 group cursor-default"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#93C5FD] group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(147,197,253,0.8)] shrink-0" />
                  <span className="text-sm md:text-base text-white/70 font-light group-hover:text-white transition-colors tracking-wide whitespace-nowrap">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Bottom Left: Profile Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="bg-white/[0.03] backdrop-blur-2xl rounded-[3rem] p-12 border border-white/10 text-center h-full flex flex-col justify-center items-center">
              <div className="w-full">
                <div className="relative inline-block mb-10">
                  <div className="w-52 h-52 rounded-full bg-gradient-to-tr from-[#93C5FD] to-[#FDE68A] p-2 overflow-hidden shadow-[0_0_50px_rgba(147,197,253,0.3)]">
                    <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center overflow-hidden">
                      <img 
                        src="/tx-icon.jpg" 
                        alt="袁颖" 
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 text-[#FDE68A] animate-bounce">
                     <Sparkles className="w-12 h-12 drop-shadow-[0_0_10px_rgba(253,230,138,0.8)]" />
                  </div>
                </div>

                <h2 className="text-5xl font-bold mb-4 tracking-tighter bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent">袁颖</h2>
                <p className="text-[#93C5FD] text-base tracking-[0.4em] uppercase mb-12 font-medium opacity-80 whitespace-nowrap">视觉传达设计师 / 25岁</p>
              </div>

              <div className="w-full space-y-10 text-left">
                {[
                  { icon: GraduationCap, label: 'Education', value: '广东白云学院' },
                  { icon: Phone, label: 'Phone', value: '13138691773' },
                  { icon: Mail, label: 'Email', value: '2024434569@qq.com' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-2xl liquid-glass flex items-center justify-center text-[#93C5FD] group-hover:scale-110 transition-all duration-500 shadow-xl border border-white/5 group-hover:bg-[#93C5FD]/10">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] mb-1 font-bold">{item.label}</p>
                      <p className="text-lg font-light text-white/90 group-hover:text-white transition-colors">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom Right: Experience */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-8"
          >
            <div id="experience" className="bg-white/[0.03] backdrop-blur-2xl rounded-[3rem] p-12 border border-white/10 h-full">
              <div className="flex items-center gap-6 mb-16 border-b border-white/5 pb-8">
                <div className="w-14 h-14 rounded-full bg-[#93C5FD]/10 flex items-center justify-center border border-[#93C5FD]/20">
                  <Briefcase className="w-8 h-8 text-[#93C5FD]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase text-[#93C5FD]">工作经历 Experience</h3>
              </div>
              
              <motion.div 
                variants={experienceContainerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-20 relative"
              >
                <div className="absolute left-[9px] top-4 bottom-4 w-px bg-gradient-to-b from-[#93C5FD]/50 via-white/5 to-[#93C5FD]/50" />
                
                {experience.map((exp, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={experienceItemVariants}
                    className="relative pl-14 group"
                  >
                    <div className="absolute left-[0px] top-3 w-[20px] h-[20px] rounded-full bg-zinc-950 border-2 border-[#93C5FD]/30 group-hover:border-[#93C5FD] group-hover:bg-[#93C5FD] transition-all duration-500 shadow-[0_0_15px_rgba(147,197,253,0.4)] z-10" />
                    <div className="mb-8">
                      <h4 className="text-2xl md:text-3xl font-bold text-[#93C5FD] group-hover:brightness-125 transition-all tracking-tight mb-3">{exp.company}</h4>
                      <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 group-hover:border-[#93C5FD]/30 group-hover:bg-[#93C5FD]/5 transition-all">
                        <p className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase">{exp.role}</p>
                      </div>
                    </div>
                    <ul className="space-y-6">
                      {exp.points.map((point, pIdx) => (
                        <motion.li 
                          key={pIdx} 
                          whileHover={{ x: 10 }}
                          className="text-lg md:text-xl text-white/70 font-light leading-relaxed group-hover:text-white transition-all flex gap-5"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#93C5FD]/40 mt-4 group-hover:bg-[#93C5FD] transition-colors" />
                          <span className="flex-1" dangerouslySetInnerHTML={{ __html: point }} />
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
