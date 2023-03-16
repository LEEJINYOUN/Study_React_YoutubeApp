import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard.jsx";
import { useYoutubeApi } from "../context/YoutubeApiContext.jsx";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => youtube.search(keyword));
  return (
    <>
      {isLoading && <p>로딩중...</p>}
      {error && <p>에러</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
          {videos.map((video, key) => (
            <VideoCard key={key} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
