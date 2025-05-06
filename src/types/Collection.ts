import Bookmark from "./Bookmark";

interface Collection {
    id: number;
    name: string;
    order: number;
    bookmarks: Bookmark[];
};

export default Collection;