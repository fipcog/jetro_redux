export const SET_WORK_ID = "SET_WORK_ID";

export function setWorkID (id) {
    return {
        type: SET_WORK_ID,
        payload: id,
    }
}