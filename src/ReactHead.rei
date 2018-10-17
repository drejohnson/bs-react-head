module Title: {
  let make:
    array(ReasonReact.reactElement) =>
    ReasonReact.component(
      ReasonReact.stateless,
      ReasonReact.noRetainedProps,
      ReasonReact.actionless,
    );
};

module Meta: {
  let make:
    (
      ~name: string=?,
      ~property: string=?,
      ~content: string=?,
      array(ReasonReact.reactElement)
    ) =>
    ReasonReact.component(
      ReasonReact.stateless,
      ReasonReact.noRetainedProps,
      ReasonReact.actionless,
    );
};

module Link: {
  let make:
    (
      ~rel: string=?,
      ~href: string=?,
      ~sizes: string=?,
      ~type_: string=?,
      ~as_: string=?,
      ~media: string=?,
      ~crossorigin: string=?,
      array(ReasonReact.reactElement)
    ) =>
    ReasonReact.component(
      ReasonReact.stateless,
      ReasonReact.noRetainedProps,
      ReasonReact.actionless,
    );
};

module Style: {
  let make:
    (~type_: string=?, ~media: string=?, array(ReasonReact.reactElement)) =>
    ReasonReact.component(
      ReasonReact.stateless,
      ReasonReact.noRetainedProps,
      ReasonReact.actionless,
    );
};

module HeadProvider: {
  let make:
    (
      ~headTags: array(ReasonReact.reactElement)=?,
      array(ReasonReact.reactElement)
    ) =>
    ReasonReact.component(
      ReasonReact.stateless,
      ReasonReact.noRetainedProps,
      ReasonReact.actionless,
    );
};