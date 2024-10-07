import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { SSMParameterReader } from '../src';

describe('SSMParameterReader', () => {
  test('synth', () => {
    const app = new App();
    const stack = new Stack(app, 'SSMParameterReaderStack');
    new SSMParameterReader(stack, 'SSMParameterReader', {
      parameterName: '/test/path',
      region: 'ap-northeast-1',
    });
    const template = Template.fromStack(stack);
    template.hasResource('Custom::AWS', {});
  });
});
