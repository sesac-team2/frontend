export type Role = 'Developer' | 'Designer' | 'PM' | 'Other';

const ROLES: Role[] = ['Developer', 'Designer', 'PM', 'Other'];

type Props = {
  value: Role | null;
  onChange: (v: Role) => void;
};

export default function RoleSelector({ value, onChange }: Props) {
  return (
    <>
      <label className="block text-sm font-medium text-slate-700">
        Your Role <span className="text-red-500">*</span>
      </label>

      <div className="mt-3 grid grid-cols-2 gap-3">
        {ROLES.map((r) => {
          const active = value === r;

          return (
            <button
              key={r}
              type="button"
              onClick={() => onChange(r)}
              className={`
                rounded-lg border px-4 py-3 text-sm font-medium
                transition
                ${
                  active
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700 ring-2 ring-emerald-100'
                    : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                }
              `}
            >
              {r}
            </button>
          );
        })}
      </div>
    </>
  );
}
