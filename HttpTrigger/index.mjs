import runtime from "@abaplint/runtime";
global.abap = new runtime.ABAP();
await import("../output/zcl_http_trigger.clas.mjs");
await import("../output/zif_abap_serverless_v1.intf.mjs");

// boilerplate
export default async function (context, req) {
  let method = new abap.types.String().set(req.method);
  let query = new abap.types.String().set(new URLSearchParams(req.query).toString());

  abap.console.clear();
  const trig = new abap.Classes['ZCL_HTTP_TRIGGER']();
  await trig.constructor_();
  const result = await trig.zif_abap_serverless_v1$run({method, query});
  console.dir(abap.console.get());

  context.res.body = result.get().body.get();
};