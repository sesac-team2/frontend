import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { PenLine, MoreHorizontal } from 'lucide-react';
import InviteModal from './InviteModal';
import type { Participant } from '../types';

interface ParticipantsTabProps {
  participants: Participant[];
}

export default function ParticipantsTab({
  participants,
}: ParticipantsTabProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">
          {participants.length} Participants
        </h2>
        <InviteModal />
      </div>

      {/* Participants table */}
      <div className="rounded-xl border border-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left text-sm font-medium text-muted-foreground px-4 py-3">
                Name
              </th>
              <th className="text-left text-sm font-medium text-muted-foreground px-4 py-3">
                Role
              </th>
              <th className="text-left text-sm font-medium text-muted-foreground px-4 py-3">
                Status
              </th>
              <th className="text-left text-sm font-medium text-muted-foreground px-4 py-3">
                Testimonials
              </th>
              <th className="text-right text-sm font-medium text-muted-foreground px-4 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {participants.map((participant) => (
              <tr
                key={participant.id}
                className="bg-card hover:bg-muted/30 transition-colors"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="text-xs bg-secondary text-secondary-foreground">
                        {participant.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        {participant.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {participant.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm text-foreground">
                    {participant.role}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <Badge
                    variant={
                      participant.status === 'active' ? 'secondary' : 'outline'
                    }
                    className="capitalize"
                  >
                    {participant.status}
                  </Badge>
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm text-muted-foreground">
                    {participant.testimonialCount} written
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Button variant="ghost" size="sm" asChild>
                      <Link
                        to={`/testimonials/new?participant=${participant.id}`}
                      >
                        <PenLine className="w-4 h-4 mr-1" />
                        Write
                      </Link>
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="w-8 h-8">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View profile</DropdownMenuItem>
                        <DropdownMenuItem>Send reminder</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          Remove
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
