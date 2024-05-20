import { GlobalState } from "../Data/ContextDataProvider";

const medelPages = (reviewState: GlobalState): number[] => {
    let total: number = 0;
    reviewState.reviews?.map((r) => {
        total = total + parseInt(r.page);
    })

    let mp = total / reviewState.reviews?.length!;
    return [total, mp];
};
export default medelPages;