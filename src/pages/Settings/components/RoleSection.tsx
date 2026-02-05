import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { roles } from '../data';

interface RoleSectionProps {
  selectedRole: string;
  onRoleChange: (value: string) => void;
  customRole: string;
  onCustomRoleChange: (value: string) => void;
}

export default function RoleSection({
  selectedRole,
  onRoleChange,
  customRole,
  onCustomRoleChange,
}: RoleSectionProps) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-foreground">Role</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Your primary function in projects
        </p>
      </div>

      <RadioGroup
        value={selectedRole}
        onValueChange={onRoleChange}
        className="grid grid-cols-2 md:grid-cols-4 gap-3"
      >
        {roles.map((role) => (
          <Label
            key={role.id}
            htmlFor={role.id}
            className={`
              flex flex-col p-4 rounded-lg border cursor-pointer transition-all
              ${
                selectedRole === role.id
                  ? 'border-primary bg-primary/5 ring-1 ring-primary'
                  : 'border-border hover:border-muted-foreground/30'
              }
            `}
          >
            <div className="flex items-center gap-2">
              <RadioGroupItem value={role.id} id={role.id} />
              <span className="font-medium text-foreground">{role.label}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1 ml-6">
              {role.description}
            </p>
          </Label>
        ))}
      </RadioGroup>

      {selectedRole === 'other' && (
        <div className="mt-4 pl-4 border-l-2 border-border">
          <Label htmlFor="customRole" className="text-sm font-medium">
            Specify your role
          </Label>
          <Input
            id="customRole"
            placeholder="e.g., Data Scientist, Marketing Lead"
            value={customRole}
            onChange={(e) => onCustomRoleChange(e.target.value)}
            className="mt-2 max-w-sm"
          />
        </div>
      )}
    </section>
  );
}
