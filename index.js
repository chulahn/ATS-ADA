//Variables containing fruit info//////

var applePicURL =
  "https://raw.githubusercontent.com/coderrick/coderrick.github.io/master/images/page.png";
var appleInfo = "Derrick Duncan";
var appleSkills = "Javascript, Linux, AWS";
var appleMatch = "99%";

var bananaPicURL =
  "https://s3-eu-west-1.amazonaws.com/samples-kickresume-com/21/image.png";
var bananaInfo = "Alan Turing";
var bananaSkills = "C#, Microsoft, HTML";
var bananaMatch = "90%";

var strawberryPicURL =
  "http://www.sidemcicek.com/wp-content/uploads/2017/09/interesting-internship-resume-sample-for-computer-science-with-puter-science-resume-examples-of-internship-resume-sample-for-computer-science.png";
var strawberryInfo = "Madhura Deshpante";
var strawberrySkills = "HTML, CSS, React";
var strawberryMatch = "93%";

var userName;
var userResume;
var userSkills;
var userMatch;

var lastUser = {};

var fruitInfo = {
  //Array of fruit info
  strawberriesDesc: strawberryInfo,
  strawberriesPic: strawberryPicURL,
  bananasDesc: bananaInfo,
  bananasPic: bananaPicURL,
  applesDesc: appleInfo,
  applesPic: applePicURL,
  startDesc: appleInfo,
  startPic: applePicURL
};

/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

("use strict");
const Alexa = require("alexa-sdk");
var http = require("http");

function httpGet(query, callback) {
  var options = {
    host: "http://chulahn.github.io",
    path: "/" + encodeURIComponent(query),
    method: "GET"
  };

  var req = http.request(options, res => {
    res.setEncoding("utf8");
    var responseString = "";

    //accept incoming data asynchronously
    res.on("data", chunk => {
      responseString = responseString + chunk;
    });

    //return the data when streaming is complete
    res.on("end", () => {
      console.log(responseString);
      callback(responseString);
    });
  });
  req.end();
}

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
  LaunchRequest: function() {
    this.emit(":ask", "Welcome to Ada");
  },
  AnswerIntent: function() {
    if (
      this.event.request.intent.slots.fruitName.value &&
      this.event.request.intent.slots.fruitName.value == "start"
    ) {
      //Only a few types of fruit are supported in v1 ;)
      var randomNum = Math.floor(Math.random() * Math.floor(3));

      switch (randomNum) {
        case 0:
          userName = appleInfo;
          userResume = applePicURL;
          userSkills = appleSkills;
          userMatch = appleMatch;
          break;
        case 1:
          userName = bananaInfo;
          userResume = bananaPicURL;
          userSkills = bananaSkills;
          userMatch = bananaMatch;
          break;
        case 2:
          userName = strawberryInfo;
          userResume = strawberryPicURL;
          userSkills = strawberrySkills;
          userMatch = strawberryMatch;
          break;
      }

      var fruit = this.event.request.intent.slots.fruitName.value;
      var person = this.event.request.intent.slots.fruitName.value;
      person = "Chris";
      var randomPicture = "";

      if (supportsDisplay.call(this) || isSimulator.call(this)) {
        //If on echo show or any device with a screen

        const theNumber = this.event.request.intent.slots.fruitName.value;
        var query = parseInt(theNumber);
        query = "img/mountain.jpg";

        lastUser.name = userName;
        lastUser.resume = userResume;

        exampleBodyTemplate.call(
          this,
          null,
          "testToken",
          "BodyTemplate2",
          "Hello Google recruiter",
          "PlainText",
          "Here is the new resume for candidate: " +
            userName +
            "  Filetype: [.pdf]            Skills: [" +
            userSkills +
            "]   \\n                 Match: [" +
            userMatch +
            "].  Fee: $5.00",
          "Resume",
          userResume,
          "VISIBLE",
          "<speak>" +
            "Here is the new resume for candidate " +
            userName +
            "</speak>",
          null,
          false
        );
      } //If on a normal echo, dot, whatever
      else
        this.emit(":ask", "Here is the new resume for candidate " + userName);
    } else this.emit(":ask", "Invalid command");
  },
  AskSkillsIntent: function() {
    this.emit(":ask", "Ask Skills Intent");
  },
  AskSkillNameIntent: function() {
    var randomNum = Math.floor(Math.random() * Math.floor(3));

    switch (randomNum) {
      case 0:
        userName = appleInfo;
        userResume = applePicURL;
        userSkills = appleSkills;
        break;
      case 1:
        userName = bananaInfo;
        userResume = bananaPicURL;
        userSkills = bananaSkills;
        break;
      case 2:
        userName = strawberryInfo;
        userResume = strawberryPicURL;
        userSkills = strawberrySkills;
        break;
    }

    var fruit = this.event.request.intent.slots.fruitName.value;
    var person = this.event.request.intent.slots.fruitName.value;
    person = "Chris";
    var randomPicture = "";

    if (supportsDisplay.call(this) || isSimulator.call(this)) {
      //If on echo show or any device with a screen

      const theNumber = this.event.request.intent.slots.fruitName.value;
      var query = parseInt(theNumber);
      query = "img/mountain.jpg";

      lastUser.name = userName;
      lastUser.resume = userResume;

      exampleBodyTemplate.call(
        this,
        null,
        "testToken",
        "BodyTemplate2",
        "Hello Google recruiter",
        "PlainText",
        "Here is the new resume for candidate " +
          userName +
          "       Skills: " +
          userSkills,
        "Resume",
        userResume,
        "VISIBLE",
        "<speak>" +
          "Here is the new resume for candidate " +
          userName +
          "</speak>",
        null,
        false
      );
    } //If on a normal echo, dot, whatever
    else this.emit(":ask", "Here is the new resume for candidate " + userName);
  },
  "AMAZON.StopIntent": function() {
    this.emit(":tell", "Thanks for using Ada. Goodbye!");
  }
};

