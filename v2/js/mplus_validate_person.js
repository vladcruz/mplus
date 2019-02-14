/* *****************************************************************************
File Name: mplus_validate_person.js
Author: Vladmir Cruz
Date: 05/01/2019
Version: 0.1

Change Control:
===============
Date          | Author                | Description
--------------------------------------------------------------------------------
05/01/2019    | Vladmir Cruz          | Creation of the file
***************************************************************************** */

/* *****************************************************************************
Variables
***************************************************************************** */
// Declaration
var validation_person_vars;

// Initialization
validation_person_vars = {
  "person_cpf":"FALSE",
  "person_name":"FALSE",
  "person_sex":"FALSE",
  "person_marital":"FALSE",
  "person_email":"FALSE",
  "person_bdate":"FALSE",
  "person_mphone":"FALSE",
  "person_fphone":"FALSE",
  "person_cep":"FALSE",
  "person_street":"FALSE",
  "person_street_number":"FALSE",
  "person_street_comp":"FALSE",
  "person_state":"FALSE",
  "person_city":"FALSE",
  "person_city_area":"FALSE",
  "person_home_type":"FALSE",
  "person_home_garage":"FALSE",
  "person_home_garage_door":"FALSE",
  "person_owned_vehicles":"FALSE",
  "person_other_drivers":"FALSE",
  "person_other_drivers_age":"FALSE",
  "person_use_vehicle_work":"FALSE",
  "person_garage_work":"FALSE",
  "person_distance_work":"FALSE",
  "person_use_vehicle_study":"FALSE",
  "person_use_vehicle_study_garage":"FALSE",
  "person_use_vehicle_professionaly":"FALSE",
  "person_use_vehicle_distance":"FALSE",
  "vehicle_plate":"FALSE",
  "vehicle_chassis":"FALSE",
  "vehicle_manufacturer":"FALSE",
  "vehicle_model":"FALSE",
  "vehicle_description":"FALSE",
  "vehicle_manyear":"FALSE",
  "vehicle_modyear":"FALSE",
  "vehicle_new":"FALSE",
  "insurance_renovation":"FALSE",
  "insurance_company":"FALSE",
  "insurance_bonus_class":"FALSE",
  "insurance_accident":"FALSE",
  "person_comments":"FALSE"
};

/* *****************************************************************************
Validation Functions
***************************************************************************** */

/* **************************************************************************
Validate the CPF Number
************************************************************************** */
function validate_cpf(object_id)
{
  // Clear all error messages that may exist
  document.getElementById(object_id).className = "form-control";

  var cpf;
  var cpf_sum;
  var cpf_leftover;
  var cpf_invalid_list;

  // Creates a list of known CPFs that may be used
  cpf_invalid_list = ["00000000000","11111111111","22222222222","33333333333","44444444444","55555555555","66666666666","77777777777","88888888888","99999999999"];

  cpf = document.getElementById(object_id).value;

  // Remove all unnecessary chars
  cpf = cpf.replace(/\./g,"");
  cpf = cpf.replace(/-/g,"");

  if (cpf.length != 11 || (cpf_invalid_list.indexOf(cpf) != -1))
  {
      document.getElementById(object_id).className = "form-control valid_nok";
      validation_person_vars.person_cpf = "FALSE";
  }
  else
  {
    // Verify that the first CPF Digit is Valid
    cpf_sum = 0;
    for (i=1; i<=9; i++)
    {
      cpf_sum = cpf_sum + parseInt(cpf.substring(i-1, i)) * (11 - i);
      cpf_leftover = (cpf_sum * 10) % 11;
    }

    if ((cpf_leftover == 10) || (cpf_leftover == 11))
    {
      cpf_leftover = 0;
    }

    if (cpf_leftover != parseInt(cpf.substring(9, 10)) )
    {
      document.getElementById(object_id).className = "form-control valid_nok";
      validation_person_vars.person_cpf = "FALSE";
    }
    else
    {
      document.getElementById(object_id).className = "form-control valid_ok";
      validation_person_vars.person_cpf = "TRUE";
    }

    // Verify that the second CPF Digit is Valid
    cpf_sum = 0;
    for (i = 1; i <= 10; i++)
    {
      cpf_sum = cpf_sum + parseInt(cpf.substring(i-1, i)) * (12 - i);
      cpf_leftover = (cpf_sum * 10) % 11;
    }

    if ((cpf_leftover == 10) || (cpf_leftover == 11))
    {
      cpf_leftover = 0;
    }

    if (cpf_leftover != parseInt(cpf.substring(10, 11) ) )
    {
      document.getElementById(object_id).className = "form-control valid_nok";
      validation_person_vars.person_cpf = "FALSE";
    }
    else
    {
      document.getElementById(object_id).className = "form-control valid_ok";
      validation_person_vars.person_cpf = "TRUE";
    }
  }
}

