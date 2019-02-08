/* -----------------------------------------------------------------------
TABLE NAME: 
    tbl_requests
TABLE DESCRIPTION:
    Table that holds all the data for the insurance requests
TABLE CONSTRAINTS:
    PRIMARY KEY -> reqt_idx
----------------------------------------------------------------------- */

CREATE TABLE IF NOT EXISTS tbl_requests
(
    -- General Table Data
    reqt_idx INT NOT NULL AUTO_INCREMENT PRIMARY KEY,   -- Index of the Request
    reqt_cdt DATE NOT NULL,                             -- Creation date of the request
    -- Personal Data
    reqt_cpf VARCHAR(14) NOT NULL,                      -- CPF of the Customer
    reqt_nam VARCHAR(64) NOT NULL,                      -- First Name of the Customer
    reqt_ema VARCHAR(64) NOT NULL,                      -- E-Mail of the Customer
    reqt_bdt DATE,                                      -- Birth Date of the Customer
    reqt_fmb VARCHAR(14) NOT NULL,                      -- Mobile Phone Number of the Customer    
    reqt_fxf VARCHAR(11),                               -- Fixed Phone Number of the Customer
    -- Address Data
    reqt_cep VARCHAR(9) NOT NULL,                       -- CEP of the Customers' Address
    reqt_add VARCHAR(128),                              -- Address of the Customer
    reqt_sta VARCHAR(2),                                -- State of the Customer
    reqt_cit VARCHAR(64),                               -- City of the Customer
    -- Vehicle Data
    reqt_plt VARCHAR(8) NOT NULL,                       -- Vehicle's license plate number
    reqt_man VARCHAR(32),                               -- Vehicle's manufacturer
    reqt_mod VARCHAR(32),                               -- Vehicle's model
    reqt_des VARCHAR(128),                              -- Vehicle's description
    reqt_myr INT,                                       -- Vehicle's manufacture year
    reqt_mmy INT,                                       -- Vehicle's model year
    reqt_cha VARCHAR(17),                               -- Vehicle's chassi number
    reqt_ren VARCHAR(11),                               -- Vehicle's Renavam number
    -- Insurance Data
    reqt_typ VARCHAR(5) NOT NULL,                       -- Type of request, NEW insurance or RENEW insurance
    reqt_inc VARCHAR(32),                               -- Name of the Insurance Company
    reqt_bon VARCHAR(5),                                -- Bonus type of the insurance
    reqt_acc VARCHAR(3)                                 -- Points it an accident happened YES ot NO
);

/* -----------------------------------------------------------------------
QUERIES
----------------------------------------------------------------------- */

INSERT INTO tbl_requests
    (
        reqt_idx, 
        reqt_nam, 
        reqt_bdt, 
        reqt_cpf, 
        reqt_fxf, 
        reqt_fmb, 
        reqt_cep, 
        reqt_ad1, 
        reqt_ad2, 
        reqt_cit, 
        reqt_sta, 
        reqt_plt, 
        reqt_cha, 
        reqt_ren, 
        reqt_myr, 
        reqt_mod, 
        reqt_des, 
        reqt_typ, 
        reqt_inc, 
        reqt_bon, 
        reqt_acc
    )
VALUES
    (
    
    );