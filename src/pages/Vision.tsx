const Vision = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-6">Vision & Values</h1>
        <p className="text-lg text-gray-600 mb-8">
          私の価値観、人生哲学、そして目指す未来についてお話しします。
        </p>

        {/* 人生のミッション */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">人生のミッション</h2>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
            <blockquote className="text-xl font-medium mb-4">
              "テクノロジーの力で、一人ひとりの『できない』を『できる』に変え、誰もが自分の可能性を最大限に発揮できる世界をつくること"
            </blockquote>
            <p className="text-blue-100">
              この想いが、私のすべての活動と学習の原動力となっています。
            </p>
          </div>
        </div>

        {/* 行動理念 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">行動理念</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-3">
              「やっておけばよかった」という後悔だけはしたくない
            </h3>
            <p className="text-gray-600 leading-relaxed">
              興味があることには積極的に挑戦し、将来の選択肢を最大化する生き方を実践しています。
              数学、電気、情報、ロボット、教育、デザイン、そして音響。興味の赴くままに飛び込んできました。
              「後悔しない」ための挑戦は、これからも続きます。
            </p>
          </div>
        </div>

        {/* 転換点となった体験 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">転換点となった体験</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* 高校時代の体験 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">
                高校時代の友人への数学指導
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                友人が「全然わからない」と頭を抱えていた問題を、私の説明で「そういうことか！」と顔を輝かせる瞬間。
                その「できない」が「できる」に変わる場面に立ち会うことに大きな喜びを感じ、
                人の可能性を広げることへの情熱が芽生えました。
              </p>
            </div>

            {/* 介護等体験 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">
                介護等体験での価値観変化
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                障がいのある方々との体験活動で、当初は「自分とは違う特別な存在」だと感じていました。
                しかし、彼らと過ごす中で気づいたのは、彼らは「できない」のではなく、
                「『できる』に至るまでのプロセスが少し違うだけ、少し長いだけ」だということでした。
              </p>
            </div>
          </div>
        </div>

        {/* 将来ビジョン */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">将来ビジョン</h2>

          {/* 特に注力したい領域 */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              特に注力したい領域: 音楽のバリアフリー
            </h3>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
              <blockquote className="text-lg font-medium text-gray-800 mb-4">
                "音楽のように感性や創造性が求められる分野で、楽譜が読めない、楽器が触れない、歌が歌えない、音感が無い、そんな人でも音楽が作れるようにテクノロジーで支えていきたい"
              </blockquote>
              <p className="text-gray-600">
                技術の力で音楽創作の障壁を取り払い、最も創造から遠い場所にいるかもしれない人々に、
                音楽創作の喜びを届けたいという強い想いがあります。
              </p>
            </div>
          </div>

          {/* 実現へのアプローチ */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold mb-3">
                短期的取り組み（学生時代）
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>音響信号処理技術の習得（MATLAB活用）</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>AI・機械学習技術の深化</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>アクセシビリティ技術の研究</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold mb-3">
                中期的目標（社会人初期）
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>音響技術×AI×アクセシビリティの専門性確立</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>実際の音楽バリアフリーサービスの開発・実証</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>障がい当事者とのコラボレーション経験蓄積</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-lg font-semibold mb-3">
                長期的ビジョン（キャリア後期）
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>音楽バリアフリー技術開発のリーディングエンジニア</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>誰もが音楽創作を楽しめるプラットフォームの構築</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>「できない」を「できる」に変える技術の他分野展開</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 問いかけとメッセージ */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">社会への問いかけ</h2>
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 text-center">
            <blockquote className="text-lg font-medium text-gray-800 mb-4">
              "あなたが「できない」と諦めていることは、本当に越えられない壁でしょうか？"
            </blockquote>
            <p className="text-gray-600">
              もしかしたらそれは、少し見方を変え、テクノロジーの力を借りるだけで、
              軽やかに越えられるハードルかもしれません。
            </p>
          </div>
        </div>

        {/* 趣味・特技 */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">趣味・特技</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">
                Beatbox（4年の経験）
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                即興ビート組み立て・ハミングメロディとの組み合わせが可能。
                ドラム系、ベース系、効果音、特殊技など多様な音源を習得。
              </p>
              <p className="text-gray-500 text-xs">
                ローランドRCシリーズを用いたパフォーマンスにも挑戦意欲
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">数学探究</h3>
              <p className="text-gray-600 text-sm mb-3">
                大学数学関連科目・講座を全履修。EMaT全分野で偏差値60超達成。
                カプレカ数などの数学的性質研究や日常数値の法則性探索を楽しんでいます。
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">立体パズル</h3>
              <p className="text-gray-600 text-sm">
                3×3×3ルービックキューブを2分以内で完成。
                10種類以上のパズルを所有し、説明書なしで解法を導出。
                パズル構造の観察・回転法則性の発見・完成手順の論理的組み立てが得意。
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">PC作業効率化</h3>
              <p className="text-gray-600 text-sm">
                「マウス不要の操作」をコンセプトに、Chrome拡張機能開発や
                キーボードショートカット活用を極限まで追求。
                現状の非効率を技術で解決する過程自体を楽しんでいます。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
