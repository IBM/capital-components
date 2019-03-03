const os = require("os");
const { template, type } = require("react-docgen-renderer-template");

const generatePropsTable = (props, getType) => {
  const entries = Object.entries(props);
  if (entries.length === 0) return "This component does not have any props.";

  let propsTableHeader = `prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
`;
  return (
    propsTableHeader +
    entries
      .map(
        ([propName, propValue]) =>
          `**${propName}** | \`${getType(propValue.type).replace(/\|/g, "\\|")}\` | ${
            propValue.defaultValue ? `\`${propValue.defaultValue}\`` : ""
          } | ${propValue.required ? ":white_check_mark:" : ":x:"} | ${
            propValue.description ? propValue.description : ""
          }`
      )
      .join(os.EOL)
  );
};

const templateCreator = template({
  unknown: type`${({ context }) => context.type.name}`,
  func: "Function",
  array: "Array",
  object: "Object",
  string: "String",
  number: "Number",
  bool: "Boolean",
  node: "ReactNode",
  element: "ReactElement",
  symbol: "Symbol",
  any: "*",
  custom: type`${({ context }) =>
    context.type.raw.includes("function(") ? "(custom validator)" : context.type.raw}`,
  shape: "Shape",
  arrayOf: type`Array[]<${({ context, getType }) =>
    context.type.value.raw ? context.type.value.raw : getType(context.type.value)}>`,
  objectOf: type`Object[#]<${({ context, getType }) =>
    context.type.value.raw ? context.type.value.raw : getType(context.type.value)}>`,
  instanceOf: type`${({ context }) => context.type.value}`,
  enum: type`Enum(${({ context, getType }) =>
    context.type.computed
      ? context.type.value
      : context.type.value.map(value => getType(value)).join(", ")})`,
  union: type`Union<${({ context, getType }) =>
    context.type.computed
      ? context.type.value
      : context.type.value.map(value => (value.raw ? value.raw : getType(value))).join("\\|")}>`
});

const beginTag = "<!-- GENERATED:PROPS_TABLE:BEGIN -->";
const endTag = "<!-- GENERATED:PROPS_TABLE:END -->";

module.exports = template => {
  const startIndex = template.indexOf(beginTag);
  const endIndex = template.indexOf(endTag);
  const templateSectionBefore = template && startIndex >= 0 ? template.slice(0, startIndex) : "";
  const templateSectionAfter =
    template && endIndex >= 0 ? template.slice(endIndex + endTag.length) : "";
  const templateObject = templateCreator`
${() => templateSectionBefore}
<!-- GENERATED:PROPS_TABLE:BEGIN -->
## Props
${({ context, getType }) => generatePropsTable(context.props, getType)}
<!-- GENERATED:PROPS_TABLE:END -->
${() => templateSectionAfter}
`;
  return templateObject;
};
