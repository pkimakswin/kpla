"use client";

import { useState, useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { certificates } from '@/lib/data';
import { useParams, useRouter } from 'next/navigation';

export function ValidateClient() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string | undefined;

  const [inputValue, setInputValue] = useState(id || "");
  const [searchState, setSearchState] = useState<'idle' | 'empty' | 'not_found' | 'found'>('idle');
  const [result, setResult] = useState<typeof certificates[0] | null>(null);

  useEffect(() => {
    if (id) {
      const found = certificates.find(c => c.id === id);
      if (found) {
        setResult(found);
        setSearchState('found');
      } else {
        setResult(null);
        setSearchState('not_found');
      }
      setInputValue(id);
    } else {
      setSearchState('idle');
      setResult(null);
      setInputValue("");
    }
  }, [id]);

  const handleValidate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      setSearchState('empty');
      setResult(null);
      return;
    }
    router.push(`/validate/${inputValue.trim()}`);
  };

  return (
    <div className="min-h-[calc(100vh-80px-100px)] bg-gray-50 py-20 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-900">Certificate Validator</h1>
        <p className="text-center text-gray-600 mb-8 text-sm">
          Enter the Certificate ID to verify its authenticity and view details. Data is sourced from our official public records.
        </p>
        
        {(searchState === 'empty' || searchState === 'not_found') && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex justify-between items-center text-red-600">
            <span>{searchState === 'empty' ? 'Please enter a Certificate ID.' : 'Certificate not found.'}</span>
            <button onClick={() => setSearchState('idle')} className="text-red-400 hover:text-red-600">
              <X size={20} />
            </button>
          </div>
        )}

        <form className="space-y-6" onSubmit={handleValidate}>
          <div>
            <label htmlFor="certificateId" className="block text-sm font-medium text-gray-700 mb-1">
              Certificate ID
            </label>
            <input
              type="text"
              id="certificateId"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 outline-none bg-blue-50/30"
              placeholder="Enter Certificate ID (e.g., ACME12345)"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Validate Certificate
          </button>
        </form>

        {searchState === 'idle' && (
          <div className="mt-8 p-6 bg-gray-50 border border-gray-100 rounded-md text-center text-gray-500 text-sm">
            Enter a certificate ID to begin validation.
          </div>
        )}

        {searchState === 'found' && result && (
          <div className="mt-8 p-6 border border-gray-200 rounded-lg">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-blue-700">{result.type}</h2>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${result.status === 'Valid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {result.status}
              </span>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-gray-900">Certificate ID:</p>
                <p className="text-gray-600">{result.id}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Holder Name:</p>
                <p className="text-gray-600">{result.holder}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Issue Date:</p>
                <p className="text-gray-600">{result.issueDate}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Expiry Date:</p>
                <p className="text-gray-600">{result.expiryDate}</p>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900 mb-3">Certificate Document:</p>
                {result.link === '(((MENYUSUL)))' ? (
                  <button disabled className="bg-gray-300 text-gray-600 font-medium py-2 px-4 rounded-md cursor-not-allowed flex items-center space-x-2">
                    <span>Document Pending (Menyusul)</span>
                  </button>
                ) : (
                  <a
                    href={result.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex bg-blue-600 text-white font-medium py-2.5 px-4 rounded-md hover:bg-blue-700 transition-colors items-center space-x-2 mb-4"
                  >
                    <ExternalLink size={18} />
                    <span>View Certificate (PDF/Image)</span>
                  </a>
                )}
                <p className="text-xs text-gray-500 mb-4">
                  The certificate document is hosted on Google Drive. Clicking the link will open it in a new tab.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
