/* *****************************************************************************
File Name: mplus_form.js
Author: Vladmir Cruz
Date: 05/01/2019
Version: 0.1

Change Control:
===============
Date          | Author                | Description
--------------------------------------------------------------------------------
05/01/2019    | Vladmir Cruz          | Creation of the file
***************************************************************************** */

// Global Variables
var global_person_vars;
var global_company_vars;

// Initializing Global Variables
// Those are used to verify if a mandatory field has been filled or not
// also verifies that in case the field has been filled, it is correct
// CODES: 0 - Not filled at all | 1 - Filled correctly | -1 Filled incorrectly
global_person_vars = {
                      "person_cpf":"0",
                      "person_fname":"0",
                      "person_lname":"0",
                      "person_email":"0",
                      "person_bdate":"0",
                      "person_mphone":"0",
                      "person_cep":"0",
                      "person_street":"0",
                      "person_street_number":"0",
                      "person_state":"0",
                      "person_city":"0",
                      "person_city_area":"0",
                      "vehicle_plate":"0",
                      "vehicle_chassis":"0",
                      "vehicle_renavam":"0",
                      "insurance_renovation":"0",
                      "insurance_company":"0",
                      "insurance_bonus":"0",
                      "insurance_accident":"0"
                    };

global_company_vars = {
                      "company_cnpj":"0",
                      "company_name":"0",
                      "company_cep":"0",
                      "company_street":"0",
                      "company_street_number":"0",
                      "company_state":"0",
                      "company_city":"0",
                      "company_city_area":"0",
                      "contact_fname":"0",
                      "contact_lname":"0",
                      "contact_email":"0",
                      "contact_mphone":"0"
                      };

/* *****************************************************************************
UX Functions
***************************************************************************** */

// Function that changes classes on <div> visibility
function display_div(div_id, div_visibility)
{
  if(div_visibility == "show")
  {
    document.getElementById(div_id).className = "div_visibility_show";
  }
  else if(div_visibility == "hide")
  {
    document.getElementById(div_id).className = "div_visibility_hide";
  }
}

/* *****************************************************************************
Validation Functions
***************************************************************************** */

// Central Validation Function
function validate_central()
{

}

// Validate the CPF Number
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
      document.getElementById(object_id).innerHTML = "";
      global_person_vars.person_cpf = -1;
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
      document.getElementById(object_id).innerHTML = "";
      global_person_vars.person_cpf = -1;
    }
    else
    {
      document.getElementById(object_id).className = "form-control valid_ok";
      global_person_vars.person_cpf = 1;
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
      document.getElementById(object_id).innerHTML = "";
      global_person_vars.person_cpf = -1;
    }
    else
    {
      document.getElementById(object_id).className = "form-control valid_ok";
      global_person_vars.person_cpf = 1;
    }
  }
}
