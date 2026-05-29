import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { X, ExternalLink, ZoomIn } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  detailImages?: string[]; // Multiple long images for detail view
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    id: 3,
    title: "Fashion Label Visuals | 女士内衣视觉",
    category: "女士内衣",
    description: "High-end product layout and branding for apparel categories, optimized for Amazon marketplace.",
    image: "/ny-work.jpg",
    detailImages: ["/ny-work.jpg", "/ny2-work.jpg", "/ny3-work.jpg", "/白色内衣.jpg", "/豹纹.jpg", "/拼图总.jpg"],
    tags: ["CTR Optimization", "Graphic Design"]
  },
  {
    id: 2,
    title: "Eco-Friendly Collection | 脏衣车视觉",
    category: "脏衣车",
    description: "Professional product shooting and retouching for home organization tools, emphasizing textures and atmosphere.",
    image: "/脏衣车1.jpg",
    detailImages: ["/脏衣车1.jpg", "/脏衣车细节.jpg", "/脏衣车2.jpg", "/脏衣车细节2.jpg"],
    tags: ["Photography", "Retouching"]
  },
  {
    id: 6,
    title: "Other Apparel Visuals | 其他服饰视觉",
    category: "其他服饰",
    description: "Multi-channel graphic styling, commercial catalog layouts, and cohesive brand visual design for apparel collections.",
    image: "/其他衣服2.jpg",
    detailImages: [
      "/其他衣服2.jpg",
      "/拼图哈衣.jpg",
      "/其他衣服.jpg",
      "/圣诞毛衣.jpg",
      "/围脖.jpg"
    ],
    tags: ["Brand Visuals", "Layout Design"]
  },
  {
    id: 1,
    title: "Amazon A+ Page Strategy | 家具视觉",
    category: "家具",
    description: "Multi-language A+ page design for premium furniture and home products, focusing on feature highlighting and user experience flow.",
    image: "/拼图4.jpg",
    detailImages: ["/拼图4.jpg", "/拼图5.jpg", "/拼图3.jpg", "/拼图1.jpg", "/拼图2.jpg"],
    tags: ["Listing Optimization", "UX Design"]
  },
  {
    id: 4,
    title: "Pattern & Cultural Design | 纹样文创设计",
    category: "纹样文创",
    description: "Creative pattern design and cultural gift concepts, blending traditional motifs with modern commercial aesthetics.",
    image: "/作品封面.jpg",
    detailImages: ["/作品封面.jpg", "/插画展板1.jpg", "/插画展板2.jpg"],
    tags: ["Pattern Design", "Cultural Creative"]
  },
  {
    id: 5,
    title: "Leather Handbags | 包包视觉",
    category: "包包",
    description: "Dynamic product display and graphic design for fashion accessory categories.",
    image: "/包包1.jpg",
    detailImages: ["/包包1.jpg", "/包包2.jpg", "/包包3.jpg", "/包包4.jpg"],
    tags: ["Graphic Design", "Brand Identity"]
  }
];

const CATEGORIES = ["All", "女士内衣", "家具", "纹样文创", "包包", "脏衣车", "其他服饰"];

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="portfolio" className="py-28 md:py-40 px-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 md:mb-24"
        >
          <div>
            <span className="text-[#93C5FD] text-sm tracking-[0.4em] uppercase mb-4 block font-bold">Portfolio</span>
            <h2 className="text-5xl md:text-7xl text-white tracking-tight leading-none font-bold">WORKS</h2>
          </div>
          
          <div className="flex flex-wrap gap-2 md:gap-4 justify-start md:justify-end">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-[#93C5FD] text-black shadow-[0_0_20px_rgba(147,197,253,0.3)]" 
                    : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => {
            const colSpanClass = "col-span-1";
            const aspectClass = "aspect-[4/5]";
            
            return (
              <div
                key={project.id}
                className={`group relative cursor-pointer ${colSpanClass}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className={`liquid-glass rounded-3xl overflow-hidden border border-white/5 relative ${aspectClass}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-[#93C5FD] text-xs tracking-widest uppercase mb-2 block font-bold">{project.category}</span>
                      <div className="flex flex-col gap-1 mb-4">
                        <h3 className="text-xl md:text-2xl text-white font-bold leading-tight">
                          {project.title.split(' | ')[0]}
                        </h3>
                        <span className="text-white/60 text-sm md:text-base font-light">
                          {project.title.split(' | ')[1]}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[#93C5FD] text-sm font-medium">
                        <ZoomIn className="w-4 h-4" />
                        <span>点击查看项目详情 Detail</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-white/30 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="liquid-glass w-full max-w-5xl max-h-[85vh] rounded-[2.5rem] overflow-hidden border border-white/10 flex flex-col lg:flex-row relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#93C5FD] hover:text-black transition-colors backdrop-blur-md border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="lg:w-[60%] h-[40vh] lg:h-auto overflow-y-auto custom-scrollbar bg-black/20"
              >
                {(selectedProject.detailImages && selectedProject.detailImages.length > 0) ? (
                  selectedProject.detailImages.map((img, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                      <img 
                        src={img} 
                        alt={`${selectedProject.title} detail ${index + 1}`}
                        className="w-full h-auto block"
                      />
                      {index < selectedProject.detailImages!.length - 1 && (
                        <div className="h-[2px] w-full bg-white/10 my-4" />
                      )}
                    </motion.div>
                  ))
                ) : (
                  <motion.img 
                    variants={fadeInUp}
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-auto block"
                  />
                )}
              </motion.div>

              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="lg:w-[40%] p-8 md:p-12 flex flex-col justify-center overflow-y-auto"
              >
                <motion.span variants={fadeInUp} className="text-[#93C5FD] text-sm tracking-[0.3em] uppercase mb-4 font-bold">{selectedProject.category}</motion.span>
                <motion.div variants={fadeInUp} className="flex flex-col gap-2 mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    {selectedProject.title.split(' | ')[0]}
                  </h3>
                  <span className="text-xl md:text-2xl text-white/40 font-light italic">
                    {selectedProject.title.split(' | ')[1]}
                  </span>
                </motion.div>
                <motion.p variants={fadeInUp} className="text-white/60 text-lg font-light leading-relaxed mb-8">
                  {selectedProject.description}
                </motion.p>
                
                <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-10">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/40 border border-white/5">
                      #{tag}
                    </span>
                  ))}
                </motion.div>

                <motion.button 
                  variants={fadeInUp}
                  className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-[#93C5FD] transition-colors group"
                >
                  <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  View Case Study
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
