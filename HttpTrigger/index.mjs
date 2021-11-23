import runtime from "@abaplint/runtime";
global.abap = new runtime.ABAP();
await import("../output/zcl_http_trigger.clas.mjs");
await import("../output/zif_abap_serverless_v1.intf.mjs");

export default async function (context, req) {
  context.res.body = "hello from node";

// boilerplate
  abap.console.clear();
  const trig = new abap.Classes['ZCL_HTTP_TRIGGER']();
  await trig.constructor_();
  await trig.zif_abap_serverless_v1$run();
  console.dir(abap.console.get());
};