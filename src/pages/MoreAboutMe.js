// import NavBar from "../shared/NavBar";
// import { useLocation } from "react-router-dom";
import './css/MoreAboutMe.css'

export const MoreAboutMe = function MoreAboutMe(props) {
    // const location = useLocation();
    return (
        <>
            <div className="container moreAboutMeContainer">
                <div className="moreAboutMeContent container">
                    <div className="moreAboutMeCard">
                        <img className="shadow" src={require('../Asserts/images/travelerRaj2.jpg')} alt="Oops!!" />
                        <div className="cardRightContent hodophileBackground">
                            <div className="text">
                                <h3>Hodophile</h3>
                                <p>
                                    Traveling brings joy, solace, and a fresh perspective. Stepping beyond comfort zones, embracing the world, and connecting with diverse people ignite happiness. Observing beauty, forging meaningful experiences, and seeking joy through human interaction make traveling an invaluable opportunity.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="moreAboutMeCard">
                        <img className="shadow" src={require('../Asserts/images/bookLover.jpg')} alt="Oops!!" />
                        <div className="cardRightContent bookBackground">
                            <div className="text">

                                <h3>Books Lover</h3>
                                <p>
                                    As a book enthusiast, I find immense joy in reading. Books offer unique perspectives, expanding our worldview and teaching us various skills, languages, and self-discovery. They serve as windows to diverse experiences, enriching our understanding of the world. Through reading, we uncover new dimensions of ourselves and gain invaluable knowledge.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="moreAboutMeCard">
                        <img className="shadow" src={require('../Asserts/images/friendlyNature.jpg')} alt="Oops!!" />
                        <div className="cardRightContent friendlyBackground">
                            <div className="text">

                                <h3>Friendly Nature</h3>
                                <p>
                                    My interest in making friends stems from my desire to gain diverse perspectives on the world. I b   elieve that every individual has a unique way of viewing the world, and I am eager to learn from and appreciate these different perspectives.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="moreAboutMeCard">
                        <img className="shadow" src={require('../Asserts/images/problemSolverRaj.jpg')} alt="Oops!!" />
                        <div className="cardRightContent problemBackground">
                            <div className="text">
                                <h3>Problem Solver</h3>
                                <p>
                                    I derive great satisfaction from being a problem solver. The joy of finding solutions is unparalleled; it's a unique thrill. There are countless paths to explore, numerous solutions to discover. The process of problem-solving is an exciting adventure that fuels my passion.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="moreAboutMeCard">
                        <img className="shadow" src={require('../Asserts/images/music2.png')} alt="Oops!!" />
                        <div className="cardRightContent musicBackground">
                            <div className="text">
                                <h3>Music Enthusiast</h3>
                                <p>
                                    As a music enthusiast, I value its ability to amplify my emotional and introspective awareness by resonating with my deepest feelings. It serves as a powerful catalyst for self-reflection and connection with my innermost emotions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}