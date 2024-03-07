

var result= document.getElementById("result")
var test_dob = document.getElementById("dob")
var btn = document.getElementById("btn")

//  result = dob_value - current_value






  // var day1 = dob_value.getDate()


  // var month1 = dob_value.getMonth()






// console.log(day1)


// var day2 = current_value.getDate()


//   var month2 = current_value.getMonth()

  

// console.log(day2 - day1)



//  var  day = day1 - day2

// var  month = month1 - month2





function  nowAge(){
  var   value = test_dob.value
var dob_value = new Date(value)

var current_value = new Date()

  var year2 = current_value.getFullYear()
  var year1= dob_value.getFullYear()
  var  year = year1 - year2 ;
          
          console.log( year * -1 )

       result.innerText= ` YOUR AGE IS NOW  -  ${year * -1}`



   





}





btn.addEventListener("click", nowAge)
