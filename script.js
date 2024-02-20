(function () {
    document.getElementById('convert').addEventListener('submit', function (event) {
        event.preventDefault();
        const distance = parseFloat(document.getElementById('distance').value);
        // alert(distance);
        var answer = document.getElementById('answer');
        if (distance) {
            // convert
            const conversion = (distance * 1.609344).toFixed(3);
            // const roundedConversion = conversion.toFixed(3);    // rounds off to 3 decimal places
            // alert(roundedConversion);
            // alert(conversion);
            answer.innerHTML = `<h2>${distance} miles converts to ${conversion} Kms</h2>`;
        }
        else {
            answer.innerHTML = '<h2>Please enter a number!!!</h2>';
            // alert("Please enter a valid distance!!!");
        }
    });
}
)();
