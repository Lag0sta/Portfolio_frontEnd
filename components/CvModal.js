import { useState } from "react";
import { useLockBodyScroll } from "@uidotdev/usehooks";

import MsgModal from "./MsgModal";

const CvModal = ({ isModalOpen, onClose, closeModal }) => {
    const cvUrl = './assets/img/CV_LR_2025.jpg'
    const filename = 'CV_LR_2025.jpg'
    const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)
  

    const handleCloseModal = () => {
      closeModal(false)
    }
    const handleDownloadModal = () => {
      setIsDownloadModalOpen(true)
    
      }

     
  useLockBodyScroll();

    return (
      <div className="border" aria-modal="true">
         {isModalOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-60 z-50 backdrop-filter backdrop-blur-sm" />
      )}
        <div className="fixed h-[90%] w-[90%] z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-evenly items-center pointer-events-auto bg-black"
             style={{ boxShadow: `0 0 0 0.75px #222, 0 0 0 1.5px #333, 0 0 0 2.25px #444, 0 0 0 3px #555, 0 0 0 3.75px #666` }}>
          {isModalOpen && (
            <div className="portrait:h-[14%] landscape:h-[30%] w-full bg-black border-b-2 border-white pt-5">
              <div className="  bg-black flex justify-end align-center mr-4">
                <button className=" mr-4 ml-4 cursor-pointer bg-gray-400 text-white hover:bg-white hover:text-black"
                        onClick={handleDownloadModal}
                >
                  Download
                </button>
                <button className="mr-4 cursor-pointer bg-gray-400 text-white hover:bg-white hover:text-black"
                        onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          )}
          {isModalOpen && (
            <div className="h-[screen] w-[100%] overflow-y-auto">
              <div className="mt-1 w-[100%] flex justify-center">
                <img
                  src='./assets/img/CV_LR_2025.jpg'
                  className=" max-w-[100%] w-[60%] "
                />
              </div>
            </div>
          )}
          {isDownloadModalOpen &&(
            <MsgModal isDownloadModalOpen={isDownloadModalOpen}
                      setIsDownloadModalOpen={setIsDownloadModalOpen}/>
          )}
        </div>
      </div>
    );
  };
  
  export default CvModal;