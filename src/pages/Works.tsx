import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProjects, getAllTechnologies } from '../utils/projects';
import LazyImage from '../components/LazyImage';

const Works = () => {
  const allProjects = getAllProjects();
  const allTechnologies = getAllTechnologies();
  const [selectedTechnology, setSelectedTechnology] = useState<string>('');

  // フィルタリングされたプロジェクト
  const filteredProjects = selectedTechnology
    ? allProjects.filter((project) =>
        project.technologies.includes(selectedTechnology)
      )
    : allProjects;

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-6">Works</h1>
        <p className="text-gray-600 mb-8">
          これまでに取り組んだプロジェクトの一覧です。
        </p>

        {/* フィルタリング機能 */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-3">技術スタックで絞り込み</h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTechnology('')}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedTechnology === ''
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              すべて
            </button>
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTechnology(tech)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedTechnology === tech
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* プロジェクト一覧 */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            プロジェクト一覧 ({filteredProjects.length}件)
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <LazyImage
                src={project.image}
                alt={project.title}
                className="w-full h-48"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Link
                    to={`/works/${project.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    詳細を見る
                  </Link>
                  <a
                    href={project.github}
                    className="text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="text-blue-500 hover:underline"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              選択した技術スタックのプロジェクトが見つかりません。
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Works;
