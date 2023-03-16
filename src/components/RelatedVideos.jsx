import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import VideoCard from "./VideoCard";

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["related", id], () => youtube.relatedVideos(id));
  return (
    <>
      {isLoading && <p>로딩중...</p>}
      {error && <p>에러</p>}
      {videos && (
        <ul>
          {videos.map((video, key) => (
            <VideoCard key={key} video={video} type="list" />
          ))}
        </ul>
      )}
    </>
  );
}
