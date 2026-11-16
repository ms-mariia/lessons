const IMG = f => "assets/img/" + f;
const H = v => ` <span class=hint>(${v})</span>`;
const LESSON = {
  id: "birthday-plans-egu19-23-confusables",
  kicker: "birthday plans · future forms",
  titleHTML: 'Sweet <em>16</em> plans',
  title: "Sweet 16 plans",
  subtitle: "A big birthday is coming. Plans, arrangements, quick decisions — and the tricky words you already know.",
  stickers: ["balloon", "bdcake"],
  confetti: ["balloon", "party", "gift", "sparkles", "confettiball", "star"],

  sections: [

    /* ================= 1 · WARM-UP ================= */
    { type: "part", n: "01", icon: "balloon", title: "This or that?", text: "Sixteen balloons. Pop one — choose fast — say why." },

    {
      type: "balloons", label: "speaking · quick choices", sticker: "balloon",
      title: "Sixteen balloons, sixteen choices",
      instructions: "Pop a balloon, choose, and give <b>one reason</b>: <i>I’d go for… because…</i>",
      banner: "🎈 YOUR PERFECT BIRTHDAY 🎈",
      items: [
        "Cake or ice cream?", "A party at home or at a café?", "A big party or a small one?", "A surprise party — yes or no?",
        "Pizza or sushi?", "Balloons or flowers?", "A present you can wear, use or eat?", "A morning or an evening party?",
        "A dress or jeans?", "Photos on a phone or a real camera?", "Friends or family first?", "16 candles or just one?",
        "Party games — yes or no?", "A movie or a concert?", "Dancing or karaoke?", "Your perfect birthday in one emoji?"
      ]
    },

    {
      type: "rule", label: "speaking · what’s going to happen?", sticker: "sparkles",
      title: "Look and predict",
      html: `
        <div class="photos">
          <figure class="photo"><img loading="lazy" alt="Half a cake with tiny sugar flowers" src="${IMG("halfcake.jpg")}"><figcaption><b>A</b><small>Photo: Anna.Massini · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="A sparkler burning in the dark" src="${IMG("sparkler.jpg")}"><figcaption><b>B</b><small>Photo: High Contrast · CC BY 3.0 DE · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo wide"><img loading="lazy" alt="A green birthday balloon and a gift bag" src="${IMG("balloon.jpg")}"><figcaption><b>C</b><small>Photo: Friedrich Haag · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
        </div>
        <p>We can see it now → it’s <b>going to</b> happen.</p>
        <ol class="qs">
          <li>Photo A: half the cake is gone. What’s <b>going to</b> happen to the other half? Describe the <b>tiny</b> flowers.</li>
          <li>Photo B: what’s <b>going to</b> happen to the sparkler in a minute?</li>
          <li>Photo C: is it a <b>big</b> or a <b>little</b> balloon? How old is the birthday kid <b>going to</b> be? What’s in the bag, do you think?</li>
        </ol>`
    },

    /* ================= 2 · GRAMMAR ================= */
    { type: "part", n: "02", icon: "calendar2", title: "Talking about the future", text: "English Grammar in Use · Units 19, 20, 23" },

    {
      type: "rule", label: "grammar · four futures", sticker: "calendar2",
      title: "Arranged, decided, now, timetable",
      html: `
        <div class="rcard">
          <div><b>arranged</b><span><b>am / is / are + -ing</b> — it’s in the calendar, other people know.<br>Lena <b>is coming</b> at 6. · What <b>are you doing</b> on Saturday? (not <s>What do you do</s>)</span></div>
          <div><b>decided</b><span><b>be going to</b> — I decided before I speak.<br>I<b>’m going to wear</b> my new dress. · We<b>’re going to invite</b> ten people.</span></div>
          <div><b>now</b><span><b>will</b> — I decide at the moment of speaking.<br>“There’s no milk!” “OK, I<b>’ll buy</b> some.” · “Is Max coming?” “I don’t know. I<b>’ll text</b> him.”</span></div>
          <div><b>timetable</b><span><b>present simple</b> — movies, trains, stores, lessons.<br>The movie <b>starts</b> at 8:15. · What time <b>does</b> the store <b>close</b>?</span></div>
        </div>
        <h3>Predictions</h3>
        <div class="colloc">
          <div>We can <b>see</b> it now → <b>going to</b>: Look at those clouds! It<b>’s going to snow</b>.</div>
          <div>It’s my opinion → <b>will</b> (or going to): I think you<b>’ll love</b> the present.</div>
        </div>
        <div class="note">⚠️ <s>What will you do tonight?</s> for a plan you already have → <b>What are you doing tonight?</b> · <s>I go to bed now.</s> → <b>I’m going to bed now.</b> · <s>We’re going have</s> → <b>We’re going <u>to</u> have</b></div>`
    },

    {
      type: "mcq", label: "grammar · which future?", sticker: "question",
      title: "Arranged, decided, now or timetable?",
      instructions: "Read the whole line first. Is it a plan, a decision now, a timetable or something we can see?",
      items: [
        { q: "“What ___ on Saturday evening?” “I’m going to a party.”", options: ["do you do", "are you doing", "will you do"], answer: 1 },
        { q: "The movie ___ at 8:15, so let’s meet at 8.", options: ["starts", "is going to start", "will start"], answer: 0 },
        { q: "“Oh no, there’s no milk for the cake!” “OK, I ___ some.”", options: ["’m going to buy", "’ll buy", "buy"], answer: 1 },
        { q: "“Why are you buying balloons?” “I ___ a party on Saturday.”", options: ["will have", "’m having", "have"], answer: 1 },
        { q: "Look at the sky! It ___ .", options: ["will snow", "is going to snow", "snows"], answer: 1 },
        { q: "I’ve thought about it for a week: I ___ a big party this year.", options: ["’m not going to have", "won’t have", "don’t have"], answer: 0 },
        { q: "What time ___ the bakery close tonight?", options: ["is", "will", "does"], answer: 2 },
        { q: "“Is Max coming?” “I don’t know. I ___ him right now.”", options: ["’ll text", "’m texting", "text"], answer: 0 },
        { q: "We ___ to the mall tomorrow — Mom already said yes.", options: ["go", "will go", "’re going"], answer: 2 },
        { q: "Don’t worry about the present. I think you ___ it!", options: ["’re loving", "’ll love", "love"], answer: 1 }
      ]
    },

    {
      type: "gapfill", label: "grammar · planning the party", sticker: "cupcake",
      title: "Katie and Mom make a plan",
      instructions: "Put the verbs in the right future form. Sometimes two forms are OK.",
      items: [
        { text: "MOM: So, what [[are you doing|are you going to do]]" + H("you / do") + " on your birthday?", why: "a plan → are you doing / going to do (not What do you do)." },
        { text: "KATIE: Lena and Max [[are coming|are going to come]]" + H("come") + " over at 6. We arranged it yesterday.", why: "arranged → present continuous." },
        { text: "MOM: Nice! I [[am going to make|'m going to make]]" + H("make") + " your favorite cake — I decided last week.", why: "decided before → going to." },
        { text: "KATIE: And later we [[are watching|are going to watch]]" + H("watch") + " a movie at the movie theater.", why: "a plan → are watching / are going to watch." },
        { text: "MOM: What time [[does]] the movie [[start]]" + H("start") + "?", why: "a timetable → present simple: does … start." },
        { text: "KATIE: At 8:30. Oh no, we don’t have tickets! — MOM: Don’t worry, I [[will buy|'ll buy]]" + H("buy") + " them online right now.", why: "a decision now → will." },
        { text: "KATIE: Look at those dark clouds — it [[is going to snow|'s going to snow]]" + H("snow") + "!", why: "we can see it now → going to." },
        { text: "MOM: Then I think you [[will need|'ll need|are going to need]]" + H("need") + " your warm coat.", why: "an opinion → will (or going to)." },
        { text: "KATIE: No way! I [[am not going to wear|'m not going to wear]]" + H("not / wear") + " a coat with my new dress. I’ve decided!", why: "decided → not going to." },
        { text: "MOM: OK, OK. I’m sure it [[will be|'ll be|is going to be]]" + H("be") + " a great day.", why: "an opinion / prediction → will (or going to)." }
      ]
    },

    {
      type: "correct", label: "fix it · future", sticker: "detective",
      title: "Find and fix the mistake",
      instructions: "Each line has <b>one</b> mistake. Write the correct sentence.",
      items: [
        { wrong: "What do you do this Saturday evening?", answers: ["What are you doing this Saturday evening?", "What are you going to do this Saturday evening?"] },
        { wrong: "Lena will come to my party — we arranged it yesterday.", answers: ["Lena is coming to my party — we arranged it yesterday.", "Lena's coming to my party — we arranged it yesterday."] },
        { wrong: "Look at those black clouds! It will rain.", answers: ["Look at those black clouds! It's going to rain.", "Look at those black clouds! It is going to rain."] },
        { wrong: "“I forgot the candles!” “Don't worry, I'm going to buy some.”", answers: ["I forgot the candles! Don't worry, I'll buy some.", "“I forgot the candles!” “Don't worry, I'll buy some.”", "I forgot the candles! Don't worry, I will buy some."] },
        { wrong: "I'm tired. I go to bed now.", answers: ["I'm tired. I'm going to bed now.", "I am tired. I am going to bed now.", "I'm tired. I am going to bed now."] },
        { wrong: "What time does Katie's party starts?", answers: ["What time does Katie's party start?"] },
        { wrong: "We're going have a big cake.", answers: ["We're going to have a big cake.", "We are going to have a big cake."] }
      ]
    },

    {
      type: "rephrase", label: "grammar · choose the future", sticker: "crown",
      title: "Say it the right way",
      instructions: "The dark box tells you the situation. Write the full sentence.",
      items: [
        { prompt: "I / wear / my new dress", key: "DECIDED", answers: ["I'm going to wear my new dress.", "I am going to wear my new dress."] },
        { prompt: "we / have dinner / at a restaurant / on Saturday", key: "ARRANGED", answers: ["We're having dinner at a restaurant on Saturday.", "We are having dinner at a restaurant on Saturday."] },
        { prompt: "“The music is too quiet.” — I / turn it up", key: "NOW", answers: ["I'll turn it up.", "I will turn it up."] },
        { prompt: "the movie / start / at 7:30", key: "TIMETABLE", answers: ["The movie starts at 7:30."] },
        { prompt: "Look! the cake / fall!", key: "WE CAN SEE IT", answers: ["The cake's going to fall!", "The cake is going to fall!", "Look! The cake is going to fall!", "Look! The cake's going to fall!"] },
        { prompt: "my grandparents / come / on Sunday", key: "ARRANGED", answers: ["My grandparents are coming on Sunday."] }
      ]
    },

    /* ================= 3 · READING ================= */
    { type: "part", n: "03", icon: "loveletter", title: "A Sweet 16 in Chicago", text: "In the US, 16 is a very big birthday." },

    {
      type: "tf2", label: "reading · a planner", sticker: "calendar2",
      title: "Maya’s Sweet 16 planner",
      instructions: "Read Maya’s planner. True or false? If it’s false, choose the correct sentence.",
      text: `<div class="bdcard planner">
          <p><b>Fri</b> · 4 p.m. Mom and I are picking up the cake from the bakery. 7 p.m. Lena is coming over to help me with the decorations.</p>
          <p><b>Sat — MY SWEET 16!</b> · 10 a.m. Hair appointment. Grandma and Grandpa are coming from Ohio — their bus gets in at 1:45. The party starts at 6 p.m. at the community center. DJ + karaoke 🎤</p>
          <p><b>Sun</b> · Family brunch at 11.</p>
          <p><i>Note to self:</i> Dad doesn’t know yet, but I’m going to ask for driving lessons as my present — in a lot of US states you can start driving at 16! I think it’s going to snow on Saturday, so we’re not going to take photos outside.</p>
        </div>`,
      items: [
        { q: "Maya’s birthday is on Saturday.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Maya is picking up the cake alone.", answer: false, fix: ["She’s picking it up with her mom.", "Lena is picking it up.", "The bakery is bringing it."], fixAnswer: 0 },
        { q: "Lena is helping with the decorations on Friday evening.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Maya’s grandparents are coming by plane.", answer: false, fix: ["They’re coming by train.", "They’re coming by bus.", "They’re driving."], fixAnswer: 1 },
        { q: "Their bus arrives at 2 p.m.", answer: false, fix: ["It gets in at 1:45.", "It gets in at 10 a.m.", "It gets in at 6 p.m."], fixAnswer: 0 },
        { q: "The party starts at 6 p.m.", answer: true, fix: [], fixAnswer: 0 },
        { q: "The party is at Maya’s house.", answer: false, fix: ["It’s at a café.", "It’s at the community center.", "It’s at her grandparents’ house."], fixAnswer: 1 },
        { q: "Maya has already asked for driving lessons.", answer: false, fix: ["She’s going to ask — Dad doesn’t know yet.", "Her mom asked for her.", "She doesn’t want any present."], fixAnswer: 0 },
        { q: "Maya thinks the weather is going to be bad.", answer: true, fix: [], fixAnswer: 0 },
        { q: "The family is having brunch on Sunday.", answer: true, fix: [], fixAnswer: 0 }
      ]
    },

    /* ================= 4 · WORDS ================= */
    { type: "part", n: "04", icon: "gift", title: "Tricky words", text: "Ten presents. Every present is a word you already know." },

    {
      type: "gifts", label: "words · unwrap the presents", sticker: "ribbon",
      title: "Unwrap ten presents",
      instructions: "Tap a present to open it. Choose the right word. Then press <b>Check</b>.",
      items: [
        { q: "When you open the present, what are you going to ___? — “Thank you!”", options: ["say", "tell", "speak"], answer: 0 },
        { q: "I’m going to ___ my friends a secret about the party.", options: ["say", "tell", "talk"], answer: 1 },
        { q: "My aunt from Toronto is calling on Sunday. We’re going to ___ on video for an hour.", options: ["talk", "tell", "say"], answer: 0 },
        { q: "My cousin from Canada doesn’t ___ Ukrainian, so I’m going to translate for her.", options: ["talk", "speak", "tell"], answer: 1 },
        { q: "Mom is going to ___ a huge chocolate cake.", options: ["make", "do", "take"], answer: 0 },
        { q: "Who’s going to ___ the dishes after the party?", options: ["make", "do", "take"], answer: 1 },
        { q: "Don’t forget to ___ a wish before you blow out the candles!", options: ["do", "say", "make"], answer: 2 },
        { q: "It’s going to be a ___ party — everybody is excited!", options: ["great", "large", "tall"], answer: 0 },
        { q: "The cake is very small, so I’m buying ___ candles.", options: ["large", "tiny", "great"], answer: 1 },
        { q: "We’re having the party at ___, not at a café.", options: ["house", "the home", "home"], answer: 2 }
      ]
    },

    {
      type: "dragwords", label: "words · group chat", sticker: "phone2",
      title: "The party group chat",
      instructions: "Put the words in the gaps. <b>Two words are extra.</b>",
      extra: ["say", "large"],
      items: [
        "LENA: Katie!!! Only a week left 🎉 What do you want to [[do]] on your birthday?",
        "KATIE: Mom wants me to stay [[home]], but I want to go out 😅",
        "LENA: Let’s [[make]] a plan! Pizza and a movie?",
        "MAX: Don’t forget to [[tell]] us the address!",
        "KATIE: OK! It’s going to be a [[small]] party — just five people.",
        "MAX: Can my [[little]] brother come too? He’s 10 😂",
        "LENA: Haha, no brothers! We need to [[talk]] about girl stuff 🤫",
        "KATIE: It’s going to be [[great]]! I’ll send the details tonight 🥳"
      ]
    },

    {
      type: "sort", label: "words · make or do?", sticker: "cupcake",
      title: "Party jobs: make or do?",
      instructions: "Who’s going to do what? Put each job in the right box.",
      categories: [
        { name: "make", words: ["a cake", "a wish", "a mess", "a playlist", "new friends"] },
        { name: "do", words: ["the dishes", "the shopping", "your hair", "your best", "a quiz"] }
      ]
    },

    /* ================= 5 · TALK ================= */
    { type: "part", n: "05", icon: "mic", title: "Plan your party", text: "Spin it — I ask, you answer. Then you ask me." },

    {
      type: "wheel", label: "speaking · party planner", sticker: "mic",
      title: "Spin the party planner",
      start: "Spin the wheel. Answer in 3–4 sentences with the right future — then ask me!",
      items: [
        { icon: "🏠", short: "where", q: "Where are you <b>going to</b> celebrate? At <b>home</b> or somewhere else? Why?" },
        { icon: "👯", short: "who", q: "Who are you <b>going to</b> invite? Is it going to be a <b>big</b> party or a <b>small</b> one?" },
        { icon: "👗", short: "outfit", q: "What are you <b>going to</b> wear? Have you already bought it?" },
        { icon: "🍕", short: "food", q: "What food are you <b>going to</b> have? Who’s going to <b>make</b> the cake?" },
        { icon: "🎁", short: "presents", q: "What’s your dream present — and what do you think you’<b>ll</b> really get?" },
        { icon: "📅", short: "arranged", q: "Is anything already arranged? Who <b>are you seeing</b>, where <b>are you going</b>?" },
        { icon: "❄️", short: "plan B", q: "If it snows or rains, what <b>will</b> you <b>do</b> instead?" },
        { icon: "🔑", short: "16", q: "What do you think you’<b>ll</b> feel when you wake up at 16? What <b>are you going to do</b> differently?" }
      ]
    },

    /* ================= 6 · SPEED ================= */
    { type: "part", n: "06", icon: "stopwatch", title: "Speed", text: "Make it automatic." },

    {
      type: "drill", label: "automaticity · speed drill", sticker: "stopwatch",
      title: "Twelve futures, twice each",
      instructions: "Build the full sentence and press <b>Enter</b>. Each one must be right <b>twice</b>. A mistake sends it back.",
      items: [
        { cue: "plan ?", prompt: "what / you / do / this weekend?", answers: ["What are you doing this weekend?"] },
        { cue: "arranged", prompt: "I / meet / Lena / at 6", answers: ["I'm meeting Lena at 6.", "I am meeting Lena at 6."] },
        { cue: "arranged", prompt: "we / have / a party / on Saturday", answers: ["We're having a party on Saturday.", "We are having a party on Saturday."] },
        { cue: "arranged ?", prompt: "you / come / to my party?", answers: ["Are you coming to my party?"] },
        { cue: "decided", prompt: "I / invite / ten friends", answers: ["I'm going to invite ten friends.", "I am going to invite ten friends."] },
        { cue: "decided −", prompt: "she / not / wear / a dress", answers: ["She isn't going to wear a dress.", "She's not going to wear a dress.", "She is not going to wear a dress."] },
        { cue: "decided ?", prompt: "who / you / invite?", answers: ["Who are you going to invite?"] },
        { cue: "we can see it", prompt: "look! / it / rain", answers: ["Look! It's going to rain.", "Look! It is going to rain."] },
        { cue: "decision now", prompt: "I / buy / the tickets", answers: ["I'll buy the tickets.", "I will buy the tickets."] },
        { cue: "opinion", prompt: "I think / you / love / it", answers: ["I think you'll love it.", "I think you will love it."] },
        { cue: "timetable", prompt: "the movie / start / at 8", answers: ["The movie starts at 8."] },
        { cue: "timetable ?", prompt: "what time / the train / leave?", answers: ["What time does the train leave?"] }
      ]
    },

    /* ================= 7 · WRITING ================= */
    { type: "part", n: "07", icon: "pencil", title: "Writing", text: "Your party invitation." },

    {
      type: "write", label: "writing · an invitation", sticker: "loveletter",
      title: "You’re invited!",
      instructions: "Write a party invitation to a friend: <b>5–7 sentences</b>. When and where is it? What are you going to do? Who’s coming? What do they need to bring?",
      words: ["make", "do", "talk", "tell", "say", "big", "great", "small", "little", "tiny", "home", "house"],
      checks: [
        { label: "going to — twice", pattern: "\\b(going to)\\b", min: 2 },
        { label: "an arrangement: am / is / are + -ing", pattern: "\\b(am|is|are|'m|'re|'s)\\s+(\\w+ing)\\b(?<!going)" },
        { label: "will / ’ll — once", pattern: "\\b(will|won't|\\w+'ll|\\w+’ll)\\b" },
        { label: "3+ words from the box (they light up)", words: 3 },
        { label: "at least 5 sentences", sentences: 5 }
      ],
      sample: "Hi Lena! I’m having a small birthday party on Saturday and I really want you to come! It starts at 6 p.m. at my home. Max and Dasha are coming too. We’re going to make pizza and we’re going to watch a movie. Mom is making a great chocolate cake. Don’t bring a present — just bring your good mood! I’ll send you the address tonight."
    },

    /* ================= 8 · SELF-CHECK ================= */
    { type: "part", n: "08", icon: "star", title: "Self-check", text: "Which future still needs practice?" },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
