/* 
 *  This code is copyrighted by Worth Consulting.
 *  This code can be modified, but not redistributed without
 *  permission of Worth Consulting.
 */
$(document).ready(function () {
    var afikomen;
    var startTime =0;
    const randomize = () => {
        afikomen = Math.floor(Math.random() * 25) + 1;
    };
    const setBox = (id) => {
     
        $("#trig" + id).click((e) => {
            e.preventDefault();
          
            if (afikomen === id) {
               
                MIDIjs.play('media/dayenu.mid');
                $("#game").hide();
                
                $("#header").empty().append("Mazel Tov! You found the Afikomen!");
                $('#wingame').fadeIn(500).show();
                const endTime = new Date().getTime();
                const duration = (endTime-startTime)/1000;
                $("#time").empty().append(`You took ${duration} seconds.`);
                
            } else {
                $("#trig" +id).fadeOut(500)  ;  
                if (startTime===0) {
                    startTime = new Date().getTime();
                   
                }
            }
        });
    };
    const setBoxes = () => {
       
        for (let i = 1; i <= 25; i++) {
            setBox(i);

        }


    };
    const resetBoard = () => {
        startTime=0;
        for (let i=1; i<=25;i++) {
            $("#trig"+i).show();
        }
         afikomen = Math.floor(Math.random() * 25) + 1;
        $("#header").empty().append("Find the Afikomen")
         $("#game").show();
    };
    const onReset = () => {
        $("#reset").click((e)=>{
            e.preventDefault();
            MIDIjs.stop();
            $("#wingame").hide();
            resetBoard();
           
        });
    };
    
    randomize();
    setBoxes();
    onReset();
});

