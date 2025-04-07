import React, { useState } from "react";
import {
  Check,
  Copy,
  Eye,
  X,
  SkipForward,
  Info,
  Layers,
  Globe,
} from "lucide-react";

const Test3 = () => {
  const [activeTab, setActiveTab] = useState("description");
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  const pageUrl = "";

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="rounded-3xl shadow-xl border bg-white overflow-hidden">
        {/* Gradient Header */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 flex justify-between items-center text-white">
          <div className="text-xl font-bold flex items-center gap-2">
            <Layers size={20} />
            Test Case #4321
          </div>
          <div className="flex gap-2 text-sm">
            <Badge color="white" icon={<Globe size={14} />}>Mobile</Badge>
            <Badge color="yellow" icon={<Info size={14} />}>High Priority</Badge>
            <Badge color="green" icon={<Check size={14} />}>Active</Badge>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-8">
          {/* Left: Actions */}
          <div className="flex flex-col gap-4 w-full lg:max-w-xs">
            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-gray-800">
                User Permission Test
              </h2>
              <p className="text-sm text-gray-500">
                Ensure user roles are properly restricted and displayed.
              </p>
            </div>

            <div className="flex gap-3 pt-4">
              <ActionBtn label="Accept" icon={<Check size={16} />} color="green" />
              <ActionBtn label="Reject" icon={<X size={16} />} color="red" />
              <ActionBtn label="Skip" icon={<SkipForward size={16} />} color="blue" />
            </div>
          </div>

          {/* Right: Tab Content */}
          <div className="flex-1">
            {/* Tabs */}
            <div className="flex gap-6 border-b mb-4">
              {["Description", "Video", "Page URL"].map((tab) => {
                const tabKey = tab.toLowerCase();
                const showTab =
                  tabKey !== "video" || videoUrl
                    ? tabKey !== "page url" || pageUrl
                    : false;
                return (
                  showTab && (
                    <button
                      key={tab}
                      className={`pb-2 text-sm font-medium transition-all border-b-2 ${
                        activeTab === tabKey
                          ? "text-indigo-600 border-indigo-600"
                          : "text-gray-500 border-transparent hover:text-indigo-500"
                      }`}
                      onClick={() => setActiveTab(tabKey)}
                    >
                      {tab}
                    </button>
                  )
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="min-h-[160px]">
              {activeTab === "description" && (
                <p className="text-sm text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  officiis labore minus illum ad mollitia hic porro?
                </p>
              )}
              {activeTab === "video" && (
                <iframe
                  className="w-full h-64 rounded-xl border"
                  src={videoUrl}
                  allowFullScreen
                  title="Test video"
                ></iframe>
              )}
              {activeTab === "page url" && (
                <a
                  href={pageUrl}
                  className="text-indigo-600 underline text-sm"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit live page
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Badge Component
const Badge = ({ children, color = "gray", icon }) => (
  <span
    className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-${color}-100 text-${color}-800`}
  >
    {icon}
    {children}
  </span>
);

// Action Button
const ActionBtn = ({ label, icon, color }) => (
  <button
    className={`flex items-center gap-2 px-4 py-2 rounded-full bg-${color}-100 text-${color}-700 text-sm hover:bg-${color}-200 transition-all`}
  >
    {icon}
    {label}
  </button>
);

export default Test3;
