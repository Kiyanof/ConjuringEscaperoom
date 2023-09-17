import React, { useState, DragEvent } from 'react';

interface DragAndDropFileUploadProps {
  onFileUpload?: (file: FileList) => Promise<void> | undefined;
  onFileInfo?: Function;
}

const DragAndDropFileUpload: React.FC<DragAndDropFileUploadProps> = ({ onFileUpload, onFileInfo }) => {
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {

          // Call the onFileUpload callback with the extracted file info
          if (onFileUpload) {
            onFileUpload(files);
          }
    }
  };

  const handleClick = () => {
    // When the area is clicked, trigger the file input click
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'audio/*'; // Accept all audio and video formats
    fileInput.multiple = true;
    fileInput.onchange = (event) => {
      const inputElement = event.target as HTMLInputElement;
      if (inputElement?.files && inputElement.files.length > 0) {
        const file = inputElement.files;
        // Call the onFileUpload callback with the selected file
        if (onFileUpload) {
          onFileUpload(file);
        }
      }
    };
    fileInput.click();
  };
  

  return (
    <div className='p-2 border border-slate-200 dark:border-indigo-900 '>
      <div
        className={`transition-all ease-in-out duration-200 p-2 border-4 border-dashed cursor-pointer hover:bg-slate-200 dark:hover:bg-indigo-900  border-slate-200 dark:border-indigo-800 min-h-[90px] items-center flex flex-row  rounded-lg w-full drag-and-drop ${dragging ? 'dragging  ' : ''}`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <h6 className='text-center w-full'>{dragging ? 'اینجا رها کنید' : 'فایل خود را اینجا رها کنید یا کلیک کنید'}</h6>
      </div>
    </div>
  );
};

export default DragAndDropFileUpload;
