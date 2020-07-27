


$('document').ready(function () {
    // $('#search').on('click', function (event) {
    //     event.preventDefault();
    var covidDATA = [];


    function topFIve() {

        // First we call the api that will show the 50 states with the data
        // We need to make a for loop to go through all the "total cases" in each state and then pick the top 5
        //create a new array called covidData
        //inside this array, we create an object for each state
        // we loop through the response and grab only the data elements that we want and push into a new object and then push that into the covidDATA array

        $.ajax({
            url: 'https://covidtracking.com/api/v1/states/current.json',
            method: 'GET'
        }).then(function (response) {
            //console.log(response);
            console.log(response[0]);
            //console.log(response[1].state);
            // console.log(response[1].positive);
            // console.log(response[1].total);
            // console.log(response[1].death);
            // console.log(response[1].date);
            var covidDATA = [];
            //Here we create our own covidDATA array from
            for (var i = 0; i < response.length; i++) {


                // make a new Object, store ONLY THE VALUES YOU WANT {state: response[i].state, positive: response[i].positive}
                // Then you PUSH this new object into an array.
                var sanitizedData = new Object();
                sanitizedData["date"] = response[i].date;
                sanitizedData["state"] = response[i].state;
                //sanitizedData["total"] = response[i].total;
                //response-positive gives the total number of positive cases in the state
                sanitizedData["positive"] = response[i].positive;
                sanitizedData["newcases"] = response[i].totalTestResultsIncrease;
                //total number of deaths in the state
                sanitizedData["death"] = response[i].death;

                covidDATA.push(sanitizedData);
                //console.log(sanitizedData);
                //console.log(covidDATA);
            }

            console.log(covidDATA[1]["positive"]);

            // writing a sort logic compare function to pick the topmost(highest) 5 states with most cases --SORT ON TOTAL NUMBER OF CASES
            function compare(a, b) {
                var comparison = 0;
                //here we can change the parameter that we want to sort by.. note..this is number sort
                var casesA = a.positive;
                var casesB = b.positive;

                //descending order sort so that if the first number is greater than the second, then want to keep highest first
                if (casesA > casesB) {
                    comparison = -1;
                } else if (casesA < casesB) {
                    comparison = 1;
                }
                return comparison;
            }

            //Here is where we call the sort function to sort our covidDATA array based on the total number of cases
            //higher number will be first - descending order sorting
            sortedCovidDATA = covidDATA.sort(compare);
            console.log(sortedCovidDATA);

            // creating a for loop to pick the top 5 states with the maximum count and displaying it in the front page


        //     //for (var i = 0; i < 5; i++) {

        //         //we will be plugging in the counts data into index.html here
        //         //var totalCase = response.positive;
        //         var totalCase = covidDATA[i].positive;
        //         console.log(totalCase);
        //         var hOne = $('<h6>').text(totalCase);

        //         $('.totalCasesIndex0').append(hOne);

        //         //var newCase = response.positiveIncrease;
        //         var newCase = covidDATA[i].newcases;
        //         var hTwo = $('<h6>').text(newCase);
        //         $('.newCaseIndex0').append(hTwo);

        //         // var totalDeath = response.death;
        //         var totalDeath = covidDATA[i].death;
        //         var hThree = $('<h6>').text(totalDeath);
        //         $('.totalDeathIndex0').append(hThree);
        //    // }

        //top state 1
       // $('.headerIndex0').append(sortedCovidDATA[0].state);

        $('.imgIndex0').attr("src",statePicList[sortedCovidDATA[0].state]);
        $('.headerIndex0').append( $('<h2>').text(sortedCovidDATA[0].state));
       // $('.totalCasesIndex0').append(sortedCovidDATA[0].positive);
        $('.totalCasesIndex0').append( $('<h4>').text(sortedCovidDATA[0].positive));
       // $('.newCaseIndex0').append(sortedCovidDATA[0].newcases);
        $('.newCaseIndex0').append( $('<h4>').text(sortedCovidDATA[0].newcases));
        $('.totalDeathIndex0').append( $('<h4>').text(sortedCovidDATA[0].death));

        //top state 2
        $('.imgIndex1').attr("src",statePicList[sortedCovidDATA[1].state]);
        $('.headerIndex1').append( $('<h2>').text(sortedCovidDATA[1].state));
         $('.totalCasesIndex1').append( $('<h4>').text(sortedCovidDATA[1].positive));
         $('.newCaseIndex1').append( $('<h4>').text(sortedCovidDATA[1].newcases));
         $('.totalDeathIndex1').append( $('<h4>').text(sortedCovidDATA[1].death));

         //top state 3
         $('.imgIndex2').attr("src",statePicList[sortedCovidDATA[2].state]);
         $('.headerIndex2').append( $('<h2>').text(sortedCovidDATA[2].state));
          $('.totalCasesIndex2').append( $('<h4>').text(sortedCovidDATA[2].positive));
          $('.newCaseIndex2').append( $('<h4>').text(sortedCovidDATA[2].newcases));
          $('.totalDeathIndex2').append( $('<h4>').text(sortedCovidDATA[2].death));

          //top state 4
          $('.imgIndex3').attr("src",statePicList[sortedCovidDATA[3].state]);
          $('.headerIndex3').append( $('<h2>').text(sortedCovidDATA[3].state));
           $('.totalCasesIndex3').append( $('<h4>').text(sortedCovidDATA[3].positive));
           $('.newCaseIndex3').append( $('<h4>').text(sortedCovidDATA[3].newcases));
           $('.totalDeathIndex3').append( $('<h4>').text(sortedCovidDATA[3].death));

           //top state 5
           $('.imgIndex4').attr("src",statePicList[sortedCovidDATA[4].state]);
           $('.headerIndex4').append( $('<h2>').text(sortedCovidDATA[4].state));
            $('.totalCasesIndex4').append( $('<h4>').text(sortedCovidDATA[4].positive));
            $('.newCaseIndex4').append( $('<h4>').text(sortedCovidDATA[4].newcases));
            $('.totalDeathIndex4').append( $('<h4>').text(sortedCovidDATA[4].death));

            //displaying the date for the data shown
            $('.date').append( $('<h4>').text(sortedCovidDATA[0].date));
        })
    }

    //function clickedstate
    //toggle the searched-state to show
    //dynamically using javascript --add a class


    topFIve();

   console.log(covidDATA[6]);
   //Images from this site into the images folder- https://www.pngegg.com/en/search?q=us+state+icons&page=2
    var statePicList = {
        "CA":"./images/CA.png",
        "FL":"./images/FL.png",
        "NY":"./images/NY.png",
        "NJ":"./images/NJ.png",
        "TX":"./images/TX.png"
    };
    console.log(statePicList.CA);

  //code when we hit the see more button
  //see more button not working properly for second stage onwards
  //Here we he to pass in the state field and then display more stats
   document.getElementById("uibutton").addEventListener("click",function(){
    $(".searched-state").show();
    $(".worst-five-states").hide();
   });

   //code when we select a state from the dropdown
   //id - multi-state
   //todo- fill logic to either reuse the data stats from covidDATA or call the api again
   $("#multi-state").change(function(){
        var selectedState = $(this).find(':selected').val();
        console.log(selectedState);
        $(".searched-state").show();
        $(".worst-five-states").hide();
   });

});

