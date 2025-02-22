import Home from '@/components/icons/Home.vue'
import LayersTwo from "@/components/icons/Layout/LayersTwo.vue";
import Valorant from "@/components/icons/Socials/Valorant.vue";
import Spotify from "@/components/icons/Socials/Spotify.vue";
import Link from "@/components/icons/General/Link.vue";
import HelpCircle from "@/components/icons/General/HelpCircle.vue";
import BookClosed from "@/components/icons/Education/BookClosed.vue";
import Twitch from "@/components/icons/Socials/Twitch.vue";
import Github from "@/components/icons/Socials/Github.vue";
import Discord from "@/components/icons/Socials/Discord.vue";
import Telegram from "@/components/icons/Socials/Telegram.vue";
import Donation from "@/components/icons/Donation.vue";

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
      icon: Home,
    },
    {
      title: 'Overlays',
      url: '#',
      icon: LayersTwo,
      isActive: true,
      items: [
        {
          title: 'Valorant',
          url: '#',
          icon: Valorant
        },
        {
          title: 'Spotify',
          url: '#',
          icon: Spotify
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
      icon: Link,
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
      icon: Donation,
      url: 'https://www.donationalerts.com/r/haxgun',
    }
  ]
}
