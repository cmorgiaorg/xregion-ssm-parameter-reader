# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SSMParameterReader <a name="SSMParameterReader" id="xregion-ssm-parameter-reader.SSMParameterReader"></a>

#### Initializers <a name="Initializers" id="xregion-ssm-parameter-reader.SSMParameterReader.Initializer"></a>

```typescript
import { SSMParameterReader } from 'xregion-ssm-parameter-reader'

new SSMParameterReader(scope: Construct, name: string, props: SSMParameterReaderProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#xregion-ssm-parameter-reader.SSMParameterReader.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#xregion-ssm-parameter-reader.SSMParameterReader.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#xregion-ssm-parameter-reader.SSMParameterReader.Initializer.parameter.props">props</a></code> | <code><a href="#xregion-ssm-parameter-reader.SSMParameterReaderProps">SSMParameterReaderProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="xregion-ssm-parameter-reader.SSMParameterReader.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="xregion-ssm-parameter-reader.SSMParameterReader.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="xregion-ssm-parameter-reader.SSMParameterReader.Initializer.parameter.props"></a>

- *Type:* <a href="#xregion-ssm-parameter-reader.SSMParameterReaderProps">SSMParameterReaderProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#xregion-ssm-parameter-reader.SSMParameterReader.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#xregion-ssm-parameter-reader.SSMParameterReader.getResponseField">getResponseField</a></code> | Returns response data for the AWS SDK call as string. |
| <code><a href="#xregion-ssm-parameter-reader.SSMParameterReader.getResponseFieldReference">getResponseFieldReference</a></code> | Returns response data for the AWS SDK call. |
| <code><a href="#xregion-ssm-parameter-reader.SSMParameterReader.retrieveParameterValue">retrieveParameterValue</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="xregion-ssm-parameter-reader.SSMParameterReader.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `getResponseField` <a name="getResponseField" id="xregion-ssm-parameter-reader.SSMParameterReader.getResponseField"></a>

```typescript
public getResponseField(dataPath: string): string
```

Returns response data for the AWS SDK call as string.

Example for S3 / listBucket : 'Buckets.0.Name'

Note that you cannot use this method if `ignoreErrorCodesMatching`
is configured for any of the SDK calls. This is because in such a case,
the response data might not exist, and will cause a CloudFormation deploy time error.

###### `dataPath`<sup>Required</sup> <a name="dataPath" id="xregion-ssm-parameter-reader.SSMParameterReader.getResponseField.parameter.dataPath"></a>

- *Type:* string

the path to the data.

---

##### `getResponseFieldReference` <a name="getResponseFieldReference" id="xregion-ssm-parameter-reader.SSMParameterReader.getResponseFieldReference"></a>

```typescript
public getResponseFieldReference(dataPath: string): Reference
```

Returns response data for the AWS SDK call.

Example for S3 / listBucket : 'Buckets.0.Name'

Use `Token.asXxx` to encode the returned `Reference` as a specific type or
use the convenience `getDataString` for string attributes.

Note that you cannot use this method if `ignoreErrorCodesMatching`
is configured for any of the SDK calls. This is because in such a case,
the response data might not exist, and will cause a CloudFormation deploy time error.

###### `dataPath`<sup>Required</sup> <a name="dataPath" id="xregion-ssm-parameter-reader.SSMParameterReader.getResponseFieldReference.parameter.dataPath"></a>

- *Type:* string

the path to the data.

---

##### `retrieveParameterValue` <a name="retrieveParameterValue" id="xregion-ssm-parameter-reader.SSMParameterReader.retrieveParameterValue"></a>

```typescript
public retrieveParameterValue(): string
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#xregion-ssm-parameter-reader.SSMParameterReader.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="xregion-ssm-parameter-reader.SSMParameterReader.isConstruct"></a>

```typescript
import { SSMParameterReader } from 'xregion-ssm-parameter-reader'

SSMParameterReader.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="xregion-ssm-parameter-reader.SSMParameterReader.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#xregion-ssm-parameter-reader.SSMParameterReader.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#xregion-ssm-parameter-reader.SSMParameterReader.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |

---

##### `node`<sup>Required</sup> <a name="node" id="xregion-ssm-parameter-reader.SSMParameterReader.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="xregion-ssm-parameter-reader.SSMParameterReader.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#xregion-ssm-parameter-reader.SSMParameterReader.property.PROVIDER_FUNCTION_UUID">PROVIDER_FUNCTION_UUID</a></code> | <code>string</code> | The uuid of the custom resource provider singleton lambda function. |

---

##### `PROVIDER_FUNCTION_UUID`<sup>Required</sup> <a name="PROVIDER_FUNCTION_UUID" id="xregion-ssm-parameter-reader.SSMParameterReader.property.PROVIDER_FUNCTION_UUID"></a>

```typescript
public readonly PROVIDER_FUNCTION_UUID: string;
```

- *Type:* string

The uuid of the custom resource provider singleton lambda function.

---

## Structs <a name="Structs" id="Structs"></a>

### SSMParameterReaderProps <a name="SSMParameterReaderProps" id="xregion-ssm-parameter-reader.SSMParameterReaderProps"></a>

#### Initializer <a name="Initializer" id="xregion-ssm-parameter-reader.SSMParameterReaderProps.Initializer"></a>

```typescript
import { SSMParameterReaderProps } from 'xregion-ssm-parameter-reader'

const sSMParameterReaderProps: SSMParameterReaderProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#xregion-ssm-parameter-reader.SSMParameterReaderProps.property.parameterName">parameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#xregion-ssm-parameter-reader.SSMParameterReaderProps.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#xregion-ssm-parameter-reader.SSMParameterReaderProps.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="xregion-ssm-parameter-reader.SSMParameterReaderProps.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="xregion-ssm-parameter-reader.SSMParameterReaderProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="xregion-ssm-parameter-reader.SSMParameterReaderProps.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---



