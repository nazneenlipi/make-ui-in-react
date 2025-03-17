import React, { useState } from "react";
import {
  Check,
  Copy,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Test = () => {
  const [activeTab, setActiveTab] = useState("description");
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  const pageUrl = "";

  return (
    <div className="max-w-3xl mx-auto mt-5 p-5">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 relative">
        {/* Header */}
        <div className="bg-gray-50 p-5 flex justify-between items-center border-b">
          <h2 className="text-xl font-semibold text-gray-900">TestRun Title</h2>
          <span className="bg-gray-200 px-3 py-1.5 rounded-full text-sm font-medium text-gray-800 flex items-center gap-2 shadow-md">
            <span className="font-bold text-xl bg-gray-50 rounded-full px-2.5 py-0.5 text-gray-900 shadow">6</span>
            <span className="text-gray-600">/ 12</span>
          </span>
        </div>

        {/* Details */}
        <div className="p-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-xl font-medium">(#1234)</span>
            <p className="text-gray-700 text-xl font-semibold">Check if user roles and permissions are applied correctly.</p>
          </div>
          <Copy size={18} className="text-blue-500 cursor-pointer" />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 p-5 bg-gray-50 border-t">
          <button className="text-sm px-4 py-2 text-red-600 border border-red-600 rounded-lg bg-red-100 hover:bg-red-600 hover:text-white flex gap-1">
            <X size={18} /> Reject
          </button>
          <button className="text-sm px-4 py-2 text-green-600 border border-green-600 rounded-lg bg-green-100 hover:bg-green-600 hover:text-white flex gap-1">
            <Check size={18} /> Accept
          </button>
        </div>

        {/* Info Section */}
        <div className="relative bg-gray-100 border-b py-2 px-5 flex justify-between items-center">
          <ChevronLeft size={30} className="text-gray-500 cursor-pointer hover:text-gray-800" />
          <div className="grid grid-cols-4 text-center w-full">
            <InfoBlock title="Platform" content="MOBILE" color="blue" />
            <InfoBlock title="Web URL" icon={<Eye size={20} className="text-blue-500" />} />
            <InfoBlock title="Priority" content="High" color="red" />
            <InfoBlock title="Status" content="Active" color="green" />
          </div>
          <ChevronRight size={30} className="text-gray-500 cursor-pointer hover:text-gray-800" />
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mt-5 px-5  border-b">
          <TabButton label="Description" activeTab={activeTab} setActiveTab={setActiveTab} />
          {videoUrl && <TabButton label="Video" activeTab={activeTab} setActiveTab={setActiveTab} />}
          {pageUrl && <TabButton label="Page URL" activeTab={activeTab} setActiveTab={setActiveTab} />}
        </div>

        {/* Tab Content */}
        <div className="p-6">
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
  <div className="p-3 border-r-2 border-gray-300 last:border-r-0">
    <p className="text-sm font-medium text-gray-800">{title}</p>
    {content ? (
      <span className={`text-xs px-2 py-1 rounded-md bg-${color}-100 text-${color}-600 border border-${color}-300 mt-2 inline-block`}>
        {content}
      </span>
    ) : (
      <span className="text-xs text-blue-500 cursor-pointer flex gap-1 justify-center items-center mt-2.5">
        {icon} <Copy size={16} className="text-blue-500" />
      </span>
    )}
  </div>
);

const TabButton = ({ label, activeTab, setActiveTab }) => (
  <button
    className={`w-24 text-center py-3 text-sm transition-all ${
      activeTab === label.toLowerCase()
        ? "border-b-2 border-blue-600 px-3  text-indigo-600 font-medium "
        : "text-gray-600 hover:text-indigo-500  "
    }`}
    onClick={() => setActiveTab(label.toLowerCase())}
  >
    {label}
  </button>
);

const DescriptionContent = () => (
  <div className="text-gray-700 text-center leading-relaxed space-y-5">
    <h3 className="text-xl font-bold">This is the detailed description of the test run.</h3>
    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sunt beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sunt beatae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sunt beatae...</p>
  </div>
);

const VideoContent = ({ url }) => (
  <div className="flex justify-center">
    <iframe className="w-full h-64 rounded-lg shadow-sm" src={url} title="Video" allowFullScreen></iframe>
  </div>
);

const PageContent = ({ url }) => (
  <div className="text-center">
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
      Click here to visit the page
    </a>
  </div>
);

export default Test;
