// @flow

declare var module: {
    hot: {
        accept(path: string, callback: () => void): void
    }
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

export type SearchState = {
    searchTerm: string
};

export type SearchProps = {
    shows: Array<Show>
};

export type DetailState = {
    apiData: {
        rating: string
    }
};

export type DetailProps = {
    show: Show
};

export type HeaderProps = {
    showSearch?: boolean,
    handleSearchTermChange?: Function,
    searchTerm?: string
};

export type PathParam = {
    match: Match
};
