import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Support = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqCategories = [
    {
      category: 'Виртуальные карты',
      questions: [
        {
          q: 'Как создать виртуальную карту?',
          a: 'Войдите в раздел "Карты", нажмите кнопку "Создать виртуальную карту", укажите название и лимит. Карта будет создана мгновенно.'
        },
        {
          q: 'Можно ли установить лимит на виртуальную карту?',
          a: 'Да, при создании карты вы можете установить любой месячный лимит. Лимит можно изменить в любое время в настройках карты.'
        },
        {
          q: 'Как заблокировать или удалить виртуальную карту?',
          a: 'В разделе "Карты" выберите нужную карту и нажмите кнопку "Заблокировать" или "Удалить". Заблокированную карту можно активировать обратно.'
        }
      ]
    },
    {
      category: 'Платежи и переводы',
      questions: [
        {
          q: 'Есть ли комиссия за переводы?',
          a: 'Переводы по номеру телефона в любой банк России абсолютно бесплатны без ограничений по сумме.'
        },
        {
          q: 'Как быстро зачисляются переводы?',
          a: 'Переводы между картами Сибирь Банка зачисляются мгновенно. Переводы в другие банки — в течение нескольких секунд.'
        },
        {
          q: 'Можно ли отменить платеж?',
          a: 'Выполненный платеж отменить нельзя. Для возврата средств необходимо обратиться к получателю.'
        }
      ]
    },
    {
      category: 'Кредиты и вклады',
      questions: [
        {
          q: 'Какие документы нужны для кредита?',
          a: 'Для оформления кредита необходим только паспорт РФ. Решение по заявке принимается в течение 15 минут.'
        },
        {
          q: 'Можно ли досрочно погасить кредит?',
          a: 'Да, вы можете досрочно погасить кредит полностью или частично без комиссий и штрафов.'
        },
        {
          q: 'Как открыть вклад онлайн?',
          a: 'Выберите подходящий вклад на странице "Вклады", заполните анкету и подпишите договор электронной подписью.'
        }
      ]
    },
    {
      category: 'Безопасность',
      questions: [
        {
          q: 'Как защищены мои данные?',
          a: 'Мы используем современные технологии шифрования и многоуровневую защиту. Все данные хранятся на защищенных серверах.'
        },
        {
          q: 'Что делать при утере карты?',
          a: 'Немедленно заблокируйте карту через приложение или позвоните на горячую линию 8 800 555-35-35.'
        },
        {
          q: 'Застрахованы ли вклады?',
          a: 'Да, все вклады застрахованы государством на сумму до 1 400 000 рублей через систему страхования вкладов.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <section className="pt-32 pb-12 bg-gradient-to-br from-navy to-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Центр поддержки
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Ответы на популярные вопросы и круглосуточная помощь
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Поиск по вопросам..."
                  className="w-full px-6 py-4 rounded-lg outline-none pr-12"
                />
                <Icon name="Search" size={24} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="font-display text-3xl font-bold text-navy mb-8 text-center">
              Способы связи
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: 'Phone',
                  title: 'Телефон',
                  description: '8 800 555-35-35',
                  subtitle: 'Круглосуточно'
                },
                {
                  icon: 'MessageCircle',
                  title: 'Онлайн-чат',
                  description: 'В приложении',
                  subtitle: 'Ответ за 2 минуты'
                },
                {
                  icon: 'Mail',
                  title: 'Email',
                  description: 'support@sibirbank.ru',
                  subtitle: 'Ответ в течение часа'
                }
              ].map((contact, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
                  <div className="w-14 h-14 gradient-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={contact.icon} size={28} className="text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-navy mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-navy font-semibold mb-1">{contact.description}</p>
                  <p className="text-sm text-gray-600">{contact.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-navy mb-8 text-center">
              Часто задаваемые вопросы
            </h2>
            <div className="space-y-6">
              {faqCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h3 className="font-display text-xl font-bold text-navy mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 gradient-gold rounded-lg flex items-center justify-center">
                      <Icon name="HelpCircle" size={18} className="text-white" />
                    </div>
                    {category.category}
                  </h3>
                  <div className="space-y-3">
                    {category.questions.map((faq, faqIndex) => {
                      const uniqueIndex = catIndex * 100 + faqIndex;
                      const isOpen = openFaq === uniqueIndex;
                      return (
                        <div key={faqIndex} className="bg-white rounded-xl shadow-sm overflow-hidden">
                          <button
                            onClick={() => setOpenFaq(isOpen ? null : uniqueIndex)}
                            className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <span className="font-semibold text-left text-navy">{faq.q}</span>
                            <Icon
                              name={isOpen ? 'ChevronUp' : 'ChevronDown'}
                              size={20}
                              className="text-gold flex-shrink-0 ml-4"
                            />
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-4 text-gray-700">
                              {faq.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-navy to-slate-800 rounded-2xl p-12 text-center text-white">
              <Icon name="Headphones" size={48} className="text-gold mx-auto mb-4" />
              <h2 className="font-display text-3xl font-bold mb-4">
                Не нашли ответ?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Наша служба поддержки работает круглосуточно и всегда готова помочь
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:88005553535"
                  className="px-8 py-4 gradient-gold text-navy rounded-lg font-semibold hover:shadow-xl transition-all"
                >
                  Позвонить сейчас
                </a>
                <a
                  href="/contacts"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-all"
                >
                  Написать нам
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;
