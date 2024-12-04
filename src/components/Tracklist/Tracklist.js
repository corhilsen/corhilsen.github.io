import React from "react";
import styles from "./Tracklist.module.css";

function Tracklist(props) {
    return (
        <div>
            {props.userSearchResults.map(track => (
                <div className={styles.Track} key={track.id}>
                    <div className={styles['Track-details']}>
                        <p>{track.name} by {track.artist}</p>
                       
                        <button onClick={() => props.onAdd ? props.onAdd(track) : props.onRemove(track)}>
                            {props.isRemoval ? '-' : '+'}
                        </button>
                    </div>
                </div>
            ))}            
        </div>
    );
}

export default Tracklist;