$(document).ready(function(){
         
          
    //display day at top of planner
    $('#currentDay').text(moment().format('dddd' + ', '  + 'MMMM Do YYYY'));
    //display the current time at the top
    $('#currentTime').text(moment().format('hh:mm a'));

    var time = moment().format('HH');


    //logic for past present and future
    if (time === '09'){
      clearClasses();
      $('#nineUserInput').addClass('present')
      $('#tenUserInput').addClass('future')
      $('#elevenUserInput').addClass('future')
      $('#twelveUserInput').addClass('future')
      $('#oneUserInput').addClass('future')
      $('#twoUserInput').addClass('future')
      $('#threeUserInput').addClass('future')
      $('#fourUserInput').addClass('future')
      $('#fiveUserInput').addClass('future')
    } else if (time === '10'){
      clearClasses();
      $('#nineUserInput').addClass('past')
      $('#tenUserInput').addClass('present')
      $('#elevenUserInput').addClass('future')
      $('#twelveUserInput').addClass('future')
      $('#oneUserInput').addClass('future')
      $('#twoUserInput').addClass('future')
      $('#threeUserInput').addClass('future')
      $('#fourUserInput').addClass('future')
      $('#fiveUserInput').addClass('future')
    } else if (time === '11'){
      clearClasses();
      $('#nineUserInput').addClass('past')
      $('#tenUserInput').addClass('past')
      $('#elevenUserInput').addClass('present')
      $('#twelveUserInput').addClass('future')
      $('#oneUserInput').addClass('future')
      $('#twoUserInput').addClass('future')
      $('#threeUserInput').addClass('future')
      $('#fourUserInput').addClass('future')
      $('#fiveUserInput').addClass('future')
    } else if (time === '12'){
      clearClasses();
      $('#nineUserInput').addClass('past')
      $('#tenUserInput').addClass('past')
      $('#elevenUserInput').addClass('past')
      $('#twelveUserInput').addClass('present')
      $('#oneUserInput').addClass('future')
      $('#twoUserInput').addClass('future')
      $('#threeUserInput').addClass('future')
      $('#fourUserInput').addClass('future')
      $('#fiveUserInput').addClass('future')
    } else if (time === '13'){
      clearClasses();
      $('#nineUserInput').addClass('past')
      $('#tenUserInput').addClass('past')
      $('#elevenUserInput').addClass('past')
      $('#twelveUserInput').addClass('past')
      $('#oneUserInput').addClass('present')
      $('#twoUserInput').addClass('future')
      $('#threeUserInput').addClass('future')
      $('#fourUserInput').addClass('future')
      $('#fiveUserInput').addClass('future')
    }else if (time === '14'){
      clearClasses();
      $('#nineUserInput').addClass('past')
      $('#tenUserInput').addClass('past')
      $('#elevenUserInput').addClass('past')
      $('#twelveUserInput').addClass('past')
      $('#oneUserInput').addClass('past')
      $('#twoUserInput').addClass('present')
      $('#threeUserInput').addClass('future')
      $('#fourUserInput').addClass('future')
      $('#fiveUserInput').addClass('future')
    }else if (time === '15'){
      clearClasses();
      $('#nineUserInput').addClass('past')
      $('#tenUserInput').addClass('past')
      $('#elevenUserInput').addClass('past')
      $('#twelveUserInput').addClass('past')
      $('#oneUserInput').addClass('past')
      $('#twoUserInput').addClass('past')
      $('#threeUserInput').addClass('present')
      $('#fourUserInput').addClass('future')
      $('#fiveUserInput').addClass('future')
    }else if (time === '16'){
      clearClasses();
      $('#nineUserInput').addClass('past')
      $('#tenUserInput').addClass('past')
      $('#elevenUserInput').addClass('past')
      $('#twelveUserInput').addClass('past')
      $('#oneUserInput').addClass('past')
      $('#twoUserInput').addClass('past')
      $('#threeUserInput').addClass('past')
      $('#fourUserInput').addClass('present')
      $('#fiveUserInput').addClass('future')
    }else if (time === '17'){
      clearClasses();
      $('#nineUserInput').addClass('past')
      $('#tenUserInput').addClass('past')
      $('#elevenUserInput').addClass('past')
      $('#twelveUserInput').addClass('past')
      $('#oneUserInput').addClass('past')
      $('#twoUserInput').addClass('past')
      $('#threeUserInput').addClass('past')
      $('#fourUserInput').addClass('past')
      $('#fiveUserInput').addClass('present')
    }else if (time > '18'){
      clearClasses();
      $('#nineUserInput').addClass('past')
      $('#tenUserInput').addClass('past')
      $('#elevenUserInput').addClass('past')
      $('#twelveUserInput').addClass('past')
      $('#oneUserInput').addClass('past')
      $('#twoUserInput').addClass('past')
      $('#threeUserInput').addClass('past')
      $('#fourUserInput').addClass('past')
      $('#fiveUserInput').addClass('past')
    }
    else if (time < '09') {
      clearClasses();
      $('#nineUserInput').addClass('future')
      $('#tenUserInput').addClass('future')
      $('#elevenUserInput').addClass('future')
      $('#twelveUserInput').addClass('future')
      $('#oneUserInput').addClass('future')
      $('#twoUserInput').addClass('future')
      $('#threeUserInput').addClass('future')
      $('#fourUserInput').addClass('future')
      $('#fiveUserInput').addClass('future')
    };
    // function to clear the class of the boxes
    function clearClasses(){
      $('#nineUserInput').removeClass('past present future')
      $('#tenUserInput').removeClass('past present future')
      $('#elevenUserInput').removeClass('past present future')
      $('#twelveUserInout').removeClass('past present future')
      $('#oneUserInput').removeClass('past present future')
      $('#twoUserInput').removeClass('past present future')
      $('#threeUserInput').removeClass('past present future')
      $('#fourUserInput').removeClass('past present future')
      $('#fiveUserInput').removeClass('past present future')
    }
    // target and acquire items in the storage
    var nineNewText = localStorage.getItem('nine');
    var tenNewText = localStorage.getItem('ten');
    var elevenNewText = localStorage.getItem('eleven');
    var twelveNewText = localStorage.getItem('twelve');
    var oneNewText = localStorage.getItem('one');
    var twoNewText = localStorage.getItem('two');
    var threeNewText = localStorage.getItem('three');
    var fourNewText = localStorage.getItem('four');
    var fiveNewText = localStorage.getItem('five');
    //set the textboxes equal to the new input saved
       $('#nineUserInput').val(nineNewText);
       $('#tenUserInput').val(tenNewText);
       $('#elevenUserInput').val(elevenNewText);
       $('#twelveUserInput').val(twelveNewText);
       $('#oneUserInput').val(oneNewText);
       $('#twoUserInput').val(twoNewText);
       $('#threeUserInput').val(threeNewText);
       $('#fourUserInput').val(fourNewText);
       $('#fiveUserInput').val(fiveNewText);

    // all the buttons to save to local storage 
            //save button for 9am
   $('#nineButton').on('click', function(){
          //put the user value into a variable
      var nineText = $('#nineUserInput').val();
             //save to local storage
       localStorage.setItem('nine', nineText)
    }); 

            //save button for 10am
   $('#tenButton').on('click', function(){
      var tenText = $('#tenUserInput').val();
       localStorage.setItem('ten', tenText)
    }); 

          //save button for 11am
   $('#elevenButton').on('click', function(){
      var elevenText = $('#elevenUserInput').val();
       localStorage.setItem('eleven', elevenText)
    }); 

          //save button for 12pm
   $('#twelveButton').on('click', function(){
      var twelveText = $('#twelveUserInput').val();
       localStorage.setItem('twelve', twelveText)
    }); 

          //save button for 1pm
   $('#oneButton').on('click', function(){
      var oneText = $('#oneUserInput').val();
       localStorage.setItem('one', oneText)
    }); 

          //save button for 2pm
   $('#twoButton').on('click', function(){
      var twoText = $('#twoUserInput').val();
       localStorage.setItem('two', twoText)
    }); 

         //save button for 3pm
   $('#threeButton').on('click', function(){
      var threeText = $('#threeUserInput').val();
       localStorage.setItem('three', threeText)
    }); 

          //save button for 4pm
   $('#fourButton').on('click', function(){
      var fourText = $('#fourUserInput').val();
       localStorage.setItem('four', fourText)
    }); 

          //save button for 5pm
   $('#fiveButton').on('click', function(){
      var fiveText = $('#fiveUserInput').val();
       localStorage.setItem('five', fiveText)
    }); 
  }); // this is the end of the document ready
