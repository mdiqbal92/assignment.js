
// Solution of problem1
function kilometerToMeter(kilo){

    if (kilo<0){
        console.log("Distance can not be negative.");
    }
        else{
            // converting kilometer into meter.
            return kilo*1000; 
        }
}

// Solution of problem2
function budgetCalculator(watch, mobile, laptop){
    if (watch == 0 && mobile == 0 && laptop == 0){
        console.log("You didn't buy anything.")
    }
    else if(watch < 0 || mobile < 0 || laptop < 0){
        console.log("Product Items cannot be negative. Enter a positive valid number")
        }
    else{
        var watch = watch * 50;
        var mobile = mobile * 100;
        var laptop = laptop * 500;
        var result = watch + mobile + laptop;
        return result;
    }
}

//  Solution of problem3
 function hotelCost(days){
     if (days == 0){
         console.log("You did not check-in into hotel.")
     }
     else if(days < 0){
         console.log("Enter a positive valid number of days")
     }
     else{
        var cost =0;
        //  finding initial Rate for first 10 days.
         if(days <= 10){
             cost = days * 100;
         }
         //  finding discount Rate for after 10 days.
         else if(days <= 20){
             var initialRate = 10 * 100;
             var remaining = days - 10;
             var discountRate = remaining * 80;
             cost = initialRate + discountRate; 
         }
         //  finding final Rate for after 20 days and total.
         else{
             var initialRate = 10 * 100;
             var discountRate = 10 * 80;
             var remaining = days - 20;
             var finalRate = remaining * 50;
             cost = initialRate + discountRate + finalRate;
            }
         return cost;
        }
    }
     

// Solution of problem4
function megaFriend(friendsName){
    if(friendsName = null){
        console.log("There is no Name. Please insert some name in the array")
    }
    else{
        var megaFriendName = [0]; 
        // exploring all the elements in the array
        for(i=0; i<friendsName.length; i++){
        // identify the bigger string length
        if(megaFriendName.length < friendsName[i].length){
        // assigning the biggest string length name of the array
        megaFriendName = friendsName[i];
        }
        return megaFriendName;
    }
    }  
}

