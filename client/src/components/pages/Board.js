// import React from 'react';
import { Route } from 'react-router-dom';
// import { Board_List, Board_Write, Board_Detail } from '../commons/';
import Board_List from '../commons/Board_List';
import Board_Write from '../commons/Board_Write';
import Board_Detail from '../commons/Board_Detail';


function Board () {

    return (
        <>
            <Board_List />
            {/* <Board_Write /> */}
            {/* <Board_Detail /> */}
        </>
        
        // <>
        //     <Route exact path="/board" element={<Board_List/>}/>
        //     <Route path="/board/write" element={<Board_Write/>}/>
        //     <Route path="/board/detail" element={<Board_Detail/>}/>
        // </>
    );
};

export default Board;