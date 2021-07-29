//  implementation steps.

--> divide viewport into 2 parts 
        #header : containing Title, Reset Button 
        #main : constaing Table, Arrow and Player turn  ( used flexbox to align)

--> the 3*3 data blocks have id's cell- aa,ab,ac ba,bb,bc ca,cb,cc 

--> initialize count.
--> ⭕ player starts.
--> ⭕ player has class "active-Player" : opacity 1.

--> on pressing any block.
        -->increment count. 
        -->toggle "active-player" class to ❌.

--> when any player has selected 3 continuous blocks row , column or diagonal wise
        --> display winner.
        --> reset game.

-->if all blocks selected with no winner 
        -->alert ("tie").
        -->reset game.
--> on clicking reset btn, reset game.


