$(document).ready(() => {

    const suit = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
    const rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
    let deck = []
    let playerHand = []
    let dealerHand = []
    let playerScore = 0
    let dealerScore = 0
    
    function deckCreate () {
        for (let i = 0; i < suit.length; i++) {
            for (let k = 0; k < rank.length; k++) {
                deck.push(rank[k] + " of " + suit[i]);
        }
      }
    }

/* Fisher-Yates algorithmic shuffle taken from https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj */
    function deckShuffle (arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
          }
    }

    function calculateScore(hand) {
        let score = 0
        let aces = 0

        for (let i = 0; i < hand.length; i++) {
    
            if (hand[i][0] === "1" ||
                hand[i][0] === "J" ||
                hand[i][0] === "Q" ||
                hand[i][0] === "K") {
                score += 10;
            } else if (hand[i][0] === 'A') {
                score += 11;
                aces += 1;
            } else {
                    score += Number(hand[i][0])
                }
        }
        
        while (score > 21 && aces > 0) {
            score -= 10;
            aces -= 1;
        }

        return score;
    }

    function dealHand () {
        playerHand.push(deck.pop());
        dealerHand.push(deck.pop());
        playerScore = calculateScore(playerHand)
        dealerScore = calculateScore(dealerHand)
    }

    function addCard (hand, score) {
        let newCard = deck.pop();
        hand.push(newCard);
        score = calculateScore(hand)
        return score;
    }

    function resetGame () {
        deck = [];
        playerHand = [];
        dealerHand = [];
        playerScore = 0;
        dealerScore = 0;
        $("#playerHand").empty();
        $("#dealerHand").empty();
        deckCreate();
        deckShuffle(deck);
        dealHand();
        displayCard(playerHand, '#playerHand');
        displayCard(dealerHand, '#dealerHand');
    }
    
    function displayCard (hand, id) {

        let $id = $(id);
        $id.empty();

        for (let c = 0; c < hand.length; c++) {
            let cardImages = $('<img>').attr('src', 'resources/cards/' + hand[c] + '.png');
            $id.append(cardImages)
        }
    }


    deckCreate();
    deckShuffle(deck);

    $('#newGame').on('click', () => {
        $('#title, #newGame').fadeOut("slow", () => {
            $('#dealer').fadeIn("slow", () => {
                $('#introText')
                    .html("<br>Welcome to the BINARY BLUFF CASINO, meat sack. <br> <br> Think you got what it takes to take on GIGABYTE GARY? <br> <br> You look like you've never even played CYBERJACK before!")
                    .fadeIn("slow", () => {
                        $('#deal').fadeIn("slow")
                    });
            });
        });
    });

    $('#deal').on('click', () => {
        dealHand();
        displayCard(playerHand, '#playerHand');
        displayCard(dealerHand, '#dealerHand');
        $('#introText, #deal').fadeOut("slow", () => {
            $('#handText')
                .html(`You have ${playerHand} in your hand. <br><br> GIGABYE GARY places a ${dealerHand} face up on his side of the table. <br> <br> Your score is ${playerScore}, GIGABYTE GARY's score is ${dealerScore}`)
                .fadeIn("slow", () => {
                    $('#hitMe, #stick').fadeIn("slow")
                })
        })
    });

    $('#hitMe').on('click', () => {

        playerScore = addCard(playerHand, playerScore);
        displayCard(playerHand, '#playerHand');

        $('#handText').fadeOut("slow", () => {

            if (playerScore === 21) {

                $('#hitMe, #stick').fadeOut("fast", () => {
                    $('#winText')
                    .html(`Your score is ${playerScore}. You WIN. <br> <br> GAHHHH!!! HOW COULD THIS BE! Nobody has ever beaten GIGABYTE GARY! <br> <br> You must be cheating! Let's play again!`)
                    .fadeIn("slow", () => {
                        $('#playAgain').fadeIn("slow")
                    })
                })

            } else if (playerScore > 21) {

                $('#hitMe, #stick').fadeOut("fast", () => {
                    $('#loseText')
                        .html(`Your score is ${playerScore}. You are BUST. <br> <br> "HAHAHA. You actually thought you could beat GIGABYTE GARY? What hubris!" <br> <br> "Better luck next time, PUNK."`)
                        .fadeIn("slow", () => {
                            $('#playAgain').fadeIn("slow")
                        })
                })
            } else {

                $('#handText').html(`You have ${playerHand.join(', ')} in your hand. <br><br> Your score is ${playerScore}, GIGABYTE GARY's score is ${dealerScore}`).fadeIn("slow");
            }
        });
    });

    $('#stick').on('click', () => {
        
        dealerScore = addCard(dealerHand, dealerScore);
        displayCard(dealerHand, '#dealerHand');
        $('#handText').html(`GARY has ${dealerHand.join(', ')} in his hand. <br> His score is ${dealerScore}`).fadeIn("slow");

        $('#handText, #hitMe, #stick').fadeOut("slow", () => {

            if (dealerScore > 21) {
                $('#winText')
                .html(`GARY'S score is ${dealerScore}. Gary is BUST. You WIN. <br> <br> GAHHHH!!! HOW COULD THIS BE! Nobody has ever beaten GIGABYTE GARY! <br> <br> You must be cheating! Let's play again!`)
                .fadeIn("slow", () => {
                    $('#playAgain').fadeIn("slow")
                });
               
            } else if (dealerScore === 21) {

                $('#loseText')
                    .html(`GIGABYTE GARY scored CYBERJACK. You LOSE. <br> <br> HAHAHA. You actually thought you could beat GIGABYTE GARY? What hubris! <br> <br> Better luck next time, PUNK.`)
                    .fadeIn("slow", () => {
                        $('#playAgain').fadeIn("slow")
                    });

            } else if (dealerScore > playerScore && dealerScore <= 21) {

                $('#loseText')
                    .html(`GIGABYTE GARY'S score is ${dealerScore}. <br><br> GIGABYTE GARY scored more than you! You LOSE. <br> <br> HAHAHA. You actually thought you could beat GIGABYTE GARY? What hubris! <br> <br> Better luck next time, PUNK.`)
                    .fadeIn("slow", () => {
                        $('#playAgain').fadeIn("slow")
                });

            } else {
                dealerScore = addCard(dealerHand, dealerScore)
                displayCard(dealerHand, '#dealerHand');
            }
        });
    });

    $('#playAgain').on('click', () => {

        resetGame();

        $('#winText, #loseText, #playAgain').fadeOut("fast", () => {
            $('#handText')
                .html(`You have ${playerHand} in your hand. <br><br> GIGABYE GARY places a ${dealerHand} face up on his side of the table. <br> <br> Your score is ${playerScore}, GIGABYTE GARY's score is ${dealerScore}`)
                .fadeIn("slow", () => {
                    $('#hitMe, #stick').fadeIn("slow")
                })
        })
    });

});