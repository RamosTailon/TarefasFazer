import React from 'react'
import styled from 'styled-components'

const ToDoItemStyle = styled.div`
    background-color: #ed6f6f;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
    padding: 8px 20px;

    max-width: 20em;

    font-size: 1.2em;
    color: #fff;
    border-radius: .5em;

    transition: .4s;
        
    &.complete{
        background-color: #69c280;
        text-decoration-line: line-through;
    }

    .icons{
        min-width: 108px;
    }

    #define,#delete{
        width: 30px;
        height: 30px;
        padding: 8px;
        border-radius: 50%;
        margin-left: 8px;
        cursor: pointer;
    }
    #define{
        background-color: #226e13;
    }
    #delete{
        background-color: #ab3232;
    }

`

export default ToDoItemStyle;