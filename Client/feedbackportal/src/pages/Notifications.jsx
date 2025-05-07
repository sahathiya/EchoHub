import React from "react";
import { Clock } from "lucide-react";
import clsx from "clsx";
import { X } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import {
  clearNotifications,
  removeNotification,
} from "../features/auth/userSlice";

function Notifications({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.user.user);
  const notifications = useSelector((state) => state.user.notifications);

  const userNotifications = notifications?.filter(
    (note) => note.userId === activeUser?._id
  );
  console.log("notifications", notifications);
  const handleClear = () => {
    dispatch(clearNotifications(activeUser._id));
  };
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0    backdrop-blur-md " onClick={onClose} />
      )}

      <div
        className={clsx(
          "font-nunito    fixed top-0 right-0 w-full sm:w-96 h-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out",
          {
            "translate-x-0": isOpen,
            "translate-x-full": !isOpen,
          }
        )}
      >
        <div className="p-6 overflow-y-auto h-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">NOTIFICATIONS</h2>

            <button onClick={handleClear}>
              <p className="text-gray-500 text-sm cursor-pointer">Clear all</p>
            </button>
            <button onClick={onClose}>
              <X className="w-6 h-6 text-gray-500 hover:text-gray-700" />
            </button>
          </div>

          <div className="space-y-4">
            {Array.isArray(userNotifications) &&
            userNotifications.length > 0 ? (
              userNotifications.map((note, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row justify-between border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start w-full space-x-4">
                    <button
                      className="text-gray-500 hover:text-black text-2xl font-bold self-start"
                      onClick={() => dispatch(removeNotification(index))}
                    >
                      ×
                    </button>

                    <div className="flex-1">
                      <span className="inline-block text-white text-xs font-semibold px-3 py-1 rounded-full bg-green-600 mb-2 shadow">
                        Response from Admin
                      </span>

                      <h3 className="font-semibold text-lg text-gray-800 mb-1">
                        {note.message}
                      </h3>

                      <p className="text-sm text-gray-700 mb-2 line-clamp-4">
                        {note.userMessage}
                      </p>

                      <p className="text-sm font-medium text-green-700 mb-4">
                        {note.response}
                      </p>

                      <div className="flex items-center text-gray-500 text-xs">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{note.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No notifications found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Notifications;