/* **************************************************************************
Validate Name
************************************************************************** */
function validate_name(object_id)
{
  var name;
  var splitted;

  name = document.getElementById(object_id).value;
  splitted = name.split(" ");

  // Checks the Name Length and if there are two names
  if(name.indexOf(" ") == -1 || splitted.length < 2)
  {
    document.getElementById(object_id).className = "form-control valid_nok";
    validation_person_vars.person_name = "FALSE";
  }
  else
  {
    document.getElementById(object_id).className = "form-control valid_ok";
    validation_person_vars.person_name = "TRUE";
  }
}

/* **************************************************************************
Validate Sex
************************************************************************** */
function validate_sex(object_id)
{
  var sex;

  sex = document.getElementById(object_id).value;

  if(sex == "---")
  {
    document.getElementById(object_id).className = "form-control valid_nok";
    validation_person_vars.person_sex = "FALSE";
  }
  else
  {
    document.getElementById(object_id).className = "form-control valid_ok";
    validation_person_vars.person_sex = "TRUE";
  }
}

/* **************************************************************************
Validate Marital Status
************************************************************************** */
function validate_marital(object_id)
{
  var marital;

  marital = document.getElementById(object_id).value;

  if(marital == "---")
  {
    document.getElementById(object_id).className = "form-control valid_nok";
    validation_person_vars.person_marital = "FALSE";
  }
  else
  {
    document.getElementById(object_id).className = "form-control valid_ok";
    validation_person_vars.person_marital = "TRUE";
  }
}

/* **************************************************************************
Validate E-Mail Address (Format Only)
************************************************************************** */
function validate_email(object_id)
{
  var email;

  email = document.getElementById(object_id).value;

  if(email.length < 3 || email.indexOf("@") == -1 || email.indexOf(".") == -1)
  {
    document.getElementById(object_id).className = "form-control valid_nok";
    validation_person_vars.person_email = "FALSE";
  }
  else
  {
    document.getElementById(object_id).className = "form-control valid_ok";
    validation_person_vars.person_email = "TRUE";
  }
}

/* **************************************************************************
Validate Birth Date
************************************************************************** */
function validate_bdate(object_id)
{
  var bdate;
  var bday;
  var bmonth;
  var byear;
  var days_in_month;
  var today;
  var birthday;
  var datediff;

  bdate = document.getElementById(object_id).value.split("/");
  bday = bdate[0];
  bmonth = bdate[1];
  byear = bdate[2];

  // Checks if the requester is 18 or above
  today = new Date();
  birthday  = new Date(byear, --bmonth, bday);
  datediff = Math.ceil((today.getTime() - birthday.getTime())/(1000*60*60*24*365));

  if(datediff >= 18)
  {
    // Checks if the year is a Leap Year
    if((!(byear % 4) && byear % 100) || !(byear % 400))
    {
      days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }
    else
    {
      days_in_month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }

    // Checks if the day is within Month range
    if(bday > days_in_month[--bmonth])
    {
      document.getElementById(object_id).className = "form-control valid_nok";
      validation_person_vars.person_bdate = "FALSE";
    }
    else
    {
      document.getElementById(object_id).className = "form-control valid_ok";
      validation_person_vars.person_bdate = "TRUE";
    }
  }
  else
  {
    document.getElementById(object_id).className = "form-control valid_nok";
    validation_person_vars.person_bdate = "FALSE";
  }
}

/* **************************************************************************
Validate Mobile Phone
************************************************************************** */
function validate_mphone(object_id)
{
  var mphone;

  mphone = document.getElementById(object_id).value;

  if(mphone.length < 14)
  {
    document.getElementById(object_id).className = "form-control valid_nok";
    validation_person_vars.person_mphone = "FALSE";
  }
  else
  {
    document.getElementById(object_id).className = "form-control valid_ok";
    validation_person_vars.person_mphone = "TRUE";
  }
}

