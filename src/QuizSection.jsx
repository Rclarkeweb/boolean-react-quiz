import { useState } from "react";

import { animals } from "./helpers/animalQuestions";
import { computers } from "./helpers/computerQuestions";
import { general } from "./helpers/generalQuestions";

import { useContext } from "react";
import { QuizContext } from "./helpers/Context";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



function QuizSection() {

    const [currentQuestion, setCurrentQuestion] = useState(0)

    const { setQuizState,
        category,
        score,
        setScore, } = useContext(
            QuizContext
        );

    // Set category to be one of the one question files
    let questionCategory = "";

    if (category == 9) {
        questionCategory = general;
    } else if (category == 27) {
        questionCategory = animals;
    } else if (category == 18) {
        questionCategory = computers;
    } else {
        console.log("Category error")
    }

    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < questionCategory.length) {
            setCurrentQuestion(nextQuestion);
        }
        else {
            setQuizState("end");
        }
    }


    return (
        <>
            <div className="h-60 flex flex-col flex-nowrap justify-evenly items-center">
                <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    <div className=' text-blue-300 question-count'>
                        <span>Question {currentQuestion + 1}</span> of {questionCategory.length}
                    </div>
                </Typography>
                <Typography variant="h5" component="div">
                    <div className='question-text text-blue-900'>
                        {questionCategory[currentQuestion].question}
                    </div>
                </Typography>
            </div>

            <div className='answer-section pb-12'>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                    {
                        questionCategory[currentQuestion].answerOptions.map((answerOptions) => (
                            <button className="px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ margin: '0 auto', display: "flex" }} onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                        ))
                    }
                </Box>

            </div>
        </>
    );
}

export default QuizSection;