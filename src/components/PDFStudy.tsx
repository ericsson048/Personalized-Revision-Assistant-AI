import React, { useState } from 'react';
import { Upload, BookOpen, BarChart } from 'lucide-react';

const PDFStudy: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [questions, setQuestions] = useState<string[]>([]);
  const [progress, setProgress] = useState<number>(0);
  const [revisionPoints, setRevisionPoints] = useState<string[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      // In a real application, we would process the PDF here and generate questions
      setQuestions([
        "What is the main topic of the PDF?",
        "Explain the key concepts discussed in the document.",
        "What are the main conclusions drawn in the PDF?"
      ]);
      setProgress(0);
      setRevisionPoints([]);
    }
  };

  const handleAnswerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real application, we would process the answers here
    setProgress(progress + 33);
    if (progress >= 66) {
      setRevisionPoints([
        "Review the introduction section",
        "Focus on understanding the methodology",
        "Revisit the conclusion and key findings"
      ]);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">PDF Study</h2>
      {!file ? (
        <div className="border-dashed border-2 border-gray-300 rounded-lg p-8 text-center">
          <Upload className="mx-auto text-gray-400 mb-4" size={48} />
          <p className="mb-2">Upload your PDF to start studying</p>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileUpload}
            className="hidden"
            id="pdf-upload"
          />
          <label
            htmlFor="pdf-upload"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
          >
            Select PDF
          </label>
        </div>
      ) : (
        <div>
          <p className="mb-4">Studying: {file.name}</p>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Questions:</h3>
            <form onSubmit={handleAnswerSubmit}>
              {questions.map((question, index) => (
                <div key={index} className="mb-4">
                  <p className="mb-2">{question}</p>
                  <textarea
                    className="w-full p-2 border rounded"
                    rows={3}
                    placeholder="Type your answer here..."
                    required
                  ></textarea>
                </div>
              ))}
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Submit Answers
              </button>
            </form>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Progress:</h3>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div
                  style={{ width: `${progress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                ></div>
              </div>
              <p className="text-right">{progress}% Complete</p>
            </div>
          </div>
          {revisionPoints.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Revision Points:</h3>
              <ul className="list-disc pl-5">
                {revisionPoints.map((point, index) => (
                  <li key={index} className="mb-1">{point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PDFStudy;