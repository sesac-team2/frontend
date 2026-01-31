interface NameFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export default function NameField({ value, onChange }: NameFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700">
        Full Name <span className="text-red-500">*</span>
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Your name"
        className="
          mt-2 w-full rounded-lg border border-slate-300
          px-4 py-3 text-sm
          text-slate-900
          placeholder:text-slate-400
          focus:border-emerald-500 focus:outline-none
          focus:ring-4 focus:ring-emerald-100 
        "
      />
    </div>
  );
}
