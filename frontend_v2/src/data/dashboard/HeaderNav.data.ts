import Home from '@/components/icons/Home.vue'

import {
  BookOpen,
  Bot,
  CircleHelp,
  type LucideIcon,
  Settings2,
  SquareTerminal,
} from 'lucide-vue-next'
import { type DefineComponent } from 'vue'

interface NavItem {
  title: string
  url: string
}

interface NavMainItem {
  title: string
  url: string
  icon: LucideIcon | DefineComponent
  isActive?: boolean
  items?: NavItem[]
}

interface NavExtra {
  title: string
  url: string
  icon: LucideIcon
}

interface User {
  name: string
  avatar: string
}

export interface NavData {
  user: User
  navMain: NavMainItem[]
  navExtra: NavExtra[]
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
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Valorant',
          url: '#',
        },
        {
          title: 'Spotify',
          url: '#',
        },
      ],
    },
    {
      title: 'Bot',
      url: '#',
      icon: Bot,
    },
  ],
  navExtra: [
    {
      title: 'Documentation',
      url: '#',
      icon: BookOpen,
    },
    {
      title: 'Integrations',
      url: '#',
      icon: Settings2,
    },
    {
      title: 'Help',
      url: '#',
      icon: CircleHelp,
    },
  ],
}
