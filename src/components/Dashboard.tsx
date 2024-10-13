import React from 'react';
import { BarChart, BookOpen, Brain, Target } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Welcome back, Student!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-100 p-4 rounded-lg flex items-center">
          <Brain className="text-blue-500 mr-3" size={24} />
          <div>
            <p className="text-sm text-blue-500">Overall Progress</p>
            <p className="text-2xl font-bold">75%</p>
          </div>
        </div>
        <div className="bg-green-100 p-4 rounded-lg flex items-center">
          <BookOpen className="text-green-500 mr-3" size={24} />
          <div>
            <p className="text-sm text-green-500">Quizzes Completed</p>
            <p className="text-2xl font-bold">12</p>
          </div>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg flex items-center">
          <BarChart className="text-yellow-500 mr-3" size={24} />
          <div>
            <p className="text-sm text-yellow-500">Flashcards Mastered</p>
            <p className="text-2xl font-bold">48</p>
          </div>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg flex items-center">
          <Target className="text-purple-500 mr-3" size={24} />
          <div>
            <p className="text-sm text-purple-500">Weak Areas Improved</p>
            <p className="text-2xl font-bold">3</p>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3">Recommended Actions</h3>
      <ul className="space-y-2">
        <li className="bg-gray-100 p-3 rounded-lg">Review 'Photosynthesis' in Biology</li>
        <li className="bg-gray-100 p-3 rounded-lg">Practice Algebra equations</li>
        <li className="bg-gray-100 p-3 rounded-lg">Take a quiz on World War II</li>
      </ul>
    </div>
  );
};

export default Dashboard;