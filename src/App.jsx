import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  return (
    <div className="min-h-screen bg-[#F5F0E6] text-black">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;