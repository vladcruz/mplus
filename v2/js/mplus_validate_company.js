/* *****************************************************************************
File Name: mplus_validate_company.js
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
Variable
***************************************************************************** */
// Declaration
var validation_company_vars;
var insurance_type_list;

// Initialization
validation_company_vars = {
  "company_cnpj":"FALSE",
  "company_name":"FALSE",
  "company_cep":"FALSE",
  "company_street_number":"FALSE",
  "company_contact_name":"FALSE",
  "company_contact_email":"FALSE",
  "company_contact_mphone":"FALSE",
  "company_insurance_type":"FALSE"
};

insurance_type_list = "";

/* *****************************************************************************
Validation Functions
***************************************************************************** */

/* **************************************************************************
Validate the CNPJ Number
************************************************************************** */
function validate_company_cnpj(object_id)
{
  var cnpj;
  var cnpj_invalid_list;
  var cnpj_root;
  var cnpj_first_digit;
  var cnpj_second_digit;
  var cnpj_sum;

  cnpj = document.getElementById(object_id).value;
  cnpj = cnpj.replace(/\./g,"");
  cnpj = cnpj.replace(/-/g,"");
  cnpj = cnpj.replace(/\//g,"");

  cnpj_invalid_list = ["00000000000000","11111111111111","22222222222222","33333333333333","44444444444444","55555555555555","66666666666666","77777777777777","88888888888888","99999999999999"];

  //checks if the CNPJ length is incorrect or if the CNPJ typed is in the invalid list
  if(cnpj.length != 14 || cnpj_invalid_list.indexOf(cnpj) != -1)
  {
    document.getElementById(object_id).className = "form-control valid_nok";
    validation_company_vars.company_cnpj = "FALSE";
  }
  //if the cnpj is "valid" then we check the formula
  else
  {
    //get the root of the CNPJ that will be used
    cnpj_root = "";
    for(i = 0; i <= 11; i++)
    {
      cnpj_root = cnpj_root + cnpj.charAt(i);
    }

    //get the first validation digit
    cnpj_first_digit = cnpj.charAt(12);

    //get the second validation digit
    cnpj_second_digit = cnpj.charAt(13);

    cnpj_sum = 0;

    //calculate the first validation digit from the root
    for(i = 0; i <= 3; i++)
    {
      cnpj_sum = cnpj_sum + (cnpj_root.charAt(i) * (5 - i));
    }
    for(i = 4; i <= 11; i++)
    {
      cnpj_sum = cnpj_sum + (cnpj_root.charAt(i) * (9 - (i - 4)));
    }

    //validate the first digit
    if(11 - (cnpj_sum % 11) == cnpj_first_digit)
    {
      cnpj_root = cnpj_root + cnpj_first_digit;
    }
    else
    {
      document.getElementById(object_id).className = "form-control valid_nok";
      validation_company_vars.company_cnpj = "FALSE";
    }

    cnpj_sum = 0;

    //calculate the second validation digit from the root
    for(i = 0; i <= 4; i++)
    {
      cnpj_sum = cnpj_sum + (cnpj_root.charAt(i) * (6 - i));
    }
    for(i = 5; i <= 12; i++)
    {
      cnpj_sum = cnpj_sum + (cnpj_root.charAt(i) * (9 - (i - 5)));
    }

    //validate the second digit
    if(11 - (cnpj_sum % 11) == cnpj_second_digit)
    {
      document.getElementById(object_id).className = "form-control valid_ok";
      validation_company_vars.company_cnpj = "TRUE";
    }
    else
    {
      document.getElementById(object_id).className = "form-control valid_nok";
      validation_company_vars.company_cnpj = "FALSE";
    }
  }
}

/* **************************************************************************
Validate Company Name
************************************************************************** */
function validate_company_name(object_id)
{
  var company_name;

  company_name = document.getElementById(object_id).value;

  // Checks the Name Length and if there are two names
  if(company_name.length < 3)
  {
    document.getElementById(object_id).className = "form-control valid_nok";
    validation_company_vars.company_name = "FALSE";
  }
  else
  {
    document.getElementById(object_id).className = "form-control valid_ok";
    validation_company_vars.company_name = "TRUE";
  }
}

/* **************************************************************************
Validate CEP (Format and Existence)
************************************************************************** */
// Callback Funtion to process response from JSON
function callback_company_cep(cep)
{
  if (!("erro" in cep))
  {
    //updates fields with values
    document.getElementById('input_company_street').value=(cep.logradouro);
    document.getElementById('input_company_city_area').value=(cep.bairro);
    document.getElementById('input_company_city').value=(cep.localidade);
    document.getElementById('input_company_state').value=(cep.uf);
  }
  else
  {
    alert("CEP não encontrado!");
    document.getElementById("input_company_cep").className = "form-control valid_nok";
    validation_company_vars.company_cep = "FALSE";
  }
}

// Function to process the CEP address and fill out the form
function validate_company_cep(object_id)
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
      document.getElementById('input_company_street').value="...";
      document.getElementById('input_company_city_area').value="...";
      document.getElementById('input_company_city').value="...";
      document.getElementById('input_company_state').value="...";

      // Creates JAVASCRIPT Object
      var script = document.createElement('script');

      // Invokes the Query for CEP
      script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=callback_company_cep';

      // Appends the results within the Page
      document.body.appendChild(script);
      document.getElementById(object_id).className = "form-control valid_ok";
      validation_company_vars.company_cep = "TRUE";
    }
    else
    {
      // Malformed CEP
      alert("CEP não encontrado!");
      document.getElementById(object_id).className = "form-control valid_nok";
      validation_company_vars.company_cep = "FALSE";
    }
  }
  else // If field empty
  {
    alert("CEP não encontrado!");
    document.getElementById(object_id).className = "form-control valid_nok";
    validation_company_vars.company_cep = "FALSE";
  }
}

