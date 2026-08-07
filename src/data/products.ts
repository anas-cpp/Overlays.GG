export type ProductCategory =
  | 'stream-overlays'
  | 'twitch-kick-packs'
  | 'animated-overlays'
  | 'gaming-graphics'
  | 'digital-assets';

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: string;
  priceValue: number;
  category: ProductCategory;
  description: string;
  longDescription: string;
  features: string[];
  images: string[];
  badge?: string;
  featured?: boolean;
}

export const CATEGORIES: { id: ProductCategory; label: string; icon: string }[] = [
  { id: 'stream-overlays', label: 'Stream Overlays', icon: '🎮' },
  { id: 'twitch-kick-packs', label: 'Twitch / Kick Packs', icon: '📺' },
  { id: 'animated-overlays', label: 'Animated Overlays', icon: '✨' },
  { id: 'gaming-graphics', label: 'Gaming Graphics', icon: '🎯' },
  { id: 'digital-assets', label: 'Digital Assets', icon: '📦' },
];

const gradient = (from: string, to: string) =>
  `linear-gradient(135deg, ${from} 0%, ${to} 100%)`;

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Neon Cyber Stream Pack',
    slug: 'neon-cyber-stream-pack',
    price: '$29.99',
    priceValue: 29.99,
    category: 'stream-overlays',
    description: 'Complete cyberpunk-themed stream overlay bundle with alerts, panels, and screens.',
    longDescription:
      'Transform your stream into a neon-lit cyberpunk arena. This premium pack includes starting soon screens, BRB overlays, alert animations, webcam frames, and chat boxes — all optimized for OBS and Streamlabs.',
    features: [
      '1080p & 4K resolution files',
      'OBS & Streamlabs ready',
      'Animated alerts included',
      'Lifetime free updates',
      'Commercial use license',
    ],
    images: [
      gradient('#1a0a2e', '#ff006e'),
      gradient('#0f0c29', '#7b2ff7'),
      gradient('#240046', '#e040fb'),
    ],
    badge: 'Best Seller',
    featured: true,
  },
  {
    id: '2',
    name: 'Twitch Pro Starter Kit',
    slug: 'twitch-pro-starter-kit',
    price: '$19.99',
    priceValue: 19.99,
    category: 'twitch-kick-packs',
    description: 'Everything you need to launch a professional Twitch channel from day one.',
    longDescription:
      'Kick-start your streaming career with panels, offline screens, profile banners, and emote templates. Designed specifically for Twitch creators who want a polished, cohesive brand.',
    features: [
      'Profile & offline banners',
      'Panel templates (PSD + PNG)',
      'Emote base templates',
      'Brand color guide included',
      'Easy customization',
    ],
    images: [
      gradient('#0d0221', '#6441a5'),
      gradient('#1a0533', '#9146ff'),
      gradient('#2d1b69', '#bf94ff'),
    ],
    badge: 'Popular',
    featured: true,
  },
  {
    id: '3',
    name: 'Kick Streamer Ultimate Pack',
    slug: 'kick-streamer-ultimate-pack',
    price: '$24.99',
    priceValue: 24.99,
    category: 'twitch-kick-packs',
    description: 'Premium overlay collection tailored for Kick streamers with bold green accents.',
    longDescription:
      'Stand out on Kick with this exclusive overlay suite. Features animated transitions, subscriber alerts, and a full set of stream screens designed around Kick\'s vibrant aesthetic.',
    features: [
      'Kick-branded color scheme',
      'Animated scene transitions',
      'Subscriber alert animations',
      'Webcam & chat overlays',
      'Source files included',
    ],
    images: [
      gradient('#0a1f0a', '#53fc18'),
      gradient('#0d2818', '#1db954'),
      gradient('#051a05', '#39ff14'),
    ],
    featured: true,
  },
  {
    id: '4',
    name: 'Animated Alert Master Pack',
    slug: 'animated-alert-master-pack',
    price: '$34.99',
    priceValue: 34.99,
    category: 'animated-overlays',
    description: '50+ premium animated alerts for followers, subs, donations, and raids.',
    longDescription:
      'Make every notification unforgettable. This collection features hand-crafted animated alerts with sound design suggestions, customizable text layers, and seamless loop animations.',
    features: [
      '50+ unique alert animations',
      'Follow, sub, donate, raid alerts',
      'Transparent WebM exports',
      'Sound effect recommendations',
      'Modular & stackable layers',
    ],
    images: [
      gradient('#1a0000', '#ff0055'),
      gradient('#2d0a0a', '#ff3366'),
      gradient('#0a0014', '#cc00ff'),
    ],
    badge: 'New',
    featured: true,
  },
  {
    id: '5',
    name: 'Valorant HUD Overlay Set',
    slug: 'valorant-hud-overlay-set',
    price: '$14.99',
    priceValue: 14.99,
    category: 'gaming-graphics',
    description: 'Sleek Valorant-inspired HUD overlays for competitive gaming streams.',
    longDescription:
      'Level up your Valorant streams with tactical HUD elements, kill feed overlays, round timers, and agent select screens — all styled after the iconic Valorant UI.',
    features: [
      'Kill feed overlay',
      'Round timer widget',
      'Agent select screen',
      'Rank display overlay',
      'Transparent PNG layers',
    ],
    images: [
      gradient('#0f1923', '#ff4655'),
      gradient('#1a1a2e', '#e94560'),
      gradient('#16213e', '#ff6b6b'),
    ],
  },
  {
    id: '6',
    name: 'Fortnite Stream Graphics Bundle',
    slug: 'fortnite-stream-graphics-bundle',
    price: '$17.99',
    priceValue: 17.99,
    category: 'gaming-graphics',
    description: 'Vibrant Fortnite-themed stream graphics with victory royale animations.',
    longDescription:
      'Capture the energy of Fortnite with colorful overlays, victory animations, storm circle widgets, and elimination counters designed for battle royale content creators.',
    features: [
      'Victory royale animation',
      'Elimination counter',
      'Storm circle widget',
      'Lobby screen overlay',
      'Bright, eye-catching design',
    ],
    images: [
      gradient('#0a0a2e', '#7b68ee'),
      gradient('#1a0a3e', '#00d4ff'),
      gradient('#0d1b2a', '#ffd700'),
    ],
  },
  {
    id: '7',
    name: 'Minimal Dark Overlay Pack',
    slug: 'minimal-dark-overlay-pack',
    price: '$12.99',
    priceValue: 12.99,
    category: 'stream-overlays',
    description: 'Clean, minimal dark overlays for a sophisticated stream aesthetic.',
    longDescription:
      'Less is more. This minimalist pack offers subtle, elegant overlays that keep the focus on your gameplay while maintaining a premium, professional look.',
    features: [
      'Ultra-clean design',
      'Low CPU usage assets',
      'Subtle animations',
      'Multiple color variants',
      'Perfect for any game',
    ],
    images: [
      gradient('#0a0a0a', '#1a1a2e'),
      gradient('#111111', '#2d2d44'),
      gradient('#0d0d0d', '#333355'),
    ],
  },
  {
    id: '8',
    name: 'RGB Gaming Asset Collection',
    slug: 'rgb-gaming-asset-collection',
    price: '$39.99',
    priceValue: 39.99,
    category: 'digital-assets',
    description: 'Massive collection of 200+ RGB gaming icons, badges, and UI elements.',
    longDescription:
      'The ultimate digital asset library for streamers and content creators. Includes icons, badges, dividers, frames, lower thirds, and social media templates — all with stunning RGB glow effects.',
    features: [
      '200+ individual assets',
      'PNG & SVG formats',
      'Organized folder structure',
      'RGB glow variants',
      'Commercial license included',
    ],
    images: [
      gradient('#0a0014', '#ff00ff'),
      gradient('#001428', '#00ffff'),
      gradient('#140014', '#ff0080'),
    ],
    badge: 'Premium',
  },
  {
    id: '9',
    name: 'Horror Stream Overlay Pack',
    slug: 'horror-stream-overlay-pack',
    price: '$22.99',
    priceValue: 22.99,
    category: 'animated-overlays',
    description: 'Spine-chilling horror-themed overlays perfect for scary game streams.',
    longDescription:
      'Create the perfect atmosphere for horror gaming with blood-drip animations, flickering effects, creepy alert sounds suggestions, and dark atmospheric panels.',
    features: [
      'Blood drip animations',
      'Flickering light effects',
      'Horror-themed alerts',
      'Dark atmospheric panels',
      'Perfect for Halloween streams',
    ],
    images: [
      gradient('#0a0000', '#8b0000'),
      gradient('#1a0505', '#ff0000'),
      gradient('#0d0000', '#660000'),
    ],
  },
  {
    id: '10',
    name: 'Esports Broadcast Package',
    slug: 'esports-broadcast-package',
    price: '$49.99',
    priceValue: 49.99,
    category: 'digital-assets',
    description: 'Professional esports broadcast graphics for tournaments and competitive events.',
    longDescription:
      'Run tournaments like the pros. Includes scoreboards, team intros, map overlays, player stats widgets, and break screens — everything needed for a broadcast-quality esports production.',
    features: [
      'Live scoreboard overlay',
      'Team intro animations',
      'Map & pick/ban screens',
      'Player stat widgets',
      'Break & intermission screens',
    ],
    images: [
      gradient('#0a1628', '#0066ff'),
      gradient('#0d1b2a', '#00aaff'),
      gradient('#001a33', '#0044cc'),
    ],
    badge: 'Pro',
  },
  {
    id: '11',
    name: 'Kawaii Stream Pack',
    slug: 'kawaii-stream-pack',
    price: '$18.99',
    priceValue: 18.99,
    category: 'stream-overlays',
    description: 'Adorable pastel-themed overlays with cute animations and soft colors.',
    longDescription:
      'Bring kawaii charm to your stream with pastel pink and purple overlays, cute mascot animations, bubbly alert effects, and heart-themed widgets.',
    features: [
      'Pastel color palette',
      'Cute mascot animations',
      'Heart-themed alerts',
      'Soft bubble effects',
      'Just Chatting optimized',
    ],
    images: [
      gradient('#2d1b4e', '#ff69b4'),
      gradient('#1a0a2e', '#ffb6c1'),
      gradient('#3d1f5c', '#dda0dd'),
    ],
  },
  {
    id: '12',
    name: 'Motion Graphics Starter Kit',
    slug: 'motion-graphics-starter-kit',
    price: '$27.99',
    priceValue: 27.99,
    category: 'animated-overlays',
    description: 'After Effects templates for creating custom animated stream elements.',
    longDescription:
      'For creators who want full control. Includes After Effects project files with pre-built compositions, easy-to-edit text layers, and render-ready export settings.',
    features: [
      'After Effects project files',
      'Easy text customization',
      'Pre-built compositions',
      'Render guide included',
      'No plugins required',
    ],
    images: [
      gradient('#0a0a1a', '#6366f1'),
      gradient('#1a1a3e', '#818cf8'),
      gradient('#0f0f23', '#a78bfa'),
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.featured);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}
