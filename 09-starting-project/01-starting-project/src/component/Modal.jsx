import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"

const Modal = forwardRef(function Modal({children, buttonC}, ref) {
    const dialog = useRef()

    useImperativeHandle(ref, () => { //modal함수를 밖에서도 쓸수 있게함.
        return{
            open() {
                dialog.current.showModal()
            }
        }
    })


    return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
        {children}
        <form method="dialog" className="mt-4 text-right">
            <button className="w-full text-center px-2 py-1 rounded-sm
            my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
            {buttonC}</button>
        </form>
    </dialog>, document.getElementById('modal-root')) // 이곳에 뿌리를 찾아 보여줄거임
})

export default Modal