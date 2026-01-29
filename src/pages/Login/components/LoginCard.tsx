import LoginAuthGoogle from './LoginAuthGoogle.tsx';
import LoginAuthKaKao from './LoginAuthKaKao.tsx';

export default function LoginCard() {
  return (
    <div
      className="
            w-full max-w-sm
            rounded-3xl
            bg-white/80
            backdrop-blur
            border border-slate-200/60
            p-6
            shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]
        "
    >
      <div className="text-center">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          Welcome Back
        </h2>
        <p className="mt-1 text-sm text-slate-600">10초 만에 다시 시작하세요</p>
      </div>

      <div className="mt-6 rounded-2xl bg-slate-50/80 p-4">
        <div className="space-y-3">
          <LoginAuthGoogle />
          <LoginAuthKaKao />
        </div>

        <div className="mt-4 flex justify-center gap-6 text-xs text-slate-500">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            설치 없이 사용
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            언제든 탈퇴
          </span>
        </div>
      </div>

      <p className="mt-5 text-center text-[11px] leading-5 text-slate-400">
        계속하면 <a className="underline underline-offset-2">이용약관</a> 및{' '}
        <a className="underline underline-offset-2">개인정보 처리방침</a>에
        동의합니다.
      </p>
    </div>
  );
}
