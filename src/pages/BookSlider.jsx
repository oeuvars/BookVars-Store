import { onMount, createEffect, createSignal } from "solid-js";
import Card from "../components/Card";
import banner from "../assets/BookVars.svg";

export default function BookSlider() {
  const [books, setBooks] = createSignal([]);

  onMount(async () => {
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=PGdyycGbKAiPQEByIevYPyeGUsdFRGOQ`
    );
    const data = await response.json();
    const booksData = data?.results?.books || [];
    setBooks(booksData);
  });

  const openAmazonLink = (url) => {
    window.open(url, "_blank");
  };

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  createEffect(() => {
    const container = document.getElementById("bookSliderContainer");
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const scrollOffset = container.scrollLeft;

    const isEndReached = scrollOffset + clientWidth >= scrollWidth;
    if (isEndReached) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    }
  });

  return (
    <div class="primary-background py-5">
      <div class="flex justify-center mx-auto bg-opacity-60 pt-7 lg:pb-10 phone:w-11/12 lg:w-full">
        <img
          src={banner}
          class="rounded-md bg-opacity-50 bg-sky-100 shadow-sm hover:saturate-150 hover:scale-105 transition duration-500"
        />
      </div>

      <div class="lg:ml-4">
        <header class="font-playfair gradient-text phone:text-4xl lg:text-5xl font-medium pt-5 pb-3 flex mx-auto justify-start lg:mr-auto w-11/12 italic">
          Trending this Month
        </header>
        <p class="flex mx-auto font-fogtwo font-semibold paragraph-text w-11/12 phone:text-base lg:text-xl py-4">
          From gripping thrillers to heartwarming novels, this month's best
          sellers offer captivating stories for every reader
        </p>
      </div>

      <div
        id="bookSliderContainer"
        class="overflow-x-auto flex lg:py-7 phone:py-5 px-4 bg-cyan-100 shadow-md bg-opacity-10 rounded-lg relative lg:w-11/12 mb-7 phone:mx-1 lg:mx-auto"
      >
        <div class="flex gap-x-3">
          {books().map((book, index) => (
            <div key={index} class="overflow-y-hidden my-auto">
              <Card>
                <div class="max-w-[180px] overflow-hidden whitespace-nowrap flex mx-auto">
                  <h2 class="font-marcellus phone:text-xl lg:text-xl text-cyan-800 pb-2 overflow-hidden text-ellipsis mx-auto">
                    {capitalize(book.title)}
                  </h2>
                </div>

                <img
                  src={book.book_image}
                  alt="Book Cover"
                  class="shadow-md transition duration-500 rounded-md flex mx-auto justify-center max-w-[200px] max-h-[282px]"
                />

                <div class="max-w-[200px] overflow-hidden whitespace-nowrap">
                  <h2 class="font-marcellus font-medium phone:text-base lg:text-lg text-cyan-700 pt-2 overflow-hidden text-ellipsis">
                    {capitalize(book.author)}
                  </h2>
                </div>

                <button
                  onClick={() =>
                    openAmazonLink(
                      book.buy_links?.find((link) => link.name === "Amazon")
                        ?.url
                    )
                  }
                  class="px-5 py-2 font-outfit font-medium cursor-pointer phone:text-sm lg:text-base bg-sky-50 text-cyan-600 bg-opacity-50 hover:bg-opacity-90 transition duration-500 rounded-md shadow-md mt-3"
                >
                  Buy Now
                </button>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
