type Props = {
  visible: boolean;
  value: string;
  onChange: (v: string) => void;
};

export default function OtherRoleField({ visible, value, onChange }: Props) {
  if (!visible) return null;

  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Specify your role"
      className="
        mt-3 w-full rounded-lg border border-slate-300
        px-4 py-3 text-sm
        text-slate-900
        placeholder:text-slate-400
        focus:border-emerald-500 focus:outline-none
        focus:ring-4 focus:ring-emerald-100
      "
    />
  );
}
