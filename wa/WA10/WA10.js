
       //Problem 1
       //Problem3
   let data=[
      {"firstName":"Sam", "department":"Tech", "designation":"Manager", "salary":40000, "raise eligible":"true"},
      {"firstName":"Mary", "department":"Finance", "designation":"Trainee", "salary":18500, "raise eligible":"true"},
      {"firstName":"Bill", "department":"HR", "designation":"Executive", "salary":21200, "raise eligible":"false"}, 
      {"firstName":"Anna", "department":"Tech", "designation":"Executive", "salary":25600, "raise eligible":"false"}, 
    ]

    console.log("Problem 1");
    console.log(data[0]);
    console.log(data[1]);
    console.log(data[2]);
    

    console.log("Problem 3");
    console.log(data[0]);
    console.log(data[1]);
    console.log(data[2]);
    console.log(data[3]);
    

//Problem 2
    let company =[
        {"companyName":"Tech Stars", "website":"www.techstars.site", "employees":"array of Employees",}
      ]

    console.log("Problem 2");
    console.log(company);

 //Problem 4
 let  salaryTotal = 0;
    for (let i = 0; i < data.length; i++)
       salaryTotal += Number(data [i]['salary']);
     
    console.log("Problem 4");
     console.log(salaryTotal);


    //Problem 5
    for (let i = 0; i < data.length; i++){

     if (data[i] ['raise eligible'] == "true") {
     let raise = (data[i] ['salary'] * 1.1);
     data[i] ['salary'] = raise;
     data[i] ['raise eligible'] = "false";
     }
    }
    console.log("Problem 5");
    console.log(data[0]);
    console.log(data[1]);
    console.log(data[2]);
    console.log(data[3]);


     //Problem 6
     let wfh=['Anna', 'Sam'];
        

    for (let i = 0; i < data.length; i++){
        
        
        if (wfh.includes(data[i]['firstName'])) {
            data[i] ['wfh'] = "true";   
        }
        else
            data[i] ['wfh'] = "false";  
    
    }
    console.log("Problem 6");
    console.log(data[0]);
    console.log(data[1]);
    console.log(data[2]);
    console.log(data[3]);