const logger = (store) => (next) => (action ) => {
    console.log(action);
    next(action);
}

const featuring = (store) => (next) => (actionInfo) => {
    const featured = [{name: "pikasor"}, ...actionInfo.action.payload]
    const updateActionInfo = {
        ...actionInfo,
        action: { ...actionInfo.action, payload: featured },
    };
    next(updateActionInfo);
};

export { logger, featuring };