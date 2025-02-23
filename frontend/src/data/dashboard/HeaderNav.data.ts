import { BookClosed, Hearts, HelpCircle, HomeLine, LayersThree01, Link03 } from 'untitledui-js/vue'

import Discord from '@/components/icons/Socials/Discord.vue'
import Github from '@/components/icons/Socials/Github.vue'
import Spotify from '@/components/icons/Socials/Spotify.vue'
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
      title: 'Home',
      url: '#',
      icon: HomeLine,
    },
    {
      title: 'Overlays',
      url: '#',
      icon: LayersThree01,
      isActive: true,
      items: [
        {
          title: 'Valorant',
          url: '#',
          icon: Valorant,
        },
        {
          title: 'Spotify',
          url: '#',
          icon: Spotify,
        },
      ],
    },
    {
      title: 'Bot',
      url: '#',
      icon: Twitch,
    },
  ],
  navExtra: [
    {
      title: 'Documentation',
      url: '#',
      icon: BookClosed,
    },
    {
      title: 'Integrations',
      url: '#',
      icon: Link03,
    },
    {
      title: 'Help',
      url: '#',
      icon: HelpCircle,
    },
  ],
  buttons: [
    {
      icon: Github,
      url: 'https://github.com/ValoryApp/Valory',
    },
    {
      icon: Twitch,
      url: 'https://twitch.tv/MAGICXcmd',
    },
    {
      icon: Discord,
      url: 'https://discord.gg/valory',
    },
    {
      icon: Telegram,
      url: 'https://t.me/magicxcmd',
    },
    {
      icon: Hearts,
      url: 'https://www.donationalerts.com/r/haxgun',
    },
  ],
}
