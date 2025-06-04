import { 
  Heart, 
  Leaf, 
  Users, 
  Sparkles,
  Bike,
  GlassWater,
  Theater,
  Music,
  Dumbbell,
  Building,
  ShoppingBag,
  GraduationCap,
  PartyPopper,
  UsersRound,
  Apple,
  Recycle,
  Ban,
  Coffee,
  Sprout,
} from "lucide-react"
import { NoStrawsIcon } from "@/components/icons/no-straws-icon"

interface IconMapperProps {
  iconName: string
  className?: string
}

export function IconMapper({ iconName, className = "h-6 w-6" }: IconMapperProps) {
  const iconMap = {
    heart: Heart,
    leaf: Leaf,
    users: Users,
    usersRound: UsersRound,
    sparkles: Sparkles,
    bike: Bike,
    glass: GlassWater,
    theater: Theater,
    music: Music,
    dumbbell: Dumbbell,
    building: Building,
    shoppingBag: ShoppingBag,
    graduationCap: GraduationCap,
    partyPopper: PartyPopper,
    apple: Apple,
    recycle: Recycle,
    noStraws: NoStrawsIcon,
    sprout: Sprout,
  }
  const IconComponent = iconMap[iconName as keyof typeof iconMap]

  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in iconMap`)
    return <div className={className} />
  }

  if (iconName === 'noStraws') {
    return <NoStrawsIcon className={className} />
  }

  return <IconComponent className={className} />
}