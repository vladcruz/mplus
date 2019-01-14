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
// CODES: FALSE - Not Filled or Incorrectly Filled | TRUE - Correctly Filled
global_person_vars = {
                      "person_cpf":"FALSE",
                      "person_fname":"FALSE",
                      "person_lname":"FALSE",
                      "person_email":"FALSE",
                      "person_bdate":"FALSE",
                      "person_mphone":"FALSE",
                      "person_cep":"FALSE",
                      "person_street_number":"FALSE",
                      "vehicle_plate":"FALSE",
                      "vehicle_chassis":"FALSE",
                      "vehicle_renavam":"FALSE",
                      "insurance_renovation":"FALSE",
                      "insurance_company":"FALSE",
                      "insurance_bonus":"FALSE",
                      "insurance_accident":"FALSE"
                    };

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
  var error_msg;

  error_msg = "";

  if(document.getElementById("input_person_type").checked)
  {
    if(global_person_vars.person_cpf == "FALSE")
    {
      error_msg = error_msg + "<br>Digite um CPF V&aacute;lido!";
      document.getElementById("input_person_cpf").className = "form-control valid_nok";
    }
    if(global_person_vars.person_fname == "FALSE")
    {
      error_msg = error_msg + "<br>Digite um Primeiro Nome V&aacute;lido!";
      document.getElementById("input_person_fname").className = "form-control valid_nok";
    }
    if(global_person_vars.person_lname == "FALSE")
    {
      error_msg = error_msg + "<br>Digite um &Uacute;ltimo Nome V&aacute;lido!";
      document.getElementById("input_person_lname").className = "form-control valid_nok";
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
      document.getElementById(object_id).value = "";
      global_person_vars.person_cpf = "FALSE";
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
      document.getElementById(object_id).value = "";
      global_person_vars.person_cpf = "FALSE";
    }
    else
    {
      document.getElementById(object_id).className = "form-control valid_ok";
      global_person_vars.person_cpf = "TRUE";
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
      document.getElementById(object_id).value = "";
      global_person_vars.person_cpf = "FALSE";
    }
    else
    {
      document.getElementById(object_id).className = "form-control valid_ok";
      global_person_vars.person_cpf = "TRUE";
    }
  }
}

// Validate First Name
function validate_fname(object_id)
{
  var fname;

  fname = document.getElementById(object_id).value;

  if(fname.length < 3)
  {
    document.getElementById(object_id).className = "form-control valid_nok";
    document.getElementById(object_id).value = "";
    global_person_vars.person_fname = "FALSE";
  }
  else
  {
    document.getElementById(object_id).className = "form-control valid_ok";
    global_person_vars.person_fname = "TRUE";
  }
}

// Validate Last Name
function validate_lname(object_id)
{
  var lname;

  lname = document.getElementById(object_id).value;

  if(lname.length < 3)
  {
    document.getElementById(object_id).className = "form-control valid_nok";
    document.getElementById(object_id).value = "";
    global_person_vars.person_lname = "FALSE";
  }
  else
  {
    document.getElementById(object_id).className = "form-control valid_ok";
    global_person_vars.person_lname = "TRUE";
  }
}

// Validate E-Mail
function validate_email(object_id)
{
  var email;

  email = document.getElementById(object_id).value;

  if(email.length < 3 || email.indexOf("@") == -1 || email.indexOf(".") == -1)
  {
    document.getElementById(object_id).className = "form-control valid_nok";
    document.getElementById(object_id).value = "";
    global_person_vars.person_email = "FALSE";
  }
  else
  {
    document.getElementById(object_id).className = "form-control valid_ok";
    global_person_vars.person_email = "TRUE";
  }
}

// Validate Mobile Phone
function validate_mphone(object_id)
{
  var mphone;

  mphone = document.getElementById(object_id).value;

  if(mphone.length < 14)
  {
    document.getElementById(object_id).className = "form-control valid_nok";
    document.getElementById(object_id).value = "";
    global_person_vars.person_mphone = "FALSE";
  }
  else
  {
    document.getElementById(object_id).className = "form-control valid_ok";
    global_person_vars.person_mphone = "TRUE";
  }
}

// Validate CEP
function callback_cep(cep)
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

function validate_cep(object_id)
{
  var cep_id = document.getElementById(object_id).value;

  //Cleans the variables
  var cep = cep_id.replace(/\D/g, '');

  if (cep != "")
  {
    var validacep = /^[0-9]{8}$/;

    if(validacep.test(cep))
    {
      //Fills the fields with ... while searching for values
      document.getElementById('input_person_street').value="...";
      document.getElementById('input_person_city_area').value="...";
      document.getElementById('input_person_city').value="...";
      document.getElementById('input_person_state').value="...";

      var script = document.createElement('script');

      script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=callback_cep';

      document.body.appendChild(script);
    }
    else
    {
      alert("CEP Inválido!");
      document.getElementById(object_id).className = "form-control valid_nok";
      document.getElementById(object_id).value = "";
      global_person_vars.person_cep = "FALSE";
    }
  }
  else
  {
    alert("CEP não encontradof.");
  }
}

//Validate Street Number
function validate_street_number(object_id)
{
  var street_number;

  street_number = document.getElementById(object_id).value;

  if(street_number.length < 1)
  {
    document.getElementById(object_id).className = "form-control valid_nok";
    document.getElementById(object_id).value = "";
    global_person_vars.person_street_number = "FALSE";
  }
  else
  {
    document.getElementById(object_id).className = "form-control valid_ok";
    global_person_vars.person_street_number = "TRUE";
  }
}
