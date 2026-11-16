const IMG = f => "assets/img/" + f;
const H = v => ` <span class=hint>(${v})</span>`;
const LESSON = {
  id: "plot-twist-egu15-evu43",
  kicker: "had + V3 · flashbacks · books & movies",
  titleHTML: 'Plot <em>twist</em>',
  title: "Plot twist",
  subtitle: "Every good story jumps back in time. Here’s how English does it — with had.",
  stickers: ["film", "openbook"],
  confetti: ["film", "openbook", "star", "sparkles", "clapper"],

  sections: [

    /* ================= 1 · WARM-UP ================= */
    { type: "part", n: "01", icon: "clapper", title: "Warm-up", text: "Books or movies?" },

    {
      type: "rule", label: "warm-up · look and talk", sticker: "film",
      title: "What’s on tonight?",
      html: `
        <div class="photos">
          <figure class="photo"><img loading="lazy" alt="An old movie theater sign and a film festival marquee on a city street" src="${IMG("castro.jpg")}"><figcaption><b>A</b><small>Photo: Dllu · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="Wooden bookshelves in a bright bookstore" src="${IMG("bookstore.jpg")}"><figcaption><b>B</b><small>Photo: PantheraLeo1359531 · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
        </div>
        <ol class="qs">
          <li>A: When did you last go to the movies? What did you see?</li>
          <li>B: When did you last buy a book? Do you read on paper or on your phone?</li>
          <li>Have you ever read a book and then seen the movie? Which was better?</li>
          <li>Do you know how the story ends before you watch something? Do you hate spoilers?</li>
        </ol>`
    },

    /* ================= 2 · BOOKS & MOVIES ================= */
    { type: "part", n: "02", icon: "openbook", title: "Books and movies", text: "Vocabulary in Use Pre-int & Int · Unit 43" },

    {
      type: "rule", label: "vocabulary · books & movies", sticker: "openbook",
      title: "Words for stories",
      html: `
        <div class="lines">
          <div class="ln"><b class="dot">📚</b><p><b>books</b>: literature · fiction · a novel · a thriller · science fiction (sci-fi) · an author · a biography · an autobiography · poetry → a poem → a poet</p></div>
          <div class="ln"><b class="dot">🎬</b><p><b>movies</b>: a horror movie · a comedy · a romantic comedy · a star · an actor · a review · the director · the latest movie · complicated · entertainment</p></div>
          <div class="ln"><b class="dot">💬</b><p><b>phrases</b>: What’s on? (= what’s playing now) · I don’t feel like seeing it. · It came out last week. · It’s based on a novel.</p></div>
        </div>
        <div class="note">Word families: entertain → entertainment → entertainer · review → reviewer · act → acting → actor · direct → directing → director<br>🇺🇸 Your book is British: <b>movie</b> (UK film) · <b>movie theater</b> (UK cinema) · <b>go to the movies</b> (UK go to the cinema) · <b>feel like seeing</b> (UK fancy seeing)</div>`
    },

    {
      type: "match", label: "books & movies · match", sticker: "openbook",
      title: "What does it mean?",
      instructions: "Match each word with its meaning.",
      pairs: [
        ["fiction", "stories about imaginary people and events"],
        ["a novel", "a long fiction book"],
        ["a thriller", "an exciting story, often about crime"],
        ["science fiction", "stories about the future"],
        ["an author", "someone who writes books"],
        ["a biography", "a person’s life story, written by another person"],
        ["poetry", "creative writing in short lines"],
        ["a review", "an opinion about a movie or book, online or in a magazine"],
        ["a star", "a famous actor"],
        ["the director", "the person who tells the actors what to do"]
      ]
    },

    {
      type: "mcq", label: "books & movies · choose", sticker: "film",
      title: "Pick the right word",
      instructions: "Choose the word that fits.",
      items: [
        { q: "What’s ___ at the movie theater tonight?", options: ["happening", "on", "playing on"], answer: 1 },
        { q: "Have you seen the ___ movie by this director? It came out last week.", options: ["late", "lately", "latest"], answer: 2 },
        { q: "I don’t like movies that are too ___. I can’t follow the story.", options: ["complicated", "entertaining", "funny"], answer: 0 },
        { q: "A movie that makes people laugh is a ___.", options: ["thriller", "comedy", "horror movie"], answer: 1 },
        { q: "I don’t really ___ seeing that movie. Let’s watch something else.", options: ["want", "fancy to", "feel like"], answer: 2 },
        { q: "Science fiction is usually about the ___.", options: ["future", "past", "present"], answer: 0 },
        { q: "The story of your own life, written by you, is an ___.", options: ["biography", "autobiography", "article"], answer: 1 },
        { q: "The movie is ___ a novel by a Ukrainian author.", options: ["made of", "based on", "written by"], answer: 1 }
      ]
    },

    {
      type: "gapfill", label: "word families · form it", sticker: "clapper",
      title: "Change the word",
      instructions: "Write the correct form of the word in brackets.",
      items: [
        { text: "My cousin wants to be an [[actor|actress]]." + H("ACT"), why: "a person who acts → actor / actress." },
        { text: "The movie wasn’t deep, but it was great [[entertainment]]." + H("ENTERTAIN"), why: "noun for the thing → entertainment." },
        { text: "The [[acting]] in this series is amazing." + H("ACT"), why: "the work of the actors → acting." },
        { text: "Who [[directed]] this movie?" + H("DIRECT"), why: "past verb → directed." },
        { text: "I read an online [[review]] before I bought the book." + H("REVIEW"), why: "an opinion → a review." },
        { text: "Shevchenko is Ukraine’s most famous [[poet]]." + H("POETRY"), why: "a person → poet." },
        { text: "My sister wrote a beautiful [[poem]] for Mom’s birthday." + H("POETRY"), why: "one piece → a poem." },
        { text: "Christopher Nolan is a famous [[director]]." + H("DIRECT"), why: "a person → director." },
        { text: "The magician at the party was a great [[entertainer]]." + H("ENTERTAIN"), why: "a person → entertainer." },
        { text: "The [[reviewer]] gave the movie only two stars." + H("REVIEW"), why: "a person who writes reviews → reviewer." }
      ]
    },

    /* ================= 3 · PAST PERFECT ================= */
    { type: "part", n: "03", icon: "rewind", title: "Jump back in time", text: "English Grammar in Use · Unit 15" },

    {
      type: "rule", label: "grammar · past perfect", sticker: "rewind",
      title: "had + V3 = even earlier",
      html: `
        <div class="tlx">
          <div class="pp">earlier<small>had + V3</small></div>
          <div class="ps">the story<small>past simple</small></div>
          <div>now<small>present</small></div>
        </div>
        <div class="lines">
          <div class="ln"><b class="dot">A</b><p>The story is in the <b>past simple</b>: <i>We got to the theater.</i> Something happened <b>before</b> that → <b>had + V3</b>: <i>When we got to the theater, the movie <b>had</b> already <b>started</b>.</i></p></div>
          <div class="ln"><b class="dot">B</b><p><b>have seen</b> → before <b>now</b>: <i>I’ve seen her before.</i> · <b>had seen</b> → before <b>then</b>: <i>I wasn’t sure who she was. I’d seen her before.</i></p></div>
          <div class="ln"><b class="dot">C</b><p>Order of events: <i>Was Tom there? — Yes, but he <b>left</b> soon afterwards.</i> (after I came) · <i>No, he’<b>d</b> already <b>left</b>.</i> (before I came)</p></div>
        </div>
        <div class="note">Form: I / you / she / they <b>had</b> (’d) + V3 · <b>hadn’t</b> + V3 · <b>Had</b> you … + V3? · A list of events in order needs no had: <i>I came home, made tea and started the movie.</i></div>`
    },

    {
      type: "gapfill", label: "past perfect · what had happened?", sticker: "rewind",
      title: "Why was it like that?",
      instructions: "Write the verb in the <b>past perfect</b> (had + V3).",
      items: [
        { text: "The streets were wet. It [[had rained|'d rained]] in the night." + H("rain"), why: "the rain was before → had rained." },
        { text: "I couldn’t get into the house. I [[had lost|'d lost]] my keys." + H("lose"), why: "lose → lost → had lost." },
        { text: "The kids were so excited. They [[had never been|'d never been]] to a movie theater before." + H("never / be"), why: "never goes between had and V3." },
        { text: "When I turned on the TV, the game [[had already finished|'d already finished]]." + H("already / finish"), why: "already goes between had and V3." },
        { text: "Anna knew the ending because she [[had read|'d read]] the book." + H("read"), why: "read → read → had read." },
        { text: "Tom didn’t come with us. He [[had already seen|'d already seen]] the movie." + H("already / see"), why: "see → seen." },
        { text: "I was very nervous on the plane. I [[hadn't flown|had not flown]] before." + H("not / fly"), why: "fly → flew → flown." },
        { text: "When we got to the station, the train [[had left|'d left]]." + H("leave"), why: "leave → left → had left." }
      ]
    },

    {
      type: "mcq", label: "past simple or past perfect?", sticker: "film",
      title: "Before or after?",
      instructions: "Choose the right form. Ask yourself: did it happen <b>before</b> the story point?",
      items: [
        { q: "When I arrived at the party, Max ___ home. I didn’t see him.", options: ["had gone", "went", "has gone"], answer: 0 },
        { q: "I didn’t recognize the actor. I ___ him before.", options: ["never saw", "hadn’t seen", "haven’t seen"], answer: 1 },
        { q: "We were late. When we got to the theater, the movie ___.", options: ["already started", "has already started", "had already started"], answer: 2 },
        { q: "“Was Mia at the party when you arrived?” “Yes, but she ___ soon afterwards.”", options: ["left", "had left", "has left"], answer: 0 },
        { q: "She wasn’t hungry because she ___ lunch.", options: ["just has", "has just had", "’d just had"], answer: 2 },
        { q: "I ___ the book, so I knew how the movie ended.", options: ["read", "’d read", "’ve read"], answer: 1 },
        { q: "When I opened my bag, I saw that somebody ___ my phone!", options: ["took", "has taken", "had taken"], answer: 2 },
        { q: "I ___ home, made some tea and started the movie.", options: ["had come", "came", "have come"], answer: 1 },
        { q: "The theater was empty. Everybody ___ home.", options: ["had gone", "went", "goes"], answer: 0 },
        { q: "“Who is that woman? I ___ her before, but I can’t remember where.”", options: ["had seen", "saw before", "’ve seen"], answer: 2 }
      ]
    },

    {
      type: "correct", label: "tenses · fix it", sticker: "tools",
      title: "Find and fix the mistake",
      instructions: "Each sentence has <b>one</b> tense mistake. Write the correct sentence.",
      items: [
        { wrong: "When I got home, my mom has already cooked dinner.", answers: ["When I got home, my mom had already cooked dinner."] },
        { wrong: "I wasn't hungry. I've just had lunch.", answers: ["I wasn't hungry. I'd just had lunch.", "I wasn't hungry. I had just had lunch."] },
        { wrong: "Look! Someone had broken the window.", answers: ["Look! Someone has broken the window.", "Look! Someone's broken the window."] },
        { wrong: "I had gone to bed, read a book and fell asleep.", answers: ["I went to bed, read a book and fell asleep."] },
        { wrong: "The house was dirty. They haven't cleaned it for weeks.", answers: ["The house was dirty. They hadn't cleaned it for weeks.", "The house was dirty. They had not cleaned it for weeks."] },
        { wrong: "She told me she had saw the movie twice.", answers: ["She told me she had seen the movie twice."] },
        { wrong: "When we arrived, the concert already started.", answers: ["When we arrived, the concert had already started."] },
        { wrong: "I didn't know who he was. I never met him before.", answers: ["I didn't know who he was. I had never met him before.", "I didn't know who he was. I'd never met him before."] }
      ]
    },

    /* ================= 4 · A STORY WITH A FLASHBACK ================= */
    { type: "part", n: "04", icon: "oldkey", title: "A story with a flashback", text: "The plot of a (made-up) movie." },

    {
      type: "gapfill", label: "story · The Last Letter", sticker: "oldkey",
      title: "The Last Letter",
      instructions: "Past simple or past perfect? Write the verb.",
      items: [
        { text: "When Emma opened the old box in the attic, she [[found]] a letter." + H("find"), why: "the story point → past simple." },
        { text: "Somebody [[had hidden|'d hidden]] it there many years before." + H("hide"), why: "before she found it → had hidden." },
        { text: "Emma [[read]] the first line and gasped." + H("read"), why: "next event in the story → past simple." },
        { text: "The letter was from her grandmother. Emma [[had never met|'d never met]] her." + H("never / meet"), why: "before the story → had never met." },
        { text: "Her grandmother [[had died|'d died]] before Emma was born." + H("die"), why: "earlier → had died." },
        { text: "In the letter, her grandmother [[explained]] a family secret." + H("explain"), why: "what the letter says now, in the story → past simple." },
        { text: "Years ago she [[had won|'d won]] a lot of money, but she [[had told|'d told]] nobody." + H("win · tell"), why: "both happened long before → had + V3." },
        { text: "Emma [[called]] her mom right away, but there was no answer." + H("call"), why: "story → past simple." },
        { text: "When she got to her mom’s house, her mom [[had already gone|'d already gone]] out." + H("already / go"), why: "before Emma arrived → had already gone." },
        { text: "Then Emma [[noticed]] the same old box on the table — empty. Her mom [[had found|'d found]] the secret first!" + H("notice · find"), why: "noticed = story; had found = earlier. That’s the plot twist!" }
      ]
    },

    {
      type: "mcq", label: "NMT · Task 6 style · grammar in a text", sticker: "openbook",
      title: "The book was better",
      instructions: `Read the text. For each gap choose A, B, C or D.
        <div class="cloze">Last weekend I finally <b>1</b> ______ the movie version of my favorite novel. I <b>2</b> ______ the book three times before, so I knew the story very well. When I got to the theater, the movie <b>3</b> ______ already started, so I missed the first few minutes. While I <b>4</b> ______ the movie, I noticed that a lot of scenes were missing. When I got home, I told my sister that the book <b>5</b> ______ much better.</div>`,
      items: [
        { q: "<b>1</b>", options: ["A see", "B saw", "C have seen", "D had seen"], answer: 1 },
        { q: "<b>2</b>", options: ["A read", "B have read", "C had read", "D was reading"], answer: 2 },
        { q: "<b>3</b>", options: ["A has", "B had", "C was", "D did"], answer: 1 },
        { q: "<b>4</b>", options: ["A was watching", "B had watched", "C watch", "D have watched"], answer: 0 },
        { q: "<b>5</b>", options: ["A is", "B has been", "C was", "D will be"], answer: 2 }
      ]
    },

    /* ================= 5 · TALK ================= */
    { type: "part", n: "05", icon: "speech", title: "Over to you", text: "Spin it — I ask, you answer. Then you ask me." },

    {
      type: "wheel", label: "speaking · books, movies, flashbacks", sticker: "speech",
      title: "Spin the film reel",
      start: "Spin the wheel. Answer in 3–4 sentences. Use had + V3 at least once. Then ask me the same question.",
      colors: ["#E23A3A", "#FFC93C", "#1B1622", "#F08A5D"],
      items: [
        { icon: "🎬", short: "latest", q: "What’s the latest movie you’ve seen? <b>Had</b> you <b>heard</b> anything about it before you saw it?" },
        { icon: "📚", short: "book", q: "What was the last book you read? <b>Had</b> you <b>seen</b> the movie or series first?" },
        { icon: "⭐", short: "star", q: "Who is your favorite actor or actress? What was the first thing you saw with them?" },
        { icon: "😱", short: "genre", q: "Horror, comedy, thriller or sci-fi — what do you love? What do you never watch?" },
        { icon: "📝", short: "review", q: "Do you read reviews before you watch or read something? Has a review ever been wrong?" },
        { icon: "🔁", short: "twist", q: "Tell me about a story with a great plot twist. What <b>had happened</b> before?" },
        { icon: "⏰", short: "late", q: "Have you ever been late for a movie, a lesson or a train? What <b>had</b> already <b>happened</b> when you got there?" },
        { icon: "🍿", short: "first", q: "What was the first movie you saw at a movie theater? <b>Had</b> you ever <b>been</b> to one before?" }
      ]
    },

    /* ================= 6 · SPEED ================= */
    { type: "part", n: "06", icon: "stopwatch", title: "Speed", text: "Make it automatic." },

    {
      type: "drill", label: "automaticity · speed drill", sticker: "stopwatch",
      title: "Twelve verbs, twice each",
      instructions: "Write <b>had + V3</b> and press <b>Enter</b>. Each one must be right <b>twice</b>.",
      items: [
        { cue: "had + V3", prompt: "see", answers: ["had seen"] },
        { cue: "had + V3", prompt: "go", answers: ["had gone"] },
        { cue: "had + V3", prompt: "write", answers: ["had written"] },
        { cue: "had + V3", prompt: "read", answers: ["had read"] },
        { cue: "had + V3", prompt: "leave", answers: ["had left"] },
        { cue: "had + V3", prompt: "break", answers: ["had broken"] },
        { cue: "had + V3", prompt: "begin", answers: ["had begun"] },
        { cue: "had + V3", prompt: "fly", answers: ["had flown"] },
        { cue: "had + V3", prompt: "choose", answers: ["had chosen"] },
        { cue: "had + V3", prompt: "forget", answers: ["had forgotten"] },
        { cue: "had + V3", prompt: "win", answers: ["had won"] },
        { cue: "had + V3", prompt: "hide", answers: ["had hidden"] }
      ]
    },

    /* ================= 7 · WRITING ================= */
    { type: "part", n: "07", icon: "pencil", title: "Writing", text: "Your own plot twist." },

    {
      type: "write", label: "writing · a story with a flashback", sticker: "pencil",
      title: "Write a plot with a twist",
      instructions: "Write <b>7–9 sentences</b>: the plot of a movie or book you know, or your own story. Tell it in the <b>past simple</b> and jump back in time with <b>had + V3</b> at least 3 times. Use 3 words from the lesson.",
      words: ["movie", "novel", "thriller", "comedy", "author", "director", "actor", "star", "review", "plot", "already", "never", "before", "when"],
      checks: [
        { label: "had + V3 — 3 times", pattern: "\\b(had|hadn't|hadn’t)\\s+(already\\s+|never\\s+|just\\s+|not\\s+|ever\\s+)?(?!a\\b|an\\b|the\\b|to\\b|some\\b|no\\b|lunch|dinner|breakfast|fun|time)[a-z]+\\b", min: 3 },
        { label: "past simple story — when … / then …", pattern: "\\b(when|then|after|before)\\b", min: 2 },
        { label: "no “had + V2” (had saw, had went…)", pattern: "^(?![\\s\\S]*\\bhad\\s+(already\\s+|never\\s+|just\\s+)?(saw|went|wrote|took|did|ate|came|began|broke|chose|flew|forgot|gave|hid|knew|spoke|stole|swam|drank|rode|ran)\\b)[\\s\\S]+$" },
        { label: "3+ words from the list (they light up)", words: 3 },
        { label: "at least 7 sentences", sentences: 7 }
      ],
      sample: "When Leo woke up in the hospital, he couldn't remember anything. A doctor told him that he had been in a car accident. Then a woman came in and said she was his wife. Leo was confused because he had never seen her before. Later he found an old photo in his jacket. Somebody had written a name on the back: Anna. When the woman saw the photo, she ran away. She had lied to him from the start!"
    },

    /* ================= 8 · SELF-CHECK ================= */
    { type: "part", n: "08", icon: "star", title: "My mistakes today", text: "Read them, fix them, +1 point for each." },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
