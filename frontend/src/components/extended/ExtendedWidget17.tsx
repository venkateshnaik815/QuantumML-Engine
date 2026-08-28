import React, { useState, useEffect } from 'react';

interface ExtendedWidgetProps 17 {
  title: string;
  data: any[];
  onAction?: () => void;
}

export const ExtendedWidget17: React.FC<ExtendedWidgetProps17> = ({ title, data, onAction }) => {
  const [isActive, setIsActive] = useState(false);
  const [metrics, setMetrics] = useState<number[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
      setMetrics(data.map((_, idx) => idx * Math.random()));
    }, 1000);
    return () => clearTimeout(timer);
  }, [data]);

  const handleInteraction = () => {
    if (onAction) onAction();
    setIsActive(!isActive);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-slate-200 m-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-slate-800">{title} - Component 17</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${isActive ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
          {isActive ? 'Active' : 'Pending'}
        </span>
      </div>
      
      <div className="space-y-4">
        {metrics.length > 0 ? (
          <ul className="divide-y divide-slate-100">
            {metrics.map((m, idx) => (
              <li key={idx} className="py-2 flex justify-between">
                <span className="text-sm text-slate-600">Metric {idx}</span>
                <span className="text-sm font-medium text-slate-900">{m.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-8 text-slate-400 text-sm">
            Waiting for data stream...
          </div>
        )}
      </div>
      
      <div className="mt-6">
        <button 
          onClick={handleInteraction}
          className="w-full py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          Toggle Widget State
        </button>
      </div>
    </div>
  );
};
