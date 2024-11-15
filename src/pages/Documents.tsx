import React from 'react';
import { DocumentUpload } from '../components/DocumentUpload';
import { DocumentList } from '../components/DocumentList';

export const Documents = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Documents
          </h2>
        </div>
      </div>
      
      <div className="mt-8 space-y-8">
        <DocumentUpload />
        <DocumentList />
      </div>
    </div>
  );
};