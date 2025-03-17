import React, { useState } from "react";
import {
  Check,
  Copy,
  Delete,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Test = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="relative max-w-3xl mx-auto mt-10">
      {/* Left Icon */}
      <ChevronLeft
        size={42}
        className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-gray-800"
      />

      {/* Card Container */}
      <div className="relative">
        {/* Header */}
        <div className="bg-gray-50 px-5 py-1 flex items-center border my-3 rounded-3xl">
          {/* Action Buttons */}
          <div className="flex justify-start gap-2 py-5 flex-1">
            <button className="px-3 py-2 text-red-600 hover:text-gray-900 border rounded-full bg-red-100 hover:bg-red-600 flex gap-1 text-sm">
              <X size={19} /> Reject
            </button>
            <button className="px-5 py-2 text-green-600 bg-green-100 rounded-full hover:bg-green-600 hover:text-black border flex gap-1 text-sm">
              <Check size={19} /> Accept
            </button>
          </div>

          {/* Title Centered */}
          <h2 className="text-xl font-semibold text-gray-900 flex-1 text-center">
            TestRun Title
          </h2>

          {/* Status */}
          <div className="flex-1 flex justify-end">
            <span className="bg-gray-200 w-28 px-4 py-1 rounded-full text-sm font-medium text-gray-800 flex items-center gap-2 shadow-md">
              <span className="font-bold text-xl bg-gray-50 rounded-full px-2.5 py-0.5 text-gray-900 shadow">
                6
              </span>
              <span className="text-gray-600">/ 12</span>
            </span>
          </div>
        </div>
        <div className="bg-gray-50 rounded-2xl border">
          {/* Details */}
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-gray-800 text-xl font-medium">
                ( #1234 )
              </span>
              <p className="text-gray-700 text-xl font-semibold leading-relaxed">
                Check if user roles and permissions are applied correctly.
              </p>
            </div>
            <Copy size={18} className="text-blue-500 cursor-pointer" />
          </div>

          {/* Info Section */}
          <div className="grid grid-cols-4 text-center bg-gray-100/90 border">
            <div className="p-3 border-r">
              <p className="text-sm font-medium text-gray-800">Platform</p>
              <span className="text-xs px-2 py-1 rounded-md bg-blue-100 text-blue-600 border border-blue-300 mt-2 inline-block">
                MOBILE
              </span>
            </div>
            <div className="p-3 border-r">
              <p className="text-sm font-medium text-gray-800">Web URL</p>
              <span className="text-xs text-blue-500 cursor-pointer flex gap-1 justify-center items-center mt-2.5">
                <Eye size={20} className="text-blue-500" />
                <span className="mx-1">|</span>
                <Copy size={16} className="text-blue-500" />
              </span>
            </div>
            <div className="p-3 border-r">
              <p className="text-sm font-medium text-gray-800">Priority</p>
              <span className="text-xs px-2 py-1 rounded-md bg-red-100 text-red-600 border border-red-300 mt-2 inline-block">
                High
              </span>
            </div>
            <div className="p-3">
              <p className="text-sm font-medium text-gray-800">Status</p>
              <span className="text-xs px-2 py-1 rounded-md bg-green-100 text-green-600 border border-green-300 mt-2 inline-block">
                Active
              </span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-3 mt-5 mx-5">
            <button
              className={`w-32 h-11 text-center  text-sm transition-all ${
                activeTab === "description"
                  ? "bg-sky-100 px-3 py-1 rounded-md text-indigo-600 font-medium shadow-sm"
                  : "text-gray-600 hover:text-indigo-500"
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`w-32 h-11 text-center  text-sm transition-all ${
                activeTab === "video"
                  ? "bg-sky-100 px-3 py-1 rounded-md text-indigo-600 font-medium shadow-sm"
                  : "text-gray-600 hover:text-indigo-500"
              }`}
              onClick={() => setActiveTab("video")}
            >
              Video
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "description" ? (
              <div className="text-gray-700 text-center leading-relaxed space-y-5">
                <h3 className="text-xl font-bold">
                  This is the detailed description of the test run.
                </h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  sunt beatae, fuga illum et sit autem dolorum ad soluta numquam
                  accusantium distinctio magni iste veniam ut ipsa aperiam, cum
                  dicta maxime debitis! Voluptatum alias ullam, odio, commodi
                  sed repellendus officia exercitationem fuga molestiae nostrum
                  libero quisquam ex, saepe repellat architecto beatae. Autem
                  deleniti, est beatae cum eveniet dolorum dignissimos veniam
                  dolor molestiae et cumque quas nostrum porro quam mollitia,
                  esse tempora? Assumenda facere laborum expedita amet
                  aspernatur voluptatum voluptatibus. Quibusdam corporis quo
                  quam asperiores nostrum veniam placeat, ipsum aliquam sit ea
                  sequi, quisquam, ex molestias pariatur odio accusantium quod
                  esse!
                </p>
              </div>
            ) : (
              <div className="flex justify-center">
                <iframe
                  className="w-full h-64 rounded-lg shadow-sm"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Video"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Right Icon */}
      <ChevronRight
        size={42}
        className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-gray-800"
      />
    </div>
  );
};

export default Test;
