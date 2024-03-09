import { useEffect, useState } from "react";
import instance from "../../../api/api_instance";

interface Tweets {
  id: number;
  name: string;
  tweet: string;
}

export default function Table() {
  const [tweets, setTweets] = useState<Tweets[]>([]);
  const fetchTweet = async () => {
    const { data } = await instance.get("tweets");
    setTweets(data);
  };

  useEffect(() => {
    fetchTweet();
  }, []);

  return (
    <div>
      {tweets?.map((tweet) => {
        return (
          <div key={tweet.id} className="bg-slate-600 p-4 rounded-md shadow-md">
            <div>@{tweet.name}</div>
            "{tweet.tweet}"
            <button>Edit</button>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
