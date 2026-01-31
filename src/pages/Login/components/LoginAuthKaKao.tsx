import kakaoImg from '../../../assets/images/auth/kakao/kakaotalk_sharing_btn_small_ov.png';

export default function LoginAuthKaKao() {
  return (
    <a
      href="/api/auth/login/kakao"
      className="
            flex h-12 w-full items-center justify-center gap-3
            rounded-xl
            bg-[#FEE500]
            text-black
            shadow-sm
            hover:bg-[#F7D900]
            active:bg-[#EAC800]
            transition
        "
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/10">
        <img src={kakaoImg} alt="" className="h-4 w-4" />
      </span>
      <span className="text-sm font-medium">카카오로 계속하기</span>
    </a>
  );
}
