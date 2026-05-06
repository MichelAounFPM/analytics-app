import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Chart from './components/Chart';
import Card from './components/Card';
import './styles/globals.css';

const SAMPLE_DATA = [12, 19, 8, 25, 14, 32, 21, 28, 17, 30];

function App() {
  const [page, setPage] = useState('dashboard');

  return (
    <div className="app">
      <Sidebar active={page} onNavigate={setPage} />
      <main className="main-content">
        <header><h1>Dashboard</h1></header>
        <div className="grid">
          <Card title="Users" value="1,243" change="+12%" />
          <Card title="Revenue" value="$48,200" change="+8%" />
          <Card title="Orders" value="385" change="+23%" />
        </div>
        <section className="chart-section">
          <h2>Activity</h2>
          <Chart data={SAMPLE_DATA} width={600} height={200} />
        </section>
      </main>
    </div>
  );
}

export default App;