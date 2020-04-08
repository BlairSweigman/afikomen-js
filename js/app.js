/* 
 *  This code is copyrighted by Worth Consulting.
 *  This code can be modified, but not redistributed without
 *  permission of Worth Consulting.
 */
$(document).ready(function () {
    var afikomen;
    var startTime = 0;

    /**
     * randomiz - sets afikomen to an integer between 1 and 10
     *   */
    const randomize = () => {
        afikomen = Math.floor(Math.random() * 25) + 1;
    };



    /** 
     * showWin - hides the board, animates the Afikomen, and shows time
     * 
     * */
    const showWin = () => {
        MIDIjs.play('media/dayenu.mid');
        $("#game").hide();
        $("#header").empty().append("Mazel Tov! You found the Afikomen!");
        $('#wingame').fadeIn(500).show();
        animateIt();
        const endTime = new Date().getTime();
        const duration = (endTime - startTime) / 1000;
        $("#time").empty().append(`You took ${duration.toFixed(2)} seconds.`);
    };

    /** hideBox - hides the box in a fadeout, resets clock on first box clicked
     * 
     * @param {int} id - the box to hide  
     * 
     *   */
    const hideBox = (id) => {
        $("#trig" + id).fadeOut(500);
        if (startTime === 0) {
            startTime = new Date().getTime();

        }
    };
    /** 
     *  setBpx - sets the onclick event for the box
     *  if the box matches the afikomen, show the win, 
     *  if not, hide the box
     *  
     *   @param (int) id - box to set 
     * 
     */
    const setBox = (id) => {
        $("#trig" + id).click((e) => {
            e.preventDefault();
            if (afikomen === id) {
<<<<<<< HEAD
                showWin();
=======
               
                MIDIjs.play('media/dayenu.mid');
                $("#game").hide();
                
                $("#header").empty().append("Mazel Tov! You found the Afikomen!");
                $('#wingame').fadeIn(500).show();
                const endTime = new Date().getTime();
                const duration = (endTime-startTime)/1000;
                $("#time").empty().append(`You took ${duration} seconds.`);
                
>>>>>>> parent of 10b6255... rotating Afikomen
            } else {
                hideBox(id);
            }
        });
    };

    /**
     * setBpxes - sets onlick event for all the boxes
     * @returns {undefined}
     */
    const setBoxes = () => {
        for (let i = 1; i <= 25; i++) {
            setBox(i);

        }


    };
    /**
     * resetBoard - hides win,  clears timer,resets the game board, randomizes 
     * the Afikomen
     * @returns {undefined}
     */
    const resetBoard = () => {
        startTime = 0;
        for (let i = 1; i <= 25; i++) {
            $("#trig" + i).show();
        }
        randomize();
        $("#header").empty().append("Find the Afikomen");
        $("#game").show();
    };

    /**
     * onReset - stops music, hides win, resets afikomen position, resets board 
     * @returns {undefined}
     */
    const onReset = () => {
        $("#reset").click((e) => {
            e.preventDefault();
            MIDIjs.stop();
            $("#wingame").hide();
<<<<<<< HEAD
            $('#afi').css('transform', 'rotate(0deg)');
=======
>>>>>>> parent of 10b6255... rotating Afikomen
            resetBoard();

        });
    };
<<<<<<< HEAD

    /**
     * animateIt - Spins the afikomen
     * @returns {undefined}
     */
    const animateIt = () => {
        $('#afi').css('transform', 'rotate(135deg)');
    };
/**
 * Main - randomizes Afikomen, sets put board, sets up reset button
 * @returns {undefined}
 */
    const main = () => {
        randomize();
        setBoxes();
        onReset();
    };

    main();
=======
    
    randomize();
    setBoxes();
    onReset();
>>>>>>> parent of 10b6255... rotating Afikomen
});

