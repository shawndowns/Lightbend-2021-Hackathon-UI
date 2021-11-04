### This Project is sampled from the following video series:
https://www.youtube.com/playlist?list=PLDckhLrNepPR8y-9mDXsLutiwsLhreOk1


### Setup:
You follow the directions in the first video to setup AWS Cognito and add your configuration to the file they mention in the video

Next run `npm install`

### Run:
Run `npm start` and a browser will open.

### How to get the JWT:
In crome, open your console before you login. When you login you'll see session information wich contains an idToken which will contain:

{ 
	jwtToken: "An absurdly large string" 
}