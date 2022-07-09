import { flexbox } from '@mui/system';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightblue;
    border-radius:20px;
    height:100%;

    button{
        border-radius: 0 0 20px 20px;
    }

    img{
        width: 300px;
        height: 200px;
        object-fit: contain;
        width:50%;
        margin-left:25%;
        margin-top: 3%;
        object-lift: cover;
        display: grid;
        border-radius: 20px 20px 0 0;
    }


    .container {
        position: relative;
        display: grid;
        grid-template-columns: 50% 50px 50px 50px;
        grid-template-rows: auto;
        grid-template-areas: 
          "header header header header"
          "main main . sidebar"
          "footer footer footer footer";
      }
    
    .picture{
        display: grid;
        grid-area: header;
        margin-left: 15%;
    }

    .description{
        display: grid;
        font-family: Arial, Helvtica, sans-serif;
        padding: 1rem;
        height: 100%;
        grid-area: main;

    }

    .price{
        font-family: Arial, Helvtica, sans-serif;
        padding-left: 1rem;
        width:-2rem;
        display: grid;
        grid-area: footer;
        margin-top: 20%;
        }
    `;
    //grid-template-columns: 4fr 1fr;
      //  position: static;        grid-template-columns: 10fr 1fr;

