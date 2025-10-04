import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="pt-32 pb-12 bg-gradient-to-br from-navy to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              О Сибирь Банке
            </h1>
            <p className="text-xl text-gray-300">
              Современный банк с вековыми традициями надежности
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="font-display text-4xl font-bold text-navy mb-6">
                  Наша миссия
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Сибирь Банк — это команда профессионалов, стремящихся сделать банковские услуги 
                  доступными, понятными и выгодными для каждого клиента.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Мы используем передовые технологии для создания удобных финансовых инструментов, 
                  которые помогают нашим клиентам достигать их целей.
                </p>
                <p className="text-lg text-gray-700">
                  Наш опыт и надежность — это гарантия безопасности ваших средств и уверенности в завтрашнем дне.
                </p>
              </div>
              <div>
                <img
                  src="/img/c919a05d-949b-4955-87fd-80753d8b298d.jpg"
                  alt="Bank interior"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-20">
              {[
                { value: '25+', label: 'Лет на рынке' },
                { value: '2M+', label: 'Довольных клиентов' },
                { value: '500+', label: 'Офисов по всей России' },
                { value: '24/7', label: 'Круглосуточная поддержка' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <p className="font-display text-4xl font-bold text-gold mb-2">{stat.value}</p>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-12 mb-20">
              <h2 className="font-display text-3xl font-bold text-navy mb-12 text-center">
                Наши преимущества
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: 'Shield',
                    title: 'Надежность',
                    description: 'Лицензия ЦБ РФ и государственное страхование вкладов'
                  },
                  {
                    icon: 'Zap',
                    title: 'Инновации',
                    description: 'Современные технологии и удобные цифровые сервисы'
                  },
                  {
                    icon: 'Users',
                    title: 'Клиентоориентированность',
                    description: 'Индивидуальный подход и персональный сервис'
                  },
                  {
                    icon: 'Award',
                    title: 'Премиальность',
                    description: 'Эксклюзивные предложения и программы лояльности'
                  },
                  {
                    icon: 'Globe',
                    title: 'Доступность',
                    description: 'Широкая сеть отделений и цифровые каналы обслуживания'
                  },
                  {
                    icon: 'TrendingUp',
                    title: 'Выгода',
                    description: 'Конкурентные ставки и минимальные комиссии'
                  }
                ].map((advantage, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon name={advantage.icon} size={32} className="text-white" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-navy mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600">
                      {advantage.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-navy to-slate-800 rounded-2xl p-12 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-3xl font-bold mb-6">
                  Лицензии и награды
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Сибирь Банк имеет полный пакет лицензий Центрального Банка Российской Федерации 
                  и является членом системы страхования вкладов.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    'Лицензия ЦБ РФ №1234',
                    'Член АСВ',
                    'Лучший банк 2024'
                  ].map((item, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <Icon name="Award" size={32} className="text-gold mx-auto mb-2" />
                      <p className="text-sm font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
