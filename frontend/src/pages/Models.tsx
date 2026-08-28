const Models = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 flex flex-col items-center justify-center text-center h-96">
      <div className="w-16 h-16 bg-purple-100 text-purple-500 rounded-full flex items-center justify-center text-2xl mb-4">
        🧠
      </div>
      <h2 className="text-xl font-bold text-slate-800 mb-2">Model Registry</h2>
      <p className="text-slate-500 max-w-md mb-6">
        Manage your trained models, track their performance metrics, and deploy them as real-time inference endpoints.
      </p>
      <button className="px-6 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 shadow-md">
        Deploy Model
      </button>
    </div>
  );
};
export default Models;
