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