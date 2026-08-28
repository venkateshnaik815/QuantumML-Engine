import { BrainCircuit, Rocket, Box, Play, MoreVertical } from 'lucide-react';

const Models = () => {
  const registry = [
    { name: 'Customer Churn Predictor', version: 'v1.4.0', framework: 'XGBoost', acc: '94.2%', f1: '0.91', status: 'Production', deployed: '3 days ago' },
    { name: 'Fraud Detection Network', version: 'v2.1.1', framework: 'PyTorch', acc: '98.7%', f1: '0.96', status: 'Staging', deployed: '5 hours ago' },
    { name: 'Sales Forecast Series', version: 'v0.9.0', framework: 'Scikit-learn', acc: '88.4%', f1: '0.85', status: 'Archived', deployed: '1 month ago' },
    { name: 'LLM Support Router', version: 'v3.0.0', framework: 'Transformers', acc: '95.5%', f1: '0.93', status: 'Production', deployed: '1 week ago' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
            <BrainCircuit className="text-purple-600" size={28} /> 
            Model Registry
          </h2>
          <p className="text-slate-500 mt-1">Manage trained models, track metrics, and deploy endpoints.</p>
        </div>
        <button className="px-5 py-2.5 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 shadow-sm flex items-center gap-2 transition-all">
          <Rocket size={18} /> Register External Model
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {registry.map((model, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col md:flex-row md:items-center justify-between hover:shadow-md transition-shadow">
            
            <div className="flex items-center gap-5 flex-1">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                model.status === 'Production' ? 'bg-emerald-100 text-emerald-600' : 
                model.status === 'Staging' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'
              }`}>
                <Box size={24} />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-slate-800">{model.name}</h3>
                  <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs font-semibold rounded">{model.version}</span>
                </div>
                <div className="flex items-center gap-4 mt-1 text-sm text-slate-500">
                  <span>Framework: <span className="font-medium text-slate-700">{model.framework}</span></span>
                  <span>•</span>
                  <span>Accuracy: <span className="font-medium text-slate-700">{model.acc}</span></span>
                  <span>•</span>
                  <span>F1 Score: <span className="font-medium text-slate-700">{model.f1}</span></span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <div className="text-right">
                <div className={`text-sm font-bold ${
                  model.status === 'Production' ? 'text-emerald-600' : 
                  model.status === 'Staging' ? 'text-blue-600' : 'text-slate-500'
                }`}>{model.status}</div>
                <div className="text-xs text-slate-400 mt-0.5">Updated {model.deployed}</div>
              </div>
              
              <div className="flex items-center gap-2 border-l border-slate-200 pl-6">
                {model.status !== 'Archived' && (
                  <button className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 flex items-center gap-2">
                    <Play size={16} /> Deploy Endpoint
                  </button>
                )}
                <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
export default Models;
