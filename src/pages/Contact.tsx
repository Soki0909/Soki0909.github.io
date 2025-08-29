import { useState } from 'react';
import { trackEvent } from '../utils/analytics';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // フォーム送信イベントをトラッキング
    trackEvent('contact_form_submit', {
      form_name: 'contact_form',
      has_message: formData.message.length > 0,
    });

    // 実際のフォーム送信処理（今回は仮実装）
    alert(
      'お問い合わせありがとうございます。（デモ版のため実際には送信されません）'
    );

    // フォームをリセット
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleLinkClick = (linkType: string) => {
    trackEvent('external_link_click', {
      link_type: linkType,
      page: 'contact',
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-6">Contact</h1>
        <p className="text-gray-600 mb-8">
          ご質問やお仕事のご相談がございましたら、お気軽にお問い合わせください。
        </p>
      </section>

      <section className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">連絡先</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                  @
                </span>
                <span className="break-all">your.email@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                  G
                </span>
                <a
                  href="https://github.com/Soki0909"
                  className="text-blue-500 hover:underline"
                  onClick={() => handleLinkClick('github')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                  in
                </span>
                <a
                  href="#"
                  className="text-blue-500 hover:underline"
                  onClick={() => handleLinkClick('linkedin')}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">お問い合わせフォーム</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                お名前
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                メッセージ
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors font-medium"
            >
              送信
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
