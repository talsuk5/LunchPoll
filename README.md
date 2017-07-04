# LunchPoll
Lunch poll, written in Google apps script!

## This script sends a Google form with lunch options each day, except for holidays and weekends.

### Notes:
* **Weekend is set for Friday/Saturday configuraion but can be changed for Saturday/Sunday.**
* **Holidays are for Israel (isr), but can also be changed to another country.**


### Things you need for this google apps script are:

1. A new Google apps script to import the files to
2. Google form, created by your own vision (see my form below)
3. Folder to hold your script file (optional)
4. Folder to hold your output responses sheet file (optional) 
5. Slack channel to post links to the form and to the responses sheet + incoming webhook (optional)
6. Set up a trigger for this script to run daily


![alt text](screenshots/Form1.JPG "")
![alt text](screenshots/Form2.JPG "")



#### Properties needed for this app (defined in "script properties"):
* LUNCH_FORM_ID
* EMAIL_RECIPIENTS
* OUTPUT_FOLDER_ID
* LUNCH_FOLDER_ID
* SLACK_WEBHOOK_URL

#### Additional links:
* http://jivimberg.github.io/blog/2014/08/21/email-google-form-daily/
* https://api.slack.com/incoming-webhooks


