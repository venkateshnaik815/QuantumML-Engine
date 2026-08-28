import { useState, useRef } from 'react';
import { Upload, FileType, CheckCircle, Loader2 } from 'lucide-react';
import { mlApi } from '../api/client';

const Datasets = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<{name: string, size: string}[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    
    // Simulate upload delay
    setTimeout(() => {
      setUploadedFiles(prev => [...prev, { name: file.name, size: (file.size / 1024 / 1024).toFixed(2) + ' MB' }]);
      setIsUploading(false);
    }, 2000);
    
    // In production:
    // const formData = new FormData();
    // formData.append('file', file);
    // await mlApi.post('/datasets/1/upload', formData);
  };

  return (
    <div className="space-y-6 animate-in fade-in">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
          <Upload size={32} />
        </div>
        <h2 className="text-xl font-bold text-slate-800 mb-2">Upload Dataset</h2>
        <p className="text-slate-500 max-w-md mx-auto mb-6">
          Upload CSV, JSON, or Parquet files to start preprocessing your data for machine learning models.
        </p>
        
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept=".csv,.json,.parquet" 
          onChange={handleFileUpload} 
        />
        
        <button 
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-sm flex items-center gap-2 mx-auto transition-all disabled:opacity-70"
        >
          {isUploading ? <Loader2 size={18} className="animate-spin" /> : <Upload size={18} />}
          {isUploading ? 'Uploading Data...' : 'Browse Files'}
        </button>
      </div>

      {uploadedFiles.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-5 border-b border-slate-100">
            <h3 className="text-lg font-bold text-slate-800">Available Datasets</h3>
          </div>
          <div className="divide-y divide-slate-100">
            {uploadedFiles.map((f, i) => (
              <div key={i} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
                    <FileType size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-800">{f.name}</h4>
                    <p className="text-xs text-slate-500">{f.size} • Ready for preprocessing</p>
                  </div>
                </div>
                <button className="px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100">
                  Preprocess
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Datasets;
