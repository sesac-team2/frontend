import { Routes, Route, Link } from 'react-router-dom';
import MainPage from './pages/Main';
import LoginPage from './pages/Login';

function App() {
  return (
    <div>
      <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '10px' }}>
          홈
        </Link>
        <Link to="/login">로그인</Link>
      </nav>

      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<div>페이지를 찾을 수 없습니다!</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
