import React, { useState } from "react";
import { Check, X, SkipForward, Film, Link2, AlignLeft } from "lucide-react";

const Test4 = () => {
  const [activeTab, setActiveTab] = useState("description");
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  const pageUrl = "";

  const tabs = [
    { label: "Description", key: "description", icon: <AlignLeft size={16} /> },
    { label: "Video", key: "video", icon: <Film size={16} /> },
    { label: "Page URL", key: "page url", icon: <Link2 size={16} /> },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Card Wrapper */}
      <div className="bg-white/60 backdrop-blur-md border border-gray-200 shadow-xl rounded-3xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 p-6 flex justify-between items-center text-white relative">
          <h2 className="text-2xl font-bold tracking-wide">🚀 Permission Test Case</h2>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Test #784</span>
        </div>

        {/* Content */}
        <div className="p-6 lg:flex lg:gap-10">
          {/* Left Column: Actions */}
          <div className="space-y-4 lg:w-1/3 mb-6 lg:mb-0">
            <p className="text-gray-700 text-sm leading-relaxed">
              Check if the admin dashboard permission model correctly restricts views based on the role.
            </p>
            <div className="flex gap-3">
              <SmartButton label="Approve" icon={<Check size={16} />} color="green" />
              <SmartButton label="Reject" icon={<X size={16} />} color="red" />
              <SmartButton label="Skip" icon={<SkipForward size={16} />} color="blue" />
            </div>
          </div>

          {/* Right Column: Tabs & Content */}
          <div className="lg:flex-1">
            <div className="flex gap-4 border-b border-gray-300 mb-4">
              {tabs.map((tab) =>
                (tab.key === "video" && !videoUrl) || (tab.key === "page url" && !pageUrl)
                  ? null
                  : (
                    <button
                      key={tab.key}
                      className={`flex items-center gap-1 pb-2 px-2 text-sm font-medium transition-all border-b-2 ${
                        activeTab === tab.key
                          ? "text-indigo-600 border-indigo-600"
                          : "text-gray-500 border-transparent hover:text-indigo-500"
                      }`}
                      onClick={() => setActiveTab(tab.key)}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  )
              )}
            </div>

            {/* Tab Content */}
            <div className="min-h-[160px] text-sm text-gray-700">
              {activeTab === "description" && (
                <p>
                  This test ensures that only users with appropriate roles (e.g., admin, editor) can access dashboard pages. It also checks visual feedback and redirect behavior for restricted roles.
                </p>
              )}
              {activeTab === "video" && (
                <iframe
                  className="w-full h-64 rounded-xl border"
                  src={videoUrl}
                  title="Test video"
                  allowFullScreen
                ></iframe>
              )}
              {activeTab === "page url" && (
                <a
                  href={pageUrl}
                  className="text-indigo-600 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit linked page
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Smart action button
const SmartButton = ({ label, icon, color }) => (
  <button
    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium shadow-md bg-${color}-100 text-${color}-700 hover:bg-${color}-200 transition-all`}
  >
    {icon}
    {label}
  </button>
);

export default Test4;
