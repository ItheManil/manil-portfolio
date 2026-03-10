import nodejsLogo from '@/assets/nodejs-logo.svg';
import mysqlLogo from '@/assets/mysql-logo.svg';
import expressLogo from '@/assets/express-logo.svg';
import tailwindLogo from '@/assets/tailwindcss-logo.svg';
import postgresqlLogo from '@/assets/postgresql-logo.svg';
import reactLogo from '@/assets/react-logo.svg';

export const techIconMap: Record<string, { icon: string; color: string; invert?: boolean }> = {
  'React.js': { icon: reactLogo, color: '190 90% 50%' },
  'Node.js': { icon: nodejsLogo, color: '120 40% 45%' },
  'Express.js': { icon: expressLogo, color: '0 0% 70%', invert: true },
  'JavaScript': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '50 90% 50%' },
  'HTML5': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '15 80% 55%' },
  'CSS3': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '210 80% 55%' },
  'Tailwind CSS': { icon: tailwindLogo, color: '190 80% 50%' },
  'PHP': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', color: '240 30% 55%' },
  'MySQL': { icon: mysqlLogo, color: '200 60% 45%' },
  'PostgreSQL': { icon: postgresqlLogo, color: '210 50% 50%' },
  'TypeScript': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '210 70% 50%' },
  'Git': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '10 80% 50%' },
  'GitHub': { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', color: '0 0% 70%', invert: true },
};