/* **************************************************************************
Validate Street Number (Format and Existence)
************************************************************************** */
function validate_company_street_number(object_id)
{
  var street_number;

  street_number = document.getElementById(object_id).value;

  if(street_number.length < 1)
  {
    document.getElementById(object_id).className = "form-control valid_nok";
    validation_company_vars.company_street_number = "FALSE";
  }
  else
  {
    document.getElementById(object_id).className = "form-control valid_ok";
    validation_company_vars.company_street_number = "TRUE";
  }
}

/* **************************************************************************
Validate Contact Name (Format and Existence)
************************************************************************** */
function validate_company_contact_name(object_id)
{
  var contact_name;
  var splitted;

  contact_name = document.getElementById(object_id).value;
  splitted = contact_name.split(" ");

  // Checks the Name Length and if there are two names
  if(contact_name.indexOf(" ") == -1 || splitted.length < 2)
  {
    document.getElementById(object_id).className = "form-control valid_nok";
    validation_company_vars.company_contact_name = "FALSE";
  }
  else
  {
    document.getElementById(object_id).className = "form-control valid_ok";
    validation_company_vars.company_contact_name = "TRUE";
  }
}

/* **************************************************************************
Validate Contact E-Mail Address (Format Only)
************************************************************************** */
function validate_company_contact_email(object_id)
{
  var contact_email;

  contact_email = document.getElementById(object_id).value;

  if(contact_email.length < 3 || contact_email.indexOf("@") == -1 || contact_email.indexOf(".") == -1)
  {
    document.getElementById(object_id).className = "form-control valid_nok";
    validation_company_vars.company_contact_email = "FALSE";
  }
  else
  {
    document.getElementById(object_id).className = "form-control valid_ok";
    validation_company_vars.company_contact_email = "TRUE";
  }
}

/* **************************************************************************
Validate Mobile Phone
************************************************************************** */
function validate_company_contact_mphone(object_id)
{
  var contact_mphone;

  contact_mphone = document.getElementById(object_id).value;

  if(contact_mphone.length < 14)
  {
    document.getElementById(object_id).className = "form-control valid_nok";
    validation_company_vars.company_contact_mphone = "FALSE";
  }
  else
  {
    document.getElementById(object_id).className = "form-control valid_ok";
    validation_company_vars.company_contact_mphone = "TRUE";
  }
}

/* **************************************************************************
Validate Insurance Type
************************************************************************** */
function validate_company_insurance_type(object_id)
{
  var insurance_type;
  var count;

  insurance_type = document.getElementsByName(object_id);
  count = 0;

  for(i = 0; i < insurance_type.length; i++)
  {
    if(insurance_type[i].checked)
    {
      insurance_type_list = insurance_type_list + insurance_type[i].value + ";";
      count = count + 1;
    }
  }

  if(count == 0) // If nothing was marked
  {
    validation_company_vars.company_insurance_type = "FALSE";
  }
  else
  {
    validation_company_vars.company_insurance_type = "TRUE";
  }
}

