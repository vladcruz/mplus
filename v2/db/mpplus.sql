/* -----------------------------------------------------------------------
TABLE NAME:
    tbl_company_requests
TABLE DESCRIPTION:
    Table that holds all the data for the insurance requests for
    companies
TABLE CONSTRAINTS:
    PRIMARY KEY -> cpy_req_idx
----------------------------------------------------------------------- */

CREATE TABLE IF NOT EXISTS tbl_company_requests
(
  -- Internal Data
  cpy_req_idx INT NOT NULL AUTO_INCREMENT PRIMARY KEY,    -- Index of the Requests
  cpy_req_cdt DATE NOT NULL,                              -- Creation date of the Request

  -- Company Information
  cpy_req_cpj VARCHAR(18) NOT NULL,                       -- CNPJ Number of the Company
  cpy_req_cpn VARCHAR(64) NOT NULL,                       -- Name of the Company
  cpy_req_cep VARCHAR(9) NOT NULL,                        -- CEP of the Company
  cpy_req_str VARCHAR(32) NOT NULL,                       -- Street of the Company
  cpy_req_num VARCHAR(6) NOT NULL,                        -- Number of the Building on the Street
  cpy_req_com VARCHAR(32),                                -- Complement to the address of the Company
  cpy_req_stt VARCHAR(2) NOT NULL,                        -- State of the Company
  cpy_req_cit VARCHAR(32) NOT NULL,                       -- City of the Company
  cpy_req_are VARCHAR(32) NOT NULL,                       -- City Area of the Company

  -- Company Contact Information
  cpy_req_ctn VARCHAR(24) NOT NULL,                       -- Name of the Person of Contact in the Company
  cpy_req_ema VARCHAR(32) NOT NULL,                       -- E-Mail of the Person of Contact in the Company
  cpy_req_mph VARCHAR(14) NOT NULL,                       -- Mobile Phone of the Person of Contact in the Company
  cpy_req_fph VARCHAR(13),                                -- Fixed Phone of the Person of Contact in the Company
  cpy_req_ext VARCHAR(5),                                 -- Extension of the Person of Contact in the Company

  -- Insurance Information
  cpy_req_ity VARCHAR(120) NOT NULL,                      -- Insurance Type, values area separated by semicolon
  cpy_req_com VARCHAR(2048)                               -- Additional comments to the request
);

/* -----------------------------------------------------------------------
TABLE NAME:
    tbl_person_requests
TABLE DESCRIPTION:
    Table that holds all the data for the insurance requests for
    people
TABLE CONSTRAINTS:
    PRIMARY KEY -> per_req_idx
----------------------------------------------------------------------- */
CREATE TABLE IF NOT EXISTS tbl_person_requests
(
  
)
