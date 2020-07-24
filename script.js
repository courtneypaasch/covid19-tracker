


$('document').ready(function () {
    // $('#search').on('click', function (event) {
    //     event.preventDefault();

    

    function topFIve() {

        var state = $('.pure-input-1-2').val(); 
        console.log(state);

        $.ajax({
            url: 'https://covidtracking.com/api/v1/states/'+ state +'/current.json',
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

