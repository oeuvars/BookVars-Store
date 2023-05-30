import { createSignal } from 'solid-js';
import Card from '../components/Card';
import SocialMediaIcons from "../components/SocialMediaIcons";
import loadingSpinner from '../assets/clock.gif';
import Gradients from '../components/Gradients';

function SearchBooks() {
  const [query, setQuery] = createSignal('');
  const [results, setResults] = createSignal([]);
  const [loading, setLoading] = createSignal(false);

  const getUniqueBooks = (books) => {
    const uniqueBooks = [];
    const seenBookIds = new Set();

    for (const book of books) {
      if (!seenBookIds.has(book.id)) {
        uniqueBooks.push(book);
        seenBookIds.add(book.id);
      }
    }

    return uniqueBooks;
  };

  const handleSearch = () => {
    setLoading(true);

    fetch(`https://gutendex.com/books/?search=${encodeURIComponent(query())}`)
      .then(response => response.json())
      .then(data => {
        const uniqueResults = getUniqueBooks(data.results);
        setResults(uniqueResults);
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
        setResults([]);
      })
      .finally(() => {
        setLoading(false); // Set loading state to false after search is complete (success or error)
      });
  };

  const reverseAuthorName = (name) => {
    const names = name.split(',').map(n => n.trim());
    if (names.length === 2) {
      return `${names[1]} ${names[0]}`;
    }
    return name;
  };

  const handleDownloadClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div class='flex flex-col primary-background min-h-screen pt-10 w-full'>

        <div class='gradient-text font-playfair phone:text-4xl phone:w-11/12 lg:w-full lg:text-7xl italic flex mx-auto justify-center text-center mb-9'>
            Find Your Favorite Books Here
        </div>

        <Gradients />

      <div>
        <input
          type="text"
          class='font-outfit pargraph-text phone:px-6 lg:px-20 phone:py-3 lg:py-4 phone:text-lg lg:text-xl flex justify-center text-center mx-auto rounded-md bg-blue-100 text-cyan-800 bg-opacity-70 outline-none text-opacity-70 shadow-md'
          value={query()}
          onInput={e => setQuery(e.target.value)}
          placeholder="Enter a book title..."
        />
        <button
          onClick={handleSearch}
          class="flex px-5 py-2 font-outfit font-medium bg-sky-50 text-cyan-600 bg-opacity-60 rounded-md shadow-md mt-5 mx-auto hover:saturate-150 transition duration-500"
        >
          Search
        </button>
      </div>

      <div class='grid phone:grid-cols-2 gap-5 lg:grid-cols-5 w-11/12 mx-auto justify-center items-center mt-5 mb-7 relative'>
        {loading() ? (
          <div class="flex absolute inset-0 justify-center items-center mx-auto pt-16 opacity-80">
            <img src={loadingSpinner} alt="Loading Spinner" class='w-20 h-20'/>
          </div>
        ) : (
          <>
            {results().length > 0 ? (
              results().map(book => (
                <Card>
                  <div class='flex flex-col mx-auto justify-evenly'>
                    <h3
                      class='font-aladin phone:text-xl lg:text-3xl text-blue-500 pb-3'
                      style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                    >
                      {book.title}
                    </h3>
                    <img
                      src={book.formats['image/jpeg']}
                      alt="Book Cover"
                      class='phone:w-48 phone:h-52 lg:w-56 lg:h-80 shadow-md transition duration-500 rounded-md flex mx-auto justify-center hover:scale-105'
                    />
                    <p
                      class='font-outfit scrollbar-hidden font-medium text-center phone:text-base lg:text-lg text-cyan-700 flex mx-auto justify-center opacity-90 pt-3 pb-2 whitespace-pre-wrap'
                    >
                      {book.authors ? reverseAuthorName(book.authors[0]?.name) : 'Unknown'}
                    </p>
                    {book.formats && (
                      <button
                        class="px-5 py-2 font-outfit font-medium bg-sky-50 text-sky-600 bg-opacity-50 rounded-md shadow-md mb-auto"
                        onClick={() => handleDownloadClick(book.formats['text/html'])}
                      >
                        Download
                      </button>
                    )}
                  </div>
                </Card>
              ))
            ) : (
              <div class='centered-container absolute inset-0 font-marcellus italic font-medium text-lg text-cyan-800 flex justify-center items-center opacity-95 mt-3'>
                Sorry, Not here.
              </div>
            )}
          </>
        )}
      </div>

      <div class='bg-opacity-25 mx-auto mt-auto py-3 bg-sky-50 rounded-md w-full shadow-md'>
        <div class='flex flex-col justify-center'>
          <p class='font-outfit font-base text-cyan-700 mx-auto'>©Anurag Das</p>
          <div
            className="flex mt-4 justify-center md:justify-start mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
          >
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBooks;
