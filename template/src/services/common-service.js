import { IframeMessageProxy } from 'iframe-message-proxy';
import IMPContainer from '../constants/iframe-message-proxy-container';

const startLoading = () =>
    IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.START_LOADING
    });

const stopLoading = () =>
    IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.STOP_LOADING
    });

const setHeight = (height) =>
    IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.HEIGHT_CHANGE,
        content: height
    });

const showToast = (toast) =>
    IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.TOAST,
        content: toast
    });

const showModal = (title, body, confirm = 'ok', cancel = 'cancel') =>
    IframeMessageProxy.sendMessage({
        action: IMPContainer.Actions.SHOW_MODAL,
        content: {
            title,
            body,
            confirm,
            cancel
        }
    });

const withLoadingAsync = async (func) => {
    startLoading();
    try {
        return await func();
    } finally {
        stopLoading();
    }
};

export {
    startLoading,
    stopLoading,
    setHeight,
    showToast,
    withLoadingAsync,
    showModal
};
