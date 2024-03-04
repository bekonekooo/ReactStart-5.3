import ReactDOM from 'react-dom';

function Modal({onClose,children,actionBar}){
    return ReactDOM.createPortal( 
    <div>
        <div onClick={onClose} className="absolute inset-0 bg-gray-300 opacity-80"></div>
        <div className="absolute inset-60 p-10 bg-white max-h-[200px] min-w-[300px]">
            <div className='flex flex-col justify-between h-full'>
            {children}
            <div className='flex justify-end '>
                 {actionBar}   
            </div>
            </div>
        </div>
    </div>,
    document.querySelector(".modal-container")
    )
   
}
export default Modal;