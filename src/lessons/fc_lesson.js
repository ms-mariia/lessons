const IMG = f => "assets/img/" + f;
const LESSON = {
  id: "forecast-evu7-egiu13-14",
  kicker: "weather · was doing & did",
  titleHTML: 'Fore<em>cast</em>',
  title: "Forecast",
  subtitle: "Sun, fog and storms — and what you were doing when it all started.",
  stickers: ["storm", "sun"],
  confetti: ["sun", "snowflake", "droplet", "rainbow", "star"],

  sections: [

    /* ================= 1 · WARM-UP ================= */
    { type: "part", n: "01", icon: "sun-cloud", title: "Warm-up", text: "Look out of the window." },

    {
      type: "rule", label: "warm-up · look and talk", sticker: "umbrella",
      title: "Four kinds of weather",
      html: `
        <div class="photos">
          <figure class="photo"><img loading="lazy" alt="Lightning in a dark night sky" src="${IMG("lightning.jpg")}"><figcaption><b>A</b><small>Photo: Mathias Krumbholz · CC BY-SA 3.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="Two people walking across a field in the morning mist" src="${IMG("fog.jpg")}"><figcaption><b>B</b><small>Photo: Abdul Momin · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="A street covered in deep snow at night" src="${IMG("snowstorm.jpg")}"><figcaption><b>C</b><small>Photo: Wilfredor · CC0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="People with umbrellas in a narrow street on a rainy day" src="${IMG("rain.jpg")}"><figcaption><b>D</b><small>Photo: David Kernan · CC BY 4.0 · Wikimedia Commons</small></figcaption></figure>
        </div>
        <ol class="qs">
          <li>What’s the weather like in each photo? Use as many words as you can.</li>
          <li>Which weather do you love? Which do you hate? Why?</li>
          <li>Think of the last time it really poured with rain. Where were you? What were you doing?</li>
          <li>When do people in Ukraine usually have thick fog, thunderstorms or temperatures below zero?</li>
        </ol>`
    },

    /* ================= 2 · WORDS ================= */
    { type: "part", n: "02", icon: "thermometer", title: "Weather words", text: "Nouns, adjectives and the words they go with." },

    {
      type: "rule", label: "vocabulary · weather conditions", sticker: "cloud",
      title: "Add -y, and it’s an adjective",
      html: `
        <div class="wxgrid">
          <div><img src="assets/emoji/fog.png" alt=""><b>fog → foggy</b></div>
          <div><img src="assets/emoji/cloud.png" alt=""><b>cloud → cloudy</b></div>
          <div><img src="assets/emoji/sun.png" alt=""><b>sun → sunny</b><small>the sun is shining</small></div>
          <div><img src="assets/emoji/wind.png" alt=""><b>wind → windy</b><small>the wind is blowing</small></div>
          <div><img src="assets/emoji/snowflake.png" alt=""><b>snow → snowy</b><small>it’s snowing</small></div>
          <div><img src="assets/emoji/rain.png" alt=""><b>rain → wet</b><small>it’s raining</small></div>
          <div><img src="assets/emoji/cold.png" alt=""><b>ice → icy</b></div>
          <div><img src="assets/emoji/snowman.png" alt=""><b>the cold → cold</b></div>
        </div>
        <h3>Word partners</h3>
        <div class="colloc">
          <div>the sun <b>came out</b> <i>(appeared)</i></div>
          <div><b>thick</b> fog</div>
          <div><b>heavy</b> rain ↔ <b>light</b> rain</div>
          <div>a <b>strong</b> wind · the wind <b>has blown</b> sth off</div>
          <div>a <b>clear</b> sky <i>(no clouds)</i></div>
          <div><b>extremely</b> cold / hot / windy</div>
        </div>
        <h3>Rain and storms</h3>
        <div class="colloc">
          <div>it’s <b>pouring</b> (with rain) <i>(very heavy rain)</i></div>
          <div>heavy / light <b>showers</b> <i>(short periods of rain)</i></div>
          <div>a <b>storm</b> = heavy rain + strong winds</div>
          <div>a <b>thunderstorm</b>: <b>thunder</b> you hear, <b>lightning</b> you see</div>
          <div><b>humid</b> <i>(the air feels warm and wet)</i></div>
        </div>
        <h3>Temperature</h3>
        <div class="tscale"><div class="tbar"></div>
          <div class="tl6"><span><b>boiling</b><i>very hot</i></span><span><b>hot</b></span><span><b>warm</b></span><span><b>cool</b><i>not very warm</i></span><span><b>chilly</b><i>= cold</i></span><span><b>freezing</b><i>very cold</i></span></div>
        </div>
        <p>40 degrees <b>Celsius</b> · 10 degrees <b>below zero</b></p>
        <div class="note">⚠️ <b>cool</b> can be nice (<i>a lovely cool drink</i>) or not (<i>a cool summer</i>). <b>mild</b> = not as cold as usual — it’s positive: <i>a mild winter</i>.</div>`
    },

    {
      type: "match", label: "vocabulary · word partners", sticker: "wind",
      title: "Finish the sentence",
      instructions: "Drag each ending to its beginning — or tap an ending, then tap a gap.",
      pairs: [
        ["It was grey all morning, but the sun", "came out after lunch."],
        ["Drivers couldn’t see the road in the thick", "fog."],
        ["The boat moved a lot because of the strong", "wind."],
        ["Last night the wind blew", "all the leaves off the trees."],
        ["By the evening the clouds were gone and the sky", "was clear."],
        ["Take an umbrella — it’s pouring", "with rain."],
        ["We only had a few light", "showers, so we stayed in the park."],
        ["During the storm we heard thunder and saw", "lightning."],
        ["Wear a hat and gloves — it’s extremely", "cold today."],
        ["The thermometer showed ten degrees", "below zero."]
      ]
    },

    {
      type: "gapfill", label: "vocabulary · word building", sticker: "sun",
      title: "Noun or adjective?",
      instructions: "Write the correct form of the word in brackets.",
      items: [
        { text: "It’s very [[foggy]] <span class=hint>(fog)</span> this morning — drive carefully.", why: "fog + y → foggy (double g)." },
        { text: "Be careful, the roads are [[icy]] <span class=hint>(ice)</span> after the frosty night.", why: "ice → icy (no e)." },
        { text: "Take your sunglasses — it’s really [[sunny]] <span class=hint>(sun)</span> today.", why: "sun + y → sunny (double n)." },
        { text: "Don’t forget your umbrella. It’s going to be [[wet|rainy]] <span class=hint>(rain)</span> all day.", why: "rain → wet (in the book). “Rainy” is also possible: a rainy day." },
        { text: "It was so [[windy]] <span class=hint>(wind)</span> that my hat flew away.", why: "wind → windy." },
        { text: "Look outside — the sun is [[shining]] <span class=hint>(shine)</span>!", why: "The sun shines → is shining (drop the e)." },
        { text: "The sky is grey and [[cloudy]] <span class=hint>(cloud)</span>, but it isn’t raining.", why: "cloud → cloudy." },
        { text: "Our village is usually very [[snowy]] <span class=hint>(snow)</span> in January.", why: "snow → snowy." },
        { text: "I don’t mind wet weather, but I really hate [[the cold]] <span class=hint>(cold, noun)</span>.", why: "the cold = cold weather (noun with “the”)." },
        { text: "Close the window! The wind is [[blowing]] <span class=hint>(blow)</span> really hard.", why: "The wind blows → is blowing." }
      ]
    },

    {
      type: "tf2", label: "vocabulary · true / false", sticker: "thermometer",
      title: "True or false?",
      instructions: "If it’s <b>false</b>, choose the sentence that makes it true.",
      items: [
        { q: "In thick fog you can see very far.", answer: false, fix: ["In thick fog it’s always hot.", "In thick fog you can’t see very well.", "In thick fog the sky is clear."], fixAnswer: 1 },
        { q: "People love to sunbathe when it’s freezing.", answer: false, fix: ["People love to sunbathe when it’s hot.", "People love to sunbathe when it’s icy.", "People love to sunbathe in a storm."], fixAnswer: 0 },
        { q: "When it’s boiling, a cold drink is a great idea.", answer: true, fix: [], fixAnswer: 0 },
        { q: "A shower is a long period of very heavy rain.", answer: false, fix: ["A shower is a type of strong wind.", "A shower is thick fog in the morning.", "A shower is a short period of rain."], fixAnswer: 2 },
        { q: "When it’s chilly, a warm sweater is a good idea.", answer: true, fix: [], fixAnswer: 0 },
        { q: "When it’s humid, the air feels warm and dry.", answer: false, fix: ["When it’s humid, the air feels warm and wet.", "When it’s humid, the air feels cold and dry.", "When it’s humid, there is no air."], fixAnswer: 0 },
        { q: "A mild winter is colder than usual.", answer: false, fix: ["A mild winter has no snow at all.", "A mild winter is not as cold as usual.", "A mild winter is extremely cold."], fixAnswer: 1 },
        { q: "After heavy rain, the roads are wet.", answer: true, fix: [], fixAnswer: 0 },
        { q: "A storm is heavy rain with strong winds.", answer: true, fix: [], fixAnswer: 0 },
        { q: "“It’s pouring with rain” means there is a little light rain.", answer: false, fix: ["It means it’s snowing.", "It means the sun is shining.", "It means it’s raining very heavily."], fixAnswer: 2 }
      ]
    },

    /* ================= 3 · GRAMMAR ================= */
    { type: "part", n: "03", icon: "stopwatch", title: "Grammar", text: "I was doing and I did." },

    {
      type: "rule", label: "theory · past continuous", sticker: "telephone",
      title: "was / were + -ing",
      html: `
        <p>At 4 o’clock yesterday I <b>was walking</b> home. I started before 4 and finished after 4 — at 4 o’clock I was <b>in the middle</b> of it.</p>
        <table class="form">
          <tr><th>+</th><td>I / he / she / it <b>was</b> walking · we / you / they <b>were</b> walking</td></tr>
          <tr><th>−</th><td>It <b>wasn’t</b> raining. · We <b>weren’t</b> listening.</td></tr>
          <tr><th>?</th><td><b>Was</b> it snowing? · What <b>were</b> you <b>doing</b> at 11.30?</td></tr>
        </table>
        <p style="font-size:15px;color:var(--muted)">Spelling: live → liv<b>ing</b> · run → run<b>n</b>ing · sit → sit<b>t</b>ing · lie → <b>ly</b>ing</p>
        <h3>Was doing + did</h3>
        <div class="tl" aria-hidden="true">
          <div class="sp" style="--x:6%;--w:62%"><b>we were walking</b><i>in the middle</i></div>
          <div class="pt e" style="--x:44%"><b>it started to rain</b><i>one moment</i></div>
          <div class="now"></div>
        </div>
        <p>We <b>were walking</b> in the park when it <b>started</b> to rain.</p>
        <div class="grid2">
          <div class="box"><h4>past simple = complete</h4><p>We <b>played</b> tennis from 10 to 11.30.<br>Jack <b>read</b> a book yesterday. <i>(all of it)</i></p></div>
          <div class="box pink"><h4>past continuous = unfinished</h4><p>At 10.30 we <b>were playing</b> tennis.<br>Jack <b>was reading</b> when his phone <b>rang</b>.</p></div>
        </div>
        <div class="note">⚠️ <b>when</b> + the short action (past simple): <i>when the phone <b>rang</b></i>. <b>while</b> + the long action: <i>while I <b>was having</b> a shower</i>.</div>`
    },

    {
      type: "gapfill", label: "grammar · was / were + -ing", sticker: "umbrella",
      title: "In the middle of it",
      instructions: "Use <b>was / were + -ing</b>. Make negatives and questions where you see them.",
      items: [
        { text: "What [[were you doing]] <span class=hint>(you / do)</span> at 8 o’clock last night?", why: "Question: What + were + you + -ing." },
        { text: "It [[wasn't raining|was not raining]] <span class=hint>(not / rain)</span> when we got up, but it was very cloudy.", why: "Negative: wasn’t + -ing." },
        { text: "[[Was it snowing]] <span class=hint>(it / snow)</span> when you left school?", why: "Question: Was + it + -ing." },
        { text: "I [[was sitting]] <span class=hint>(sit)</span> in the yard when the sun came out.", why: "sit → sitting (double t)." },
        { text: "The wind [[was blowing]] <span class=hint>(blow)</span> so hard that I couldn’t open my umbrella.", why: "the wind = it → was blowing." },
        { text: "My parents [[were driving]] <span class=hint>(drive)</span> home in thick fog.", why: "they → were; drive → driving (no e)." },
        { text: "Why [[were you running]] <span class=hint>(you / run)</span>? — Because it was pouring with rain!", why: "run → running (double n)." },
        { text: "We [[weren't wearing|were not wearing]] <span class=hint>(not / wear)</span> coats, so we were freezing.", why: "we → weren’t + -ing." },
        { text: "Where [[was Max going]] <span class=hint>(Max / go)</span> when you saw him?", why: "Where + was + Max + going." },
        { text: "It was a beautiful morning. The birds [[were singing]] <span class=hint>(sing)</span> and the sky was clear.", why: "the birds = they → were singing." }
      ]
    },

    {
      type: "mcq", label: "grammar · was doing or did?", sticker: "mobile",
      title: "Complete or unfinished?",
      instructions: "Choose the correct form.",
      items: [
        { q: "When I ___ up this morning, it was raining.", options: ["was getting", "got"], answer: 1 },
        { q: "“Was Jane busy when you called her?” “Yes, she ___.”", options: ["studied", "was studying"], answer: 1 },
        { q: "The phone rang while I ___ a shower.", options: ["was having", "had"], answer: 0 },
        { q: "Kelly fell asleep while she ___.", options: ["read", "was reading"], answer: 1 },
        { q: "We ___ tennis yesterday from 10 to 11.30.", options: ["played", "were playing"], answer: 0 },
        { q: "“What ___ at 2 o’clock this morning?” “I was asleep.”", options: ["did you do", "were you doing"], answer: 1 },
        { q: "I lost my key last night, so I ___ in through a window.", options: ["was climbing", "climbed"], answer: 1 },
        { q: "It ___ at all while we were on vacation — not one drop!", options: ["didn’t rain", "wasn’t raining"], answer: 0 },
        { q: "I ___ Lucy this morning. She was waiting at the bus stop.", options: ["was seeing", "saw"], answer: 1 },
        { q: "___ TV when I phoned you?", options: ["Were you watching", "Did you watch"], answer: 0 }
      ]
    },

    {
      type: "gapfill", label: "grammar · a story", sticker: "storm",
      title: "Caught in the storm",
      instructions: "Put the verb in the <b>past simple</b> or the <b>past continuous</b>.",
      items: [
        { text: "Last Saturday the sun [[was shining]] <span class=hint>(shine)</span> when we left the house.", why: "Background: in the middle of it → was shining." },
        { text: "We [[were walking]] <span class=hint>(walk)</span> through the park when the sky suddenly went dark.", why: "Long action interrupted by “went dark”." },
        { text: "A few minutes later, it [[started]] <span class=hint>(start)</span> to pour with rain.", why: "One short action → past simple." },
        { text: "We didn’t have an umbrella, so we [[ran]] <span class=hint>(run)</span> to a café.", why: "Complete action; run → ran (irregular)." },
        { text: "While we [[were drinking]] <span class=hint>(drink)</span> hot chocolate, we heard thunder.", why: "while + the long action → past continuous." },
        { text: "Outside, some people [[were trying]] <span class=hint>(try)</span> to hide under the trees.", why: "In the middle of it at that moment." },
        { text: "Suddenly lightning [[hit]] <span class=hint>(hit)</span> a tall tree near the café.", why: "Suddenly = one moment → past simple; hit → hit." },
        { text: "Luckily, nobody [[was standing]] <span class=hint>(stand)</span> under it at that moment.", why: "at that moment → past continuous." },
        { text: "When we [[went]] <span class=hint>(go)</span> outside an hour later, the sky was clear.", why: "when + short action → past simple; go → went." },
        { text: "The roads were still wet, but the sun [[came out]] <span class=hint>(come out)</span> and we walked home.", why: "A complete action in the story; come → came." }
      ]
    },

    {
      type: "correct", label: "grammar · fix it", sticker: "detective",
      title: "Find and fix the mistake",
      instructions: "Each sentence has <b>one</b> mistake. Correct it in the box.",
      items: [
        { wrong: "It was rain when we left the house.", answers: ["It was raining when we left the house."] },
        { wrong: "What did you doing at 3 o'clock?", answers: ["What were you doing at 3 o'clock?"] },
        { wrong: "We was walking home in the snow.", answers: ["We were walking home in the snow."] },
        { wrong: "I was having a shower when the phone was ringing.", answers: ["I was having a shower when the phone rang."] },
        { wrong: "It's very fog today.", answers: ["It's very foggy today."] },
        { wrong: "There was a heavy wind when we were on the boat.", answers: ["There was a strong wind when we were on the boat."] },
        { wrong: "We had some strong rain on the weekend.", answers: ["We had some heavy rain on the weekend."] }
      ]
    },

    /* ================= 4 · NMT ================= */
    { type: "part", n: "04", icon: "newspaper", title: "Exam practice", text: "Words in a text — like Task 5 of the NMT." },

    {
      type: "mcq", label: "NMT style · words in context", sticker: "newspaper",
      title: "Tomorrow’s weather",
      instructions: "Read the forecast and choose the word that fits each gap. Read the <b>whole</b> sentence first — the word after the gap often gives the answer.",
      items: [
        { q: "Good morning! Tomorrow will be a lovely ___ day, with temperatures up to 25 degrees.", options: ["sun", "sunshine", "sunny", "suns"], answer: 2 },
        { q: "Early in the morning there will be thick ___ near the river, so drivers should be careful.", options: ["fog", "foggy", "fogs", "fogging"], answer: 0 },
        { q: "The clouds will slowly disappear, and the sun will come ___ just after lunch.", options: ["off", "down", "out", "along"], answer: 2 },
        { q: "In the evening, a ___ wind will blow from the north.", options: ["heavy", "strong", "thick", "hard"], answer: 1 },
        { q: "There may be a few light ___ in the west, but they won’t last long.", options: ["storms", "showers", "thunders", "fogs"], answer: 1 },
        { q: "On Wednesday it will be very hot and ___ — the air will feel warm and wet.", options: ["icy", "chilly", "frozen", "humid"], answer: 3 },
        { q: "Later in the day there could be a ___, with thunder and lightning.", options: ["shower", "thunderstorm", "frost", "fog"], answer: 1 },
        { q: "It will ___ with rain for a few hours, so take an umbrella.", options: ["pour", "drop", "fall", "wet"], answer: 0 },
        { q: "On Friday it will only be five degrees, so it’ll feel quite ___.", options: ["boiling", "humid", "mild", "chilly"], answer: 3 },
        { q: "At night the temperature will drop below ___, and the roads will be icy.", options: ["cold", "zero", "freezing cold", "minus"], answer: 1 }
      ]
    },

    /* ================= 5 · DRILL ================= */
    { type: "part", n: "05", icon: "zap", title: "Speed drill", text: "Until the phrases come out on their own." },

    {
      type: "drill", label: "automaticity · speed drill", sticker: "lightning",
      title: "Twelve sentences, twice each",
      instructions: "Build the full sentence and press <b>Enter</b>. Each one must be right <b>twice</b>. A mistake sends it back. Beat your best time.",
      items: [
        { cue: "past continuous + past simple", prompt: "it / rain / when / we / leave / the house", answers: ["It was raining when we left the house."] },
        { cue: "past continuous + past simple", prompt: "the sun / shine / when / I / wake up", answers: ["The sun was shining when I woke up."] },
        { cue: "question", prompt: "what / you / do / when / the storm / start?", answers: ["What were you doing when the storm started?"] },
        { cue: "negative", prompt: "it / not / snow / when / we / get up", answers: ["It wasn't snowing when we got up."] },
        { cue: "past continuous + past simple", prompt: "we / walk / home / when / it / start / to rain", answers: ["We were walking home when it started to rain."] },
        { cue: "while", prompt: "the phone / ring / while / I / have / a shower", answers: ["The phone rang while I was having a shower."] },
        { cue: "word partner", prompt: "the sun / come out / after lunch", answers: ["The sun came out after lunch."] },
        { cue: "word partner", prompt: "it / pour with rain / all afternoon", answers: ["It poured with rain all afternoon."] },
        { cue: "word partner", prompt: "there / be / a strong wind / yesterday", answers: ["There was a strong wind yesterday."] },
        { cue: "word partner", prompt: "we / have / heavy rain / on the weekend", answers: ["We had heavy rain on the weekend.", "We had some heavy rain on the weekend."] },
        { cue: "word partner", prompt: "the sky / be / clear / by lunchtime", answers: ["The sky was clear by lunchtime."] },
        { cue: "question", prompt: "it / rain / when / you / get up?", answers: ["Was it raining when you got up?"] }
      ]
    },

    /* ================= 6 · WRITING ================= */
    { type: "part", n: "06", icon: "pencil", title: "Writing", text: "Your own weather story." },

    {
      type: "write", label: "writing · a story", sticker: "notebook",
      title: "The day the weather changed my plans",
      instructions: "Write <b>5–7 sentences</b> about a day when the weather surprised you. Where were you? What were you doing when it changed? What happened next?",
      words: ["sunny", "cloudy", "foggy", "icy", "windy", "wet", "heavy rain", "strong wind", "shower", "thunderstorm", "thunder", "lightning", "humid", "freezing", "boiling", "chilly", "pour", "came out", "clear"],
      checks: [
        { label: "was / were + -ing — at least twice", pattern: "\\b(was|were)\\s+(not\\s+)?\\w+ing\\b", min: 2 },
        { label: "when or while in one sentence", pattern: "\\b(when|while)\\b" },
        { label: "4+ weather words (they light up above)", words: 4 },
        { label: "at least 5 sentences", sentences: 5 }
      ],
      sample: "Last July I was staying with my grandparents in the village. It was boiling and very humid, so we were swimming in the river. Suddenly the sky went dark and we heard thunder. While we were running home, it started to pour with rain. We were completely wet when we got to the house! Half an hour later the sun came out and the sky was clear again."
    },

    /* ================= 7 · SELF-CHECK ================= */
    { type: "part", n: "07", icon: "rainbow", title: "Self-check", text: "What to look at again." },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
