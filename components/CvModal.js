import styles from '../styles/CvModal.module.css'
const CvModal = ({ isOpen, onClose, onDownload }) => {

    const cvUrl = './assets/img/CV_LR_2025.jpg'
    const filename = 'CV_LR_2025.jpg'

    const handleDownload = () => {
        if (window.confirm('Are you sure you want to download my Curriculum Vitae?')) {
          const link = document.createElement('a');
          link.href = cvUrl;
          link.download = filename;
          link.click();
        }
    
      }

    return (
      <div>
        <div className={styles.modalContainer}>
          {isOpen && (
            <div className={styles.modalHeader}>
              <div className=" mx-2 bg-black flex justify-between align-center">
                <button className=" pl-[10px] cursor-pointer border-1 border-solid border-white bg-white text-black"
                        onClick={handleDownload}
                >
                  Download
                </button>
                <button className="pl-[10px] cursor-pointer border-1 border-solid border-white bg-white text-black"
                        onClick={onClose}>
                  Close
                </button>
              </div>
            </div>
          )}
          {isOpen && (
            <div className="h-[72%]">
              <div className={styles.modalContent}>
                <img
                  src='./assets/img/CV_LR_2025.jpg'
                  className={styles.CV}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default CvModal;