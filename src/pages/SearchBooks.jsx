import { createSignal } from 'solid-js';
import Card from '../components/Card';
import SocialMediaIcons from "../components/SocialMediaIcons";

function SearchBooks() {
  const [query, setQuery] = createSignal('');
  const [results, setResults] = createSignal([]);

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
    fetch(`https://gutendex.com/books/?search=${encodeURIComponent(query())}`)
      .then(response => response.json())
      .then(data => {
        const uniqueResults = getUniqueBooks(data.results);
        setResults(uniqueResults);
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
        setResults([]);
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
    <div class='flex flex-col primary-background min-h-screen pt-10'>

        <div class='gradient-text font-playfair phone:text-4xl phone:w-11/12 lg:w-full lg:text-7xl italic flex mx-auto justify-center text-center  mb-9'>
            Find Your Favorite Books Here
        </div>


        <div>
            <input type="text" class='font-outfit pargraph-text phone:px-6 lg:px-20 phone:py-3 lg:py-4 text-lg flex justify-center text-center mx-auto rounded-md bg-blue-100 text-cyan-800 bg-opacity-70 outline-none text-opacity-70' value={query()} onInput={e => setQuery(e.target.value)} placeholder="Enter a book title..." />
            <button onClick={handleSearch} class="flex px-5 py-2 font-outfit font-medium bg-sky-50 text-blue-500 bg-opacity-50 rounded-md shadow-md mt-5 mx-auto hover:saturate-150 transition duration-500">Search</button>
        </div>


      <div class='grid phone:grid-cols-2 gap-3 lg:grid-cols-5 w-11/12 mx-auto justify-center mt-5'>
        {results().length > 0 ? (
          results().map(book => (
            <Card>
            <div class='flex flex-col mx-auto justify-evenly'>
              <h3 class='font-playfair phone:text-2xl lg:text-3xl text-blue-500 pb-3' style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{book.title}</h3>
              <img src={book.formats['image/jpeg']} alt="Book Cover" class='w-48 h-64 shadow-md transition duration-500 rounded-md flex mx-auto justify-center'/>
              <p class='font-marcellus italic font-medium text-center phone:text-base lg:text-lg text-cyan-700 w-5/6 flex mx-auto justify-center opacity-90 pt-3 pb-2 overflow-x-scroll'>{book.authors ? reverseAuthorName(book.authors[0]?.name) : 'Unknown'}</p>
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
            <div class='font-marcellus italic font-medium text-base text-cyan-800 w-5/6 flex justify-center text-center mx-auto items-center opacity-80 ml-auto'></div>
        )}

      </div>

      <div class='bg-opacity-25 mx-auto mt-auto py-3 bg-sky-50 rounded-md w-full shadow-md'>
        <div class='flex flex-col justify-center'>
            <p class='font-outfit font-base text-cyan-700 mx-auto'>©Anurag Das</p>
            <div className="flex mt-4 justify-center md:justify-start mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.4, duration: 0.5 }} variants = {{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 }}}>
                <SocialMediaIcons />
            </div>
        </div>

      </div>
    </div>
  );
}

export default SearchBooks;
