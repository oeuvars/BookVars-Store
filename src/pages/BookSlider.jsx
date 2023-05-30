import { Motion } from "@motionone/solid";
import { onMount, createEffect, createSignal } from "solid-js";
import Card from "../components/Card";

export default function BookSlider() {

    const [books, setBooks] = createSignal([]);

    onMount(async () => {
        const response = await fetch(
          `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=PGdyycGbKAiPQEByIevYPyeGUsdFRGOQ`
        );
        const data = await response.json();
        console.log(data);
        const booksData = data?.results?.books || [];
        console.log(booksData);
        setBooks(booksData);
    });

    createEffect(() => {
        console.log(books());
      });

    const openAmazonLink = (url) => {
    window.open(url, '_blank');
    };

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      };

    return(
        <div class="primary-background py-5">
            <div class="cursor-grab overflow-hidden w-11/12 flex mx-auto py-10 px-4 bg-cyan-100 shadow-md bg-opacity-10 rounded-lg relative">
                <div class="gap-x-1 flex">
                {books()?.map((book, index) => (
                    <div key={index} class="">
                        <Card>
                            <h2
                                class="font-aladin font-medium phone:text-xl lg:text-3xl text-blue-500"
                                style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                            >
                                {capitalize(book.title)}
                            </h2>
                            <img
                                src={book.book_image}
                                alt={book.title}
                                class="flex justify-center rounded-sm object-cover phone:min-w-[192px] phone:min-h-[310px] lg:min-w-[224px] lg:h-[320px] mx-auto mt-3 cursor-pointer shadow-md"
                            />

                            <button onClick={() => openAmazonLink(book.buy_links?.find(link => link.name === 'Amazon')?.url)} class="px-5 py-2 font-outfit font-medium phone:text-sm lg:text-base bg-sky-50 text-cyan-600 bg-opacity-50 rounded-md shadow-md mt-3">
                                Buy Now
                            </button>
                        </Card>
                        <div class="absolute inset-0 flex items-center justify-between px-5">
                            <button class="p-1 rounded-full bg-white bg-opacity-10 text-neutral-700 hover:bg-white transition duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                </svg>
                            </button>
                            <button class="p-1 rounded-full bg-white bg-opacity-10 text-neutral-700 hover:bg-white transition duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </div>

                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}
