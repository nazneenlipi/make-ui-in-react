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

const Test5 = () => {
  const [activeTab, setActiveTab] = useState("description");

  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  const pageUrl = "https://example.com/dashboard";

  const tabs = [
    { label: "Description", key: "description", icon: <AlignLeft size={16} /> },
    { label: "Video", key: "video", icon: <Film size={16} /> },
    { label: "Page URL", key: "page url", icon: <Link2 size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1f1c2c] to-[#928dab] py-12 px-4 sm:px-6 lg:px-8 text-white font-sans">
      
      {/* Glassy Header */}
      <div className="max-w-6xl mx-auto glass p-8 rounded-3xl shadow-xl backdrop-blur-md border border-white/10 relative overflow-hidden">
        <div className="relative z-10 flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight">🚀 TestRun Title</h2>
            <p className="mt-2 text-sm text-white/80">Brief scenario overview — role-based access control on dashboard pages.</p>
          </div>
          <span className="bg-white/10 px-4 py-1 rounded-full text-sm font-semibold border border-white/20">Test #784</span>
        </div>
      </div>

      {/* Main Body */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        
        {/* Left */}
        <div className="glass p-6 rounded-2xl space-y-5 border border-white/10 backdrop-blur-md shadow-md">
          <DetailItem icon={<Server size={16} />} label="Platform" value="Admin Dashboard" />
          <DetailItem icon={<CircleDot size={16} />} label="Status" value="Pending" badgeColor="yellow" />
          <DetailItem icon={<Zap size={16} />} label="Priority" value="High" badgeColor="red" />
          <DetailItem
            icon={<Globe size={16} />}
            label="Web URL"
            value={<a href={pageUrl} className="underline text-blue-300 hover:text-white" target="_blank">Visit Page</a>}
          />

          <div className="flex flex-wrap gap-3 pt-4">
            <GlassyButton label="Approve" icon={<Check size={16} />} glow="green" />
            <GlassyButton label="Reject" icon={<X size={16} />} glow="red" />
            <GlassyButton label="Skip" icon={<SkipForward size={16} />} glow="blue" />
          </div>
        </div>

        {/* Right - Tabs and Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tabs */}
          <div className="flex space-x-4 overflow-x-auto border-b border-white/10 relative">
            {tabs.map((tab) =>
              (tab.key === "video" && !videoUrl) || (tab.key === "page url" && !pageUrl)
                ? null
                : (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex items-center gap-2 pb-2 px-4 text-sm font-medium relative transition-all ${
                      activeTab === tab.key
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                    {activeTab === tab.key && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-pulse rounded-full" />
                    )}
                  </button>
                )
            )}
          </div>

          {/* Tab Content */}
          <div className="glass min-h-[180px] p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-md">
            {activeTab === "description" && (
              <p className="text-white/80 leading-relaxed">
                This test ensures that only users with appropriate roles (e.g., admin, editor) can access dashboard pages. It also checks redirect behavior for unauthorized users and whether the proper UI messages appear.
              </p>
            )}
            {activeTab === "video" && (
              <iframe
                className="w-full h-64 rounded-xl border border-white/10"
                src={videoUrl}
                title="Test video"
                allowFullScreen
              ></iframe>
            )}
            {activeTab === "page url" && (
              <a
                href={pageUrl}
                className="text-blue-300 underline hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                Go to linked page →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Detail item with glass styling
const DetailItem = ({ icon, label, value, badgeColor }) => (
  <div className="flex items-center gap-3 text-sm">
    <span className="text-white/70">{icon}</span>
    <span className="font-medium text-white">{label}:</span>
    {badgeColor ? (
      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold bg-${badgeColor}-600/20 text-${badgeColor}-300`}>
        {value}
      </span>
    ) : (
      <span className="text-white/80">{value}</span>
    )}
  </div>
);

// Button with glow effect
const GlassyButton = ({ label, icon, glow }) => (
  <button
    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-white/10 border border-white/20 backdrop-blur-md transition-all hover:shadow-[0_0_15px_0] hover:shadow-${glow}-400`}
  >
    {icon}
    {label}
  </button>
);

export default Test5;
