import { HeaderBar } from "./headerBar"
import './index.css'

export const Homepage = () => {
    return(
        <>
            <div className="opening-block">
                <div className="black-vignette"></div>
                <HeaderBar />
                <div className="action-block large-limit">
                    <h1>Unlimited Movies, TV shows, and more</h1>
                    <h3>Watch anywhere. Cancel anytime.</h3>
                    <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                    <form className="single-input-form" action="submit">
                        <input className="single-form-input" type="email" />
                        <input className="action-button large-button" type="submit" value="Get Started   &#8250;"/>
                    </form>
                </div>
                <div className="banner-ad">
                    <div className="banner-content">
                        <div className="popcorn-image"></div>
                        <div className="banner-words">
                            <h4>The Netflix you love for just $6.99.</h4>
                            <p>Get the Standard with ads plan.</p>
                            <button className="link-button">Learn More &#8250;</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feature-block large-limit">
                <div className="text-block">
                    <h2>Enjoy on your TV</h2>
                    <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
                </div>
                <div className="image-block">
                    <div className="feature-image feature-image-1"></div>
                </div>
            </div>
            <div className="feature-block large-limit">
                <div className="image-block">
                    <div className="feature-image feature-image-2"></div>
                </div>
                <div className="text-block">
                    <h2>Watch everywhere</h2>
                    <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
                </div>
            </div>
            <div className="feature-block large-limit">
                <div className="text-block">
                    <h2>Create profiles for kids</h2>
                    <h3>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h3>
                </div>
                <div className="image-block">
                    <div className="feature-image feature-image-3"></div>
                </div>
            </div>
            <div className="feature-block large-limit">
                <div className="image-block">
                    <div className="feature-image feature-image-4"></div>
                </div>
                <div className="text-block">
                    <h2>Download your shows to watch offline</h2>
                    <h3>Only available on ad-free plans.</h3>
                </div>
            </div>
            <div className="faq-block">
                <h2>Frequently Asked Questions</h2>
                <div className="hover-question large-limit">
                    <div className="question-block">
                        <h3 className="question">What is Netflix?</h3>
                        <h3>plus</h3>
                    </div>
                    <div className="answer-block hidden">
                        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
                        <p>You can watch as much as you want, whenever you want U+2013 all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                    </div>
                </div>
                <div className="hover-question large-limit">
                    <div className="question-block">
                        <h3 className="question">How much does Netflix cost?</h3>
                        <h3>plus</h3>
                    </div>
                    <div className="answer-block hidden">
                        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
                        <p>You can watch as much as you want, whenever you want U+2013 all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                    </div>
                </div>
                <div className="hover-question large-limit">
                    <div className="question-block">
                        <h3 className="question">Where can I watch?</h3>
                        <h3>plus</h3>
                    </div>
                    <div className="answer-block hidden">
                        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
                        <p>You can watch as much as you want, whenever you want U+2013 all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                    </div>
                </div>
                <div className="hover-question large-limit">
                    <div className="question-block">
                        <h3 className="question">How do I cancel?</h3>
                        <h3>plus</h3>
                    </div>
                    <div className="answer-block hidden">
                        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
                        <p>You can watch as much as you want, whenever you want U+2013 all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                    </div>
                </div>
                <div className="hover-question large-limit">
                    <div className="question-block">
                        <h3 className="question">What can I watch on Netflix?</h3>
                        <h3>plus</h3>
                    </div>
                    <div className="answer-block hidden">
                        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
                        <p>You can watch as much as you want, whenever you want U+2013 all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                    </div>
                </div>
                <div className="hover-question large-limit">
                    <div className="question-block">
                        <h3 className="question">Is Netflix good for kids?</h3>
                        <h3>plus</h3>
                    </div>
                    <div className="answer-block hidden">
                        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
                        <p>You can watch as much as you want, whenever you want U+2013 all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                    </div>
                </div>
            </div>
            <div className="final-call-to-action">
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <form className="single-input-form" action="submit">
                    <input className="single-form-input" type="email" />
                    <input className="action-button large-button" type="submit" value="Get Started   &#8250;"/>
                </form>
            </div>
        </>
    )
}