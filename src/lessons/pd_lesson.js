const IMG = f => "assets/img/" + f;
const H = v => ` <span class=hint>(${v})</span>`;
const LESSON = {
  id: "podium-egu13-14-evu42",
  kicker: "present perfect or past · competitive sport",
  titleHTML: '<em>Podium</em>',
  title: "Podium",
  subtitle: "Who has won, who won, who lost — and when exactly did it happen?",
  stickers: ["gold", "ball"],
  confetti: ["gold", "medal", "star", "sparkles", "check"],

  sections: [

    /* ================= 1 · WARM-UP ================= */
    { type: "part", n: "01", icon: "medal", title: "Warm-up", text: "Winners and losers." },

    {
      type: "rule", label: "warm-up · look and talk", sticker: "gold",
      title: "Have you ever won anything?",
      html: `
        <div class="photos">
          <figure class="photo"><img loading="lazy" alt="A big silver cup with red ribbons in a stadium" src="${IMG("facup.jpg")}"><figcaption><b>A · a cup</b><small>Photo: Carlos yo · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="An old scoreboard above an empty stadium" src="${IMG("scoreboard.jpg")}"><figcaption><b>B · a scoreboard</b><small>Photo: DXR · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
        </div>
        <ol class="qs">
          <li>Have you ever taken part in a sports competition? When was it? How did it go?</li>
          <li>Have you ever won anything — a medal, a prize, a game? What did you win?</li>
          <li>Have you ever been captain of a team?</li>
          <li>Have you ever watched a final at a stadium or on TV? Who won?</li>
        </ol>`
    },

    /* ================= 2 · VOCABULARY ================= */
    { type: "part", n: "02", icon: "ball", title: "Competitive sport", text: "Vocabulary in Use Pre-int & Int · Unit 42" },

    {
      type: "rule", label: "vocabulary · winning and losing", sticker: "ball",
      title: "Win, beat, lose, draw",
      html: `
        <div class="podium"><div class="s">2nd<small>the losers of the final</small></div><div class="g">1st<small>the winners, the champions</small></div><div class="b">3rd<small>third place</small></div></div>
        <div class="colloc">
          <div>Spain played Poland. Spain <b>won</b> (the game) 2–0 (“two to nothing”). = Poland <b>lost</b> 2–0.</div>
          <div>Spain <b>beat</b> Poland 2–0. (not <s>won Poland</s>) · Spain <b>defeated</b> Poland. = Poland <b>were defeated</b> by Spain / <b>lost to</b> Spain.</div>
          <div>Spain and Italy <b>tied / drew</b> 1–1. = It was <b>a 1–1 tie / draw</b>.</div>
          <div><b>the score</b> = goals or points during or after a game · <b>the result</b> = only at the end: The score at half-time was 1–0. The final result was 2–0.</div>
          <div><b>a competition</b> · <b>a tournament</b> (tennis, golf) · <b>a league</b> (every team plays every other team) · <b>a cup</b> · <b>a final</b> · <b>take part in</b> · <b>enter</b> a tournament</div>
          <div><b>the winner / the loser</b> · <b>the champions</b> · <b>the captain</b> · <b>a victory</b> (≠ a defeat) · <b>break a world record</b> · <b>lead</b>: At half-time, Milan are <b>leading</b> 1–0. · <b>give up</b> = stop doing a sport</div>
          <div>Very good: <b>superb · incredible · outstanding</b> — Pelé was a superb soccer player.</div>
        </div>
        <div class="note">🇺🇸 American English: <b>soccer</b> (UK football) · <b>tie</b> (UK draw) · 2–0 = “two to nothing” (UK “two nil”)</div>`
    },

    {
      type: "mcq", label: "vocabulary · choose", sticker: "medal",
      title: "Pick the right word",
      instructions: "Choose the word that fits. Watch the grammar after it!",
      items: [
        { q: "Croatia ___ Germany 3–2.", options: ["beat", "won", "drew"], answer: 0 },
        { q: "We ___ the game 4–1.", options: ["beat", "won", "defeated"], answer: 1 },
        { q: "At half-time, the ___ was 1–0 to Arsenal.", options: ["result", "score", "victory"], answer: 1 },
        { q: "The French Open is a famous tennis ___.", options: ["league", "tournament", "captain"], answer: 1 },
        { q: "There are 20 teams in the ___, and each team plays the others twice.", options: ["league", "final", "record"], answer: 0 },
        { q: "It was a fantastic ___ for the team: they won 5–0!", options: ["defeat", "victory", "loser"], answer: 1 },
        { q: "She ___ the world record by two seconds.", options: ["broke", "beat", "won"], answer: 0 },
        { q: "Brazil and Argentina ___ 1–1 last night.", options: ["beat", "tied", "defeated"], answer: 1 },
        { q: "He ___ tennis in 2020 to study medicine.", options: ["gave up", "took part", "led"], answer: 0 },
        { q: "Messi was ___ in the final — the best player on the field.", options: ["outstanding", "defeated", "leading"], answer: 0 }
      ]
    },

    {
      type: "gapfill", label: "vocabulary · complete", sticker: "net",
      title: "Sports desk",
      instructions: "Complete with one word from the unit.",
      items: [
        { text: "It was a good game, but unfortunately we [[lost]] 3–2.", why: "lose → lost." },
        { text: "The [[score]] at half-time was 2–1, but the final [[result]] was a tie.", why: "score = during the game; result = at the end." },
        { text: "Holland [[beat|defeated]] England 2–1, so they are in the semi-final.", why: "beat / defeated + the other team." },
        { text: "Serena Williams has won the Wimbledon [[tournament|championship|title]] seven times.", why: "Wimbledon is a tennis tournament / championship." },
        { text: "She broke the heptathlon world [[record]] again last night.", why: "break a world record." },
        { text: "Bradley Wiggins took [[part]] in the Tour de France in 2009 and finished fourth.", why: "take part in." },
        { text: "I think Djokovic is going to win. He’s [[leading]] 5–2 in the final set.", why: "lead → leading = in front." },
        { text: "Argentina are playing [[against]] Brazil next week.", why: "play against a team." },
        { text: "The [[captain]] of the winning team lifted the cup.", why: "captain = leader of a team." },
        { text: "Germany became World Cup [[champions]] in 2014.", why: "champions = winners of a competition." }
      ]
    },

    {
      type: "match", label: "vocabulary · definitions", sticker: "flag",
      title: "Match the clue",
      instructions: "Match each word with its meaning.",
      pairs: [
        ["race", "a competition to be the fastest"], ["team", "a group of people who play together"],
        ["superb", "a synonym for outstanding"], ["give up", "stop doing a regular activity"],
        ["victory", "when you win a competition"], ["final", "the last game of a competition"],
        ["loser", "the opposite of winner"], ["tournament", "a type of sports competition (tennis, golf)"],
        ["lead", "be in front during a game"], ["tie", "the same score for both teams"]
      ]
    },

    /* ================= 3 · PERFECT OR PAST 1 ================= */
    { type: "part", n: "03", icon: "news", title: "News now or story then?", text: "English Grammar in Use · Unit 13" },

    {
      type: "rule", label: "grammar · present perfect and past 1", sticker: "news",
      title: "Has lost or lost?",
      html: `
        <div class="tline2">
          <div class="pp"><h4>present perfect</h4>
            <p>tells us about <b>now</b>: Tom <b>has lost</b> his key. (he doesn’t have it now)</p>
            <p>new / recent news: Our team <b>has won</b> the cup! · Hannah <b>has had</b> a baby!</p>
            <p>They<b>’ve gone</b> away. They’ll be back on Friday. (they are away now)</p></div>
          <div class="ps"><h4>past simple</h4>
            <p>tells us <b>only about the past</b>: Tom <b>lost</b> his key (but now he has found it).</p>
            <p>old facts, history: Mozart <b>wrote</b> 600 pieces. Who <b>invented</b> the telephone?</p>
            <p>It <b>stopped</b> raining for a while, but now it’s raining again.</p></div>
        </div>
        <h3>News first — then the details</h3>
        <div class="colloc">
          <div>A: Ow! I<b>’ve burnt</b> myself! (news) — B: How <b>did</b> you <b>do</b> that? — A: I <b>picked</b> up a hot dish. (details → past)</div>
          <div>Real news: Our team <b>has won</b> the league! They <b>beat</b> the champions 2–1 on Saturday and <b>scored</b> in the last minute.</div>
        </div>`
    },

    {
      type: "mcq", label: "grammar · now or then?", sticker: "news",
      title: "Is it true now?",
      instructions: "Read the whole line. Does it tell us about now — or only about the past?",
      items: [
        { q: "I can’t find my phone. I think I ___ it.", options: ["’ve lost", "lost", "was losing"], answer: 0 },
        { q: "I ___ my phone last week, but my brother found it in the car.", options: ["’ve lost", "lost", "have been losing"], answer: 1 },
        { q: "The coach ___ away. He’ll be back on Monday.", options: ["has gone", "went", "goes"], answer: 0 },
        { q: "It ___ snowing for an hour, but now it’s snowing again.", options: ["has stopped", "stopped", "stops"], answer: 1 },
        { q: "Who ___ basketball? — James Naismith, in 1891.", options: ["has invented", "invented", "was inventing"], answer: 1 },
        { q: "Breaking news! Ukraine ___ the semi-final!", options: ["have reached", "reached", "were reaching"], answer: 0 },
        { q: "“Ow! I’ve hurt my knee!” “How ___ that?”", options: ["have you done", "did you do", "do you do"], answer: 1 },
        { q: "Pelé ___ more than 1,000 goals in his career.", options: ["has scored", "scored", "scores"], answer: 1 },
        { q: "Look! Somebody ___ the window of the gym.", options: ["has broken", "broke", "breaks"], answer: 0 },
        { q: "“Somebody has spilled water on the floor.” “It wasn’t me. I ___ it.”", options: ["haven’t done", "didn’t do", "don’t do"], answer: 1 }
      ]
    },

    {
      type: "gapfill", label: "grammar · news + details", sticker: "mega",
      title: "Breaking news",
      instructions: "Present perfect for the <b>news</b>, past simple for the <b>details</b>.",
      items: [
        { text: "Great news! Our school team [[has won|'s won]]" + H("win") + " the city cup!", why: "news, result now → has won." },
        { text: "They [[beat]]" + H("beat") + " Lyceum 17 in the final yesterday.", why: "yesterday → past." },
        { text: "Dasha [[scored]]" + H("score") + " two goals in the second half.", why: "detail → past." },
        { text: "Oh no — Max [[has broken|'s broken]]" + H("break") + " his arm!", why: "news → has broken." },
        { text: "“How [[did]] he [[do]]" + H("do") + " that?”", why: "a question about details → did." },
        { text: "“He [[fell]]" + H("fall") + " during training on Tuesday.”", why: "detail → fell." },
        { text: "The coach [[has decided|'s decided]]" + H("decide") + " to choose a new captain.", why: "news → has decided." },
        { text: "When [[did]] you [[hear]]" + H("hear") + " about it?", why: "When…? → past simple." },
        { text: "I [[read]]" + H("read") + " about it on the school website this morning — it’s afternoon now.", why: "this morning is finished → past." },
        { text: "Everybody [[has been|'s been]]" + H("be") + " so happy since the final!", why: "since … until now → has been." }
      ]
    },

    /* ================= 4 · PERFECT OR PAST 2 ================= */
    { type: "part", n: "04", icon: "flag", title: "Finished time?", text: "English Grammar in Use · Unit 14" },

    {
      type: "rule", label: "grammar · present perfect and past 2", sticker: "flag",
      title: "Unfinished period or finished time",
      html: `
        <div class="tline2">
          <div class="pp"><h4>until now</h4>
            <p>today · this week · this year · since 2020 · recently · ever / never · yet</p>
            <p>I<b>’ve done</b> a lot of work today. · It <b>hasn’t rained</b> this week.</p>
            <p><b>Have</b> you <b>seen</b> Anna this morning? (it’s still morning)</p>
            <p>I<b>’ve worked</b> here since 2020. (I still work here)</p></div>
          <div class="ps"><h4>finished</h4>
            <p>yesterday · last week · in 2014 · ten minutes ago · when I was a child · from 2010 to 2014</p>
            <p>I <b>did</b> a lot of work yesterday. · It <b>didn’t rain</b> last week.</p>
            <p><b>Did</b> you <b>see</b> Anna this morning? (it’s now evening)</p>
            <p>I <b>worked</b> there from 2010 to 2014. (not now)</p></div>
        </div>
        <div class="note">⚠️ <s>It has been very cold yesterday.</s> · <s>When have they arrived?</s> · <s>Have you eaten a lot of candy when you were a child?</s></div>`
    },

    {
      type: "sort", label: "grammar · time words", sticker: "flag",
      title: "Which tense do they take?",
      instructions: "Put each time expression where it belongs.",
      categories: [
        { name: "present perfect", words: ["this week", "since 2020", "recently", "ever", "yet", "so far this season"] },
        { name: "past simple", words: ["yesterday", "last week", "in 2014", "ten minutes ago", "when I was a child", "from 2010 to 2014"] }
      ]
    },

    {
      type: "correct", label: "grammar · fix it", sticker: "tools",
      title: "Find and fix the mistake",
      instructions: "Each sentence has <b>one</b> mistake. Write the correct sentence.",
      items: [
        { wrong: "It has been very cold yesterday.", answers: ["It was very cold yesterday."] },
        { wrong: "When have your friends arrived?", answers: ["When did your friends arrive?"] },
        { wrong: "Did you eat anything today? I'm worried — it's only 10 a.m.", answers: ["Have you eaten anything today? I'm worried — it's only 10 a.m.", "Have you eaten anything today? I'm worried - it's only 10 a.m.", "Have you eaten anything today? I'm worried, it's only 10 a.m."] },
        { wrong: "I have worked there from 2010 to 2014.", answers: ["I worked there from 2010 to 2014."] },
        { wrong: "Jack lives in Los Angeles. He lived there for seven years.", answers: ["Jack lives in Los Angeles. He has lived there for seven years.", "Jack lives in Los Angeles. He's lived there for seven years."] },
        { wrong: "Our team won three games this season so far.", answers: ["Our team has won three games this season so far.", "Our team has won three games so far this season."] },
        { wrong: "Mozart has written more than 600 pieces of music.", answers: ["Mozart wrote more than 600 pieces of music."] },
        { wrong: "I didn't see Ben recently. Is he OK?", answers: ["I haven't seen Ben recently. Is he OK?"] }
      ]
    },

    {
      type: "tf2", label: "reading · a sports report", sticker: "news",
      title: "One incredible season",
      instructions: "Read the report. True or false? If it’s false, choose the correct sentence.",
      text: `<div class="article"><span class="tag">school sports</span>
          <h4>Kyiv Wolves are champions!</h4>
          <p>The Kyiv Wolves girls’ volleyball team have won the city league for the first time. On Saturday they beat last year’s champions 3–1 in an incredible final. The captain, Sofia, played superbly: she won 14 points and led the team when they were losing in the second set.</p>
          <p>It hasn’t been an easy season. In October two players gave up volleyball, and the team lost their first three games. “We’ve worked so hard since then,” Sofia says. “We’ve trained four times a week since November.”</p>
          <p>The Wolves have now won eleven games in a row. Next month they are taking part in the national tournament in Lviv. “We’ve never played there,” says coach Ms. Hrytsenko, “but I think we’ll surprise a lot of people.”</p></div>`,
      items: [
        { q: "The Wolves have won the city league before.", answer: false, fix: ["It’s the first time they have won it.", "They won it last year.", "They have won it three times."], fixAnswer: 0 },
        { q: "They beat last year’s champions in the final.", answer: true, fix: [], fixAnswer: 0 },
        { q: "The final result was 3–1.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Sofia is the team’s coach.", answer: false, fix: ["She is the captain.", "She gave up volleyball.", "She is a fan."], fixAnswer: 0 },
        { q: "The team was losing in the second set.", answer: true, fix: [], fixAnswer: 0 },
        { q: "The season started very well.", answer: false, fix: ["They lost their first three games.", "They won their first three games.", "They didn’t play in October."], fixAnswer: 0 },
        { q: "Two players gave up volleyball in October.", answer: true, fix: [], fixAnswer: 0 },
        { q: "They have trained four times a week since November.", answer: true, fix: [], fixAnswer: 0 },
        { q: "They have lost their last two games.", answer: false, fix: ["They have won eleven games in a row.", "They have tied their last game.", "They haven’t played recently."], fixAnswer: 0 },
        { q: "The team has played in Lviv many times.", answer: false, fix: ["They have never played there.", "They played there last month.", "They are not going to Lviv."], fixAnswer: 0 }
      ]
    },

    /* ================= 5 · TALK ================= */
    { type: "part", n: "05", icon: "mega", title: "Your sports news", text: "I ask, you answer — watch the tense!" },

    {
      type: "wheel", label: "speaking · over to you", sticker: "mega",
      title: "Spin the scoreboard",
      start: "Spin. Start with the present perfect (Have you ever…? / I’ve…), then give details in the past simple.",
      colors: ["#B08D2A", "#8D96A3", "#A8622F", "#C8102E"],
      items: [
        { icon: "🏅", short: "won", q: "Have you ever <b>won</b> anything? What was it? When did you win it?" },
        { icon: "🏃‍♀️", short: "race", q: "Have you ever <b>come</b> first, second or third in a race? Tell me the story." },
        { icon: "🧢", short: "captain", q: "Have you ever <b>been</b> captain of a team — or the leader of a group? How did it go?" },
        { icon: "🏟️", short: "final", q: "Have you ever <b>watched</b> a final at a stadium or on TV? Who won? What was the score?" },
        { icon: "🛑", short: "give up", q: "Have you ever <b>given up</b> a sport or hobby? Why did you stop?" },
        { icon: "📅", short: "this week", q: "What sport have you done <b>this week</b>? What did you do <b>last week</b>?" },
        { icon: "⭐", short: "superb", q: "Who is the most <b>outstanding</b> athlete you know about? What have they achieved?" },
        { icon: "📰", short: "news", q: "Tell me one piece of news (sport or school) — then I’ll ask for the details!" }
      ]
    },

    /* ================= 6 · SPEED ================= */
    { type: "part", n: "06", icon: "stopwatch", title: "Speed", text: "Make it automatic." },

    {
      type: "drill", label: "automaticity · speed drill", sticker: "stopwatch",
      title: "Twelve quick answers, twice each",
      instructions: "Type the answer and press <b>Enter</b>. Each one must be right <b>twice</b>.",
      items: [
        { cue: "past · V3", prompt: "win", answers: ["won won", "won, won", "won / won"] },
        { cue: "past · V3", prompt: "lose", answers: ["lost lost", "lost, lost", "lost / lost"] },
        { cue: "past · V3", prompt: "beat", answers: ["beat beaten", "beat, beaten", "beat / beaten"] },
        { cue: "past · V3", prompt: "break", answers: ["broke broken", "broke, broken", "broke / broken"] },
        { cue: "past · V3", prompt: "lead", answers: ["led led", "led, led", "led / led"] },
        { cue: "past · V3", prompt: "give up", answers: ["gave up given up", "gave up, given up", "gave up / given up"] },
        { cue: "PP or past?", prompt: "yesterday", answers: ["past", "past simple"] },
        { cue: "PP or past?", prompt: "since 2020", answers: ["PP", "present perfect"] },
        { cue: "PP or past?", prompt: "ten minutes ago", answers: ["past", "past simple"] },
        { cue: "PP or past?", prompt: "this week", answers: ["PP", "present perfect"] },
        { cue: "news!", prompt: "our team / win / the cup", answers: ["Our team has won the cup!", "Our team has won the cup.", "Our team's won the cup!"] },
        { cue: "detail", prompt: "when / they / win / it?", answers: ["When did they win it?"] }
      ]
    },

    /* ================= 7 · WRITING ================= */
    { type: "part", n: "07", icon: "pencil", title: "Writing", text: "Your sports news report." },

    {
      type: "write", label: "writing · a sports report", sticker: "news",
      title: "Write the report",
      instructions: "Write a short news report (8–10 sentences) about a real or invented game. Start with the <b>news</b> (present perfect), then the <b>details</b> (past simple), then what has happened since then.",
      words: ["won", "beat", "lost", "tied", "score", "result", "final", "league", "tournament", "captain", "champions", "victory", "record", "leading", "superb", "incredible", "outstanding"],
      checks: [
        { label: "present perfect — 3 times", pattern: "\\b(have|has|['’]ve|['’]s|haven['’]?t|hasn['’]?t)\\s+(never\\s+|already\\s+|just\\s+|now\\s+)?(won|lost|beaten|been|played|scored|trained|reached|become|broken|had|tied|given|taken|led|made)\\b", min: 3 },
        { label: "past simple with a finished time (yesterday / last… / on Saturday / ago)", pattern: "\\b(yesterday|last|ago|on (monday|tuesday|wednesday|thursday|friday|saturday|sunday)|in (19|20)\\d\\d)\\b" },
        { label: "6+ sport words (they light up)", words: 6 },
        { label: "at least 8 sentences", sentences: 8 }
      ],
      sample: "Kyiv Lions have won the city cup! They beat the Dnipro Eagles 3–1 in the final on Sunday. The score at half-time was 1–1. Then the captain, Andriy, scored two superb goals. It was an incredible victory, because the Lions lost their first two games this season. They have trained every day since September. They have now won nine games in a row. Next month they are taking part in the national tournament."
    },

    /* ================= 8 · SELF-CHECK ================= */
    { type: "part", n: "08", icon: "star", title: "Self-check", text: "Add today’s mistakes to your error log." },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
