import { ReviewState } from "../Data/ContextProvider";

const medelPages = (reviewState: ReviewState): number => {
    let page: number = 0;
    reviewState.reviews?.map((r) => {
        page = page + parseInt(r.page);
    })

    page = page / reviewState.reviews?.length!;
    return page;
};
export default medelPages;