// Copyright (c) 2022 Edward Mcnamara All rights reserved
//
// Created by: Edward Mcnamara
// Created on: May 2022
// This file contains the JS functions for index.html

'use strict';
/**
 * This function checks which disscocuts the user is eligible for based on their age and the day of the week 
 */ 
function check() {
  // Getting age from user
  let age = parseInt(document.getElementById('userAge').value)
  let select = document.getElementById('days')
  let day = select.options[select.selectedIndex].value
  let result;

  
 if (age < 0) {
  result = "You have entered an invalid age, please try again."
 } else if (age <= 5 || age >= 95 ) {
  result = "We offer free admission to visitors 5 and under and 95 and older! Because you're " + age + ", you're eligible for this discount!";
} else if (day == "tuesday" || day == "thursday") {
  result = "Congratulations! you get a discount because today is " + day + ". Unfortunately  there is a maximum of 1 discount per person. So if you're a student, you may only get the discount related to the day of the week" 
} else if (age >= 12 && age <= 21) {
  result = "Congratulations! You get a discount because you are a student of age " + age + " . Please redeem your discount at the entrance fee station"
} else {
  result = "You pay the regular price. There are no discounts for you today. Come back on Tuesday or Thursday to get yourself a discount :)"
}  
  // Displaying results 
  document.getElementById('result').innerHTML = result
}