export type Role = 'Developer' | 'Designer' | 'PM' | 'Other';

const ROLES: Role[] = ['Developer', 'Designer', 'PM', 'Other'];

interface RoleSelectorProps {
  value?: Role;
  onChange: (role: Role) => void;
}

export default function RoleSelector({ value, onChange }: RoleSelectorProps) {
  return (
    <>
      <label className="block text-sm font-medium text-slate-700">
        Your Role <span className="text-red-500">*</span>
      </label>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {ROLES.map((role) => {
          const isActive = value === role;

          return (
            <button
              key={role}
              type="button"
              onClick={() => onChange(role)}
              className={`
                rounded-lg border px-4 py-3 text-sm font-medium
                transition
                ${
                  isActive
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700 ring-2 ring-emerald-100'
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                }
              `}
            >
              {role}
            </button>
          );
        })}
      </div>
    </>
  );
}
