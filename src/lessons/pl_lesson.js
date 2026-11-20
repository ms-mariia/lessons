const IMG = f => "assets/img/" + f;
const H = v => ` <span class=hint>(${v})</span>`;
const LESSON = {
  id: "pack-light-egu69-72",
  kicker: "countable · uncountable · a / an / some / the",
  titleHTML: 'Pack <em>light</em>',
  title: "Pack light",
  subtitle: "A bag or some luggage? A trip or travel? A, an, some, the — or nothing at all?",
  stickers: ["luggage", "plane"],
  confetti: ["plane", "luggage", "star", "sparkles", "check"],

  sections: [

    /* ================= 1 · WARM-UP ================= */
    { type: "part", n: "01", icon: "plane", title: "Warm-up", text: "Before the trip." },

    {
      type: "rule", label: "warm-up · look and talk", sticker: "plane",
      title: "Check-in time",
      html: `
        <div class="photos">
          <figure class="photo"><img loading="lazy" alt="An empty airport check-in hall" src="${IMG("airport.jpg")}"><figcaption><b>A</b><small>Photo: Jacek Rużyczka · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="Old suitcases on a station platform" src="${IMG("luggage.jpg")}"><figcaption><b>B</b><small>Photo: Acabashi · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
        </div>
        <ol class="qs">
          <li>A: Have you ever been to <b>an airport</b>? What do people do at <b>the check-in desk</b>?</li>
          <li>B: Look at <b>the suitcases</b>. How much <b>luggage</b> do you usually take on <b>a trip</b>?</li>
          <li>Do you pack light, or do you take everything “just in case”?</li>
          <li>Who gives you the best <b>advice</b> before <b>a trip</b>?</li>
        </ol>`
    },

    /* ================= 2 · COUNTABLE / UNCOUNTABLE ================= */
    { type: "part", n: "02", icon: "luggage", title: "Count it?", text: "English Grammar in Use · Units 69–70" },

    {
      type: "rule", label: "grammar · countable and uncountable", sticker: "luggage",
      title: "One bag, two bags — but luggage",
      html: `
        <div class="vs">
          <div><b class="t">countable</b>a bag → two bags<br>a suitcase → some suitcases<br><i>Do you have <b>a</b> bag?</i> <i>I like <b>bags</b>.</i> (in general)<br>many / a few: <i>How <b>many</b> bags?</i></div>
          <div><b class="t">uncountable</b>luggage (no a, no -s)<br>some luggage · a lot of luggage<br><i>Do you have any <b>luggage</b>?</i> <s>a luggage</s> <s>luggages</s><br>much / a little: <i>How <b>much</b> luggage?</i></div>
        </div>
        <div class="lines">
          <div class="ln g"><b class="dot">1</b><p>A singular countable noun never stands alone: <i>She never wears <b>a</b> hat.</i> <s>wears hat</s> · <i>There’s been <b>an</b> accident.</i></p></div>
          <div class="ln g"><b class="dot">2</b><p>Usually <span class="tag-u">uncountable</span>: <b>luggage, baggage, advice, information, news, weather, traffic, furniture, accommodation, scenery, travel, work, bread, luck, progress, damage, permission</b>. <i>The news <b>is</b> good.</i> <s>The news are</s></p></div>
          <div class="ln g"><b class="dot">3</b><p>Same meaning, different grammar: <span class="tag-c">a</span> <i>a trip, a job, a view, a suggestion, a bag</i> ↔ <span class="tag-u">no a</span> <i>travel, work, scenery, advice, luggage</i>.</p></div>
        </div>
        <div class="note">⚠️ Some nouns change meaning: <i><b>a</b> room</i> (in a house) / <i>no <b>room</b></i> (= space) · <i><b>a</b> hair</i> in my soup / long <b>hair</b> · <i><b>a</b> great time</i> / I don’t have <b>time</b> · <i>two <b>coffees</b></i> (= cups) / I don’t drink <b>coffee</b>.</div>`
    },

    {
      type: "gapfill", label: "a / an where necessary", sticker: "label",
      title: "Pack your sentences",
      instructions: "Write the word in brackets. Add <b>a</b> or <b>an</b> only if it’s necessary.",
      items: [
        { text: "It’s raining. Don’t forget [[an umbrella]]!" + H("umbrella"), why: "singular countable → an (vowel sound)." },
        { text: "I can’t open my suitcase. I don’t have [[a key]]." + H("key"), why: "one key → a key." },
        { text: "We don’t have much [[luggage]] — just two small bags." + H("luggage"), why: "luggage is uncountable → no a." },
        { text: "Can I ask you [[a question]]?" + H("question"), why: "countable → a question." },
        { text: "The plane can’t take off. There’s [[ice]] on the wings." + H("ice"), why: "ice is uncountable." },
        { text: "Wait [[a moment]], please. I’m printing my boarding pass." + H("moment"), why: "wait a moment." },
        { text: "Turn off the TV. I can’t sleep with [[music]] in the background." + H("music"), why: "music is uncountable." },
        { text: "The road to the airport is closed. There’s been [[an accident]]." + H("accident"), why: "an + vowel sound." },
        { text: "I had [[an interview]] for a summer job yesterday." + H("interview"), why: "an interview." },
        { text: "Hotels in Lviv are full. We have to make [[a decision]] soon." + H("decision"), why: "make a decision." }
      ]
    },

    {
      type: "mcq", label: "uncountable traps · choose", sticker: "search",
      title: "Spot the trap",
      instructions: "Choose the correct option.",
      items: [
        { q: "How many ___ are you taking?", options: ["luggages", "suitcases", "baggage"], answer: 1 },
        { q: "Can you give me some ___ about Kyiv?", options: ["informations", "an information", "information"], answer: 2 },
        { q: "The news ___ really good!", options: ["is", "are", "were"], answer: 0 },
        { q: "We had a really long ___ from Kharkiv to Uzhhorod.", options: ["travel", "trip", "travels"], answer: 1 },
        { q: "Let’s go to the beach. It’s ___ today!", options: ["nice weather", "a nice weather", "the nice weather"], answer: 0 },
        { q: "My mom gave me ___ : “Pack light!”", options: ["an advice", "a good advice", "some good advice"], answer: 2 },
        { q: "We missed our bus. There was so much ___.", options: ["traffic", "traffics", "a traffic"], answer: 0 },
        { q: "Enjoy your vacation! Have ___ !", options: ["great time", "a great time", "the great time"], answer: 1 },
        { q: "The apartment is empty. There isn’t any ___ yet.", options: ["furnitures", "furniture", "a furniture"], answer: 1 },
        { q: "Your hair ___ so long now!", options: ["are", "is", "have"], answer: 1 }
      ]
    },

    {
      type: "sort", label: "a or no a?", sticker: "puzzle",
      title: "Two suitcases",
      instructions: "Can you say <b>a / an</b> with the word, or not?",
      categories: [
        { name: "countable → a / an", words: ["suitcase", "trip", "job", "view", "suggestion", "hotel", "ticket"] },
        { name: "uncountable → no a / an", words: ["luggage", "travel", "work", "scenery", "advice", "accommodation", "weather"] }
      ]
    },

    /* ================= 3 · A / AN / SOME ================= */
    { type: "part", n: "03", icon: "label", title: "a, an or some?", text: "English Grammar in Use · Unit 71" },

    {
      type: "rule", label: "grammar · a / an and some", sticker: "label",
      title: "What kind of thing? What job?",
      html: `
        <div class="lines">
          <div class="ln g"><b class="dot">1</b><p><b>a / an</b> = what kind of thing or person: <i>That’s <b>a</b> nice hotel.</i> · <i>My dad is <b>a</b> pilot.</i> <s>is pilot</s> · <i>She has <b>a</b> long nose.</i> But: <i>She has <b>blue eyes</b>.</i> <s>the blue eyes</s></p></div>
          <div class="ln g"><b class="dot">2</b><p>Plural — no a, and usually no some: <i>Those are nice <b>chairs</b>.</i> · <i>I love <b>bananas</b>.</i> (in general) <s>some bananas</s></p></div>
          <div class="ln g"><b class="dot">3</b><p><b>some</b> = a few / not all: <i>I met <b>some</b> tourists at the station.</i> · <i><b>Some</b> people never pack light.</i></p></div>
        </div>`
    },

    {
      type: "mcq", label: "a / an / some / nothing", sticker: "label",
      title: "Fill the tag",
      instructions: "Choose what goes in the gap. <b>—</b> means no word.",
      items: [
        { q: "My aunt is ___ flight attendant.", options: ["—", "a", "some"], answer: 1 },
        { q: "My cousins are both ___ pilots.", options: ["—", "some", "a"], answer: 0 },
        { q: "I don’t feel well. I have ___ sore throat.", options: ["some", "—", "a"], answer: 2 },
        { q: "What ___ beautiful view!", options: ["a", "—", "some"], answer: 0 },
        { q: "We met ___ students on the train. They were from Poland.", options: ["—", "some", "a"], answer: 1 },
        { q: "Most of the people on this flight are ___ tourists.", options: ["some", "a", "—"], answer: 2 },
        { q: "___ birds, for example the penguin, can’t fly.", options: ["Some", "A", "—"], answer: 0 },
        { q: "I love staying in ___ small hotels.", options: ["a", "—", "some"], answer: 1 },
        { q: "You need ___ visa to visit some countries.", options: ["—", "some", "a"], answer: 2 },
        { q: "He has ___ dark hair and ___ green eyes.", options: ["— / —", "a / the", "the / some"], answer: 0 }
      ]
    },

    /* ================= 4 · A / AN or THE ================= */
    { type: "part", n: "04", icon: "map", title: "a or the?", text: "English Grammar in Use · Unit 72" },

    {
      type: "rule", label: "grammar · a / an and the", sticker: "map",
      title: "First time — or we know which one",
      html: `
        <div class="board">We stayed at <b>a</b> small hotel. <b>The</b> hotel had <b>a</b> pool, but <b>the</b> pool was closed.</div>
        <div class="lines">
          <div class="ln g"><b class="dot">a</b><p>first time / one of many / any one: <i>Is there <b>a</b> bank near here?</i> · <i>We stayed at <b>a</b> cheap hotel.</i> (a type of hotel)</p></div>
          <div class="ln g"><b class="dot">the</b><p>we know which one: <i><b>The</b> hotel where we stayed was cheap.</i> · in a room: <b>the</b> light, <b>the</b> door, <b>the</b> floor · in a town: <b>the</b> station, <b>the</b> airport · <b>the</b> best, <b>the</b> nearest</p></div>
          <div class="ln g"><b class="dot">!</b><p>go to <b>the</b> bank / <b>the</b> post office / <b>the</b> doctor / <b>the</b> dentist — but <i>My sister is <b>a</b> dentist.</i> · how often: once <b>a</b> week, three times <b>a</b> day, $2 <b>a</b> pound</p></div>
        </div>`
    },

    {
      type: "gapfill", label: "story · a, an or the", sticker: "map",
      title: "The wrong suitcase",
      instructions: "Write <b>a</b>, <b>an</b> or <b>the</b>.",
      items: [
        { text: "Last summer my family went to Odesa on [[a]] night train.", why: "first time we mention it." },
        { text: "When we arrived at [[the]] station, I took my suitcase and we got a taxi.", why: "the station in that town." },
        { text: "At the hotel, I opened [[the]] suitcase — and it wasn’t mine!", why: "we know which suitcase." },
        { text: "Inside there was [[a]] red dress, a book and a camera.", why: "first time." },
        { text: "[[The]] camera looked very expensive.", why: "the camera from the suitcase." },
        { text: "We called the station office, and [[a]] man said, “Don’t worry.”", why: "one man, not a specific one." },
        { text: "Two hours later, [[an]] old woman knocked on our door.", why: "an + vowel sound (old)." },
        { text: "She had my suitcase! It was [[the]] best moment of the day.", why: "the + superlative." },
        { text: "Now I put [[a]] big yellow tag on my luggage.", why: "a type of tag." },
        { text: "And I check it twice [[a]] day when I travel!", why: "twice a day." }
      ]
    },

    {
      type: "correct", label: "articles · fix it", sticker: "tools",
      title: "Find and fix the mistake",
      instructions: "Each sentence has <b>one</b> mistake. Write the correct sentence.",
      items: [
        { wrong: "My sister is dentist.", answers: ["My sister is a dentist."] },
        { wrong: "I need an advice about my trip.", answers: ["I need some advice about my trip.", "I need advice about my trip.", "I need a piece of advice about my trip."] },
        { wrong: "The news are really bad today.", answers: ["The news is really bad today."] },
        { wrong: "We had a very good travel.", answers: ["We had a very good trip.", "We had a very good journey."] },
        { wrong: "Can you turn off a light, please?", answers: ["Can you turn off the light, please?", "Can you turn the light off, please?"] },
        { wrong: "I go to the gym three times the week.", answers: ["I go to the gym three times a week."] },
        { wrong: "She has the beautiful green eyes.", answers: ["She has beautiful green eyes."] },
        { wrong: "How many luggages do you have?", answers: ["How much luggage do you have?", "How many bags do you have?", "How many suitcases do you have?"] }
      ]
    },

    /* ================= 5 · READING ================= */
    { type: "part", n: "05", icon: "openbook", title: "Reading", text: "A travel blog." },

    {
      type: "tf2", label: "reading · a travel blog", sticker: "openbook",
      title: "Ten days, one backpack",
      instructions: "Read the blog post. True or false? If it’s false, choose the correct sentence.",
      text: `<div class="blog"><h4>Ten days, one backpack</h4>
          <p>Last year I went on a ten-day trip around Poland with my best friend. My mom gave me some advice before we left: “Pack light!” I didn’t listen. I took a huge suitcase, and it was a disaster. The trains were full, and there was no room for it anywhere.</p>
          <p>This summer I tried again — with just one backpack. I took three T-shirts, a sweater, a raincoat and some snacks. That was all the luggage I needed! The weather was terrible on the first day, so the raincoat was the best thing in my bag.</p>
          <p>We stayed in a hostel in Kraków. The hostel was cheap, and the scenery around the city was amazing. My advice? Take half the things you want to take — and twice the money!</p></div>`,
      items: [
        { q: "Last year she went on a trip with her best friend.", answer: true, fix: [], fixAnswer: 0 },
        { q: "She listened to her mom’s advice last year.", answer: false, fix: ["She took a huge suitcase.", "She took one small bag.", "She stayed at home."], fixAnswer: 0 },
        { q: "There was a lot of room for her suitcase on the trains.", answer: false, fix: ["The trains were empty.", "There was no room for it anywhere.", "She left it at the station."], fixAnswer: 1 },
        { q: "This summer she took only one backpack.", answer: true, fix: [], fixAnswer: 0 },
        { q: "The weather was great on the first day.", answer: false, fix: ["It was hot and sunny.", "It snowed all day.", "The weather was terrible."], fixAnswer: 2 },
        { q: "The best thing in her bag was the raincoat.", answer: true, fix: [], fixAnswer: 0 },
        { q: "The hostel in Kraków was expensive.", answer: false, fix: ["The hostel was cheap.", "They stayed in a hotel.", "The hostel was far from the city."], fixAnswer: 0 },
        { q: "Her advice is to take more money than things.", answer: true, fix: [], fixAnswer: 0 }
      ]
    },

    /* ================= 6 · TALK ================= */
    { type: "part", n: "06", icon: "speech", title: "Over to you", text: "Spin it — answer, then ask me the same question." },

    {
      type: "wheel", label: "speaking · travel talk", sticker: "speech",
      title: "Spin your next trip",
      start: "Spin the wheel. Answer in 3–4 sentences. Watch your a / an / the!",
      items: [
        { icon: "🧳", short: "packing", q: "What do you always take on <b>a trip</b>? How much <b>luggage</b> do you usually have?" },
        { icon: "🚆", short: "train or plane", q: "Do you prefer traveling by train, bus or plane? Why?" },
        { icon: "🏨", short: "stay", q: "Would you choose <b>a hotel</b>, <b>a hostel</b> or <b>an apartment</b>? What’s important for you?" },
        { icon: "🗺️", short: "dream trip", q: "Describe <b>a</b> place you want to visit. What can you see and do there?" },
        { icon: "💡", short: "advice", q: "What’s <b>the best advice</b> you can give to someone who travels for the first time?" },
        { icon: "🌧️", short: "weather", q: "Have you ever had <b>terrible weather</b> on <b>a trip</b>? What happened?" },
        { icon: "📰", short: "news", q: "Where do you get <b>news</b> and <b>information</b> when you travel?" },
        { icon: "🏞️", short: "scenery", q: "Mountains or the sea? Where is <b>the scenery</b> more beautiful in Ukraine?" }
      ]
    },

    /* ================= 7 · SPEED ================= */
    { type: "part", n: "07", icon: "stopwatch", title: "Speed", text: "Make it automatic." },

    {
      type: "drill", label: "automaticity · speed drill", sticker: "stopwatch",
      title: "Twelve quick answers, twice each",
      instructions: "Write the answer and press <b>Enter</b>. Each one must be right <b>twice</b>.",
      items: [
        { cue: "a or an?", prompt: "___ umbrella", answers: ["an umbrella", "an"] },
        { cue: "a or an?", prompt: "___ hour", answers: ["an hour", "an"] },
        { cue: "a or an?", prompt: "___ university", answers: ["a university", "a"] },
        { cue: "countable word", prompt: "luggage → one ___", answers: ["bag", "suitcase", "one bag", "one suitcase"] },
        { cue: "countable word", prompt: "travel → a ___", answers: ["trip", "journey", "a trip", "a journey"] },
        { cue: "countable word", prompt: "work → a ___", answers: ["job", "a job"] },
        { cue: "countable word", prompt: "scenery → a ___", answers: ["view", "a view"] },
        { cue: "countable word", prompt: "advice → a ___", answers: ["suggestion", "tip", "piece of advice", "a suggestion", "a tip", "a piece of advice"] },
        { cue: "is or are?", prompt: "The news ___ good.", answers: ["is", "the news is good"] },
        { cue: "much or many?", prompt: "How ___ information?", answers: ["much", "how much information"] },
        { cue: "how often?", prompt: "twice ___ week", answers: ["a", "twice a week"] },
        { cue: "a or the?", prompt: "I’m going to ___ dentist.", answers: ["the", "the dentist"] }
      ]
    },

    /* ================= 8 · WRITING ================= */
    { type: "part", n: "08", icon: "pencil", title: "Writing", text: "Tips for a friend." },

    {
      type: "write", label: "writing · a message to a friend", sticker: "pencil",
      title: "Pack light!",
      instructions: "A friend from another country is coming to visit your city. Write a message (<b>6–8 sentences</b>) with tips: luggage, weather, accommodation, what to see. Use <b>a / an</b> and <b>the</b>, and at least 3 uncountable nouns from the list.",
      words: ["luggage", "advice", "information", "weather", "traffic", "accommodation", "scenery", "travel", "news", "a trip", "a view", "the station", "the airport"],
      checks: [
        { label: "a / an — 2 times", pattern: "\\b(a|an)\\s+[a-z]", min: 2 },
        { label: "the — 2 times", pattern: "\\bthe\\b", min: 2 },
        { label: "no traps (a luggage, an advice, informations, a travel, the news are…)", pattern: "^(?![\\s\\S]*(\\b(a|an)\\s+(luggage|advice|information|weather|traffic|furniture|scenery|travel|news|accommodation|baggage)\\b|\\b(luggages|advices|informations|furnitures|sceneries|traffics)\\b|\\bnews\\s+are\\b))[\\s\\S]+$" },
        { label: "3+ words from the list (they light up)", words: 3 },
        { label: "at least 6 sentences", sentences: 6 }
      ],
      sample: "Hi Anna! I can’t wait to see you in Kyiv! Here’s some advice: pack light, because you can take only one bag on the bus from the airport. The weather in December is cold, so bring a warm coat and a hat. You don’t need to look for accommodation — you can stay with us. The traffic in the city center is terrible, so we can take the subway. There’s a great view of the river from the hill near our apartment. See you soon!"
    },

    /* ================= 9 · SELF-CHECK ================= */
    { type: "part", n: "09", icon: "star", title: "Self-check", text: "What to look at again." },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
