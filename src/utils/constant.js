const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
export const YOUTUBE_VIDEOS_API ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" + GOOGLE_API_KEY;

export const SEARCH_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const OFFSET_LIVE_CHAT = 10;