/* **************************************************************************
Final Validation Function
************************************************************************** */
// Central Validation Function
function validate_company_submit()
{
  var validation_counter;
  var validation_string;
  var error_msg;

  validation_counter = 0;
  validation_string = "";
  error_msg = "";

  document.getElementById("div_error_msg").innerHTML = "";

  // Validate CNPJ - Mandatory Field
  if(validation_company_vars.company_cnpj == "TRUE")
  {
    validation_counter = validation_counter + 1;
    validation_string = validation_string + "('" + document.getElementById("input_company_cnpj").value + "', ";
  }
  else
  {
    document.getElementById("input_company_cnpj").className = "form-control valid_nok";
    error_msg = error_msg + "CNPJ Inv&aacute;lido ou Vazio!<br>";
  }

  // Validate Company Name - Mandatory field
  if(validation_company_vars.company_name == "TRUE")
  {
    validation_counter = validation_counter + 1;
    validation_string = validation_string + "'" + document.getElementById("input_company_name").value + "', ";
  }
  else
  {
    document.getElementById("input_company_name").className = "form-control valid_nok";
    error_msg = error_msg + "Nome de Empresa Inv&aacute;lido ou Vazio!<br>";
  }

  // Validate Company CEP - Mandatory Field
  if(validation_company_vars.company_cep == "TRUE")
  {
    validation_counter = validation_counter + 1;
    validation_string = validation_string + "'" + document.getElementById("input_company_cep").value + "', '"
                        + document.getElementById("input_company_street").value + "', '"
                        + document.getElementById("input_company_street_comp").value + "', '"
                        + document.getElementById("input_company_state").value + "', '"
                        + document.getElementById("input_company_city").value + "', '"
                        + document.getElementById("input_company_city_area").value + "', ";
  }
  else
  {
    document.getElementById("input_company_cep").className = "form-control valid_nok";
    error_msg = error_msg + "CEP Inv&aacute;lido ou Vazio!<br>";
  }

  // Validate Street Number - Mandatory Field
  if(validation_company_vars.company_street_number == "TRUE")
  {
    validation_counter = validation_counter + 1;
    validation_string = validation_string + "'" + document.getElementById("input_company_street_number") + "', ";
  }
  else
  {
    document.getElementById("input_company_street_number").className = "form-control valid_nok";
    error_msg = error_msg + "N&uacute;mero do Endere&ccedil;o Inv&aacute;lido ou Vazio!<br>";
  }

  // Validate Company's Contact Name
  if(validation_company_vars.company_contact_name == "TRUE")
  {
    validation_counter = validation_counter + 1;
    validation_string = validation_string + "'" + document.getElementById("input_company_cname").value + "', ";
  }
  else
  {
    document.getElementById("input_company_cname").className = "form-control valid_nok";
    error_msg = error_msg + "Nome de Contato Inv&aacute;lido ou Vazio!<br>";
  }

  // Validate Company's Contact E-Mail
  if(validation_company_vars.company_contact_email == "TRUE")
  {
    validation_counter = validation_counter + 1;
    validation_string = validation_string + "'" + document.getElementById("input_company_cemail").value + "', ";
  }
  else
  {
    document.getElementById("input_company_cemail").className = "form-control valid_nok";
    error_msg = error_msg + "E-Mail do Contato Inv&aacute;lido ou Vazio!<br>";
  }

  // Validate Company's Contact Mobile Phone
  if(validation_company_vars.company_contact_mphone == "TRUE")
  {
    validation_counter = validation_counter + 1;
    validation_string = validation_string + "'" + document.getElementById("input_company_mphone").value + "', '"
                        + document.getElementById("input_company_fphone").value + "', '"
                        + document.getElementById("input_company_extension").value + "', ";
  }
  else
  {
    document.getElementById("input_company_mphone").className = "form-control valid_nok";
    error_msg = error_msg + "Celular do Contato Inv&aacute;lido ou Vazio!<br>";
  }

  // Validate Insurance Type
  if(validation_company_vars.company_insurance_type == "TRUE")
  {
    validation_counter = validation_counter + 1;
    validation_string = validation_string + "'" + insurance_type_list + "', ";
  }
  else
  {
    error_msg = error_msg + "Selecione ao menos um Tipo de Seguro!<br>";
  }

  if(validation_counter != 8)
  {
    document.getElementById("div_error_msg").innerHTML = error_msg;
  }
  else
  {
    validation_string = validation_string + "'" + document.getElementById("input_company_comments").value + "')";
    alert(validation_string);
  }
}
