import Hero from "./Hero";
import BookSlider from "./BookSlider";
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
