import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-navy text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 gradient-gold rounded-lg flex items-center justify-center">
                <Icon name="Building2" size={24} className="text-white" />
              </div>
              <span className="font-display text-2xl font-bold text-white">Сибирь Банк</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Премиальные банковские решения для вашего финансового благополучия
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold transition-colors">
                <Icon name="Phone" size={18} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold transition-colors">
                <Icon name="Mail" size={18} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold transition-colors">
                <Icon name="MapPin" size={18} className="text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">Продукты</h3>
            <ul className="space-y-3">
              <li><Link to="/cards" className="text-sm hover:text-gold transition-colors">Карты</Link></li>
              <li><Link to="/loans" className="text-sm hover:text-gold transition-colors">Кредиты</Link></li>
              <li><Link to="/deposits" className="text-sm hover:text-gold transition-colors">Вклады</Link></li>
              <li><Link to="/payments" className="text-sm hover:text-gold transition-colors">Платежи</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">Информация</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm hover:text-gold transition-colors">О банке</Link></li>
              <li><Link to="/contacts" className="text-sm hover:text-gold transition-colors">Контакты</Link></li>
              <li><Link to="/support" className="text-sm hover:text-gold transition-colors">Поддержка</Link></li>
              <li><a href="#" className="text-sm hover:text-gold transition-colors">Новости</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="Phone" size={18} className="text-gold mt-0.5" />
                <span>8 800 555-35-35</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Mail" size={18} className="text-gold mt-0.5" />
                <span>info@sibirbank.ru</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={18} className="text-gold mt-0.5" />
                <span>Москва, Красная площадь, 1</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2024 Сибирь Банк. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
