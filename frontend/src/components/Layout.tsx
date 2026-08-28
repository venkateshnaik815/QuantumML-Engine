import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const navItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/datasets', label: 'Datasets', icon: '📁' },
    { path: '/models', label: 'Model Registry', icon: '🧠' },
    { path: '/training', label: 'Training Jobs', icon: '⚡' }
  ];

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-secondary text-white flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold tracking-wider text-blue-400">QuantumML</h1>
          <p className="text-xs text-slate-400 mt-1">Enterprise AI Engine</p>
        </div>
        <nav className="flex-1 mt-6">
          <ul className="space-y-2 px-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === item.path 
                      ? 'bg-blue-600 text-white' 
                      : 'text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold">
              VN
            </div>
            <div>
              <p className="text-sm font-medium">Venkatesh Naik</p>
              <p className="text-xs text-slate-400">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-slate-800">
            {navItems.find(i => i.path === location.pathname)?.label || 'Overview'}
          </h2>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-50 text-blue-600 font-medium rounded-lg hover:bg-blue-100">
              Settings
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-sm">
              + New Project
            </button>
          </div>
        </header>
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
