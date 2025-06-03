import React from "react";
import {
  Bike,
  Building2,
  Dumbbell,
  GraduationCap,
  Heart,
  Leaf,
  Music,
  PartyPopper,
  Recycle,
  ShoppingBag,
  Sparkles,
  Sprout,
  Users,
  UsersRound,
  Apple,
  CupSoda,
  Drumstick,
  HandHelping,
} from "lucide-react";
import { NoStrawsIcon } from "@/components/icons/no-straws-icon";

interface IconMapperProps {
  iconName: string;
  className?: string;
}

export function IconMapper({ iconName, className = "h-6 w-6" }: IconMapperProps) {
  const iconMap: Record<string, React.ReactNode> = {
    // Sustainability
    noStraws: <NoStrawsIcon className={className} />,
    recycle: <Recycle className={className} />,
    apple: <Apple className={className} />,
    handsClapping: <HandHelping className={className} />,
    sprout: <Sprout className={className} />,
    
    // Benefits
    dumbbell: <Dumbbell className={className} />,
    users: <Users className={className} />,
    building: <Building2 className={className} />,
    shoppingBag: <ShoppingBag className={className} />,
    graduationCap: <GraduationCap className={className} />,
    partyPopper: <PartyPopper className={className} />,
    
    // Package Details
    bike: <Bike className={className} />,
    glass: <CupSoda className={className} />,
    theater: <Drumstick className={className} />,
    music: <Music className={className} />,
    
    // About Page Values
    heart: <Heart className={className} />,
    leaf: <Leaf className={className} />,
    usersRound: <UsersRound className={className} />,
    sparkles: <Sparkles className={className} />,
  };

  return <>{iconMap[iconName] || <div className={className}>Icon not found</div>}</>;
}