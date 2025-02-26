$(document).ready(function () {
  $('#spaForm').submit(function (event) {
    event.preventDefault();

    $('#numberInput').show();
    var num1 = Math.floor(Math.random() * 9) + 1;
    var num2 = Math.floor(Math.random() * 9) + 1;

    $('#number1').text(num1);
    $('#number2').text(num2);

    var correctSum = num1 + num2;

    var userSum = prompt('Calculate the sum: ' + num1 + ' + ' + num2);

    if (userSum != null && parseInt(userSum) === correctSum) {
      $('#spaForm').unbind('submit').submit();
    } else {
      $('#result').text('The calculation is wrong. Please try again.');
      $('#spaForm')[0].reset();
      $('#numberInput').hide();
    }
  });
});