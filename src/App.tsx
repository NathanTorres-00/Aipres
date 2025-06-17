import AIPresentationDemo from './components/ai-tools-presentation';
import { StagewiseToolbar } from '@stagewise/toolbar-react';
import { ReactPlugin } from '@stagewise-plugins/react';

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a]">
      <StagewiseToolbar config={{ plugins: [ReactPlugin] }} />
      <AIPresentationDemo />
    </div>
  );
}

export default App;