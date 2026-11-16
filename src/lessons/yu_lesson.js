const IMG = f => "assets/img/" + f;
const LESSON = {
  id: "life-so-far-evu11-egiu15-17",
  kicker: "character · present perfect",
  titleHTML: 'Life <em>so far</em>',
  title: "Life So Far",
  subtitle: "What are you like — and what have you done in your life?",
  stickers: ["cool", "luggage"],
  confetti: ["cool", "star", "check", "halo", "party"],

  sections: [

    /* ================= 1 · WARM-UP ================= */
    { type: "part", n: "01", icon: "monocle", title: "Warm-up", text: "Something has happened here." },

    {
      type: "rule", label: "warm-up · look and talk", sticker: "thinking",
      title: "What has happened?",
      html: `
        <div class="photos">
          <figure class="photo"><img loading="lazy" alt="A half-finished jigsaw puzzle on a table" src="${IMG("puzzle.jpg")}"><figcaption><b>A</b><small>Photo: kallerna · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="A broken glass door at the end of a corridor" src="${IMG("brokenglass.jpg")}"><figcaption><b>B</b><small>Photo: Trougnouf · CC BY 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo wide"><img loading="lazy" alt="Old suitcases on a station platform" src="${IMG("luggage.jpg")}"><figcaption><b>C</b><small>Photo: Acabashi · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
        </div>
        <ol class="qs">
          <li>Photo A: has somebody finished the puzzle? What do you think they have done so far?</li>
          <li>Photo B: what has happened to the door? Who do you think has done it?</li>
          <li>Photo C: has somebody just arrived — or are they going away? Where have the suitcases been?</li>
          <li>What kind of person does jigsaw puzzles? <i>Patient? Lazy? Creative?</i></li>
        </ol>`
    },

    /* ================= 2 · CHARACTER ================= */
    { type: "part", n: "02", icon: "mirror", title: "Character", text: "What are you like?" },

    {
      type: "rule", label: "vocabulary · describing character", sticker: "cool",
      title: "What are you like?",
      html: `
        <p>Where are you on each line? Choose a number from 1 to 5.</p>
        <div class="quizrow"><span class="l">I’m very <b>positive</b>.</span><span class="dots">1 2 3 4 5</span><span>I’m quite <b>negative</b>.</span></div>
        <div class="quizrow"><span class="l">I’m usually <b>reliable</b> <i>(people can trust me)</i>.</span><span class="dots">1 2 3 4 5</span><span>I’m quite <b>unreliable</b>.</span></div>
        <div class="quizrow"><span class="l">I’m quite <b>confident</b>.</span><span class="dots">1 2 3 4 5</span><span>I’m quite <b>shy</b>.</span></div>
        <div class="quizrow"><span class="l">I’m <b>hard-working</b>.</span><span class="dots">1 2 3 4 5</span><span>I’m quite <b>lazy</b>.</span></div>
        <div class="quizrow"><span class="l">I have a good <b>sense of humour</b>.</span><span class="dots">1 2 3 4 5</span><span>I’m usually quite <b>serious</b>.</span></div>
        <div class="quizrow"><span class="l">I’m usually quite <b>patient</b>.</span><span class="dots">1 2 3 4 5</span><span>I’m quite <b>impatient</b>.</span></div>
        <h3>Opposites</h3>
        <div class="colloc">
          <div><b>generous</b> ↔ mean</div>
          <div><b>honest</b> ↔ dishonest</div>
          <div><b>clever / intelligent</b> ↔ stupid</div>
          <div><b>calm</b> ↔ nervous / anxious</div>
          <div><b>kind</b> ↔ unkind · <b>friendly</b> ↔ unfriendly</div>
          <div><b>nice / pleasant</b> ↔ unpleasant</div>
        </div>
        <h3>Describing a friend</h3>
        <div class="colloc">
          <div><b>sensible</b> = practical, doesn’t do stupid things ↔ <b>silly</b></div>
          <div>I can always <b>trust</b> her. <i>(I’m sure she’s honest)</i></div>
          <div><b>creative</b> = full of new ideas</div>
          <div><b>talented</b> = has a natural ability · her <b>talent</b></div>
        </div>
        <div class="note">⚠️ <b>What’s he like?</b> (not <s>How is he like?</s>) — <b>He’s very nice.</b> (not <s>He’s like very nice.</s>)</div>`
    },

    {
      type: "sort", label: "vocabulary · sort", sticker: "halo",
      title: "Good or not so good?",
      instructions: "Put each word in the right column — or tap a word, then tap a column.",
      categories: [
        { name: "positive", words: ["generous", "reliable", "patient", "sensible", "confident"] },
        { name: "negative", words: ["mean", "lazy", "dishonest", "silly", "unfriendly"] }
      ]
    },

    {
      type: "gapfill", label: "vocabulary · one word", sticker: "monocle",
      title: "Describe the person in one word",
      instructions: "Read about the person and write <b>one</b> adjective. The first letter is given.",
      items: [
        { text: "My uncle always pays for everybody’s coffee. He’s very [[generous]] <span class=hint>(g…)</span>.", why: "generous = happy to give more than usual." },
        { text: "She says she’ll help, but then she forgets. She’s quite [[unreliable]] <span class=hint>(u…)</span>.", why: "unreliable = you can’t trust her to do what she says." },
        { text: "Our teacher explains everything again and never gets angry. She’s really [[patient]] <span class=hint>(p…)</span>.", why: "patient = stays calm when things take a long time." },
        { text: "Tom finds it hard to talk to new people at parties. He’s a bit [[shy]] <span class=hint>(s…)</span>.", why: "shy = not confident with new people." },
        { text: "Anna never does anything stupid; she always thinks first. She’s very [[sensible]] <span class=hint>(s…)</span>.", why: "sensible = practical, doesn’t do silly things." },
        { text: "My dad is quiet and doesn’t laugh much. He’s quite [[serious]] <span class=hint>(s…)</span>.", why: "serious = quiet, doesn’t laugh a lot." },
        { text: "Before every exam my friend can’t sleep or eat. She gets very [[nervous|anxious]] <span class=hint>(n…)</span>.", why: "nervous / anxious = worried, not calm." },
        { text: "Max is always full of new ideas for videos and drawings. He’s very [[creative]] <span class=hint>(c…)</span>.", why: "creative = good at thinking of new ideas." },
        { text: "My sister can play the piano, the guitar and the violin. She’s really [[talented]] <span class=hint>(t…)</span>.", why: "talented = has a natural ability." },
        { text: "He never helps at home and stays in bed until 12. He’s so [[lazy]] <span class=hint>(l…)</span>!", why: "lazy = doesn’t want to work." }
      ]
    },

    {
      type: "match", label: "vocabulary · opposites", sticker: "eyeroll",
      title: "Find the opposite",
      instructions: "Match each word with its opposite.",
      pairs: [
        ["generous", "mean"], ["honest", "dishonest"], ["kind", "unkind"], ["friendly", "unfriendly"], ["pleasant", "unpleasant"],
        ["patient", "impatient"], ["reliable", "unreliable"], ["confident", "shy"], ["hard-working", "lazy"], ["calm", "nervous"]
      ]
    },

    /* ================= 3 · GRAMMAR ================= */
    { type: "part", n: "03", icon: "check", title: "Present perfect", text: "I have done — the past with a result now." },

    {
      type: "rule", label: "theory · present perfect", sticker: "salute",
      title: "have / has + V3",
      html: `
        <div class="grid2">
          <div class="box"><h4>before</h4><p>The door is fine.</p></div>
          <div class="box pink"><h4>now</h4><p>Somebody <b>has broken</b> the door. <i>(it’s broken now)</i></p></div>
        </div>
        <table class="form">
          <tr><th>+</th><td>I / you / we / they <b>have (’ve)</b> finished · he / she / it <b>has (’s)</b> finished</td></tr>
          <tr><th>−</th><td>I <b>haven’t</b> finished · she <b>hasn’t</b> finished</td></tr>
          <tr><th>?</th><td><b>Have</b> you finished? · <b>Has</b> she finished?</td></tr>
        </table>
        <p style="font-size:15px">V3: regular = <b>-ed</b> (cleaned, started) · irregular: break → <b>broken</b>, see → <b>seen</b>, go → <b>gone</b>, do → <b>done</b>, buy → <b>bought</b>, lose → <b>lost</b>, forget → <b>forgotten</b>, meet → <b>met</b>, fly → <b>flown</b></p>
        <h3>just · already · yet</h3>
        <div class="grid2">
          <div class="box"><h4>just = a short time ago</h4><p>They’<b>ve just</b> arrived.</p></div>
          <div class="box"><h4>already = sooner than expected</h4><p>She’<b>s already</b> gone to bed.</p></div>
        </div>
        <div class="box sand"><h4>yet = until now — only in − and ?, at the END</h4><p>I <b>haven’t</b> finished <b>yet</b>. · <b>Have</b> you finished <b>yet</b>?</p></div>
        <h3>Have you ever …? — your life until now</h3>
        <div class="tl" aria-hidden="true">
          <div class="sp" style="--x:4%;--w:84%"><b>your life so far</b><i>past → now</i></div>
          <div class="now"></div>
        </div>
        <p><b>Have</b> you <b>ever been</b> to Japan? — No, I’ve <b>never</b> been to Japan. · Yes, <b>once</b> / <b>twice</b> / three times.</p>
        <div class="grid2">
          <div class="box pink"><h4>gone</h4><p>Ben <b>has gone</b> to Spain. <i>(he’s there now)</i></p></div>
          <div class="box"><h4>been</h4><p>Ben <b>has been</b> to Spain. <i>(he went and came back)</i></p></div>
        </div>`
    },

    {
      type: "drill", label: "warm-up for the grammar · V3 drill", sticker: "zap",
      title: "Irregular V3: twelve verbs, twice each",
      instructions: "Write the <b>V3</b> (past participle) and press <b>Enter</b>. Each verb must be right <b>twice</b>.",
      items: [
        { cue: "V3", prompt: "break", answers: ["broken"] }, { cue: "V3", prompt: "see", answers: ["seen"] },
        { cue: "V3", prompt: "go", answers: ["gone"] }, { cue: "V3", prompt: "do", answers: ["done"] },
        { cue: "V3", prompt: "buy", answers: ["bought"] }, { cue: "V3", prompt: "lose", answers: ["lost"] },
        { cue: "V3", prompt: "forget", answers: ["forgotten"] }, { cue: "V3", prompt: "meet", answers: ["met"] },
        { cue: "V3", prompt: "fly", answers: ["flown"] }, { cue: "V3", prompt: "write", answers: ["written"] },
        { cue: "V3", prompt: "eat", answers: ["eaten"] }, { cue: "V3", prompt: "be", answers: ["been"] }
      ]
    },

    {
      type: "gapfill", label: "grammar · form", sticker: "puzzle",
      title: "What has happened?",
      instructions: "Put the verb into the <b>present perfect</b>. Use contractions if you like.",
      items: [
        { text: "I can’t open the door. I [[have lost|'ve lost]] <span class=hint>(lose)</span> my keys.", why: "I → have + lost (irregular V3)." },
        { text: "Look! Somebody [[has broken|'s broken]] <span class=hint>(break)</span> the window.", why: "somebody → has + broken." },
        { text: "“Where’s Ira?” “She [[has gone|'s gone]] <span class=hint>(go)</span> out. She’ll be back at five.”", why: "she → has + gone (she’s not here now)." },
        { text: "We [[have finished|'ve finished]] <span class=hint>(finish)</span> the puzzle! Come and look!", why: "we → have + finished (regular -ed)." },
        { text: "My parents [[have bought|'ve bought]] <span class=hint>(buy)</span> a new car. It’s red!", why: "buy → bought (irregular)." },
        { text: "I [[haven't seen|have not seen]] <span class=hint>(not / see)</span> my glasses. Where are they?", why: "Negative: haven’t + V3." },
        { text: "[[Have you done]] <span class=hint>(you / do)</span> your homework? Can I check it?", why: "Question: Have + you + V3." },
        { text: "Oh no, I [[have forgotten|'ve forgotten]] <span class=hint>(forget)</span> her name!", why: "forget → forgotten." },
        { text: "Sasha [[hasn't told|has not told]] <span class=hint>(not / tell)</span> anyone about the party.", why: "she → hasn’t + told." },
        { text: "[[Has it stopped]] <span class=hint>(it / stop)</span> raining? Can we go out?", why: "Question with it → Has + it + stopped." }
      ]
    },

    {
      type: "mcq", label: "grammar · just, already, yet, ever, gone, been", sticker: "check",
      title: "Choose the right word",
      instructions: "Read the whole sentence — the small words decide everything.",
      items: [
        { q: "“Are you hungry?” “No, I’ve ___ had lunch.”", options: ["just", "yet", "ever"], answer: 0 },
        { q: "I haven’t finished my essay ___.", options: ["already", "yet", "just"], answer: 1 },
        { q: "It’s only 9 o’clock, and Max has ___ gone to bed!", options: ["yet", "ever", "already"], answer: 2 },
        { q: "Have you ___ been to Lviv?", options: ["ever", "yet", "already"], answer: 0 },
        { q: "My grandma has ___ used a smartphone. She doesn’t like them.", options: ["ever", "never", "yet"], answer: 1 },
        { q: "“Where’s Dima?” “He’s ___ to the shop. He’ll be back soon.”", options: ["been", "gone"], answer: 1 },
        { q: "“Hi, Kate! Where have you ___?” “At the dentist’s.”", options: ["been", "gone"], answer: 0 },
        { q: "I’ve ___ to Kraków twice. It’s beautiful!", options: ["gone", "been"], answer: 1 },
        { q: "“Has the film started ___?” “No, not yet.”", options: ["yet", "already", "just"], answer: 0 },
        { q: "“Do you want to see this film?” “No, I’ve ___ seen it.”", options: ["yet", "already", "ever"], answer: 1 }
      ]
    },

    {
      type: "rephrase", label: "grammar · word position", sticker: "check",
      title: "Where does it go?",
      instructions: "Add the word in the dark box to the sentence. Remember: <b>just</b> and <b>already</b> go before V3, <b>yet</b> goes at the end.",
      items: [
        { prompt: "I have finished my homework.", key: "JUST", answers: ["I have just finished my homework.", "I've just finished my homework."] },
        { prompt: "She hasn't called me.", key: "YET", answers: ["She hasn't called me yet."] },
        { prompt: "They have seen this film.", key: "ALREADY", answers: ["They have already seen this film.", "They've already seen this film."] },
        { prompt: "Have you eaten?", key: "YET", answers: ["Have you eaten yet?"] },
        { prompt: "The bus has left.", key: "JUST", answers: ["The bus has just left.", "The bus's just left."] },
        { prompt: "We have bought the tickets.", key: "ALREADY", answers: ["We have already bought the tickets.", "We've already bought the tickets."] }
      ]
    },

    {
      type: "gapfill", label: "grammar · ever, never, gone, been", sticker: "luggage",
      title: "Find someone who…",
      instructions: "Complete the mini-dialogues with the <b>present perfect</b>.",
      items: [
        { text: "A: [[Have you ever been]] <span class=hint>(you / ever / be)</span> to the Carpathians? B: Yes, three times.", why: "Question about your life: Have + you + ever + been." },
        { text: "A: Has your mum ever flown in a plane? B: No, she [[has never flown|'s never flown]] <span class=hint>(never / fly)</span>.", why: "has + never + flown (fly → flown)." },
        { text: "A: Where’s Oleh? B: He [[has gone|'s gone]] <span class=hint>(go)</span> to football practice.", why: "He is there now → gone." },
        { text: "A: Hi! Where [[have you been]] <span class=hint>(you / be)</span>? B: At the library.", why: "You went and came back → been." },
        { text: "A: [[Have you ever eaten]] <span class=hint>(you / ever / eat)</span> sushi? B: No, never.", why: "eat → eaten." },
        { text: "A: How many times [[have you been]] <span class=hint>(you / be)</span> to Odesa? B: Twice.", why: "How many times + have you been." },
        { text: "My grandparents [[have never used|'ve never used]] <span class=hint>(never / use)</span> TikTok.", why: "have + never + V3." },
        { text: "A: [[Has your sister ever won]] <span class=hint>(your sister / ever / win)</span> a competition? B: Yes, once.", why: "Has + your sister + ever + won." },
        { text: "I [[have met|'ve met]] <span class=hint>(meet)</span> this boy before, but I can’t remember his name.", why: "meet → met." },
        { text: "Kate isn’t at home. She [[has gone|'s gone]] <span class=hint>(go)</span> to the dentist’s.", why: "She’s there now → gone." }
      ]
    },

    {
      type: "rephrase", label: "grammar · have you ever…?", sticker: "luggage",
      title: "Your life so far",
      instructions: "Write a full question or sentence in the <b>present perfect</b>.",
      items: [
        { prompt: "(you / ever / be / to London?)", key: "QUESTION", answers: ["Have you ever been to London?"] },
        { prompt: "(you / ever / fly / in a plane?)", key: "QUESTION", answers: ["Have you ever flown in a plane?"] },
        { prompt: "(she / ever / break / her leg?)", key: "QUESTION", answers: ["Has she ever broken her leg?"] },
        { prompt: "(I / never / ride / a horse)", key: "+", answers: ["I've never ridden a horse.", "I have never ridden a horse."] },
        { prompt: "(my brother / be / to Poland / three times)", key: "+", answers: ["My brother has been to Poland three times.", "My brother's been to Poland three times."] },
        { prompt: "(they / not / meet / our new teacher / yet)", key: "−", answers: ["They haven't met our new teacher yet.", "They have not met our new teacher yet."] }
      ]
    },

    {
      type: "correct", label: "fix it · character + present perfect", sticker: "detective",
      title: "Find and fix the mistake",
      instructions: "Each sentence has <b>one</b> mistake. Correct it in the box.",
      items: [
        { wrong: "I have saw this film twice.", answers: ["I have seen this film twice.", "I've seen this film twice."] },
        { wrong: "She have already finished her homework.", answers: ["She has already finished her homework.", "She's already finished her homework."] },
        { wrong: "Have you finished yet your homework?", answers: ["Have you finished your homework yet?"] },
        { wrong: "How is your new friend like?", answers: ["What is your new friend like?", "What's your new friend like?"] },
        { wrong: "He's like very kind and generous.", answers: ["He's very kind and generous.", "He is very kind and generous."] },
        { wrong: "Dima isn't here. He's been to the shop.", answers: ["Dima isn't here. He's gone to the shop.", "Dima isn't here. He has gone to the shop."] },
        { wrong: "My sister is very unpatient.", answers: ["My sister is very impatient."] }
      ]
    },

    /* ================= 4 · READ ================= */
    { type: "part", n: "04", icon: "nerd", title: "Read & check", text: "Character words + present perfect together." },

    {
      type: "tf2", label: "reading · true / false", sticker: "hug",
      title: "My friend Sofia",
      instructions: "Read Lena’s text. Then decide: true or false? If it’s false, choose the correct sentence.",
      text: `I’ve known Sofia since we were six, and she’s my best friend. What’s she like? She’s very <b>creative</b> — she has painted every wall in her room, and she has already made three short films on her phone. She’s also really <b>generous</b>: last week she gave me her favourite jacket. She isn’t <b>patient</b>, though. If the bus is late, she gets angry! Sofia has travelled a lot. She’s been to Poland, Italy and Spain, but she has never flown — she always goes by bus or train because she’s nervous about planes. Right now she isn’t here: she’s gone to Kraków with her family. She hasn’t sent me any photos yet, but I’m sure she will!`,
      items: [
        { q: "Lena and Sofia have known each other for a long time.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Sofia hasn’t made any films yet.", answer: false, fix: ["She has already made three short films.", "She has made one film.", "She has never made a film."], fixAnswer: 0 },
        { q: "Sofia is generous.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Sofia is a very patient person.", answer: false, fix: ["She is quite lazy.", "She isn’t patient — she gets angry when the bus is late.", "She is patient only with buses."], fixAnswer: 1 },
        { q: "Sofia has been to Italy.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Sofia has flown to Spain.", answer: false, fix: ["She has flown many times.", "She went to Spain by boat.", "She has never flown — she goes by bus or train."], fixAnswer: 2 },
        { q: "Sofia is nervous about planes.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Sofia has been to Kraków and is back home now.", answer: false, fix: ["She has gone to Kraków — she’s there now.", "She has never been to Kraków.", "She went to Kraków last year."], fixAnswer: 0 },
        { q: "Sofia has already sent Lena some photos.", answer: false, fix: ["She has sent ten photos.", "She hasn’t sent any photos yet.", "She has just sent a video."], fixAnswer: 1 },
        { q: "Sofia has painted the walls in her room.", answer: true, fix: [], fixAnswer: 0 }
      ]
    },

    /* ================= 5 · DRILL ================= */
    { type: "part", n: "05", icon: "zap", title: "Speed drill", text: "Until the phrases come out on their own." },

    {
      type: "drill", label: "automaticity · speed drill", sticker: "stopwatch",
      title: "Twelve sentences, twice each",
      instructions: "Build the full sentence and press <b>Enter</b>. Each one must be right <b>twice</b>. A mistake sends it back.",
      items: [
        { cue: "present perfect", prompt: "I / lose / my keys", answers: ["I've lost my keys.", "I have lost my keys."] },
        { cue: "just", prompt: "they / just / arrive", answers: ["They've just arrived.", "They have just arrived."] },
        { cue: "already", prompt: "she / already / go / to bed", answers: ["She's already gone to bed.", "She has already gone to bed."] },
        { cue: "yet −", prompt: "I / not / finish / yet", answers: ["I haven't finished yet."] },
        { cue: "yet ?", prompt: "you / do / your homework / yet?", answers: ["Have you done your homework yet?"] },
        { cue: "ever ?", prompt: "you / ever / be / to Poland?", answers: ["Have you ever been to Poland?"] },
        { cue: "never", prompt: "I / never / fly / in a plane", answers: ["I've never flown in a plane.", "I have never flown in a plane."] },
        { cue: "gone", prompt: "he / go / to the shop", answers: ["He's gone to the shop.", "He has gone to the shop."] },
        { cue: "character", prompt: "what / be / she / like?", answers: ["What's she like?", "What is she like?"] },
        { cue: "character", prompt: "she / be / very generous", answers: ["She's very generous.", "She is very generous."] },
        { cue: "character", prompt: "I / can / always / trust / him", answers: ["I can always trust him."] },
        { cue: "character", prompt: "he / have / a good sense of humour", answers: ["He has a good sense of humour.", "He's got a good sense of humour."] }
      ]
    },

    /* ================= 6 · WRITING ================= */
    { type: "part", n: "06", icon: "pencil", title: "Writing", text: "Your own friend profile." },

    {
      type: "write", label: "writing · describe a friend", sticker: "notebook",
      title: "My friend",
      instructions: "Write <b>5–7 sentences</b> about a friend or a person in your family. What’s he or she like? What has he or she done in life? What hasn’t he or she done yet?",
      words: ["generous", "mean", "honest", "reliable", "confident", "shy", "hard-working", "lazy", "sense of humour", "serious", "patient", "impatient", "calm", "nervous", "kind", "friendly", "sensible", "silly", "creative", "talented", "trust"],
      checks: [
        { label: "4+ character words (they light up above)", words: 4 },
        { label: "present perfect — at least 3 times", pattern: "\\b(have|has|'ve|'s)\\s+(never\\s+|already\\s+|just\\s+|not\\s+|ever\\s+)?\\w+(ed|en|wn|ne|ght|lt|ld|ad|eard|et|ung|uck|ost|one|ade|ept|ent|een)\\b", min: 3 },
        { label: "ever / never / already / just / yet — once", pattern: "\\b(ever|never|already|just|yet)\\b" },
        { label: "at least 5 sentences", sentences: 5 }
      ],
      sample: "My best friend is Dasha. She's very kind and she has a great sense of humour. She's also really hard-working: she has already learned two foreign languages. Dasha has been to Germany and Austria, but she has never seen the sea. She's a bit shy with new people, but I can always trust her. She hasn't decided what to study at university yet."
    },

    /* ================= 7 · SELF-CHECK ================= */
    { type: "part", n: "07", icon: "star", title: "Self-check", text: "What to look at again." },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
