import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  names,
  Tree,
  readJson
} from '@nx/devkit';
import * as path from 'path';
import { LibGeneratorGeneratorSchema } from './schema';
import { read } from 'fs';

export async function libGeneratorGenerator(
  tree: Tree,
  options: LibGeneratorGeneratorSchema
) {
  const scopeName = readJson(tree, 'package.json').name;
  const resolvedOptions = {
    ... options,
    name: names(options.name).fileName,
    scope: scopeName// we used in template
  }
  const projectRoot = `libs/${resolvedOptions.name}`;
  // addProjectConfiguration(tree, options.name, {
  //   root: projectRoot,
  //   projectType: 'library',
  //   sourceRoot: `${projectRoot}/src`,
  //   targets: {},
  // });
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, resolvedOptions);
  await formatFiles(tree);
}

export default libGeneratorGenerator;
