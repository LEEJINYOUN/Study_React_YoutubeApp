import { createContext, useContext } from "react";
import FakeYoutubeClient from "../api/fakeYoutubeClient.js";
import Youtube from "../api/youtube";
import YoutubeClient from "../api/youtubeClient";

export const YoutubeApiContext = createContext();

const FakeClient = new FakeYoutubeClient();
const client = new YoutubeClient();
const youtube = new Youtube(FakeClient);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
