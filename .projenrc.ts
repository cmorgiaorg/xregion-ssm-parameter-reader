import { awscdk } from 'projen';

const projectName = 'xregion-ssm-parameter-reader';
const keywords = projectName.split('-');
keywords.push('cdk', 'typescript', 'aws');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Claudio Morgia',
  authorAddress: '214524+cmorgia@users.noreply.github.com',
  cdkVersion: '2.183.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.5.0',
  name: projectName,
  keywords: keywords,
  projenrcTs: true,
  repositoryUrl: `https://github.com/cmorgiaorg/${projectName}.git`,
  publishToNuget: {
    dotNetNamespace: 'com.github.cmorgia',
    packageId: projectName,
  },
  // publishToMaven: {
  //   mavenGroupId: 'com.amazonaws.xregion',
  //   mavenArtifactId: 'xregion-ssm-parameter',
  //   javaPackage: 'com.amazonaws.xregion.ssmparameter',
  // },
  publishToPypi: {
    distName: projectName,
    module: projectName,
  },

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
