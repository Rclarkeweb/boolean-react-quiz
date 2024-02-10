import { useContext } from "react";
import { QuizContext } from "./helpers/Context";
import { animals } from "./helpers/animalQuestions";
import Typography from '@mui/material/Typography';

function Score() {

    const { setQuizState,
        setCategory,
        score,
        setScore } = useContext(
            QuizContext
        );

    // Play Again function
    const playAgain = () => {
        setQuizState("start");
        setScore(0)
        setCategory("");
    }

    return (
        <div className="h-80 text-center">
            <div className="">
                <div className='score-section h-60 text-blue-900 flex justify-center items-center'>
                    <Typography variant="h4" component="div">
                        You scored {score} out of {animals.length}
                    </Typography>
                </div>
                <div>
                    <button className="px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ margin: '0 auto', display: "flex" }} onClick={playAgain}>Play again!</button>
                </div>
            </div>
        </div>

    )
}

export default Score;