"use client";

import React from "react";
import useModalStore from "@/store/modal";

export const Modal: React.FC = () => {
  const { isVisible, content, hideModal } = useModalStore();

  return (
    <>
      {isVisible && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={hideModal}
        >
          <div
            className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {content}
            <button
              className="mt-4 w-full bg-red-500 text-white p-2 rounded"
              onClick={hideModal}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </>
  );
};
