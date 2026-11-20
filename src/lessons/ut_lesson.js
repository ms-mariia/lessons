const IMG = f => "assets/img/" + f;
const H = v => ` <span class=hint>(${v})</span>`;
const LESSON = {
  id: "back-then-egiu36",
  kicker: "used to · didn’t use to · past tenses check",
  titleHTML: 'Back <em>then</em>',
  title: "Back then",
  subtitle: "Things that were true before — but not now. Plus a big check of all your past tenses.",
  stickers: ["rewind", "camera"],
  confetti: ["star", "sparkles", "check", "rewind", "redheart"],

  sections: [

    /* ================= 1 · WARM-UP ================= */
    { type: "part", n: "01", icon: "rewind", title: "Warm-up", text: "How did people live before?" },

    {
      type: "rule", label: "warm-up · look and talk", sticker: "camera",
      title: "Before phones and the internet",
      html: `
        <div class="photos">
          <figure class="photo"><img loading="lazy" alt="A big old library reading room with long tables" src="${IMG("library.jpg")}"><figcaption><b>A</b><small>Photo: Diliff · CC BY 2.5 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="An old metal diving helmet in a glass case" src="${IMG("diving-helmet.jpg")}"><figcaption><b>B</b><small>Photo: MelnikovI · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
        </div>
        <ol class="qs">
          <li>A: Before the internet, students <b>used to</b> do their homework in libraries. Where do you do yours?</li>
          <li>B: Divers <b>used to</b> wear heavy metal helmets like this. What do they wear now?</li>
          <li>When you were little, what did you <b>use to</b> do after school? What cartoons did you <b>use to</b> watch?</li>
        </ol>`
    },

    /* ================= 2 · USED TO ================= */
    { type: "part", n: "02", icon: "rewind", title: "used to", text: "Essential Grammar in Use · Unit 36" },

    {
      type: "rule", label: "grammar · used to", sticker: "rewind",
      title: "It was true before. It isn’t true now.",
      html: `
        <div class="vs">
          <div><b class="t">before</b>Dave <b>used to work</b> in a factory.</div>
          <div><b class="t">now</b>He <b>works</b> in a supermarket.</div>
        </div>
        <div class="lines">
          <div class="ln g"><b class="dot">+</b><p>I / you / he / she / we / they <b>used to</b> + verb: <i>I <b>used to have</b> very long hair.</i> · <i>She <b>used to live</b> in Odesa.</i></p></div>
          <div class="ln g"><b class="dot">−</b><p><b>didn’t use to</b> + verb (no <b>d</b>!): <i>I <b>didn’t use to like</b> tomatoes.</i></p></div>
          <div class="ln g"><b class="dot">?</b><p><b>Did</b> you <b>use to</b> + verb? (no <b>d</b>!): <i>Where <b>did</b> you <b>use to</b> live?</i></p></div>
        </div>
        <div class="note">⚠️ <b>used to</b> is only for the past. For now, use the present simple: <i>We usually <b>get up</b> early.</i> <s>We use to get up early</s><br>One time in the past → past simple: <i>I <b>went</b> to Lviv last summer.</i> · Many times / for a long time, and not now → <b>used to</b>: <i>We <b>used to go</b> to Lviv every summer.</i></div>`
    },

    {
      type: "gapfill", label: "used to · write it", sticker: "camera",
      title: "Then and now",
      instructions: "Write <b>used to</b> or <b>didn’t use to</b> + the verb.",
      items: [
        { text: "I [[used to have]] a cat, but now I have a dog." + H("have"), why: "true before, not now → used to + verb." },
        { text: "My dad [[used to play]] soccer. Now he plays golf." + H("play"), why: "he → used to (no -s)." },
        { text: "We [[used to live]] in Kharkiv, but we moved to Kyiv in 2022." + H("live"), why: "used to + first form." },
        { text: "I [[didn't use to like|did not use to like]] fish, but now I love it." + H("not / like"), why: "negative: didn’t use to (no d)." },
        { text: "There [[used to be]] a movie theater on this street. Now it’s a supermarket." + H("be"), why: "there used to be = there was before." },
        { text: "My grandma [[used to tell]] me stories every evening." + H("tell"), why: "a habit in the past." },
        { text: "My sister [[didn't use to wear|did not use to wear]] glasses, but she does now." + H("not / wear"), why: "didn’t use to + wear." },
        { text: "Kids [[used to write]] letters. Now they send messages." + H("write"), why: "used to + write." },
        { text: "I [[used to be]] afraid of the dark when I was little." + H("be"), why: "a state in the past → used to be." },
        { text: "We [[didn't use to have|did not use to have]] a car. We went everywhere by bus." + H("not / have"), why: "didn’t use to have." }
      ]
    },

    {
      type: "mcq", label: "used to · choose", sticker: "rewind",
      title: "Watch the d!",
      instructions: "Choose the right form.",
      items: [
        { q: "When I was little, I ___ cartoons every morning.", options: ["use to watch", "used to watch", "used to watching"], answer: 1 },
        { q: "___ you use to play outside a lot?", options: ["Did", "Do", "Were"], answer: 0 },
        { q: "I ___ use to like vegetables.", options: ["don’t", "didn’t", "wasn’t"], answer: 1 },
        { q: "Where did you ___ live before you came here?", options: ["used to", "use to", "using to"], answer: 1 },
        { q: "My brother ___ to school by bus. Now he walks.", options: ["used to go", "uses to go", "use to go"], answer: 0 },
        { q: "We usually ___ up at 7 on school days.", options: ["use to get", "used to get", "get"], answer: 2 },
        { q: "There ___ a big tree in our yard, but it fell down.", options: ["used to be", "used to have", "use to be"], answer: 0 },
        { q: "My mom ___ have short hair. Now it’s long.", options: ["use to", "was used to", "used to"], answer: 2 },
        { q: "I ___ to Lviv last summer. It was great!", options: ["used to go", "went", "use to go"], answer: 1 },
        { q: "Did your parents ___ strict when you were little?", options: ["use to be", "used to be", "use to"], answer: 0 }
      ]
    },

    {
      type: "sort", label: "one time or many times?", sticker: "puzzle",
      title: "Past simple or used to?",
      instructions: "Which time words go with <b>one time</b> (past simple) and which with <b>a habit before</b> (used to)?",
      categories: [
        { name: "one time → past simple", words: ["yesterday", "last Saturday", "in 2023", "two days ago", "on my birthday last year", "once"] },
        { name: "a habit before → used to", words: ["every summer", "when I was little", "as a kid", "all the time", "every evening", "for years"] }
      ]
    },

    {
      type: "correct", label: "used to · fix it", sticker: "tools",
      title: "Find and fix the mistake",
      instructions: "Each sentence has <b>one</b> mistake. Write the correct sentence.",
      items: [
        { wrong: "I use to play tennis when I was ten.", answers: ["I used to play tennis when I was ten."] },
        { wrong: "Did you used to have a pet?", answers: ["Did you use to have a pet?"] },
        { wrong: "She didn't used to like school.", answers: ["She didn't use to like school.", "She did not use to like school."] },
        { wrong: "We use to get up at 7 every day.", answers: ["We usually get up at 7 every day.", "We get up at 7 every day."] },
        { wrong: "My dad used to working in a bank.", answers: ["My dad used to work in a bank."] },
        { wrong: "I used to go to Paris last year.", answers: ["I went to Paris last year."] },
        { wrong: "He uses to live near the school.", answers: ["He used to live near the school."] },
        { wrong: "There used to was a park here.", answers: ["There used to be a park here."] }
      ]
    },

    /* ================= 3 · PAST CHECK ================= */
    { type: "part", n: "03", icon: "detective", title: "Past tenses check", text: "Past simple · past continuous · used to — all together." },

    {
      type: "rule", label: "review · three pasts", sticker: "detective",
      title: "Which past?",
      html: `
        <div class="lines">
          <div class="ln g"><b class="dot">1</b><p><b>past simple</b> — it happened and finished: <i>I <b>lost</b> my phone yesterday.</i> · <i>We <b>didn’t go</b> out.</i> · <i><b>Did</b> you <b>see</b> it?</i></p></div>
          <div class="ln g"><b class="dot">2</b><p><b>past continuous</b> — it was in the middle: <i>I <b>was walking</b> home when it <b>started</b> to rain.</i></p></div>
          <div class="ln g"><b class="dot">3</b><p><b>used to</b> — a habit or a state before, not now: <i>I <b>used to walk</b> to school.</i></p></div>
        </div>`
    },

    {
      type: "mcq", label: "test · past tenses", sticker: "detective",
      title: "Ten-question past test",
      instructions: "Choose the right form. Think: one time, in the middle, or a habit before?",
      items: [
        { q: "When I was a child, I ___ in a small village.", options: ["was living", "used to live", "use to live"], answer: 1 },
        { q: "I ___ a shower when the phone rang.", options: ["was taking", "took", "used to take"], answer: 0 },
        { q: "We ___ the new Marvel movie last Friday.", options: ["were seeing", "used to see", "saw"], answer: 2 },
        { q: "What ___ at 9 o’clock last night?", options: ["did you do", "were you doing", "you were doing"], answer: 1 },
        { q: "My grandpa ___ a lot, but he stopped ten years ago.", options: ["used to smoke", "was smoking", "smoked yesterday"], answer: 0 },
        { q: "I ___ my keys, so I couldn’t open the door.", options: ["was losing", "lost", "used to lose"], answer: 1 },
        { q: "While we ___ dinner, the lights went out.", options: ["had", "were having", "used to have"], answer: 1 },
        { q: "___ you go to school yesterday?", options: ["Did", "Were", "Used"], answer: 0 },
        { q: "She ___ glasses, but now she wears contacts.", options: ["was wearing", "wore yesterday", "used to wear"], answer: 2 },
        { q: "It ___ when we left the house, so we took umbrellas.", options: ["was raining", "rained", "used to rain"], answer: 0 }
      ]
    },

    {
      type: "gapfill", label: "story · fill the verbs", sticker: "camera",
      title: "Grandma’s old photo",
      instructions: "Past simple, past continuous or used to? Write the verb.",
      items: [
        { text: "Yesterday I [[found]] an old photo of my grandma in a box." + H("find"), why: "one time, finished → past simple." },
        { text: "In the photo she [[was sitting]] on a bike in front of her house." + H("sit"), why: "in the middle of the action → was sitting." },
        { text: "When she was young, she [[used to ride]] her bike to school every day." + H("ride"), why: "a habit before → used to." },
        { text: "She [[didn't use to have|did not use to have]] a phone or a computer." + H("not / have"), why: "not true before → didn’t use to." },
        { text: "I [[called]] her and asked about the photo." + H("call"), why: "one time → past simple." },
        { text: "She [[was cooking]] dinner when I called, but she was happy to talk." + H("cook"), why: "in the middle → was cooking." },
        { text: "She [[told]] me that the photo is from 1975." + H("tell"), why: "one time → told." },
        { text: "Back then, people [[used to send]] letters, not messages!" + H("send"), why: "a habit before → used to." }
      ]
    },

    /* ================= 4 · TALK ================= */
    { type: "part", n: "04", icon: "speech", title: "Over to you", text: "Spin it — I ask, you answer. Then you ask me." },

    {
      type: "wheel", label: "speaking · when you were little", sticker: "speech",
      title: "Spin back in time",
      start: "Spin the wheel. Answer with used to / didn’t use to. Then ask me: Did you use to…?",
      items: [
        { icon: "🧸", short: "toys", q: "What toys <b>did</b> you <b>use to</b> play with?" },
        { icon: "📺", short: "cartoons", q: "What cartoons <b>did</b> you <b>use to</b> watch?" },
        { icon: "🥦", short: "food", q: "What food <b>didn’t</b> you <b>use to</b> like? Do you like it now?" },
        { icon: "😨", short: "fears", q: "What <b>were</b> you afraid of when you were little?" },
        { icon: "🏫", short: "school", q: "How <b>did</b> you <b>use to</b> get to school? How do you get there now?" },
        { icon: "🎂", short: "birthdays", q: "How <b>did</b> you <b>use to</b> celebrate your birthday?" },
        { icon: "👵", short: "family", q: "What <b>did</b> your grandparents <b>use to</b> do when they were young?" },
        { icon: "📱", short: "phone", q: "When <b>did</b> you get your first phone? What <b>did</b> you <b>use to</b> do on it?" }
      ]
    },

    /* ================= 5 · SPEED ================= */
    { type: "part", n: "05", icon: "stopwatch", title: "Speed", text: "Make it automatic." },

    {
      type: "drill", label: "automaticity · speed drill", sticker: "stopwatch",
      title: "Twelve quick answers, twice each",
      instructions: "Write the answer and press <b>Enter</b>. Each one must be right <b>twice</b>.",
      items: [
        { cue: "used to", prompt: "I / live", answers: ["i used to live"] },
        { cue: "didn't use to", prompt: "she / like", answers: ["she didn't use to like", "she did not use to like"] },
        { cue: "question", prompt: "you / play", answers: ["did you use to play?", "did you use to play"] },
        { cue: "used to", prompt: "there / be", answers: ["there used to be"] },
        { cue: "past simple", prompt: "go", answers: ["went"] },
        { cue: "past simple", prompt: "find", answers: ["found"] },
        { cue: "past simple", prompt: "lose", answers: ["lost"] },
        { cue: "past simple", prompt: "ride", answers: ["rode"] },
        { cue: "past continuous", prompt: "I / sleep", answers: ["i was sleeping"] },
        { cue: "past continuous", prompt: "they / wait", answers: ["they were waiting"] },
        { cue: "past simple −", prompt: "he / see", answers: ["he didn't see", "he did not see"] },
        { cue: "past simple ?", prompt: "you / call", answers: ["did you call?", "did you call"] }
      ]
    },

    /* ================= 6 · WRITING ================= */
    { type: "part", n: "06", icon: "pencil", title: "Writing", text: "Me then, me now." },

    {
      type: "write", label: "writing · me then, me now", sticker: "pencil",
      title: "Me then, me now",
      instructions: "Write <b>6–7 sentences</b> about you when you were little and you now. Use <b>used to</b> 3 times, <b>didn’t use to</b> once, and one sentence in the <b>past simple</b> about one special day.",
      words: ["when I was little", "now", "but", "every", "used to", "didn't use to", "these days", "toys", "cartoons", "school", "friends"],
      checks: [
        { label: "used to — 3 times", pattern: "\\bused to\\b", min: 3 },
        { label: "didn’t use to — once", pattern: "\\b(didn't|didn’t|did not) use to\\b" },
        { label: "no “use to” for now / no “didn’t used to”", pattern: "^(?![\\s\\S]*(\\b(didn't|didn’t|did not|did you|did he|did she|did they|did we)\\s+used to\\b|^\\s*I use to\\b|[.!?]\\s+(I|We|They|You) use to\\b))[\\s\\S]+$" },
        { label: "4+ words from the list (they light up)", words: 4 },
        { label: "at least 6 sentences", sentences: 6 }
      ],
      sample: "When I was little, I used to live with my grandparents in a village. I used to play outside all day with my friends. I didn't use to like reading, but now I love books. I used to watch cartoons every morning. These days I watch series on my phone. One day my grandpa took me fishing, and I caught a big fish!"
    },

    /* ================= 7 · SELF-CHECK ================= */
    { type: "part", n: "07", icon: "star", title: "Self-check", text: "What to look at again." },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
