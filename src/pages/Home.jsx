import Card from "../components/Card";
import { createSignal, createEffect, onMount } from 'solid-js';
import { onCleanup } from "solid-js";
import banner from "../assets/BookVars.svg";
import Hero from "./Hero";
import SearchBooks from "./SearchBooks";
import { Motion } from "@motionone/solid";

export default function Home() {

    const [books, setBooks] = createSignal([]);
    const [selectedBook, setSelectedBook] = createSignal(null);

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
        <div class="primary-background min-h-screen">

            <Hero />

            <div class="flex justify-center mx-auto bg-opacity-60 pt-7 lg:pb-10 phone:w-11/12 lg:w-full">
                <img src={banner} class="rounded-md bg-opacity-50 bg-sky-100 shadow-sm hover:saturate-150 hover:scale-105 transition duration-500"/>
            </div>

            <div class="lg:ml-4">
                <header class="font-playfair gradient-text phone:text-4xl lg:text-5xl font-medium pt-5 pb-3 flex mx-auto justify-start lg:mr-auto w-11/12 italic">
                    Trending this Month
                </header>
                <p class="flex mx-auto font-marcellus font-medium paragraph-text w-11/12 phone:text-base lg:text-xl py-4">
                    From gripping thrillers to heartwarming novels, this month's best sellers offer captivating stories for every reader
                </p>
            </div>

            <div class='w-11/12 grid phone:grid-cols-2 lg:grid-cols-5 gap-5 mt-4 justify-center items-center mx-auto mb-7'>


                {books()?.map((book, index) => (
                    <div key={index}>
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
                                class="flex justify-center rounded-sm object-cover phone:w-48 phone:h-52 lg:w-56 lg:h-80 mx-auto mt-3 cursor-pointer shadow-md"
                            />

                            <button onClick={() => openAmazonLink(book.buy_links?.find(link => link.name === 'Amazon')?.url)} class="px-5 py-2 font-outfit font-medium bg-sky-50 text-cyan-600 bg-opacity-50 rounded-md shadow-md mt-3">
                                Buy Now
                            </button>
                        </Card>

                    </div>
                ))}

            </div>

            <SearchBooks />
        </div>
    );
}
