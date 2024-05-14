import { GlobalState } from "../Data/ContextDataProvider";

const medelRates = (reviewState: GlobalState): string => {
    let rate: number = 0;
    reviewState.reviews?.map((r) => {
        rate = rate + r.rate;
    })
    rate = rate / reviewState.reviews?.length!;

    return rate.toFixed(2);
};
export default medelRates;