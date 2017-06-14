// This is the file we will use the store the AWS User Pool ID and App Client ID We created for our app
export default {
  
	MAX_ATTACHMENT_SIZE: 5000000,
  	
	s3: {
  		BUCKET: 'bluescoder-app-uploads'
	},

	apiGateway: {
  		URL: 'https://xzppwuqss7.execute-api.us-east-2.amazonaws.com/prod',
	},

  	//AM2017.06.13 - These are the configurations from Cognito
  	cognito: {
    	USER_POOL_ID : 'us-east-2_snDf7AsuK',
    	APP_CLIENT_ID : '1e251gncnktk0j5at9ll3885q',

    	REGION: 'us-east-2',
		IDENTITY_POOL_ID: 'us-east-2:c3c96187-9fac-4034-afa1-af62080e8e06',

    //IDentify Pool ID : us-east-2:c3c96187-9fac-4034-afa1-af62080e8e06
    //Identity Pool ARN : arn:aws:cognito-identity:us-east-2:654064818053:identitypool/us-east-2:c3c96187-9fac-4034-afa1-af62080e8e06
    //Test with teh following : 
    //Name : bluescoder@admin.com
    //password : Passw0rd!
  }
};