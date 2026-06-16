import Link from "next/link";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-4 text-center">
      <h1 className="text-4xl font-bold sm:text-6xl">안녕하세요, 이진입니다</h1>
      <p className="mt-4 text-sm sm:text-base text-gray-300">
        한화시스템 ICT부문 인재확보팀
      </p>
      <p className="mt-2 max-w-xl text-sm sm:text-base text-gray-300">
        기술(AI)과 사람(HR) 이해를 통해, 조직(Leadership)의 체질을 바꾸는 AX HRD
        디렉터를 꿈꾸는 사람
      </p>
      <Link href="/" className="mt-8 text-sm sm:text-base underline hover:text-gray-300">
        메인 페이지로 돌아가기
      </Link>
    </div>
  );
}
