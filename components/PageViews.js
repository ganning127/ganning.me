import useSWR from 'swr';
import { FC } from 'react';


const fetcher = async (input) => {
    const res = await fetch(input);
    return await res.json();
};

const PageViews = ({ slug }) => {
    const { data } = useSWR(`/api/views/${slug}`, fetcher);

    return <>{data?.total ? `${data.total} views` : `–––`}</>;
};

export default PageViews;