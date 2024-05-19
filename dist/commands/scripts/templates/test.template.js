"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testTemplate = void 0;
const testTemplate = (name, type) => `
import { ${name}${type.charAt(0).toUpperCase() + type.slice(1)} } from '${type === 'controller' ? `../../${name.toLowerCase()}/${name.toLowerCase()}.controller` : `../../../services/${name.toLowerCase()}/${name.toLowerCase()}.service`}';
${type === 'controller' ? `import { ${name}Service } from '../../../services/${name.toLowerCase()}/${name.toLowerCase()}.service';` : ''}

describe('${name} ${type}', () => {
  it('should be defined', () => {
    ${type === 'controller'
    ? `const service = new ${name}Service();\n    const instance = new ${name}${type.charAt(0).toUpperCase() + type.slice(1)}(service);`
    : `const instance = new ${name}${type.charAt(0).toUpperCase() + type.slice(1)}();`}
    expect(instance).toBeDefined();
  });

  // Add more tests here
});
`;
exports.testTemplate = testTemplate;
