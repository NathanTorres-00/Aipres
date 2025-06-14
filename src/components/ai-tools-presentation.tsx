import { useState } from 'react';
import { ChevronLeft, ChevronRight, Code, Search, Brain, ExternalLink, Terminal, Globe, Building2, Users, TrendingUp, Video, Eye, Headphones } from 'lucide-react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const contentVariants = {
  enter: {
    opacity: 0,
    y: 20
  },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2
    }
  },
  exit: {
    opacity: 0,
    y: -20
  }
};

const AIPresentationDemo = () => {
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipe = swipePower(info.offset.x, info.velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  const slides = [
    {
      title: "ChatGPT Demo",
      content: (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <div className="space-y-4">
              <button 
                onClick={() => {
                  // Demo functionality will be implemented here
                }}
                className="w-full bg-neutral-900 text-white py-4 px-6 rounded-xl flex items-center justify-center hover:bg-neutral-800 transition-colors"
              >
                <Brain className="w-5 h-5 mr-2" />
                Simulate Memory
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Claude Demo",
      content: (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <div className="space-y-4">
              <button 
                onClick={() => {
                  // Demo functionality will be implemented here
                }}
                className="w-full bg-neutral-900 text-white py-4 px-6 rounded-xl flex items-center justify-center hover:bg-neutral-800 transition-colors"
              >
                <Code className="w-5 h-5 mr-2" />
                Generate Code
              </button>

              <button 
                onClick={() => {
                  // Demo functionality will be implemented here
                }}
                className="w-full bg-neutral-900 text-white py-4 px-6 rounded-xl flex items-center justify-center hover:bg-neutral-800 transition-colors"
              >
                <Search className="w-5 h-5 mr-2" />
                Enhance Script
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Perplexity Demo",
      content: (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
            <div className="space-y-4">
              <button 
                onClick={() => {
                  // Demo functionality will be implemented here
                }}
                className="w-full bg-neutral-900 text-white py-4 px-6 rounded-xl flex items-center justify-center hover:bg-neutral-800 transition-colors"
              >
                <Search className="w-5 h-5 mr-2" />
                Search Trends
              </button>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="absolute w-full h-full"
          >
            <motion.div
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="h-full flex items-center justify-center p-8"
            >
              {slides[page % slides.length].content}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <button
          onClick={() => paginate(-1)}
          className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-neutral-600" />
        </button>
        <div className="flex items-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const newDirection = index > page ? 1 : -1;
                setPage([index, newDirection]);
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === page % slides.length
                  ? "bg-neutral-900"
                  : "bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => paginate(1)}
          className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-neutral-600" />
        </button>
      </div>
    </div>
  );
};

export default AIPresentationDemo;