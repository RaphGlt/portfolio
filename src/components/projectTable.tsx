import React, { useState } from 'react';
import { projects } from '@/lib/data';

export default function ProjectsGrid() {
  const [sem, setSem] = useState<1 | 2 | 3 | 4 | 5 | 6 | 7>(1);
  const filtered = projects.filter((p) => p.semester === sem);

  return (
    <div className="max-w-screen-xl mx-auto space-y-6 px-4">
      <div className="flex justify-center space-x-3">
        <button
          onClick={() => setSem(1)}
          className={`px-5 py-2 rounded-full font-medium ${
            sem === 1
              ? 'bg-indigo-600 text-white hover:bg-indigo-500'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Semestre 1
        </button>
        <button
          onClick={() => setSem(2)}
          className={`px-5 py-2 rounded-full font-medium ${
            sem === 2
              ? 'bg-indigo-600 text-white hover:bg-indigo-500'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Semestre 2
        </button>
        <button
          onClick={() => setSem(3)}
          className={`px-5 py-2 rounded-full font-medium ${
            sem === 3
              ? 'bg-indigo-600 text-white hover:bg-indigo-500'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Semestre 3
        </button>
        <button
          onClick={() => setSem(4)}
          className={`px-5 py-2 rounded-full font-medium ${
            sem === 4
              ? 'bg-indigo-600 text-white hover:bg-indigo-500'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Semestre 4
        </button>
        <button
          onClick={() => setSem(5)}
          className={`px-5 py-2 rounded-full font-medium ${
            sem === 5
              ? 'bg-indigo-600 text-white hover:bg-indigo-500'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Semestre 5
        </button>
        <button
          onClick={() => setSem(6)}
          className={`px-5 py-2 rounded-full font-medium ${
            sem === 6
              ? 'bg-indigo-600 text-white hover:bg-indigo-500'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Semestre 6
        </button>
        <button
          onClick={() => setSem(7)}
          className={`px-5 py-2 rounded-full font-medium ${
            sem === 7
              ? 'bg-indigo-600 text-white hover:bg-indigo-500'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Projet parsonnel
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        {filtered.map((p) => (
          <div
            key={p.title}
            className="group bg-white/10 dark:bg-white/5 border border-purple-500/20 backdrop-blur-lg rounded-2xl shadow-xl p-6 flex flex-col justify-between max-w-sm w-full transition-transform duration-300 hover:scale-[1.02] hover:shadow-purple-500/30"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {p.title}
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {p.description.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4 border-t border-purple-500/20 pt-4">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-300 hover:text-purple-400 font-medium transition-colors"
              >
                Voir sur GitHub
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
