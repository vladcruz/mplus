/* ********************************************************************************
Form Validation File
******************************************************************************** */
function validate_cpf(inputID, outputID)
{
    // Clear all error messages that may exist
    document.getElementById(outputID).innerHTML = "";

    var cpf;
    var cpf_sum;
    var cpf_leftover;

    cpf = document.getElementById(inputID).value;

    // Remove all unnecessary chars
    cpf = cpf.replace(/\./g,"");
    cpf = cpf.replace(/-/g,"");

    if (cpf == "00000000000" || cpf.length != 11)
    {
        document.getElementById(outputID).innerHTML = "CPF Inválido!";
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
            document.getElementById(outputID).innerHTML = "CPF Inválido!";
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
            document.getElementById(outputID).innerHTML = "Digitar um CPF Válido!";
        }
    }
}

function validate_name(inputID, outputID)
{
    // Clear all error messages that may exist
    document.getElementById(outputID).innerHTML = "";

    var name;

    // Getting the values
    name =  document.getElementById(inputID).value.trim();

    if (name.search(" ") < 0)
    {
        document.getElementById(outputID).innerHTML = "Digitar Nome e Sobrenome!";
    }   
}

function validate_email(inputID, outputID)
{
    // Clear all error messages that may exist
    document.getElementById(outputID).innerHTML = "";

    var email;

    // Getting the values
    email = document.getElementById(inputID).value.trim();

    if(email.search("@") < 0)
    {
        document.getElementById(outputID).innerHTML = "Digitar um E-Mail Válido!";
    }
}

function validate_bdate(inputID, outputID)
{
    // Clear all error messages that may exist
    document.getElementById(outputID).innerHTML = "";

    var temp, bdate, today;
    var datediff, yeardiff;

    // Getting the values
    temp =  document.getElementById(inputID).value.trim().split("/");
    bdate = new Date(temp[2] + "-" + temp[1] + "-" + temp[0]);
    today = new Date();

    // Finding the Date difference between today and the provided date
    datediff = Math.abs(bdate.getTime() - today.getTime()); // in miliseconds
    yeardiff = Math.ceil((datediff/(1000 * 3600 * 24))/365); // in years

    if(yeardiff < 18)
    {
        document.getElementById(outputID).innerHTML = "Deve possuir mais de 18 anos!";
    }
}

function validate_mphone(inputID, outputID)
{
    // Clear all error messages that may exist
    document.getElementById(outputID).innerHTML = "";

    var mphone;
    var invalid_mphones;

    // Creates a list of invalid numbers that can be used as mobile phones
    invalid_mphones = ["00000000000","11111111111","22222222222","33333333333","44444444444","55555555555","66666666666","77777777777","88888888888","99999999999"];
    
    // Cleans the data that comes from the form
    mphone = document.getElementById(inputID).value.trim();
    mphone = mphone.replace(/-/g,"");
    mphone = mphone.replace(/\(/g,"");
    mphone = mphone.replace(/\)/g,"");
    
    // Checks for the length of the phone or if exists on the list of invalid numbers
    if((mphone.length != 11) || (invalid_mphones.indexOf(mphone) != -1))
    {
        document.getElementById(outputID).innerHTML = "Digitar um Telefone válido!";
    }
}

function validate_cep(inputID, outputID)
{
    // Clear all error messages that may exist
    document.getElementById(outputID).innerHTML = "";

    var cep;
    var invalid_cep;

    // Creates a list of invalid numbers that can be used as cep
    invalid_cep = ["00000000","11111111", "22222222", "33333333", "44444444", "55555555", "66666666", "77777777", "88888888", "99999999", "12345678", "98765432"];

    cep = document.getElementById(inputID).value.trim();
    cep = cep.replace(/-/g,"");

    if((cep.length != 8) || (invalid_cep.indexOf(cep) != -1))
    {
        document.getElementById(outputID).innerHTML = "Digitar um CEP válido!";
    }
}

function validate_plate(inputID, outputID)
{
    // Clear all error messages that may exist
    document.getElementById(outputID).innerHTML = "";

    var plate;

    plate = document.getElementById(inputID).value.trim();
    plate = plate.replace(" ","");
    
    if(plate.length != 7)
    {
        document.getElementById(outputID).innerHTML = "Digitar uma Placa válida!";
    }
}

function validate_chassis(inputID, outputID)
{
    // Clear all error messages that may exist
    document.getElementById(outputID).innerHTML = "";

    var renavam = document.getElementById(inputID).value.trim();

    if(renavam.length != 17)
    {
        document.getElementById(outputID).innerHTML = "CHASSIS Inválido!";
    }
}

function validate_renavam(inputID, outputID)
{
    // Clear all error messages that may exist
    document.getElementById(outputID).innerHTML = "";

    var renavam = document.getElementById(inputID).value.trim();

    if(renavam.length != 11)
    {
        document.getElementById(outputID).innerHTML = "RENAVAM Inválido!";
    }
}

function validate_select(inputID, outputID)
{
    // Clear all error messages that may exist
    document.getElementById(outputID).innerHTML = "";
    
    var selected = document.getElementById(inputID).value;

    if(selected == "---")
    {
        document.getElementById(outputID).innerHTML = "Selecione uma Opção!";
    }
}