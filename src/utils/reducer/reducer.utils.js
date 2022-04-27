
/**
 * Generic action to avoid having to specify 'type' and 'payload'. This avoids
 * typos when creating actions.
 * 
 * @param {*} type 
 * @param {*} payload 
 * @returns 
 */
export const createAction = (type, payload) => ({ type, payload });