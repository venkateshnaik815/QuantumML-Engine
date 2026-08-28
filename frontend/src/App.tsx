import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Datasets from './pages/Datasets';
import Models from './pages/Models';
import TrainingJobs from './pages/TrainingJobs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="datasets" element={<Datasets />} />
          <Route path="models" element={<Models />} />
          <Route path="training" element={<TrainingJobs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
