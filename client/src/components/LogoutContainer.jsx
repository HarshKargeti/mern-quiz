import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/LogoutContainer';
import { useState } from 'react';
import { useDashboardContext } from '../pages/DashboardLayout';
import { useNavigate } from 'react-router-dom';

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();
  const navigate = useNavigate();
  const Profile = () => {
  
    console.log('profile')
     navigate('/dashboard/profile')
  }

  return (
    <Wrapper>
      <button type= 'button' className='btn logout-btn profilebtn'onClick={Profile} >Profile</button>

      <button
        type='button'
        className='btn logout-btn'
        onClick={() => setShowLogout(!showLogout)}
      >
        {user.avatar ? (
          <img src={user.avatar} alt='avatar' className='img' />
        ) : (
          <FaUserCircle />
        )}
        {user?.name}
        <FaCaretDown />
      </button>
      <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
        <button type='button' className='dropdown-btn' onClick={logoutUser}>
          logout
        </button>
      </div>
    </Wrapper>
  );
};
export default LogoutContainer;