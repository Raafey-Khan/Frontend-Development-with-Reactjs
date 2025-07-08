import {toast} from 'react-toastify';

export function showSucess(message) {
    toast.success(message, {
        position: 'top-right'
    })
}

export function showError(message) {
    toast.error(message, {
        position: 'top-right'
    })
}
