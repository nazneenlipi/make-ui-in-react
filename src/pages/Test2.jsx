import React, { useState } from "react";
import {
  Check,
  Copy,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  SkipForward,
} from "lucide-react";

const Test2 = () => {
  const [activeTab, setActiveTab] = useState("description");
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  const pageUrl = "";

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-50 to-white p-6 flex justify-between items-center border-b">
          <h2 className="text-2xl font-bold text-gray-800">🚀 TestRun Title</h2>
          <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 flex items-center gap-2 shadow-inner border">
            <span className="font-bold text-lg bg-indigo-100 text-indigo-700 rounded-full px-2.5 py-0.5 shadow-sm">6</span>
            <span className="text-gray-500">/ 12</span>
          </span>
        </div>

        {/* Test Details */}
        <div className="p-6 flex justify-between items-start gap-4">
          <div className="flex items-start gap-3">
            <span className="text-gray-500 text-lg font-medium">#1234</span>
            <p className="text-gray-700 font-semibold">
              Check if user roles and permissions are applied correctly.
            </p>
          </div>
          <Copy size={20} className="text-indigo-500 cursor-pointer hover:scale-110 transition-transform" />
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center gap-6 px-6 py-4 bg-gray-50 border-t">
          <ChevronLeft size={28} className="text-gray-500 hover:text-gray-800 cursor-pointer transition-colors" />
          <div className="flex gap-4">
            <ActionButton icon={<X size={18} />} label="Reject" color="red" />
            <ActionButton icon={<Check size={18} />} label="Accept" color="green" />
            <ActionButton icon={<SkipForward size={18} />} label="Skip" color="blue" />
          </div>
        </div>

        {/* Info Blocks */}
        <div className="bg-gray-100 px-6 py-3 border-t">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <InfoBlock title="Platform" content="MOBILE" color="blue" />
            <InfoBlock title="Web URL" icon={<Eye size={20} className="text-blue-500" />} />
            <InfoBlock title="Priority" content="High" color="red" />
            <InfoBlock title="Status" content="Active" color="green" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 px-6 mt-4 border-b">
          <TabButton label="Description" activeTab={activeTab} setActiveTab={setActiveTab} />
          {videoUrl && <TabButton label="Video" activeTab={activeTab} setActiveTab={setActiveTab} />}
          {pageUrl && <TabButton label="Page URL" activeTab={activeTab} setActiveTab={setActiveTab} />}
        </div>

        {/* Tab Content */}
        <div className="p-6 bg-white">
          {activeTab === "description" ? (
            <DescriptionContent />
          ) : activeTab === "video" ? (
            <VideoContent url={videoUrl} />
          ) : (
            <PageContent url={pageUrl} />
          )}
        </div>
      </div>
    </div>
  );
};

const InfoBlock = ({ title, content, color, icon }) => (
  <div className="p-3 bg-white rounded-xl shadow-sm">
    <p className="text-sm font-medium text-gray-700">{title}</p>
    {content ? (
      <span className={`text-xs px-3 py-1 rounded-full bg-${color}-100 text-${color}-600 border border-${color}-300 mt-2 inline-block`}>
        {content}
      </span>
    ) : (
      <span className="text-sm text-blue-500 cursor-pointer flex items-center justify-center gap-1 mt-2">
        {icon} <Copy size={16} className="text-blue-500" />
      </span>
    )}
  </div>
);

const TabButton = ({ label, activeTab, setActiveTab }) => (
  <button
    className={`text-sm pb-3 transition-all duration-200 ${
      activeTab === label.toLowerCase()
        ? "text-indigo-600 border-b-2 border-indigo-600 font-semibold"
        : "text-gray-500 hover:text-indigo-500"
    }`}
    onClick={() => setActiveTab(label.toLowerCase())}
  >
    {label}
  </button>
);

const ActionButton = ({ icon, label, color }) => (
  <button
    className={`flex items-center gap-1 px-4 py-2 text-sm border border-${color}-600 text-${color}-600 rounded-lg bg-white hover:bg-${color}-600 hover:text-white transition-all`}
  >
    {icon}
    {label}
  </button>
);

const DescriptionContent = () => (
  <div className="text-gray-700 text-center leading-relaxed space-y-4">
    <h3 className="text-xl font-bold">This is the detailed description of the test run.</h3>
    <p className="text-sm text-gray-600">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sunt beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sunt beatae...
    </p>
  </div>
);

const VideoContent = ({ url }) => (
  <div className="flex justify-center">
    <iframe
      className="w-full md:w-3/4 h-64 rounded-xl border shadow-md"
      src={url}
      title="Video"
      allowFullScreen
    ></iframe>
  </div>
);

const PageContent = ({ url }) => (
  <div className="text-center">
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
      Click here to visit the page
    </a>
  </div>
);

export default Test2;
