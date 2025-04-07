import React, { useState } from "react";
import {
  Check,
  X,
  SkipForward,
  Film,
  Link2,
  AlignLeft,
  Globe,
  Server,
  Zap,
  CircleDot,
} from "lucide-react";

const Test6 = () => {
  const [activeTab, setActiveTab] = useState("description");

  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  const pageUrl = "https://example.com/dashboard";

  const tabs = [
    { label: "Description", key: "description", icon: <AlignLeft size={16} /> },
    { label: "Video", key: "video", icon: <Film size={16} /> },
    { label: "Page URL", key: "page url", icon: <Link2 size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8 text-gray-800 font-sans">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md border border-blue-100 shadow-lg p-8 rounded-3xl">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900"> TestRun Title</h2>
            <p className="mt-2 text-sm text-gray-600">Overview of your test scenario with role management.</p>
          </div>
          <span className="bg-pink-100 px-4 py-1 rounded-full text-sm font-semibold text-pink-700 border border-pink-200">Test #784</span>
        </div>
      </div>

      {/* Main Body */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        
        {/* Left Panel */}
        <div className="bg-white border border-blue-100 p-6 rounded-2xl shadow-md backdrop-blur-sm">
          <DetailItem icon={<Server size={16} />} label="Platform" value="Admin Dashboard" />
          <DetailItem icon={<CircleDot size={16} />} label="Status" value="Pending" badgeColor="yellow" />
          <DetailItem icon={<Zap size={16} />} label="Priority" value="High" badgeColor="rose" />
          <DetailItem
            icon={<Globe size={16} />}
            label="Web URL"
            value={<a href={pageUrl} className="underline text-blue-500 hover:text-blue-700" target="_blank">Visit Page</a>}
          />

          <div className="flex flex-wrap gap-3 pt-4">
            <SoftButton label="Approve" icon={<Check size={16} />} color="green" />
            <SoftButton label="Reject" icon={<X size={16} />} color="rose" />
            <SoftButton label="Skip" icon={<SkipForward size={16} />} color="blue" />
          </div>
        </div>

        {/* Right Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tabs */}
          <div className="flex space-x-4 overflow-x-auto border-b border-blue-100 relative">
            {tabs.map((tab) =>
              (tab.key === "video" && !videoUrl) || (tab.key === "page url" && !pageUrl)
                ? null
                : (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center gap-2 pb-2 px-4 text-sm font-medium transition-all relative ${
                      activeTab === tab.key
                        ? "text-blue-700"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                    {activeTab === tab.key && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 animate-pulse rounded-full" />
                    )}
                  </button>
                )
            )}
          </div>

          {/* Tab Content */}
          <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm backdrop-blur-md">
            {activeTab === "description" && (
              <p className="text-gray-700 leading-relaxed">
                This test ensures that only users with the correct roles (like Admin or Manager) can access the dashboard. It also checks if unauthorized users get redirected and shown the right error message.
              </p>
            )}
            {activeTab === "video" && (
              <iframe
                className="w-full h-64 rounded-xl border border-blue-100"
                src={videoUrl}
                title="Test video"
                allowFullScreen
              ></iframe>
            )}
            {activeTab === "page url" && (
              <a
                href={pageUrl}
                className="text-blue-600 underline hover:text-blue-800"
                target="_blank"
                rel="noreferrer"
              >
                View page →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Detail Item
const DetailItem = ({ icon, label, value, badgeColor }) => {
  const colorMap = {
    yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
    rose: "bg-rose-100 text-rose-700 border-rose-200",
  };

  return (
    <div className="flex items-center gap-3 text-sm py-1">
      <span className="text-gray-500">{icon}</span>
      <span className="font-medium text-gray-700">{label}:</span>
      {badgeColor ? (
        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${colorMap[badgeColor]}`}>
          {value}
        </span>
      ) : (
        <span className="text-gray-600">{value}</span>
      )}
    </div>
  );
};

// Soft Button
const SoftButton = ({ label, icon, color }) => {
  const bgColor = {
    green: "bg-green-100 text-green-800 hover:bg-green-200",
    rose: "bg-rose-100 text-rose-800 hover:bg-rose-200",
    blue: "bg-blue-100 text-blue-800 hover:bg-blue-200",
  };

  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${bgColor[color]}`}
    >
      {icon}
      {label}
    </button>
  );
};

export default Test6;
