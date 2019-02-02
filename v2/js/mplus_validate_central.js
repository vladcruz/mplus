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
var global_person_vars;
var global_vehicle_vars;
var global_insurance_vars;
var global_company_vars;

// Initializing Global Variables
// Those are used to verify if a mandatory field has been filled or not
// also verifies that in case the field has been filled, it is correct
// CODES: FALSE - Not Filled or Incorrectly Filled | TRUE - Correctly Filled
global_person_vars = {
                        "person_cpf":"FALSE",
                        "person_name":"FALSE",
                        "person_email":"FALSE",
                        "person_bdate":"FALSE",
                        "person_mphone":"FALSE",
                        "person_cep":"FALSE",
                        "person_street_number":"FALSE",
                        "person_home_type":"FALSE",
                        "person_home_garage":"FALSE",
                        "person_home_garage_door":"FALSE"
                      }


global_vehicle_vars = {
                      "vehicle_plate":"FALSE",
                      "vehicle_chassis":"FALSE"
                      }


global_company_vars = {
                        "company_cnpj":"FALSE",
                        "company_name":"FALSE",
                        "company_cep":"FALSE",
                        "company_street_number":"FALSE",
                        "contact_fname":"FALSE",
                        "contact_lname":"FALSE",
                        "contact_email":"FALSE",
                        "contact_mphone":"FALSE"
                      };

/*
global_insurance_vars = {
                          "",
                          "",
                          "",
                          "",
                          "",
                          ""
                        }
*/

/* *****************************************************************************
Validation Functions
***************************************************************************** */

// Central Validation Function
function validate_central()
{
  var error_msg;

  error_msg = "";

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
    /* *************************************************************************
    Validation of Mandatory fields for Vehicle
    ************************************************************************* */
    if(global_person_vars.vehicle_plate == "FALSE")
    {
      error_msg = error_msg + "<br>Digite uma Placa V&aacute;lida!";
      document.getElementById("input_vehicle_plate").className = "form-control valid_nok";
    }
    if(global_person_vars.vehicle_chassis == "FALSE")
    {
      error_msg = error_msg + "<br>Digite um Chassis V&aacute;lido!";
      document.getElementById("input_vehicle_chassis").className = "form-control valid_nok";
    }
    if(global_person_vars.vehicle_renavam == "FALSE")
    {
      error_msg = error_msg + "<br>Digite um RENAVAM V&aacute;lido!";
      document.getElementById("input_vehicle_renavam").className = "form-control valid_nok";
    }
    if(global_person_vars.insurance_renovation == "FALSE")
    {
      error_msg = error_msg + "<br>Selecione uma Op&ccedil;&atilde;o de Renova&ccedil;&atilde;o V&aacute;lida!";
      document.getElementById("input_insurance_renovation").className = "form-control valid_nok";
    }
    if(global_person_vars.insurance_company == "FALSE")
    {
      error_msg = error_msg + "<br>Selecione uma Seguradora V&aacute;lida!";
      document.getElementById("input_insurance_company").className = "form-control valid_nok";
    }
    if(global_person_vars.insurance_bonus == "FALSE")
    {
      error_msg = error_msg + "<br>Selecione uma Classe de B&ocirc;nus V&aacute;lida!";
      document.getElementById("input_insurance_bonus_class").className = "form-control valid_nok";
    }
    if(global_person_vars.insurance_accident == "FALSE")
    {
      error_msg = error_msg + "<br>Selecione se houve Acidente!";
      document.getElementById("input_insurance_accident").className = "form-control valid_nok";
    }
    document.getElementById("div_error_msg").innerHTML = error_msg;
  }
  if(document.getElementById("input_company_type").checked)
  {
    alert("jaca");
  }
}
