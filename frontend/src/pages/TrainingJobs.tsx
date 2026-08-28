import { useState, useEffect } from 'react';
import { Activity, PlayCircle, Search, Filter, Loader2 } from 'lucide-react';

interface Job {
  id: string;
  model: string;
  dataset: string;
  progress: number;
  totalEpochs: number;
  status: string;
  time: string;
  loss: number | string;
}

const TrainingJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([
    { id: '#TR-8495', model: 'BERT Finetuning', dataset: 'support_tickets.csv', progress: 65, totalEpochs: 100, status: 'Running', time: '45 mins remaining', loss: 0.231 },
    { id: '#TR-8494', model: 'Anomaly Detector', dataset: 'network_logs.parquet', progress: 15, totalEpochs: 20, status: 'Running', time: '2 hours remaining', loss: 0.892 },
    { id: '#TR-8493', model: 'Image Classifier', dataset: 'products_v2.zip', progress: 100, totalEpochs: 50, status: 'Completed', time: 'Finished 2h ago', loss: 0.041 },
    { id: '#TR-8492', model: 'Sales XGBoost', dataset: 'q3_sales.csv', progress: 42, totalEpochs: 100, status: 'Failed', time: 'Failed 5h ago', loss: 'NaN' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [isStarting, setIsStarting] = useState(false);

  // Simulate Live Training Progress Updates!
  useEffect(() => {
    const timer = setInterval(() => {
      setJobs(currentJobs => 
        currentJobs.map(job => {
          if (job.status === 'Running') {
            const newProgress = Math.min(job.progress + 1, 100);
            const currentLoss = typeof job.loss === 'number' ? job.loss : 1.0;
            const newLoss = Math.max(0.01, currentLoss - 0.005).toFixed(3);
            
            if (newProgress === 100) {
              return { ...job, progress: 100, status: 'Completed', time: 'Just finished', loss: newLoss };
            }
            return { 
              ...job, 
              progress: newProgress, 
              loss: parseFloat(newLoss),
              time: 'Training actively...'
            };
          }
          return job;
        })
      );
    }, 1500); // Update every 1.5 seconds

    return () => clearInterval(timer);
  }, []);

  const handleStartNewJob = () => {
    setIsStarting(true);
    setTimeout(() => {
      const newJob: Job = {
        id: `#TR-${Math.floor(Math.random() * 1000) + 8500}`,
        model: 'Custom LLM Router',
        dataset: 'router_data_v1.csv',
        progress: 0,
        totalEpochs: 50,
        status: 'Running',
        time: 'Initializing compute...',
        loss: 1.250
      };
      setJobs([newJob, ...jobs]);
      setIsStarting(false);
    }, 1000);
  };

  const filteredJobs = jobs.filter(job => 
    job.model.toLowerCase().includes(searchQuery.toLowerCase()) || 
    job.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
            <Activity className="text-blue-600" size={28} />
            Training Pipeline
          </h2>
          <p className="text-slate-500 mt-1">Monitor active model training jobs and hyperparameter tuning.</p>
        </div>
        <button 
          onClick={handleStartNewJob}
          disabled={isStarting}
          className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-sm flex items-center gap-2 transition-all disabled:opacity-70"
        >
          {isStarting ? <Loader2 size={18} className="animate-spin" /> : <PlayCircle size={18} />}
          {isStarting ? 'Allocating GPU...' : 'Start New Job'}
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex gap-4 bg-slate-50/50">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search job ID or model name..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-shadow" 
            />
          </div>
          <button className="px-4 py-2 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 flex items-center gap-2 text-sm transition-colors">
            <Filter size={16} /> Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-slate-100">
                <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Job Details</th>
                <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider w-1/3">Training Progress</th>
                <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Metrics</th>
                <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredJobs.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-12 text-center text-slate-500">
                    No jobs found matching "{searchQuery}"
                  </td>
                </tr>
              ) : filteredJobs.map((job, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="font-bold text-slate-800">{job.id} <span className="font-medium text-slate-500 ml-2">{job.model}</span></div>
                    <div className="text-xs text-slate-500 mt-1">Dataset: {job.dataset}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium text-slate-700">Epoch {Math.floor((job.progress / 100) * job.totalEpochs)}/{job.totalEpochs}</span>
                      <span className="text-slate-500">{job.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ease-out ${
                          job.status === 'Completed' ? 'bg-emerald-500' : 
                          job.status === 'Failed' ? 'bg-red-500' : 'bg-blue-600 relative overflow-hidden'
                        }`} 
                        style={{ width: `${job.progress}%` }}
                      >
                        {job.status === 'Running' && (
                          <div className="absolute inset-0 bg-white/20 animate-[pulse_1s_ease-in-out_infinite]"></div>
                        )}
                      </div>
                    </div>
                    <div className="text-xs text-slate-400 mt-1">{job.time}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm">Loss: <span className="font-semibold text-slate-800 transition-all">{job.loss}</span></div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full transition-colors ${
                      job.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 
                      job.status === 'Failed' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {job.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default TrainingJobs;
