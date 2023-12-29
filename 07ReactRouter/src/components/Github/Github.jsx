import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/ArindamHere")
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //             setData(data);
    //         })
    // }, []);  // useffect callback will be trigerred when this github component will be loaded
    return (
        <div className=' flex flex-col text-center m-5 bg-gray-400 text-white p-4 text-3xl'>
            <div>
                Github Followers: {data.followers} <br />
                Github Following: {data.following}
            </div>

            <img src={data.avatar_url} alt="git picture" width={250} height={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/ArindamHere");
    return response.json();
}