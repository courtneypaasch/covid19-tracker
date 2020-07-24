


$('document').ready(function () {
    // $('#search').on('click', function (event) {
    //     event.preventDefault();

    

    function topFIve() {

        var covidDATA = [];

        // First we call the api that will show the 50 states with the data 

        // We need to make a for loop to go through all the "postive" in each array 

        // 

        $.ajax({
            url: 'https://covidtracking.com/api/v1/states/current.json',
            method: 'GET'
        }).then(function (response) {
            // console.log(response);


            for(var i = 0; i < response.length;  i++) {
                // response = [{}, {}, {}]
                // {} = values you don't want
                // {state = "Arizona", positive = 123456}
                // make a new Object, store ONLY THE VALUES YOU WANT {state: response[i].state, positive: response[i].positive}
                // Then you PUSH this new object into an array.
                let sanitizedData = new Object();
                sanitizedData.entries(state: response[i].state, positive: response[i].positive);
                covidDATA.push(sanitizedData);
                console.log(response[i].positive)

            }

            //I have this ARRAY of Objects that has SANITIZED data
            // I will do by sorting algorithm = for loop that compares that object's positive. 
            // for(i = 0; i < covidData.length; i++) {
            // response[i].positive > response[i+1].positive
            // }
            // for(i = 0; i < 5; i++){return covidDATA[i]}
            var totalCase = response.positive;
            var hOne = $('<h6>').text(totalCase);
            $('.totalCasesIndex0').append(hOne);

            var newCase = response.positiveIncrease;
            var hTwo = $('<h6>').text(newCase);
            $('.newCaseIndex0').append(hTwo);

            var totalDeath = response.death;
            var hThree = $('<h6>').text(totalDeath);
            $('.totalDeathIndex0').append(hThree);
        });
    }

    topFIve();
// });
});

