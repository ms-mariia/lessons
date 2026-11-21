const IMG = f => "assets/img/" + f;
const H = v => ` <span class=hint>(${v})</span>`;
const LESSON = {
  id: "same-sky-egu73-75",
  kicker: "the sun · go to school · children or the children",
  titleHTML: 'The same <em>sky</em>',
  title: "The same sky",
  subtitle: "When do we need the — and when is it a mistake? The world, the sky, school, bed, people in general.",
  stickers: ["moon", "shooting-star"],
  confetti: ["star", "moon", "shooting-star", "sparkles", "check"],

  sections: [

    /* ================= 1 · WARM-UP ================= */
    { type: "part", n: "01", icon: "moon", title: "Warm-up", text: "Look up." },

    {
      type: "rule", label: "warm-up · look and talk", sticker: "shooting-star",
      title: "One sky, one world",
      html: `
        <div class="photos">
          <figure class="photo"><img loading="lazy" alt="Lightning in a dark sky over a town" src="${IMG("lightning.jpg")}"><figcaption><b>A</b><small>Photo: Mathias Krumbholz · CC BY-SA 3.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="A polar bear walking on ice in the Arctic" src="${IMG("polarbear.jpg")}"><figcaption><b>B</b><small>Photo: Andreas Weith · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
        </div>
        <ol class="qs">
          <li>A: Do you like watching storms in <b>the sky</b>? Are you afraid of <b>lightning</b>?</li>
          <li>B: This is <b>the Arctic</b>. Would you like to travel to <b>the North Pole</b> — or to <b>the moon</b>?</li>
          <li>Do you prefer to live in a city or in <b>the country</b>? Near <b>the sea</b> or in the mountains?</li>
          <li>What do you usually do on <b>the internet</b> before you go to <b>bed</b>?</li>
        </ol>`
    },

    /* ================= 2 · THE 1 ================= */
    { type: "part", n: "02", icon: "sun", title: "Only one", text: "English Grammar in Use · Unit 73" },

    {
      type: "rule", label: "grammar · the 1", sticker: "sun",
      title: "There is only one",
      html: `
        <div class="ff">
          <div><b class="t">✅ the</b><b>the</b> world · <b>the</b> universe · <b>the</b> sun · <b>the</b> moon · <b>the</b> sky · <b>the</b> sea · <b>the</b> ground · <b>the</b> earth · <b>the</b> equator · <b>the</b> country (not a town)<br><b>the</b> internet · <b>the</b> radio · go to <b>the</b> movies · <b>the</b> theater<br><b>the</b> same · <b>the</b> best · <b>the</b> tallest · <b>the</b> end of the month</div>
          <div><b class="t">🚫 no the</b><b>TV</b>: I watch TV. (but: Turn off <b>the</b> TV = the TV set)<br><b>breakfast, lunch, dinner</b>: What did you have for breakfast? (but: <b>a</b> big lunch)<br><b>space</b>: stars in space · <b>Earth</b> as a planet, like Mars<br><b>platform 5 · room 126 · page 29 · size 38 · vitamin C · Gate 24</b></div>
        </div>
        <div class="note">⚠️ <i>The sun is <b>a</b> star.</i> = one of many stars. · <i>Your sweater is <b>the same</b> color as mine.</i> <s>is same color</s></div>`
    },

    {
      type: "sort", label: "the or no the?", sticker: "puzzle",
      title: "Two orbits",
      instructions: "Which words need <b>the</b> in a normal sentence, and which don’t?",
      categories: [
        { name: "with the", words: ["sun", "sky", "world", "internet", "radio", "same", "equator"] },
        { name: "without the", words: ["breakfast", "space", "TV (I watch…)", "platform 5", "page 29", "size 38", "vitamin C"] }
      ]
    },

    {
      type: "mcq", label: "the 1 · choose", sticker: "moon",
      title: "Is it the?",
      instructions: "Choose the correct option.",
      items: [
        { q: "Would you like to travel in ___ one day?", options: ["the space", "space", "a space"], answer: 1 },
        { q: "There wasn’t a cloud in ___.", options: ["the sky", "sky", "a sky"], answer: 0 },
        { q: "I don’t watch ___ much. I prefer YouTube.", options: ["the TV", "a TV", "TV"], answer: 2 },
        { q: "What did you have for ___ this morning?", options: ["the breakfast", "breakfast", "a breakfast"], answer: 1 },
        { q: "We had ___ on Sunday — three courses!", options: ["very big lunch", "a very big lunch", "the lunch"], answer: 1 },
        { q: "Your phone is ___ as mine.", options: ["same model", "a same model", "the same model"], answer: 2 },
        { q: "Our train leaves from ___.", options: ["platform 4", "the platform 4", "a platform 4"], answer: 0 },
        { q: "Jupiter is ___ in the solar system.", options: ["largest planet", "a largest planet", "the largest planet"], answer: 2 },
        { q: "Let’s go to ___ tonight. There’s a new horror movie.", options: ["the movies", "movies", "a movies"], answer: 0 },
        { q: "Do you ever listen to ___ in the car?", options: ["radio", "the radio", "a radio"], answer: 1 }
      ]
    },

    {
      type: "gapfill", label: "the 1 · write it", sticker: "sun",
      title: "Under the stars",
      instructions: "Write the words in brackets. Add <b>the</b> or <b>a / an</b> only where necessary.",
      items: [
        { text: "[[The sun]] is a star, and the moon goes around the earth." + H("sun"), why: "only one sun → the." },
        { text: "Our apartment is on [[the tenth floor]], so we can see the whole city." + H("tenth floor"), why: "the + first / second / tenth floor." },
        { text: "It was [[the hottest day]] of the year — 38 degrees!" + H("hottest day"), why: "the + superlative." },
        { text: "I couldn’t answer [[question 3]] on the test." + H("question 3"), why: "a number after the noun → no the." },
        { text: "We lay on [[the ground]] and looked at the stars." + H("ground"), why: "the ground." },
        { text: "I didn’t have [[breakfast]] today because I was late." + H("breakfast"), why: "meals → no the." },
        { text: "We had [[a wonderful dinner]] at my grandma’s." + H("wonderful dinner"), why: "adjective + meal → a." },
        { text: "Is your laptop connected to [[the internet]]?" + H("internet"), why: "the internet." },
        { text: "Do you live in a city or in [[the country]]?" + H("country"), why: "the country = not a town." },
        { text: "There are billions of stars in [[space]]." + H("space"), why: "space in the universe → no the." }
      ]
    },

    /* ================= 3 · THE 2 ================= */
    { type: "part", n: "03", icon: "gradcap", title: "School or the school?", text: "English Grammar in Use · Unit 74" },

    {
      type: "rule", label: "grammar · the 2", sticker: "gradcap",
      title: "The idea or the building?",
      html: `
        <div class="vs">
          <div><b class="t">the idea → no the</b>Kids <b>go to school</b> at 8. (as students)<br>He’s <b>in prison</b> / <b>in jail</b>. (a prisoner)<br>She <b>goes to church</b> on Sundays.<br>After school I want to <b>go to college</b>.</div>
          <div><b class="t">a specific building → the</b>Mom <b>went to the school</b> to see my teacher.<br>We went <b>to the prison</b> to visit him.<br>Workers are repairing <b>the church</b>.<br>Where is <b>the college</b>? Is it near here?</div>
        </div>
        <div class="lines">
          <div class="ln g"><b class="dot">1</b><p><b>go to bed / be in bed</b> · <b>go to work / be at work / start work / finish work</b> · <b>go home / get home / be at home</b> — no the! <i>I sat on <b>the</b> bed.</i> = a piece of furniture.</p></div>
          <div class="ln g"><b class="dot">2</b><p>🇺🇸 American English: <b>be in the hospital / go to the hospital</b> (always the!) · <b>go to college</b> (= study after school, also at a university).</p></div>
          <div class="ln g"><b class="dot">3</b><p>Most other places need <b>the</b>: <i>the station, the bank, the post office, the mall, the gym</i>.</p></div>
        </div>`
    },

    {
      type: "mcq", label: "the 2 · choose", sticker: "gradcap",
      title: "Idea or building?",
      instructions: "Choose the correct option. Use American English.",
      items: [
        { q: "My little brother starts ___ next September.", options: ["the school", "school", "a school"], answer: 1 },
        { q: "Parents are waiting outside ___ to pick up their kids.", options: ["the school", "school", "schools"], answer: 0 },
        { q: "It’s late. I’m going to ___. Good night!", options: ["the bed", "a bed", "bed"], answer: 2 },
        { q: "Your phone? It’s on ___, next to your pillow.", options: ["bed", "the bed", "in bed"], answer: 1 },
        { q: "Grandpa broke his leg, so he’s in ___ now.", options: ["the hospital", "hospital", "a hospitals"], answer: 0 },
        { q: "My sister wants to study psychology in ___.", options: ["the college", "college", "a college"], answer: 1 },
        { q: "Dad usually finishes ___ at six.", options: ["the work", "work", "a work"], answer: 1 },
        { q: "What time did you get ___ last night?", options: ["home", "to home", "the home"], answer: 0 },
        { q: "The robbers were sent to ___ for five years.", options: ["the prison", "a prison", "prison"], answer: 2 },
        { q: "Tourists like to visit ___ in the center of our town. It’s 300 years old.", options: ["church", "the church", "churches"], answer: 1 }
      ]
    },

    /* ================= 4 · THE 3 ================= */
    { type: "part", n: "04", icon: "thinking", title: "In general or specific?", text: "English Grammar in Use · Unit 75" },

    {
      type: "rule", label: "grammar · the 3", sticker: "thinking",
      title: "Children or the children?",
      html: `
        <div class="vs">
          <div><b class="t">in general → no the</b>I’m afraid of <b>dogs</b>.<br><b>Doctors</b> earn more than <b>teachers</b>.<br>I love <b>Italian food</b> and <b>pop music</b>.<br>My favorite subject is <b>history</b>.<br><b>Life</b> is hard sometimes.</div>
          <div><b class="t">specific → the</b><b>The dogs</b> next door bark all night.<br><b>The doctor</b> who helped me was kind.<br><b>The food</b> in this café is great.<br><b>The history</b> of our town is interesting.<br><b>The life</b> of a polar bear is hard.</div>
        </div>
        <div class="note">⚠️ <b>most</b> people / most kids / most stores — <s>the most people</s></div>`
    },

    {
      type: "gapfill", label: "the 3 · write it", sticker: "thinking",
      title: "All of them or these ones?",
      instructions: "Write the word in brackets — with <b>the</b> or without.",
      items: [
        { text: "I think [[people]] spend too much time on their phones." + H("people"), why: "people in general." },
        { text: "Who were [[the people]] you were talking to at the party?" + H("people"), why: "specific people." },
        { text: "I don’t really like [[horror movies]]. They scare me." + H("horror movies"), why: "in general." },
        { text: "[[The movie]] we saw last night was really boring." + H("movie"), why: "a specific movie." },
        { text: "[[Most]] teenagers have a smartphone." + H("most"), why: "most + noun, no the." },
        { text: "[[Math]] was my worst subject at school." + H("math"), why: "school subjects → no the." },
        { text: "Can you pass me [[the salt]], please?" + H("salt"), why: "the salt on this table." },
        { text: "Is [[life]] in a big city better than in the country?" + H("life"), why: "life in general." },
        { text: "[[The kids]] in my class are really friendly." + H("kids"), why: "specific kids — in my class." },
        { text: "[[Cats]] sleep about 15 hours a day." + H("cats"), why: "cats in general." }
      ]
    },

    /* ================= 5 · NMT ================= */
    { type: "part", n: "05", icon: "megaphone", title: "Exam practice", text: "Grammar in a text — like Task 6 of the NMT." },

    {
      type: "mcq", label: "NMT style · grammar in context", sticker: "shooting-star",
      title: "A night in the desert",
      instructions: "Read the story and choose the correct option for each gap. Ask yourself: only one? in general? the idea or the building?",
      items: [
        { q: "Last summer my cousin and I went on ___ trip to the Sahara.", options: ["the", "a", "—", "an"], answer: 1 },
        { q: "During the day, ___ was so hot that we couldn’t walk on the sand.", options: ["a sun", "sun", "suns", "the sun"], answer: 3 },
        { q: "In the evening we had ___ around a fire with our guide.", options: ["the dinner", "a dinners", "dinner", "an dinner"], answer: 2 },
        { q: "Then we lay on ___ and looked up.", options: ["the ground", "ground", "a ground", "grounds"], answer: 0 },
        { q: "There were millions of stars in ___.", options: ["a sky", "the sky", "sky", "skies"], answer: 1 },
        { q: "Our guide said that ___ people in cities never see so many stars.", options: ["the most", "a most", "most", "the more"], answer: 2 },
        { q: "He showed us Mars. “It looks like ___ star, but it’s a planet,” he said.", options: ["an", "the", "—", "a"], answer: 3 },
        { q: "It was ___ night of my life.", options: ["most beautiful", "a most beautiful", "the most beautiful", "more beautiful"], answer: 2 },
        { q: "We didn’t go to ___ until 2 a.m.", options: ["the bed", "a bed", "beds", "bed"], answer: 3 },
        { q: "When I got ___, I told everyone: “Go and see the stars!”", options: ["home", "to home", "the home", "at home"], answer: 0 }
      ]
    },

    {
      type: "correct", label: "articles · fix it", sticker: "tools",
      title: "Find and fix the mistake",
      instructions: "Each sentence has <b>one</b> mistake. Write the correct sentence.",
      items: [
        { wrong: "The life is too short to be sad.", answers: ["Life is too short to be sad."] },
        { wrong: "I'm going to the bed now.", answers: ["I'm going to bed now.", "I am going to bed now."] },
        { wrong: "The most people use the internet every day.", answers: ["Most people use the internet every day."] },
        { wrong: "My sister has same phone as me.", answers: ["My sister has the same phone as me.", "My sister has the same phone as I do."] },
        { wrong: "Moon goes around the earth.", answers: ["The moon goes around the earth.", "The moon goes around Earth."] },
        { wrong: "I usually watch the TV in the evening.", answers: ["I usually watch TV in the evening."] },
        { wrong: "Open your books to the page 45.", answers: ["Open your books to page 45."] },
        { wrong: "I love the music, especially jazz.", answers: ["I love music, especially jazz."] }
      ]
    },

    /* ================= 6 · TALK ================= */
    { type: "part", n: "06", icon: "speech", title: "Over to you", text: "Spin it — answer, then ask me the same question." },

    {
      type: "wheel", label: "speaking · big questions", sticker: "speech",
      title: "Spin the planet",
      start: "Spin the wheel. Answer in 3–4 sentences. Watch your the!",
      items: [
        { icon: "🌍", short: "the world", q: "Which place in <b>the world</b> do you most want to see? Why?" },
        { icon: "🚀", short: "space", q: "Would you like to travel in <b>space</b>? To <b>the moon</b> or to Mars?" },
        { icon: "🏡", short: "the country", q: "Is life better in a big city or in <b>the country</b>?" },
        { icon: "🎓", short: "college", q: "What do you want to do after you finish <b>school</b>? Are you going to <b>college</b>?" },
        { icon: "🛏️", short: "bed", q: "What time do you usually go to <b>bed</b>? What do you do in <b>bed</b> before you sleep?" },
        { icon: "📺", short: "TV or the internet", q: "Do you watch <b>TV</b>, or do you only use <b>the internet</b>?" },
        { icon: "🐶", short: "animals", q: "Do you like <b>dogs</b> or <b>cats</b> more? Are you afraid of any animals?" },
        { icon: "🎵", short: "music", q: "What kind of <b>music</b> do you like? What was <b>the best concert</b> you have been to?" }
      ]
    },

    /* ================= 7 · SPEED ================= */
    { type: "part", n: "07", icon: "stopwatch", title: "Speed", text: "the — or nothing? Fast!" },

    {
      type: "drill", label: "automaticity · speed drill", sticker: "stopwatch",
      title: "Twelve quick answers, twice each",
      instructions: "Write the phrase with <b>the</b> or without it and press <b>Enter</b>. Each one must be right <b>twice</b>.",
      items: [
        { cue: "only one", prompt: "look at ___ moon", answers: ["look at the moon", "the moon", "the"] },
        { cue: "meal", prompt: "have ___ lunch", answers: ["have lunch", "lunch"] },
        { cue: "number", prompt: "go to ___ gate 12", answers: ["go to gate 12", "gate 12"] },
        { cue: "go to…", prompt: "go to ___ bed", answers: ["go to bed", "bed"] },
        { cue: "go to…", prompt: "go to ___ work", answers: ["go to work", "work"] },
        { cue: "get…", prompt: "get ___ home", answers: ["get home", "home"] },
        { cue: "🇺🇸", prompt: "be in ___ hospital", answers: ["be in the hospital", "in the hospital", "the hospital", "the"] },
        { cue: "student", prompt: "go to ___ college", answers: ["go to college", "college"] },
        { cue: "general", prompt: "I love ___ animals", answers: ["i love animals", "animals"] },
        { cue: "not the most", prompt: "___ people agree", answers: ["most people agree", "most people", "most"] },
        { cue: "superlative", prompt: "___ best day", answers: ["the best day", "the"] },
        { cue: "watch", prompt: "watch ___ TV", answers: ["watch tv", "tv"] }
      ]
    },

    /* ================= 8 · WRITING ================= */
    { type: "part", n: "08", icon: "pencil", title: "Writing", text: "A perfect day off." },

    {
      type: "write", label: "writing · a perfect day off", sticker: "pencil",
      title: "My perfect day off",
      instructions: "Write <b>7–8 sentences</b> about your perfect day off: where you are, what you eat, what you see, when you go to bed. Use <b>the</b> 3+ times and at least 3 phrases without the (breakfast, go to bed, get home, TV, people in general…).",
      words: ["the sea", "the sky", "the sun", "the country", "the beach", "breakfast", "lunch", "dinner", "go to bed", "get home", "the internet", "TV", "people", "the best"],
      checks: [
        { label: "the — 3 times", pattern: "\\bthe\\b", min: 3 },
        { label: "no “the breakfast / the bed / the TV / the most people / the life”", pattern: "^(?![\\s\\S]*\\b(for the (breakfast|lunch|dinner)|have the (breakfast|lunch|dinner)|had the (breakfast|lunch|dinner)|to the bed|watch(ed)? the TV|the most people|the life is)\\b)[\\s\\S]+$" },
        { label: "4+ words from the list (they light up)", words: 4 },
        { label: "at least 7 sentences", sentences: 7 }
      ],
      sample: "My perfect day off is in the country, near the sea. I wake up late and have breakfast on the balcony. The sun is shining and there isn’t a cloud in the sky. In the afternoon I swim in the sea and read a book on the beach. Most people there are friendly and relaxed. In the evening we have a big dinner with my family. I don’t watch TV or use the internet all day. I go to bed late, after we look at the stars."
    },

    /* ================= 9 · SELF-CHECK ================= */
    { type: "part", n: "09", icon: "star", title: "Self-check", text: "What to look at again." },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
