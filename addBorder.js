const addBorder = picture => {
  const output = picture.map(value => {
    return `*${value}*`;
  });
  ast = '*';
  output.push(ast.repeat(output[0].length));
  output.unshift(ast.repeat(output[0].length));
  return output;
}
