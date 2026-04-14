function Card({ title, value, change }) {
  const isPositive = change?.startsWith('+');

  return (
    <div className="card">
      <h3>{title}</h3>
      <p className="metric">{value}</p>
      {change && (
        <span className={`change ${isPositive ? 'positive' : 'negative'}`}>
          {change}
        </span>
      )}
    </div>
  );
}

export default Card;