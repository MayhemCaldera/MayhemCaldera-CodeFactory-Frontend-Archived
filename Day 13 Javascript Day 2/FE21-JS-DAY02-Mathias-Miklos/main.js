        //             // Crystal Gazer

        //             function crystalGazer(job_title,  location, partners_name,number_of_children) {

        //                 let result = (`"You will be a ${job_title} in ${location} and married to ${partners_name} with ${number_of_children} children"`);
        //                 console.log(result)
                        
        //             }
                    
        //             crystalGazer("WebDeveloper" , "near_Vienna" , "Barbara" , 1);
                    
                    
        //                                 // Age Calculator
                    
                    
        //             // function ageCalculator (current_year, birth_year) {
                    
        //             //         let result = current_year-birth_year;
        //             //         console.log(result);
        //             // }
                    
        //             // ageCalculator(2021,1987);
                    
                    
                    
        //             //                         // Age Calculator Advanced
                    
                    
                    
        //             //     function ageCalculatorAdvanced (year, birth_year) {
                                
        //             //             var year = new Date();
        //             //             var n = d.getFullYear();
        //             //             let result = year-birth_year;
        //             //             console.log(result);
        //             // }
                                        
        //             // ageCalculatorAdvanced(,(1987));  
                    
                    
                    
                    
                    
                    
        //             // function radian (degrees) {
                    
        //             //     let pi = 3.1415;
        //             //     let result = degrees * (pi/180);
        //             //     console.log(result);
        //             // }
                    
        //             // radian(90);
                    
                    
        //             function area (height, width, depth) {
                        
        //                 let resultArea= height * width;
        //                 console.log(resultArea);
        //                 let resultVolume= resultArea * depth;
        //                 console.log(resultVolume);
        //             }
                    
        //             area(5,7,13);



        //         // Intermediate No 1.

        //             function capitalizeFirstLetter(string) {
        //                 return string.charAt(0).toUpperCase() + string.slice(1);
        //               }
                      
        //               console.log(capitalizeFirstLetter('i am a web developer')); // name


        //             //   Intermediate No 2.



        //             function grade(math, physics, english) {

        //                 let sum = math + physics + english;
        //                 console.log(sum);
        //                 let average= sum / 3;
        //                 console.log(average);

        //             }

        //             grade(3,4,5);



        //                 // Advanced



        //             function time (min) {

        //                     var hours= Math.floor(min / 60);
                            
        //                     var minutes= (min % 60);

        //                     return "200 minutes = " + hours + " and " + minutes;
                            
                         
                            
                             
        //  }

        //             console.log(time(200));


                            // Challenge



                        //     var balance = 100.0; //set initial balance.

                        //     function get_balance() {
                        //         alert('Your current balance is: '+balance);
                        //         atm();
                        // 3    }
                        
                        //     function make_deposit() {
                        //         var deposit = parseFloat(prompt('How much would you like to deposit?'));
                        //         if (isNaN(deposit) || deposit === '') {
                        //             alert('Error: please enter a number!');
                        //             make_deposit();
                        //         } else {
                        //             balance += deposit;
                        //             get_balance();
                        //         }
                        //     }
                        
                        //     function make_withdrawal() {
                        //         var withdrawal = parseFloat(prompt('How much would you like to withdrawal?'));
                        //         if (isNaN(withdrawal) || withdrawal === '') {
                        //             alert('Error: please enter a number!');
                        //             make_withdrawal();
                        //         } else {
                        //             balance -= withdrawal;
                        //             get_balance();
                        //         }
                        //     }
                        
                        //     function error() {
                        //         alert('Error: accepted numbers are 1 through 4.');
                        //         atm();
                        //     }
                        
                        //     function exit() {
                        //         var confirm_leave = confirm('You have selected exit.');
                        //         if (confirm_leave) {
                        //             window.close();
                        //         } else {
                        //             atm();
                        //         }
                        //     }
                        
                        //     function atm() {
                        
                        //         var choice = parseInt(prompt('Select a choice 1.) Balance 2.) Deposit 3.) Withdrawal 4.) Exit')); //prompt user for choice.
                        
                        //         if (choice === 1) {
                        //             get_balance();
                        //         } else if (choice === 2) {
                        //             make_deposit();
                        //         } else if (choice === 3) {
                        //             make_withdrawal();
                        //         } else if (choice === 4) {
                        //             exit();
                        //         } else {
                        //             error();
                        //         }
                        //     }
                        
                        //     atm();                  


                    function atm (money) {
                            
                            let note1 = (10);
                            let note2 = (20);
                            let note3 = (50);
                            let note4 = (100);

                            // let balance = 2000;
                            
                            
                            note1 + note2 + note3 + note4;
                            let withdraw = balance - money;
                            console.log();

                            // return maxsum-money;


                                

                            // balance -= withdrawal
                            


                    }

                        // let maxsum = (money);
                        console.log(atm(280));








                        // const weekendOrWeekday = (inputDate) => {
                        //     const day = inputDate.getDay();
                        //     return weekendOrWeekday.labels[day] || 
                        //            weekendOrWeekday.labels['default'];
                        //   };
                        //   weekendOrWeekday.labels = { 
                        //     0: 'weekend', 
                        //     6: 'weekend', 
                        //     default: 'weekday' 
                        //   };
                        //   console.log(weekendOrWeekday(new Date()));
                    