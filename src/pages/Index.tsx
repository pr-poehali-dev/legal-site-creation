import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      title: "Судебное представительство",
      description: "Профессиональная защита ваших интересов в судах всех инстанций",
      icon: "Gavel"
    },
    {
      title: "Арбитражные споры",
      description: "Разрешение коммерческих конфликтов с максимальной эффективностью",
      icon: "Scale"
    },
    {
      title: "Правовой анализ",
      description: "Экспертная оценка рисков и перспектив дела",
      icon: "FileSearch"
    },
    {
      title: "Корпоративное право",
      description: "Юридическое сопровождение бизнеса на всех этапах",
      icon: "Building"
    }
  ];

  const team = [
    {
      name: "Анна Владимирова",
      position: "Управляющий партнер",
      experience: "15+ лет опыта",
      specialization: "Арбитражные споры"
    },
    {
      name: "Дмитрий Сергеев", 
      position: "Ведущий юрист",
      experience: "12+ лет опыта",
      specialization: "Судебное представительство"
    },
    {
      name: "Мария Петрова",
      position: "Старший юрист", 
      experience: "8+ лет опыта",
      specialization: "Корпоративное право"
    }
  ];

  const cases = [
    {
      title: "Корпоративный спор №1",
      result: "Выиграно 50 млн ₽",
      description: "Успешная защита интересов клиента в сложном корпоративном споре"
    },
    {
      title: "Арбитражное дело №2", 
      result: "Сэкономлено 25 млн ₽",
      description: "Эффективное урегулирование спора на досудебной стадии"
    },
    {
      title: "Налоговый спор №3",
      result: "Отменены доначисления",
      description: "Полная отмена необоснованных налоговых доначислений"
    }
  ];

  const blogPosts = [
    {
      title: "Новые изменения в арбитражном процессе 2024",
      excerpt: "Анализируем ключевые нововведения в АПК РФ и их влияние на практику ведения арбитражных споров",
      date: "15 янв 2024",
      readTime: "5 мин",
      category: "Арбитражное право",
      image: "/img/24c2a454-00bc-46c2-836c-c224d9b7ad61.jpg"
    },
    {
      title: "Корпоративные споры: стратегии защиты",
      excerpt: "Рассматриваем эффективные подходы к разрешению внутрикорпоративных конфликтов и защите прав акционеров",
      date: "8 янв 2024", 
      readTime: "7 мин",
      category: "Корпоративное право",
      image: "/img/a5e2831a-b33f-4061-903b-1e2eca954c42.jpg"
    },
    {
      title: "Судебная практика по налоговым спорам",
      excerpt: "Обзор последних решений ВС РФ по вопросам налогового планирования и доначислений",
      date: "3 янв 2024",
      readTime: "6 мин", 
      category: "Налоговое право",
      image: "/img/4b6b91cc-edd3-4f95-b82c-13639776edf5.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon name="Scale" className="h-8 w-8 text-primary mr-2" />
              <span className="font-montserrat font-bold text-xl text-gray-900">LEGAL COMPANY</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#team" className="text-gray-700 hover:text-primary transition-colors">Команда</a>
              <a href="#cases" className="text-gray-700 hover:text-primary transition-colors">Кейсы</a>
              <a href="#blog" className="text-gray-700 hover:text-primary transition-colors">Блог</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-white font-medium">
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-montserrat font-bold text-4xl lg:text-6xl text-gray-900 leading-tight mb-6">
                Экспертная
                <span className="text-primary"> правовая</span>
                <br />защита
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Специализируемся на судебном представительстве и арбитражных спорах. 
                Защищаем интересы клиентов с гарантией результата.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-3">
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Бесплатная консультация
                </Button>
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 px-8 py-3">
                  <Icon name="FileText" className="mr-2 h-5 w-5" />
                  Наши кейсы
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="font-montserrat font-bold text-3xl text-primary mb-1">500+</div>
                  <div className="text-sm text-gray-600">Выигранных дел</div>
                </div>
                <div className="text-center">
                  <div className="font-montserrat font-bold text-3xl text-primary mb-1">15</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="font-montserrat font-bold text-3xl text-primary mb-1">98%</div>
                  <div className="text-sm text-gray-600">Успешных дел</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-gold p-8 rounded-2xl shadow-2xl">
                <img 
                  src="/img/a4e9510d-a94a-47b7-b730-10fbbb589787.jpg" 
                  alt="Команда юристов" 
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold text-white p-6 rounded-xl shadow-lg">
                <Icon name="Trophy" className="h-8 w-8 mb-2" />
                <div className="font-montserrat font-bold text-sm">Лучшая</div>
                <div className="text-sm">юр. компания</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Предоставляем полный спектр юридических услуг для защиты ваших интересов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-montserrat font-semibold text-xl text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Опытные юристы с безупречной репутацией и глубокими знаниями права
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-primary to-gold w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Icon name="User" className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-1">{member.experience}</p>
                  <p className="text-gray-500 text-sm">{member.specialization}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Успешные кейсы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Примеры наших побед в самых сложных юридических спорах
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-montserrat font-semibold text-lg text-gray-900">
                      {caseItem.title}
                    </CardTitle>
                    <Icon name="CheckCircle" className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{caseItem.result}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{caseItem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-gray-900 mb-4">
              Юридический блог
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Экспертные статьи, анализ судебной практики и актуальные изменения в законодательстве
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md overflow-hidden">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Icon name="Calendar" className="h-4 w-4 mr-2" />
                    {post.date}
                    <Icon name="Clock" className="h-4 w-4 ml-4 mr-2" />
                    {post.readTime}
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                    <Icon name="ArrowRight" className="mr-2 h-4 w-4" />
                    Читать полностью
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8">
              <Icon name="BookOpen" className="mr-2 h-5 w-5" />
              Все статьи блога
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat font-bold text-3xl lg:text-4xl text-white mb-6">
                Готовы защитить ваши интересы
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Получите бесплатную консультацию и узнайте, как мы можем помочь в вашей ситуации
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" className="h-6 w-6 text-gold mr-4" />
                  <span className="text-white">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="h-6 w-6 text-gold mr-4" />
                  <span className="text-white">info@legalcompany.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="h-6 w-6 text-gold mr-4" />
                  <span className="text-white">Москва, ул. Тверская, д. 10</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="font-montserrat font-semibold text-2xl text-gray-900 mb-6">
                Бесплатная консультация
              </h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Описание вашей ситуации" 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none resize-none"
                  ></textarea>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3">
                  Получить консультацию
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Scale" className="h-8 w-8 text-gold mr-2" />
                <span className="font-montserrat font-bold text-xl text-white">LEGAL COMPANY</span>
              </div>
              <p className="text-gray-400">
                Профессиональная юридическая защита с гарантией результата
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Услуги</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gold transition-colors">Судебное представительство</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Арбитражные споры</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Правовой анализ</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Корпоративное право</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Компания</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gold transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Кейсы</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Контакты</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Icon name="Phone" className="h-4 w-4 mr-2 text-gold" />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" className="h-4 w-4 mr-2 text-gold" />
                  info@legalcompany.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" className="h-4 w-4 mr-2 text-gold" />
                  Москва, ул. Тверская, 10
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; 2024 Legal Company. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;