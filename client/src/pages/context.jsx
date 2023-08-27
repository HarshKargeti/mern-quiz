import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'
import customFetch from '../utils/customFetch';
import { useOutletContext } from 'react-router-dom';


const table = {
  latin: 21,
  hindi: 23,
  english: 24,
}

const API_ENDPOINT = '/quiz'

const url = ''
const tempUrl =
  'https://opentdb.com/api.php?amount=10&language=21&level=easy&type=multiple'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const { user } = useOutletContext();

  console.log(children)
  const fetch = async() =>{
  const {data} = await customFetch.get('/quiz');
  console.log(data.question)
  }

  const [waiting, setWaiting] = useState(true)
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [error, setError] = useState(false)
  const [quiz, setQuiz] = useState({
    // amount: 10,
    language: 'hindi',
    level: 1,
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  console.log(questions.length)

  const fetchQuestions = async(url) => {

    setLoading(true)
    setWaiting(false)
    // const response = await axios(url).catch((err) => 
    // console.log(err))
    const response = await customFetch.get(url);


    if(response){
      // const data = response.data.results
      const data = response.data.question

      console.log(data)
      if(data.length > 0){
        setQuestions(data);
        setLoading(false);
        setWaiting(false);
        setError(false)
      } else{
        setWaiting(true)
        setError(true)
      }
    }
    else{
      setWaiting(true)
    }
  }


  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex+1
      if(index > questions.length -1){
        
        
        // console.log(user.name,quiz)
        openModal()
        
        return 0
      }
      else{
      return index
      }
    })
  }

  const checkAnswer = (value) => {
    if(value){
      setCorrect((oldState) => oldState +1)
    }
    nextQuestion()
  }

  const openModal = () => {
    setIsModalOpen(true)
    submitQuiz();
  }
  const closeModal = () => {
    setWaiting(true)
    setCorrect(0)
    setIsModalOpen(false)
  }

  
const handleChange = (e) => {
  const name = e.target.name
  const value = e.target.value
  console.log(value)

  setQuiz({...quiz, [name]: value})
}

const handleSubmit = (e) => {
  e.preventDefault()
  const { language, level } = quiz
   const lang = table[language]
   const lev = level
  // const url = `${API_ENDPOINT}amount=${amount}&level=${level}&language=${table[language]}&type=multiple`
  const url = `${API_ENDPOINT}/${lang}/${lev}`
  // fetch()
  console.log(url)
  fetchQuestions(url)
}

const submitQuiz = async() =>{
  const { language, level } = quiz
 
  const data = {
    name: user.name,
    language: table[quiz.language],
    level: quiz.level,
    score: correct
  }
  console.log(data)
  await customFetch.post('/submit', data);
}


  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        correct,
        error,
        isModalOpen,
        nextQuestion,
        checkAnswer,
        closeModal,
        quiz,
        handleChange,
        handleSubmit
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
