import googleImg from '../../../assets/images/auth/google/web_light_sq_na@2x.png';

export default function LoginAuthGoogle() {
  return (
    <a
      href="/api/auth/login/google"
      className="
            flex h-12 w-full items-center justify-center gap-3
            rounded-xl
            bg-white
            border border-slate-200
            text-slate-900
            shadow-sm
            hover:bg-slate-50
            active:bg-slate-100
            transition
        "
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100">
        <img src={googleImg} alt="" className="h-4 w-4" />
      </span>
      <span className="text-sm font-medium">Google로 계속하기</span>
    </a>
  );
}
