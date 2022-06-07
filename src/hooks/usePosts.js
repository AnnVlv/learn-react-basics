import {useMemo} from 'react';

const useSortedPosts = (posts, sort) => {
    return useMemo(() => {
        if (!sort) {
            return posts;
        }

        return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }, [posts, sort]);
};

export const usePosts = (posts, sort, search) => {
    const sortedPosts = useSortedPosts(posts, sort);

    return useMemo(() => {
        if (!search) {
            return sortedPosts;
        }

        return sortedPosts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()));
    }, [sortedPosts, search]);
};
