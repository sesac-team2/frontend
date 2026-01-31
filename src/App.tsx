import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main';
import LoginPage from './pages/Login';
import OnboardingPage from './pages/Onboarding';

function App() {
  return (
    <main className="min-h-screen w-full">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="*" element={<div>페이지를 찾을 수 없습니다!</div>} />
      </Routes>
    </main>
  );
}

export default App;
