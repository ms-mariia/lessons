const IMG = f => "assets/img/" + f;
const H = v => ` <span class=hint>(${v})</span>`;
const LESSON = {
  id: "week-ahead-egiu25-28-evu16",
  kicker: "daily routines · I’m doing · going to · will · shall I…?",
  titleHTML: 'Week <em>ahead</em>',
  title: "Week ahead",
  subtitle: "What do you usually do — and what are you doing next week? Routines, plans, predictions and quick decisions.",
  stickers: ["alarm", "calendar"],
  confetti: ["alarm", "calendar", "star", "sparkles", "check"],

  sections: [

    /* ================= 1 · WARM-UP ================= */
    { type: "part", n: "01", icon: "alarm", title: "Warm-up", text: "Every Saturday or this Saturday?" },

    {
      type: "rule", label: "warm-up · look and talk", sticker: "alarm",
      title: "A slow Saturday",
      html: `
        <div class="photos">
          <figure class="photo"><img loading="lazy" alt="A big breakfast with eggs, beans and sausages" src="${IMG("breakfast.jpg")}"><figcaption><b>A</b><small>Photo: Acabashi · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="A woman lying on a pier reading a book next to her bike" src="${IMG("readingbike.jpg")}"><figcaption><b>B</b><small>Photo: Jules Verne Times Two · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
        </div>
        <ol class="qs">
          <li>A: Do you <b>have</b> a big breakfast on the weekend? What do you usually <b>have</b> on school days?</li>
          <li>B: What is she doing? Do you <b>stay in</b> or <b>go out</b> on Saturdays?</li>
          <li>What time do you usually <b>wake up</b> on Saturday? And this Saturday?</li>
          <li>What <b>are you doing</b> this weekend? Do you have any plans?</li>
        </ol>`
    },

    /* ================= 2 · ROUTINES ================= */
    { type: "part", n: "02", icon: "shower", title: "Daily routines", text: "English Vocabulary in Use · Unit 16" },

    {
      type: "rule", label: "vocabulary · daily routines", sticker: "shower",
      title: "From the alarm to bedtime",
      html: `
        <div class="ff">
          <div><b class="t">😴 sleep</b><b>wake up</b> (stop sleeping) · <b>get up</b> (get out of bed) · <b>go to sleep</b> = <b>fall asleep</b> · <b>straight away</b> (immediately) · <b>have a late night</b> ↔ <b>have an early night</b> · <b>take a nap</b> (a short sleep in the day)</div>
          <div><b class="t">🥣 food</b><b>have</b> cereal for breakfast · <b>have a light lunch</b> · <b>have a snack</b> (small food between meals) · <b>don’t bother to</b> cook (it’s too much work) · <b>get takeout</b> · <b>feed</b> the cat</div>
          <div><b class="t">🚿 bathroom</b><b>have a shower</b> / <b>a bath</b> · <b>have a wash</b> · <b>brush</b> (= clean) <b>your teeth</b> · <b>put on makeup</b> · <b>shave</b></div>
          <div><b class="t">🧺 housework</b><b>make the bed</b> · <b>do the laundry</b> · <b>do the ironing</b> · <b>do the shopping</b> (food) ↔ <b>go shopping</b> (for fun) · <b>fortunately</b> = luckily</div>
          <div><b class="t">🛋️ free time</b><b>stay in</b> (at home) ↔ <b>go out</b> · <b>eat out</b> (in a restaurant) ↔ <b>eat in</b> · friends <b>come over</b> (visit you at home) · <b>chat</b> (talk informally)</div>
        </div>`
    },

    {
      type: "match", label: "routines · match", sticker: "puzzle",
      title: "Make the pairs",
      instructions: "Match the start and the end — drag, or tap one and then the other.",
      pairs: [
        ["fall", "asleep"],
        ["make", "the bed"],
        ["brush", "your teeth"],
        ["put on", "makeup"],
        ["feed", "the dog"],
        ["do", "the laundry"],
        ["take", "a nap"],
        ["get", "takeout"],
        ["have an early", "night"],
        ["once", "a week"]
      ]
    },

    {
      type: "gapfill", label: "routines · one word", sticker: "shower",
      title: "Ellie’s Saturday",
      instructions: "Write <b>one</b> word in each gap.",
      items: [
        { text: "On Saturdays my mom doesn’t [[wake]] me up, so I sleep until ten.", why: "wake somebody up." },
        { text: "I usually [[have]] a shower and then a big breakfast.", why: "have a shower." },
        { text: "I don’t eat much at noon — just a [[light]] lunch, like a salad.", why: "a light lunch = a small meal." },
        { text: "In the afternoon I sometimes have a [[snack]], like an apple or some cookies.", why: "a snack = food between meals." },
        { text: "Then I [[do]] the laundry, because nobody else does it!", why: "do the laundry / the ironing / the shopping." },
        { text: "My dad and I [[do]] the shopping at the supermarket.", why: "do the shopping = buy food." },
        { text: "Saturday evening is fun: my friends often come [[over]] and we watch movies.", why: "come over = visit you at home." },
        { text: "Mom doesn’t [[bother]] to cook on Saturdays, so we order pizza.", why: "don’t bother to = it’s too much work." },
        { text: "Sometimes we [[eat]] out at a little Italian restaurant.", why: "eat out ↔ eat in." },
        { text: "I go to bed late and fall asleep straight [[away]].", why: "straight away = immediately." }
      ]
    },

    /* ================= 3 · FUTURE ================= */
    { type: "part", n: "03", icon: "calendar", title: "Next week", text: "Essential Grammar in Use · Units 25–28" },

    {
      type: "rule", label: "grammar · four futures", sticker: "calendar",
      title: "Plans, decisions and guesses",
      html: `
        <div class="week">
          <div><b>Mon</b>dentist 4:00</div><div><b>Tue</b>bus to Lviv 7:40</div><div class="now"><b>Wed</b>buy a new phone?</div><div><b>Thu</b>sky is dark…</div><div><b>Fri</b>Kate’s party</div><div><b>Sat</b>—</div><div><b>Sun</b>—</div>
        </div>
        <div class="lines">
          <div class="ln g"><b class="dot">1</b><p><b>am / is / are + -ing</b> — an <b>arrangement</b> (time, place, other people): <i>I’m <b>seeing</b> the dentist on Monday.</i> · <i><b>Are</b> you <b>going</b> to Kate’s party?</i> · timetables → <b>present simple</b>: <i>The bus <b>leaves</b> at 7:40.</i></p></div>
          <div class="ln g"><b class="dot">2</b><p><b>going to</b> — I <b>decided before</b>: <i>I’m <b>going to buy</b> a new phone.</i> · we <b>can see</b> it now: <i>Look at the sky! It’s <b>going to rain</b>.</i></p></div>
          <div class="ln g"><b class="dot">3</b><p><b>will / won’t</b> — <b>predictions</b>: <i>I think it <b>will</b> be fun.</i> · <i>You <b>won’t</b> sleep.</i> · a <b>decision now</b> or an <b>offer</b>: <i>“My bag is heavy.” “<b>I’ll</b> carry it!”</i></p></div>
        </div>
        <div class="note">⚠️ <b>Shall I / Shall we…?</b> = Is it a good idea? <i><b>Shall I</b> open the window?</i> · <i>Where <b>shall we</b> go?</i> — only with I and we.<br>Don’t use will for plans you already made: <s>I will see the dentist on Monday.</s> → <i>I’m seeing the dentist on Monday.</i></div>`
    },

    {
      type: "mcq", label: "future · choose", sticker: "calendar",
      title: "Which future?",
      instructions: "Choose the best form.",
      items: [
        { q: "“What ___ tomorrow evening?” “Nothing. I’m free.”", options: ["will you do", "are you doing", "do you do"], answer: 1 },
        { q: "My bag is so heavy! — Don’t worry, I ___ it for you.", options: ["’ll carry", "’m carrying", "carry"], answer: 0 },
        { q: "Look at those black clouds! It ___ rain.", options: ["will", "rains", "’s going to"], answer: 2 },
        { q: "The movie ___ at 7:30, so let’s meet at 7.", options: ["starts", "is going to start", "will start"], answer: 0 },
        { q: "I ___ my grandma on Sunday. We’re having lunch at her place.", options: ["will visit", "’m visiting", "visit"], answer: 1 },
        { q: "I think you ___ the new Marvel movie. It’s great!", options: ["’re liking", "’ll like", "like"], answer: 1 },
        { q: "It’s cold in here. ___ close the window?", options: ["Will I", "Do I", "Shall I"], answer: 2 },
        { q: "I’ve decided: I ___ more water every day.", options: ["’m going to drink", "drink", "’ll be drinking"], answer: 0 },
        { q: "Don’t drink coffee at night. You ___ sleep.", options: ["don’t", "won’t", "aren’t"], answer: 1 },
        { q: "“The phone’s ringing.” “OK, I ___ it.”", options: ["’m answering", "answer", "’ll answer"], answer: 2 }
      ]
    },

    {
      type: "gapfill", label: "arrangements and timetables", sticker: "calendar",
      title: "Planner talk",
      instructions: "Present continuous (<i>is leaving</i>) for people’s plans, present simple (<i>leaves</i>) for timetables.",
      items: [
        { text: "“[[Are you going|are you going]] out tonight?” “No, I’m too tired.”" + H("you / go"), why: "a plan → present continuous." },
        { text: "We’re going to a concert tonight. It [[starts]] at 8." + H("start"), why: "a timetable → present simple." },
        { text: "Did you hear? My cousin [[is getting|'s getting]] married next month!" + H("get"), why: "an arrangement." },
        { text: "Our math course [[finishes|ends]] on Friday." + H("finish"), why: "a timetable." },
        { text: "There’s a party tomorrow, but [[I'm not going|i am not going]]." + H("I / not / go"), why: "I’m not going — negative plan." },
        { text: "How [[are you getting]] home after the party?" + H("you / get"), why: "a plan → are you getting." },
        { text: "The last bus [[leaves]] at midnight." + H("leave"), why: "a timetable." },
        { text: "“What [[are you doing]] tomorrow afternoon?” “I’m working.”" + H("you / do"), why: "asking about plans." },
        { text: "My parents [[are flying|'re flying]] to Warsaw on Monday." + H("fly"), why: "an arrangement — tickets are bought." },
        { text: "What time [[does the movie begin]]?" + H("the movie / begin"), why: "a timetable question → does … begin." }
      ]
    },

    {
      type: "match", label: "I’ll · shall I · going to", sticker: "speech",
      title: "Say the right thing",
      instructions: "Match each situation with the best answer.",
      pairs: [
        ["“My bag is really heavy.”", "I’ll carry it for you."],
        ["“It’s so hot in this room.”", "Shall I open the window?"],
        ["“Why are you taking an umbrella?”", "It’s going to rain."],
        ["“Are you free on Friday?”", "No, I’m meeting Kate."],
        ["“I’m hungry.”", "I’ll make you a sandwich."],
        ["“Let’s go out tonight.”", "OK, where shall we go?"],
        ["“Why are you saving money?”", "I’m going to buy a new phone."],
        ["“Do you think it’s a good movie?”", "I think you’ll love it."]
      ]
    },

    {
      type: "correct", label: "future · fix it", sticker: "tools",
      title: "Find and fix the mistake",
      instructions: "Each sentence has <b>one</b> mistake. Write the correct sentence.",
      items: [
        { wrong: "I will see the dentist on Monday at 4.", answers: ["I'm seeing the dentist on Monday at 4.", "I am seeing the dentist on Monday at 4.", "I'm going to see the dentist on Monday at 4.", "I am going to see the dentist on Monday at 4."] },
        { wrong: "My bag is heavy. — I carry it for you.", answers: ["My bag is heavy. — I'll carry it for you.", "My bag is heavy. — I will carry it for you."] },
        { wrong: "Look at the sky! It will rain.", answers: ["Look at the sky! It's going to rain.", "Look at the sky! It is going to rain."] },
        { wrong: "What do you do tonight?", answers: ["What are you doing tonight?", "What are you going to do tonight?"] },
        { wrong: "The train is leaving at 7:40 every morning.", answers: ["The train leaves at 7:40 every morning."] },
        { wrong: "Shall you open the door, please?", answers: ["Will you open the door, please?", "Can you open the door, please?", "Could you open the door, please?"] },
        { wrong: "I think she wins the competition.", answers: ["I think she'll win the competition.", "I think she will win the competition."] },
        { wrong: "I'm going buy a new phone.", answers: ["I'm going to buy a new phone.", "I am going to buy a new phone."] }
      ]
    },

    /* ================= 4 · READING ================= */
    { type: "part", n: "04", icon: "envelope", title: "Reading", text: "A message from a friend." },

    {
      type: "tf2", label: "reading · a message", sticker: "envelope",
      title: "Crazy week!",
      instructions: "Read the message. True or false? If it’s false, choose the correct sentence.",
      text: `<div class="msg"><div class="from">Sofia · 9:42 PM</div>
          <p>Hi! Sorry, I can’t meet on Wednesday. This week is crazy! On Monday I’m seeing the dentist after school, and on Tuesday I’m helping my aunt — she’s moving to a new apartment.</p>
          <p>On school days I usually get up at 6:30, have a quick shower and just have cereal for breakfast. But on Thursday our class is going on a trip to Chernihiv, and the bus leaves at 6:15! So I’m going to have an early night on Wednesday.</p>
          <p>On Friday Mom is working late, so she won’t bother to cook — we’re going to get takeout. Are you free on Saturday? Shall we go to the movies? I think the new comedy will be fun. I’ll call you tomorrow!</p></div>`,
      items: [
        { q: "Sofia can meet her friend on Wednesday.", answer: false, fix: ["Sofia can meet on Friday.", "Sofia can’t meet on Wednesday.", "Sofia is going to the dentist on Wednesday."], fixAnswer: 1 },
        { q: "She is seeing the dentist on Monday.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Her aunt is moving to a new house in the country.", answer: false, fix: ["Her aunt is moving to a new apartment.", "Her aunt is visiting them.", "Her aunt is going on a trip."], fixAnswer: 0 },
        { q: "On school days she usually has a big breakfast.", answer: false, fix: ["She usually has eggs and toast.", "She doesn’t have breakfast.", "She usually just has cereal."], fixAnswer: 2 },
        { q: "The bus to Chernihiv leaves at 6:15.", answer: true, fix: [], fixAnswer: 0 },
        { q: "She is going to go to bed late on Wednesday.", answer: false, fix: ["She is going to have an early night.", "She is going to a party on Wednesday.", "She is staying at her aunt’s."], fixAnswer: 0 },
        { q: "On Friday they are going to eat takeout.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Sofia thinks the new comedy will be boring.", answer: false, fix: ["She doesn’t want to see it.", "She thinks it will be fun.", "She has already seen it."], fixAnswer: 1 }
      ]
    },

    /* ================= 5 · TALK ================= */
    { type: "part", n: "05", icon: "speech", title: "Over to you", text: "Spin it — answer, then ask me the same question." },

    {
      type: "wheel", label: "speaking · my week", sticker: "speech",
      title: "Spin your week",
      start: "Spin the wheel. Answer in 3–4 sentences: what you usually do and what you’re doing this week.",
      items: [
        { icon: "⏰", short: "mornings", q: "What time do you usually <b>wake up</b> and <b>get up</b>? Are you a morning person?" },
        { icon: "🥣", short: "breakfast", q: "What do you usually <b>have</b> for breakfast? Do you <b>have a snack</b> at school?" },
        { icon: "🧺", short: "housework", q: "Who <b>does the laundry</b> and <b>the shopping</b> in your family? Do you <b>make your bed</b>?" },
        { icon: "📅", short: "this weekend", q: "What <b>are you doing</b> this weekend? Who <b>are you meeting</b>?" },
        { icon: "🎯", short: "decided", q: "What <b>are you going to</b> change next month? (sleep, sport, phone time…)" },
        { icon: "🔮", short: "predictions", q: "What do you think <b>will</b> happen in your life next year?" },
        { icon: "🍕", short: "eat out", q: "Do you prefer to <b>eat out</b> or <b>get takeout</b>? How often?" },
        { icon: "🛋️", short: "stay in", q: "Do your friends often <b>come over</b>? What do you do when you <b>stay in</b>?" }
      ]
    },

    /* ================= 6 · SPEED ================= */
    { type: "part", n: "06", icon: "stopwatch", title: "Speed", text: "Make it automatic." },

    {
      type: "drill", label: "automaticity · speed drill", sticker: "stopwatch",
      title: "Twelve quick answers, twice each",
      instructions: "Write the answer and press <b>Enter</b>. Each one must be right <b>twice</b>.",
      items: [
        { cue: "routine", prompt: "___ the bed", answers: ["make", "make the bed"] },
        { cue: "routine", prompt: "___ the laundry", answers: ["do", "do the laundry"] },
        { cue: "routine", prompt: "fall ___", answers: ["asleep", "fall asleep"] },
        { cue: "routine", prompt: "take a ___ (short sleep)", answers: ["nap", "take a nap"] },
        { cue: "routine", prompt: "eat ___ (at a restaurant)", answers: ["out", "eat out"] },
        { cue: "routine", prompt: "friends come ___", answers: ["over", "friends come over"] },
        { cue: "plan", prompt: "I / meet / Kate tomorrow", answers: ["i'm meeting kate tomorrow", "i am meeting kate tomorrow"] },
        { cue: "timetable", prompt: "the bus / leave / at 8", answers: ["the bus leaves at 8"] },
        { cue: "decided before", prompt: "I / buy / a bike", answers: ["i'm going to buy a bike", "i am going to buy a bike"] },
        { cue: "offer now", prompt: "I / help / you", answers: ["i'll help you", "i will help you"] },
        { cue: "suggestion", prompt: "___ we go out?", answers: ["shall", "shall we go out?", "shall we go out"] },
        { cue: "prediction", prompt: "I think / it / be / fun", answers: ["i think it'll be fun", "i think it will be fun"] }
      ]
    },

    /* ================= 7 · WRITING ================= */
    { type: "part", n: "07", icon: "pencil", title: "Writing", text: "My usual week vs. next week." },

    {
      type: "write", label: "writing · my week", sticker: "pencil",
      title: "Usually… but next week…",
      instructions: "Write <b>6–8 sentences</b>. Start with your usual day (present simple + routines). Then write about next week: one <b>arrangement</b> (I’m …ing), one <b>decision</b> (going to) and one <b>prediction</b> (I think … will).",
      words: ["wake up", "get up", "have a shower", "make the bed", "do the laundry", "have a snack", "stay in", "go out", "eat out", "come over", "takeout", "early night"],
      checks: [
        { label: "present continuous for a plan (I’m meeting…)", pattern: "\\b(I'm|I’m|I am|we're|we’re|we are|he's|she's|is|are)\\s+\\w+ing\\b" },
        { label: "going to — once", pattern: "\\bgoing to\\s+\\w+" },
        { label: "will / ’ll — once", pattern: "\\b(will|won't|won’t)\\b|\\w+['’]ll\\b" },
        { label: "4+ routine phrases from the list (they light up)", words: 4 },
        { label: "at least 6 sentences", sentences: 6 }
      ],
      sample: "On school days I usually wake up at 6:45 and get up straight away. I have a shower, make my bed and have cereal for breakfast. After school I have a snack and do my homework. But next week is different! On Tuesday I’m going to the dentist, and on Friday my friends are coming over. I’m going to have an early night on Thursday, because I have a test. I think it will be a busy but fun week."
    },

    /* ================= 8 · SELF-CHECK ================= */
    { type: "part", n: "08", icon: "star", title: "Self-check", text: "What to look at again." },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
