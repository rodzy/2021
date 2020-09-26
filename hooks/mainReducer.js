export default function MainReducer(state, action) {
    switch (action.type) {
        case "Short":
            return {
                ...state,
                short: true,
                long: false,
                speaker:false,
            }
        case "Long":
            return {
                ...state,
                short: false,
                long: true,
                speaker:false,
            }
        case "Speaker":
            return {
                ...state,
                short: false,
                long: false,
                speaker:true,
            }
        default:
            break;
    }
    return state;
}