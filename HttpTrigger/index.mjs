await import("../output/init.mjs");

// boilerplate
export default async function (context, req) {
  let method = new abap.types.String().set(req.method);
  let query = new abap.types.String().set(new URLSearchParams(req.query).toString());

  abap.console.clear();
  const trig = new abap.Classes['ZCL_HTTP_TRIGGER']();
  await trig.constructor_();
  const request = new abap.types.Structure(
    {headers: new abap.types.Table(new abap.types.Structure({
      field: new abap.types.String(),
      value: new abap.types.String()}),
      {"withHeader":false,
       "type":"STANDARD",
       "isUnique":false,
       "keyFields":[]}),
    body: new abap.types.String()});
  request.get().body.set(req.rawBody || "");
  for (const h in req.headers) {
    const add = new abap.types.Structure({
      field: new abap.types.String(),
      value: new abap.types.String()});
    add.get().field.set(h);
    add.get().field.set(req.headers[h]);
    request.get().headers.append(add);
  }
  const result = await trig.zif_abap_serverless_v1$run({method, query, request});
  console.dir(abap.console.get());

  context.res.body = result.get().body.get();
};
