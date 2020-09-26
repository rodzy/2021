export default function MainReducer(state, action) {
    switch (action.type) {
        case "Intro":
            return {
                ...state,
                intro: true,
                stack: false,
                more:false,
            }
        case "Stack":
            return {
                ...state,
                intro: false,
                stack: true,
                more:false,
            }
        case "More":
            return {
                ...state,
                intro: false,
                stack: false,
                more:true,
            }
        default:
            break;
    }
    return state;
}