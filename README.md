# Java-Script-Assignment
Java Script Assignment

Assignment Idea: Texas Hold'em Poker ("Poker") Trainer

    Synopsis:
    My assignment is a quiz/memory trainer for 
    poker strategy. It focuses on only a very small part of poker strategy - the very first decision that is made in every poker hand that is dealt - whether to "play" with the two cards you've been dealt, or whether to throw them away ("fold").

    The theory behind this is explained in the "background" below, which I've provided for completeness for your interest. The poker theory is complex, but the assignment itself is pretty simple. The user will study a chart/grid for one of the five seating positions (explained below) from the "study" page which tells them what to do with any two cards they are dealt (i.e. whether to play or fold). Then on the "train" page, they select that seat position (which selects one of five datasets). 

    Then, they press the "new hand" button, which shows a combination of two cards at the bottom of the screen, chosen at random. The user then has two buttons, "play" or "fold", and must select what to do with the given combination. If they select correctly, the "Correct" prompt shows, and if they don't, the "Incorrect" prompt shows. They then hit "new hand" and the process repeats. I am currently considering a score counter if I have time, but this might prove too complex. 

    Background:
                        The charts
    
    In poker, each player is dealt two cards to start.    
    Then a decision must be made, whether to: 1: Call, and pay the entry price for the hand (known as "the big blind"); 2. Bet money, and increase the entry price for the hand for the other players; or 3. Fold your cards and save your money. After this round of betting, three more cards are put face up on the table, and these three cards are known as the "flop". 

    There is no need to explain what happens after the "flop" for the purposes of my explanation. All I am concerned with is the decision described above to call, bet or fold. Most poker strategies advise against ever taking the first option, the "call", as it just shows weakness. Therefore, when a poker player receives their two cards, the smart player has a decision whether to bet/play, or to fold. 

    Much statistical analsis has been done on this decision, and charts/grids have been created which tell the player what to do with every single possible combination of hands. I will be putting 5 examples of these charts on the "Study" page of my website, which if I have time, will be a clickable slideshow, to better illustrate the subtle differences between charts. 

    There are 52 cards in every deck. 4 suits (hearts, diamonds, clubs and spades), and 13 ranks (Ace, King, Queen, Jack, 10, 9, 8...). Two or more cards are either suited (i.e. two hearts), or offsuit (i.e. one club, one heart). In simpler terms, they're suited or they aren't suited. Suited cards are more valuable, as they form flushes, and cards which are close in rank (i.e. 8 and 6) are also more valueable as they form straights (5, 6, 7, 8, 9). This is the background logic of the charts.

    Therefore, as you will see on the charts, every single possible combination of hands can be laid out on a 13 x 13 grid, giving 169 possible combinations. For example, Ace of Hearts and Ten of Hearts is represented as "A10s", for ace ten suited. Ace of Hearts and Ten of Clubs/Diamonds/Spades is represented as "A10o" for ace ten offsuit. Boxes that are coloured green should be played, and boxes coloured red should be folded.

                    The Seat Positions
    One final concept which is crucial to understanding my 
    assignment in the seat positions. In poker, the dealer changes every hand, moving clockwise around the table. This determines who goes first in every round of betting. 

    The most advantageous position at the table is the dealer, as the dealer gets to make their decision last in every round of betting (except ironically in the pre-flop round on which my assignment is based, as the dealer is the second last to decide in this round). In every round, deciding first is a disadvantage because you don't have any information on the other players yet, whereas the player who decides last can inform their decision based on what the other players have already done. 
    
    Very simply, you can play weaker hands when you are seated in a good position, but must only play the strongest hands when sitting in the worst position.
    This means that multiple charts must be learned to properly play poker, and the more charts you know, statistically the better your decisions will be. 

    For the sake of simplicity, I have 5 charts for 5 table positions, which can be seen in the way the image of my table is split into 5 on the "Train" page.



    ----------------------The Code:-----------------------

                        The Study Page
    The basic concept for the study page is to have a slide show with buttons that move to the next image through the gallery. Given that the charts are just five 13 x 13 grids, its really illustrative of the changes in strategy between seat positions if the charts can be viewed like this, as opposed to by scrolling down through the page. 

                        The Train Page
    The table/seats:
    The possible complexities are endless with this. The basic idea is that I will have a picture of a table, as viewed from above, which is common in online poker games. 
    
    There will be five different positions/seats. The idea is that the user will first select which seat to sit at (i.e. what position they want to practice, which will select one of five datasets). 
    
    As explained above, the dealer changes in every hand. In real life, there is a "dealer button" (a big metal coin with "D"/"Dealer" on it) that moves around the table clockwise to represent this. In online poker, the user's icon remains in the same seat, and the dealer button moves around the table, just like in real life. For the purposes of my assignment, I will simply keep the dealer button in the same place, rather than having it move clockwise, and simply have a seat which changes colour or icon, to show the user is sitting there. 

    Behind the scenes, the same action that changes the seat should also select one of five datasets that I have.

    Random card generator:
    There are 52 cards in a deck, and 169 possible card combinations. My first consideration was to have an array with the 52 cards. One is drawn at random, then another is removed from the 51 cards remaining obviously. However this was complex, as the two cards would have to be recognised for the purposes of the chart and the play/fold buttons. 

    Instead, the easy thing seems to be to have an array with the 169 combinations, which looks something like this {AA, AKo, AQo, AJo, A10o...}. If you're usuing a website like this, it can be assumed that you know what these letters mean. The cards drawn must appear on the screen. 

    The training:
    The datasets for the training is much different, in that of the 169 combinations, taking the example of position 5, only 24 combinations should be played. 
    Therefore, in that case, 24 cominations must be remembered as true, and anything other than that can simply be classified as false. 

    I need to have something like If cardDrawn = (one of the 24 combinations in my "play" array) then correctAnswer = play
    If user selects play, return correct. 
    Else, return Incorrect.

    Next hand button:
    Should simply replace the cards on the screen. It must also wipe the displayed "correct/incorrect" message. I must also be careful of the "play/fold" buttons so that they don't destroy everything if clicked out of sequence. 
    
     


    


    
    
    

