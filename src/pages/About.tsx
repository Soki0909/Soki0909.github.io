const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">プロフィール</h2>
            <p className="text-gray-600 leading-relaxed">
              情報系を専攻している学生です。現代的な技術スタックを用いたWebアプリケーション開発に興味を持ち、
              継続的な学習を通じて技術力の向上に取り組んでいます。
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">技術スキル</h2>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>TypeScript / JavaScript</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>React / Next.js</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
