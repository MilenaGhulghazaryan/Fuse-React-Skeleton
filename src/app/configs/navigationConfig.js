import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'slider',
    title: 'Սլայդեր',
    translate: 'Սլայդեր',
    type: 'item',
    icon: 'heroicons-outline:video',
    url: '/pages/slider',
  },
  {
    id: 'component',
    title: 'Գործընկերներ',
    translate: 'Գործընկերներ',
    type: 'item',
    icon: 'heroicons-outline:languages',
    url: '/pages/partners',
  }
];

export default navigationConfig;


