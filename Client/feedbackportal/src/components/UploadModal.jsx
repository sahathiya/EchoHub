import React, { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { toast } from "react-toastify";
import { setProfileImage } from "../features/auth/userSlice";
import { useDispatch } from "react-redux";

const UploadModal = ({ isOpen, onClose, onUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);
const dispatch=useDispatch()
  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleUpload =async () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("profileImage", selectedImage);

    //   onUpload(formData);
    const response=await axiosInstance.patch(`/api/auth/upload`, formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })

        console.log("response of image upload",response);
       dispatch(setProfileImage(response.data.imageUrl))
        toast.success(response.data.message)
        
    }
  };

  if (!isOpen) return null;

  return (
    <div className=" font-nunito fixed inset-0  backdrop-blur-md z-50 flex justify-center items-center transition-opacity">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md mx-4 relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold text-center mb-4 text-gray-800">Upload Profile Image</h2>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full mb-4"
        />

        {selectedImage && (
          <div className="mb-4 flex justify-center">
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Preview"
              className="w-32 h-32 object-cover rounded-full border-2 border-gray-300"
            />
          </div>
        )}

        <button
          onClick={handleUpload}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default UploadModal;
