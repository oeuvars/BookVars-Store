import Hero from "./Hero";
import SearchBooks from "./SearchBooks";
import BookSlider from "./BookSlider";
import GoogleBookSearch from "./GoogleBookSearch";
import OpenLibrarySearch from "./OpenSearch";

export default function Home() {

    return(
        <div class="primary-background min-h-screen">

            <Hero />

            <BookSlider />

            <OpenLibrarySearch/>

        </div>
    );
}
