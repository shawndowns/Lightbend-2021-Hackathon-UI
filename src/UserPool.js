import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "<Enter User Pool ID>",
    ClientId: "<Enter Client ID>"
}

export default new CognitoUserPool(poolData);