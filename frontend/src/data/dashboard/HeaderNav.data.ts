import {
  BookClosed,
  Hearts,
  HelpCircle,
  LayersThree01,
  Link03,
  MessageChatCircle,
  MessageSmileSquare,
  MusicNote01,
} from 'untitledui-js/vue'

import Discord from '@/components/icons/Socials/Discord.vue'
import Faceit from '@/components/icons/Socials/Faceit.vue'
import Github from '@/components/icons/Socials/Github.vue'
import Telegram from '@/components/icons/Socials/Telegram.vue'
import Twitch from '@/components/icons/Socials/Twitch.vue'
import Valorant from '@/components/icons/Socials/Valorant.vue'

interface NavItem {
  title: string
  url: string
  icon?: any
}

interface NavMainItem {
  title: string
  url: string
  icon: any
  isActive?: boolean
  items?: NavItem[]
}

interface NavExtra {
  title: string
  url: string
  icon: any
}

interface User {
  name: string
  avatar: string
}

interface Button {
  title: string
  icon: any
  url: string
}

export interface NavData {
  user: User
  navMain: NavMainItem[]
  navExtra: NavExtra[]
  buttons: Button[]
}

export const NAV_DATA: NavData = {
  user: {
    name: 'MAGICXcmd',
    avatar:
      'https://static-cdn.jtvnw.net/jtv_user_pictures/a917baec-006e-4ee8-a89a-6f8fda5b09a0-profile_image-70x70.png',
  },
  navMain: [
    {
      title: 'dashboard.sidebar.features.items.overlays.title',
      url: '#',
      icon: LayersThree01,
      isActive: false,
      items: [
        {
          title: 'dashboard.sidebar.features.items.overlays.items.valorant',
          url: '#',
          icon: Valorant,
        },
        {
          title: 'dashboard.sidebar.features.items.overlays.items.faceit',
          url: '#',
          icon: Faceit,
        },
        {
          title: 'dashboard.sidebar.features.items.overlays.items.chat',
          url: '#',
          icon: MessageChatCircle,
        },
        {
          title: 'dashboard.sidebar.features.items.overlays.items.music',
          url: '#',
          icon: MusicNote01,
        },
      ],
    },
    {
      title: 'dashboard.sidebar.features.items.twitchBot',
      url: '#',
      icon: Twitch,
    },
    {
      title: 'dashboard.sidebar.features.items.notificationBot',
      url: '#',
      icon: MessageSmileSquare,
    },
  ],
  navExtra: [
    {
      title: 'dashboard.sidebar.extra.items.docs',
      url: '#',
      icon: BookClosed,
    },
    {
      title: 'dashboard.sidebar.extra.items.integrations',
      url: '#',
      icon: Link03,
    },
    {
      title: 'dashboard.sidebar.extra.items.help',
      url: '#',
      icon: HelpCircle,
    },
  ],
  buttons: [
    {
      title: 'Github',
      icon: Github,
      url: 'https://github.com/ValoryApp/Valory',
    },
    {
      title: 'Twitch',
      icon: Twitch,
      url: 'https://twitch.tv/MAGICXcmd',
    },
    {
      title: 'Discord',
      icon: Discord,
      url: 'https://discord.gg/valory',
    },
    {
      title: 'Telegram',
      icon: Telegram,
      url: 'https://t.me/magicxcmd',
    },
    {
      title: 'Donate',
      icon: Hearts,
      url: 'https://www.donationalerts.com/r/haxgun',
    },
  ],
}
