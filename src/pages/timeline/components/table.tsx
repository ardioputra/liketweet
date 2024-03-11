import { useEffect } from "react";
import instance from "../../../api/api_instance";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../../redux/tweet";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

export default function Table() {
  const dispatch = useAppDispatch();
  const tweets = useAppSelector((state) => state.tweets.tweets);
  const fetchTweet = async () => {
    const { data } = await instance.get("tweets");
    dispatch(set(data));
  };

  useEffect(() => {
    fetchTweet();
  }, []);

  return (
    <div>
      {tweets?.map((tweet) => {
        return (
          <div key={tweet.id} className="bg-slate-600 p-4 rounded-md shadow-md">
            <div>@{tweet.name}</div>"{tweet.tweet}"<button>Edit</button>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
