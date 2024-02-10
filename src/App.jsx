import { useState } from 'react';
import './index.css';
import Footer from './Footer';
import Start from './Start';
import Score from './Score';
import QuizSection from './QuizSection';
import { QuizContext } from "./helpers/Context";

function App() {
  const [quizState, setQuizState] = useState("start");
  const [category, setCategory] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className='bg-blue-900 font-sans'>
      <div className='py-6'>
        <h1 className="pt-6 text-center font-sans text-5xl text-blue-300">BOOLEAN</h1>
        <p className="pt-4 text-center font-sans text-blue-300">True or False Quiz</p>
      </div>
      <div className='bg-white'>
        <QuizContext.Provider
          value={{
            quizState,
            setQuizState,
            category,
            setCategory,
            score,
            setScore,
          }}
        >
          {quizState === "start" && <Start />}
          {quizState === "playing" && <QuizSection />}
          {quizState === "end" && <Score />}
        </QuizContext.Provider>
      </div>
      < Footer />

    </div>
  )
}

export default App
