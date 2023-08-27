import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext()


 

  return (
    <main>
      <section className='quiz quiz-small'>
        <form className='setup-form'>
          <h2>Quiz</h2>
          {/* amount */}
          {/* <div className='form-control'>
            <label htmlFor='amount'>number of questions</label>
            <input
              type='number'
              name='amount'
              id='amount'
              value={quiz.amount}
              onChange={handleChange}
              className='form-input'
              min={1}
              max={50}
            />
          </div> */}
          {/* language */}

          <div className='form-control'>
            <label htmlFor='language'>Language</label>
            <select
              name='language'
              id='language'
              className='form-input'
              value={quiz.language}
              onChange={handleChange}
            >
              <option value='hindi'>hindi</option>
              <option value='english'>english</option>
              <option value='latin'>latin</option>
            </select>
          </div>
          {/* level */}

          <div className='form-control'>
            <label htmlFor='level'>select level</label>
            <select
              name='level'
              id='level'
              className='form-input'
              value={quiz.level}
              onChange={handleChange}
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
          </div>
          {error && (
            <p className='error'>
              can't generate questions, please try different options
            </p>
          )}
          <button type='submit' onClick={handleSubmit} className='submit-btn'>
            start
          </button>
        </form>
      </section>
    </main>
  )
}

export default SetupForm