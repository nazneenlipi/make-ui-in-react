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

const Test7 = () => {
  const [activeTab, setActiveTab] = useState("description");

  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  const pageUrl = "https://example.com/dashboard";

  const tabs = [
    { label: "Description", key: "description", icon: <AlignLeft size={16} /> },
    { label: "Video", key: "video", icon: <Film size={16} /> },
    { label: "Page URL", key: "page url", icon: <Link2 size={16} /> },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      {/* Gradient Banner */}
      <div className="rounded-3xl p-8 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-white flex justify-between items-center shadow-2xl">
        <div>
          <h2 className="text-3xl font-bold tracking-wide mb-2">
            TestRun Title
          </h2>
          <p className="text-sm text-white/90">
            A brief overview of the test scenario and its purpose.
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex justify-end">
            <span className="bg-white/40 px-4 py-1 rounded-full text-sm font-semibold">
              Test #784
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <SmartButton
              label="Approve"
              icon={<Check size={16} />}
              color="blue"
            />
            <SmartButton label="Reject" icon={<X size={16} />} color="red" />
            <SmartButton
              label="Skip"
              icon={<SkipForward size={16} />}
              color="blue"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="lg:w-1/3 space-y-6">
          <div className="space-y-3 text-sm text-gray-700">
            <DetailItem
              icon={<Server size={14} />}
              label="Platform"
              value="Admin Dashboard"
            />
            <DetailItem
              icon={<CircleDot size={14} />}
              label="Status"
              value="Pending"
              badgeColor="yellow"
            />
            <DetailItem
              icon={<Zap size={14} />}
              label="Priority"
              value="High"
              badgeColor="red"
            />
            <DetailItem
              icon={<Globe size={14} />}
              label="Web URL"
              value={
                <a
                  href={pageUrl}
                  className="underline text-indigo-600"
                  target="_blank"
                >
                  Visit Page
                </a>
              }
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:flex-1">
          {/* Tabs */}
          <div className="flex gap-4 mb-4 border-b">
            {tabs.map((tab) =>
              (tab.key === "video" && !videoUrl) ||
              (tab.key === "page url" && !pageUrl) ? null : (
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
                This test ensures that only users with appropriate roles (e.g.,
                admin, editor) can access dashboard pages. It also checks visual
                feedback and redirect behavior for restricted roles.
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
  );
};

// Detail info item
const DetailItem = ({ icon, label, value, badgeColor }) => (
  <div className="flex items-center gap-2">
    <div className="text-gray-500">{icon}</div>
    <span className="font-medium">{label}:</span>
    {badgeColor ? (
      <span
        className={`px-2 py-0.5 rounded-full text-xs font-semibold bg-${badgeColor}-100 text-${badgeColor}-700`}
      >
        {value}
      </span>
    ) : (
      <span className="text-gray-800">{value}</span>
    )}
  </div>
);

// Button component
const SmartButton = ({ label, icon, color }) => (
  <button
    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium shadow-sm bg-${color}-100 text-${color}-700 hover:bg-${color}-200 transition-all`}
  >
    {icon}
    {label}
  </button>
);

export default Test7;
