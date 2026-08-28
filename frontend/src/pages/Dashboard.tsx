const Dashboard = () => {
  const stats = [
    { title: 'Total Datasets', value: '1,245', change: '+12%', color: 'blue' },
    { title: 'Active Models', value: '34', change: '+4%', color: 'green' },
    { title: 'Running Jobs', value: '8', change: 'Live', color: 'yellow' },
    { title: 'API Requests', value: '45.2k', change: '+18%', color: 'purple' },
  ];

  return (
    <div>
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-sm font-medium text-slate-500 mb-2">{stat.title}</h3>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-slate-800">{stat.value}</span>
              <span className={`text-sm font-medium text-${stat.color}-500 bg-${stat.color}-50 px-2 py-1 rounded`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">Recent Training Jobs</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="py-3 px-4 text-sm font-medium text-slate-500">Job ID</th>
              <th className="py-3 px-4 text-sm font-medium text-slate-500">Model Name</th>
              <th className="py-3 px-4 text-sm font-medium text-slate-500">Status</th>
              <th className="py-3 px-4 text-sm font-medium text-slate-500">Accuracy</th>
              <th className="py-3 px-4 text-sm font-medium text-slate-500">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-100 hover:bg-slate-50">
              <td className="py-3 px-4 text-sm font-medium text-slate-900">#TR-8492</td>
              <td className="py-3 px-4 text-sm text-slate-600">Customer Churn XGBoost</td>
              <td className="py-3 px-4"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Completed</span></td>
              <td className="py-3 px-4 text-sm text-slate-600">94.2%</td>
              <td className="py-3 px-4 text-sm text-slate-500">12 mins ago</td>
            </tr>
            <tr className="border-b border-slate-100 hover:bg-slate-50">
              <td className="py-3 px-4 text-sm font-medium text-slate-900">#TR-8493</td>
              <td className="py-3 px-4 text-sm text-slate-600">Fraud Detection BERT</td>
              <td className="py-3 px-4"><span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Running</span></td>
              <td className="py-3 px-4 text-sm text-slate-600">-</td>
              <td className="py-3 px-4 text-sm text-slate-500">Just now</td>
            </tr>
            <tr className="hover:bg-slate-50">
              <td className="py-3 px-4 text-sm font-medium text-slate-900">#TR-8491</td>
              <td className="py-3 px-4 text-sm text-slate-600">Sales Forecast LSTM</td>
              <td className="py-3 px-4"><span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">Failed</span></td>
              <td className="py-3 px-4 text-sm text-slate-600">-</td>
              <td className="py-3 px-4 text-sm text-slate-500">1 hr ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Dashboard;
