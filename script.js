


$('document').ready(function () {
    // $('#search').on('click', function (event) {
    //     event.preventDefault();

    

    function topFIve() {



        // First we call the api that will show the 50 states with the data 

        // We need to make a for loop to go through all the "postive" in each array 

        // 

        $.ajax({
            url: 'https://covidtracking.com/api/v1/states/current.json',
            method: 'GET'
        }).then(function (response) {
            console.log(response);



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

