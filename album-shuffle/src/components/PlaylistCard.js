import React, { useEffect } from 'react';
import { useGetShuffleMutation } from '../hooks/useGetShuffleMutation';

export const PlaylistCard = ({playlistName, numberOfTracks, playlistImageLink, playlistId, playlistDescription}) => {
    const pid = playlistId;
    const shufflePlaylist = useGetShuffleMutation();
    const altText = "Album art for " + playlistName

    useEffect(() => {
        if (shufflePlaylist.status === "success") alert("Shuffled!");
    }, [shufflePlaylist.status]);

    return (
        <>
        <h1>{playlistName}</h1>
        <p>{playlistDescription}</p>
        <button onClick={(e) => {
            shufflePlaylist.mutate({
                id: pid,
            });
        }}>Shuffle</button>
        <p><em>{numberOfTracks} tracks</em></p>
        <img src={playlistImageLink} alt={altText}/>
        </>
    )
}