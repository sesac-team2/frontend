import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main';
import LoginPage from './pages/Login';
import LandingPage from './pages/Landing';
import SettingsPage from './pages/Settings';
import NewProjectPage from './pages/Projects/New';
import ProjectDetailPage from './pages/Projects/Detail';
import EditProjectPage from './pages/Projects/Edit';
import PublicSharePage from './pages/Share';
import NewTestimonialPage from './pages/Testimonials/New';
import PlaceholderPage from './pages/PlaceholderPage';

function App() {
  return (
    <main className="min-h-screen w-full">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/projects" element={<MainPage />} />

        {/* Real Routes */}
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/projects/new" element={<NewProjectPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/projects/:id/edit" element={<EditProjectPage />} />
        <Route path="/share/:id" element={<PublicSharePage />} />
        <Route path="/testimonials/new" element={<NewTestimonialPage />} />

        {/* Placeholder Routes */}
        <Route
          path="/profile-setup"
          element={<PlaceholderPage title="Profile Setup" />}
        />

        <Route path="*" element={<div>페이지를 찾을 수 없습니다!</div>} />
      </Routes>
    </main>
  );
}

export default App;
