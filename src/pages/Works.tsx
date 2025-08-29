import { Link } from 'react-router-dom';

const Works = () => {
  // TODO: 実際のプロジェクトデータは後で外部ファイルから読み込む予定
  const projects = [
    {
      id: 1,
      title: 'ポートフォリオサイト',
      description:
        'React + TypeScript + Tailwind CSSで構築したレスポンシブなポートフォリオサイト',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      image: 'https://via.placeholder.com/300x200',
      github: '#',
      demo: '#',
    },
    // 追加のプロジェクトは後で追加予定
  ];

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-6">Works</h1>
        <p className="text-gray-600 mb-8">
          これまでに取り組んだプロジェクトの一覧です。
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
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
      </section>
    </div>
  );
};

export default Works;
