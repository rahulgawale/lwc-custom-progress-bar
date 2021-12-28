let codeGenerator = (config) => {
  let code = `<c-progress-bar`;

  if(config.size)
    code = code + ` size="${config.size}"`;

  if(config.variant)
    code = code + ` variant="${config.variant}"`;

  if(config.customColor)
    code = code + ` custom-color="${config.customColor}"`;

  code = code + ` value="${config.value}"`;

  if(config.radius)
    code = code + ` radius="${config.radius}"`;

  if(config.showDescription){
    code = code + ` show-description="${config.showDescription}"`
      code = code + ` description="${config.description}"`;
  }

  code = code + `></c-progress-bar>`;
  return code;
};
export default codeGenerator;