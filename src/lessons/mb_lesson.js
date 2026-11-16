const IMG = f => "assets/img/" + f;
const LESSON = {
  id: "team-be-team-do-egiu1-2-23",
  kicker: "am / is / are · do / does",
  titleHTML: 'Team <em>BE</em><br>vs Team <i>DO</i>',
  title: "Team BE vs Team DO",
  subtitle: "Two teams. They never play together: no more “I am go”.",
  stickers: ["joystick", "trophy"],
  confetti: ["trophy", "star", "blueheart", "redheart", "sparkles"],

  sections: [

    /* ================= 1 · WARM-UP ================= */
    { type: "part", n: "01", icon: "joystick", title: "Warm-up", text: "Look, ask, answer." },

    {
      type: "rule", label: "warm-up · look and talk", sticker: "bulb",
      title: "Is it…? Does it…?",
      html: `
        <div class="photos">
          <figure class="photo"><img loading="lazy" alt="A cat sleeping on its back in a chair" src="${IMG("cat.jpg")}"><figcaption><b>A</b><small>Photo: Basile Morin · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="A pepperoni pizza on a plate" src="${IMG("pizza.jpg")}"><figcaption><b>B</b><small>Photo: Rjcastillo · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo wide"><img loading="lazy" alt="A very big library reading room" src="${IMG("library.jpg")}"><figcaption><b>C</b><small>Photo: Diliff · CC BY 2.5 · Wikimedia Commons</small></figcaption></figure>
        </div>
        <ol class="qs">
          <li>A: <b>Is</b> the cat tired? <b>Does</b> it sleep a lot? <b>Are</b> you a cat person or a dog person?</li>
          <li>B: <b>Is</b> the pizza hot? <b>Do</b> you like pepperoni? How often <b>do</b> you eat pizza?</li>
          <li>C: <b>Is</b> the room big? <b>Are</b> the people quiet? <b>Do</b> you go to the library?</li>
        </ol>`
    },

    /* ================= 2 · AM / IS / ARE ================= */
    { type: "part", n: "02", icon: "blueheart", title: "Team BE", text: "Essential Grammar in Use · Units 1–2" },

    {
      type: "rule", label: "grammar · am / is / are", sticker: "blueheart",
      title: "am / is / are",
      html: `
        <table class="qtable">
          <tr><th></th><th>+</th><th>−</th><th>?</th></tr>
          <tr><td>I</td><td><b>am</b> (I’m)</td><td><b>am not</b> (I’m not)</td><td><b>Am</b> I…?</td></tr>
          <tr><td>he / she / it</td><td><b>is</b> (she’s)</td><td><b>isn’t</b></td><td><b>Is</b> she…?</td></tr>
          <tr><td>we / you / they</td><td><b>are</b> (they’re)</td><td><b>aren’t</b></td><td><b>Are</b> they…?</td></tr>
        </table>
        <p>Team BE comes with <b>how</b> (tired, hungry, cold), <b>who / what</b> (a student, 15), <b>where</b> (at home, from Kyiv):</p>
        <div class="legend">
          <div class="lg c-who"><b>Who?</b><span>My sister</span></div>
          <div class="lg c-be"><b>am / is / are</b><span>is</span></div>
          <div class="lg c-desc"><b>How? What?</b><span>15.</span></div>
        </div>
        <div class="arrow">↓ question: the BE card jumps to the front</div>
        <div class="legend">
          <div class="lg c-beq"><b>am / is / are</b><span>Is</span></div>
          <div class="lg c-who"><b>Who?</b><span>your sister</span></div>
          <div class="lg c-desc"><b>How? What?</b><span>15?</span></div>
        </div>
        <div class="colloc">
          <div>“<b>Are</b> you tired?” “Yes, I <b>am</b>.” / “No, I’<b>m not</b>.”</div>
          <div><b>Where are</b> you from? · <b>How old is</b> your brother? · <b>What’s</b> your name?</div>
          <div>⚠️ <b>Is</b> your mom at home? (not <s>Is at home your mom?</s>)</div>
        </div>`
    },

    {
      type: "gapfill", label: "grammar · am / is / are", sticker: "bulb",
      title: "am, is or are?",
      instructions: "Write <b>am, is, are, isn’t</b> or <b>aren’t</b>.",
      items: [
        { text: "The weather [[is]] nice today.", why: "the weather = it → is." },
        { text: "I [[am]] not hungry, but I [[am]] thirsty.", why: "I → am." },
        { text: "These bags [[are]] heavy.", why: "these bags = they → are." },
        { text: "My brother and I [[are]] good friends.", why: "my brother and I = we → are." },
        { text: "Emma [[is]] at home. Her children [[are]] at school.", why: "Emma → is; children → are." },
        { text: "“[[Are]] you from Kyiv?” “No, I’m from Lviv.”", why: "you → Are you…?" },
        { text: "“[[Is]] your mom a doctor?” “Yes, she [[is]].”", why: "your mom = she → Is…? Yes, she is." },
        { text: "Those sneakers [[aren’t|arent|are not]] new. They’re old.", why: "they → aren’t." },
        { text: "It’s sunny today, but it [[isn’t|isnt|is not]] warm.", why: "it → isn’t." },
        { text: "How old [[is]] your sister?", why: "your sister = she → is." }
      ]
    },

    {
      type: "build", label: "grammar · BE questions", sticker: "blueheart",
      title: "The BE card jumps to the front",
      instructions: "Tap a card, then tap a slot. <b>One card is wrong</b> — leave it out.",
      items: [
        { beq: "Are", who: "you", desc: "tired", when: "today", wrong: "Do", end: "?" },
        { beq: "Is", who: "your mom", where: "at home", wrong: "Does", end: "?" },
        { qw: "Where", beq: "are", who: "your friends", when: "now", wrong: "do", end: "?" },
        { qw: "How old", beq: "is", who: "your brother", wrong: "does", end: "?" },
        { beq: "Are", who: "these sneakers", desc: "new", wrong: "Is", end: "?" },
        { qw: "Why", beq: "is", who: "the cat", desc: "so tired", wrong: "does", end: "?" }
      ]
    },

    /* ================= 3 · BE OR DO ================= */
    { type: "part", n: "03", icon: "swords", title: "BE vs DO", text: "Essential Grammar in Use · Unit 23" },

    {
      type: "rule", label: "grammar · two teams", sticker: "swords",
      title: "They never play together",
      html: `
        <div class="teams">
          <div class="team be"><h4>Team BE</h4>
            <p><b>am / is / are</b> + how · who · where · age</p>
            <p>I’m <b>tired</b>. · She’s <b>15</b>. · They’re <b>at home</b>.</p>
            <p>? <b>Are</b> you tired? · − I’<b>m not</b> tired.</p>
          </div>
          <div class="team do"><h4>Team DO</h4>
            <p><b>a verb</b>: go, like, play, live, have…</p>
            <p>I <b>go</b>. · She <b>goes</b>. · They <b>live</b> in Kyiv.</p>
            <p>? <b>Do</b> you go…? · − I <b>don’t</b> go.</p>
          </div>
        </div>
        <div class="vs">⚔️ never: <s>I am go</s> · <s>She is like</s> · <s>Are you like?</s> · <s>Do you tired?</s></div>
        <div class="rcard">
          <div><b>test</b><span>Is there a verb (go, like, work)? → <b>Team DO</b>. No verb? → <b>Team BE</b>.</span></div>
          <div><b>-ing</b><span>Team BE can take a verb only with <b>-ing</b> (= now): I <b>am going</b> now. · She <b>is working</b> today.</span></div>
        </div>
        <div class="colloc">
          <div>I <s>am go</s> to school at 8. → I <b>go</b> to school at 8.</div>
          <div><s>Are you like</s> pizza? → <b>Do you like</b> pizza?</div>
          <div>My sister <s>doesn’t hungry</s>. → My sister <b>isn’t</b> hungry.</div>
        </div>`
    },

    {
      type: "sort", label: "teams · sort it", sticker: "trophy",
      title: "I’m… or I…?",
      instructions: "Finish the sentence. Does it need Team BE (<b>I’m</b> …) or Team DO (<b>I</b> + verb)?",
      categories: [
        { name: "Team BE: I’m …", words: ["tired", "at home", "a student", "15 years old", "from Kyiv", "hungry"] },
        { name: "Team DO: I …", words: ["like pizza", "go to school", "play tennis", "watch TV", "live in Kyiv", "have a cat"] }
      ]
    },

    {
      type: "mcq", label: "teams · questions", sticker: "joystick",
      title: "Is / Are or Do / Does?",
      instructions: "Look for the verb first. Verb → Do / Does. No verb → Am / Is / Are.",
      items: [
        { q: "___ you tired?", options: ["Do", "Are", "Does"], answer: 1 },
        { q: "___ you like cats?", options: ["Do", "Are", "Is"], answer: 0 },
        { q: "___ your dad work on Saturdays?", options: ["Is", "Do", "Does"], answer: 2 },
        { q: "___ your parents at home?", options: ["Do", "Are", "Is"], answer: 1 },
        { q: "Where ___ you live?", options: ["are", "do", "is"], answer: 1 },
        { q: "Where ___ your phone?", options: ["does", "is", "do"], answer: 1 },
        { q: "___ the pizza hot?", options: ["Does", "Is", "Do"], answer: 1 },
        { q: "What time ___ the library close?", options: ["is", "does", "are"], answer: 1 },
        { q: "___ she 16?", options: ["Does", "Is", "Do"], answer: 1 },
        { q: "___ you working now? (-ing!)", options: ["Do", "Are", "Does"], answer: 1 }
      ]
    },

    {
      type: "gapfill", label: "teams · negatives", sticker: "redheart",
      title: "Not today!",
      instructions: "Write <b>’m not, isn’t, aren’t, don’t</b> or <b>doesn’t</b>.",
      items: [
        { text: "I’m very tired. I [[don’t|dont|do not]] want to go out.", why: "want is a verb → Team DO: don’t." },
        { text: "I [[am not|'m not]] hungry. I had lunch an hour ago.", why: "hungry — no verb → Team BE: am not." },
        { text: "My brother [[doesn’t|doesnt|does not]] like vegetables.", why: "like is a verb; he → doesn’t." },
        { text: "My parents [[aren’t|arent|are not]] at home. They’re at work.", why: "at home — no verb → aren’t." },
        { text: "Tom [[doesn’t|doesnt|does not]] work on weekends.", why: "work is a verb; Tom = he → doesn’t." },
        { text: "This pizza [[isn’t|isnt|is not]] hot. It’s cold!", why: "hot — no verb → isn’t." },
        { text: "We [[don’t|dont|do not]] have a cat. We have a dog.", why: "have is a verb; we → don’t." },
        { text: "Sorry, I [[don’t|dont|do not]] understand.", why: "understand is a verb → don’t (not I’m not understand)." },
        { text: "Anna [[isn’t|isnt|is not]] a student. She’s a teacher.", why: "a student — no verb → isn’t." },
        { text: "You can turn off the TV. I [[am not|'m not]] watching it.", why: "watching = -ing → Team BE: I’m not watching." }
      ]
    },

    {
      type: "correct", label: "fix it · I am go", sticker: "bulb",
      title: "Find and fix the mistake",
      instructions: "Each sentence has <b>one</b> mistake. Write the correct sentence.",
      items: [
        { wrong: "I am go to school at 8.", answers: ["I go to school at 8.", "I'm going to school at 8.", "I am going to school at 8."] },
        { wrong: "She is like music.", answers: ["She likes music."] },
        { wrong: "Are you like pizza?", answers: ["Do you like pizza?"] },
        { wrong: "He is work in a bank.", answers: ["He works in a bank.", "He is working in a bank.", "He's working in a bank."] },
        { wrong: "Do you tired?", answers: ["Are you tired?"] },
        { wrong: "I'm not understand.", answers: ["I don't understand.", "I do not understand."] },
        { wrong: "My sister doesn't hungry.", answers: ["My sister isn't hungry.", "My sister is not hungry."] },
        { wrong: "Is she live in Kyiv?", answers: ["Does she live in Kyiv?"] }
      ]
    },

    {
      type: "build", label: "teams · build it", sticker: "trophy",
      title: "Pick the right team card",
      instructions: "Tap a card, then tap a slot. <b>One card is wrong</b> — it’s from the other team.",
      items: [
        { who: "I", does: "go", where: "to school", when: "at 8", wrong: "am", end: "." },
        { who: "My mom", be: "is", where: "at work", when: "now", wrong: "does", end: "." },
        { aux: "Does", who: "your brother", does: "play", what: "football", wrong: "Is", end: "?" },
        { beq: "Are", who: "you", desc: "hungry", wrong: "Do", end: "?" },
        { who: "She", does: "likes", what: "pizza", wrong: "is", end: "." },
        { qw: "Where", aux: "do", who: "you", does: "live", wrong: "are", end: "?" },
        { who: "We", be: "are", desc: "15 years old", wrong: "have", end: "." },
        { qw: "What time", aux: "does", who: "the library", does: "close", wrong: "is", end: "?" }
      ]
    },

    {
      type: "rephrase", label: "role swap · ask me", sticker: "joystick",
      title: "Questions for your teacher",
      instructions: "Make the question. Then <b>ask me</b> — for real!",
      items: [
        { prompt: "you / tired / today", key: "?", answers: ["Are you tired today?"] },
        { prompt: "you / like / coffee", key: "?", answers: ["Do you like coffee?"] },
        { prompt: "you / from / Kyiv", key: "?", answers: ["Are you from Kyiv?"] },
        { prompt: "you / have / a pet", key: "?", answers: ["Do you have a pet?"] },
        { prompt: "where / you / live", key: "?", answers: ["Where do you live?"] },
        { prompt: "how old / your best friend", key: "?", answers: ["How old is your best friend?"] },
        { prompt: "you / play / any sports", key: "?", answers: ["Do you play any sports?"] },
        { prompt: "what / your favorite food", key: "?", answers: ["What is your favorite food?", "What's your favorite food?"] }
      ]
    },

    /* ================= 4 · NMT ================= */
    { type: "part", n: "04", icon: "timer", title: "NMT mini-task", text: "Task 6 style · 6 gaps · timer on: 4 minutes." },

    {
      type: "mcq", label: "NMT · Task 6 style", sticker: "timer",
      title: "My cousin Dan",
      instructions: `<div class="nmt">My cousin Dan <b>(1)</b> ___ 17 years old. He <b>(2)</b> ___ in Chicago with his parents. He <b>(3)</b> ___ like school very much, but he <b>(4)</b> ___ very good at math. Every Saturday he <b>(5)</b> ___ basketball with his friends. “<b>(6)</b> ___ you want to visit me?” he asks me every summer.</div>Choose A, B or C for each gap.`,
      items: [
        { q: "(1)", options: ["A has", "B is", "C does"], answer: 1 },
        { q: "(2)", options: ["A lives", "B is live", "C living"], answer: 0 },
        { q: "(3)", options: ["A isn’t", "B don’t", "C doesn’t"], answer: 2 },
        { q: "(4)", options: ["A is", "B does", "C has"], answer: 0 },
        { q: "(5)", options: ["A is play", "B plays", "C play"], answer: 1 },
        { q: "(6)", options: ["A Are", "B Does", "C Do"], answer: 2 }
      ]
    },

    /* ================= 5 · SPEED ================= */
    { type: "part", n: "05", icon: "stopwatch", title: "Speed", text: "Make it automatic." },

    {
      type: "drill", label: "automaticity · speed drill", sticker: "stopwatch",
      title: "Twelve sentences, twice each",
      instructions: "Build the full sentence and press <b>Enter</b>. Each one must be right <b>twice</b>. A mistake sends it back.",
      items: [
        { cue: "BE +", prompt: "I / tired", answers: ["I'm tired.", "I am tired."] },
        { cue: "DO +", prompt: "I / go / to school / at 8", answers: ["I go to school at 8."] },
        { cue: "DO +", prompt: "she / like / music", answers: ["She likes music."] },
        { cue: "BE −", prompt: "my sister / not / hungry", answers: ["My sister isn't hungry.", "My sister is not hungry."] },
        { cue: "DO −", prompt: "I / not / understand", answers: ["I don't understand.", "I do not understand."] },
        { cue: "DO −", prompt: "he / not / work / on Sundays", answers: ["He doesn't work on Sundays.", "He does not work on Sundays."] },
        { cue: "BE ?", prompt: "you / tired", answers: ["Are you tired?"] },
        { cue: "DO ?", prompt: "you / like / pizza", answers: ["Do you like pizza?"] },
        { cue: "DO ?", prompt: "she / live / in Kyiv", answers: ["Does she live in Kyiv?"] },
        { cue: "BE ?", prompt: "where / your phone", answers: ["Where is your phone?", "Where's your phone?"] },
        { cue: "DO ?", prompt: "where / you / live", answers: ["Where do you live?"] },
        { cue: "BE -ing", prompt: "I / go / to bed / now", answers: ["I'm going to bed now.", "I am going to bed now."] }
      ]
    },

    /* ================= 6 · WRITING ================= */
    { type: "part", n: "06", icon: "pencil", title: "Writing", text: "Me: Team BE + Team DO." },

    {
      type: "write", label: "writing · about me", sticker: "pencil",
      title: "Me in 6 sentences",
      instructions: "Write <b>6 sentences</b> about you: 3 with <b>am / is / are</b> (how, who, where) and 3 with <b>verbs</b> (like, go, play, live…). Make one sentence of each team negative.",
      words: ["am", "is", "are", "'m", "isn't", "aren't", "don't", "doesn't"],
      checks: [
        { label: "Team BE — 3 times (am / is / are)", pattern: "\\b(am|is|are)\\b|\\b\\w+['’](m|s|re)\\b", min: 3 },
        { label: "a Team BE negative (’m not / isn’t / aren’t)", pattern: "\\b(am not|['’]m not|isn['’]?t|is not|aren['’]?t|are not)\\b" },
        { label: "a Team DO negative (don’t / doesn’t)", pattern: "\\b(don['’]?t|do not|doesn['’]?t|does not)\\b" },
        { label: "no “am / is / are + verb” mistake", pattern: "^(?![\\s\\S]*\\b(am|is|are|['’]m|['’]re)\\s+(go|like|live|play|have|want|work|watch|eat|love|understand|know|need|study|read|do)\\b)[\\s\\S]+$" },
        { label: "at least 6 sentences", sentences: 6 }
      ],
      sample: "I’m from Kyiv and my favorite color is green. My best friends are funny. I’m not a morning person. I go to school at 8. I like pizza and K-pop. I don’t play any sports."
    },

    /* ================= 7 · SELF-CHECK ================= */
    { type: "part", n: "07", icon: "star", title: "My mistakes today", text: "Read them, fix them, +1 point for each." },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
