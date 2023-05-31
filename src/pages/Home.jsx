import Hero from "./Hero";
import SearchBooks from "./SearchBooks";
import BookSlider from "./BookSlider";

export default function Home() {



    return(
        <div class="primary-background min-h-screen">

            <Hero />

            <BookSlider />

            <SearchBooks />

        </div>
    );
}
