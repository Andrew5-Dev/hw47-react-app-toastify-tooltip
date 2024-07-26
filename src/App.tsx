import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'react-tooltip/dist/react-tooltip.css'
import {Tooltip} from "react-tooltip";

const App = () => {

    const notify = () => {
        toast('Default Notification!', {position: 'top-center', autoClose: 5000})
        toast.success('Success Notification!', {position: 'top-left', autoClose: 5000})
        toast.error('Error Notification', {position: 'top-right', autoClose: false})
        toast.warn('Warning Notification!', {position: 'bottom-center'})
    }
    return (
        <div>
            <Tooltip id="my-tooltip"/>
            <button data-tooltip-id="my-tooltip"
                    data-tooltip-content="Натисніть, щоб отримати повідомлення"
                    data-tooltip-place="top"
                    data-tooltip-bg="red"
                    className="button"
                    onClick={notify}>Notify !
            </button>
            <ToastContainer/>
        </div>
    )
}

export default App