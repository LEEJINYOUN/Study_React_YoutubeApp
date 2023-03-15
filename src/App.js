import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchHeader from "./components/SearchHeader.jsx";
import { YoutubeApiProvider } from "./context/YoutubeApiContext.jsx";
import NotFound from "./routes/NotFound.jsx";
import VideoDetail from "./routes/VideoDetail.jsx";
import Videos from "./routes/Videos.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Videos />} errorElement={<NotFound />} />
            <Route path="/Videos" element={<Videos />} />
            <Route path="/Videos/:keyword" element={<Videos />} />
            <Route path="/Videos/watch/:videoId" element={<VideoDetail />} />
          </Routes>
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
