// @flow

declare var module: {
    hot: {
        accept(path: string, callback: () => void): void
    }
};

declare type ActionType = 'SET_SEARCH_TERM' | 'ADD_API_DATA';

declare type ActionT<A: ActionType, P> = {
    type: A,
    payload: P
};

export type Show = {
    title: string,
    description: string,
    year: string,
    imdbID: string,
    poster: string,
    trailer: string,
    rating?: string
};

export type Action =
    | ActionT<'SET_SEARCH_TERM', string>
    | ActionT<'ADD_API_DATA', Show>;

export type SearchState = {
    searchTerm: string
};

export type SearchProps = {
    searchTerm: string,
    shows: Array<Show>
};

export type SearchFieldProps = {
    searchTerm: string,
    handleSearchTermChange: Function,
    resetSearchTerm: Function,
    history: RouterHistory
};

export type DetailState = {
    apiData: {
        rating: string
    }
};

export type DetailProps = {
    show: Show,
    rating: string,
    getApiData: Function
};

export type HeaderProps = {
    showSearch?: boolean
};

export type PathParam = {
    match: Match
};
