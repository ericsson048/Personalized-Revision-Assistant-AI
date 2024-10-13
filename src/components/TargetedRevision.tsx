import React from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';

const weakAreas = [
  { id: 1, topic: "Photosynthesis", subject: "Biology", progress: 30 },
  { id: 2, topic: "Quadratic Equations", subject: "Mathematics", progress: 45 },
  { id: 3, topic: "French Revolution", subject: "History", progress: 60 },
];

const TargetedRevision: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Targeted Revision</h2>
      <p className="mb-4">Focus on improving these areas based on your recent performance:</p>
      <div className="space-y-4">
        {weakAreas.map((area) => (
          <div key={area.id} className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{area.topic}</h3>
              <span className="text-sm text-gray-500">{area.subject}</span>
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                    Progress
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-blue-600">
                    {area.progress}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div
                  style={{ width: `${area.progress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                ></div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="flex items-center space-x-1 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                <BookOpen size={16} />
                <span>Study</span>
              </button>
              <button className="flex items-center space-x-1 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                <CheckCircle size={16} />
                <span>Take Quiz</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TargetedRevision;