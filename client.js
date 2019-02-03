console.log(' log client js ');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery is ready');
    $('#employeeSubmitButton').on('click', submitEmployeeInformation)
    console.log('employee Click Button Clicked');
    $('.clearInputFields').val('');

  
}//end onReady function
    
function submitEmployeeInformation() {
    console.log('Employee information submit function');
    let firstName = $( '#firstName' ).val();
    let lastName =  $( '#lastName' ).val();
    let idNumber = $( '#idNumber').val();
    let jobTitle = $( '#jobTitle').val();
    let anualSalary = $( '#annualSalary').val();
$('#newEmployeeRow').append( `<tr><td>` 
+firstName + `</td><td>` +lastName+ `</td><td>` +idNumber+ `</td><td>` +jobTitle+ `</td><td>` +anualSalary+ `</td></tr>`

);

$('.clearInputFields').val('');

}//end submitEmployee info Function