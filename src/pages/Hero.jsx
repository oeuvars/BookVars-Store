import Background from "../assets/hero.svg";
import book1 from "../assets/covers/1.jpg";
import book2 from "../assets/covers/2.jpg";
import book3 from "../assets/covers/3.jpg";
import book4 from "../assets/covers/4.jpg";
import book5 from "../assets/covers/5.jpg";
import book6 from "../assets/covers/6.jpg";
import book7 from "../assets/covers/7.jpg";
import book8 from "../assets/covers/8.jpg";
import book9 from "../assets/covers/9.jpg";
import book10 from "../assets/covers/10.jpg";
import book11 from "../assets/covers/11.jpg";
import book12 from "../assets/covers/12.jpeg";
import book13 from "../assets/covers/13.jpg";
import book14 from "../assets/covers/14.jpg";
import book15 from "../assets/covers/15.jpg";
import book16 from "../assets/covers/16.jpg";
import book17 from "../assets/covers/17.jpg";
import softmesh from "../assets/gradients/softmesh.png"
import { Route, Routes, A } from '@solidjs/router';

export default function Hero() {

    return(
        <div class="min-w-screen min-h-screen lg:flex items-center justify-center primary-background" >

            {/* Images */}
            <div class="flex justify-start mr-auto gap-3 lg:h-screen overflow-hidden lg:w-3/5">
                <div class="flex flex-col gap-3">
                    <img src={book6} class="lg:w-48 lg:h-64 phone:w-40 phone:h-40 shadow-md hover:saturate-150 transition duration-500"/>
                    <img src={book13} class="lg:w-48 lg:h-64 phone:w-40 phone:h-40 shadow-md hover:saturate-150 transition duration-500"/>
                    <img src={book3} class="lg:w-48 lg:h-64 phone:w-40 phone:h-40 shadow-md hover:saturate-150 transition duration-500"/>
                </div>
                <div class="flex flex-col gap-3 -mt-40">
                    <img src={book4} class="lg:w-48 lg:h-64 phone:w-40 phone:h-40 shadow-md hover:saturate-150 transition duration-500"/>
                    <img src={book5} class="lg:w-48 lg:h-64 phone:w-40 phone:h-40 shadow-md hover:saturate-150 transition duration-500"/>
                    <img src={book6} class="lg:w-48 lg:h-64 phone:w-40 phone:h-40 shadow-md hover:saturate-150 transition duration-500"/>
                    <img src={book8} class="lg:w-48 lg:h-64 phone:w-40 phone:h-40 shadow-md hover:saturate-150 transition duration-500"/>
                </div>
                <div class="flex flex-col gap-3 -mt-56">
                    <img src={book7} class="lg:w-48 lg:h-64 phone:w-40 phone:h-40 shadow-md hover:saturate-150 transition duration-500"/>
                    <img src={book10} class="lg:w-48 lg:h-64 phone:w-40 phone:h-40 shadow-md hover:saturate-150 transition duration-500"/>
                    <img src={book9} class="lg:w-48 lg:h-64 phone:w-40 phone:h-40 shadow-md hover:saturate-150 transition duration-500"/>
                    <img src={book11} class="lg:w-48 lg:h-64 phone:w-40 phone:h-40 shadow-md hover:saturate-150 transition duration-500"/>
                </div>
                <div class="flex flex-col gap-3">
                    <img src={book12} class="lg:w-48 lg:h-64 phone:w-40 phone:h-40 shadow-md hover:saturate-150 transition duration-500"/>
                    <img src={book17} class="lg:w-48 lg:h-64 phone:w-40 phone:h-40 shadow-md hover:saturate-150 transition duration-500"/>
                    <img src={book14} class="lg:w-48 lg:h-64 phone:w-40 phone:h-40 shadow-md hover:saturate-150 transition duration-500"/>
                </div>
            </div>

            {/* */}
            <div class=" flex mx-auto justify-center items-center lg:w-3/6 phone:pt-5 phone:pb-7 lg:pb-0 lg:pt-0s">
                <div class="flex flex-col gap-5">
                    <header class="font-playfair italic font-medium lg:text-9xl phone:text-7xl hero-header saturate-200 lg:w-11/12 flex justify-center mx-aut lg:mr-5">
                        BookVars
                    </header>
                    <p class="font-marcellus font-medium text-base text-cyan-700 phone:text-center lg:text-start w-5/6 flex mx-auto opacity-80">Ignite your imagination at our online bookstore—curated literary treasures, personalized recommendations, and seamless delivery. Enter a world of endless possibilities and let your reading journey begin.</p>
                    <button class="px-5 py-2 font-outfit font-medium bg-sky-50 text-cyan-600 border-cyan-500 border-2 bg-opacity-30 shadow-md mt-2 w-32 flex phone:justify-center lg:justify-start lg:ml-16 phone:mx-auto lg:mx-0">
                        <A class="flex justify-center mx-auto" href='/'>
                            Explore
                        </A>
                    </button>
                </div>

            </div>


        </div>
    );
}
