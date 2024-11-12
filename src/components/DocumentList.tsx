import React from 'react';
import { FileText, Trash2, ExternalLink, AlertCircle, CheckCircle, Loader } from 'lucide-react';
import { useStore } from '../store/useStore';

export const DocumentList = () => {
  const documents = useStore((state) => state.documents);
  const removeDocument = useStore((state) => state.removeDocument);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return <Loader className="h-5 w-5 text-yellow-500 animate-spin" />;
      case 'ready':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <ul className="divide-y divide-gray-200">
        {documents.map((doc) => (
          <li key={doc.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center min-w-0 flex-1">
                <FileText className="h-10 w-10 text-gray-400" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {doc.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(doc.uploadedAt).toLocaleDateString()} · {(doc.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 ml-4">
                {getStatusIcon(doc.status)}
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
                <button
                  onClick={() => removeDocument(doc.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </li>
        ))}
        {documents.length === 0 && (
          <li className="p-4 text-center text-gray-500">
            No documents uploaded yet
          </li>
        )}
      </ul>
    </div>
  );
};