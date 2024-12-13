// components/ShareButton.tsx
'use client';
import { useState } from 'react';
import { FaClipboardCheck } from "react-icons/fa6";

export default function ShareButton() {
    const [showToast, setShowToast] = useState(false);

    const handleShare = () => {
        const currentURL = window.location.href;

        navigator.clipboard.writeText(currentURL)
            .then(() => {
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
            })
            .catch((err) => {
                console.error('Failed to copy URL:', err);
            });
    };

    return (
        <div className="relative">
            <button
                className="dark:text-gray-300 hover:text-purple-900"
                onClick={handleShare}
                title="Copy page URL to clipboard"
            >
                Share
            </button>

            {/* Toast Notification */}
            {showToast && (


                <div id="toast-default" className="absolute flex items-center w-400px  bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-gray-800 text-white text-sm rounded-md shadow-lg transition-opacity duration-30" role="alert">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
                    <FaClipboardCheck />
                        <span className="sr-only">Copy icon</span>
                    </div>
                    <div className="ms-3 text-sm font-normal">Link copied to clipboard!</div>
                
                </div>



            )}
        </div>
    );
}