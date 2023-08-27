import customFetch from '../utils/customFetch';
import { redirect, useLoaderData } from 'react-router-dom';
import Wrapper from "../assets/wrappers/JobsContainer"
import { useNavigate } from 'react-router-dom';
import Wrap from '../assets/wrappers/LogoutContainer';


const table = {
  21: "latin",
  23:"hindi",
  24:"english",
}

export const loader = async() => {
    try{
      const {data} = await customFetch.get('/submit')
      return data
    } catch(error){
      return redirect('/')
    }
  }
const Profile = () => {
  const navigate = useNavigate();

    const  data  = useLoaderData();
    const {score} = data
    // console.log(score.length)

    const reset = async() => {
      console.log("reset")
      await customFetch.delete('/submit')
      navigate('/dashboard/profile')
    }



    if(score.length === 0){
        return (
            <Wrapper>
               <h5>Quiz Score</h5>
              <h2>No score to display...</h2>
            </Wrapper>
          );
    }

    return (
        <Wrapper>
          <div >
            <h5>Quiz Score</h5>
            {score.map((s) => {
              return (
                <div className='div1' key={s._id}>
                
                <span>Language: {table[s.language]}</span>
                <span>Level: {s.level}</span>
                <span>Score: {s.score}</span>
                </div>
              )
            })}
          </div>
          <Wrap>
          <button type= 'button' className='btn logout-btn reset-btn' onClick={reset}>Reset Score</button>
          </Wrap>
        </Wrapper>
      );
//  console.log(data.score[0].name)


};

export default Profile;