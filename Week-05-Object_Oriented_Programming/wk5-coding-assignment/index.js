
// Setting up the Classes to be used later in the program

class Options {
    constructor(trimLevel, optionalEquipment){
        this.trimLevel = trimLevel;
        this.optionalEquipment = optionalEquipment;
        // this.trimList = []; 
        // this.optionsPack = [];
       	}

    describe() {
        return `The ${this.trimLevel} trim level has the ${this.optionalEquipment} option pack.`;
            //Expected output: The GT trim level has the Sunroof option pack.
    	}   //describe()method closure 
}     //class Options closure


class Vehicle{

    constructor(make, model) {
        this.make = make;
        this.model = model
        this.vehicleList = [ ];
    	}        //constructor closure   


//     createOptions(trimLevel, optionalEquipment) { 
//         let vehicleTrimList = [];
//         let vehicleOptionsList = [];

//         trimLevel = prompt(`Enter name for new trim level: 
//                           ${trimList}`);
//         optionalEquipment = prompt(`Enter the optional equipment you want to add to your vehicle:
//                                  ${optionsPack}`);
//         // this.trimLevel = trimLevel;
//         // this.optionalEquipment = optionalEquipment;

//         if (trimLevel instanceof Options){
//             if(optionalEquipment instanceof Options){
//               this.vehicleTrimList.push(trimLevel);
//               this.vehicleOptionsList.push(optionalEquipment); 
//             }              
// 	        this.vehicleTrimList.push(trimLevel);      
//         	}   
// 	             else {
//                  throw new Error(`Invalid Argument.  You can only add an instance
//  		            of the class Options: ${Options}`)
//             		}
//      	}     


//              describe(){          
//             return ` The ${this.trimLevel} has ${this.vehicleList.length} vehicles`;  
//         	}

    }      //closing curly brace for class Vehicle

    

class Menu {

        constructor(){
            this.vehicles = [ ];
            this.selectedVehicle = null;
        	}    //constructor method closure

     start( ) {
	 let selection = this.showMainMenuOptions();
                while (selection != 0) {
	     	switch (selection) {
                  	  case "1" : this.createVehicle();
                      	  	break;
                    	case "2" :  this.viewVehicle();
                       		break;
                    	case "3" : this.deleteVehicle();
                        	break;
                    	case "4" : this.displayAllVehicles();
                        	break;
                    	default : selection = 0;
                		}     //switch closure in start method

               selection = this.showMainMenuOptions(); 

               }     //while statement closure in start method

            alert('goodbye!');
        	}        //start method closure



        		//creating the main menu options
        
        showMainMenuOptions(){
            return prompt(`
                0) Exit
                1) Create New Vehicle
                2) View Vehicle
                3) Delete Vehicle
                4) Display All Vehicles
                    `)
        	}        //showMainMenuOptions method closure


        showOptionsMenuChoices(){
            return prompt(`
        -------------------------    
            0) Back
            1) Create Option
            2) Delete Option
        ------------------------        
                `);       
        	}     //show modelMenuOption closure

            
        createOptions(){  
                let trim = prompt(`Enter name for new trim level: 
                                   `);
                let optionsList = prompt(`Enter the optional equipment you want to add to your vehicle:
                                    `);

                this.selectedVehicle.trimList.push(new Options(trim));
                this.selectedVehicle.optionsPack.push(new Options(optionalEquipment));
                	}      //createOptions method closure
            
             deleteOptions() {
                let index = prompt(`Enter the index of the optional equipment you wish to delete:
                                    ${optionsPack}`);
                if (index > -1 && index < this.selectedVehicle.optionsPack.length){
                    this.selectedVehicle.optionsPack.splice(index, 1); 
                   	}   //if statement closure in deletePlayer method
               	}    //deleteOptions method closure

                 
        	/* methods to display vehicles...uses both 
            displayAllVehicles() & vehicleDisplayList() 
            in conjunction with each other. */

        displayAllVehicles() {
            let vehicleString = this.vehicleDisplayList()
            alert(vehicleString);
            console.log(vehicleString); 
      	  }    //displayVehicles method closure
           

          
        vehicleDisplayList() {
            let vehicleString = "";     
         
            	for(let i = 0; i < this.vehicles.length; i++){
               		//  vehicleString += '(' +  i + ')' + this.vehicles[i].make + " " + this.vehicles[i].model + '\n';
                        vehicleString += `(${i}) ${this.vehicles[i].make} ${this.vehicles[i].model}
                        `;
                }
            return vehicleString
        }

  		//method to create new vehicles
        createVehicle(){                    
            let make = prompt('Enter make of new vehicle you want to create:');
            let model = prompt('Enter the model of the vehicle you want to create:')
            this.vehicles.push(new Vehicle(make, model));
        		}

		//method to view vehicles
        viewVehicle(){                   
            let list = this.vehicleDisplayList();
            let index = prompt(`Enter the index of the vehicle you wish to view:
                ${list}  
                `);      //Shows the text above in prompt box along with an indexed list of vehicles.

                if (index > -1 && index < this.vehicles.length){    //validating user input
                    this.selectedVehicle = this.vehicles[index];
                    let description = 'Vehicle Make: ' + this.selectedVehicle.make + '\n';

                for (let i = 0; i < this.selectedVehicle.vehicleList.length; i++ ){
                   description += i + ') ' + this.selectedVehicle.vehicleList[i].name + ' - ' + this.selectedVehicle.vehicleList[i].trimLevel + '\n';
                	}     //for statement closure


                    // code block below makes the sub-menu for "view vehicle" choice in main menu work.
                    //Should add and delete vehicle options.
                let selection = this.showOptionsMenuChoices(description);
                  switch(selection){                   
                     case "1": this.createOptions();
                        break
                     case "2": this.deleteOptions();
                    }  //switch statement closure
            }    //if statement closure
        }      //viewVehicle method closure

        
        deleteVehicle() {               
            let list = this.vehicleDisplayList();
            console.log(list);
            let index = prompt(`enter the index of the vehicle you wish to delete: 
            ${list}`);

            if (index > -1 && index < this.vehicles.length){
                this.vehicles.splice(index, 1);
            	}
        }     //deleteVehicle method closure

    }     // class Menu closure

    let menu = new Menu();
    menu.start();