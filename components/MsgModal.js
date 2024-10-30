import { useLockBodyScroll } from "@uidotdev/usehooks";

const MsgModal = ({ errorNumber, setErrorNumber, setIsIncorrect }) => {
  let msgError;
  let button;

  if (errorNumber === 1) {
    msgError =
      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
        <h3 className="text-white text-xl leading-none " id="modal-title">Error</h3>
        <div className="mt-2">
          <p className="text-xs text-gray-400 leading-none">Please fill all the fields and write down a valid email</p>
        </div>
      </div>
    button =
      <div class="bg-black border-t border-t-white-400  px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button type="button"
          class="inline-flex w-full justify-center rounded-md bg-black border border-white px-3 py-2 text-sm font-semibold text-white hover:text-black shadow-sm hover:bg-white sm:ml-3 sm:w-auto"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          onClick={() => closeModal()}
        >OK</button>
      </div>
  } else if (errorNumber === 2) {
    msgError =
      <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
        <h3 class="text-white text-xl leading-none"
          id="modal-title">Error</h3>
        <div class="mt-2">
          <p class="text-xs text-gray-400 leading-none">Again ? Please fill all the fields and write down a valid email</p>
        </div>
      </div>
    button =
      <div class="bg-black border-t border-t-white-400 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button type="button"
          class="clip-path clip-rectangle inline-flex w-full justify-center rounded-md bg-black border border-white px-3 py-2 text-sm font-semibold text-white hover:text-black shadow-sm hover:bg-white sm:ml-3 sm:w-auto"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          onClick={() => closeModal()}
        >
          Oh shoot! Silly Me!
        </button>
      </div>
  } else if (errorNumber === 3) {
    msgError =
      <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
        <h3 class="text-white text-xl leading-none" id="modal-title">Error ! are you for Real ??!</h3>
        <div class="mt-2">
          <p class="text-xs text-gray-400 leading-none">I will not keep saying it... fill all the fields and write down a valid email you peasant!</p>
        </div>
      </div>
    button =
      <div class="bg-black border-t border-t-white-400 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button type="button"
          class="clip-path clip-rectangle inline-flex w-full justify-center rounded-md bg-black border border-white px-3 py-2 text-xs font-semibold text-white hover:text-black shadow-sm hover:bg-white sm:ml-3 sm:w-auto"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          onClick={() => closeModal()}
        >Yes my dark liege, i shall stop doing it! Give me another chance!
        </button>
      </div>
  }
 

  function closeModal() {
    setIsIncorrect(false)
    if (errorNumber >= 3) {
      setErrorNumber(0)
    }
  }

  useLockBodyScroll();
  
  return (
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

      <div class="fixed inset-0 bg-gray-400 bg-opacity-40 transition-opacity backdrop-filter backdrop-blur-sm" aria-hidden="true"></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-black px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-black border border-white sm:mx-0 sm:h-10 sm:w-10">
                  <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                </div>
                {msgError}
              </div>
            </div>
            {button}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MsgModal;