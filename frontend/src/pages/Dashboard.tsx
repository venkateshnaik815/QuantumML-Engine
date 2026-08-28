import { TrendingUp, Database, Activity, Cpu, PlayCircle, CheckCircle2, XCircle } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { title: 'Total Datasets', value: '1,245', change: '+12%', color: 'blue', icon: <Database size={24}/> },
    { title: 'Active Models', value: '34', change: '+4%', color: 'emerald', icon: <Cpu size={24}/> },
    { title: 'Running Jobs', value: '8', change: 'Live', color: 'amber', icon: <Activity size={24}/> },
    { title: 'API Requests', value: '45.2k', change: '+18%', color: 'purple', icon: <TrendingUp size={24}/> },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-lg bg-${stat.color}-50 text-${stat.color}-600`}>
                {stat.icon}
              </div>
              <span className={`text-xs font-semibold text-${stat.color}-700 bg-${stat.color}-100 px-2.5 py-1 rounded-full`}>
                {stat.change}
              </span>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-800">{stat.value}</h3>
              <p className="text-sm font-medium text-slate-500 mt-1">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-lg font-bold text-slate-800">Recent Training Jobs</h3>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Job ID</th>
                <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Model Name</th>
                <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Accuracy</th>
                <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6 text-sm font-medium text-slate-900">#TR-8492</td>
                <td className="py-4 px-6 text-sm text-slate-600">Customer Churn XGBoost</td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200">
                    <CheckCircle2 size={14} /> Completed
                  </span>
                </td>
                <td className="py-4 px-6 text-sm font-medium text-slate-700">94.2%</td>
                <td className="py-4 px-6 text-sm text-slate-500">12 mins ago</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6 text-sm font-medium text-slate-900">#TR-8493</td>
                <td className="py-4 px-6 text-sm text-slate-600">Fraud Detection BERT</td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200">
                    <PlayCircle size={14} className="animate-pulse" /> Running
                  </span>
                </td>
                <td className="py-4 px-6 text-sm font-medium text-slate-400">-</td>
                <td className="py-4 px-6 text-sm text-slate-500">Just now</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6 text-sm font-medium text-slate-900">#TR-8491</td>
                <td className="py-4 px-6 text-sm text-slate-600">Sales Forecast LSTM</td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-50 text-red-700 text-xs font-medium rounded-full border border-red-200">
                    <XCircle size={14} /> Failed
                  </span>
                </td>
                <td className="py-4 px-6 text-sm font-medium text-slate-400">-</td>
                <td className="py-4 px-6 text-sm text-slate-500">1 hr ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
