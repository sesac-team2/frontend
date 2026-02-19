import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function UserMenu() {
  const { user } = useAuth();
  const lastName = user?.fullName?.[0] ?? 'U';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors outline-none cursor-pointer">
          <Avatar className="w-7 h-7">
            <AvatarFallback className="text-xs bg-primary text-primary-foreground">
              {user?.avatarUrl ? <img src={user.avatarUrl} alt="" /> : lastName}
            </AvatarFallback>
          </Avatar>
          <span className="hidden sm:inline text-sm font-medium text-foreground">
            {user?.fullName}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>내 계정</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/settings" className="cursor-pointer w-full">
            프로필 수정
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to={`/share/${user?.id}`} className="cursor-pointer w-full">
            내 프로필 보기
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