/* **************************************************************************
Validate CEP (Format and Existence)
************************************************************************** */
// Callback Funtion to process response from JSON
function callback_person_cep(cep)
{
  if (!("erro" in cep))
  {
    //Atualiza os campos com os valores.
    document.getElementById('input_person_street').value=(cep.logradouro);
    document.getElementById('input_person_city_area').value=(cep.bairro);
    document.getElementById('input_person_city').value=(cep.localidade);
    document.getElementById('input_person_state').value=(cep.uf);
  }
  else
  {
    alert("CEP não encontrado.");
  }
}

// Function to process the CEP address and fill out the form
function validate_person_cep(object_id)
{
  var cep_id = document.getElementById(object_id).value;

  //Cleans the CEP String
  var cep = cep_id.replace(/\D/g, '');

  // If field not empty
  if(cep != "")
  {
    // Cehcks if there are only numbers
    var validacep = /^[0-9]{8}$/;

    if(validacep.test(cep))
    {
      //Fills the fields with ... while searching for values
      document.getElementById('input_person_street').value="...";
      document.getElementById('input_person_city_area').value="...";
      document.getElementById('input_person_city').value="...";
      document.getElementById('input_person_state').value="...";

      // Creates JAVASCRIPT Object
      var script = document.createElement('script');

      // Invokes the Query for CEP
      script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=callback_person_cep';

      // Appends the results within the Page
      document.body.appendChild(script);
    }
    else
    {
      // Malformed CEP
      alert("CEP Inválido!");
      document.getElementById(object_id).className = "form-control valid_nok";
      validation_person_vars.person_cep = "FALSE";
    }
  }
  else // If field empty
  {
    alert("CEP não encontrado!");
  }
}

/* **************************************************************************
Validate Street Number
************************************************************************** */
function validate_street_number(object_id)
{
  var street_number;

  street_number = document.getElementById(object_id).value;

  if(street_number.length < 1)
  {
    document.getElementById(object_id).className = "form-control valid_nok";
    validation_person_vars.person_street_number = "FALSE";
  }
  else
  {
    document.getElementById(object_id).className = "form-control valid_ok";
    validation_person_vars.person_street_number = "TRUE";
  }
}

/* **************************************************************************
Validate Type of Residence
************************************************************************** */
function validate_home_type(object_id)
{
  var home_type;

  home_type = document.getElementById(object_id).value;

  if(home_type == "---")
  {
    document.getElementById(object_id).className = "form-control valid_nok";
    validation_person_vars.person_home_type = "FALSE";
  }
  else
  {
    document.getElementById(object_id).className = "form-control valid_ok";
    validation_person_vars.person_home_type = "TRUE";
  }
}

/* **************************************************************************
Validate Home Garage Type
************************************************************************** */
function validate_home_garage(object_id_1, object_id_2)
{
  var home_garage;

  home_garage = document.getElementById(object_id_1).value;

  if(home_garage == "---")
  {
    enable_home_garage_door(object_id_1, object_id_2);
    document.getElementById(object_id_1).className = "form-control valid_nok";
    validation_person_vars.person_home_garage = "FALSE";
  }
  else
  {
    enable_home_garage_door(object_id_1, object_id_2);
    document.getElementById(object_id_1).className = "form-control valid_ok";
    validation_person_vars.person_home_garage = "TRUE";
  }
}

/* **************************************************************************
Enable Home Garage Door Type
************************************************************************** */
function enable_home_garage_door(object_id_1, object_id_2)
{
  var home_garage = document.getElementById(object_id_1).value;
  var home_garage_door = document.getElementById(object_id_2);

  // If there is no Garage, the Door is deisabled and set to default value
  if(home_garage == "---" || home_garage == "no")
  {
    home_garage_door.setAttribute("disabled", "disabled");
    home_garage_door.selectedIndex = 0;
    validation_person_vars.person_home_garage_door = "TRUE";
  }
  else
  {
    home_garage_door.removeAttribute("disabled");
  }
}

/* **************************************************************************
Validate Home Garage Door Type
************************************************************************** */
function validate_home_garage_door(object_id)
{
  var home_garage_door = document.getElementById(object_id).value;

  if(home_garage_door == "---")
  {
    document.getElementById(object_id_1).className = "form-control valid_nok";
    validation_person_vars.person_home_garage_door = "FALSE";
  }
  else
  {
    document.getElementById(object_id_1).className = "form-control valid_ok";
    validation_person_vars.person_home_garage_door = "TRUE";
  }
}

