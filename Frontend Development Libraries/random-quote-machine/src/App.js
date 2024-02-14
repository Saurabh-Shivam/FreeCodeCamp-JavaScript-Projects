import "./App.css";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Spinner from "./components/Spinner";

function App() {
  const url = "https://api.quotable.io/random";

  const [loader, setLoader] = useState(false);
  const [quoteData, setQuoteData] = useState({});

  async function fetchQuoteUrl() {
    try {
      setLoader(true);
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setQuoteData({
        quote: data.content,
        author: data.author,
      });
      setLoader(false);
      toast.success("New Quote Loaded");
    } catch (error) {
      setQuoteData({});
      toast.error("No New Quote");
    }
  }

  useEffect(() => {
    fetchQuoteUrl();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {loader ? (
        <Spinner />
      ) : (
        <div
          id="quote-box"
          className="flex flex-col rounded-md gap-4 p-6 border-2 border-black w-96 mx-auto"
        >
          <div className="text-2xl font-semibold w-92">
            <p id="text">{quoteData.quote}</p>
          </div>
          <div className="flex justify-end text-sm ">
            <p id="author">{`--- ${quoteData.author}`}</p>
          </div>

          <div className="flex flex-wrap justify-between mt-8">
            <div className="text-blue-400">
              <a
                href={"twitter.com/intent/tweet" + quoteData.quote}
                id="tweet-quote"
                target="_blank"
              >
                twitter
              </a>
              {/* <a href="twitter.com/intent/tweet">Twitter</a> */}
            </div>
            <div className="border-2 border-black p-2 rounded-md">
              <button id="new-quote" onClick={fetchQuoteUrl}>
                new quote
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
