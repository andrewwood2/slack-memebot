async function generateResponse({
  keyword,
  meme,
  topText,
  bottomText,
  username
}) {
  if (keyword === "templates") {
    const fields = Object.keys(templates).map(f => {
      const part = templates[f].split("/").length - 1;
      return { title: f, value: templates[f].split("/")[part], short: true };
    });
    return {
      attachments: [
        {
          fields
        }
      ]
    };
  } else if (keyword === "help") {
    return {
      text:
        "Pick a template by `/meme templates`. Then `/meme [template shortcut] ; top text; bottom text` "
    };
  }

  const image_url = Object.keys(custom).includes(meme)
    ? `https://memegen.link/custom/${topText}/${bottomText}.jpg?alt=${
        custom[meme]
      }`
    : `https://memegen.link/${meme}/${topText}/${bottomText}.jpg`;
  return {
    response_type: "in_channel",
    attachments: [
      {
        footer: username,
        text: "", //doesn't display the image unless there's another field
        image_url
      }
    ]
  };
}

const custom = {
  pikachu:
    "https://i.kym-cdn.com/entries/icons/mobile/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.jpg"
};

const templates = {
  "Surprised pikacho": "custom/pikachu",
  "10 Guy": "https://memegen.link/api/templates/tenguy",
  "Afraid to Ask Andy": "https://memegen.link/api/templates/afraid",
  "Almost Politically Correct Redneck":
    "https://memegen.link/api/templates/apcr",
  "An Older Code Sir, But It Checks Out":
    "https://memegen.link/api/templates/older",
  "Ancient Aliens Guy": "https://memegen.link/api/templates/aag",
  "And Then I Said": "https://memegen.link/api/templates/atis",
  "At Least You Tried": "https://memegen.link/api/templates/tried",
  "Baby Insanity Wolf": "https://memegen.link/api/templates/biw",
  "Baby, You've Got a Stew Going": "https://memegen.link/api/templates/stew",
  "Bad Luck Brian": "https://memegen.link/api/templates/blb",
  "But That's None of My Business": "https://memegen.link/api/templates/kermit",
  "Butthurt Dweller": "https://memegen.link/api/templates/bd",
  "Captain Hindsight": "https://memegen.link/api/templates/ch",
  "Comic Book Guy": "https://memegen.link/api/templates/cbg",
  "Condescending Wonka": "https://memegen.link/api/templates/wonka",
  "Confession Bear": "https://memegen.link/api/templates/cb",
  "Confused Gandalf": "https://memegen.link/api/templates/gandalf",
  "Conspiracy Keanu": "https://memegen.link/api/templates/keanu",
  "Crying on Floor": "https://memegen.link/api/templates/cryingfloor",
  "Dating Site Murderer": "https://memegen.link/api/templates/dsm",
  "Disaster Girl": "https://memegen.link/api/templates/disastergirl",
  "Do It Live!": "https://memegen.link/api/templates/live",
  "Do You Want Ants?": "https://memegen.link/api/templates/ants",
  Doge: "https://memegen.link/api/templates/doge",
  "Donald Trump": "https://memegen.link/api/templates/trump",
  Drakeposting: "https://memegen.link/api/templates/drake",
  Ermahgerd: "https://memegen.link/api/templates/ermg",
  Facepalm: "https://memegen.link/api/templates/facepalm",
  "First Try!": "https://memegen.link/api/templates/firsttry",
  "First World Problems": "https://memegen.link/api/templates/fwp",
  "Forever Alone": "https://memegen.link/api/templates/fa",
  "Foul Bachelor Frog": "https://memegen.link/api/templates/fbf",
  "Fuck Me, Right?": "https://memegen.link/api/templates/fmr",
  "Futurama Fry": "https://memegen.link/api/templates/fry",
  "Good Guy Greg": "https://memegen.link/api/templates/ggg",
  "Grumpy Cat": "https://memegen.link/api/templates/grumpycat",
  "Hide the Pain Harold": "https://memegen.link/api/templates/harold",
  "Hipster Barista": "https://memegen.link/api/templates/hipster",
  "I Can Has Cheezburger?": "https://memegen.link/api/templates/icanhas",
  "I Feel Like I'm Taking Crazy Pills":
    "https://memegen.link/api/templates/crazypills",
  "I Guarantee It": "https://memegen.link/api/templates/mw",
  "I Have No Idea What I'm Doing": "https://memegen.link/api/templates/noidea",
  "I Immediately Regret This Decision!":
    "https://memegen.link/api/templates/regret",
  "I Should Buy a Boat Cat": "https://memegen.link/api/templates/boat",
  "I Should Not Have Said That": "https://memegen.link/api/templates/hagrid",
  "I Would Be So Happy": "https://memegen.link/api/templates/sohappy",
  "I am the Captain Now": "https://memegen.link/api/templates/captain",
  "I'm Going to Build My Own Theme Park":
    "https://memegen.link/api/templates/bender",
  "Inigo Montoya": "https://memegen.link/api/templates/inigo",
  "Insanity Wolf": "https://memegen.link/api/templates/iw",
  "It's A Trap!": "https://memegen.link/api/templates/ackbar",
  "It's Happening": "https://memegen.link/api/templates/happening",
  "It's Simple, Kill the Batman": "https://memegen.link/api/templates/joker",
  "Jony Ive Redesigns Things": "https://memegen.link/api/templates/ive",
  "Joseph Ducreux / Archaic Rap": "https://memegen.link/api/templates/jd",
  "Laughing Lizard": "https://memegen.link/api/templates/ll",
  "Laundry Room Viking": "https://memegen.link/api/templates/lrv",
  "Leo Strutting": "https://memegen.link/api/templates/leo",
  "Life... Finds a Way": "https://memegen.link/api/templates/away",
  "Matrix Morpheus": "https://memegen.link/api/templates/morpheus",
  "Member Berries": "https://memegen.link/api/templates/mb",
  "Milk Was a Bad Choice": "https://memegen.link/api/templates/badchoice",
  "Minor Mistake Marvin": "https://memegen.link/api/templates/mmm",
  "Mocking Spongebob": "https://memegen.link/api/templates/spongebob",
  "No Soup for You / Soup Nazi": "https://memegen.link/api/templates/soup-nazi",
  "Nothing To Do Here": "https://memegen.link/api/templates/jetpack",
  "Oh, I'm Sorry, I Thought This Was America":
    "https://memegen.link/api/templates/imsorry",
  "Oh, Is That What We're Going to Do Today?":
    "https://memegen.link/api/templates/red",
  "One Does Not Simply Walk into Mordor":
    "https://memegen.link/api/templates/mordor",
  "Oprah You Get a Car": "https://memegen.link/api/templates/oprah",
  "Overly Attached Girlfriend": "https://memegen.link/api/templates/oag",
  "Pepperidge Farm Remembers": "https://memegen.link/api/templates/remembers",
  "Persian Cat Room Guardian": "https://memegen.link/api/templates/persian",
  Philosoraptor: "https://memegen.link/api/templates/philosoraptor",
  "Probably Not a Good Idea": "https://memegen.link/api/templates/jw",
  "Push it somewhere else Patrick":
    "https://memegen.link/api/templates/patrick",
  "Roll Safe": "https://memegen.link/api/templates/rollsafe",
  "Sad Barack Obama": "https://memegen.link/api/templates/sad-obama",
  "Sad Bill Clinton": "https://memegen.link/api/templates/sad-clinton",
  "Sad Frog / Feels Bad Man": "https://memegen.link/api/templates/sadfrog",
  "Sad George Bush": "https://memegen.link/api/templates/sad-bush",
  "Sad Joe Biden": "https://memegen.link/api/templates/sad-biden",
  "Sad John Boehner": "https://memegen.link/api/templates/sad-boehner",
  "Salt Bae": "https://memegen.link/api/templates/saltbae",
  "Sarcastic Bear": "https://memegen.link/api/templates/sarcasticbear",
  "Schrute Facts": "https://memegen.link/api/templates/dwight",
  "Scumbag Brain": "https://memegen.link/api/templates/sb",
  "Scumbag Steve": "https://memegen.link/api/templates/ss",
  "Seal of Approval": "https://memegen.link/api/templates/soa",
  "Sealed Fate": "https://memegen.link/api/templates/sf",
  "See? Nobody Cares": "https://memegen.link/api/templates/dodgson",
  "Shut Up and Take My Money!": "https://memegen.link/api/templates/money",
  "Skeptical Snake": "https://memegen.link/api/templates/snek",
  "Skeptical Third World Kid": "https://memegen.link/api/templates/sk",
  "So Hot Right Now": "https://memegen.link/api/templates/sohot",
  "So I Got That Goin' For Me, Which is Nice":
    "https://memegen.link/api/templates/nice",
  "Socially Awesome Awkward Penguin":
    "https://memegen.link/api/templates/awesome-awkward",
  "Socially Awesome Penguin": "https://memegen.link/api/templates/awesome",
  "Socially Awkward Awesome Penguin":
    "https://memegen.link/api/templates/awkward-awesome",
  "Socially Awkward Penguin": "https://memegen.link/api/templates/awkward",
  "Stop It, Get Some Help": "https://memegen.link/api/templates/stop-it",
  "Stop Trying to Make Fetch Happen":
    "https://memegen.link/api/templates/fetch",
  "Success Kid": "https://memegen.link/api/templates/success",
  "Sudden Clarity Clarence": "https://memegen.link/api/templates/scc",
  "Super Cool Ski Instructor": "https://memegen.link/api/templates/ski",
  "Sweet Brown / Ain't Nobody Got Time For That":
    "https://memegen.link/api/templates/aint-got-time",
  "That Would Be Great": "https://memegen.link/api/templates/officespace",
  "The Most Interesting Man in the World":
    "https://memegen.link/api/templates/interesting",
  "The Rent Is Too Damn High": "https://memegen.link/api/templates/toohigh",
  "This is Bull, Shark": "https://memegen.link/api/templates/bs",
  "This is Fine": "https://memegen.link/api/templates/fine",
  "This is Sparta!": "https://memegen.link/api/templates/sparta",
  "Ugandan Knuckles": "https://memegen.link/api/templates/ugandanknuck",
  "Unpopular opinion puffin": "https://memegen.link/api/templates/puffin",
  "What Year Is It?": "https://memegen.link/api/templates/whatyear",
  "What is this, a Center for Ants?!":
    "https://memegen.link/api/templates/center",
  "Why Not Both?": "https://memegen.link/api/templates/both",
  "Winter is coming": "https://memegen.link/api/templates/winter",
  "X all the Y": "https://memegen.link/api/templates/xy",
  "X, X Everywhere": "https://memegen.link/api/templates/buzz",
  "Xzibit Yo Dawg": "https://memegen.link/api/templates/yodawg",
  "Y U NO Guy": "https://memegen.link/api/templates/yuno",
  "Y'all Got Any More of Them": "https://memegen.link/api/templates/yallgot",
  "You Know What Really Grinds My Gears?":
    "https://memegen.link/api/templates/gears",
  "You Should Feel Bad": "https://memegen.link/api/templates/bad",
  "You Sit on a Throne of Lies": "https://memegen.link/api/templates/elf",
  "You Were the Chosen One!": "https://memegen.link/api/templates/chosen"
};

module.exports = generateResponse;
