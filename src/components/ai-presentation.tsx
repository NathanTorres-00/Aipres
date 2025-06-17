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
  const [chatGptMemory, setChatGptMemory] = useState('');
  const [chatGptResponse, setChatGptResponse] = useState('');
  const [claudeDemo, setClaudeDemo] = useState('');
  const [claudeDemoType, setClaudeDemoType] = useState<'code' | 'script'>('code');
  const [perplexityResults, setPerplexityResults] = useState('');

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
      title: "Exploring AI Tools",
      content: (
        <div className="flex flex-col items-center justify-center h-[70vh] space-y-8">
          <div className="space-y-6 text-center max-w-3xl">
            <h1 className="text-6xl font-light tracking-tight text-neutral-900">
              Exploring AI Tools
            </h1>
            <p className="text-2xl text-neutral-600 font-light">
              Real Use Cases in Action
            </p>
            <div className="h-px w-24 bg-neutral-200 mx-auto my-8" />
            <div className="text-neutral-500 space-y-2">
              <p className="text-lg">Featuring ChatGPT, Claude, and Perplexity</p>
              <p className="text-sm font-medium">By Nate Torres</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "When I Say AI",
      content: (
        <div className="flex flex-col items-center justify-center h-[70vh] space-y-8">
          <div className="space-y-6 text-center max-w-3xl">
            <h1 className="text-6xl font-light tracking-tight text-neutral-900">
              When I Say AI
            </h1>
            <p className="text-2xl text-neutral-600 font-light">
              Real Use Cases in Action
            </p>
            <div className="h-px w-24 bg-neutral-200 mx-auto my-8" />
            <div className="text-neutral-500 space-y-2">
              <p className="text-lg">Featuring ChatGPT, Claude, and Perplexity</p>
              <p className="text-sm font-medium">By Nate Torres</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Agenda",
      content: (
        <div className="flex flex-col h-[70vh] justify-center">
          <div className="max-w-4xl mx-auto w-full space-y-12">
            <h2 className="text-3xl font-light text-neutral-900 mb-12">Today's Overview</h2>
            
            <div className="grid gap-8">
              <div className="group flex items-start space-x-6 p-8 rounded-2xl bg-white border border-neutral-100 transition-all hover:shadow-lg">
                <div className="p-4 rounded-xl bg-green-50 text-green-600">
                  <Brain className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-neutral-900 mb-2 group-hover:text-green-600 transition-colors">
                    ChatGPT
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Exploring how AI retains context and personalizes responses through advanced memory systems
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-6 p-8 rounded-2xl bg-white border border-neutral-100 transition-all hover:shadow-lg">
                <div className="p-4 rounded-xl bg-blue-50 text-blue-600">
                  <Terminal className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-neutral-900 mb-2 group-hover:text-blue-600 transition-colors">
                    Claude
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Demonstrating real-time code generation and intelligent development assistance
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-6 p-8 rounded-2xl bg-white border border-neutral-100 transition-all hover:shadow-lg">
                <div className="p-4 rounded-xl bg-purple-50 text-purple-600">
                  <Globe className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-neutral-900 mb-2 group-hover:text-purple-600 transition-colors">
                    Perplexity
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Revolutionizing search with AI-powered, context-aware information retrieval
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-neutral-50">
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
            className="w-full h-full"
          >
            {slides[page].content}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-colors"
        onClick={() => paginate(-1)}
        disabled={page === 0}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-colors"
        onClick={() => paginate(1)}
        disabled={page === slides.length - 1}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default AIPresentationDemo; 