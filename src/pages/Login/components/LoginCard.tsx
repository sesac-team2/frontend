export default function LoginCard() {
    return (
            <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_18px_45px_-30px_rgba(0,0,0,0.35)]">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-slate-900">
                    Welcome Back
                    </h2>
                    <p className="mt-2 text-sm text-slate-600">
                    Sign in to continue tracking contributions
                    </p>
                </div>

                <div className="mt-8 space-y-3">
                    <button
                    type="button"
                    className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 active:bg-slate-100"
                    >
                    {/* <GoogleIcon /> */}
                    Continue with Google
                    </button>

                    <button
                    type="button"
                    className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#FEE500] px-4 py-3 text-sm font-semibold text-black hover:brightness-[0.98] active:brightness-[0.95]"
                    >
                    {/* <KakaoIcon /> */}
                    Continue with Kakao
                    </button>



                </div>

                {/* Divider */}
                <div className="my-6 flex items-center gap-4">
                    <div className="h-px flex-1 bg-slate-200" />
                    <span className="text-xs text-slate-500">or use email</span>
                    <div className="h-px flex-1 bg-slate-200" />
                </div>

                <form
                    onSubmit={(e) => {
                    e.preventDefault();
                    // TODO: 매직링크 발송 로직 연결
                    alert("Magic link sent (demo)");
                    }}
                    className="space-y-4"
                >
                    <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-100"
                    />

                    <button
                    type="submit"
                    className="w-full rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700 active:bg-emerald-800"
                    >
                    Send Magic Link
                    </button>
                </form>

                <p className="mt-6 text-center text-xs leading-5 text-slate-500">
                    By continuing, you agree to our{" "}
                    <a
                    href="#"
                    className="font-medium text-slate-700 underline underline-offset-2 hover:text-slate-900"
                    >
                    Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                    href="#"
                    className="font-medium text-slate-700 underline underline-offset-2 hover:text-slate-900"
                    >
                    Privacy Policy
                    </a>
                </p>
            </div>
    );
}