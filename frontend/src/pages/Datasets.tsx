const Datasets = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 flex flex-col items-center justify-center text-center h-96">
      <div className="w-16 h-16 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center text-2xl mb-4">
        📁
      </div>
      <h2 className="text-xl font-bold text-slate-800 mb-2">Dataset Manager</h2>
      <p className="text-slate-500 max-w-md mb-6">
        Upload CSV, JSON, or connect to an external SQL database to start preprocessing your data for ML models.
      </p>
      <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-md">
        Upload New Dataset
      </button>
    </div>
  );
};
export default Datasets;
