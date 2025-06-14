import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Code, Search, Brain, CheckCircle, ExternalLink, Terminal, Globe, Building2, Users, TrendingUp, Video, Eye, Headphones } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
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

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = swipePower(offset.x, velocity.x);

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
    },

    {
      title: "ChatGPT Introduction",
      content: (
        <div className="flex flex-col h-[70vh] justify-center">
          <div className="max-w-5xl mx-auto w-full">
            <div className="text-center mb-12">
              <div className="w-24 h-24 bg-green-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-4xl font-light text-neutral-900 mb-4">ChatGPT</h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                The conversational AI that learns and remembers, providing increasingly personalized interactions
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 rounded-2xl bg-white border border-neutral-100">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Contextual Memory</h3>
                <p className="text-neutral-600 text-sm">Remembers your preferences and past conversations</p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-white border border-neutral-100">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Adaptive Learning</h3>
                <p className="text-neutral-600 text-sm">Improves responses based on your feedback</p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-white border border-neutral-100">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Personalization</h3>
                <p className="text-neutral-600 text-sm">Tailors content to your specific needs and role</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      title: "ChatGPT Marketplace Stories",
      content: (
        <div className="flex flex-col h-[70vh] justify-center">
          <div className="max-w-5xl mx-auto w-full space-y-8">
            <h2 className="text-3xl font-light text-neutral-900 text-center mb-12">ChatGPT in the Marketplace</h2>
            
            <div className="grid gap-8">
              <div className="p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm">
                <div className="flex items-start space-x-6">
                  <div className="p-3 rounded-xl bg-blue-50">
                    <Building2 className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-neutral-900 mb-3">Shopify: Customer Support Revolution</h3>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      Shopify integrated ChatGPT into their customer support system, reducing response times by 75% and handling 80% of routine inquiries automatically. The AI remembers customer purchase history and preferences, providing personalized solutions.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-neutral-500">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">75% faster responses</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">80% automation rate</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm">
                <div className="flex items-start space-x-6">
                  <div className="p-3 rounded-xl bg-purple-50">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-neutral-900 mb-3">Khan Academy: Personalized Tutoring</h3>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      Khan Academy's "Khanmigo" uses ChatGPT to provide personalized tutoring. The AI remembers each student's learning style, struggles, and progress, adapting explanations and providing targeted practice problems.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-neutral-500">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">40% improvement in learning outcomes</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">2M+ students served</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm">
                <div className="flex items-start space-x-6">
                  <div className="p-3 rounded-xl bg-orange-50">
                    <TrendingUp className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-neutral-900 mb-3">Duolingo: Adaptive Language Learning</h3>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      Duolingo's "Duolingo Max" uses ChatGPT to create personalized conversation practice. The AI remembers vocabulary gaps, cultural interests, and learning pace to create relevant, engaging dialogue scenarios.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-neutral-500">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">60% higher engagement</span>
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">500M+ users</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      title: "ChatGPT Demo",
      content: (
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl">
                <div className="space-y-4">
                <button 
                onClick={() => {
                  setChatGptMemory("✓ Remembered: You're writing a devotional book about finding peace in difficult times");
                  setTimeout(() => {
                    setChatGptResponse("I'll help you refine this devotional passage. Here's my analysis and suggestions:\n\n📝 **Original Passage:**\n\"In the midst of life's storms, we often feel like we're drowning in our problems. But God is always there, ready to throw us a lifeline. We just need to reach out and grab it.\"\n\n🔍 **Suggested Improvements:**\n\n1. **Tone & Sensitivity**\n   - The \"drowning\" metaphor might be too intense for readers going through trauma\n   - Consider a gentler metaphor like \"navigating through rough waters\"\n\n2. **Theological Accuracy**\n   - The \"lifeline\" imagery is good but could be more biblically grounded\n   - Consider referencing Psalm 46:1-2 or Matthew 11:28-30\n\n3. **Revised Version:**\n\"In life's challenging seasons, we may feel overwhelmed by the waves of difficulty. Yet, as Psalm 46 reminds us, 'God is our refuge and strength, an ever-present help in trouble.' Like a skilled navigator, He guides us through the storm, offering His peace that surpasses understanding.\"\n\nWould you like me to suggest more biblical references or help develop this theme further?");
                  }, 1500);
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
      title: "Claude Introduction",
      content: (
        <div className="flex flex-col h-[70vh] justify-center">
          <div className="max-w-5xl mx-auto w-full">
            <div className="text-center mb-12">
              <div className="w-24 h-24 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Terminal className="w-12 h-12 text-blue-600" />
              </div>
              <h2 className="text-4xl font-light text-neutral-900 mb-4">Claude</h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                The AI coding assistant that writes, explains, and debugs code with human-like understanding
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 rounded-2xl bg-white border border-neutral-100">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Code Generation</h3>
                <p className="text-neutral-600 text-sm">Writes production-ready code in multiple languages</p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-white border border-neutral-100">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Code Analysis</h3>
                <p className="text-neutral-600 text-sm">Reviews and explains complex codebases</p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-white border border-neutral-100">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Debugging</h3>
                <p className="text-neutral-600 text-sm">Identifies and fixes bugs with detailed explanations</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      title: "Claude Marketplace Stories",
      content: (
        <div className="flex flex-col h-[70vh] justify-center">
          <div className="max-w-5xl mx-auto w-full space-y-8">
            <h2 className="text-3xl font-light text-neutral-900 text-center mb-12">Claude in the Marketplace</h2>
            
            <div className="grid gap-8">
              <div className="p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm">
                <div className="flex items-start space-x-6">
                  <div className="p-3 rounded-xl bg-green-50">
                    <Building2 className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-neutral-900 mb-3">Replit: AI-Powered Development Platform</h3>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      Replit integrated Claude to help millions of developers write, debug, and deploy code. Claude generates entire applications from natural language descriptions and helps debug complex issues in real-time.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-neutral-500">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">50% faster development</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">20M+ developers</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm">
                <div className="flex items-start space-x-6">
                  <div className="p-3 rounded-xl bg-purple-50">
                    <Code className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-neutral-900 mb-3">GitLab: Enterprise Code Review</h3>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      GitLab uses Claude for automated code reviews, security vulnerability detection, and code quality improvements. The AI analyzes pull requests and provides detailed feedback to development teams.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-neutral-500">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">85% bug detection rate</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">30M+ users</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm">
                <div className="flex items-start space-x-6">
                  <div className="p-3 rounded-xl bg-orange-50">
                    <TrendingUp className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-neutral-900 mb-3">Notion: AI-Powered Workspace</h3>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      Notion integrated Claude to help users generate code snippets, create database schemas, and automate workflows. Teams use it to rapidly prototype and build internal tools without dedicated developers.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-neutral-500">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">70% productivity boost</span>
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">100M+ users</span>
                    </div>
                  </div>
                </div>
              </div>
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
                  setClaudeDemoType('code');
                  setClaudeDemo("// Advanced Todo App with TypeScript and React\nimport React, { useState } from 'react';\n\ninterface Todo {\n  id: number;\n  text: string;\n  completed: boolean;\n  priority: 'low' | 'medium' | 'high';\n  dueDate?: Date;\n}\n\nconst TodoApp: React.FC = () => {\n  const [todos, setTodos] = useState<Todo[]>([]);\n  const [input, setInput] = useState('');\n  const [priority, setPriority] = useState<Todo['priority']>('medium');\n\n  const addTodo = () => {\n    if (input.trim()) {\n      setTodos([\n        ...todos,\n        {\n          id: Date.now(),\n          text: input.trim(),\n          completed: false,\n          priority,\n          dueDate: new Date()\n        }\n      ]);\n      setInput('');\n    }\n  };\n\n  const toggleTodo = (id: number) => {\n    setTodos(todos.map(todo =>\n      todo.id === id \n        ? { ...todo, completed: !todo.completed }\n        : todo\n    ));\n  };\n\n  const deleteTodo = (id: number) => {\n    setTodos(todos.filter(todo => todo.id !== id));\n  };\n\n  return (\n    <div className=\"max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg\">\n      <h1 className=\"text-2xl font-bold mb-4\">Todo List</h1>\n      \n      <div className=\"flex gap-2 mb-4\">\n        <input\n          type=\"text\"\n          value={input}\n          onChange={(e) => setInput(e.target.value)}\n          className=\"flex-1 px-3 py-2 border rounded\"\n          placeholder=\"Add a new todo...\"\n        />\n        <select\n          value={priority}\n          onChange={(e) => setPriority(e.target.value as Todo['priority'])}\n          className=\"px-3 py-2 border rounded\"\n        >\n          <option value=\"low\">Low</option>\n          <option value=\"medium\">Medium</option>\n          <option value=\"high\">High</option>\n        </select>\n        <button\n          onClick={addTodo}\n          className=\"px-4 py-2 bg-blue-500 text-white rounded\"\n        >\n          Add\n        </button>\n      </div>\n\n      <ul className=\"space-y-2\">\n        {todos.map(todo => (\n          <li\n            key={todo.id}\n            className={`flex items-center justify-between p-3 border rounded ${todo.completed ? 'bg-gray-100' : ''}`}\n          >\n            <div className=\"flex items-center gap-2\">\n              <input\n                type=\"checkbox\"\n                checked={todo.completed}\n                onChange={() => toggleTodo(todo.id)}\n              />\n              <span className={`${todo.completed ? 'line-through' : ''}`}>\n                {todo.text}\n              </span>\n              <span className={`text-sm px-2 py-1 rounded ${\n                todo.priority === 'high' \n                  ? 'bg-red-100 text-red-700'\n                  : todo.priority === 'medium'\n                  ? 'bg-yellow-100 text-yellow-700'\n                  : 'bg-green-100 text-green-700'\n              }`}>\n                {todo.priority}\n              </span>\n            </div>\n            <button\n              onClick={() => deleteTodo(todo.id)}\n              className=\"text-red-500 hover:text-red-700\"\n            >\n              Delete\n            </button>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n};\n\nexport default TodoApp;");
                }}
                className="w-full bg-neutral-900 text-white py-4 px-6 rounded-xl flex items-center justify-center hover:bg-neutral-800 transition-colors"
              >
                <Code className="w-5 h-5 mr-2" />
                Generate Code
              </button>

                <button 
                onClick={() => {
                  setClaudeDemoType('script');
                  setClaudeDemo("📝 **Original Script:**\n\"Hey everyone! We're having choir auditions next week. Come join us if you like to sing. We need more people for our upcoming concert.\"\n\n🎯 **Enhanced Version:**\n\"🎵 Calling All Voices! Join Our Musical Journey 🎵\n\nDear Music Enthusiasts,\n\nWe're thrilled to announce auditions for our upcoming concert season! Whether you're a seasoned vocalist or just discovering your voice, we welcome you to be part of our vibrant choir community.\n\n📅 **Audition Details:**\n• Date: [Next Week's Date]\n• Time: 6:00 PM - 8:00 PM\n• Location: Main Sanctuary\n\n🎼 **What to Prepare:**\n• A brief vocal warm-up\n• A short piece of your choice (30-60 seconds)\n• Basic sight-reading assessment\n\n🌟 **Why Join Us?**\n• Be part of a supportive musical family\n• Develop your vocal skills\n• Perform in our upcoming concert series\n• Create lasting friendships\n\nNo prior choir experience required - just bring your passion for music!\n\nRSVP: [Contact Information]\n\nLet's make beautiful music together! 🎶\n\n#ChoirAuditions #JoinTheChoir #MusicCommunity\"");
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
      title: "Perplexity Introduction",
      content: (
        <div className="flex flex-col h-[70vh] justify-center">
          <div className="max-w-5xl mx-auto w-full">
            <div className="text-center mb-12">
              <div className="w-24 h-24 bg-purple-50 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-12 h-12 text-purple-600" />
              </div>
              <h2 className="text-4xl font-light text-neutral-900 mb-4">Perplexity</h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                The AI search engine that provides real-time, cited answers from across the web
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 rounded-2xl bg-white border border-neutral-100">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Real-Time Search</h3>
                <p className="text-neutral-600 text-sm">Accesses current information from across the web</p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-white border border-neutral-100">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">Source Citations</h3>
                <p className="text-neutral-600 text-sm">Every answer includes verifiable source links</p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-white border border-neutral-100">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">AI Synthesis</h3>
                <p className="text-neutral-600 text-sm">Combines multiple sources into coherent answers</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      title: "Perplexity Marketplace Stories",
      content: (
        <div className="flex flex-col h-[70vh] justify-center">
          <div className="max-w-5xl mx-auto w-full space-y-8">
            <h2 className="text-3xl font-light text-neutral-900 text-center mb-12">Perplexity in the Marketplace</h2>
            
            <div className="grid gap-8">
              <div className="p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm">
                <div className="flex items-start space-x-6">
                  <div className="p-3 rounded-xl bg-blue-50">
                    <Building2 className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-neutral-900 mb-3">Financial Times: Research Enhancement</h3>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      Financial Times journalists use Perplexity to rapidly research breaking news stories, verify facts across multiple sources, and gather real-time market data. The AI helps them produce accurate, well-sourced articles faster than traditional research methods.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-neutral-500">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">60% faster research</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">95% accuracy rate</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm">
                <div className="flex items-start space-x-6">
                  <div className="p-3 rounded-xl bg-green-50">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-neutral-900 mb-3">McKinsey & Company: Market Intelligence</h3>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      McKinsey consultants use Perplexity to gather real-time market intelligence, competitor analysis, and industry trends for client projects. The AI synthesizes information from hundreds of sources to provide comprehensive market overviews.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-neutral-500">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">80% time savings</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Fortune 500 clients</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm">
                <div className="flex items-start space-x-6">
                  <div className="p-3 rounded-xl bg-orange-50">
                    <TrendingUp className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-neutral-900 mb-3">Harvard Medical School: Research Acceleration</h3>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      Medical researchers at Harvard use Perplexity to quickly survey the latest scientific literature, identify research gaps, and stay current with rapidly evolving medical knowledge. The AI helps them process thousands of papers efficiently.
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-neutral-500">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">10x research speed</span>
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">1000+ researchers</span>
                    </div>
                  </div>
                </div>
              </div>
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
                  setPerplexityResults("# Latest AI Development Trends - June 2025\n\nBased on real-time analysis of multiple sources:\n\n## 1. Multimodal AI Systems\n- **Vision-Language Models**: New architectures achieving 98% accuracy in complex scene understanding\n- **Cross-Modal Learning**: Breakthrough in transferring knowledge between different sensory domains\n📊 *Source: Nature AI Journal, June 2025*\n\n## 2. Quantum-Enhanced Neural Networks\n- **Quantum Advantage**: 100x speedup in training large language models\n- **Hybrid Classical-Quantum Systems**: New frameworks for practical quantum ML\n📊 *Source: Quantum Computing Review, May 2025*\n\n## 3. Neuromorphic Computing\n- **Brain-Like Architectures**: 1000x energy efficiency improvement\n- **Adaptive Learning Systems**: Real-time neural network optimization\n📊 *Source: IEEE Spectrum, June 2025*\n\n## 4. Edge AI Advancements\n- **TinyML Breakthroughs**: Running GPT-4 level models on smartphones\n- **Edge-Cloud Synergy**: New distributed AI architectures\n📊 *Source: Edge Computing Digest, June 2025*\n\n## Industry Impact:\n\"These advances are revolutionizing everything from healthcare diagnostics to autonomous systems.\"\n- Dr. Sarah Chen, MIT AI Lab\n\n*All data verified across multiple academic sources*");
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
    },

    {
      title: "Summary",
      content: (
        <div className="flex flex-col h-[70vh] justify-center">
          <div className="max-w-4xl mx-auto w-full space-y-12">
            <h2 className="text-3xl font-light text-neutral-900 text-center mb-12">
              Transforming Work with AI
            </h2>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-neutral-100 transition-all hover:shadow-lg space-y-6">
                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-neutral-900 mb-2">ChatGPT</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Contextual understanding and personalized interactions
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-neutral-100 transition-all hover:shadow-lg space-y-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-neutral-900 mb-2">Claude</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Intelligent code generation and development assistance
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-neutral-100 transition-all hover:shadow-lg space-y-6">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-neutral-900 mb-2">Perplexity</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Real-time information synthesis and analysis
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center text-neutral-600 mt-12">
              <p>Thank you for exploring the future of AI tools with us</p>
              <p className="text-sm mt-2">Questions? Let's discuss!</p>
            </div>
          </div>
        </div>
      )
    },

    {
      title: "AI Mentions",
      content: (
        <div className="flex flex-col h-[70vh] justify-center">
          <div className="max-w-5xl mx-auto w-full space-y-8">
            <h2 className="text-3xl font-light text-neutral-900 text-center mb-12">Notable AI Tools in the Market</h2>
            
            <div className="grid gap-8">
              <div className="p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm">
                <div className="flex items-start space-x-6">
                  <div className="p-3 rounded-xl bg-blue-50">
                    <Code className="w-8 h-8 text-blue-600" />
          </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-neutral-900 mb-3">Cursor</h3>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      An AI-powered code editor that revolutionizes development with intelligent code completion, natural language code generation, and seamless integration with your existing workflow.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-neutral-500">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">2x productivity boost</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Trusted by top companies</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">1M+ developers</span>
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">85% code completion accuracy</span>
        </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm">
                <div className="flex items-start space-x-6">
                  <div className="p-3 rounded-xl bg-red-50">
                    <Video className="w-8 h-8 text-red-600" />
        </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-neutral-900 mb-3">Google Veo 3</h3>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      Google's latest AI video generation model that creates high-quality, realistic videos from text descriptions, revolutionizing content creation and visual storytelling.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-neutral-500">
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">4K resolution output</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">60fps generation</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">95% realism score</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">10x faster than V2</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm">
                <div className="flex items-start space-x-6">
                  <div className="p-3 rounded-xl bg-indigo-50">
                    <Users className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-neutral-900 mb-3">Microsoft Teams Copilot</h3>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      An AI assistant integrated into Microsoft Teams that enhances collaboration, summarizes meetings, generates action items, and helps teams work more efficiently.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-neutral-500">
                      <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">75% meeting time saved</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Enterprise ready</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">500K+ organizations</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">90% accuracy rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      title: "Cursor Spotlight",
      content: (
        <div className="flex flex-col h-[70vh] justify-center">
          <div className="max-w-5xl mx-auto w-full">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-light text-neutral-900 mb-4">Cursor: The AI Code Editor</h2>
              <p className="text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                Experience the future of coding with Cursor's AI-powered features
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-xl bg-white border border-neutral-100 text-center">
                <div className="text-3xl font-semibold text-blue-600 mb-2">2x</div>
                <p className="text-neutral-600">Faster Development</p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-neutral-100 text-center">
                <div className="text-3xl font-semibold text-green-600 mb-2">85%</div>
                <p className="text-neutral-600">Code Completion Accuracy</p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-neutral-100 text-center">
                <div className="text-3xl font-semibold text-purple-600 mb-2">1M+</div>
                <p className="text-neutral-600">Active Developers</p>
              </div>
            </div>
            
            <div className="w-full h-[50vh] rounded-2xl overflow-hidden border border-neutral-200 shadow-lg bg-white">
              <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <ExternalLink className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium text-neutral-900 mb-4">Visit Cursor's Website</h3>
                <p className="text-neutral-600 mb-6 max-w-md">
                  Due to security restrictions, we can't embed the website directly. Click below to visit Cursor's official website and explore their features.
                </p>
                <a 
                  href="https://www.cursor.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Open Cursor Website
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      title: "Cluely Story",
      content: (
        <div className="flex flex-col h-[70vh] justify-center">
          <div className="max-w-5xl mx-auto w-full space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-neutral-900 mb-4">Cluely: The Invisible AI Assistant</h2>
              <p className="text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                An undetectable AI that sees your screen, hears your calls, and feeds you answers in real time
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-xl bg-white border border-neutral-100 text-center">
                <div className="text-3xl font-semibold text-purple-600 mb-2">99.9%</div>
                <p className="text-neutral-600">Undetectability Rate</p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-neutral-100 text-center">
                <div className="text-3xl font-semibold text-blue-600 mb-2">50K+</div>
                <p className="text-neutral-600">Active Users</p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-neutral-100 text-center">
                <div className="text-3xl font-semibold text-green-600 mb-2">3x</div>
                <p className="text-neutral-600">Productivity Boost</p>
              </div>
            </div>

            <div className="grid gap-8">
              <div className="p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm">
                <div className="flex items-start space-x-6">
                  <div className="p-3 rounded-xl bg-purple-50">
                    <Eye className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-neutral-900 mb-3">Sees What You See</h3>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      Cluely understands all content on your screen — code, slides, questions, docs, and dashboards, providing context-aware assistance without disrupting your workflow.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-neutral-500">
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">100+ file formats</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Real-time analysis</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">95% accuracy</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm">
                <div className="flex items-start space-x-6">
                  <div className="p-3 rounded-xl bg-blue-50">
                    <Headphones className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-neutral-900 mb-3">Hears What You Hear</h3>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      Silently listens in the background, understanding your meetings in real time without ever joining them, providing instant answers and insights when you need them.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-neutral-500">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">10+ languages</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">0.5s response time</span>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">98% accuracy</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white border border-neutral-100 shadow-sm">
                <div className="flex items-start space-x-6">
                  <div className="p-3 rounded-xl bg-green-50">
                    <Brain className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-neutral-900 mb-3">Undetectable by Design</h3>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                      No bots in the room, no Zoom guests, no screen-share trails. Cluely works invisibly across all your tools and applications, providing assistance without ever being noticed.
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-neutral-500">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Zero footprint</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">100% privacy</span>
                      <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">SOC 2 certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      title: "Cluely Demo",
      content: (
        <div className="flex flex-col h-[70vh] justify-center">
          <div className="max-w-5xl mx-auto w-full">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-light text-neutral-900 mb-4">Experience Cluely</h2>
              <p className="text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                See how Cluely transforms your workflow with invisible AI assistance
              </p>
            </div>
            
            <div className="w-full h-[60vh] rounded-2xl overflow-hidden border border-neutral-200 shadow-lg bg-white">
              <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mb-6">
                  <ExternalLink className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-medium text-neutral-900 mb-4">Visit Cluely's Website</h3>
                <p className="text-neutral-600 mb-6 max-w-md">
                  Due to security restrictions, we can't embed the website directly. Click below to visit Cluely's official website and learn more about their invisible AI assistant.
                </p>
                <a 
                  href="https://cluely.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Open Cluely Website
                </a>
              </div>
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