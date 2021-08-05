import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    padding: 4px;
    margin: 16px 0;
    background-color: #24292e;
    align-items: center;    

    svg {
        margin: 0 16px;
        color: white;
    }

    h1 {
        color: white;
        text-align: center;
        margin: 0 16px;
    }

    input {
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        height: 44px;
        padding: 8px;
        font-weight: 500;
        caret-color: white;
        color: white;
    }

    button {
        background-color: #238636;
        padding: 8px 16px;
        margin: 0 16px;
        border-radius: 8px;        
        font-size: 16px;

        &:hover {
            background-color: #3182ce;
            box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
        }

        span {
            font-weight: bold;
            color: #fff;
        }
    }

    @media(max-width: 1200px) {
        width: 75%;
      }

    @media(max-width: 992px) {
        width: 100%;
      }

      

    
`;

