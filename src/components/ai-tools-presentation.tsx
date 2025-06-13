import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Code, Search, Brain, CheckCircle, ExternalLink, Terminal, Globe, Building2, Users, TrendingUp } from 'lucide-react';

const AIPresentationDemo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [chatGptMemory, setChatGptMemory] = useState('');
  const [chatGptResponse, setChatGptResponse] = useState('');
  const [claudeDemo, setClaudeDemo] = useState('');
  const [perplexityResults, setPerplexityResults] = useState('');

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0));

  const simulateChatGPTMemory = () => {
    setChatGptMemory("✓ Remembered: You're writing a devotional book about finding peace in difficult times");
    setTimeout(() => {
      setChatGptResponse(`I'll help you refine this devotional passage. Here's my analysis and suggestions:

📝 **Original Passage:**
"In the midst of life's storms, we often feel like we're drowning in our problems. But God is always there, ready to throw us a lifeline. We just need to reach out and grab it."

🔍 **Suggested Improvements:**

1. **Tone & Sensitivity**
   - The "drowning" metaphor might be too intense for readers going through trauma
   - Consider a gentler metaphor like "navigating through rough waters"

2. **Theological Accuracy**
   - The "lifeline" imagery is good but could be more biblically grounded
   - Consider referencing Psalm 46:1-2 or Matthew 11:28-30

3. **Revised Version:**
"In life's challenging seasons, we may feel overwhelmed by the waves of difficulty. Yet, as Psalm 46 reminds us, 'God is our refuge and strength, an ever-present help in trouble.' Like a skilled navigator, He guides us through the storm, offering His peace that surpasses understanding."

Would you like me to suggest more biblical references or help develop this theme further?`);
    }, 1500);
  };

  const generateClaudeCode = () => {
    setClaudeDemo(`// Advanced Todo App with TypeScript and React
import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');
  const [priority, setPriority] = useState<Todo['priority']>('medium');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: input.trim(),
          completed: false,
          priority,
          dueDate: new Date()
        }
      ]);
      setInput('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id 
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-3 py-2 border rounded"
          placeholder="Add a new todo..."
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as Todo['priority'])}
          className="px-3 py-2 border rounded"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map(todo => (
          <li
            key={todo.id}
            className={\`flex items-center justify-between p-3 border rounded \${
              todo.completed ? 'bg-gray-100' : ''
            }\`}
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className={\`\${todo.completed ? 'line-through' : ''}\`}>
                {todo.text}
              </span>
              <span className={\`text-sm px-2 py-1 rounded \${
                todo.priority === 'high' 
                  ? 'bg-red-100 text-red-700'
                  : todo.priority === 'medium'
                  ? 'bg-yellow-100 text-yellow-700'
                  : 'bg-green-100 text-green-700'
              }\`}>
                {todo.priority}
              </span>
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;`);
  };

  const simulatePerplexitySearch = () => {
    setPerplexityResults(`# Latest AI Development Trends - June 2025

Based on real-time analysis of multiple sources:

## 1. Multimodal AI Systems
- **Vision-Language Models**: New architectures achieving 98% accuracy in complex scene understanding
- **Cross-Modal Learning**: Breakthrough in transferring knowledge between different sensory domains
📊 *Source: Nature AI Journal, June 2025*

## 2. Quantum-Enhanced Neural Networks
- **Quantum Advantage**: 100x speedup in training large language models
- **Hybrid Classical-Quantum Systems**: New frameworks for practical quantum ML
📊 *Source: Quantum Computing Review, May 2025*

## 3. Neuromorphic Computing
- **Brain-Like Architectures**: 1000x energy efficiency improvement
- **Adaptive Learning Systems**: Real-time neural network optimization
📊 *Source: IEEE Spectrum, June 2025*

## 4. Edge AI Advancements
- **TinyML Breakthroughs**: Running GPT-4 level models on smartphones
- **Edge-Cloud Synergy**: New distributed AI architectures
📊 *Source: Edge Computing Digest, June 2025*

## Industry Impact:
"These advances are revolutionizing everything from healthcare diagnostics to autonomous systems."
- Dr. Sarah Chen, MIT AI Lab

*All data verified across multiple academic sources*`);
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
        <div className="flex flex-col h-[70vh] justify-center">
          <div className="max-w-5xl mx-auto w-full">
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-light text-neutral-900 mb-4">ChatGPT</h2>
                  <p className="text-neutral-600 leading-relaxed">
                    Experience how AI maintains context and delivers personalized interactions
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-neutral-700">Contextual Memory</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-neutral-700">Personalized Responses</span>
                  </div>
                </div>

                <button 
                  onClick={simulateChatGPTMemory}
                  className="w-full bg-neutral-900 text-white py-4 px-6 rounded-xl flex items-center justify-center hover:bg-neutral-800 transition-colors"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Start Demo
                </button>
              </div>

              <div className="space-y-6">
                {chatGptMemory && (
                  <div className="p-4 rounded-xl bg-green-50 border border-green-100">
                    <p className="text-green-800 font-medium">{chatGptMemory}</p>
                  </div>
                )}

                {chatGptResponse && (
                  <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm h-[400px] overflow-y-auto">
                    <div className="prose prose-neutral max-w-none">
                      <div className="whitespace-pre-line">{chatGptResponse}</div>
                    </div>
                  </div>
                )}

                {!chatGptMemory && !chatGptResponse && (
                  <div className="h-[400px] flex items-center justify-center p-12 rounded-xl bg-neutral-50 border border-neutral-100">
                    <p className="text-neutral-500 text-center">
                      Click "Start Demo" to see ChatGPT in action
                    </p>
                  </div>
                )}
              </div>
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
        <div className="flex flex-col h-[70vh] justify-center">
          <div className="max-w-5xl mx-auto w-full">
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-light text-neutral-900 mb-4">Claude</h2>
                  <p className="text-neutral-600 leading-relaxed">
                    Watch AI generate production-ready code with TypeScript and React
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-neutral-700">Type-Safe Code Generation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="text-neutral-700">Modern React Patterns</span>
                  </div>
                </div>

                <button 
                  onClick={generateClaudeCode}
                  className="w-full bg-neutral-900 text-white py-4 px-6 rounded-xl flex items-center justify-center hover:bg-neutral-800 transition-colors"
                >
                  <Terminal className="w-5 h-5 mr-2" />
                  Generate Todo App
                </button>
              </div>

              <div>
                {claudeDemo ? (
                  <div className="bg-[#1E1E1E] text-[#D4D4D4] p-6 rounded-xl shadow-lg font-mono text-sm overflow-auto max-h-[500px]">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[#569CD6]">TodoApp.tsx</span>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                    </div>
                    <pre className="whitespace-pre-wrap">{claudeDemo}</pre>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center p-12 rounded-xl bg-neutral-50 border border-neutral-100">
                    <p className="text-neutral-500 text-center">
                      Click "Generate Todo App" to see Claude in action
                    </p>
                  </div>
                )}
              </div>
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
        <div className="flex flex-col h-[70vh] justify-center">
          <div className="max-w-5xl mx-auto w-full">
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-light text-neutral-900 mb-4">Perplexity</h2>
                  <p className="text-neutral-600 leading-relaxed">
                    Experience AI-powered search with real-time information synthesis
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    <span className="text-neutral-700">Real-Time Analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    <span className="text-neutral-700">Cited Sources</span>
                  </div>
                </div>

                <button 
                  onClick={simulatePerplexitySearch}
                  className="w-full bg-neutral-900 text-white py-4 px-6 rounded-xl flex items-center justify-center hover:bg-neutral-800 transition-colors"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Search AI Trends
                </button>
              </div>

              <div>
                {perplexityResults ? (
                  <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm overflow-auto max-h-[500px]">
                    <div className="prose prose-neutral max-w-none">
                      <div className="whitespace-pre-wrap">{perplexityResults}</div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center p-12 rounded-xl bg-neutral-50 border border-neutral-100">
                    <p className="text-neutral-500 text-center">
                      Click "Search AI Trends" to see Perplexity in action
                    </p>
                  </div>
                )}
              </div>
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
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-neutral-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-medium text-neutral-900">AI Tools</h1>
          <div className="text-sm text-neutral-500 font-medium">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </header>

      <main className="pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {slides[currentSlide].content}
        </div>
      </main>

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-neutral-100 px-6 py-3 flex items-center space-x-6">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 rounded-full hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-neutral-900 scale-125' 
                    : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-2 rounded-full hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIPresentationDemo;