$(document).ready(() => {

    const suit = ['Hearts', 'Clubs', 'Diamonds', 'Spaces']
    const rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
    const deck = []
    let playerHand = []
    let dealerHand = []
    
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
            const j = Math.floor(Math.random() * (i + 1));
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
          }
    }

    function dealHand () {
        playerHand = deck.pop()
        dealerHand = deck.pop()
    }

    deckCreate();
    deckShuffle(deck);

    $('#newGame').on('click', () => {
        $('#title, #newGame').fadeOut("slow", () => {
            $('#dealer').fadeIn("slow", () => {
                $('#introText')
                    .html("<br>Welcome to the Binary Bluff Casino, MEAT SACK. <br> <br> Think you got what it takes to take on GIGABYTE GARY? <br> <br> You look like you've never even played CYBERJACK before!")
                    .fadeIn("slow", () => {
                        $('#deal').fadeIn("slow")
                    });
            });
        });
    });

    $('#deal').on('click', () => {
        dealHand();
        $('#introText, #deal').fadeOut("slow", () => {
            $('#handText')
                .html(`You have ${playerHand} in your hand. <br><br> GIGABYE GARY places a ${dealerHand} face up on his side of the table`);

        })
    })

});