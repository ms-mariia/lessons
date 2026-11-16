const IMG = f => "assets/img/" + f;
const H = v => ` <span class=hint>(${v})</span>`;
const LESSON = {
  id: "then-and-now-egiu18-20-evu81",
  kicker: "how long · for / since / ago · make / do / take",
  titleHTML: '<em>Then</em> &amp; <i>Now</i>',
  title: "Then & Now",
  subtitle: "Finished time or time until now? Plus three verbs that always cause trouble.",
  stickers: ["hourglass", "cameraflash"],
  confetti: ["hourglass", "mclock", "star", "sparkles", "check"],

  sections: [

    /* ================= 1 · WARM-UP ================= */
    { type: "part", n: "01", icon: "mclock", title: "Warm-up", text: "Then and now." },

    {
      type: "rule", label: "warm-up · look and talk", sticker: "framed",
      title: "How long? When?",
      html: `
        <div class="photos">
          <figure class="photo"><img loading="lazy" alt="An old film camera" src="${IMG("camera.jpg")}"><figcaption><b>A · an old film camera</b><small>Photo: Friedrich Haag · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="A red brick clock tower in a park" src="${IMG("clocktower.jpg")}"><figcaption><b>B · a clock tower</b><small>Photo: Mykola Swarnyk · CC BY-SA 3.0 · Wikimedia Commons</small></figcaption></figure>
        </div>
        <ol class="qs">
          <li>A: How long have people <b>taken</b> photos with phones? When did <i>you</i> get your first phone?</li>
          <li>A: What’s the best photo you’ve ever <b>taken</b>? When did you take it?</li>
          <li>B: How long do you think the tower has been there? Have you ever climbed a tower like this?</li>
          <li>How long have you lived in your home? When did you start school?</li>
        </ol>`
    },

    /* ================= 2 · FOR / SINCE / AGO ================= */
    { type: "part", n: "02", icon: "hourglass", title: "for · since · ago", text: "Essential Grammar in Use · Unit 19" },

    {
      type: "rule", label: "grammar · for / since / ago", sticker: "hourglass",
      title: "How much time — or from when?",
      html: `
        <div class="tn">
          <div class="then"><h4>for</h4><p>+ a <b>period</b>: for three days · for two hours · for a long time</p><p>I’ve lived here <b>for</b> six years.</p></div>
          <div class="now"><h4>since</h4><p>+ the <b>start</b>: since Monday · since 2020 · since I was ten</p><p>I’ve lived here <b>since</b> 2020.</p></div>
        </div>
        <div class="tline">2020 <span></span> now</div>
        <div class="colloc">
          <div><b>ago</b> = before now → with the <b>past</b>: She started her new job three weeks <b>ago</b>. · I had dinner an hour <b>ago</b>.</div>
          <div>When did Helen arrive? — She arrived three days <b>ago</b>. · How long has she been here? — <b>For</b> three days.</div>
        </div>
        <div class="note">⚠️ <s>since two hours</s> → <b>for</b> two hours · <s>for 9 o’clock</s> → <b>since</b> 9 o’clock</div>`
    },

    {
      type: "sort", label: "for or since? · sort", sticker: "mclock",
      title: "for or since?",
      instructions: "Is it a <b>period</b> (for) or the <b>start</b> (since)?",
      categories: [
        { name: "for", words: ["three days", "a long time", "ten minutes", "two hours", "six months", "ages"] },
        { name: "since", words: ["Monday", "2020", "9 o’clock", "Christmas", "I was ten", "last summer"] }
      ]
    },

    /* ================= 3 · HOW LONG ================= */
    { type: "part", n: "03", icon: "mclock", title: "How long have you…?", text: "Essential Grammar in Use · Unit 18" },

    {
      type: "rule", label: "grammar · how long", sticker: "mclock",
      title: "is → has been",
      html: `
        <p>Something started in the past and is <b>still true now</b> → present perfect + for / since.</p>
        <div class="tn">
          <div class="then"><h4>now only</h4><p>Dan and Kate <b>are</b> married.</p><p>I <b>know</b> Lisa.</p><p>I <b>have</b> a car.</p><p>I’<b>m learning</b> German.</p></div>
          <div class="now"><h4>from then until now</h4><p>They<b>’ve been</b> married for five years.</p><p>I<b>’ve known</b> her for a long time.</p><p>I<b>’ve had</b> it since April.</p><p>I<b>’ve been learning</b> it for two years.</p></div>
        </div>
        <div class="legend">
          <div class="lg c-qw"><b>Question word</b><span>How long</span></div>
          <div class="lg c-aux"><b>have / has</b><span>have</span></div>
          <div class="lg c-who"><b>Who?</b><span>you</span></div>
          <div class="lg c-does"><b>Verb (V3)</b><span>known</span></div>
          <div class="lg c-what"><b>What? Whom?</b><span>her?</span></div>
        </div>
        <div class="note">⚠️ <s>They are married for five years.</s> · <s>How long do you know her?</s> · <s>I know her since 2019.</s></div>`
    },

    {
      type: "gapfill", label: "grammar · how long", sticker: "framed",
      title: "From then until now",
      instructions: "Use the <b>present perfect</b> (have / has + V3). Short forms are OK.",
      items: [
        { text: "Dan and Kate are married. They [[have been|'ve been]]" + H("be") + " married for five years.", why: "still married → have been + for." },
        { text: "I know Lisa. I [[have known|'ve known]]" + H("know") + " her for a long time.", why: "know → have known (not I know her for…)." },
        { text: "Mia lives in Chicago. She [[has lived|'s lived]]" + H("live") + " there all her life.", why: "she → has lived." },
        { text: "I have a bike. I [[have had|'ve had]]" + H("have") + " it since April.", why: "have → have had." },
        { text: "“How long [[have]] you [[been]]" + H("be") + " at this school?” “Since September.”", why: "How long have you been…?" },
        { text: "Ben is sick. He [[has been|'s been]]" + H("be") + " sick since Monday.", why: "he → has been." },
        { text: "“How long [[has]] your dad [[had]]" + H("have") + " his car?” “For ten years.”", why: "How long has he had…?" },
        { text: "I’m learning Spanish. I [[have been learning|'ve been learning]]" + H("learn") + " it for two years.", why: "an action → have been + -ing." },
        { text: "It’s raining. It [[has been raining|'s been raining]]" + H("rain") + " all day.", why: "it → has been raining." },
        { text: "We [[have known|'ve known]]" + H("know") + " each other since we were six.", why: "we → have known + since." }
      ]
    },

    {
      type: "build", label: "grammar · how long questions", sticker: "hourglass",
      title: "Ask: How long…?",
      instructions: "Tap a card, then tap a slot. <b>One card is wrong</b> — leave it out.",
      items: [
        { qw: "How long", aux: "have", who: "you", does: "known", what: "your best friend", wrong: "know", end: "?" },
        { qw: "How long", aux: "has", who: "she", does: "lived", where: "in Kyiv", wrong: "lives", end: "?" },
        { qw: "How long", aux: "have", who: "they", does: "been", what: "married", wrong: "are", end: "?" },
        { qw: "How long", aux: "have", who: "you", does: "had", what: "this phone", wrong: "has", end: "?" },
        { qw: "How long", aux: "has", who: "your brother", does: "been", what: "sick", wrong: "is", end: "?" },
        { qw: "How long", aux: "have", who: "you", does: "been learning", what: "English", wrong: "are", end: "?" }
      ]
    },

    /* ================= 4 · PERFECT OR PAST ================= */
    { type: "part", n: "04", icon: "framed", title: "Perfect or past?", text: "Essential Grammar in Use · Unit 20" },

    {
      type: "rule", label: "grammar · I have done / I did", sticker: "framed",
      title: "Is the time finished?",
      html: `
        <div class="tn">
          <div class="then"><h4>past simple</h4>
            <p>a <b>finished time</b>: yesterday · last week · in 2019 · three days <b>ago</b> · When…? · What time…?</p>
            <p>I <b>saw</b> Paula yesterday. · <b>When did</b> you <b>buy</b> your phone?</p>
            <p>We <b>lived</b> in Glasgow for six years (but now we live in Singapore).</p></div>
          <div class="now"><h4>present perfect</h4>
            <p><b>time until now</b>: ever · never · yet · for · since · no time word, result now</p>
            <p>I<b>’ve lost</b> my key (I can’t find it now). · <b>Have</b> you ever <b>been</b> to Spain?</p>
            <p>We<b>’ve lived</b> in Singapore for six years (we live there now).</p></div>
        </div>
        <div class="colloc">
          <div>Ben <b>has gone</b> home. (he isn’t here now) · Ben <b>went</b> home ten minutes ago.</div>
          <div>Sam <b>hasn’t phoned</b> me yet. · Sam <b>didn’t phone</b> me yesterday.</div>
        </div>
        <div class="note">⚠️ Never present perfect with a finished time: <s>I have seen Paula yesterday.</s> <s>When have you bought it?</s></div>`
    },

    {
      type: "mcq", label: "grammar · perfect or past?", sticker: "mclock",
      title: "Finished time or until now?",
      instructions: "Find the time word first — is that time finished?",
      items: [
        { q: "I ___ Paula yesterday.", options: ["have seen", "saw", "see"], answer: 1 },
        { q: "“Where’s Ben?” “He ___ home.”", options: ["went", "has gone", "goes"], answer: 1 },
        { q: "When ___ your phone?", options: ["have you bought", "did you buy", "you bought"], answer: 1 },
        { q: "___ to Spain?", options: ["Did you ever go", "Have you ever been", "Were you ever"], answer: 1 },
        { q: "We ___ in Glasgow for six years, but now we live in Singapore.", options: ["have lived", "lived", "live"], answer: 1 },
        { q: "We ___ in Singapore for six years — and we still love it here.", options: ["have lived", "lived", "live"], answer: 0 },
        { q: "Susan started her new job three weeks ___.", options: ["for", "since", "ago"], answer: 2 },
        { q: "I’ve had this phone ___ my birthday.", options: ["for", "since", "ago"], answer: 1 },
        { q: "Sam ___ me yet.", options: ["didn’t phone", "hasn’t phoned", "doesn’t phone"], answer: 1 },
        { q: "Shakespeare ___ many plays and poems.", options: ["has written", "wrote", "writes"], answer: 1 }
      ]
    },

    {
      type: "correct", label: "fix it · perfect or past", sticker: "tools",
      title: "Find and fix the mistake",
      instructions: "Each sentence has <b>one</b> mistake. Write the correct sentence.",
      items: [
        { wrong: "I have seen Paula yesterday.", answers: ["I saw Paula yesterday."] },
        { wrong: "When have you bought your computer?", answers: ["When did you buy your computer?"] },
        { wrong: "They are married for five years.", answers: ["They have been married for five years.", "They've been married for five years."] },
        { wrong: "How long do you know her?", answers: ["How long have you known her?"] },
        { wrong: "I've lived here since three years.", answers: ["I've lived here for three years.", "I have lived here for three years."] },
        { wrong: "I have finished school in 2020.", answers: ["I finished school in 2020."] },
        { wrong: "He has gone home ten minutes ago.", answers: ["He went home ten minutes ago."] },
        { wrong: "I know him since 2019.", answers: ["I have known him since 2019.", "I've known him since 2019."] }
      ]
    },

    {
      type: "tf2", label: "reading · then & now", sticker: "bread",
      title: "Rosa’s bakery",
      instructions: "Read the article. True or false? If it’s false, choose the correct sentence.",
      text: `<div class="profile">
          <figure class="photo" style="margin:0 0 12px"><img loading="lazy" alt="A pink building with a bakery on the ground floor" src="${IMG("bakery.jpg")}"><figcaption><b>a neighborhood bakery</b><small>Photo: Johann Jaritz · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <h4>Then &amp; Now: Rosa Rivera</h4>
          <p>Rosa Rivera came to Chicago from Mexico in 2001. She opened a small bakery on Maple Street eight years ago, and she has worked there every day since then. Her son Leo has helped her since he was 14 — now he does the deliveries before school.</p>
          <p>Last year the bakery won a prize for the best bread in the city. Rosa has never taken a long vacation: she took one week off in 2019 to visit her sister. “I’ve made a lot of mistakes,” she says, “but I’ve always done my best. And I’ve made a lot of friends here.”</p>
        </div>`,
      items: [
        { q: "Rosa came to Chicago in 2001.", answer: true, fix: [], fixAnswer: 0 },
        { q: "She opened the bakery in 2001.", answer: false, fix: ["She opened it eight years ago.", "She opened it last year.", "She opened it in 2019."], fixAnswer: 0 },
        { q: "She still works at the bakery.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Leo has helped at the bakery since he was 14.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Leo doesn’t help at the bakery now.", answer: false, fix: ["He stopped last year.", "He does the deliveries before school.", "He only helps on vacations."], fixAnswer: 1 },
        { q: "The bakery won a prize two years ago.", answer: false, fix: ["It won a prize last year.", "It has never won a prize.", "It won a prize in 2001."], fixAnswer: 0 },
        { q: "Rosa has taken a lot of long vacations.", answer: false, fix: ["She has never taken a long vacation.", "She takes a vacation every summer.", "She took a month off in 2019."], fixAnswer: 0 },
        { q: "She visited her sister in 2019.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Rosa says she has never made mistakes.", answer: false, fix: ["She says she has made a lot of mistakes.", "She says she made one mistake.", "She doesn’t talk about mistakes."], fixAnswer: 0 },
        { q: "She has made a lot of friends at the bakery.", answer: true, fix: [], fixAnswer: 0 }
      ]
    },

    /* ================= 5 · MAKE / DO / TAKE ================= */
    { type: "part", n: "05", icon: "cameraflash", title: "make · do · take", text: "Vocabulary in Use Pre-int & Int · Unit 81" },

    {
      type: "rule", label: "vocabulary · make / do / take", sticker: "cameraflash",
      title: "Three verbs, many partners",
      html: `
        <div class="colloc">
          <div><b>make</b> a mistake · an effort · a lot of noise · friends (with somebody) · up your mind (= decide)</div>
          <div><b>make</b> = cause: He <b>makes</b> me laugh. · It <b>made</b> them angry. · <b>make</b> = force: My parents <b>made</b> me do my homework.</div>
          <div><b>do</b> homework · the housework · your best · your hair · something / nothing</div>
          <div><b>do</b> = a general action: What shall we <b>do</b>? · Don’t just stand there — <b>do</b> something!</div>
          <div><b>take</b> a photo · a break · notes · it easy (= relax) · size 38 · Do they <b>take</b> credit cards?</div>
          <div><b>take</b> = remove / steal: I <b>took</b> the key out of my pocket. · Someone <b>has taken</b> my pen!</div>
          <div>Both OK: <b>take / have</b> a shower · a look · <b>do / take</b> a course · <b>make / take</b> a decision</div>
        </div>
        <div class="note">⚠️ <s>do a mistake</s> → <b>make</b> a mistake · <s>make homework</s> → <b>do</b> homework · <s>make a photo</s> → <b>take</b> a photo</div>`
    },

    {
      type: "sort", label: "words · make, do or take?", sticker: "tools",
      title: "Find the partner",
      instructions: "Put each phrase in the right box.",
      categories: [
        { name: "make", words: ["a mistake", "an effort", "a lot of noise", "friends", "up your mind"] },
        { name: "do", words: ["homework", "the housework", "your best", "your hair", "nothing"] },
        { name: "take", words: ["a photo", "a break", "notes", "it easy", "size 38"] }
      ]
    },

    {
      type: "gapfill", label: "words + tenses", sticker: "cameraflash",
      title: "Right verb, right tense",
      instructions: "Choose <b>make, do</b> or <b>take</b> and put it in the form in brackets.",
      items: [
        { text: "Oh no! I [[have made|'ve made]] a mistake." + H("present perfect"), why: "make a mistake; result now → have made." },
        { text: "Lena [[took]] a great photo of me yesterday." + H("past"), why: "take a photo; yesterday → took." },
        { text: "I [[haven't done|have not done]] my homework yet." + H("present perfect −"), why: "do homework; yet → haven’t done." },
        { text: "We [[made]] friends with two girls from Canada last summer." + H("past"), why: "make friends; last summer → made." },
        { text: "You look tired. [[Take]] a break!", why: "take a break." },
        { text: "“[[Have]] you [[made]] up your mind yet?” “No, I can’t decide.”" + H("present perfect"), why: "make up your mind; yet → have you made." },
        { text: "My parents [[made]] me clean my room yesterday." + H("past"), why: "make = force; yesterday → made." },
        { text: "She always [[does]] her best." + H("present"), why: "do your best; she → does." },
        { text: "Someone [[has taken|'s taken]] my pen! It was here a minute ago." + H("present perfect"), why: "take = steal; result now → has taken." },
        { text: "I’m going to [[take]] it easy this weekend.", why: "take it easy = relax." }
      ]
    },

    {
      type: "rephrase", label: "words · say it with make / do / take", sticker: "tools",
      title: "Same meaning, new verb",
      instructions: "Rewrite the sentence with the verb in the dark box. Keep the meaning.",
      items: [
        { prompt: "They forced us to go.", key: "MAKE", answers: ["They made us go."] },
        { prompt: "I’m trying as hard as possible.", key: "DO", answers: ["I'm doing my best.", "I am doing my best."] },
        { prompt: "OK, let’s stop work and relax for a bit.", key: "TAKE", answers: ["OK, let's take a break.", "Let's take a break.", "OK, let's take a break for a bit.", "Let's take a break for a bit."] },
        { prompt: "When are they going to decide?", key: "MAKE", answers: ["When are they going to make a decision?", "When are they going to make up their minds?", "When are they going to make up their mind?"] },
        { prompt: "I’m going to relax and do nothing this weekend.", key: "TAKE", answers: ["I'm going to take it easy this weekend.", "I'm going to take things easy this weekend.", "I am going to take it easy this weekend."] },
        { prompt: "I clean the apartment on weekends.", key: "DO", answers: ["I do the housework on weekends."] }
      ]
    },

    /* ================= 6 · TALK ================= */
    { type: "part", n: "06", icon: "mclock", title: "Over to you", text: "Spin it — I ask, you answer. Then you ask me." },

    {
      type: "wheel", label: "speaking · over to you", sticker: "hourglass",
      title: "Spin the clock",
      start: "Spin the wheel. Answer in 3–4 sentences — watch the tense! Then ask me the same question.",
      colors: ["#B5793F", "#0FA3A3", "#F4C95D", "#E0444E"],
      items: [
        { icon: "😂", short: "laugh", q: "Who <b>makes</b> you laugh? What <b>makes</b> you angry?" },
        { icon: "🤝", short: "best friend", q: "How long <b>have</b> you <b>known</b> your best friend? When <b>did</b> you meet?" },
        { icon: "📸", short: "photo", q: "What’s the best photo you’<b>ve</b> ever <b>taken</b>? When <b>did</b> you take it?" },
        { icon: "🧹", short: "housework", q: "What housework <b>do</b> you do? What <b>did</b> you do last weekend?" },
        { icon: "🧭", short: "decision", q: "Have you ever <b>made</b> a big decision? What was it?" },
        { icon: "🇬🇧", short: "English", q: "How long <b>have</b> you <b>studied</b> English? When <b>did</b> you start?" },
        { icon: "📵", short: "break", q: "When <b>did</b> you last <b>take</b> a break from your phone? How long was it?" },
        { icon: "🏠", short: "rules", q: "What <b>do</b> your parents <b>make</b> you do? What <b>did</b> they make you do as a kid?" }
      ]
    },

    /* ================= 7 · SPEED ================= */
    { type: "part", n: "07", icon: "stopwatch", title: "Speed", text: "Make it automatic." },

    {
      type: "drill", label: "automaticity · speed drill", sticker: "stopwatch",
      title: "Twelve quick answers, twice each",
      instructions: "Type the answer and press <b>Enter</b>. Each one must be right <b>twice</b>.",
      items: [
        { cue: "for or since?", prompt: "three days", answers: ["for three days"] },
        { cue: "for or since?", prompt: "Monday", answers: ["since Monday"] },
        { cue: "for or since?", prompt: "a long time", answers: ["for a long time"] },
        { cue: "for or since?", prompt: "I was ten", answers: ["since I was ten"] },
        { cue: "V3", prompt: "know", answers: ["known"] },
        { cue: "V3", prompt: "take", answers: ["taken"] },
        { cue: "V3", prompt: "make", answers: ["made"] },
        { cue: "V3", prompt: "do", answers: ["done"] },
        { cue: "make, do or take?", prompt: "a photo", answers: ["take a photo"] },
        { cue: "make, do or take?", prompt: "a mistake", answers: ["make a mistake"] },
        { cue: "make, do or take?", prompt: "the housework", answers: ["do the housework"] },
        { cue: "make, do or take?", prompt: "a break", answers: ["take a break"] }
      ]
    },

    /* ================= 8 · WRITING ================= */
    { type: "part", n: "08", icon: "pencil", title: "Writing", text: "Your own “Then & Now”." },

    {
      type: "write", label: "writing · then & now", sticker: "pencil",
      title: "My Then & Now",
      instructions: "Write <b>6–7 sentences</b> about you: things that started in the past and are still true (for / since), and finished things (ago, in 2020, last year). Use make / do / take twice.",
      words: ["for", "since", "ago", "make", "made", "do", "did", "done", "take", "took", "taken"],
      checks: [
        { label: "have / has + V3 — twice", pattern: "\\b(have|has|['’]ve|['’]s)\\s+(been|lived|known|had|studied|played|made|done|taken|worked|gone|seen|learned|learnt|liked|loved|wanted|watched|collected|danced|lived)\\b", min: 2 },
        { label: "for / since — twice", pattern: "\\b(for|since)\\b", min: 2 },
        { label: "a finished time: ago / yesterday / last … / in 20..", pattern: "\\b(ago|yesterday|last|in (19|20)\\d\\d)\\b" },
        { label: "make / do / take — twice", pattern: "\\b(make|makes|made|making|does|did|done|doing|take|takes|took|taken|taking)\\b", min: 2 },
        { label: "at least 6 sentences", sentences: 6 }
      ],
      sample: "I’ve lived in my apartment since I was five. I started school ten years ago. I’ve known my best friend Dasha for seven years — we made friends on the first day of school. I’ve studied English since 2019. Last summer I took a lot of photos at the sea. I haven’t made up my mind about my future job yet, but I always do my best."
    },

    /* ================= 9 · SELF-CHECK ================= */
    { type: "part", n: "09", icon: "star", title: "Self-check", text: "What to look at again." },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
