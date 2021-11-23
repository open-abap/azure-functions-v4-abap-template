CLASS ltcl_test DEFINITION FINAL FOR TESTING RISK LEVEL HARMLESS DURATION SHORT.
  PUBLIC SECTION.
    METHODS test01 FOR TESTING.
ENDCLASS.

CLASS ltcl_test IMPLEMENTATION.
  METHOD test01.
    DATA(cut) = CAST zif_abap_serverless_v1( NEW zcl_http_trigger( ) ).
    DATA(response) = cut->run( method = 'GET' ).

    cl_abap_unit_assert=>assert_char_cp(
      act = response-body
      exp = 'from abap*' ).
  ENDMETHOD.
ENDCLASS.