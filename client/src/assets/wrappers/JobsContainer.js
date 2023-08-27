import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 1120px) {
    .jobs {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
  .div1{
    border: 2px solid ;
    margin-top: 20px;
    height: 35px;
    text-align: center;
    background-color: rgb(79 121 229);
    color: white;
    border-radius: 23px;
    }
  span {
    padding: 109px;
    font-size: 21px
  }
`;
export default Wrapper;
