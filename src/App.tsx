import React, { useState } from 'react';
import { Brain, BookOpen, Target, FileText } from 'lucide-react';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';
import Flashcards from './components/Flashcards';
import TargetedRevision from './components/TargetedRevision';
import PDFStudy from './components/PDFStudy';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">AI-Powered Revision Assistant</h1>
      </header>
      <div className="container mx-auto p-4">
        <nav className="flex space-x-4 mb-4 overflow-x-auto">
          <button
            className={`flex items-center space-x-2 px-4 py-2 rounded whitespace-nowrap ${
              activeTab === 'dashboard' ? 'bg-blue-500 text-white' : 'bg-white'
            }`}
            onClick={() => setActiveTab('dashboard')}
          >
            <Brain size={20} />
            <span>Dashboard</span>
          </button>
          <button
            className={`flex items-center space-x-2 px-4 py-2 rounded whitespace-nowrap ${
              activeTab === 'quiz' ? 'bg-blue-500 text-white' : 'bg-white'
            }`}
            onClick={() => setActiveTab('quiz')}
          >
            <BookOpen size={20} />
            <span>Quiz</span>
          </button>
          <button
            className={`flex items-center space-x-2 px-4 py-2 rounded whitespace-nowrap ${
              activeTab === 'flashcards' ? 'bg-blue-500 text-white' : 'bg-white'
            }`}
            onClick={() => setActiveTab('flashcards')}
          >
            <BookOpen size={20} />
            <span>Flashcards</span>
          </button>
          <button
            className={`flex items-center space-x-2 px-4 py-2 rounded whitespace-nowrap ${
              activeTab === 'targeted' ? 'bg-blue-500 text-white' : 'bg-white'
            }`}
            onClick={() => setActiveTab('targeted')}
          >
            <Target size={20} />
            <span>Targeted Revision</span>
          </button>
          <button
            className={`flex items-center space-x-2 px-4 py-2 rounded whitespace-nowrap ${
              activeTab === 'pdfstudy' ? 'bg-blue-500 text-white' : 'bg-white'
            }`}
            onClick={() => setActiveTab('pdfstudy')}
          >
            <FileText size={20} />
            <span>PDF Study</span>
          </button>
        </nav>
        <main>
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'quiz' && <Quiz />}
          {activeTab === 'flashcards' && <Flashcards />}
          {activeTab === 'targeted' && <TargetedRevision />}
          {activeTab === 'pdfstudy' && <PDFStudy />}
        </main>
      </div>
    </div>
  );
}

export default App;