/* **************************************************************************
Validate Other Drivers
************************************************************************** */
function validate_person_other_drivers(object_id_1, object_id_2)
{
  var other_drivers;

  other_drivers = document.getElementById(object_id_1).value;

  if(other_drivers == "---")
  {
    enable_person_other_drivers_age(object_id_1, object_id_2);
    document.getElementById(object_id_1).className = "form-control valid_nok";
  }
  else
  {
    enable_person_other_drivers_age(object_id_1, object_id_2);
    document.getElementById(object_id_1).className = "form-control valid_ok";
  }
}

/* **************************************************************************
Enable Other Drivers Age
************************************************************************** */
function enable_person_other_drivers_age(object_id_1, object_id_2)
{
  var other_drivers = document.getElementById(object_id_1).value;
  var other_drivers_age = document.getElementById(object_id_2);

  // If there is no Garage, the Door is deisabled and set to default value
  if(other_drivers == "---" || other_drivers == "no residents")
  {
    other_drivers_age.setAttribute("disabled", "disabled");
    other_drivers_age.selectedIndex = 0;
  }
  else
  {
    other_drivers_age.removeAttribute("disabled");
  }
}

/* **************************************************************************
Validate Use for Work
************************************************************************** */
function validate_person_use_work(object_id_1, object_id_2, object_id_3)
{
  var use_work;

  use_work = document.getElementById(object_id_1).value;

  if(use_work == "---")
  {
    enable_person_use_work(object_id_1, object_id_2, object_id_3);
    document.getElementById(object_id_1).className = "form-control valid_nok";
  }
  else
  {
    enable_person_use_work(object_id_1, object_id_2, object_id_3);
    document.getElementById(object_id_1).className = "form-control valid_ok";
  }
}

/* **************************************************************************
Enable Garage and Distance to Work
************************************************************************** */
function enable_person_use_work(object_id_1, object_id_2, object_id_3)
{
  var use_work = document.getElementById(object_id_1).value;
  var use_work_garage = document.getElementById(object_id_2);
  var use_work_distance= document.getElementById(object_id_3);


  // If there is no Garage, the Door is deisabled and set to default value
  if(use_work == "---" || use_work == "no")
  {
    use_work_garage.setAttribute("disabled", "disabled");
    use_work_garage.selectedIndex = 0;

    use_work_distance.setAttribute("disabled", "disabled");
    use_work_distance.selectedIndex = 0;
  }
  else
  {
    use_work_garage.removeAttribute("disabled");
    use_work_distance.removeAttribute("disabled");
  }
}

/* **************************************************************************
Validate Use for Study
************************************************************************** */
function validate_person_use_study(object_id_1, object_id_2)
{
  var use_study;

  use_study = document.getElementById(object_id_1).value;

  if(use_study == "---")
  {
    enable_person_use_study(object_id_1, object_id_2);
    document.getElementById(object_id_1).className = "form-control valid_nok";
  }
  else
  {
    enable_person_use_study(object_id_1, object_id_2);
    document.getElementById(object_id_1).className = "form-control valid_ok";
  }
}

/* **************************************************************************
Enable Study Garage
************************************************************************** */
function enable_person_use_study(object_id_1, object_id_2)
{
  var use_study = document.getElementById(object_id_1).value;
  var use_study_garage = document.getElementById(object_id_2);


  // If there is no Garage, the Door is deisabled and set to default value
  if(use_study == "---" || use_study == "no")
  {
    use_study_garage.setAttribute("disabled", "disabled");
    use_study_garage.selectedIndex = 0;
  }
  else
  {
    use_study_garage.removeAttribute("disabled");
  }
}

/* **************************************************************************
Validate Insurance Renewal
************************************************************************** */
function validate_insurance_renewal(object_id_1, object_id_2, object_id_3, object_id_4)
{
  var insurance_renewal;

  insurance_renewal = document.getElementById(object_id_1).Value;

  if(insurance_renewal == "---")
  {
    document.getElementById(object_id_1).className = "form-control valid_nok";
  }
  else
  {
    enable_insurance_renewal(object_id_1, object_id_2, object_id_3, object_id_4);
    document.getElementById(object_id_1).className = "form-control valid_ok";
  }
}

