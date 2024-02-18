import AWS from "aws-sdk";
import "dotenv/config.js";

const ddbClient = new AWS.DynamoDB.DocumentClient();

const getWorkExperience = async () => {
  const params = {
    TableName: "work_experience",
  };

  const workExperience = await ddbClient.scan(params).promise();
  return workExperience;
};

export { getWorkExperience };
