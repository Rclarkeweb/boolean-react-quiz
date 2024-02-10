import { useContext } from "react";
import { QuizContext } from "./helpers/Context";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Start() {
    const { setQuizState, category, setCategory } = useContext(
        QuizContext
    );

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="py-6 mx-8 w-1/3">
                    <Box className="">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category}
                                label="category"
                                onChange={handleChange}
                                className="mb-4"
                            >
                                <MenuItem value={9}>General Knowledge</MenuItem>
                                <MenuItem value={27}>Animals</MenuItem>
                                <MenuItem value={18}>Computers</MenuItem>
                            </Select>

                            <p className="pb-4 text-center">{category == "" ? <p>Choose a category</p> : <p></p>}</p>

                            <button className="mt-6 px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ margin: '0 auto', display: "flex" }}
                                onClick={() => {
                                    if (category == "") {
                                        alert("Please pick a category");
                                    } else {
                                        setQuizState("playing");
                                    }

                                }}
                            >START QUIZ</button>

                        </FormControl>
                    </Box>
                </div>
            </div>

        </div>
    );
}

export default Start;