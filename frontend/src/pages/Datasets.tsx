import { useState, useRef } from 'react';
import { Upload, FileType, Database, Settings2, Trash2, Loader2, CheckCircle2 } from 'lucide-react';

const Datasets = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([
    { name: 'customer_churn_2023.csv', size: '45.2 MB', status: 'Ready', date: '2 hours ago', rows: '124,500' },
    { name: 'q3_sales_forecast_data.parquet', size: '1.2 GB', status: 'Preprocessing', date: '5 hours ago', rows: '4,500,000' },
    { name: 'user_behavior_logs.json', size: '840 KB', status: 'Ready', date: '1 day ago', rows: '8,420' }
  ]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setTimeout(() => {
      setUploadedFiles([{ 
        name: file.name, 
        size: (file.size / 1024 / 1024).toFixed(2) + ' MB', 
        status: 'Ready', 
        date: 'Just now',
        rows: 'Pending...'
      }, ...uploadedFiles]);
      setIsUploading(false);
    }, 1500);
  };

  return (
    <div className="space-y-6 animate-in fade-in">
      {/* Upload Header */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
            <Database size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Dataset Manager</h2>
            <p className="text-slate-500">Upload CSV, JSON, or Parquet files to start preprocessing.</p>
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <input type="file" ref={fileInputRef} className="hidden" accept=".csv,.json,.parquet" onChange={handleFileUpload} />
          <button 
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-sm flex items-center gap-2 transition-all disabled:opacity-70"
          >
            {isUploading ? <Loader2 size={18} className="animate-spin" /> : <Upload size={18} />}
            {isUploading ? 'Uploading Data...' : 'Upload New Dataset'}
          </button>
        </div>
      </div>

      {/* Dataset List */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
          <h3 className="text-lg font-bold text-slate-800">Available Datasets ({uploadedFiles.length})</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-slate-100">
                <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">File Name</th>
                <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Size & Rows</th>
                <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Uploaded</th>
                <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {uploadedFiles.map((f, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
                        <FileType size={20} />
                      </div>
                      <span className="text-sm font-medium text-slate-800">{f.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="text-sm font-medium text-slate-700">{f.size}</div>
                    <div className="text-xs text-slate-400">{f.rows} rows</div>
                  </td>
                  <td className="py-4 px-6">
                    {f.status === 'Ready' ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200">
                        <CheckCircle2 size={14} /> Ready
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full border border-amber-200">
                        <Loader2 size={14} className="animate-spin" /> Preprocessing
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-500">{f.date}</td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Preprocess">
                        <Settings2 size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                        <Trash2 size={18} />
                      </button>
                    </div>
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
export default Datasets;
