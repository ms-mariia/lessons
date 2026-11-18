const IMG = f => "assets/img/" + f;
const LESSON = {
  id: "match-report-evu41-egu5-6",
  kicker: "sport & leisure · past tenses",
  titleHTML: 'Match<br><em>Report</em>',
  title: "Match Report",
  subtitle: "Who plays where, what you did and what you were doing when it happened.",
  stickers: ["medal", "tennis"],
  confetti: ["medal", "ball", "trophy", "star", "flag"],

  sections: [

    /* ================= 1 · WARM-UP ================= */
    { type: "part", n: "01", icon: "stadium", title: "Warm-up", text: "Four places, four sports." },

    {
      type: "rule", label: "warm-up · look and talk", sticker: "goal",
      title: "Where are we?",
      html: `
        <div class="photos">
          <figure class="photo"><img loading="lazy" alt="A woman climbing a rock wall with a rope" src="${IMG("climbing.jpg")}"><figcaption><b>A</b><small>Photo: kallerna · CC BY-SA 3.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="An outdoor ice rink seen from above" src="${IMG("rink.jpg")}"><figcaption><b>B</b><small>Photo: Gabriel Picard · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="A skier on a wide snowy slope" src="${IMG("piste.jpg")}"><figcaption><b>C</b><small>Photo: DimiTalen · CC0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="A clay tennis court with red seats" src="${IMG("court.jpg")}"><figcaption><b>D</b><small>Photo: Johann Jaritz · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
        </div>
        <ol class="qs">
          <li>For each photo: what’s the <b>sport</b>, what’s the <b>place</b> called, and what do we call the <b>person</b>?</li>
          <li>Which of these have you tried? <b>This is a past story:</b> when was the first time, and what happened?</li>
          <li>What sport do you watch, and where — at home, in a stadium, online?</li>
        </ol>
        <div class="notes-tip"><img src="assets/emoji/megaphone.png" alt=""><div><b>English only.</b> Stuck? Use: <i>How do you say…? · What’s the English for…? · Can you explain…? · I mean… · It’s like a…</i></div></div>`
    },

    /* ================= 2 · TENSE CHECK ================= */
    { type: "part", n: "02", icon: "stopwatch", title: "Tense check", text: "Now or usually? Quick, before we go back in time." },

    {
      type: "mcq", label: "review · present simple / continuous", sticker: "stopwatch",
      title: "Now or usually?",
      instructions: "Choose the correct form. Remember the verbs we don’t use in continuous: <b>know, understand, need, want, like</b>…",
      items: [
        { q: "Look! The goalkeeper ___ the ball with one hand.", options: ["is catching", "catches"], answer: 0 },
        { q: "My brother ___ basketball twice a week.", options: ["is playing", "plays"], answer: 1 },
        { q: "“Where’s Mia?” “She ___ out in the gym. She’ll be back at six.”", options: ["works", "is working"], answer: 1 },
        { q: "I ___ what “rink” means. Can you explain?", options: ["don’t understand", "am not understanding"], answer: 0 },
        { q: "How often ___ to the swimming pool?", options: ["are you going", "do you go"], answer: 1 },
        { q: "This week I ___ a bit of yoga every morning — it’s a new challenge for me.", options: ["do", "am doing"], answer: 1 },
        { q: "Skiers ___ special boots and skis.", options: ["are needing", "need"], answer: 1 },
        { q: "Why ___ so fast? Is someone chasing you?", options: ["do you run", "are you running"], answer: 1 },
        { q: "Our team usually ___ on Saturdays.", options: ["plays", "is playing"], answer: 0 },
        { q: "I ___ this match at all — it’s so boring! Can we watch something else?", options: ["don’t enjoy", "am not enjoying"], answer: 1 }
      ]
    },

    /* ================= 3 · WORDS ================= */
    { type: "part", n: "03", icon: "medal", title: "Sport and leisure", text: "Sports, people, places — and play, go or do." },

    {
      type: "rule", label: "vocabulary · sport and leisure", sticker: "ball",
      title: "Who, what, where",
      html: `
        <table class="sp">
          <tr><th>sport</th><th>person</th><th>verb</th><th>place</th></tr>
          <tr><td><b>track and field</b></td><td><b>athlete</b></td><td>run, jump, throw</td><td><b>track</b> (in a <b>stadium</b>)</td></tr>
          <tr><td><b>motor racing</b></td><td><b>racing driver</b></td><td>drive / <b>race</b></td><td>track</td></tr>
          <tr><td><b>swimming</b></td><td><b>swimmer</b></td><td>swim / race</td><td>pool</td></tr>
          <tr><td><b>boxing</b></td><td><b>boxer</b></td><td><b>box</b> / fight</td><td><b>boxing ring</b></td></tr>
          <tr><td>skiing</td><td><b>skier</b></td><td><b>ski</b></td><td>ski slopes</td></tr>
          <tr><td>soccer</td><td>soccer player</td><td>play</td><td><b>field</b> (in a stadium)</td></tr>
          <tr><td><b>ice hockey</b></td><td>ice hockey player</td><td>play</td><td>ice hockey <b>rink</b></td></tr>
          <tr><td>golf</td><td>golfer</td><td>play</td><td>golf <b>course</b></td></tr>
          <tr><td>basketball / tennis</td><td>basketball / tennis player</td><td>play</td><td><b>court</b></td></tr>
          <tr><td><b>sailing</b></td><td><b>sailor</b></td><td><b>sail</b></td><td>on the sea or a lake</td></tr>
        </table>
        <p style="font-size:15px;color:var(--muted)">Equipment: a <b>net</b> · <b>skis</b> · an ice hockey <b>stick</b> · a <b>swimming costume</b> · the <b>goalkeeper</b> stands in front of the net.</p>
        <div class="grid2">
          <div class="box"><h4>play + ball games</h4><p>I <b>play</b> basketball twice a week.</p></div>
          <div class="box sand"><h4>go + -ing</h4><p>We often <b>go</b> rock climb<b>ing</b>. · <b>go</b> camping</p></div>
        </div>
        <div class="grid2">
          <div class="box pink"><h4>do + a lot of / a bit of</h4><p>I <b>did a bit of</b> sailing. · She <b>does a lot of</b> yoga.</p></div>
          <div class="box"><h4>leisure</h4><p><b>work out</b> in the gym · it <b>keeps</b> him <b>fit</b> · just <b>for fun</b> (= for pleasure) · I don’t <b>do</b> any <b>exercise</b>.</p></div>
        </div>`
    },

    {
      type: "sort", label: "vocabulary · sort", sticker: "puzzle",
      title: "Person, place or equipment?",
      instructions: "Drag each word into the right column — or tap a word, then tap a column.",
      categories: [
        { name: "person", words: ["golfer", "athlete", "goalkeeper"] },
        { name: "place", words: ["court", "track", "field", "rink"] },
        { name: "equipment", words: ["net", "skis", "stick"] }
      ]
    },

    {
      type: "match", label: "vocabulary · match", sticker: "skier",
      title: "Sport → person · place",
      instructions: "Match each sport with its person and its place.",
      pairs: [
        ["skiing", "skier · ski slopes"],
        ["track and field", "athlete · track"],
        ["motor racing", "racing driver · track (for cars)"],
        ["boxing", "boxer · ring"],
        ["swimming", "swimmer · pool"],
        ["soccer", "soccer player · field"],
        ["ice hockey", "player · rink"],
        ["golf", "golfer · course"],
        ["basketball", "player · court"],
        ["sailing", "sailor · the sea or a lake"]
      ]
    },

    {
      type: "gapfill", label: "vocabulary · play, go, do", sticker: "basketball",
      title: "Play, go or do?",
      instructions: "Write <b>one</b> word in each gap. Watch the tense!",
      items: [
        { text: "We [[play]] volleyball at school every Thursday.", why: "play + ball games; present simple (every Thursday)." },
        { text: "Do you [[do]] much exercise?", why: "do exercise." },
        { text: "Every winter we [[go]] skiing in the Carpathians.", why: "go + -ing activity." },
        { text: "My mom [[does]] a bit of yoga before work.", why: "do a bit of + activity; she → does." },
        { text: "Last summer we [[went]] camping by a lake.", why: "go camping; last summer → past → went." },
        { text: "My dad [[works]] out in the gym three times a week.", why: "work out = do exercise; he → works." },
        { text: "Running helps me to keep [[fit]].", why: "keep fit = stay in good condition." },
        { text: "She isn’t a professional golfer — she just plays for [[fun|pleasure]].", why: "for fun / for pleasure = because you enjoy it." },
        { text: "I [[did]] a lot of swimming in the summer vacation.", why: "do a lot of + -ing; past → did." },
        { text: "The two boxers are fighting in the [[ring]].", why: "boxing → (boxing) ring." }
      ]
    },

    /* ================= 4 · GRAMMAR ================= */
    { type: "part", n: "04", icon: "flag", title: "Grammar", text: "I did and I was doing." },

    {
      type: "rule", label: "theory · past simple + past continuous", sticker: "trophy",
      title: "Back in time",
      html: `
        <h3>Past simple (I did)</h3>
        <div class="grid2">
          <div class="box"><h4>regular: -ed</h4><p>play → play<b>ed</b> · stop → sto<b>pp</b>ed · study → stud<b>ied</b></p></div>
          <div class="box sand"><h4>irregular</h4><p>go → <b>went</b> · catch → <b>caught</b> · teach → <b>taught</b> · fall → <b>fell</b> · cost → <b>cost</b></p></div>
        </div>
        <table class="form">
          <tr><th>−</th><td>We <b>didn’t enjoy</b> the match. <i>(did + infinitive, not <s>didn’t enjoyed</s>)</i></td></tr>
          <tr><th>?</th><td><b>Did</b> you <b>go</b> out? · What <b>did</b> you <b>do</b> on the weekend? <i>(not <s>What did you on the weekend?</s>)</i></td></tr>
          <tr><th>be</th><td>I / he / she / it <b>was</b> · we / you / they <b>were</b> · <b>Was</b> the weather good?</td></tr>
        </table>
        <div class="note">⚠️ <b>Who</b> is the subject → no <i>did</i>: <b>Who taught</b> you to sail? (not <s>Who did teach</s>)</div>
        <h3>Past continuous (I was doing)</h3>
        <div class="tl" aria-hidden="true">
          <div class="sp" style="--x:6%;--w:60%"><b>they were playing</b><i>in the middle</i></div>
          <div class="pt e" style="--x:40%"><b>10.30</b><i>this moment</i></div>
          <div class="now"></div>
        </div>
        <p>They started at 10 and finished at 11.30. At 10.30 they <b>were playing</b> — in the middle, not finished.</p>
        <div class="grid2">
          <div class="box"><h4>I was doing = in the middle</h4><p>We <b>were walking</b> home when I <b>met</b> Dan.</p></div>
          <div class="box pink"><h4>I did = complete</h4><p>We <b>walked</b> home after the match. <i>(all the way)</i></p></div>
        </div>
        <div class="grid2">
          <div class="box sand"><h4>one after another → past simple</h4><p>When Karen <b>arrived</b>, we <b>had</b> dinner. <i>(she came, then dinner)</i></p></div>
          <div class="box sand"><h4>already in the middle</h4><p>When Karen <b>arrived</b>, we <b>were having</b> dinner. <i>(we started before)</i></p></div>
        </div>
        <div class="note">⚠️ <b>know, want, understand, like, need</b> — no -ing: We <b>knew</b> each other well. (not <s>were knowing</s>)</div>`
    },

    {
      type: "gapfill", label: "grammar · past simple + / −", sticker: "boxing",
      title: "Positive or negative?",
      instructions: "Put the verb into the <b>past simple</b>. Decide: positive or negative?",
      items: [
        { text: "It was warm, so the runners [[took]] <span class=hint>(take)</span> off their jackets.", why: "take → took (irregular)." },
        { text: "The match wasn’t very good. We [[didn't enjoy|did not enjoy]] <span class=hint>(enjoy)</span> it much.", why: "Negative: didn’t + infinitive." },
        { text: "The goalkeeper [[caught]] <span class=hint>(catch)</span> the ball and threw it to a defender.", why: "catch → caught (irregular)." },
        { text: "I knew the team was training, so I [[didn't disturb|did not disturb]] <span class=hint>(disturb)</span> them.", why: "Negative: didn’t disturb." },
        { text: "We were very tired after the race, so we [[left]] <span class=hint>(leave)</span> the stadium early.", why: "leave → left (irregular)." },
        { text: "The new skis were really expensive. They [[cost]] <span class=hint>(cost)</span> almost 20,000 hryvnias.", why: "cost → cost (no change)." },
        { text: "The hotel bed was uncomfortable. I [[didn't sleep|did not sleep]] <span class=hint>(sleep)</span> well before the competition.", why: "Negative: didn’t sleep." },
        { text: "She fell on the ice and [[hurt]] <span class=hint>(hurt)</span> her knee.", why: "hurt → hurt (no change)." },
        { text: "Our coach [[taught]] <span class=hint>(teach)</span> us how to sail.", why: "teach → taught (irregular)." },
        { text: "I didn’t like the pool. The water [[wasn't|was not]] <span class=hint>(be)</span> very clean.", why: "be → was/wasn’t (the water = it)." }
      ]
    },

    {
      type: "gapfill", label: "grammar · past simple questions", sticker: "sailboat",
      title: "Interview with a sailor",
      instructions: "You ask Olena about her sailing trip. Write the questions.",
      items: [
        { text: "Where [[did you go]] <span class=hint>(you / go)</span>? — To Greece. We sailed around the islands.", why: "Where + did + you + go." },
        { text: "How long [[did the trip take]] <span class=hint>(the trip / take)</span>? — Ten days.", why: "did + subject + infinitive." },
        { text: "[[Did you sail]] <span class=hint>(you / sail)</span> every day? — Yes, except one day when the wind was too strong.", why: "Yes/no question: Did + you + infinitive." },
        { text: "Where [[did you sleep]] <span class=hint>(you / sleep)</span>? — On the boat.", why: "Where + did + you + sleep." },
        { text: "[[Was the weather]] <span class=hint>(the weather / be)</span> good? — Mostly, but it was very windy.", why: "be → Was + the weather." },
        { text: "[[Were you]] <span class=hint>(you / be)</span> scared during the storm? — Only a little.", why: "you → were." },
        { text: "What [[did you do]] <span class=hint>(you / do)</span> in the evenings? — We cooked fish and played cards.", why: "do is the main verb → What did you do." },
        { text: "Who [[taught you]] <span class=hint>(teach / you)</span> to sail? — My uncle.", why: "Who is the subject → no did: Who taught you." },
        { text: "How much [[did it cost]] <span class=hint>(it / cost)</span>? — About 15,000 hryvnias each.", why: "did + it + cost (infinitive)." },
        { text: "[[Did you enjoy]] <span class=hint>(you / enjoy)</span> it? — Of course! It was wonderful.", why: "Did + you + enjoy." }
      ]
    },

    {
      type: "mcq", label: "grammar · was doing or did?", sticker: "sailboat",
      title: "In the middle or complete?",
      instructions: "Choose the correct form. Read the whole sentence first.",
      items: [
        { q: "The coach ___ for us when we arrived at the stadium.", options: ["waited", "was waiting"], answer: 1 },
        { q: "“What ___ at 7 o’clock yesterday?” “I was at the swimming pool.”", options: ["did you do", "were you doing"], answer: 1 },
        { q: "My friend ___ a photo of me while I wasn’t looking.", options: ["took", "was taking"], answer: 0 },
        { q: "How fast ___ when you fell off your bike?", options: ["did you ride", "were you riding"], answer: 1 },
        { q: "When the coach came in, we ___ the warm-up. (= he came in, then we started)", options: ["started", "were starting"], answer: 0 },
        { q: "When the coach came in, we ___ press-ups. (= we had already started)", options: ["did", "were doing"], answer: 1 },
        { q: "We were in the same team for years. We ___ each other really well.", options: ["knew", "were knowing"], answer: 0 },
        { q: "I ___ home from training when it started to snow.", options: ["walked", "was walking"], answer: 1 },
        { q: "When I was a child, I ___ to be a skier.", options: ["wanted", "was wanting"], answer: 0 },
        { q: "She ___ her knee while she was skiing.", options: ["hurt", "was hurting"], answer: 0 }
      ]
    },

    {
      type: "rephrase", label: "grammar · stay in the past", sticker: "repeat",
      title: "This is a past story",
      instructions: "Move each sentence into the <b>past</b>. Use the words in the dark box. Don’t jump back to the present!",
      items: [
        { prompt: "I usually go jogging before school.", key: "YESTERDAY", answers: ["Yesterday I went jogging before school.", "I went jogging before school yesterday."] },
        { prompt: "The players are training on the field.", key: "AT 5 O’CLOCK YESTERDAY", answers: ["At 5 o'clock yesterday the players were training on the field.", "The players were training on the field at 5 o'clock yesterday.", "At five o'clock yesterday the players were training on the field.", "The players were training on the field at five o'clock yesterday."] },
        { prompt: "She doesn’t do any exercise.", key: "LAST YEAR", answers: ["She didn't do any exercise last year.", "Last year she didn't do any exercise."] },
        { prompt: "Do you play ice hockey?", key: "WHEN YOU WERE A CHILD", answers: ["Did you play ice hockey when you were a child?", "When you were a child, did you play ice hockey?"] },
        { prompt: "We are sitting in the café when the match starts.", key: "PAST", answers: ["We were sitting in the café when the match started."] },
        { prompt: "The skier falls while she is going down the slope.", key: "PAST", answers: ["The skier fell while she was going down the slope."] }
      ]
    },

    {
      type: "correct", label: "grammar · fix it", sticker: "detective",
      title: "Find and fix the mistake",
      instructions: "Each sentence has <b>one</b> mistake. Correct it in the box.",
      items: [
        { wrong: "Yesterday I went to the gym and work out for an hour.", answers: ["Yesterday I went to the gym and worked out for an hour."] },
        { wrong: "We were playing tennis when it start to rain.", answers: ["We were playing tennis when it started to rain."] },
        { wrong: "Did you went skiing last winter?", answers: ["Did you go skiing last winter?"] },
        { wrong: "I was knowing the answer, but I didn't say it.", answers: ["I knew the answer, but I didn't say it."] },
        { wrong: "Last weekend we play soccer and then we went home.", answers: ["Last weekend we played soccer and then we went home."] },
        { wrong: "She was fall while she was running.", answers: ["She fell while she was running."] },
        { wrong: "What did you on the weekend?", answers: ["What did you do on the weekend?"] }
      ]
    },

    /* ================= 5 · NMT ================= */
    { type: "part", n: "05", icon: "megaphone", title: "Exam practice", text: "Grammar in a text — like Task 6 of the NMT." },

    {
      type: "mcq", label: "NMT style · grammar in context", sticker: "sailboat",
      title: "My first competition",
      instructions: "Read the story and choose the correct form for each gap. First find the <b>time marker</b> (last March, while, when, now…), then choose.",
      items: [
        { q: "Last March I ___ part in my first climbing competition.", options: ["take", "took", "was taking", "have took"], answer: 1 },
        { q: "Before that, every day after school I ___ to the climbing center to train.", options: ["go", "was going", "went", "am going"], answer: 2 },
        { q: "On the day of the competition, it ___ heavily when we left home.", options: ["rained", "rains", "is raining", "was raining"], answer: 3 },
        { q: "When we ___ at the center, I felt really nervous.", options: ["arrived", "arrive", "were arriving", "are arriving"], answer: 0 },
        { q: "While I ___ for my turn, I watched the other climbers.", options: ["waited", "wait", "was waiting", "am waiting"], answer: 2 },
        { q: "One girl ___ off the wall, but luckily she wasn’t hurt.", options: ["was falling", "fell", "falls", "has fell"], answer: 1 },
        { q: "When they called my name, I ___ my shoes, so I had to hurry.", options: ["tied", "still tie", "was still tying", "am still tying"], answer: 2 },
        { q: "I ___ the top of the wall in just two minutes!", options: ["reach", "was reaching", "am reaching", "reached"], answer: 3 },
        { q: "I ___ win a medal — I came fifth.", options: ["didn’t", "wasn’t", "don’t", "not"], answer: 0 },
        { q: "Now I ___ at the climbing center three times a week.", options: ["trained", "train", "was training", "am train"], answer: 1 }
      ]
    },

    /* ================= 6 · DRILL ================= */
    { type: "part", n: "06", icon: "zap", title: "Speed drill", text: "Choose the tense without thinking." },

    {
      type: "drill", label: "automaticity · speed drill", sticker: "stopwatch",
      title: "Twelve sentences, twice each",
      instructions: "Look at the tense in small letters, build the sentence and press <b>Enter</b>. Each one must be right <b>twice</b>. A mistake sends it back.",
      items: [
        { cue: "present simple", prompt: "I / play / basketball / twice a week", answers: ["I play basketball twice a week."] },
        { cue: "past simple", prompt: "we / go camping / last summer", answers: ["We went camping last summer.", "Last summer we went camping."] },
        { cue: "present simple", prompt: "she / do / a bit of yoga / every morning", answers: ["She does a bit of yoga every morning."] },
        { cue: "past simple", prompt: "he / work out / in the gym / yesterday", answers: ["He worked out in the gym yesterday.", "Yesterday he worked out in the gym."] },
        { cue: "present simple", prompt: "swimming / keep / me / fit", answers: ["Swimming keeps me fit."] },
        { cue: "past simple −", prompt: "I / not / do / any exercise / last week", answers: ["I didn't do any exercise last week.", "Last week I didn't do any exercise."] },
        { cue: "past simple ?", prompt: "what / you / do / on the weekend?", answers: ["What did you do on the weekend?"] },
        { cue: "past continuous + past simple", prompt: "we / play / tennis / when / it / start / to rain", answers: ["We were playing tennis when it started to rain."] },
        { cue: "past simple + past continuous", prompt: "she / fall / while / she / ski", answers: ["She fell while she was skiing."] },
        { cue: "past simple · subject question", prompt: "who / teach / you / to swim?", answers: ["Who taught you to swim?"] },
        { cue: "past continuous", prompt: "they / train / on the field / at 5 o’clock", answers: ["They were training on the field at 5 o'clock.", "They were training on the field at five o'clock."] },
        { cue: "present simple", prompt: "he / just / play / golf / for fun", answers: ["He just plays golf for fun."] }
      ]
    },

    /* ================= 7 · SPEAKING + WRITING ================= */
    { type: "part", n: "07", icon: "tv", title: "Your story", text: "Tell it twice, then write it." },

    {
      type: "rule", label: "speaking · two-minute story", sticker: "megaphone",
      title: "Tell it, then tell it again",
      html: `
        <p>Say <b>“This is a past story”</b> before you start. Then speak for <b>two minutes</b> about one of these:</p>
        <ol class="qs">
          <li>A match or competition you watched or took part in.</li>
          <li>The first time you tried a new sport or activity.</li>
          <li>A day when something went wrong in the gym, on the field, on the ice or in the pool.</li>
        </ol>
        <p>Use <b>5 words</b> from today and both tenses: <i>I was … -ing when …</i> · <i>While we were …, …</i></p>
        <div class="note">↺ Tell the same story <b>again</b> straight away. The second time: <b>zero</b> jumps into the present.</div>`
    },

    {
      type: "write", label: "writing · a story", sticker: "notebook",
      title: "A day I remember",
      instructions: "Now write your story in <b>5–7 sentences</b>. Stay in the past from the first word to the last.",
      words: ["athlete", "goalkeeper", "field", "court", "track", "rink", "stadium", "skier", "skis", "net", "work out", "keep fit", "for fun", "exercise", "camping", "climbing", "race", "sail"],
      checks: [
        { label: "past simple — at least 4 verbs", pattern: "\\b(\\w+ed|went|took|was|were|had|saw|won|lost|came|fell|got|ran|did|made|caught|left|felt|threw|hurt|taught|began|swam|rode|met)\\b", min: 4 },
        { label: "was / were + -ing — at least once", pattern: "\\b(was|were)\\s+(not\\s+)?\\w+ing\\b" },
        { label: "when or while", pattern: "\\b(when|while)\\b" },
        { label: "3+ words from today (they light up above)", words: 3 },
        { label: "at least 5 sentences", sentences: 5 }
      ],
      sample: "Last February my class went to an ice rink in the city center. I didn’t skate very well, so I was holding my friend’s hand all the time. While we were going round the rink, a little boy fell in front of us. We stopped and helped him. Then a coach saw us and taught us how to stop safely. In the evening I was really tired, but I enjoyed every minute of it."
    },

    /* ================= 8 · SELF-CHECK ================= */
    { type: "part", n: "08", icon: "trophy", title: "Self-check", text: "What to look at again." },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