/* **************************************************************************
Enable Insurance Renewal
************************************************************************** */
function enable_insurance_renewal(object_id_1, object_id_2, object_id_3, object_id_4)
{
  var insurance_renewal;
  var insurance_company;
  var insurance_bonus;
  var insurance_accident;

  insurance_renewal = document.getElementById(object_id_1).value;
  insurance_company = document.getElementById(object_id_2);
  insurance_bonus = document.getElementById(object_id_3);
  insurance_accident = document.getElementById(object_id_4);

  if(insurance_renewal == "---" || insurance_renewal == "no")
  {
    insurance_company.setAttribute("disabled", "disabled");
    insurance_company.selectedIndex = 0;

    insurance_bonus.setAttribute("disabled", "disabled");
    insurance_bonus.selectedIndex = 0;

    insurance_accident.setAttribute("disabled", "disabled");
    insurance_accident.selectedIndex = 0;
  }
  else
  {
    insurance_company.removeAttribute("disabled");
    insurance_bonus.removeAttribute("disabled");
    insurance_accident.removeAttribute("disabled");
  }
}

/* **************************************************************************
Validate Car Plate (Format Only)
************************************************************************** */
function validate_vehicle_plate(object_id)
{
  var vehicle_plate;

  vehicle_plate = document.getElementById(object_id).value;

  if(vehicle_plate.length < 8)
  {
    document.getElementById(object_id).className = "form-control valid_nok";
    validation_person_vars.vehicle_plate = "FALSE";
  }
  else
  {
    document.getElementById(object_id).className = "form-control valid_ok";
    validation_person_vars.vehicle_plate = "TRUE";
  }
}

/* **************************************************************************
Validate Car Chassis (Format Only)
************************************************************************** */
function validate_vehicle_chassis(object_id)
{
  var vehicle_chassis;

  vehicle_chassis = document.getElementById(object_id).value;

  if(vehicle_chassis.length < 17)
  {
    document.getElementById(object_id).className = "form-control valid_nok";
    validation_person_vars.vehicle_chassis = "FALSE";
  }
  else
  {
    document.getElementById(object_id).className = "form-control valid_ok";
    validation_person_vars.vehicle_chassis = "TRUE";
  }
}

/* **************************************************************************
Validate Manufacturing Year
************************************************************************** */
function validate_vehicle_man_year(object_id_1, object_id_2)
{
  var vehicle_man_year;
  var vehicle_mod_year;
  var current_year;

  vehicle_man_year = document.getElementById(object_id_1).value;
  vehicle_mod_year = document.getElementById(object_id_2);
  current_year = (new Date()).getFullYear();

  if(vehicle_man_year > current_year)
  {
    document.getElementById(object_id_1).className = "form-control valid_nok";
    vehicle_mod_year.setAttribute("disabled", "disabled");
  }
  else
  {
    document.getElementById(object_id_1).className = "form-control valid_ok";
    vehicle_mod_year.removeAttribute("disabled");
  }
}

/* **************************************************************************
Validate Model Year
************************************************************************** */
function validate_vehicle_mod_year(object_id_1, object_id_2, object_3)
{
  var vehicle_mod_year;
  var vehicle_man_year;
  var current_year;

  vehicle_man_year = document.getElementById(object_id_1).value;
  vehicle_mod_year = document.getElementById(object_id_2).value;
  current_year = (new Date()).getFullYear();

  if(vehicle_mod_year > ++current_year || vehicle_mod_year < vehicle_man_year)
  {
    document.getElementById(object_id_2).className = "form-control valid_nok";
  }
  else
  {
    document.getElementById(object_id_2).className = "form-control valid_ok";
    enable_vehicle_new(object_id_1, object_id_2, object_3);
  }
}

/* **************************************************************************
Enable New Car
************************************************************************** */
function enable_vehicle_new(object_1, object_2, object_3)
{
  var vehicle_man_year;
  var vehicle_mod_year;
  var vehicle_new;
  var current_year;

  vehicle_man_year = document.getElementById(object_1).value;
  vehicle_mod_year = document.getElementById(object_2).value;
  vehicle_new = document.getElementById(object_3);
  current_year = (new Date()).getFullYear();

  if(vehicle_man_year < current_year - 1 || vehicle_mod_year < vehicle_man_year)
  {
    vehicle_new.setAttribute("disabled", "disabled");
    vehicle_new.selectedIndex = 0;
  }
  else
  {
    vehicle_new.removeAttribute("disabled");
    if(current_year.value == "---")
    {
      document.getElementById(object_id_3).className = "form-control valid_nok";
    }
    else
    {
      document.getElementById(object_id_3).className = "form-control valid_ok";
    }
  }
}
