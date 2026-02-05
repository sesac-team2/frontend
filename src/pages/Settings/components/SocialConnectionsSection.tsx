import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { socialConnections } from '../data';

export default function SocialConnectionsSection() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-foreground">
          Connected Accounts
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your social login connections
        </p>
      </div>

      <div className="space-y-3 max-w-xl">
        {socialConnections.map((connection) => (
          <div
            key={connection.id}
            className="flex items-center justify-between p-4 rounded-lg border border-border bg-card"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                {connection.icon}
              </div>
              <div>
                <p className="font-medium text-foreground">{connection.name}</p>
                {connection.connected ? (
                  <p className="text-sm text-muted-foreground">
                    {connection.email}
                  </p>
                ) : (
                  <p className="text-sm text-muted-foreground">Not connected</p>
                )}
              </div>
            </div>

            {connection.connected ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-success font-medium flex items-center gap-1.5">
                  <Check className="w-4 h-4" />
                  Connected
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground"
                >
                  Disconnect
                </Button>
              </div>
            ) : (
              <Button variant="outline" size="sm">
                Connect
              </Button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
