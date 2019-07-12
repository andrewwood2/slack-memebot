# Slack meme bot

A quick hack to make memes dynamically inside Slack.

### To use

Create an App in Slack and add to a workspace. Add a slash command and point the url to wherever this is hosted. Can run locally and expose the port to the public using ngrok. 

The app needs the SLACK_SIGNING_SECRET (found on the app Basic Information page) as an environment variable. It's easy to add this as a .env file in the root, or add as an env variable where the app is hosted. 

### Credit

Thanks to Memegen for the API.