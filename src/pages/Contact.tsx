import { useState } from 'react';
import { trackEvent } from '../utils/analytics';
import { getContactData } from '../utils/dataLoader';

const Contact = () => {
  const contactData = getContactData();

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
    alert(contactData.formConfig.submitMessage);

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
          久米蒼輝へのご質問やお仕事のご相談がございましたら、お気軽にお問い合わせください。
        </p>
      </section>

      <section className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">連絡先</h2>
            <div className="space-y-4">
              {contactData.contacts.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span
                    className={`w-8 h-8 ${contact.bgColor} rounded-full flex items-center justify-center text-white text-sm flex-shrink-0`}
                  >
                    {contact.icon}
                  </span>
                  {contact.url !== '#' &&
                  contact.url !== 'mailto:soki.kume@example.com' ? (
                    <a
                      href={contact.url}
                      className="text-blue-500 hover:underline"
                      onClick={() =>
                        handleLinkClick(contact.platform.toLowerCase())
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact.platform}
                    </a>
                  ) : (
                    <span className="break-all">{contact.handle}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">
            {contactData.formConfig.title}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {contactData.formConfig.fields.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium mb-1"
                >
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleInputChange}
                    rows={field.rows}
                    required={field.required}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
                  ></textarea>
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleInputChange}
                    required={field.required}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors font-medium"
            >
              {contactData.formConfig.submitText}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
