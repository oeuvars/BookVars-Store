import Card from "../components/Card";
import { createSignal, createEffect, onMount } from 'solid-js';
import { onCleanup } from "solid-js";
import banner from "../assets/BookVars.svg";
import Hero from "./Hero";
import SearchBooks from "./SearchBooks";

export default function Home() {

    const [books, setBooks] = createSignal([]);
    const [showPopup, setShowPopup] = createSignal(false);
    const [selectedBook, setSelectedBook] = createSignal(null);

    const handleImageClick = (book) => {
        setSelectedBook(book);
        setShowPopup(true);
    };

    const handleCloseClick = () => {
        setSelectedBook(null);
        setShowPopup(false);
    };

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

            <div class='w-11/12 grid phone:grid-cols-2 lg:grid-cols-5 gap-5 mt-4 justify-center items-center mx-auto'>


                {books()?.map((book, index) => (
                    <div key={index}>
                        <Card>
                            <h2
                                class="font-playfair font-medium text-3xl text-blue-500"
                                style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                            >
                                {capitalize(book.title)}
                            </h2>
                            <img
                                src={book.book_image}
                                alt={book.title}
                                class="flex justify-center rounded-sm object-cover phone:w-44 phone:h-60 lg:max-w-[200px] lg:max-h-[300px] mx-auto mt-3 cursor-pointer shadow-md hover:scale-105 transition duration-500"
                                onClick={handleImageClick}
                            />
                            {showPopup() && (
                            <div className="fixed inset-0 flex items-center justify-center z-50">
                                <div className="fixed inset-0 backdrop-blur-md" onClick={handleCloseClick}>

                                </div>
                                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                                    <div className="relative popup-card rounded-lg p-4 w-1/3 h-1/2">
                                        <button
                                        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                                        onClick={handleCloseClick}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#083344" class="w-7 h-7">
                                                <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                                            </svg>
                                        </button>

                                        <div>
                                            {books().map((book, index) => (
                                                <div key={index}>
                                                <h2 class="text-xl font-bold mb-2">{book.title}</h2>
                                                <p>{book.description}</p>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </div>
                            )}

                            <button onClick={() => openAmazonLink(book.buy_links?.find(link => link.name === 'Amazon')?.url)} class="px-5 py-2 font-outfit font-medium bg-sky-50 text-indigo-900 bg-opacity-50 rounded-md shadow-md mt-3">
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
