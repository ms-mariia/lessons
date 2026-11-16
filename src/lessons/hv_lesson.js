const IMG = f => "assets/img/" + f;
const H = v => ` <span class=hint>(${v})</span>`;
const LESSON = {
  id: "have-a-good-time-evuel38",
  kicker: "have · has · do you have?",
  titleHTML: 'Have a <em>good</em> time!',
  title: "Have a good time!",
  subtitle: "Breakfast, a swim, a party, a cold — you can have almost anything.",
  stickers: ["cupcake", "swimmer"],
  confetti: ["cupcake", "star", "sparkles", "check", "party"],

  sections: [

    /* ================= 1 · WARM-UP ================= */
    { type: "part", n: "01", icon: "cupcake", title: "Warm-up", text: "What can you have here?" },

    {
      type: "rule", label: "warm-up · look and talk", sticker: "swimmer",
      title: "What can you have?",
      html: `
        <div class="photos">
          <figure class="photo"><img loading="lazy" alt="An outdoor swimming pool" src="${IMG("pool.jpg")}"><figcaption><b>A</b><small>Photo: Bernard Gagnon · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="Half a cake with tiny sugar flowers" src="${IMG("halfcake.jpg")}"><figcaption><b>B</b><small>Photo: Anna.Massini · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
        </div>
        <ol class="qs">
          <li>A: What can you <b>have</b> here? (a swim…) <b>Do</b> you often have a swim?</li>
          <li>B: What can you <b>have</b> at a party? <b>Do</b> you have a party on your birthday?</li>
          <li>What do you <b>have</b> for breakfast? <b>Does</b> your mom have coffee or tea?</li>
        </ol>`
    },

    /* ================= 2 · HAVE + NOUN ================= */
    { type: "part", n: "02", icon: "cupcake", title: "have + …", text: "Vocabulary in Use Elementary · Unit 38" },

    {
      type: "rule", label: "vocabulary · what can you have?", sticker: "cupcake",
      title: "You can have…",
      html: `
        <div class="colloc">
          <div>🍳 <b>have</b> breakfast · lunch · dinner · a meal</div>
          <div>🥤 <b>have</b> a cup of tea / coffee · a drink · an ice cream · some cheese</div>
          <div>📚 <b>have</b> a lesson · an exam · homework</div>
          <div>🚿 <b>have</b> a shower · a bath · a swim</div>
          <div>🎉 <b>have</b> a party · a meeting · a game (of basketball)</div>
          <div>🤒 <b>have</b> a cold · a headache · a problem</div>
        </div>
        <div class="note">💡 Group the words: meals together, school words together, water words together — it’s easier to remember.</div>`
    },

    {
      type: "sort", label: "vocabulary · sort", sticker: "swimmer",
      title: "Put them in groups",
      instructions: "Every phrase goes after <b>have</b>. Which group is it in?",
      categories: [
        { name: "🍳 food & drink", words: ["breakfast", "dinner", "a cup of tea", "an ice cream", "a meal"] },
        { name: "📚 school", words: ["a lesson", "an exam", "homework"] },
        { name: "🚿 water", words: ["a shower", "a bath", "a swim"] },
        { name: "🎉 fun", words: ["a party", "a game of basketball"] }
      ]
    },

    {
      type: "gapfill", label: "vocabulary · complete", sticker: "cupcake",
      title: "Fill the gap",
      instructions: "Write one word from the lists.",
      items: [
        { text: "I always have [[coffee|tea|breakfast]] in the morning.", why: "have coffee / tea / breakfast in the morning." },
        { text: "I have a tennis [[lesson]] every Saturday morning. My teacher is great.", why: "a tennis lesson." },
        { text: "Do you want to have a game of [[basketball|soccer|tennis|chess|football]]?", why: "a game of + sport." },
        { text: "Emma is having a [[party]] on Saturday. Are you going?", why: "have a party." },
        { text: "Do you want to have a [[shower|bath]]? The bathroom is here.", why: "have a shower / a bath." },
        { text: "I have an [[exam]] tomorrow, so I have to study tonight.", why: "have an exam." },
        { text: "We need to have a [[meeting]] to talk about these problems.", why: "have a meeting." },
        { text: "I’m going to the café to have a [[drink|coffee|snack]]. Do you want to come?", why: "have a drink." },
        { text: "The hotel has a pool, so we can have a [[swim]] every day.", why: "have a swim." },
        { text: "We can have [[dinner|lunch]] before the movie, or eat after it.", why: "have dinner = eat in the evening." }
      ]
    },

    /* ================= 3 · EXPRESSIONS ================= */
    { type: "part", n: "03", icon: "party", title: "Expressions with have", text: "Short phrases you hear every day." },

    {
      type: "rule", label: "vocabulary · expressions", sticker: "party",
      title: "Can I have a look?",
      html: `
        <div class="colloc">
          <div>Is that your new phone? Can I <b>have a look</b>? (= look at it)</div>
          <div>Is that your bike? Can I <b>have a go</b>? (= try it, ride it)</div>
          <div>Bye! <b>Have a good trip</b>! (somebody is going away)</div>
          <div>Do you <b>have a moment</b>? Can I <b>have a word</b> with you? (= talk to you)</div>
          <div>We always <b>have a good time</b> at Lena’s parties. (= have fun)</div>
          <div>I want to learn to ski, but I don’t <b>have the time</b>.</div>
          <div>I’m going to <b>have my hair cut</b> on Saturday.</div>
        </div>`
    },

    {
      type: "mcq", label: "vocabulary · what do you say?", sticker: "speech",
      title: "What do you say?",
      instructions: "Choose the best thing to say.",
      items: [
        { q: "Your friend is thirsty. You say: Why don’t you have a ___?", options: ["drink", "look", "moment"], answer: 0 },
        { q: "Your friend is going to Spain tomorrow. You say: Bye! Have a good ___!", options: ["trip", "go", "word"], answer: 0 },
        { q: "Your friend sneezes — Atishoo! — and has a red nose. You say: Oh! Have you got a ___?", options: ["cold", "party", "meal"], answer: 0 },
        { q: "Your friend has a new camera. You say: Is that new? Can I have a ___?", options: ["look", "word", "time"], answer: 0 },
        { q: "You want to ride your friend’s new skateboard. You say: Can I have a ___?", options: ["go", "look", "trip"], answer: 0 },
        { q: "You need to talk to your teacher. You say: Can I have a ___ with you?", options: ["word", "go", "drink"], answer: 0 },
        { q: "The party was great. You say: We had a really good ___!", options: ["time", "moment", "look"], answer: 0 },
        { q: "You are busy. You say: Sorry, I don’t have the ___ to help today.", options: ["time", "moment", "word"], answer: 0 }
      ]
    },

    {
      type: "correct", label: "vocabulary · fix it", sticker: "tools",
      title: "Find and fix the mistake",
      instructions: "Each sentence has <b>one</b> mistake. Write the correct sentence.",
      items: [
        { wrong: "Please call Grandma when you have the moment.", answers: ["Please call Grandma when you have a moment."] },
        { wrong: "Sara went to the hairdresser's to have cut her hair.", answers: ["Sara went to the hairdresser's to have her hair cut."] },
        { wrong: "That game looks great. Can I have a going?", answers: ["That game looks great. Can I have a go?"] },
        { wrong: "I want to have some words with my teacher after the lesson.", answers: ["I want to have a word with my teacher after the lesson."] },
        { wrong: "Mom didn't have the times to go to the store today.", answers: ["Mom didn't have the time to go to the store today.", "Mom didn't have time to go to the store today."] },
        { wrong: "I am have a shower every morning.", answers: ["I have a shower every morning."] }
      ]
    },

    /* ================= 4 · HAVE = TEAM DO ================= */
    { type: "part", n: "04", icon: "redheart", title: "have is Team DO", text: "Questions and negatives with do / does." },

    {
      type: "rule", label: "grammar · have / has", sticker: "redheart",
      title: "have is a verb — so it’s Team DO!",
      html: `
        <table class="qtable">
          <tr><th></th><th>+</th><th>−</th><th>?</th></tr>
          <tr><td>I / you / we / they</td><td>I <b>have</b> a dog.</td><td>I <b>don’t have</b> a dog.</td><td><b>Do</b> you <b>have</b> a dog?</td></tr>
          <tr><td>he / she / it</td><td>She <b>has</b> a dog.</td><td>She <b>doesn’t have</b> a dog.</td><td><b>Does</b> she <b>have</b> a dog?</td></tr>
        </table>
        <div class="note">⚠️ <s>I am have</s> · <s>She haves</s> · <s>Does she has?</s> · <s>She doesn’t has</s> → after does / doesn’t: <b>have</b>!</div>
        <div class="colloc">
          <div>In British books you also see <b>have got</b>: I<b>’ve got</b> a sister. <b>Have</b> you <b>got</b> a pen? — in American English we usually say: I <b>have</b> a sister. <b>Do</b> you <b>have</b> a pen?</div>
          <div><b>have to</b> = must: The museum isn’t free. You <b>have to</b> pay $10. · She <b>has to</b> walk to school this week.</div>
        </div>`
    },

    {
      type: "gapfill", label: "grammar · have / has", sticker: "redheart",
      title: "have, has, do or does?",
      instructions: "Write <b>have, has, do, does, don’t</b> or <b>doesn’t</b>.",
      items: [
        { text: "My sister [[has]] a cat and two fish.", why: "she → has." },
        { text: "“[[Do]] you have any brothers or sisters?” “Yes, I [[do]].”", why: "you → Do you have…? Yes, I do." },
        { text: "Tom [[doesn't|does not]] have a phone. His parents say he’s too young.", why: "he → doesn’t have." },
        { text: "“[[Does]] your dad have a car?” “No, he [[doesn't|does not]].”", why: "he → Does … have? No, he doesn’t." },
        { text: "We [[have]] English on Mondays and Wednesdays.", why: "we → have." },
        { text: "Our school [[has]] a big gym.", why: "our school = it → has." },
        { text: "What time [[do]] you have lunch?", why: "you → do." },
        { text: "Masha always [[has]] a shower in the evening.", why: "she → has." },
        { text: "I [[don't|do not]] have time today. Sorry!", why: "I → don’t have." },
        { text: "The museum isn’t free. You [[have]] to pay $10.", why: "have to = must." }
      ]
    },

    {
      type: "build", label: "grammar · have questions", sticker: "redheart",
      title: "Do / Does … have?",
      instructions: "Tap a card, then tap a slot. <b>One card is wrong</b> — leave it out.",
      items: [
        { aux: "Do", who: "you", does: "have", what: "a pet", wrong: "Are", end: "?" },
        { aux: "Does", who: "your sister", does: "have", what: "a phone", wrong: "has", end: "?" },
        { qw: "What", aux: "do", who: "you", does: "have", when: "for breakfast", wrong: "are", end: "?" },
        { qw: "What time", aux: "does", who: "your mom", does: "have", what: "lunch", wrong: "has", end: "?" },
        { aux: "Do", who: "they", does: "have", what: "a big house", wrong: "Does", end: "?" },
        { qw: "How many", aux: "do", who: "you", does: "have", what: "lessons today", wrong: "has", end: "?" }
      ]
    },

    /* ================= 5 · NMT TASK 3 ================= */
    { type: "part", n: "05", icon: "news", title: "NMT Task 3 — first try", text: "Short notices. Use a dictionary if you need one." },

    {
      type: "rule", label: "NMT · how Task 3 works", sticker: "news",
      title: "How to do Task 3",
      html: `
        <ol class="qs">
          <li>First read sentences <b>A–H</b>. Underline the key words.</li>
          <li>Then read each notice <b>11–16</b> and find the sentence that says the same thing <b>in other words</b>.</li>
          <li>Two sentences are <b>extra</b>. Don’t choose a sentence only because it has the same word!</li>
        </ol>
        <div class="nmt3">
          <div><b>A</b>You can eat something here in the morning.</div>
          <div><b>B</b>Small children can’t go in without an adult.</div>
          <div><b>C</b>Somebody can’t find something.</div>
          <div><b>D</b>You have to be quiet here.</div>
          <div><b>E</b>You can have a swim at a friend’s house.</div>
          <div><b>F</b>You can’t see the doctor at the end of the week.</div>
          <div><b>G</b>You can have dinner here.</div>
          <div><b>H</b>The pool is closed on Sundays.</div>
        </div>`
    },

    {
      type: "mcq", label: "NMT · Task 3", sticker: "news",
      title: "Match the notices",
      instructions: "Which sentence (A–H) matches each notice? Two letters are extra.",
      items: [
        { q: `<div class="notice"><b>11 · CITY POOL</b><br>Open 7 a.m.–9 p.m., every day. Children under 10 have to swim with a parent.</div>`, options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: 1 },
        { q: `<div class="notice"><b>12 · CAFÉ ROSA</b><br>Have breakfast with us! Pancakes + hot chocolate — $6 until 11 a.m.</div>`, options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: 0 },
        { q: `<div class="notice"><b>13 · LOST!</b><br>Black phone with a red case. Please bring it to Max in Room 12.</div>`, options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: 2 },
        { q: `<div class="notice"><b>14 · SCHOOL LIBRARY</b><br>Please don’t talk on the phone or speak loudly. People are reading.</div>`, options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: 3 },
        { q: `<div class="notice"><b>15 · PARTY TIME!</b><br>Lena is having a birthday party on Saturday at 5. Bring your swimsuit — the party is next to her pool!</div>`, options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: 4 },
        { q: `<div class="notice"><b>16 · DR. BROWN, DENTIST</b><br>No appointments on Fridays. Please call on Monday.</div>`, options: ["A", "B", "C", "D", "E", "F", "G", "H"], answer: 5 }
      ]
    },

    /* ================= 6 · TALK ================= */
    { type: "part", n: "06", icon: "speech", title: "Ask me", text: "Role swap: you ask." },

    {
      type: "rephrase", label: "role swap · questions", sticker: "speech",
      title: "Questions for your teacher",
      instructions: "Make the question. Then <b>ask me</b> — for real!",
      items: [
        { prompt: "you / have / any brothers or sisters", key: "?", answers: ["Do you have any brothers or sisters?"] },
        { prompt: "what time / you / have / lunch", key: "?", answers: ["What time do you have lunch?"] },
        { prompt: "what / you / have / for breakfast", key: "?", answers: ["What do you have for breakfast?"] },
        { prompt: "you / have / a pet", key: "?", answers: ["Do you have a pet?"] },
        { prompt: "your mom / have / a car", key: "?", answers: ["Does your mom have a car?"] },
        { prompt: "you / always / have / a good time / at parties", key: "?", answers: ["Do you always have a good time at parties?"] }
      ]
    },

    /* ================= 7 · SPEED ================= */
    { type: "part", n: "07", icon: "stopwatch", title: "Speed", text: "Make it automatic." },

    {
      type: "drill", label: "automaticity · speed drill", sticker: "stopwatch",
      title: "Twelve sentences, twice each",
      instructions: "Build the full sentence and press <b>Enter</b>. Each one must be right <b>twice</b>.",
      items: [
        { cue: "+", prompt: "I / have / a cat", answers: ["I have a cat."] },
        { cue: "+", prompt: "she / have / a cat", answers: ["She has a cat."] },
        { cue: "−", prompt: "I / not / have / time", answers: ["I don't have time.", "I do not have time."] },
        { cue: "−", prompt: "he / not / have / a phone", answers: ["He doesn't have a phone.", "He does not have a phone."] },
        { cue: "?", prompt: "you / have / a pen", answers: ["Do you have a pen?"] },
        { cue: "?", prompt: "she / have / a sister", answers: ["Does she have a sister?"] },
        { cue: "+", prompt: "we / have / English / on Mondays", answers: ["We have English on Mondays."] },
        { cue: "?", prompt: "your dad / have / a car", answers: ["Does your dad have a car?"] },
        { cue: "say it", prompt: "someone is going away", answers: ["Have a good trip!", "Have a good trip"] },
        { cue: "say it", prompt: "you want to see a new phone", answers: ["Can I have a look?", "Can I have a look"] },
        { cue: "have to", prompt: "you / pay / $10", answers: ["You have to pay $10.", "You have to pay 10 dollars."] },
        { cue: "?", prompt: "what time / you / have / dinner", answers: ["What time do you have dinner?"] }
      ]
    },

    /* ================= 8 · WRITING ================= */
    { type: "part", n: "08", icon: "pencil", title: "Writing", text: "My day with have." },

    {
      type: "write", label: "writing · my day", sticker: "pencil",
      title: "My day",
      instructions: "Write <b>6 sentences</b> about your normal day. Use <b>have / has</b> in every sentence — and one sentence with <b>don’t / doesn’t have</b>.",
      words: ["breakfast", "lunch", "dinner", "a shower", "a lesson", "an exam", "homework", "a cup of", "a good time", "a swim"],
      checks: [
        { label: "have / has — 5 times", pattern: "\\b(have|has)\\b", min: 5 },
        { label: "don’t have / doesn’t have", pattern: "\\b(don['’]?t|doesn['’]?t|do not|does not)\\s+have\\b" },
        { label: "no “am have / is have / haves / does … has”", pattern: "^(?![\\s\\S]*(\\b(am|is|are)\\s+have\\b|\\bhaves\\b|\\b(does|doesn['’]?t)\\s+(\\w+\\s+)?has\\b))[\\s\\S]+$" },
        { label: "3+ have words (they light up)", words: 3 },
        { label: "at least 6 sentences", sentences: 6 }
      ],
      sample: "I have breakfast at 7. I have a cup of tea and a sandwich. I have six lessons at school. My sister has lunch at school, but I don’t have lunch there. In the evening I have a shower. On Saturdays we have a good time with my friends."
    },

    /* ================= 9 · SELF-CHECK ================= */
    { type: "part", n: "09", icon: "star", title: "My mistakes today", text: "Read them, fix them, +1 point for each." },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
