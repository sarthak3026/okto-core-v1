import "react-native-get-random-values";
import "react-native-url-polyfill/auto";
import { DynamoDB, DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb";

(async () => {
    const client = new DynamoDBClient({ region: "ap-south-1" });
    const command = new ListTablesCommand({});
    try {
      const results = await client.send(command);
      console.log(results.TableNames.join("\n"));
    } catch (err) {
      console.error(err);
    }
  })();