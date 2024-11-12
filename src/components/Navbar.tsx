import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, MessageSquare, User } from 'lucide-react';
import { useStore } from '../store/useStore';

export const Navbar = () => {
  const user = useStore((state) => state.user);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link
              to="/"
              className="flex items-center px-2 py-2 text-gray-900 hover:text-indigo-600"
            >
              <FileText className="h-6 w-6 mr-2" />
              <span className="font-semibold">DocuMind</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/documents"
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600"
            >
              <FileText className="h-5 w-5 mr-1" />
              Documents
            </Link>
            <Link
              to="/chat"
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600"
            >
              <MessageSquare className="h-5 w-5 mr-1" />
              Chat
            </Link>
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700">{user.name}</span>
                <User className="h-8 w-8 text-gray-400" />
              </div>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};