exports.handler = function(event, context, callback) {
  const alexa = Alexa.handler(event, context, callback);
  alexa.APP_ID = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};

//Helper Functions////////////////////

function supportsDisplay() {
  var hasDisplay =
    this.event.context &&
    this.event.context.System &&
    this.event.context.System.device &&
    this.event.context.System.device.supportedInterfaces &&
    this.event.context.System.device.supportedInterfaces.Display;

  return hasDisplay;
}

function isSimulator() {
  var isSimulator = !this.event.context; //simulator doesn't send context
  return isSimulator;
}

function exampleBodyTemplate(
  pSessionAttributes,
  pToken,
  pBodyTemplate,
  pTitle,
  pPrimaryTextType,
  pPrimaryTextContent,
  pImageDesc,
  pImageURL,
  pBackButton,
  pOutputSpeech,
  pOutputReprompt,
  pShouldEndSession
) {
  var response = {
    version: "1.0",
    response: {
      directives: [
        {
          type: "Hint",
          hint: {
            type: "PlainText",
            text: "Welcome to Ada"
          }
        },
        {
          type: "Display.RenderTemplate",
          token: pToken,
          template: {
            type: pBodyTemplate,
            title: pTitle,
            textContent: {
              primaryText: {
                type: pPrimaryTextType,
                text: pPrimaryTextContent
              }
            },
            image: {
              contentDescription: pImageDesc,
              sources: [
                {
                  url: pImageURL
                }
              ]
            },
            backButton: pBackButton
          }
        }
      ],
      outputSpeech: {
        type: "SSML",
        ssml: pOutputSpeech
      },
      reprompt: {
        outputSpeech: {
          type: "SSML",
          ssml: pOutputReprompt
        }
      },
      shouldEndSession: pShouldEndSession
    },
    sessionAttributes: pSessionAttributes
  };
  this.context.succeed(response);
}
