const IMG = f => "assets/img/" + f;
const H = v => ` <span class=hint>(${v})</span>`;
const LESSON = {
  id: "go-and-do-evuel39-40",
  kicker: "go / went / gone · do / did / done",
  titleHTML: '<em>Go</em> &amp; <i>Do</i>',
  title: "Go & Do",
  subtitle: "Where do you go, what do you do — and what did you do last weekend?",
  stickers: ["metro", "pin"],
  confetti: ["metro", "pin", "star", "sparkles", "check"],

  sections: [

    /* ================= 1 · WARM-UP ================= */
    { type: "part", n: "01", icon: "pin", title: "Warm-up", text: "Where do you go?" },

    {
      type: "rule", label: "warm-up · look and talk", sticker: "metro",
      title: "Do you go…?",
      html: `
        <div class="photos">
          <figure class="photo"><img loading="lazy" alt="An outdoor swimming pool with mountains behind it" src="${IMG("pool.jpg")}"><figcaption><b>A · a swimming pool</b><small>Photo: Bernard Gagnon · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="People skating on an outdoor ice rink in the evening" src="${IMG("rink.jpg")}"><figcaption><b>B · an ice rink</b><small>Photo: Dori · CC BY-SA 3.0 US · Wikimedia Commons</small></figcaption></figure>
        </div>
        <ol class="qs">
          <li>A: Do you <b>go swimming</b>? When did you last <b>go</b> to a pool?</li>
          <li>B: Have you ever <b>gone skating</b>? Is it easy or hard for you?</li>
          <li>What do you usually <b>do</b> on Saturdays? Where do you <b>go</b>?</li>
          <li>What housework do you <b>do</b> at home?</li>
        </ol>`
    },

    /* ================= 2 · GO ================= */
    { type: "part", n: "02", icon: "metro", title: "Go", text: "Vocabulary in Use Elementary · Unit 39" },

    {
      type: "rule", label: "vocabulary · go / went / gone", sticker: "metro",
      title: "Four lines of go",
      html: `
        <div class="lines">
          <div class="ln r"><b class="dot">A</b><p><b>go</b> = move to a place: I <b>go</b> to school by bus. My brother <b>goes</b> by car. We <b>went</b> to Chicago last summer. Is this train <b>going</b> to Boston? Where does this road <b>go</b>?</p></div>
          <div class="ln b"><b class="dot">B</b><p><b>go + where</b>: Ethan <b>went into</b> his room. · Yuko <b>went out of</b> the house. · Jacob <b>went up</b> the stairs. · She <b>went down</b> the stairs.</p></div>
          <div class="ln y"><b class="dot">C</b><p><b>be going to</b> = a plan: We’re <b>going to</b> visit my aunt in New York soon. · I’m <b>going to</b> learn five new words every day.</p></div>
          <div class="ln g"><b class="dot">D</b><p><b>go + -ing</b> = an activity: <b>go</b> swimming · shopping · skiing · skating · dancing · fishing · sightseeing</p></div>
        </div>
        <div class="note">⚠️ <b>go swimming</b> (not <s>go to swimming</s>, <s>go for shopping</s>) · <b>go home</b> (not <s>go to home</s>, <s>go at home</s>) · <b>go there</b> (not <s>go to there</s>) · <b>go somewhere else</b> (not <s>go to somewhere</s>)</div>`
    },

    {
      type: "sort", label: "go · sort it", sticker: "pin",
      title: "go ___ , go to ___ or go -ing?",
      instructions: "Put each word in the right box.",
      categories: [
        { name: "go + -ing", words: ["swimming", "shopping", "skating", "dancing", "sightseeing"] },
        { name: "go to …", words: ["the zoo", "school", "the movies", "the beach", "the dentist"] },
        { name: "go … (no to)", words: ["home", "there", "out", "downtown", "somewhere else"] }
      ]
    },

    {
      type: "mcq", label: "go · choose", sticker: "metro",
      title: "Which way?",
      instructions: "Choose the right word.",
      items: [
        { q: "Ethan went ___ his room and shut the door.", options: ["into", "out of", "up"], answer: 0 },
        { q: "Yuko went ___ the house and into the yard.", options: ["into", "out of", "down"], answer: 1 },
        { q: "Jacob was tired. He went ___ the stairs slowly to his bedroom.", options: ["up", "out", "into"], answer: 0 },
        { q: "The phone was ringing downstairs. She went ___ the stairs quickly.", options: ["into", "out of", "down"], answer: 2 },
        { q: "We ___ visit my aunt in New York next month. It’s our plan.", options: ["’re going to", "went", "go to"], answer: 0 },
        { q: "My brother ___ to school by bus every day.", options: ["go", "goes", "going"], answer: 1 },
        { q: "We ___ to Chicago last summer.", options: ["go", "went", "gone"], answer: 1 },
        { q: "Where ___ this road go?", options: ["does", "do", "is"], answer: 0 },
        { q: "Is this bus ___ downtown?", options: ["go", "goes", "going"], answer: 2 },
        { q: "Hans ___ skiing every winter.", options: ["goes", "goes to", "is go"], answer: 0 }
      ]
    },

    {
      type: "correct", label: "go · fix it", sticker: "pin",
      title: "Find and fix the mistake",
      instructions: "Each sentence has <b>one</b> mistake. Write the correct sentence.",
      items: [
        { wrong: "It's time to go at home now.", answers: ["It's time to go home now."] },
        { wrong: "Mom is going for shopping this afternoon.", answers: ["Mom is going shopping this afternoon."] },
        { wrong: "I love Boston. Did you go to there last year?", answers: ["I love Boston. Did you go there last year?"] },
        { wrong: "Max is going to home at 4 o'clock.", answers: ["Max is going home at 4 o'clock."] },
        { wrong: "I go to swimming every Sunday morning.", answers: ["I go swimming every Sunday morning."] },
        { wrong: "We're going sightsee today.", answers: ["We're going sightseeing today."] },
        { wrong: "Let's go to fish today.", answers: ["Let's go fishing today."] },
        { wrong: "We always go to the same café. Let's go to somewhere different today.", answers: ["We always go to the same café. Let's go somewhere different today.", "We always go to the same cafe. Let's go somewhere different today."] }
      ]
    },

    /* ================= 3 · DO ================= */
    { type: "part", n: "03", icon: "broom", title: "Do", text: "Vocabulary in Use Elementary · Unit 40" },

    {
      type: "rule", label: "vocabulary · do / did / done", sticker: "broom",
      title: "Four lines of do",
      html: `
        <div class="lines">
          <div class="ln r"><b class="dot">A</b><p><b>do as a helper</b>: <b>Do</b> you like tennis? — Yes, I <b>do</b>. · <b>Did</b> they like the movie? — Yes, they <b>did</b>. · He <b>doesn’t</b> play well. · “I love pizza.” — “So <b>do</b> I.” · “I saw it.” — “So <b>did</b> I.”</p></div>
          <div class="ln b"><b class="dot">B</b><p><b>do = any action</b>: What are you <b>doing</b>? — I’m dancing. · On Saturdays I usually <b>do</b> nothing. · Don’t <b>do</b> that!</p></div>
          <div class="ln y"><b class="dot">C</b><p><b>What do you do?</b> = What’s your job? — I’m a student. · What <b>does</b> your mom <b>do</b>? — She’s a doctor.</p></div>
          <div class="ln g"><b class="dot">D</b><p><b>do + activity</b>: do the housework · the dishes · the laundry · the gardening · your homework · some exercises · your best · business with</p></div>
        </div>
        <div class="note">🇺🇸 Your book is British: <b>do the dishes</b> (UK the washing-up) · <b>do the laundry</b> (UK the washing) · <b>vacation</b> (UK holiday)</div>`
    },

    {
      type: "match", label: "do · match", sticker: "basket",
      title: "What does it mean?",
      instructions: "Match each phrase with its meaning.",
      pairs: [
        ["do the dishes", "wash plates and cups"], ["do the laundry", "wash your clothes"],
        ["do the housework", "clean the house"], ["do the gardening", "work with plants outside"],
        ["do some exercises", "move your body to get fit"], ["do your best", "try as hard as you can"],
        ["do business with", "buy and sell with a company"], ["do nothing", "just relax"],
        ["What do you do?", "What’s your job?"], ["What are you doing?", "What’s happening now?"]
      ]
    },

    {
      type: "mcq", label: "do · helpers", sticker: "broom",
      title: "do, does, did — or are?",
      instructions: "Choose the right word.",
      items: [
        { q: "“Do you like tennis?” “Yes, I ___.”", options: ["am", "do", "like"], answer: 1 },
        { q: "“I love pizza.” “So ___ I.”", options: ["am", "do", "does"], answer: 1 },
        { q: "“Did they like the movie?” “Yes, they ___.”", options: ["do", "liked", "did"], answer: 2 },
        { q: "“What ___ your sister do?” “She’s a nurse.”", options: ["is", "does", "do"], answer: 1 },
        { q: "“What ___ you doing?” “I’m cooking dinner.”", options: ["do", "are", "did"], answer: 1 },
        { q: "My cousin ___ play the guitar very well.", options: ["don’t", "isn’t", "doesn’t"], answer: 2 },
        { q: "“I went to the party.” “So ___ I.”", options: ["did", "went", "was"], answer: 0 },
        { q: "___ you do your homework yesterday?", options: ["Do", "Did", "Were"], answer: 1 },
        { q: "What ___ you do last weekend?", options: ["did", "do", "were"], answer: 0 },
        { q: "My dad ___ the dishes every evening.", options: ["do", "does", "makes"], answer: 1 }
      ]
    },

    {
      type: "correct", label: "do · fix the dialogue", sticker: "basket",
      title: "Fix the dialogue",
      instructions: "Each line has <b>one</b> mistake. Write the correct line.",
      items: [
        { wrong: "ANNA: Where did you went on vacation?", answers: ["ANNA: Where did you go on vacation?", "Where did you go on vacation?"] },
        { wrong: "PAVEL: We don't go to Florida this year. We went to Colorado.", answers: ["PAVEL: We didn't go to Florida this year. We went to Colorado.", "We didn't go to Florida this year. We went to Colorado."] },
        { wrong: "ANNA: Do your grandmother live in Colorado?", answers: ["ANNA: Does your grandmother live in Colorado?", "Does your grandmother live in Colorado?"] },
        { wrong: "PAVEL: No, she don't.", answers: ["PAVEL: No, she doesn't.", "No, she doesn't."] },
        { wrong: "PAVEL: But my uncle do.", answers: ["PAVEL: But my uncle does.", "But my uncle does."] },
        { wrong: "ANNA: What did you did there?", answers: ["ANNA: What did you do there?", "What did you do there?"] }
      ]
    },

    /* ================= 4 · LAST WEEKEND ================= */
    { type: "part", n: "04", icon: "skate", title: "Last weekend", text: "go + do in the past." },

    {
      type: "gapfill", label: "past · my weekend", sticker: "skate",
      title: "What did you do?",
      instructions: "Use <b>go</b> or <b>do</b> in the right form. Look at the hints.",
      items: [
        { text: "Last Saturday I [[did]] nothing in the morning — I just relaxed.", why: "do nothing; past → did." },
        { text: "In the afternoon my friend and I [[went shopping]]" + H("go + shop") + ".", why: "go + -ing; past → went shopping." },
        { text: "We [[didn't buy|did not buy]]" + H("not / buy") + " much because everything was expensive.", why: "didn’t + first form." },
        { text: "Then we [[went to]]" + H("go") + " the movies.", why: "go to + a place; past → went to." },
        { text: "In the evening Mom asked: “[[Did]] you [[do]] your homework?”", why: "Did you + do (first form)." },
        { text: "I said: “No, I [[didn't|did not]]. I’m [[going to]] do it tomorrow.”", why: "short answer: No, I didn’t. A plan → going to." },
        { text: "On Sunday morning Dad [[did]] the laundry and I [[did]] the dishes.", why: "do the laundry / do the dishes; past → did." },
        { text: "After lunch we all [[went]]" + H("go") + " for a walk in the park.", why: "go → went." },
        { text: "My brother [[went swimming]]" + H("go + swim") + " at the pool.", why: "go + -ing; past → went swimming." },
        { text: "At 10 p.m. I [[went]]" + H("go") + " to bed — I was so tired!", why: "go → went." }
      ]
    },

    {
      type: "tf2", label: "reading · a blog", sticker: "pin",
      title: "Sam’s weekend",
      instructions: "Read Sam’s blog post. True or false? If it’s false, choose the correct sentence.",
      text: `<div class="blog"><h4>My crazy weekend 🛼</h4>
          <p>Last weekend was busy! On Saturday morning I did the laundry and the dishes because Mom was at work. Then I went to the mall with my sister. She went shopping, and I went to the arcade. In the evening we went skating — I fell three times!</p>
          <p>On Sunday I did nothing in the morning. In the afternoon I did my homework (math — terrible). My dad works at a bank, but on Sundays he does the gardening. Next weekend we’re going to visit our grandparents in Denver. We’re going to go skiing!</p></div>`,
      items: [
        { q: "Sam’s mom was at work on Saturday morning.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Sam did the laundry on Sunday.", answer: false, fix: ["He did it on Saturday morning.", "His mom did it.", "He didn’t do it."], fixAnswer: 0 },
        { q: "Sam and his sister went shopping together.", answer: false, fix: ["His sister went shopping, and Sam went to the arcade.", "They went skiing.", "They stayed home."], fixAnswer: 0 },
        { q: "They went skating on Saturday evening.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Sam didn’t fall when he went skating.", answer: false, fix: ["He fell once.", "He fell three times.", "His sister fell."], fixAnswer: 1 },
        { q: "On Sunday morning Sam relaxed.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Sam’s homework was easy.", answer: false, fix: ["It was terrible.", "He didn’t have homework.", "It was English."], fixAnswer: 0 },
        { q: "Sam’s dad works as a gardener.", answer: false, fix: ["He works at a bank.", "He’s a teacher.", "He doesn’t work."], fixAnswer: 0 },
        { q: "Next weekend they’re going to Denver.", answer: true, fix: [], fixAnswer: 0 },
        { q: "They went skiing last weekend.", answer: false, fix: ["They’re going to go skiing next weekend.", "They went skiing on Sunday.", "They never go skiing."], fixAnswer: 0 }
      ]
    },

    /* ================= 5 · TALK ================= */
    { type: "part", n: "05", icon: "metro", title: "Your turn", text: "Spin it — I ask, you answer. Then you ask me." },

    {
      type: "wheel", label: "speaking · go & do", sticker: "pin",
      title: "Spin the subway map",
      start: "Spin the wheel. Answer in 3–4 sentences. Then ask me the same question!",
      colors: ["#E03C31", "#0072CE", "#FCCC0A", "#00A651"],
      items: [
        { icon: "🗓️", short: "last weekend", q: "Where did you <b>go</b> last weekend? What did you <b>do</b> there?" },
        { icon: "🛋️", short: "Saturdays", q: "What do you usually <b>do</b> on Saturdays? Do you ever <b>do</b> nothing?" },
        { icon: "🧺", short: "housework", q: "What housework do you <b>do</b>? Which job do you hate?" },
        { icon: "❄️", short: "winter", q: "Where are you <b>going to go</b> in the winter break?" },
        { icon: "👩‍⚕️", short: "jobs", q: "What do your parents <b>do</b>? What do you want to <b>do</b>?" },
        { icon: "🏊", short: "activities", q: "Do you <b>go</b> swimming, skating or dancing? How often?" },
        { icon: "📍", short: "first time", q: "What’s the last new place you <b>went</b> to? Did you like it?" },
        { icon: "🥱", short: "bored", q: "What do you <b>do</b> when you’re bored? Where do you <b>go</b>?" }
      ]
    },

    /* ================= 6 · SPEED ================= */
    { type: "part", n: "06", icon: "stopwatch", title: "Speed", text: "Make it automatic." },

    {
      type: "drill", label: "automaticity · speed drill", sticker: "stopwatch",
      title: "Twelve quick answers, twice each",
      instructions: "Type the answer and press <b>Enter</b>. Each one must be right <b>twice</b>.",
      items: [
        { cue: "past", prompt: "go", answers: ["went"] },
        { cue: "V3", prompt: "go", answers: ["gone"] },
        { cue: "past", prompt: "do", answers: ["did"] },
        { cue: "V3", prompt: "do", answers: ["done"] },
        { cue: "go + ?", prompt: "swim", answers: ["go swimming"] },
        { cue: "go + ?", prompt: "shop", answers: ["go shopping"] },
        { cue: "go + ?", prompt: "home", answers: ["go home"] },
        { cue: "go + ?", prompt: "the movies", answers: ["go to the movies"] },
        { cue: "do + ?", prompt: "wash plates", answers: ["do the dishes"] },
        { cue: "do + ?", prompt: "wash clothes", answers: ["do the laundry"] },
        { cue: "past ?", prompt: "where / you / go / last weekend", answers: ["Where did you go last weekend?"] },
        { cue: "past ?", prompt: "what / you / do / yesterday", answers: ["What did you do yesterday?"] }
      ]
    },

    /* ================= 7 · WRITING ================= */
    { type: "part", n: "07", icon: "pencil", title: "Writing", text: "Last Saturday and next Saturday." },

    {
      type: "write", label: "writing · two Saturdays", sticker: "pencil",
      title: "Two Saturdays",
      instructions: "Write <b>6 sentences</b>: 3 about <b>last</b> Saturday (what did you do, where did you go) and 3 about <b>next</b> Saturday (going to).",
      words: ["went", "did", "going to", "go", "do", "swimming", "shopping", "home", "dishes", "laundry", "housework", "homework", "nothing"],
      checks: [
        { label: "went / did — twice", pattern: "\\b(went|did)\\b", min: 2 },
        { label: "going to — twice", pattern: "\\bgoing to\\b", min: 2 },
        { label: "go + -ing (swimming, shopping…)", pattern: "\\b(go|goes|went|going)\\s+(swimming|shopping|skating|skiing|dancing|fishing|sightseeing|bowling|running|hiking|biking|cycling)\\b" },
        { label: "no “go to home / go to swimming”", pattern: "^(?![\\s\\S]*\\b(go|goes|went|going)\\s+(to|for|at)\\s+(home|there|swimming|shopping|skating|skiing|dancing|fishing|sightseeing)\\b)[\\s\\S]+$" },
        { label: "at least 6 sentences", sentences: 6 }
      ],
      sample: "Last Saturday I did my homework in the morning. In the afternoon I went shopping with my mom. In the evening I did nothing — I just watched a movie. Next Saturday I’m going to go skating with my friends. Then we’re going to go to a café. I’m going to go home at 8."
    },

    /* ================= 8 · SELF-CHECK ================= */
    { type: "part", n: "08", icon: "star", title: "Self-check", text: "What to look at again." },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
