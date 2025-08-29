const Home = () => {
  return (
    <div className="space-y-8 lg:space-y-12">
      <section className="text-center py-8 lg:py-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
          久米蒼輝 (KUME Soki)
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
          情報系エンジニアとして、技術力と創造性で価値のあるソリューションを提供します。
        </p>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="bg-white p-6 lg:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">技術力</h3>
          <p className="text-gray-600">最新の技術スタックを活用した開発経験</p>
        </div>
        <div className="bg-white p-6 lg:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">実績</h3>
          <p className="text-gray-600">実際のプロジェクトでの成果と学習</p>
        </div>
        <div className="bg-white p-6 lg:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
          <h3 className="text-xl font-semibold mb-2">成長意欲</h3>
          <p className="text-gray-600">継続的な学習と技術の探求</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
