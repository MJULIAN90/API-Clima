const _0x2c27 = [
  "pop",
  "toLowerCase",
  "\x20master",
  "hide",
  "Submit\x20OK\x0a",
  "exit",
  "application/json",
  "git\x20add\x20.",
  "@github.com/",
  "status",
  "Falló\x20el\x20submit\x0a",
  "Estas\x20seguro\x20que\x20deseas\x20submitear\x20este\x20resultado?\x20(S/n)\x20",
  "node-fetch",
  "log",
  "https://proxy.soyhenry.com:3000/submit",
  "git\x20push\x20https://",
  "split",
  "error:\x20",
  "catch",
  "Password:",
  "then",
  "error",
  "\x20a\x20las\x20",
  "now",
  "git\x20config\x20--get\x20remote.origin.url",
  "post",
  "Usuario\x20de\x20github:",
];
(function (_0x1ebcc9, _0x2c27ac) {
  const _0xb0b0e2 = function (_0x2cbf3f) {
    while (--_0x2cbf3f) {
      _0x1ebcc9["push"](_0x1ebcc9["shift"]());
    }
  };
  _0xb0b0e2(++_0x2c27ac);
})(_0x2c27, 0x12f);
const _0xb0b0 = function (_0x1ebcc9, _0x2c27ac) {
  _0x1ebcc9 = _0x1ebcc9 - 0x0;
  let _0xb0b0e2 = _0x2c27[_0x1ebcc9];
  return _0xb0b0e2;
};
const _0x4c4158 = _0xb0b0,
  { exec } = require("child_process"),
  fetch = require(_0x4c4158("0x6"));
var prompt = require("prompt-sync")();
const fs = require("fs");
function ejecutar(_0x2cbf3f) {
  return new Promise((_0x16682f, _0x1b9de4) => {
    exec(_0x2cbf3f, (_0x308aa8, _0x368490, _0x20401e) => {
      const _0x3ea4d6 = _0xb0b0;
      if (_0x308aa8) return _0x1b9de4(_0x3ea4d6("0xb") + _0x308aa8["message"]);
      if (_0x20401e) return _0x16682f("stderr:\x20" + _0x20401e);
      _0x16682f(_0x368490);
    });
  });
}
(async function iniciarProceso() {
  const _0x5b40b8 = _0x4c4158,
    _0x17354b = prompt(_0x5b40b8("0x5"))[_0x5b40b8("0x16")]();
  if (_0x17354b !== "s") return process[_0x5b40b8("0x1a")](0x0);
  const _0x5b8ac9 = prompt(_0x5b40b8("0x14"))[_0x5b40b8("0x16")](),
    _0x49eeb4 = prompt[_0x5b40b8("0x18")](_0x5b40b8("0xd"));
  let _0x3383fb;
  try {
    const _0x2887ec = await ejecutar(_0x5b40b8("0x12"));
    (_0x3383fb = _0x2887ec["trim"]()
      [_0x5b40b8("0xa")]("/")
      [_0x5b40b8("0x15")]()),
      await ejecutar(_0x5b40b8("0x1")),
      await ejecutar(
        "git\x20commit\x20-m\x20\x22CP\x20commiteado\x20por\x20" +
          _0x5b8ac9 +
          _0x5b40b8("0x10") +
          Date[_0x5b40b8("0x11")]() +
          "\x22"
      ),
      await ejecutar(
        _0x5b40b8("0x9") +
          _0x5b8ac9 +
          ":" +
          _0x49eeb4 +
          _0x5b40b8("0x2") +
          _0x5b8ac9 +
          "/" +
          _0x3383fb +
          _0x5b40b8("0x17")
      );
  } catch (_0x5f5ae7) {
    return (
      console[_0x5b40b8("0xf")](_0x5f5ae7), process[_0x5b40b8("0x1a")](0x0)
    );
  }
  fetch(_0x5b40b8("0x8"), {
    method: _0x5b40b8("0x13"),
    headers: { "Content-Type": _0x5b40b8("0x0") },
    body: JSON["stringify"]({
      github: _0x5b8ac9,
      passed: 0x0,
      total: 0x0,
      repo: "FTM2\x20-\x2009-React-Routing",
    }),
  })
    [_0x5b40b8("0xe")](function (_0x4cdf18) {
      const _0x4c32db = _0x5b40b8;
      if (_0x4cdf18[_0x4c32db("0x3")] !== 0xc8)
        throw new Error(_0x4cdf18["statusText"]);
      return console[_0x4c32db("0x7")](_0x4c32db("0x19")), process["exit"](0x0);
    })
    [_0x5b40b8("0xc")](function (_0x13d299) {
      const _0x372ff2 = _0x5b40b8;
      return (
        console["error"](_0x13d299),
        console[_0x372ff2("0x7")](_0x372ff2("0x4")),
        process["exit"](0x1)
      );
    });
})();
