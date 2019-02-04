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
Validation Functions
***************************************************************************** */

/* **************************************************************************
Validate the CNPJ Number
************************************************************************** */
function validate_cnpj(object_id)
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
    global_copmany_vars.company_cnpj = "FALSE";
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
      global_copmany_vars.company_cnpj = "FALSE";
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
      global_copmany_vars.company_cnpj = "TRUE";
    }
    else
    {
      document.getElementById(object_id).className = "form-control valid_nok";
      global_copmany_vars.company_cnpj = "FALSE";
    }
  }
}

/* **************************************************************************
Validate Company Name
************************************************************************** */

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
    alert("CEP não encontrado.");
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
    }
    else
    {
      // Malformed CEP
      alert("CEP Inválido!");
      document.getElementById(object_id).className = "form-control valid_nok";
      global_company_vars.company_cep = "FALSE";
    }
  }
  else // If field empty
  {
    alert("CEP não encontrado!");
  }
}
