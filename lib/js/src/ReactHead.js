'use strict';

var ReactHead = require("react-head");
var ReasonReact = require("reason-react/lib/js/src/ReasonReact.js");
var Js_null_undefined = require("bs-platform/lib/js/js_null_undefined.js");

function make(children) {
  var props = { };
  return ReasonReact.wrapJsForReason(ReactHead.Title, props, children);
}

var Title = /* module */[/* make */make];

function make$1(name, property, content, children) {
  var props = {
    name: Js_null_undefined.fromOption(name),
    property: Js_null_undefined.fromOption(property),
    content: Js_null_undefined.fromOption(content)
  };
  return ReasonReact.wrapJsForReason(ReactHead.Meta, props, children);
}

var Meta = /* module */[/* make */make$1];

function make$2(rel, href, sizes, type_, as_, media, crossorigin, children) {
  var props = {
    rel: Js_null_undefined.fromOption(rel),
    href: Js_null_undefined.fromOption(href),
    sizes: Js_null_undefined.fromOption(sizes),
    type: Js_null_undefined.fromOption(type_),
    as: Js_null_undefined.fromOption(as_),
    media: Js_null_undefined.fromOption(media),
    crossorigin: Js_null_undefined.fromOption(crossorigin)
  };
  return ReasonReact.wrapJsForReason(ReactHead.Link, props, children);
}

var Link = /* module */[/* make */make$2];

function make$3(type_, media, children) {
  var props = {
    type: Js_null_undefined.fromOption(type_),
    media: Js_null_undefined.fromOption(media)
  };
  return ReasonReact.wrapJsForReason(ReactHead.Style, props, children);
}

var Style = /* module */[/* make */make$3];

function make$4(headTags, children) {
  var props = {
    headTags: Js_null_undefined.fromOption(headTags)
  };
  return ReasonReact.wrapJsForReason(ReactHead.HeadProvider, props, children);
}

var HeadProvider = /* module */[/* make */make$4];

exports.Title = Title;
exports.Meta = Meta;
exports.Link = Link;
exports.Style = Style;
exports.HeadProvider = HeadProvider;
/* react-head Not a pure module */
