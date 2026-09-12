export const profile = {
  name: 'Samuel Santana',
  role: 'Desenvolvedor Full-Stack e Automações',
  primaryRole: 'Desenvolvedor Full-Stack',
  shortRole: 'Desenvolvedor de software',
  education: 'Formado em Análise e Desenvolvimento de Sistemas',
  email: 'samuelsantanadasilva8@gmail.com',
  phoneE164: '5561991076831',
  photoUrl: 'https://horizons-cdn.hostinger.com/30b03925-8471-4619-bbee-4151bd9e49fc/foto-pessoal-GWXXh.jpg',
  links: {
    github: 'https://github.com/samuelsantana-dev',
    linkedin: 'https://www.linkedin.com/in/samuelsantana-dev',
    blog: 'https://tech.mundosucesso.com/',
    portfolio: 'https://samuel-fullstack.mundosucesso.com/',
    general: 'https://samuelsantana-dev.mundosucesso.com/',
    instagram: 'https://www.instagram.com/samuel.desenvolvedor/',
    youtube: 'https://www.youtube.com/@Samuel.desenvolvedorjs',
  },
};

export const getWhatsAppUrl = (message) =>
  `https://wa.me/${profile.phoneE164}?text=${encodeURIComponent(message)}`;
