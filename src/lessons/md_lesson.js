const IMG = f => "assets/img/" + f;
const H = v => ` <span class=hint>(${v})</span>`;
const ABCD = ["A", "B", "C", "D"];
const AH = ["A", "B", "C", "D", "E", "F", "G", "H"];
const LESSON = {
  id: "make-or-do-nmt5",
  kicker: "make · do · NMT Task 5 · Task 3 against the clock",
  titleHTML: 'Make it or <em>do</em> it?',
  title: "Make it or do it?",
  subtitle: "In Ukrainian it’s all «робити». In English you have to choose — and the test knows it.",
  stickers: ["cooking", "broom"],
  confetti: ["check", "star", "sparkles", "trophy", "bulb"],

  sections: [

    /* ================= 1 · WARM-UP ================= */
    { type: "part", n: "01", icon: "broom", title: "Warm-up", text: "Two kitchens, two verbs." },

    {
      type: "rule", label: "warm-up · look and talk", sticker: "cooking",
      title: "What happened here?",
      html: `
        <div class="photos">
          <figure class="photo"><img loading="lazy" alt="A kitchen sink full of dirty dishes" src="${IMG("sink.jpg")}"><figcaption><b>A</b><small>Photo: W.carter · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="Homemade cookies on a black plate" src="${IMG("cookies.jpg")}"><figcaption><b>B</b><small>Photo: Dietmar Rabich · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
        </div>
        <ol class="qs">
          <li>A: Somebody <b>made a mess</b>. What does somebody need to <b>do</b> now? Who <b>does the dishes</b> in your home?</li>
          <li>B: Have you ever <b>made</b> cookies? What can you <b>make</b> in the kitchen?</li>
          <li>Which housework do you hate <b>doing</b>? Which is OK?</li>
        </ol>`
    },

    /* ================= 2 · MAKE OR DO ================= */
    { type: "part", n: "02", icon: "tools", title: "make or do?", text: "One easy idea + a list of phrases you just have to learn." },

    {
      type: "rule", label: "vocabulary · make / do", sticker: "tools",
      title: "Create it — or just do the job?",
      html: `
        <div class="colloc">
          <div><b>make</b> = you <b>create</b> something, after it there is something new: <b>make</b> breakfast · a cake · cookies · a list · a plan · a video · a mess · a noise</div>
          <div><b>make</b> + these nouns (learn them!): a mistake · a decision · a phone call · an appointment · money · friends · progress · an excuse · a joke · a face · <b>make sure</b></div>
          <div><b>do</b> = an <b>activity</b> or a <b>job</b>: <b>do</b> homework · the dishes · the laundry · the shopping · the cleaning · a project · an interview</div>
          <div><b>do</b> + these words: exercise · yoga · karate · a favor · your best · well / badly (on a test) · something · nothing · anything</div>
          <div>Not make, not do: <b>take</b> a photo · a test · an exam · a break · <b>have</b> a party · a shower · a good time</div>
        </div>
        <div class="note">⚠️ Ukrainian traps: <s>do a mistake</s> → <b>make</b> a mistake · <s>make a photo</s> → <b>take</b> a photo · <s>make a party</s> → <b>have</b> a party · <s>make sport</s> → <b>do</b> exercise / <b>play</b> sports · <s>make a surprise</s> → <b>plan</b> a surprise</div>`
    },

    {
      type: "sort", label: "words · make or do?", sticker: "broom",
      title: "Two boxes",
      instructions: "Which verb goes with each phrase?",
      categories: [
        { name: "make", words: ["a mess", "a plan", "a phone call", "an appointment", "money", "progress", "a list", "sure"] },
        { name: "do", words: ["the dishes", "the laundry", "the shopping", "exercise", "a favor", "a project", "well", "nothing"] }
      ]
    },

    {
      type: "gapfill", label: "words · make or do + form", sticker: "cooking",
      title: "Put it in the right form",
      instructions: "Write <b>make</b> or <b>do</b> in the correct form.",
      items: [
        { text: "Who [[made]] this mess? The kitchen was clean an hour ago!" + H("past"), why: "make a mess; past → made." },
        { text: "I usually [[do]] the laundry on Sundays." + H("present"), why: "do the laundry; I → do." },
        { text: "Have you [[made]] an appointment with the dentist yet?" + H("present perfect"), why: "make an appointment; have + V3 → made." },
        { text: "She [[did]] really well on her math test yesterday." + H("past"), why: "do well on a test; yesterday → did." },
        { text: "Could you [[do]] me a favor and open the window?", why: "do somebody a favor." },
        { text: "My dad [[makes]] pancakes for us every Sunday morning." + H("present"), why: "make = cook, create; he → makes." },
        { text: "I [[did]] the shopping yesterday, so the fridge is full." + H("past"), why: "do the shopping; yesterday → did." },
        { text: "Our class has [[made]] a lot of progress this year." + H("present perfect"), why: "make progress; has + V3 → made." },
        { text: "Please [[make]] sure the door is locked when you leave.", why: "make sure = check." },
        { text: "My sister [[does]] yoga three times a week." + H("present"), why: "do yoga; she → does." }
      ]
    },

    {
      type: "mcq", label: "traps · make, do, take or have?", sticker: "bulb",
      title: "Don’t fall in!",
      instructions: "Choose the right verb. Careful — some of them are not make or do.",
      items: [
        { q: "Can I ___ a photo of you and your cat?", options: ["make", "do", "take"], answer: 2 },
        { q: "We’re going to ___ a party on Friday. Can you come?", options: ["have", "make", "do"], answer: 0 },
        { q: "I need to ___ a quick phone call. Wait a minute.", options: ["do", "make", "take"], answer: 1 },
        { q: "My brother ___ a lot of money last summer at the café.", options: ["did", "took", "made"], answer: 2 },
        { q: "I ___ exercise every morning before school.", options: ["do", "make", "have"], answer: 0 },
        { q: "You look tired. Why don’t you ___ a break?", options: ["make", "take", "do"], answer: 1 },
        { q: "Let’s ___ a list before we go to the store.", options: ["do", "take", "make"], answer: 2 },
        { q: "We have to ___ a test in English on Monday.", options: ["take", "make", "give"], answer: 0 },
        { q: "Sorry, I can’t ___ a decision right now. I need to think.", options: ["do", "make", "have"], answer: 1 },
        { q: "I didn’t ___ anything last weekend. I just stayed home.", options: ["make", "take", "do"], answer: 2 }
      ]
    },

    {
      type: "correct", label: "traps · fix it", sticker: "tools",
      title: "Find and fix the trap",
      instructions: "Each sentence has <b>one</b> wrong verb. Write the correct sentence.",
      items: [
        { wrong: "I did a big mistake on the test.", answers: ["I made a big mistake on the test."] },
        { wrong: "Can you make me a favor?", answers: ["Can you do me a favor?"] },
        { wrong: "We made a lot of photos in Lviv.", answers: ["We took a lot of photos in Lviv."] },
        { wrong: "My sister makes yoga every morning.", answers: ["My sister does yoga every morning."] },
        { wrong: "I can't do a decision.", answers: ["I can't make a decision.", "I cannot make a decision.", "I can’t make a decision."] },
        { wrong: "I make my homework after dinner.", answers: ["I do my homework after dinner."] },
        { wrong: "We will make a party for Mom's birthday.", answers: ["We will have a party for Mom's birthday.", "We will throw a party for Mom's birthday.", "We will have a party for Mom’s birthday."] },
        { wrong: "Let's do a plan for the weekend.", answers: ["Let's make a plan for the weekend.", "Let’s make a plan for the weekend."] },
        { wrong: "The neighbors did a lot of noise last night.", answers: ["The neighbors made a lot of noise last night."] }
      ]
    },

    /* ================= 3 · NMT TASK 5 ================= */
    { type: "part", n: "03", icon: "puzzle", title: "NMT · Task 5", text: "A short text, five gaps, A–D. It tests words that go together." },

    {
      type: "rule", label: "NMT · how Task 5 works", sticker: "puzzle",
      title: "How to do Task 5",
      html: `
        <ol class="qs">
          <li>Read the <b>whole text</b> first — quickly, for the story.</li>
          <li>For each gap, read the <b>whole sentence</b>. Look at the word <b>after</b> the gap: <i>___ a mistake</i>, <i>___ a photo</i>, <i>___ well on</i>.</li>
          <li>All four words can look OK in Ukrainian. Only <b>one</b> makes a real English phrase.</li>
          <li>Say the phrase in your head: <i>make a mistake</i> ✓ <i>do a mistake</i> ✗.</li>
        </ol>`
    },

    {
      type: "mcq", label: "NMT · Task 5 · text 1", sticker: "puzzle",
      title: "Volunteer weekend",
      instructions: `Read the text. For each gap choose A, B, C or D.
        <div class="cloze">Last Saturday our class <b>23</b> ______ some volunteer work at the animal shelter. At first we <b>24</b> ______ a lot of noise and the dogs got nervous, but then we calmed down. We <b>25</b> ______ the dogs for a walk and helped clean their cages. My friend Sasha <b>26</b> ______ friends with an old dog called Bruno. Before we left, we <b>27</b> ______ a plan to come back every month.</div>`,
      items: [
        { q: "<b>23</b>", options: ["A made", "B did", "C took", "D had"], answer: 1 },
        { q: "<b>24</b>", options: ["A made", "B did", "C had", "D got"], answer: 0 },
        { q: "<b>25</b>", options: ["A brought", "B made", "C took", "D did"], answer: 2 },
        { q: "<b>26</b>", options: ["A got", "B had", "C did", "D made"], answer: 3 },
        { q: "<b>27</b>", options: ["A did", "B made", "C took", "D put"], answer: 1 }
      ]
    },

    {
      type: "mcq", label: "NMT · Task 5 · text 2", sticker: "cooking",
      title: "A kitchen disaster",
      instructions: `Read the text. For each gap choose A, B, C or D.
        <div class="cloze">Last Sunday I decided to <b>23</b> ______ a surprise for my mom’s birthday: a chocolate cake! I <b>24</b> ______ all the ingredients at the store near our house. The recipe looked easy, but I <b>25</b> ______ a big mistake: I used salt instead of sugar! When Mom tasted the cake, she <b>26</b> ______ a funny face, but she didn’t say anything. Then we both laughed, and in the end we <b>27</b> ______ a pizza. It was still the best birthday ever!</div>`,
      items: [
        { q: "<b>23</b>", options: ["A do", "B plan", "C take", "D give"], answer: 1 },
        { q: "<b>24</b>", options: ["A paid", "B spent", "C bought", "D cost"], answer: 2 },
        { q: "<b>25</b>", options: ["A made", "B did", "C had", "D took"], answer: 0 },
        { q: "<b>26</b>", options: ["A did", "B took", "C got", "D made"], answer: 3 },
        { q: "<b>27</b>", options: ["A asked", "B ordered", "C told", "D did"], answer: 1 }
      ]
    },

    {
      type: "mcq", label: "NMT · Task 5 · text 3", sticker: "trophy",
      title: "Our town project",
      instructions: `Read the text. For each gap choose A, B, C or D.
        <div class="cloze">Our English teacher always says that it’s OK to <b>23</b> ______ mistakes. “That’s how you learn,” she says. Last month our class <b>24</b> ______ a project about our town. Every group had to <b>25</b> ______ an interview with someone who has lived there for a long time. My group <b>26</b> ______ a lot of progress because we worked hard every day. In the end, we <b>27</b> ______ first prize!</div>`,
      items: [
        { q: "<b>23</b>", options: ["A do", "B make", "C take", "D have"], answer: 1 },
        { q: "<b>24</b>", options: ["A did", "B made", "C took", "D had"], answer: 0 },
        { q: "<b>25</b>", options: ["A make", "B do", "C take", "D get"], answer: 1 },
        { q: "<b>26</b>", options: ["A did", "B made", "C got", "D had"], answer: 1 },
        { q: "<b>27</b>", options: ["A beat", "B passed", "C won", "D reached"], answer: 2 }
      ]
    },

    /* ================= 4 · NMT TASK 3 TIMED ================= */
    { type: "part", n: "04", icon: "stopwatch", title: "NMT · Task 3 against the clock", text: "Press ⏱ Timer → 8 min. Then start." },

    {
      type: "rule", label: "NMT · Task 3 · sentences A–H", sticker: "news",
      title: "Read A–H first",
      html: `
        <div class="note">⏱ Real test speed: about <b>8 minutes</b> for six short texts. Underline the key words in A–H first. Two sentences are extra.</div>
        <div class="nmt3">
          <div><b>A</b>You can get help with your schoolwork here.</div>
          <div><b>B</b>Somebody wants you to call back.</div>
          <div><b>C</b>You have to sign up before a certain day.</div>
          <div><b>D</b>You can’t use your phone here.</div>
          <div><b>E</b>Something has to be repaired.</div>
          <div><b>F</b>You can learn to cook here.</div>
          <div><b>G</b>Somebody is offering money for help.</div>
          <div><b>H</b>Parents can’t stay during the activity.</div>
        </div>`
    },

    {
      type: "mcq", label: "NMT · Task 3 · timed", sticker: "stopwatch",
      title: "Match the texts",
      instructions: "Which sentence (A–H) matches each text? Two letters are extra.",
      items: [
        { q: `<div class="notice"><b>11 · COOKING CLUB</b><br>Every Thursday after school in Room 5. Make pizza, pancakes and cookies with us! Free for all students.</div>`, options: AH, answer: 5 },
        { q: `<div class="notice"><b>12 · VOICE MESSAGE</b><br>Hi, it’s Ms. Lee from Bright Smile Dental. We need to change the time of your appointment. Please call me at 555-0134.</div>`, options: AH, answer: 1 },
        { q: `<div class="notice"><b>13 · HOMEWORK HELP</b><br>Stuck with math or English? Older students can help you do your homework. Library, Monday–Wednesday, 3–5 p.m.</div>`, options: AH, answer: 0 },
        { q: `<div class="notice"><b>14 · SCHOOL TRIP TO THE ZOO</b><br>Want to go? Write your name on the list in the main office. The list closes on Friday, December 4.</div>`, options: AH, answer: 2 },
        { q: `<div class="notice"><b>15 · DOG WALKER WANTED</b><br>We’re going on vacation for a week. Can you walk our dog twice a day? We pay $10 a walk. Call Tom.</div>`, options: AH, answer: 6 },
        { q: `<div class="notice"><b>16 · ELEVATOR OUT OF ORDER</b><br>Sorry! Please use the stairs. A technician is coming on Monday to fix it.</div>`, options: AH, answer: 4 }
      ]
    },

    /* ================= 5 · TALK ================= */
    { type: "part", n: "05", icon: "speech", title: "Over to you", text: "Spin it — I ask, you answer. Then you ask me." },

    {
      type: "wheel", label: "speaking · make & do", sticker: "speech",
      title: "Spin the kitchen timer",
      start: "Spin the wheel. Answer in 3–4 sentences with make or do. Then ask me the same question.",
      colors: ["#2457D6", "#FFE45E", "#16213E", "#7FA2F5"],
      items: [
        { icon: "🧹", short: "chores", q: "What housework <b>do</b> you <b>do</b> at home? What do you hate <b>doing</b>?" },
        { icon: "🍪", short: "kitchen", q: "What can you <b>make</b> in the kitchen? Has something you <b>made</b> ever gone wrong?" },
        { icon: "📝", short: "mistakes", q: "What mistakes do you often <b>make</b> in English?" },
        { icon: "🙏", short: "favor", q: "When did you last <b>do</b> somebody a favor? What was it?" },
        { icon: "🧭", short: "decisions", q: "Do you <b>make</b> decisions fast or slowly? Give an example." },
        { icon: "💸", short: "money", q: "How can a teenager <b>make</b> money? Have you ever <b>made</b> any?" },
        { icon: "🏃‍♀️", short: "exercise", q: "Do you <b>do</b> any exercise? How often?" },
        { icon: "📈", short: "progress", q: "In which subject have you <b>made</b> the most progress this year?" }
      ]
    },

    /* ================= 6 · SPEED ================= */
    { type: "part", n: "06", icon: "stopwatch", title: "Speed", text: "Make it automatic." },

    {
      type: "drill", label: "automaticity · speed drill", sticker: "stopwatch",
      title: "Twelve phrases, twice each",
      instructions: "Write the verb + phrase and press <b>Enter</b>. Each one must be right <b>twice</b>.",
      items: [
        { cue: "make or do?", prompt: "the dishes", answers: ["do the dishes"] },
        { cue: "make or do?", prompt: "a mess", answers: ["make a mess"] },
        { cue: "make or do?", prompt: "a favor", answers: ["do a favor"] },
        { cue: "make or do?", prompt: "a phone call", answers: ["make a phone call"] },
        { cue: "make or do?", prompt: "the laundry", answers: ["do the laundry"] },
        { cue: "make or do?", prompt: "money", answers: ["make money"] },
        { cue: "make or do?", prompt: "exercise", answers: ["do exercise"] },
        { cue: "make or do?", prompt: "an appointment", answers: ["make an appointment"] },
        { cue: "make or do?", prompt: "well on a test", answers: ["do well on a test"] },
        { cue: "make or do?", prompt: "progress", answers: ["make progress"] },
        { cue: "trap!", prompt: "a photo", answers: ["take a photo"] },
        { cue: "trap!", prompt: "a party", answers: ["have a party", "throw a party"] }
      ]
    },

    /* ================= 7 · WRITING ================= */
    { type: "part", n: "07", icon: "pencil", title: "Writing", text: "My busy weekend." },

    {
      type: "write", label: "writing · my busy weekend", sticker: "pencil",
      title: "My busy weekend",
      instructions: "Write <b>6–7 sentences</b> about last weekend (real or imagined). Use <b>make</b> 3 times and <b>do</b> 3 times — in the past: <b>made / did</b>.",
      words: ["the dishes", "the laundry", "the shopping", "homework", "a mess", "a cake", "a plan", "a mistake", "a phone call", "exercise", "a favor", "money"],
      checks: [
        { label: "made — 3 times", pattern: "\\bmade\\b", min: 3 },
        { label: "did — 3 times", pattern: "\\bdid\\b", min: 3 },
        { label: "no traps (did a mistake, made homework, made a photo…)", pattern: "^(?![\\s\\S]*(\\b(do|does|did|doing|done)\\s+(a\\s+|an\\s+|the\\s+|my\\s+|some\\s+)?(big\\s+|small\\s+|lot\\s+of\\s+)?(mistakes?|mess|decision|plan|noise|phone call|money|friends|progress|cake|cookies)\\b|\\b(make|makes|made|making)\\s+(my\\s+|the\\s+|some\\s+|a\\s+)?(homework|dishes|laundry|shopping|exercise|yoga|favor|photos?|party)\\b))[\\s\\S]+$" },
        { label: "4+ phrases from the list (they light up)", words: 4 },
        { label: "at least 6 sentences", sentences: 6 }
      ],
      sample: "Last weekend was really busy. On Saturday morning I did the shopping with my mom. Then I made a cake for my grandma, but I made a big mess in the kitchen. After that I did the dishes. In the evening I did my homework and made a plan for next week. On Sunday I took a lot of photos in the park and had a great time."
    },

    /* ================= 8 · SELF-CHECK ================= */
    { type: "part", n: "08", icon: "star", title: "My mistakes today", text: "Read them, fix them, +1 point for each." },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
