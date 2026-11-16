const IMG = f => "assets/img/" + f;
const H = v => ` <span class=hint>(${v})</span>`;
const LESSON = {
  id: "life-in-the-extreme-impact2-u5",
  kicker: "Impact 2 · Unit 5",
  titleHTML: 'Life in the <em>Extreme</em>',
  title: "Life in the Extreme",
  subtitle: "From −200 °C to +151 °C: who survives, how — and who decides what’s ugly?",
  stickers: ["thermo", "microscope"],
  confetti: ["snow", "fire", "star", "sparkles", "check"],

  sections: [

    /* ================= 1 · TO START ================= */
    { type: "part", n: "01", icon: "thermo", title: "To start", text: "Hot, cold, dry, deep." },

    {
      type: "rule", label: "to start · look and talk", sticker: "thermo",
      title: "Who can live here?",
      html: `
        <div class="photos">
          <figure class="photo"><img loading="lazy" alt="A polar bear jumping between pieces of drift ice" src="${IMG("polarbear.jpg")}"><figcaption><b>A · the Arctic</b><small>Photo: Andreas Weith · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="A camel in a dry stony desert" src="${IMG("camel.jpg")}"><figcaption><b>B · the Gobi Desert</b><small>Photo: Bernard Gagnon · CC0 · Wikimedia Commons</small></figcaption></figure>
        </div>
        <div class="gauge"><span style="left:0%">−200 °C</span><span style="left:30%">−30 °C Arctic</span><span class="b" style="left:52%">+50 °C desert</span><span style="left:74%">+121 °C</span><span class="b" style="left:100%">+151 °C</span></div>
        <ol class="qs">
          <li>Name an animal that lives somewhere extremely hot or cold. How do you think it survives?</li>
          <li>What’s the hottest or coldest place you’ve ever been? How did you feel?</li>
          <li>What can we learn about our planet from animals that live in extreme places?</li>
        </ol>`
    },

    /* ================= 2 · READING 1 ================= */
    { type: "part", n: "02", icon: "microscope", title: "Life at the limits", text: "Reading + new words" },

    {
      type: "tf2", label: "reading · life at the limits", sticker: "microscope",
      title: "Survivors",
      instructions: "Read the text. True or false? If it’s false, choose the correct sentence.",
      text: `<div class="article"><span class="tag">science</span>
          <h4>Survivors</h4>
          <p>In the Arctic, −30 °C is a typical day — and polar bears handle it. In the Sahara, the temperature can reach 50 °C — and camels survive. Both animals have adapted to harsh environments, but like all mammals, they can only live within a certain range of conditions.</p>
          <p>Some much smaller creatures go far beyond that. The tardigrade, or “water bear”, is less than a millimeter long, but it can tolerate temperatures from −200 °C to 151 °C. It can survive a lack of water and oxygen — in 2011, scientists even sent tardigrades into space, and they survived.</p>
          <p>Even smaller are extremophiles: microbes made of just one cell. Some thrive in very high levels of salt, some live inside solid rock. One type, Strain 121, lives next to a volcanic vent at the bottom of the Pacific and can handle 121 °C. Others live under 18 meters of Antarctic ice, with no light and no oxygen.</p>
          <p>Why do scientists care? Because these organisms show where life might exist on other planets. As astrobiologist Kevin Hand puts it, the big question is what it takes for a world to be habitable.</p></div>`,
      items: [
        { q: "For the Arctic, −30 °C is a normal temperature.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Polar bears and camels can live in any conditions.", answer: false, fix: ["They can only live in a certain range of conditions.", "They can live only in water.", "They can’t live in harsh places."], fixAnswer: 0 },
        { q: "A tardigrade is about one centimeter long.", answer: false, fix: ["It’s less than a millimeter long.", "It’s about one meter long.", "It’s as big as a bear."], fixAnswer: 0 },
        { q: "Tardigrades can survive without water and oxygen.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Tardigrades died when scientists sent them into space.", answer: false, fix: ["They survived.", "They were never sent into space.", "Only half of them died."], fixAnswer: 0 },
        { q: "Extremophiles are made of many cells.", answer: false, fix: ["They are made of one cell.", "They are made of rock.", "They are a kind of bear."], fixAnswer: 0 },
        { q: "Some extremophiles live inside solid rock.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Strain 121 lives in the Antarctic ice.", answer: false, fix: ["It lives next to a volcanic vent in the Pacific.", "It lives in the Dead Sea.", "It lives in the Sahara."], fixAnswer: 0 },
        { q: "Some microbes live with no light and no oxygen.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Scientists study extremophiles to find out where life might exist on other planets.", answer: true, fix: [], fixAnswer: 0 }
      ]
    },

    {
      type: "rule", label: "vocabulary · unit words", sticker: "snow",
      title: "Words for extreme places",
      html: `
        <div class="colloc">
          <div><b>environment</b> — the place and conditions where something lives · <b>conditions</b> — the temperature, light, water etc. in a place</div>
          <div><b>harsh</b> — very difficult to live in · <b>typical</b> — normal, usual · <b>a variety of</b> — many different kinds of</div>
          <div><b>a high / low level of</b> salt, heat… · <b>a lack of</b> water — not having (enough) water</div>
          <div><b>handle</b> = <b>tolerate</b> — deal with something difficult · <b>thrive</b> — grow and do very well (more than just survive)</div>
          <div><b>exist</b> = live, be real · <b>creature</b> = any living animal · <b>remarkable</b> = extraordinary, very surprising · <b>life</b> — living things</div>
          <div><b>pressure</b> — force pushing on something (deep water has very high pressure) · <b>kill</b> → something <b>dies</b> · <b>normal</b></div>
          <div><b>bizarre</b> — very strange · <b>rare</b> — not common · <b>a parasite</b> — lives on or in another animal and takes food from it · <b>tongue</b></div>
        </div>
        <div class="note">💡 Strategy: <b>synonyms</b>. Writers repeat ideas with different words: handle → tolerate, animal → creature, live → exist, amazing → remarkable.</div>`
    },

    {
      type: "match", label: "vocabulary · synonyms", sticker: "snow",
      title: "Find the synonym",
      instructions: "Match each word with a word or phrase that means the same.",
      pairs: [
        ["tolerate", "handle"], ["creature", "animal"], ["exist", "live, be real"], ["remarkable", "extraordinary"],
        ["thrive", "grow and do very well"], ["harsh", "very difficult to live in"], ["typical", "normal, usual"],
        ["variety", "many different kinds"], ["lack of", "not having enough of"], ["bizarre", "very strange"]
      ]
    },

    {
      type: "gapfill", label: "vocabulary · in context", sticker: "volcano",
      title: "The rainbow spring",
      instructions: "Complete the text about the photo with words from the unit.",
      text: `<figure class="photo wide" style="margin:0 0 12px"><img loading="lazy" alt="Aerial view of a hot spring with blue water and orange rings" src="${IMG("prismatic.jpg")}"><figcaption><b>Grand Prismatic Spring, Yellowstone, USA</b><small>Photo: Carsten Steger · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>`,
      items: [
        { text: "The water in the middle is about 87 °C — a [[harsh]] place for almost every living thing.", why: "harsh = very difficult to live in." },
        { text: "A [[typical]] fish would die in it in seconds.", why: "typical = normal, usual." },
        { text: "But billions of tiny microbes [[thrive]] in the hot water around the edges.", why: "thrive = do very well, not just survive." },
        { text: "They can [[handle|tolerate]] heat that would kill us.", why: "handle / tolerate = deal with something difficult." },
        { text: "The water has very high [[levels]] of minerals.", why: "high levels of = a lot of." },
        { text: "There is also a [[lack]] of oxygen.", why: "a lack of = not enough." },
        { text: "Each [[variety]] of microbe likes different conditions.", why: "variety = kind, type." },
        { text: "Because the [[conditions]] change from the middle to the edge, each ring has a different color.", why: "conditions = temperature, minerals etc." },
        { text: "This hot spring is a perfect [[environment]] for these organisms.", why: "environment = where something lives." },
        { text: "Places like this show that [[life]] can exist almost anywhere.", why: "life = living things." }
      ]
    },

    {
      type: "mcq", label: "vocabulary · words in context", sticker: "fish",
      title: "Choose the right word",
      instructions: "Choose the word that fits.",
      items: [
        { q: "Out of the water, the blobfish looks really ___ — like a sad pink jelly.", options: ["bizarre", "typical", "normal"], answer: 0 },
        { q: "A ___ lives on another animal and takes food from it.", options: ["predator", "parasite", "mammal"], answer: 1 },
        { q: "The pig-nosed frog is very ___ — scientists only found it in 2003.", options: ["rare", "common", "harsh"], answer: 0 },
        { q: "Deep in the ocean the water ___ is enormous — it pushes on everything.", options: ["variety", "pressure", "lack"], answer: 1 },
        { q: "Very high temperatures ___ most living things.", options: ["kill", "thrive", "die"], answer: 0 },
        { q: "Without water, most plants ___ in a few days.", options: ["kill", "exist", "die"], answer: 2 },
        { q: "For a camel, 45 °C is ___ — it’s just another hot day.", options: ["normal", "rare", "bizarre"], answer: 0 },
        { q: "You taste food with your ___.", options: ["tongue", "teeth", "nose"], answer: 0 }
      ]
    },

    /* ================= 3 · SPEAKING ================= */
    { type: "part", n: "03", icon: "speech", title: "Strong opinions", text: "Speaking strategy" },

    {
      type: "rule", label: "speaking · strong opinions", sticker: "speech",
      title: "Say it strongly — answer it politely",
      html: `
        <div class="colloc">
          <div><b>Express</b>: X is the ugliest animal around! · X are <b>the worst</b>. They’re <b>even</b> scarier than Y. · <b>There’s nothing more</b> disgusting <b>than</b> X. · X are definitely the coolest.</div>
          <div><b>Respond</b>: <b>Really?</b> I think they’re quite cute. · <b>I don’t know.</b> I <b>sort of</b> like X. · <b>That’s not true!</b> <b>I’ll bet</b> there are <b>plenty of</b> more disgusting creatures. · <b>No way!</b></div>
        </div>`
    },

    {
      type: "dragwords", label: "speaking · dialogue", sticker: "speech",
      title: "Choosing a mascot",
      instructions: "Max and Lena choose an animal for their science club poster. Put the words in the gaps. <b>Two words are extra.</b>",
      extra: ["lovely", "rare"],
      items: [
        "MAX: Blobfish are the [[worst]]. They’re [[even]] uglier than slugs!",
        "LENA: [[Really]]? I think they’re quite funny.",
        "MAX: [[No way]]! There’s [[nothing]] more disgusting than a blobfish.",
        "LENA: That’s not true! I’ll [[bet]] there are [[plenty]] of uglier animals.",
        "MAX: Warthogs, maybe? — LENA: I don’t know. I [[sort of]] like warthogs. They look so tough!"
      ]
    },

    {
      type: "wheel", label: "speaking · your turn", sticker: "speech",
      title: "Spin for an opinion",
      start: "Spin. Say the opinion strongly — I respond. Then I give one and you respond with a phrase from the box.",
      colors: ["#1E9BD7", "#FFC23D", "#FF5A1F", "#7A5AF8"],
      items: [
        { icon: "🐗", short: "ugliest", q: "The ugliest animal in the world is …" },
        { icon: "🕷️", short: "scariest", q: "There’s nothing scarier than …" },
        { icon: "🐼", short: "cutest", q: "… are definitely the cutest animals." },
        { icon: "❄️", short: "cold vs hot", q: "Cold weather is much better than hot weather. Agree?" },
        { icon: "🦁", short: "zoos", q: "Zoos are the worst / the best places to see animals." },
        { icon: "🪱", short: "parasites", q: "Parasites are worse than predators." },
        { icon: "🌋", short: "places", q: "The most amazing place on Earth is …" },
        { icon: "🚀", short: "space", q: "Looking for life on other planets is a waste of money." }
      ]
    },

    /* ================= 4 · PRESENT PERFECT ================= */
    { type: "part", n: "04", icon: "polar", title: "Have you ever…?", text: "Grammar: present perfect for experiences" },

    {
      type: "rule", label: "grammar · present perfect", sticker: "polar",
      title: "Experiences that connect to now",
      html: `
        <div class="colloc">
          <div>I <b>have studied</b> many extreme environments, but I<b>’ve never been</b> to Antarctica. (my life until now)</div>
          <div>Scientists <b>have already discovered</b> two new species, but they <b>haven’t named</b> them <b>yet</b>.</div>
          <div><b>Have</b> you <b>ever seen</b> a giant tube worm? · The study of extremophiles <b>has taught</b> us a lot.</div>
          <div>Superlative + ever: What’s <b>the coldest place you’ve ever been</b>? — <b>The coldest place I’ve ever been</b> is Kharkiv in January.</div>
        </div>
        <div class="note">⚠️ A finished time → past simple: <s>I have seen a blobfish last year.</s> → I <b>saw</b> a blobfish last year.</div>`
    },

    {
      type: "gapfill", label: "grammar · Kevin Hand", sticker: "microscope",
      title: "An explorer’s life so far",
      instructions: "Use the <b>present perfect</b> of the verbs in brackets.",
      items: [
        { text: "Kevin Hand [[has traveled|'s traveled|has travelled]]" + H("travel") + " all over the world to study extremophiles.", why: "he → has + V3." },
        { text: "He [[has explored|'s explored]]" + H("explore") + " the ice of northern Alaska.", why: "has explored." },
        { text: "He [[has been|'s been]]" + H("be") + " to the glaciers of Mount Kilimanjaro.", why: "be → been (has been to = visited)." },
        { text: "He [[has found|'s found]]" + H("find") + " microbes at the bottom of the ocean.", why: "find → found." },
        { text: "But he [[has never sailed|'s never sailed]]" + H("never / sail") + " on the frozen ocean of Europa, a moon of Jupiter.", why: "never goes between has and V3." },
        { text: "“[[Have]] you ever [[dreamed|dreamt]]" + H("ever / dream") + " of going into space?” a reporter asked him.", why: "Have you ever + V3?" },
        { text: "He [[hasn't visited|has not visited]]" + H("not / visit") + " Europa yet.", why: "negative + yet." },
        { text: "He and a colleague [[have built|'ve built]]" + H("build") + " a “Europa in a can” in their lab.", why: "build → built." },
        { text: "They [[have already created|'ve already created]]" + H("already / create") + " conditions like the ocean under Europa’s ice.", why: "already goes between have and V3." },
        { text: "The study of extremophiles [[has taught|'s taught]]" + H("teach") + " us a lot about life on Earth.", why: "the study = it → has taught." }
      ]
    },

    {
      type: "rephrase", label: "grammar · superlative + ever", sticker: "polar",
      title: "Ask me!",
      instructions: "Write the question. Then <b>ask me</b> — and answer it yourself too.",
      items: [
        { prompt: "coldest place / you / ever / be", key: "?", answers: ["What's the coldest place you've ever been?", "What is the coldest place you have ever been?", "What's the coldest place you've ever been to?", "What is the coldest place you have ever been to?"] },
        { prompt: "strangest animal / you / ever / see", key: "?", answers: ["What's the strangest animal you've ever seen?", "What is the strangest animal you have ever seen?"] },
        { prompt: "most beautiful place / you / ever / visit", key: "?", answers: ["What's the most beautiful place you've ever visited?", "What is the most beautiful place you have ever visited?"] },
        { prompt: "biggest animal / you / ever / touch", key: "?", answers: ["What's the biggest animal you've ever touched?", "What is the biggest animal you have ever touched?"] },
        { prompt: "hottest weather / you / ever / experience", key: "?", answers: ["What's the hottest weather you've ever experienced?", "What is the hottest weather you have ever experienced?"] },
        { prompt: "scariest movie / you / ever / watch", key: "?", answers: ["What's the scariest movie you've ever watched?", "What is the scariest movie you have ever watched?"] }
      ]
    },

    {
      type: "correct", label: "grammar · fix it", sticker: "snow",
      title: "Find and fix the mistake",
      instructions: "Each sentence has <b>one</b> mistake. Write the correct sentence.",
      items: [
        { wrong: "I have seen a blobfish last year.", answers: ["I saw a blobfish last year."] },
        { wrong: "Have you ever went to Alaska?", answers: ["Have you ever been to Alaska?", "Have you ever gone to Alaska?"] },
        { wrong: "She has never saw a polar bear.", answers: ["She has never seen a polar bear.", "She's never seen a polar bear."] },
        { wrong: "Scientists have discover two new species.", answers: ["Scientists have discovered two new species."] },
        { wrong: "They haven't named them already.", answers: ["They haven't named them yet."] },
        { wrong: "I never have been to a desert.", answers: ["I have never been to a desert.", "I've never been to a desert."] },
        { wrong: "The study of microbes have taught us a lot.", answers: ["The study of microbes has taught us a lot."] }
      ]
    },

    /* ================= 5 · READING 2 ================= */
    { type: "part", n: "05", icon: "frog", title: "Weird and wonderful", text: "Reading · strategy: categorize information" },

    {
      type: "rule", label: "reading · weird and wonderful", sticker: "frog",
      title: "Who says bizarre is bad?",
      html: `
        <div class="article"><span class="tag">nature</span>
          <p>Some creatures will never be as popular as kittens or lions. But being bizarre doesn’t make an animal less important — and these three have a lot to teach us.</p>
          <p><b>The purple pig-nosed frog</b> lives in India and has a strange, pointed nose. Scientists only discovered it in 2003, because it spends almost the whole year in a burrow several meters underground, eating worms and other bugs. For about two weeks a year, during the heavy monsoon rains, it comes up to breed — then it goes back down.</p>
          <p><b>The tongue-eating louse</b> is a tiny parasite, only about 8 mm long, found in oceans all over the world. It does exactly what its name says: it eats a fish’s tongue. Then it stays in the fish’s mouth — and the fish uses the louse as its new tongue! Surprisingly, the fish doesn’t die. (And no, it doesn’t eat human tongues.)</p>
          <p><b>The blobfish</b> lives in very deep water between Tasmania and New Zealand, so we know very little about it. It has almost no muscles and no hard bones. At the surface it looks like a pink blob, but deep down the high water pressure holds its body in a normal fish shape. Nobody has ever filmed it in its home. Scientists think it doesn’t really swim: it just floats and waits for food to come into its mouth.</p>
        </div>
        <figure class="photo wide" style="margin:0"><img loading="lazy" alt="A warthog drinking at a waterhole" src="${IMG("warthog.jpg")}"><figcaption><b>Another “ugly” animal: a warthog</b><small>Photo: Charles J. Sharp · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>`
    },

    {
      type: "sort", label: "reading · categorize", sticker: "frog",
      title: "Which animal?",
      instructions: "Put each fact under the right animal — like the table in your book: habitat, diet, appearance.",
      categories: [
        { name: "pig-nosed frog", words: ["lives in India", "found only in 2003", "lives underground", "eats worms and bugs"] },
        { name: "tongue-eating louse", words: ["about 8 mm long", "a parasite", "replaces a fish’s tongue", "the fish doesn’t die"] },
        { name: "blobfish", words: ["very deep water", "almost no muscles", "pressure keeps its shape", "floats and waits for food"] }
      ]
    },

    {
      type: "mcq", label: "reading · after you read", sticker: "fish",
      title: "Answer the questions",
      instructions: "Choose the best answer.",
      items: [
        { q: "Why did scientists only discover the pig-nosed frog in 2003?", options: ["It lives underground most of the year.", "It is extremely small.", "It lives in the sea."], answer: 0 },
        { q: "When does the frog come out of its burrow?", options: ["Every night.", "For about two weeks in the monsoon, to breed.", "In the dry season, to find water."], answer: 1 },
        { q: "What happens after the louse eats the fish’s tongue?", options: ["The fish dies.", "The louse swims to another fish.", "The fish uses the louse as a tongue."], answer: 2 },
        { q: "Why does the blobfish look so bizarre at the surface?", options: ["There’s no deep-water pressure to hold its shape.", "It is very old.", "It is sick."], answer: 0 },
        { q: "Why do we know so little about the blobfish?", options: ["It is very rare in zoos.", "It lives very deep and nobody has filmed it there.", "It hides inside rocks."], answer: 1 },
        { q: "How does the blobfish get food?", options: ["It hunts very fast.", "It eats plants.", "It floats and waits for food to come to it."], answer: 2 }
      ]
    },


    /* ================= VIDEO 5.1 ================= */
    { type: "part", n: "06", icon: "microscope", title: "Video: Photographing Parasites", text: "Scene 5.1" },

    {
      type: "rule", label: "video · before you watch", sticker: "microscope",
      title: "Before you watch",
      html: `
        <p>The photographer Anand Varma takes pictures of parasites. In this video he photographs a <b>cricket</b> (a small jumping insect) and a <b>horsehair worm</b> — a long, thin worm.</p>
        <ol class="qs">
          <li>Why do you think people usually don’t like parasites?</li>
          <li>How can you take a photo of an animal that lives <b>inside</b> another animal? What equipment would you need? What problems might you have?</li>
        </ol>`
    },

    {
      type: "mcq", label: "video · predict", sticker: "microscope",
      title: "What do you think?",
      instructions: "Before you watch: which sentence is true?",
      items: [
        { q: "The cricket and the horsehair worm…", options: ["The horsehair worm is a parasite that lives inside the cricket.", "The cricket is a parasite that lives inside the worm.", "The worm is a predator that hunts crickets.", "Crickets and horsehair worms are never together."], answer: 0 }
      ]
    },

    {
      type: "rule", label: "video · watch", sticker: "fire",
      title: "Watch scene 5.1",
      html: `
        <div class="video"><iframe src="https://www.youtube-nocookie.com/embed/icHthO2v7rE?rel=0" title="Impact 2 · scene 5.1" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <a class="yt" href="https://www.youtube.com/watch?v=icHthO2v7rE" target="_blank" rel="noopener">▶ Open on YouTube</a>
        <p><b>While you watch:</b> take notes — how does Anand photograph the cricket and the horsehair worm? What does he do first, then, in the end?</p>`
    },

    {
      type: "tfopen", label: "video · after you watch", sticker: "check",
      title: "After you watch: true or false?",
      note: "We check these together — tell me why, with details from the video.",
      items: [
        "Most of the parasite photos Anand had seen before were very beautiful.",
        "Anand wants people to think that parasites are cool.",
        "To get the photo, Anand puts the cricket into water with a special mix of salts.",
        "Anand thought it was easy to photograph the cricket and the worm.",
        "The salt water made it more difficult for Anand to take the photo.",
        "Anand feels that every job gives him a new challenge."
      ]
    },

    {
      type: "rule", label: "video · talk", sticker: "speech",
      title: "Your opinion",
      html: `
        <ol class="qs">
          <li>Anand says that people tend not to like parasites very much. Why is that?</li>
          <li>Is a parasite “better” or “worse” than a predator, like a lion? Use a strong opinion — I’ll respond!</li>
          <li>Describe an animal photo you really like: what’s in it, why do you like it, how do you think it was taken?</li>
        </ol>`
    },

    /* ================= 6 · AS ... AS ================= */
    { type: "part", n: "07", icon: "scale", title: "as … as", text: "Grammar: comparisons of equality" },

    {
      type: "rule", label: "grammar · as … as", sticker: "scale",
      title: "Just as important",
      html: `
        <div class="colloc">
          <div><b>as + adjective / adverb + as</b>: The Pacific hagfish is <b>just as important as</b> other fish. · Polar bears <b>can’t swim as fast as</b> penguins.</div>
          <div><b>as much as</b> (uncountable / weight): A blue whale weighs <b>as much as</b> 23 elephants!</div>
          <div><b>as many + noun + as</b>: Humans have <b>as many</b> hairs on their bodies <b>as</b> chimpanzees.</div>
          <div><b>not as … as</b> = less: Blobfish are<b>n’t as</b> beautiful <b>as</b> kittens. · <b>just / about / nearly</b> as … as</div>
        </div>
        <div class="note">⚠️ <s>as fast like</s> · <s>as faster as</s> · <s>so fast as</s> → <b>as fast as</b></div>`
    },

    {
      type: "gapfill", label: "grammar · as … as", sticker: "scale",
      title: "Equal or not?",
      instructions: "Use <b>as … as</b> with the word in brackets. Add <b>not</b> where the hint says so.",
      items: [
        { text: "The Pacific hagfish is just [[as unusual as]]" + H("unusual") + " many other animals in this unit.", why: "as + adjective + as." },
        { text: "The hagfish is about 300 million years old — about [[as old as]]" + H("old") + " the first land animals.", why: "as old as." },
        { text: "Polar bears [[can't swim as fast as|cannot swim as fast as]]" + H("can’t / swim / fast") + " penguins.", why: "not as fast as = slower." },
        { text: "An adult warthog weighs about [[as much as]]" + H("much") + " a baby elephant.", why: "weight → as much as." },
        { text: "Humans have [[as many]] hairs on their bodies [[as]] chimpanzees.", why: "as many + noun + as." },
        { text: "A camel [[isn't as fast as|is not as fast as]]" + H("not / fast") + " a horse, but it can walk for days without water.", why: "isn’t as + adjective + as." },
        { text: "I think blobfish are [[as ugly as]]" + H("ugly") + " naked mole rats!", why: "as ugly as." },
        { text: "My little brother [[isn't as brave as|is not as brave as]]" + H("not / brave") + " me — he’s scared of slugs.", why: "isn’t as brave as." }
      ]
    },

    {
      type: "rephrase", label: "grammar · as … as", sticker: "scale",
      title: "Say it with as … as",
      instructions: "Rewrite the facts in one sentence with <b>as … as</b>.",
      items: [
        { prompt: "I think blobfish and naked mole rats are both very ugly.", key: "AS UGLY AS", answers: ["I think blobfish are as ugly as naked mole rats.", "I think naked mole rats are as ugly as blobfish."] },
        { prompt: "An adult warthog and a baby elephant both weigh about 90 kg.", key: "AS MUCH AS", answers: ["An adult warthog weighs as much as a baby elephant.", "A baby elephant weighs as much as an adult warthog.", "An adult warthog weighs about as much as a baby elephant."] },
        { prompt: "There are only about 7,000 proboscis monkeys and about 7,000 snow leopards left.", key: "AS MANY AS", answers: ["There are as many proboscis monkeys as snow leopards.", "There are as many snow leopards as proboscis monkeys.", "There are about as many proboscis monkeys as snow leopards."] },
        { prompt: "The frilled shark swims 1,500 m deep. The Pacific hagfish swims 1,500 m deep too.", key: "AS DEEP AS", answers: ["The frilled shark swims as deep as the Pacific hagfish.", "The Pacific hagfish swims as deep as the frilled shark."] },
        { prompt: "A camel is about 2 m tall. A horse is about 1.6 m tall.", key: "NOT AS TALL", answers: ["A horse isn't as tall as a camel.", "A horse is not as tall as a camel."] },
        { prompt: "Arctic winters are very cold. Antarctic winters are even colder.", key: "NOT AS COLD", answers: ["Arctic winters aren't as cold as Antarctic winters.", "Arctic winters are not as cold as Antarctic winters."] }
      ]
    },

    /* ================= 7 · WRITING ================= */
    { type: "part", n: "08", icon: "pencil", title: "Persuasive essay", text: "Writing: introducing reasons" },

    {
      type: "rule", label: "writing · introducing reasons", sticker: "pencil",
      title: "Support your opinion with facts",
      html: `
        <div class="colloc">
          <div><b>because</b> + a sentence: Scientists study it <b>because</b> it can grow back lost legs.</div>
          <div><b>as a result (of)</b>: It isn’t as attractive as a panda. <b>As a result</b>, nobody notices it. · Many species are in danger <b>as a result of</b> climate change.</div>
          <div><b>for this reason / for these reasons</b>: It never grows old. <b>For this reason</b>, scientists study it.</div>
          <div><b>therefore</b>: It is endangered. <b>Therefore</b>, we must protect it.</div>
        </div>
        <p>Plan: <b>1</b> the animal and the problem · <b>2–3</b> two reasons to save it, with facts · <b>4</b> conclusion: <i>For all of these reasons, we should…</i></p>`
    },

    {
      type: "mcq", label: "writing · linking reasons", sticker: "pencil",
      title: "Choose the linker",
      instructions: "Choose the phrase that fits.",
      items: [
        { q: "The axolotl isn’t as attractive as a panda. ___, it doesn’t get much attention.", options: ["As a result", "Because", "For example"], answer: 0 },
        { q: "Scientists study the axolotl ___ it can grow back lost body parts.", options: ["therefore", "because", "as a result"], answer: 1 },
        { q: "It never becomes an adult. ___, scientists think it can teach us about aging.", options: ["Because", "Although", "For this reason"], answer: 2 },
        { q: "The axolotl was important in Aztec legends. ___, if it disappears, we will lose part of that culture.", options: ["Therefore", "Because", "However"], answer: 0 },
        { q: "Many animals are in danger ___ climate change.", options: ["therefore", "as a result of", "for this reason"], answer: 1 },
        { q: "Blobfish live very deep. ___, we know very little about them.", options: ["Because of", "Because", "For this reason"], answer: 2 }
      ]
    },

    {
      type: "write", label: "writing · Save the …!", sticker: "pencil",
      title: "Save the …!",
      instructions: "Choose an unpopular or “ugly” animal (blobfish, warthog, axolotl, naked mole rat, hagfish…). Write a <b>persuasive essay</b> of 4 paragraphs (120–160 words): why should people save it?",
      words: ["because", "as a result", "for this reason", "therefore", "remarkable", "creature", "thrive", "harsh", "environment", "rare", "exist", "tolerate"],
      checks: [
        { label: "3 linkers: because / as a result / for this reason / therefore", pattern: "\\b(because|as a result|for th(is|ese) reasons?|therefore)\\b", min: 3 },
        { label: "as … as once", pattern: "\\bas\\s+(\\w+\\s+){1,2}as\\b" },
        { label: "present perfect once", pattern: "\\b(have|has|['’]ve|['’]s)\\s+(never\\s+|already\\s+|ever\\s+|just\\s+)?(been|seen|lived|found|discovered|studied|become|disappeared|survived|existed|learned|learnt|taught|shown|lost|grown|changed|done|made|helped)\\b" },
        { label: "4+ unit words (they light up)", words: 4 },
        { label: "at least 8 sentences", sentences: 8 }
      ],
      sample: "Save the Blobfish! The blobfish has been called the ugliest animal in the world. As a result, very few people care about it. However, it is just as important as any other fish. First, it lives in a harsh environment, deep in the ocean, where the pressure is enormous. For this reason, scientists can learn a lot from it about how creatures tolerate extreme conditions. Second, it is in danger because deep-sea fishing boats often catch it by accident. Nobody has ever filmed it in its home, so we still know very little about it. Therefore, we should protect the deep ocean before this remarkable creature disappears. For all of these reasons, we should save the blobfish!"
    },


    /* ================= MISSION 5.2 ================= */
    { type: "part", n: "09", icon: "microscope", title: "Mission: Ask Questions", text: "Scene 5.2 · Kevin Hand" },

    {
      type: "rule", label: "mission · watch", sticker: "microscope",
      title: "Watch scene 5.2",
      html: `
        <div class="video"><iframe src="https://www.youtube-nocookie.com/embed/85hVpynyFnc?rel=0" title="Impact 2 · scene 5.2" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        <a class="yt" href="https://youtu.be/85hVpynyFnc" target="_blank" rel="noopener">▶ Open on YouTube</a>
        <p>Kevin Hand’s advice: ask questions, even when they feel scary — the exciting part of science is in the questions.</p>
        <ol class="qs">
          <li>What questions does Kevin ask in his work? Which one do you find the most exciting?</li>
          <li>Choose one animal from this unit. What environment does it live in? How does it handle the conditions? Could it live where you live? Why / why not?</li>
        </ol>`
    },

    {
      type: "write", label: "mission · your questions", sticker: "speech",
      title: "Survival questions about your area",
      instructions: "Write <b>6 questions</b> about how animals and plants survive in your area (winter, heat, the city…). Then choose one and tell me how we could find the answer.",
      words: ["survive", "handle", "tolerate", "thrive", "conditions", "environment", "lack of", "harsh", "creature", "exist"],
      checks: [
        { label: "6 questions (each ends with ?)", pattern: "\\?", min: 6 },
        { label: "different question words (how / why / where / what / which / do / can…)", pattern: "\\b(how|why|where|what|which|when|do|does|can|could|is|are)\\b", min: 6 },
        { label: "3+ unit words (they light up)", words: 3 }
      ],
      sample: "How do hedgehogs survive the harsh winter? Why don’t some birds fly south? Where do insects go when it’s −15 °C? Can palm trees exist in Kyiv? Which plants can tolerate a lack of water in July? How do city foxes handle the noise and the cars?"
    },

    /* ================= 8 · SPEED ================= */
    { type: "part", n: "10", icon: "stopwatch", title: "Speed", text: "Make it automatic." },

    {
      type: "drill", label: "automaticity · speed drill", sticker: "stopwatch",
      title: "Twelve quick answers, twice each",
      instructions: "Type the answer and press <b>Enter</b>. Each one must be right <b>twice</b>.",
      items: [
        { cue: "synonym", prompt: "handle = t…", answers: ["tolerate"] },
        { cue: "synonym", prompt: "animal = c…", answers: ["creature"] },
        { cue: "synonym", prompt: "live, be real = e…", answers: ["exist"] },
        { cue: "synonym", prompt: "extraordinary = r…", answers: ["remarkable"] },
        { cue: "V3", prompt: "see", answers: ["seen"] },
        { cue: "V3", prompt: "find", answers: ["found"] },
        { cue: "V3", prompt: "teach", answers: ["taught"] },
        { cue: "V3", prompt: "build", answers: ["built"] },
        { cue: "equal", prompt: "old", answers: ["as old as"] },
        { cue: "less", prompt: "fast", answers: ["not as fast as"] },
        { cue: "weight", prompt: "much", answers: ["as much as"] },
        { cue: "question", prompt: "you / ever / see / a polar bear", answers: ["Have you ever seen a polar bear?"] }
      ]
    },

    /* ================= 9 · SELF-CHECK ================= */
    { type: "part", n: "11", icon: "star", title: "Self-check", text: "What to look at again." },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
