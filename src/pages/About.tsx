const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">プロフィール</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">名前</h3>
                <p className="text-gray-600">
                  久米蒼輝 (くめ そうき)
                  <br />
                  KUME Soki
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">専攻・学習分野</h3>
                <p className="text-gray-600 leading-relaxed">
                  情報系を専攻している学生です。Webアプリケーション開発から、Android開発、
                  リアルタイム通信技術まで幅広い分野に興味を持ち、継続的な学習を通じて技術力の向上に取り組んでいます。
                  特に、チーム開発でのリーダーシップを発揮し、ハッカソンでの最優秀賞受賞などの実績を積んでいます。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">主な実績</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">
                      Hackit 2025ハッカソン 最優秀賞受賞
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">
                      チーム開発プロジェクトでのリーダーシップ経験
                    </span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">
                      WebRTC技術を活用したリアルタイム通信システムの実装
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">技術スキル</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-medium mb-2">フロントエンド</h3>
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
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">モバイル開発</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Kotlin / Android</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Jetpack Compose</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">リアルタイム通信</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>WebRTC / SkyWay</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    <span>Firebase / Firestore</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">開発ツール・その他</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span>Git / GitHub</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span>Vite / Modern Build Tools</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span>チーム開発・プロジェクト管理</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
