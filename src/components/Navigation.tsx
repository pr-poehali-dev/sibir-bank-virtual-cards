import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Карты', path: '/cards' },
    { name: 'Платежи', path: '/payments' },
    { name: 'Кредиты', path: '/loans' },
    { name: 'Вклады', path: '/deposits' },
    { name: 'О банке', path: '/about' },
    { name: 'Контакты', path: '/contacts' },
    { name: 'Поддержка', path: '/support' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-gold rounded-lg flex items-center justify-center">
              <Icon name="Building2" size={24} className="text-white" />
            </div>
            <span className="font-display text-2xl font-bold text-navy">Сибирь Банк</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-gray-700 hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
              Войти
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
          >
            <Icon name={isOpen ? 'X' : 'Menu'} size={24} className="text-navy" />
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-gray-700 hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full mt-4 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium">
              Войти
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
