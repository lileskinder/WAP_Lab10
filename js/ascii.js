 $(function() {
        var initialText =null;
        const animationsel = $("#animation");
        const fontChanger = $("#fontsize");
        const startbtn = $("#start");
        const stopbtn = $("#stop");  
        var TimerId = null;
        var speed = 250;
        var counter =0;
        var  characterItem = null;

        fontChanger.change(function() {
           
            var fontstr = $(this).children("option:selected").val();

            $("#text-area").css({ 'font-size': fontstr });

            });


            $("#turbo").change(function() {

                if(this.checked) {
                  speed =50;
                } 
                else 
                {
                    speed =250;
                }

                clearInterval(TimerId);

              TimerId = setInterval(()=>animateFunc(counter, characterItem), speed);

            });

         
        animationsel.change(function() {
           
            var selectedanimation = $(this).children("option:selected").val();

           if(selectedanimation != "selected") {

            $("#text-area").text(ANIMATIONS[selectedanimation]);
        
           } 

            });


            startbtn.click(function() {

               


                var items = $("#text-area").val();
                initialText = items;
                stopbtn.removeAttr("disabled");
                
                if(items) {
                    

                    characterItem =  items.split("=====\n"); 
                   
                   
                    
                    counter =0;
                  
                 
                        TimerId = setInterval(()=>animateFunc(counter, characterItem), speed);

                    
                }

                startbtn.prop( "disabled", true );
    
                });

                function animateFunc(value, characterItem) {

                    $("#text-area").text(characterItem[value]);

                    if(value == characterItem.length-1) {
                        counter=0;
                      
                    } else {
                        counter = counter+1;

                    }
                    
                }


                stopbtn.click(function() {


                    clearInterval(TimerId);
                    $("#text-area").text(initialText);
                    stopbtn.prop( "disabled", true );

                    startbtn.prop( "disabled", false );
        
                    });





      
            
        
        });

    
 

    