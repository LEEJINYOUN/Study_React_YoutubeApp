import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../components/VideoCard.jsx";
import Youtube, { search } from "../api/youtube.js";
import FakeYoutube from "../api/fakeYoutubeClient.js";
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
      <div>Videos {keyword ? `${keyword}` : "없음"}</div>
      {isLoading && <p>로딩중...</p>}
      {error && <p>에러</p>}
      {videos && (
        <ul>
          {videos.map((video, key) => (
            <VideoCard key={key} video={video}></VideoCard>
          ))}
        </ul>
      )}
    </>
  );
}
