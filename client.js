console.log(' log client js ');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery is ready');
    $('#employeeSubmitButton').on('click', submitEmployeeInformation)
    console.log('employee Click Button Clicked');
    $('.clearInputFields').val('');
let annualCosts = 0; 
annualCosts = annualCosts + annualSalary;
console.log('annualCosts equation');
  
}//end onReady function


let annualCosts = 0; //varialble deffinition for annualCosts within the submitEmployee
let monthlyCosts = 0;

function submitEmployeeInformation() {
    console.log('Employee information submit function');
    let firstName = $( '#firstName' ).val();
    let lastName =  $( '#lastName' ).val();
    let idNumber = $( '#idNumber').val();
    let jobTitle = $( '#jobTitle').val();
    let annualSalary = $( '#annualSalary').val();
$('#newEmployeeRow').append( `<tr><td>` 
+firstName + `</td><td>` +lastName+ `</td><td>` +idNumber+ `</td><td>` +jobTitle+ `</td><td>` +annualSalary+ `</td></tr>`
);//end submitEmployeeInformation

$('.clearInputFields').val('');

//annual costs equations
annualCosts += Number(annualSalary);
console.log('this is the annual cost', annualCosts);


console.log('annualCosts equation');
//monthly costs
monthlyCosts = Number(annualCosts/12);
console.log('monthly costs');

$('#monthlyCalculator').text(monthlyCosts);
if (monthlyCosts > 20000){
    console.log('Monthly Cost:', monthlyCosts);
    
}//end if statement




}//end submitEmployee info Function