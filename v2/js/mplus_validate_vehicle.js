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
Validation Functions
***************************************************************************** */

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
    global_person_vars.vehicle_plate = "FALSE";
  }
  else
  {
    document.getElementById(object_id).className = "form-control valid_ok";
    global_person_vars.vehicle_plate = "TRUE";
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
    global_person_vars.vehicle_chassis = "FALSE";
  }
  else
  {
    document.getElementById(object_id).className = "form-control valid_ok";
    global_person_vars.vehicle_chassis = "TRUE";
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
