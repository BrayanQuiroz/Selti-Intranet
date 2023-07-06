import styled from 'styled-components';

export  const Container = styled.div`
  max-width: ${props => props.maxWidth || '72rem'}; 
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem; 
  padding-right: 1.5rem;
`;

export const CenterLogin = styled.div`
   display: flex;
  justify-content: center;
`;

export const Row = styled.div`
  width: 100%;
  padding: ${props => props.padding || '0rem'}; 
  background-color: white;
  & .RowTwo{
    width: 100%;
    height: 63px;
  }
`;

export const RowFlex = styled.div`
  display: flex;
  width: 47%;
  height: 63px;
  & p{
      background-color:red;
      display: inline-block;
      width: 100%;
    }
`;

export const RowContainer = styled.div`
  width: 100%;
  height: 63px;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 0rem 0;

  & .flex{
    display: flex;
    justify-content: space-between;
    width: 50%;
  }

  & div p:first-of-type{
    color:red;
    font-weight: 600;
    font-size: 1.1rem;
  }

  & select:first-of-type{
    width: 60%;
    margin-right: 1.3rem;
  }
`;


export const ContentInputButton = styled.div`
  display: flex;
  width: ${props => props.width || '47%;'};
  height: 63px;

  & .InputRight{
    margin-right: 1rem;
  }

  & .SelectLabel{
    margin-top:1rem;
    font-size: 1.2rem;
  }

  & button{
    margin-top: 2.5rem;
  }
  & p{
      background-color:red;
      display: inline-block;
      width: 100%;
    }

    .select{
      width:87%;
    }

    .errorContainer{
        display: flex;
        width: ${props => props.width || '47%;'};
        height: 63px;
        & p{
            background-color:red;
            display: inline-block;
            width: 100%;
          }
      
    }
`;