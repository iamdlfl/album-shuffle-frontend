import React from 'react';
import { PlaylistCard } from './PlaylistCard';

export const ShuffleList = () => {
    const myArray = [0, 1, 2];

    return(
        <>
        <h1>Shuffle List</h1>
        {myArray.map(function(val, idx){
            return <PlaylistCard playListNumber={val} />
        })}
        </>
    )
}