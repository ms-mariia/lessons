const IMG = f => "assets/img/" + f;
const H = v => ` <span class=hint>(${v})</span>`;
const LESSON = {
  id: "make-my-day-evuel41",
  kicker: "make / made / made · it makes me feel… · make or do?",
  titleHTML: 'Make my <em>day</em>',
  title: "Make my day",
  subtitle: "What do you make? What makes you happy? And when is it do, not make?",
  stickers: ["cooking", "coffee"],
  confetti: ["cooking", "coffee", "star", "sparkles", "redheart"],

  sections: [

    /* ================= 1 · WARM-UP ================= */
    { type: "part", n: "01", icon: "cooking", title: "Warm-up", text: "Who makes what in your kitchen?" },

    {
      type: "rule", label: "warm-up · look and talk", sticker: "cooking",
      title: "What is she making?",
      html: `
        <div class="photos">
          <figure class="photo"><img loading="lazy" alt="A grandmother cooking on a fire in an old kitchen" src="${IMG("grandmakitchen.jpg")}"><figcaption><b>A</b><small>Photo: Mithun Kunwar (edit: Radomianin) · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="Potato pancakes on a plate with apple sauce" src="${IMG("deruny.jpg")}"><figcaption><b>B</b><small>Photo: Raimond Spekking · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
        </div>
        <ol class="qs">
          <li>A: Where is she? What do you think she’s <b>making</b>?</li>
          <li>B: These are potato pancakes — like deruny. Who <b>makes</b> deruny in your family?</li>
          <li>Who <b>makes</b> breakfast in your home? What did you have this morning?</li>
          <li>What can you <b>make</b>? Tea, a sandwich, a cake…?</li>
        </ol>`
    },

    /* ================= 2 · MAKE = CREATE ================= */
    { type: "part", n: "02", icon: "coffee", title: "Make", text: "Vocabulary in Use Elementary · Unit 41" },

    {
      type: "rule", label: "vocabulary · make / made / made", sticker: "coffee",
      title: "Three lines of make",
      html: `
        <div class="lines">
          <div class="ln g"><b class="dot">A</b><p><b>make = you create something</b>: make coffee · tea · hot chocolate · breakfast · lunch · dinner · a cake · a sandwich · a copy · a video · a movie</p></div>
          <div class="ln g"><b class="dot">B</b><p><b>it makes me (feel) + adjective</b>: Rainy days make me (feel) sleepy. · That movie made me sad. · Long lessons make me tired.</p></div>
          <div class="ln g"><b class="dot">C</b><p><b>make + these nouns</b>: make a mistake · an appointment · your bed · a noise · a mess · a choice · a phone call · friends</p></div>
        </div>
        <div class="note">⚠️ Not make: <b>do</b> homework · <b>do</b> the laundry · <b>take</b> a photo · <b>take</b> a test<br>🇺🇸 Your book is British: <b>make a copy</b> (UK a photocopy) · <b>movie</b> (UK film) · <b>Mom</b> (UK Mum) · <b>do the laundry</b> (UK the washing)</div>`
    },

    {
      type: "gapfill", label: "make · the right form", sticker: "cooking",
      title: "make, makes, made or making?",
      instructions: "Write the correct form of <b>make</b>.",
      items: [
        { text: "Dad is in the kitchen. He’s [[making]] coffee." + H("now"), why: "is + -ing → making." },
        { text: "My mom [[makes]] dinner every evening." + H("every day"), why: "she / he → makes." },
        { text: "I [[made]] pancakes for my family last Sunday." + H("past"), why: "last Sunday → made." },
        { text: "Can you [[make]] me a cup of tea, please?", why: "can + first form → make." },
        { text: "Look! The kids are [[making]] a video for their school project." + H("now"), why: "are + -ing → making." },
        { text: "Grandma always [[makes]] the best deruny!" + H("always"), why: "she → makes." },
        { text: "Who [[made]] this cake? It’s amazing!" + H("past"), why: "the cake is ready → somebody made it." },
        { text: "I’m going to [[make]] a sandwich. Do you want one?", why: "going to + first form → make." },
        { text: "The teacher [[made]] a copy of the test for every student yesterday." + H("past"), why: "yesterday → made." },
        { text: "We don’t [[make]] lunch at home on weekdays — we eat at school.", why: "don’t + first form → make." }
      ]
    },

    /* ================= 3 · IT MAKES ME FEEL ================= */
    { type: "part", n: "03", icon: "laugh", title: "It makes me feel…", text: "Feelings with make." },

    {
      type: "mcq", label: "make me feel · choose", sticker: "laugh",
      title: "How does it make you feel?",
      instructions: "Choose the best word.",
      items: [
        { q: "That movie about a lost dog made me feel ___. I cried at the end.", options: ["happy", "sad", "hungry"], answer: 1 },
        { q: "Long car trips always make me ___. I want to sleep.", options: ["tired", "angry", "excited"], answer: 0 },
        { q: "My little brother took my phone. It made me ___!", options: ["sleepy", "happy", "angry"], answer: 2 },
        { q: "The smell of pizza makes me ___.", options: ["hungry", "sick", "sad"], answer: 0 },
        { q: "That meal was horrible. It made me ___.", options: ["happy", "sick", "hungry"], answer: 1 },
        { q: "This song is great! It ___ me happy.", options: ["makes", "does", "feels"], answer: 0 },
        { q: "Rainy days ___ me feel sleepy.", options: ["makes", "make", "made me"], answer: 1 },
        { q: "The test results made ___ very nervous.", options: ["I", "my", "me"], answer: 2 },
        { q: "Snow on New Year’s Eve always makes me ___.", options: ["excited", "angry", "sick"], answer: 0 },
        { q: "Yesterday’s math lesson ___ me feel bored.", options: ["makes", "made", "making"], answer: 1 }
      ]
    },

    {
      type: "gapfill", label: "make me feel · write it", sticker: "zany",
      title: "Say how it feels",
      instructions: "Write <b>make / makes / made</b> + <b>me</b>. Look at the time words.",
      items: [
        { text: "Horror movies always [[make me]] scared.", why: "movies → make; + me." },
        { text: "My cat [[makes me]] happy every day.", why: "my cat = it → makes." },
        { text: "The bus was very hot. It [[made me]] feel sick.", why: "past → made." },
        { text: "Math tests [[make me]] nervous.", why: "tests → make." },
        { text: "Your message [[made me]] laugh yesterday!", why: "yesterday → made." },
        { text: "Monday mornings [[make me]] feel tired.", why: "mornings → make." },
        { text: "This photo [[makes me]] feel calm.", why: "photo = it → makes." },
        { text: "The long lesson last Friday [[made me]] sleepy.", why: "last Friday → made." }
      ]
    },

    /* ================= 4 · EXPRESSIONS ================= */
    { type: "part", n: "04", icon: "broom", title: "Expressions", text: "You just need to learn them." },

    {
      type: "match", label: "make · expressions", sticker: "broom",
      title: "What does it mean?",
      instructions: "Match each phrase with its meaning.",
      pairs: [
        ["make a mistake", "do something wrong"],
        ["make an appointment", "fix a time to see a doctor"],
        ["make your bed", "put the blanket on the bed nicely"],
        ["make a noise", "be loud"],
        ["make a mess", "make a place dirty"],
        ["make a choice", "decide between two things"],
        ["make a phone call", "call somebody"],
        ["make friends", "meet people and start to like them"]
      ]
    },

    /* ================= 5 · MAKE OR DO ================= */
    { type: "part", n: "05", icon: "tools", title: "make or do?", text: "Make + Unit 40 do in one box." },

    {
      type: "rule", label: "make or do · the idea", sticker: "tools",
      title: "Create it — or just do the job?",
      html: `
        <div class="lines">
          <div class="ln g"><b class="dot">M</b><p><b>make</b> → after it there is something <b>new</b>: a cake, a video, a mess, a noise</p></div>
          <div class="ln g"><b class="dot">D</b><p><b>do</b> → a <b>job</b> or an <b>activity</b>: homework, the dishes, the laundry, the housework, exercise, your best</p></div>
        </div>
        <div class="note">In Ukrainian it’s all «робити» — so the phrase is what you learn: <s>make homework</s> → <b>do</b> homework · <s>do a mistake</s> → <b>make</b> a mistake</div>`
    },

    {
      type: "sort", label: "make or do · sort it", sticker: "broom",
      title: "Two boxes",
      instructions: "Which verb goes with each phrase?",
      categories: [
        { name: "make", words: ["breakfast", "a cake", "a mistake", "a mess", "your bed", "an appointment", "a noise", "a choice"] },
        { name: "do", words: ["homework", "the dishes", "the laundry", "the housework", "exercise", "your best", "nothing", "the shopping"] }
      ]
    },

    {
      type: "mcq", label: "make, do or take?", sticker: "bulb",
      title: "Don’t fall in!",
      instructions: "Choose the right verb.",
      items: [
        { q: "I always ___ my homework after lunch.", options: ["make", "do", "take"], answer: 1 },
        { q: "Can I ___ a photo of your cake?", options: ["take", "make", "do"], answer: 0 },
        { q: "Sorry, I ___ a mistake. Let me try again.", options: ["did", "took", "made"], answer: 2 },
        { q: "Who ___ the dishes in your family?", options: ["does", "makes", "takes"], answer: 0 },
        { q: "Please don’t ___ a noise. The baby is sleeping.", options: ["do", "make", "take"], answer: 1 },
        { q: "We have to ___ a test in English on Friday.", options: ["make", "take", "give"], answer: 1 },
        { q: "My mom ___ the laundry on Saturdays.", options: ["makes", "takes", "does"], answer: 2 },
        { q: "I ___ my bed every morning.", options: ["make", "do", "take"], answer: 0 },
        { q: "Just ___ your best — that’s all!", options: ["make", "do", "take"], answer: 1 },
        { q: "The kids ___ a big mess in the living room.", options: ["did", "made", "took"], answer: 1 }
      ]
    },

    {
      type: "correct", label: "make or do · fix it", sticker: "tools",
      title: "Find and fix the mistake",
      instructions: "Each sentence has <b>one</b> wrong verb. Write the correct sentence.",
      items: [
        { wrong: "I have to make my homework.", answers: ["I have to do my homework."] },
        { wrong: "Can I make a photo of you?", answers: ["Can I take a photo of you?"] },
        { wrong: "He never does his bed.", answers: ["He never makes his bed."] },
        { wrong: "Are you making a test tomorrow?", answers: ["Are you taking a test tomorrow?"] },
        { wrong: "I did a lot of mistakes in the exercise.", answers: ["I made a lot of mistakes in the exercise."] },
        { wrong: "My brother makes the laundry on Sundays.", answers: ["My brother does the laundry on Sundays."] },
        { wrong: "The children are doing a lot of noise.", answers: ["The children are making a lot of noise."] },
        { wrong: "Have you made the dishes yet?", answers: ["Have you done the dishes yet?"] }
      ]
    },

    /* ================= 6 · YOUR TURN ================= */
    { type: "part", n: "06", icon: "balloon", title: "Your turn", text: "Pop a balloon — I ask, you answer. Then you ask me." },

    {
      type: "balloons", label: "speaking · it makes me feel…", sticker: "balloon",
      title: "Twelve balloons, twelve feelings",
      instructions: "Pop a balloon and say how it makes you feel: <i>Rainy days make me (feel) sleepy.</i> Then ask me: <i>How do rainy days make you feel?</i>",
      banner: "😊 HOW DOES IT MAKE YOU FEEL? 😴",
      items: [
        "Rainy days", "Monday mornings", "Math tests", "Your favorite song",
        "Snow", "Horror movies", "Cats", "Long car trips",
        "Pizza", "Homework", "Summer vacation", "Your best friend"
      ]
    },

    /* ================= 7 · SPEED ================= */
    { type: "part", n: "07", icon: "stopwatch", title: "Speed", text: "Make it automatic." },

    {
      type: "drill", label: "automaticity · speed drill", sticker: "stopwatch",
      title: "Twelve quick answers, twice each",
      instructions: "Write the verb + phrase and press <b>Enter</b>. Each one must be right <b>twice</b>.",
      items: [
        { cue: "make or do?", prompt: "breakfast", answers: ["make breakfast"] },
        { cue: "make or do?", prompt: "homework", answers: ["do homework", "do my homework"] },
        { cue: "make or do?", prompt: "a mistake", answers: ["make a mistake"] },
        { cue: "make or do?", prompt: "the dishes", answers: ["do the dishes"] },
        { cue: "make or do?", prompt: "your bed", answers: ["make your bed", "make my bed"] },
        { cue: "make or do?", prompt: "the laundry", answers: ["do the laundry"] },
        { cue: "make or do?", prompt: "a noise", answers: ["make a noise"] },
        { cue: "make or do?", prompt: "exercise", answers: ["do exercise"] },
        { cue: "make or do?", prompt: "an appointment", answers: ["make an appointment"] },
        { cue: "make or do?", prompt: "a mess", answers: ["make a mess"] },
        { cue: "trap!", prompt: "a photo", answers: ["take a photo"] },
        { cue: "past of make", prompt: "make →", answers: ["made"] }
      ]
    },

    /* ================= 8 · WRITING ================= */
    { type: "part", n: "08", icon: "pencil", title: "Writing", text: "Our kitchen, our home." },

    {
      type: "write", label: "writing · our home", sticker: "pencil",
      title: "Who makes what? Who does what?",
      instructions: "Write <b>6–8 sentences</b> about your family. Who makes breakfast or dinner? Who does the dishes and the laundry? What do you make? Add <b>one</b> sentence with <b>…makes me (feel)…</b>",
      words: ["breakfast", "dinner", "cake", "tea", "coffee", "bed", "the dishes", "the laundry", "homework", "the housework", "mess"],
      checks: [
        { label: "make / makes / made — 3 times", pattern: "\\b(make|makes|made|making)\\b", min: 3 },
        { label: "do / does / did — 2 times", pattern: "\\b(do|does|did|doing)\\b", min: 2 },
        { label: "…makes me (feel)…", pattern: "\\b(make|makes|made)\\s+me\\b" },
        { label: "no traps (make homework, make the dishes, do a mistake…)", pattern: "^(?![\\s\\S]*(\\b(make|makes|made|making)\\s+(my\\s+|the\\s+|our\\s+|her\\s+|his\\s+)?(homework|dishes|laundry|housework|shopping|exercise)\\b|\\b(do|does|did|doing)\\s+(a\\s+)?(mistake|mess|noise|cake|breakfast|dinner|lunch|bed)\\b))[\\s\\S]+$" },
        { label: "4+ phrases from the list (they light up)", words: 4 },
        { label: "at least 6 sentences", sentences: 6 }
      ],
      sample: "In my family, my mom makes breakfast every morning. My dad makes coffee for everyone. I make my bed and then I do my homework. My brother does the dishes after dinner, but he always makes a mess. On Sundays my grandma makes deruny. They make me feel happy!"
    },

    /* ================= 9 · SELF-CHECK ================= */
    { type: "part", n: "09", icon: "star", title: "Self-check", text: "What to look at again." },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
