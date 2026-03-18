import { useEffect, useRef } from 'react';

function Chart({ data, width = 400, height = 200 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, width, height);

    if (!data || data.length === 0) return;

    const max = Math.max(...data);
    const barWidth = width / data.length;

    data.forEach((value, i) => {
      const barHeight = (value / max) * (height - 20);
      ctx.fillStyle = '#4f46e5';
      ctx.fillRect(i * barWidth + 2, height - barHeight, barWidth - 4, barHeight);
    });
  }, [data, width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
}

export default Chart;