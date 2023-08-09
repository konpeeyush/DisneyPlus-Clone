import styled from 'styled-components';
import {home_bg} from '../../assets';

export const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);

    &:after{
        background: url(${home_bg}) center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
    
    
`
