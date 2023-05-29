//BEGIN
export const getWeekends = (word = "long") => {
    switch (word) {
        case "long":
            return ["saturday", "sunday"];
        case "short":
            return ["sat", "sun"];
        case "abbreviated":
            return ["Sa", "Su"];
        default:
            return;
    }
};

export default getWeekends;
//END