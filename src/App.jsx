import { useState, useEffect } from 'react';

function App() {
  const [metrics, setMetrics] = useState({ users: 0, revenue: 0, orders: 0 });

  useEffect(() => {
    setMetrics({ users: 1243, revenue: 48200, orders: 385 });
  }, []);

  return (
    <div className="app">
      <header><h1>Dashboard</h1></header>
      <main className="grid">
        <div className="card">
          <h3>Users</h3>
          <p className="metric">{metrics.users.toLocaleString()}</p>
        </div>
        <div className="card">
          <h3>Revenue</h3>
          <p className="metric">${metrics.revenue.toLocaleString()}</p>
        </div>
        <div className="card">
          <h3>Orders</h3>
          <p className="metric">{metrics.orders.toLocaleString()}</p>
        </div>
      </main>
    </div>
  );
}

export default App;