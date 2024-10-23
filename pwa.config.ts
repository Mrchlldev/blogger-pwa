import type { Config } from './types';

export default {
  version: '1.0',
  id: '/',
  name: 'Mrchllaja',
  shortName: 'Mrchllaja',
  description: 'Mrchllaja adalah blogger yang membahas seputar Coding, Programming, dan Game!',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Forum Diskusi',
      shortName: 'Forum Diskusi',
      description: 'Forum Diskusi',
      url: '/p/forum.html',
    },
    {
      name: 'Contact',
      shortName: 'Contact',
      description: 'Send Message To Admin',
      url: '/p/contact.html',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: true,
    oneSignalConfig: {
      appId: '340fbdf7-5c34-40df-a1af-347c4559a893',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://mrchllaja.blogspot.com',
} satisfies Config;
