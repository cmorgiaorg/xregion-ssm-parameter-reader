import { Effect, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { AwsCustomResource, AwsSdkCall, PhysicalResourceId } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';

export interface SSMParameterReaderProps {
  readonly parameterName: string;
  readonly region: string;
  readonly roleArn?: string;
}

export class SSMParameterReader extends AwsCustomResource {
  constructor(scope: Construct, name: string, props: SSMParameterReaderProps) {
    const { parameterName, region } = props;

    const ssmAwsSdkCall: AwsSdkCall = {
      service: 'SSM',
      action: 'getParameter',
      parameters: {
        Name: parameterName,
      },
      region: region,
      assumedRoleArn: props.roleArn,
      physicalResourceId: PhysicalResourceId.of(name),
      //physicalResourceId: { id: Date.now().toString() } // Update physical id to always fetch the latest version
    };

    super(scope, name, {
      onUpdate: ssmAwsSdkCall,
      policy: {
        statements: [
          new PolicyStatement({
            resources: ['*'],
            actions: ['ssm:GetParameter'],
            effect: Effect.ALLOW,
          }),
          new PolicyStatement({
            resources: ['*'],
            actions: ['sts:AssumeRole'],
            effect: Effect.ALLOW,
          }),
        ],
      },
    });
  }

  public retrieveParameterValue(): string {
    return this.getResponseField('Parameter.Value').toString();
  }
}