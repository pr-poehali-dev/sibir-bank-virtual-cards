import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="pt-32 pb-12 bg-gradient-to-br from-navy to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Контакты
            </h1>
            <p className="text-xl text-gray-300">
              Мы всегда на связи и готовы помочь
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: 'Phone',
                  title: 'Телефон',
                  lines: ['8 800 555-35-35', 'Бесплатно по России', 'Круглосуточно']
                },
                {
                  icon: 'Mail',
                  title: 'Email',
                  lines: ['info@sibirbank.ru', 'support@sibirbank.ru', 'Ответим в течение часа']
                },
                {
                  icon: 'MapPin',
                  title: 'Адрес',
                  lines: ['Москва, Красная площадь, 1', 'Пн-Пт: 9:00 - 21:00', 'Сб-Вс: 10:00 - 18:00']
                }
              ].map((contact, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={contact.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy mb-4">
                    {contact.title}
                  </h3>
                  {contact.lines.map((line, i) => (
                    <p key={i} className={`${i === 0 ? 'text-lg font-semibold text-navy' : 'text-gray-600'} ${i > 0 ? 'mt-1' : ''}`}>
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
              <h2 className="font-display text-3xl font-bold text-navy mb-8 text-center">
                Написать нам
              </h2>
              <form className="max-w-2xl mx-auto space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      placeholder="Иван Иванов"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="ivan@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тема обращения
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none">
                    <option>Вопрос по карте</option>
                    <option>Вопрос по кредиту</option>
                    <option>Вопрос по вкладу</option>
                    <option>Техническая поддержка</option>
                    <option>Другое</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Опишите ваш вопрос или проблему..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 gradient-gold text-navy rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>

            <div className="bg-gradient-to-br from-navy to-slate-800 rounded-2xl p-12 text-white">
              <h2 className="font-display text-3xl font-bold mb-8 text-center">
                Наши офисы
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    city: 'Москва',
                    address: 'Красная площадь, 1',
                    phone: '+7 (495) 123-45-67',
                    hours: 'Пн-Пт: 9:00 - 21:00'
                  },
                  {
                    city: 'Санкт-Петербург',
                    address: 'Невский проспект, 1',
                    phone: '+7 (812) 123-45-67',
                    hours: 'Пн-Пт: 9:00 - 21:00'
                  },
                  {
                    city: 'Новосибирск',
                    address: 'пр. Карла Маркса, 1',
                    phone: '+7 (383) 123-45-67',
                    hours: 'Пн-Пт: 9:00 - 21:00'
                  },
                  {
                    city: 'Екатеринбург',
                    address: 'ул. Ленина, 1',
                    phone: '+7 (343) 123-45-67',
                    hours: 'Пн-Пт: 9:00 - 21:00'
                  }
                ].map((office, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="font-display text-xl font-bold mb-4 text-gold">
                      {office.city}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-start gap-2">
                        <Icon name="MapPin" size={16} className="text-gold mt-0.5" />
                        {office.address}
                      </p>
                      <p className="flex items-start gap-2">
                        <Icon name="Phone" size={16} className="text-gold mt-0.5" />
                        {office.phone}
                      </p>
                      <p className="flex items-start gap-2">
                        <Icon name="Clock" size={16} className="text-gold mt-0.5" />
                        {office.hours}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
