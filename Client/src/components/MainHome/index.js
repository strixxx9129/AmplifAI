import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Playlist from "./Playlist";
import axios from "axios";

export default function MainHome() {
  const [playlist, setPlaylist] = useState([]);

  useEffect(()=>{
    axios.get("/getPlaylist").then((res)=>{
      setPlaylist(res.data);
    }).catch((err)=>{
      console.log(err.message);
    })
  },[]);


  return (
    <div className="mainhome_wrap">
      <div className="mainhome_heading">
      Recommended Playlists:
      </div>
      <div className="mainhome_out">
        {Object.keys(playlist).map((key,idx)=>{
          const list=playlist[key];
          return (
            <Link to={`/playlist/${list._id}`}>
              <Playlist
                image={list.playlist_songs[0].image_link}
                tag={list.playlist_name}
              />
            </Link>
          )
        })}
      </div>
    </div>
  );
}
