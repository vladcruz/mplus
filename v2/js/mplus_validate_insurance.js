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