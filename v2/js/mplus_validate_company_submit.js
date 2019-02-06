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
Global Variables and Initialization Routines
***************************************************************************** */

// Global Variables
var global_company_vars;

// Initializing Global Variables
// Those are used to verify if a mandatory field has been filled or not
// also verifies that in case the field has been filled, it is correct
// CODES: FALSE - Not Filled or Incorrectly Filled | TRUE - Correctly Filled

global_company_vars = {
                        "company_cnpj":"FALSE",
                        "company_name":"FALSE",
                        "company_cep":"FALSE",
                        "company_street_number":"FALSE",
                        "contact_name":"FALSE",
                        "contact_email":"FALSE",
                        "contact_mphone":"FALSE",
                        "company_insurance_type":"FALSE"
                      };

/* *****************************************************************************
Validation Functions
***************************************************************************** */
// Central Validation Function
function validate_company_submit()
{
  var error_msg;

  error_msg = "";

  alert(document.getElementById("input_person_type").value);

  if(document.getElementById("input_person_type").checked)
  {
    /* *************************************************************************
    Validation of Mandatory fields for Person
    ************************************************************************* */
    if(global_person_vars.person_cpf == "FALSE")
    {
      error_msg = error_msg + "<br>Digite um CPF V&aacute;lido!";
      document.getElementById("input_person_cpf").className = "form-control valid_nok";
    }
    if(global_person_vars.person_name == "FALSE")
    {
      error_msg = error_msg + "<br>Digite um Nome V&aacute;lido!";
      document.getElementById("input_person_name").className = "form-control valid_nok";
    }
    if(global_person_vars.person_email == "FALSE")
    {
      error_msg = error_msg + "<br>Digite um E-Mail V&aacute;lido!";
      document.getElementById("input_person_email").className = "form-control valid_nok";
    }
    if(global_person_vars.person_bdate == "FALSE")
    {
      error_msg = error_msg + "<br>Digite uma Data de Nascimento V&aacute;lida!";
      document.getElementById("input_person_bdate").className = "form-control valid_nok";
    }
    if(global_person_vars.person_mphone == "FALSE")
    {
      error_msg = error_msg + "<br>Digite um Celular V&aacute;lido!";
      document.getElementById("input_person_mphone").className = "form-control valid_nok";
    }
    if(global_person_vars.person_cep == "FALSE")
    {
      error_msg = error_msg + "<br>Digite um CEP V&aacute;lido!";
      document.getElementById("input_person_cep").className = "form-control valid_nok";
    }
    if(global_person_vars.person_street_number == "FALSE")
    {
      error_msg = error_msg + "<br>Digite um N&uacute;mero de Casa V&aacute;lido!";
      document.getElementById("input_person_street_number").className = "form-control valid_nok";
    }
  }
}
