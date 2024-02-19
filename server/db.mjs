import AWS from "aws-sdk";

AWS.config.update({
  region: "eu-central-1",
});

const ddbClient = new AWS.DynamoDB.DocumentClient();

const getTable = async (tableName) => {
  const params = {
    TableName: tableName,
  };
  const data = await ddbClient.scan(params).promise();
  return data;
};

export { getTable };
