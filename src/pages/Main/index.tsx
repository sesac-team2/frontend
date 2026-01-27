// src/pages/Main/index.tsx
export default function MainPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Hello Tailwind!</h1>
      <p className="text-gray-600 mb-8">
        도커 환경에서 테일윈드가 아주 잘 돌아가고 있네요.
      </p>

      {/* 테일윈드 클래스로 만든 버튼 */}
      <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none transition duration-300">
        멋진 버튼
      </button>
    </div>
  );
}
