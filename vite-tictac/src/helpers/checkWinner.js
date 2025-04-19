function isWinner(board, symbol){
    console.log(board, symbol);
    // winner check for rows
    if(board[0] == board[1]  && board[1] == board[2] && board[2] == symbol) return symbol
    if(board[3] == board[4]  && board[4]  == board[5] && board[5] == symbol) return symbol
    if(board[6] == board[7]  && board[7] == board[8] && board[8] == symbol) return symbol



    // winner check for columns

    if(board[0] == board[3] && board[3] == board[6] && board[3] == symbol) return symbol
    if(board[1] == board[4] && board[4] == board[7] && board[4] == symbol) return symbol
    if(board[2] == board[5] && board[5] == board[8] && board[5] == symbol) return symbol

    // diagonal check cross way winning


    if(board[0] == board[4] && board[4] == board[8] && board[4] == symbol) return symbol
    if(board[2] == board[4] && board[4] == board[6] && board[4] ==  symbol) return symbol

    return "";
    
}

export default isWinner;