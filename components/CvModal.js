import { useLockBodyScroll } from "@uidotdev/usehooks";

const CvModal = ({ isModalOpen, onClose, closeModal }) => {
    const cvUrl = './assets/img/CV_LR_2025.jpg'
    const filename = 'CV_LR_2025.jpg'
  

    const handleCloseModal = () => {
      closeModal(false)
    }
    const handleDownload = () => {
        if (window.confirm('Are you sure you want to download my Curriculum Vitae?')) {
          const link = document.createElement('a');
          link.href = cvUrl;
          link.download = filename;
          link.click();
        }
    
      }
  // h-screen/2 md:h-60vh w-3/4 m-0 p-0 fixed -translate-y-[79%] -translate-x-[88%] z-50 bg-black ml-5 

  useLockBodyScroll();

    return (
      <div className="border">
         {isModalOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-60 z-50 backdrop-filter backdrop-blur-sm" />
      )}
        <div className="fixed h-[90%] w-[90%] z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-evenly items-center pointer-events-auto bg-black"
             style={{ boxShadow: `0 0 0 0.75px #222, 0 0 0 1.5px #333, 0 0 0 2.25px #444, 0 0 0 3px #555, 0 0 0 3.75px #666` }}>
          {isModalOpen && (
            <div className="portrait:h-[14%] landscape:h-[30%] w-full bg-black border-b-2 border-white pt-5">
              <div className="  bg-black flex justify-between align-center">
                <button className=" ml-4 cursor-pointer border-1 border-solid border-white bg-white text-black"
                        onClick={handleDownload}
                >
                  Download
                </button>
                <button className="mr-4 cursor-pointer border-1 border-solid border-white bg-white text-black"
                        onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          )}
          {isModalOpen && (
            <div className="h-screen w-[100%] overflow-y-auto">
              <div className="mt-1 w-[100%] flex justify-center">
                <img
                  src='./assets/img/CV_LR_2025.jpg'
                  className="w-auto h-auto "
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default CvModal;