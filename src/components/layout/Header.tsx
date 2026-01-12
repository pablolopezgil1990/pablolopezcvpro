import React from "react";
import { ArrowLeft } from "lucide-react";

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  onBack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  title, 
  showBackButton = false, 
  onBack 
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#F9FAFB]/90 backdrop-blur-md border-b border-gray-200 px-4 py-4">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {showBackButton && onBack && (
          <button
            type="button"
            onClick={onBack}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Volver"
            title="Volver"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
        )}
        <div className="min-w-0 flex-1">
          <h1 className="text-lg font-bold text-gray-900 whitespace-normal break-words leading-snug">
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
};
