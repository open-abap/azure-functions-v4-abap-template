CLASS zcl_http_trigger DEFINITION PUBLIC.
  PUBLIC SECTION.
    INTERFACES zif_abap_serverless_v1.
ENDCLASS.

CLASS zcl_http_trigger IMPLEMENTATION.
  METHOD zif_abap_serverless_v1~run.
    WRITE / 'hello world'.
  ENDMETHOD.
ENDCLASS.