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

/* Middleware challenge */ 
const addActiveProp = (store) => (next) => actionInfo => {
    const newPayload = actionInfo.action.payload.map(pokemon => pokemon.isActive === true);
    const newActionInfo = {...actionInfo, payload: 
    newPayload};
    next(newActionInfo);
}

export { logger, featuring, addActiveProp };