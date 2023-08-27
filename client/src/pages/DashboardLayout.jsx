import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom';
import Wrapper from "../assets/wrappers/Dashboard";
import { createContext, useContext, useState } from "react";
import {  Navbar } from "../components";
import {toast} from 'react-toastify';

import customFetch from '../utils/customFetch';


export const loader = async() => {
    try{
      const {data} = await customFetch.get('/users/current-user')
      // console.log(data)
      return data
    } catch(error){
      return redirect('/')
    }
  }

  const DashboardContext = createContext()

const DashboardLayout = () => {
    const { user } = useLoaderData();
  const navigate = useNavigate();
    const logoutUser = async() => {
        navigate('/')
        await customFetch.get('/auth/logout');
        toast.success('Logging out...');

    }
    return(
    <DashboardContext.Provider
         value={{
            user,
            logoutUser,
         }}>

<Wrapper>
<div className='dashboard'>
        
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet context={{ user }}/>
            </div>
          </div>
          </div>
</Wrapper>
         </DashboardContext.Provider>

         
    )
}

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;