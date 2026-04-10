const promptText = document.getElementById("promptText");
const inputField = document.getElementById("inputField");
const typingShell = document.getElementById("typingShell");
const restartBtn = document.getElementById("restartBtn");
const dailyBtn = document.getElementById("dailyBtn");
const drillBtn = document.getElementById("drillBtn");
const focusBtn = document.getElementById("focusBtn");
const shareBtn = document.getElementById("shareBtn");
const cardBtn = document.getElementById("cardBtn");
const dailyStatusEl = document.getElementById("dailyStatus");
const dismissWelcomeBtn = document.getElementById("dismissWelcomeBtn");
const welcomeCard = document.getElementById("welcomeCard");
const analyzeTabs = document.querySelectorAll("#analyzeTabs [data-group]");
const analyzeCards = document.querySelectorAll("#advancedPanel [data-group]");
const returnLiveBtn = document.getElementById("returnLiveBtn");
const historyStatus = document.getElementById("historyStatus");
const toastEl = document.getElementById("toast");
const testTypeSelect = document.getElementById("testTypeSelect");
const testTypeHint = document.getElementById("testTypeHint");
const modeSelect = document.getElementById("modeSelect");
const durationSelect = document.getElementById("durationSelect");
const themeSelect = document.getElementById("themeSelect");
const textPackSelect = document.getElementById("textPackSelect");
const customTextInput = document.getElementById("customTextInput");
const customTextFileInput = document.getElementById("customTextFileInput");
const saveCustomTextBtn = document.getElementById("saveCustomTextBtn");
const importCustomTextBtn = document.getElementById("importCustomTextBtn");
const customTextStatus = document.getElementById("customTextStatus");
const fairModeBtn = document.getElementById("fairModeBtn");
const fairModeStatus = document.getElementById("fairModeStatus");
const fairBestStatus = document.getElementById("fairBestStatus");
const dyslexiaBtn = document.getElementById("dyslexiaBtn");
const goalSelect = document.getElementById("goalSelect");
const finishViewSelect = document.getElementById("finishViewSelect");
const viewTabs = document.querySelectorAll("#viewTabs .view-tab");
const viewPages = document.querySelectorAll(".view-page");
const modeChips = document.querySelectorAll("#modeChips .chip");
const durationChips = document.querySelectorAll("#durationChips .chip");
const themeChips = document.querySelectorAll("#themeChips .chip");
const mutatorChips = document.querySelectorAll("#mutatorChips .chip");

const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");
const comboEl = document.getElementById("combo");
const errorsEl = document.getElementById("errors");
const timeLeftEl = document.getElementById("timeLeft");
const bestWpmEl = document.getElementById("bestWpm");
const hintEl = document.getElementById("hint");
const rhythmMeter = document.getElementById("rhythmMeter");
const rhythmLabel = document.getElementById("rhythmLabel");
const medalEl = document.getElementById("medal");
const medalHintEl = document.getElementById("medalHint");
const recordDeltaEl = document.getElementById("recordDelta");
const ghostMeter = document.getElementById("ghostMeter");
const ghostLabel = document.getElementById("ghostLabel");
const weakKeysEl = document.getElementById("weakKeys");
const paceCanvas = document.getElementById("paceCanvas");
const paceLabel = document.getElementById("paceLabel");
const scoreEl = document.getElementById("score");
const rankEl = document.getElementById("rank");
const achievementEl = document.getElementById("achievement");
const achievementHintEl = document.getElementById("achievementHint");
const runLogEl = document.getElementById("runLog");
const keymapEl = document.getElementById("keymap");
const resultCardCanvas = document.getElementById("resultCardCanvas");
const cardHintEl = document.getElementById("cardHint");
const coachTitleEl = document.getElementById("coachTitle");
const coachHintEl = document.getElementById("coachHint");
const goalMeter = document.getElementById("goalMeter");
const goalLabel = document.getElementById("goalLabel");
const streakCountEl = document.getElementById("streakCount");
const streakLabelEl = document.getElementById("streakLabel");

const MODE_POOLS = {
  velocity: [
    "velocity",
    "momentum",
    "ignite",
    "swift",
    "cadence",
    "stream",
    "signal",
    "vector",
    "accelerate",
    "precision",
    "kinetic",
    "pulse",
    "focus",
    "launch",
    "horizon",
    "dynamic",
    "instant",
    "optimal",
    "rhythm",
    "surge",
    "agile",
    "clarity",
    "apex",
    "execute",
    "craft"
  ],
  syntax: [
    "const",
    "return",
    "function",
    "object",
    "closure",
    "module",
    "boolean",
    "iterate",
    "handler",
    "render",
    "resolve",
    "promise",
    "payload",
    "compile",
    "pointer",
    "thread",
    "binary",
    "interface",
    "testing",
    "pattern",
    "nullable",
    "schema",
    "runtime",
    "context",
    "syntax"
  ],
  zen: [
    "breathe",
    "still",
    "silent",
    "gentle",
    "ripple",
    "candle",
    "meadow",
    "harmony",
    "drift",
    "morning",
    "balance",
    "center",
    "steady",
    "exhale",
    "softly",
    "amber",
    "calm",
    "quiet",
    "floating",
    "mindful",
    "settle",
    "shelter",
    "tranquil",
    "warmth",
    "ease"
  ],
  improve: [
    "train",
    "refine",
    "repeat",
    "letter",
    "pattern",
    "memory",
    "focus",
    "steady",
    "timing",
    "rhythm",
    "signal",
    "precision",
    "clarity",
    "control",
    "smooth",
    "method",
    "practice",
    "improve",
    "discipline",
    "sharpen",
    "repeatable",
    "calibrate",
    "efficient",
    "measure",
    "master"
  ]
};

const KEYMAP_KEYS = "qwertyuiopasdfghjklzxcvbnm".split("");
const QUOTE_BANK = [
  "The future depends on what you do today.",
  "Simplicity is the ultimate sophistication.",
  "Quality is not an act; it is a habit.",
  "Well begun is half done.",
  "Discipline is choosing between what you want now and what you want most.",
  "Action is the foundational key to all success.",
  "Success is the sum of small efforts, repeated day in and day out.",
  "What we think, we become.",
  "Great things are done by a series of small things brought together.",
  "Do not wait for opportunity. Create it."
];

const TEXT_PACKS = {
  code: [
    "const result = items.filter(Boolean).map((item) => item.trim()).join(\" \");",
    "function debounce(fn, delay) { let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), delay); }; }",
    "if (response.ok) { const data = await response.json(); render(data); } else { throw new Error(\"Request failed\"); }",
    "type User = { id: string; email: string; role: \"admin\" | \"member\" };",
    "for (let i = 0; i < queue.length; i += 1) { process(queue[i]); }",
    "SELECT id, subject, created_at FROM tickets WHERE status = 'open' ORDER BY created_at DESC;",
    "git checkout -b feature/improve-mode && npm run test && npm run build",
    "try { await syncProfile(); notify(\"Saved\"); } catch (err) { notify(\"Retry\"); }"
  ],
  emails: [
    "Hi team, sharing the updated launch checklist. Please review sections two and three before Friday noon.",
    "Thanks for the quick turnaround. I have approved the draft and left comments on the final paragraph.",
    "Could we move tomorrow's standup to 10:30 AM? I have a customer call from 9:45 to 10:15.",
    "Following up on the contract renewal. Let me know if legal needs additional context from engineering.",
    "Great meeting today. Action items are documented below with owners and due dates for next week.",
    "I reviewed the proposal and attached a revised version with cleaner scope and timeline assumptions.",
    "Reminder: please submit your Q2 goals by end of day so we can finalize planning on Monday."
  ],
  essays: [
    "Good writing rewards clarity. A strong sentence moves the reader forward while carrying one idea with intent and precision.",
    "Practice is not repetition without thought. Practice is attention applied repeatedly until effort gives way to control.",
    "Technology changes quickly, but learning remains constant: observe, test assumptions, and refine from evidence.",
    "Progress is often uneven. The important thing is consistency over intensity, because consistency compounds over time.",
    "A useful tool does not distract from the task. It fades into the background and amplifies the user's momentum.",
    "Skill grows when feedback is timely and specific. Vague feedback may comfort, but precise feedback improves performance."
  ]
};

const GOAL_PRESETS = {
  balanced: { wpm: 55, accuracy: 96 },
  sprint: { wpm: 75, accuracy: 95 },
  precision: { wpm: 45, accuracy: 99 },
  elite: { wpm: 90, accuracy: 97 }
};

const state = {
  testType: localStorage.getItem("pulsetypeTestType") || "speed",
  mode: "velocity",
  duration: 60,
  text: "",
  started: false,
  finished: false,
  startTime: 0,
  timerId: null,
  prevValue: "",
  combo: 0,
  maxCombo: 0,
  errors: 0,
  bestWpm: Number(localStorage.getItem("pulsetypeBestWpm")) || 0,
  targetWpm: Number(localStorage.getItem("pulsetypeTargetWpm")) || 52,
  weakKeyMap: new Map(),
  paceSamples: [],
  keyIntervals: [],
  lastKeystrokeAt: 0,
  theme: localStorage.getItem("pulsetypeTheme") || "sol",
  mutators: {
    hardcore: localStorage.getItem("pulsetypeHardcore") === "1",
    sound: localStorage.getItem("pulsetypeSound") === "1",
    strict: localStorage.getItem("pulsetypeStrict") === "1"
  },
  audioCtx: null,
  correct: 0,
  score: 0,
  rank: "-",
  achievement: "-",
  runLog: JSON.parse(localStorage.getItem("pulsetypeRunLog") || "[]"),
  dailyRecords: JSON.parse(localStorage.getItem("pulsetypeDailyRecords") || "{}"),
  dailyMode: false,
  drillMode: false,
  lastDrillKeys: [],
  focusEnabled: localStorage.getItem("pulsetypeFocus") === "1",
  analyzeGroup: localStorage.getItem("pulsetypeAnalyzeGroup") || "overview",
  goalPreset: localStorage.getItem("pulsetypeGoalPreset") || "off",
  finishView: localStorage.getItem("pulsetypeFinishView") || "stay",
  runDays: JSON.parse(localStorage.getItem("pulsetypeRunDays") || "[]"),
  viewingRunId: null,
  liveSnapshotBeforeHistory: null,
  smoothedWpm: 0,
  adaptiveScores: new Map(),
  adaptiveLastRetargetAt: 0,
  textPack: localStorage.getItem("pulsetypeTextPack") || "words",
  customText: localStorage.getItem("pulsetypeCustomText") || "",
  fairMode: localStorage.getItem("pulsetypeFairMode") === "1",
  runFairMode: false,
  pasteDetected: false,
  suspiciousEvents: 0,
  visibilityChanges: 0,
  verifiedBestWpm: Number(localStorage.getItem("pulsetypeVerifiedBestWpm")) || 0,
  dyslexiaFont: localStorage.getItem("pulsetypeDyslexia") === "1",
  lastVerification: null
};

const VALID_TEXT_PACKS = new Set(["words", "code", "emails", "essays", "custom"]);
if (!VALID_TEXT_PACKS.has(state.textPack)) state.textPack = "words";
const VALID_TEST_TYPES = new Set(["speed", "accuracy", "code", "email", "essay", "adaptive", "custom"]);
if (!VALID_TEST_TYPES.has(state.testType)) state.testType = "speed";

function randomWord(mode) {
  const pool = MODE_POOLS[mode] || MODE_POOLS.velocity;
  return pool[Math.floor(Math.random() * pool.length)];
}

function dateStamp() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function dailyKey() {
  return `${dateStamp()}|${state.mode}|${state.duration}`;
}

function prevDateStamp(stamp) {
  const [y, m, d] = stamp.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  date.setDate(date.getDate() - 1);
  const yy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yy}-${mm}-${dd}`;
}

function currentGoal() {
  return GOAL_PRESETS[state.goalPreset] || null;
}

function hashString(input) {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededRng(seed) {
  let t = seed >>> 0;
  return function next() {
    t += 0x6d2b79f5;
    let v = Math.imul(t ^ (t >>> 15), 1 | t);
    v ^= v + Math.imul(v ^ (v >>> 7), 61 | v);
    return ((v ^ (v >>> 14)) >>> 0) / 4294967296;
  };
}

function buildPrompt() {
  if (state.drillMode) {
    return buildDrillPrompt();
  }

  if (state.mode === "improve") {
    return buildImprovePrompt();
  }

  if (state.mode === "quotes") {
    return buildQuotePrompt();
  }

  if (state.textPack !== "words") {
    return buildTextPackPrompt();
  }

  const count = Math.round(state.duration * 2.9);
  const dailySeed = hashString(dailyKey());
  const random = state.dailyMode ? seededRng(dailySeed) : Math.random;
  const words = [];
  for (let i = 0; i < count; i += 1) {
    const pool = MODE_POOLS[state.mode] || MODE_POOLS.velocity;
    let word = pool[Math.floor(random() * pool.length)];
    const bonusChance = state.mode === "syntax" ? 0.24 : state.mode === "velocity" ? 0.14 : 0.1;
    if (random() < bonusChance) {
      if (state.mode === "syntax") {
        word += ["()", "[]", "{}", "=>", ";", ".map"][(random() * 6) | 0];
      }
      if (state.mode === "velocity") {
        word += ["-x", "++", "!", "", ""][Math.floor(random() * 5)];
      }
      if (state.mode === "zen" && random() < 0.28) {
        const zenPool = MODE_POOLS.zen;
        word = `${word} ${zenPool[Math.floor(random() * zenPool.length)]}`;
      }
    }
    words.push(word);
  }
  return words.join(" ");
}

function customPackSnippets() {
  return state.customText
    .split(/\n+/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

function normalizeCorpus(raw) {
  return raw.replace(/\r/g, "\n").replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}

function buildTextPackPrompt() {
  const targetChars = Math.max(260, state.duration * 12);
  const snippets =
    state.textPack === "custom" ? customPackSnippets() : TEXT_PACKS[state.textPack] || TEXT_PACKS.essays;
  if (!snippets.length) {
    return "No custom text saved yet. Go to Settings and import your own text pack.";
  }

  const words = [];
  let chars = 0;
  while (chars < targetChars) {
    const piece = snippets[(Math.random() * snippets.length) | 0];
    words.push(piece);
    chars += piece.length + 1;
  }
  return words.join(" ");
}

function buildImprovePrompt() {
  const count = Math.round(state.duration * 3.1);
  const words = [];
  for (let i = 0; i < count; i += 1) {
    words.push(pickAdaptiveWord());
  }
  return words.join(" ");
}

function buildQuotePrompt() {
  const goal = Math.max(220, state.duration * 6);
  const dailySeed = hashString(`${dailyKey()}|quotes`);
  const random = state.dailyMode ? seededRng(dailySeed) : Math.random;
  const quotes = [];
  let total = 0;
  while (total < goal) {
    const q = QUOTE_BANK[(random() * QUOTE_BANK.length) | 0];
    quotes.push(q);
    total += q.length + 1;
  }
  return quotes.join(" ");
}

function buildDrillPrompt() {
  const keys = state.lastDrillKeys.length ? state.lastDrillKeys : ["a", "s", "e"];
  const count = Math.round(state.duration * 3.2);
  const patterns = [];
  const blend = MODE_POOLS[state.mode] || MODE_POOLS.velocity;

  for (let i = 0; i < count; i += 1) {
    const k = keys[i % keys.length];
    const word = blend[(Math.random() * blend.length) | 0];
    const template = i % 4;
    if (template === 0) patterns.push(`${k}${word}${k}`);
    else if (template === 1) patterns.push(`${word}${k}${k}`);
    else if (template === 2) patterns.push(`${k}${k}${word}`);
    else patterns.push(`${word}${k}`);
  }
  return patterns.join(" ");
}

function renderPrompt(cursorIndex = 0) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < state.text.length; i += 1) {
    const span = document.createElement("span");
    span.className = "char";
    span.textContent = state.text[i];
    span.dataset.index = i;
    if (i === cursorIndex) span.classList.add("current");
    fragment.appendChild(span);
  }
  promptText.innerHTML = "";
  promptText.appendChild(fragment);
}

function pct(value) {
  return `${Math.max(0, Math.min(100, value)).toFixed(0)}%`;
}

function elapsedSeconds() {
  if (!state.started) return 0;
  return (Date.now() - state.startTime) / 1000;
}

function stableWpm(correctChars, elapsed) {
  if (elapsed <= 0) return 0;
  // Avoid unrealistic startup spikes in the first second.
  const denominator = Math.max(elapsed, 1.2);
  const instant = (correctChars / 5 / denominator) * 60;
  if (elapsed < 0.3 && correctChars < 3) return 0;
  if (!state.started) return 0;
  if (state.smoothedWpm === 0) {
    state.smoothedWpm = instant;
  } else {
    state.smoothedWpm = state.smoothedWpm * 0.72 + instant * 0.28;
  }
  return Math.max(0, state.smoothedWpm);
}

function evaluate(input, skipRetarget = false) {
  const chars = promptText.querySelectorAll(".char");
  let correct = 0;

  chars.forEach((node, idx) => {
    node.classList.remove("correct", "wrong", "current");
    const typed = input[idx];
    const target = state.text[idx];

    if (typed == null) return;
    if (typed === target) {
      node.classList.add("correct");
      correct += 1;
    } else {
      node.classList.add("wrong");
    }
  });

  const cursor = chars[Math.min(input.length, chars.length - 1)];
  if (cursor) {
    cursor.classList.add("current");
    cursor.scrollIntoView({ block: "center", inline: "nearest" });
  }

  const elapsed = elapsedSeconds();
  const rawWpm = stableWpm(correct, elapsed);
  const accuracy = input.length ? (correct / input.length) * 100 : 100;
  state.correct = correct;

  wpmEl.textContent = `${Math.round(rawWpm)}`;
  accuracyEl.textContent = pct(accuracy);
  errorsEl.textContent = `${state.errors}`;
  comboEl.textContent = `${state.combo}x`;

  updateScore(rawWpm, accuracy);
  updateRhythm(rawWpm, accuracy);
  updateMedal(rawWpm, accuracy);
  updateGhost(rawWpm);
  updatePaceGraph(rawWpm);
  updateWeakKeys();
  updateAchievement(rawWpm, accuracy);
  updateCoach(rawWpm, accuracy);
  updateGoalProgress(rawWpm, accuracy);
  if (!skipRetarget) {
    maybeRetargetUpcoming(input.length);
  }

  if (input.length >= state.text.length) finish();
}

function topAdaptiveLetters(limit = 3) {
  return [...state.adaptiveScores.entries()]
    .filter((entry) => entry[1] > 0.12)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map((entry) => entry[0]);
}

function pickAdaptiveWord() {
  const pool = MODE_POOLS.improve;
  const targets = topAdaptiveLetters(4);
  if (!targets.length) {
    return pool[(Math.random() * pool.length) | 0];
  }

  const weighted = pool.map((word) => {
    let weight = 1;
    targets.forEach((letter) => {
      if (word.includes(letter)) {
        weight += state.adaptiveScores.get(letter) || 0;
      }
    });
    return { word, weight };
  });

  const total = weighted.reduce((sum, item) => sum + item.weight, 0);
  let r = Math.random() * total;
  for (let i = 0; i < weighted.length; i += 1) {
    r -= weighted[i].weight;
    if (r <= 0) return weighted[i].word;
  }
  return weighted[weighted.length - 1].word;
}

function buildAdaptiveSuffix(targetLength) {
  const words = [];
  let chars = 0;
  while (chars < targetLength + 20) {
    const word = pickAdaptiveWord();
    words.push(word);
    chars += word.length + 1;
  }
  return words.join(" ").slice(0, targetLength);
}

function rewriteStartAfterWords(fromIndex, wordsToLock) {
  let cursor = fromIndex;
  let steps = 0;
  while (steps < wordsToLock) {
    const nextSpace = state.text.indexOf(" ", cursor);
    if (nextSpace === -1) return -1;
    cursor = nextSpace + 1;
    steps += 1;
  }
  return cursor;
}

function maybeRetargetUpcoming(inputLength) {
  if (state.mode !== "improve" || !state.started || state.finished) return;
  const firstSpace = state.text.indexOf(" ");
  if (firstSpace !== -1 && inputLength <= firstSpace) return;
  const now = performance.now();
  if (now - state.adaptiveLastRetargetAt < 900) return;
  state.adaptiveLastRetargetAt = now;

  // Keep a stable near-cursor zone so slow typers don't feel abrupt word swaps.
  const rewriteStart = rewriteStartAfterWords(inputLength, 3);
  if (rewriteStart === -1) return;
  if (rewriteStart >= state.text.length) return;

  const remaining = state.text.length - rewriteStart;
  if (remaining < 120) return;

  const prefix = state.text.slice(0, rewriteStart);
  const suffix = buildAdaptiveSuffix(remaining);
  state.text = `${prefix}${suffix}`;
  renderPrompt(inputLength);
  evaluate(inputField.value, true);
  updateDailyStatus();
}

function registerMistake(letter) {
  if (!letter || letter.trim() === "") return;
  const key = letter.toLowerCase();
  const current = state.adaptiveScores.get(key) || 0;
  state.adaptiveScores.set(key, current * 0.9 + 1);
}

function registerCorrect(letter) {
  if (!letter || letter.trim() === "") return;
  const key = letter.toLowerCase();
  const current = state.adaptiveScores.get(key) || 0;
  if (current <= 0) return;
  state.adaptiveScores.set(key, current * 0.985);
}

function updateScore(wpm, accuracy) {
  const stability = rhythmStability();
  const weighted =
    state.correct * 2.4 +
    state.maxCombo * 5 +
    wpm * 1.7 +
    accuracy * 2.1 +
    stability * 0.9 -
    state.errors * 7;
  state.score = Math.max(0, Math.round(weighted));
  scoreEl.textContent = `${state.score}`;

  if (state.score >= 980) state.rank = "S+";
  else if (state.score >= 860) state.rank = "S";
  else if (state.score >= 730) state.rank = "A";
  else if (state.score >= 590) state.rank = "B";
  else if (state.score >= 450) state.rank = "C";
  else state.rank = "D";

  rankEl.textContent = state.rank;
}

function updateRhythm(wpm, accuracy) {
  const index = Math.min(100, Math.round((wpm / 100) * 70 + accuracy * 0.3));
  rhythmMeter.style.width = `${index}%`;

  if (index > 88) rhythmLabel.textContent = "locked in";
  else if (index > 70) rhythmLabel.textContent = "steady flow";
  else if (index > 45) rhythmLabel.textContent = "finding pace";
  else rhythmLabel.textContent = "warming up";
}

function updateMedal(wpm, accuracy) {
  let medal = "Bronze";
  if (wpm >= 80 && accuracy >= 97) medal = "Platinum";
  else if (wpm >= 60 && accuracy >= 95) medal = "Gold";
  else if (wpm >= 45 && accuracy >= 92) medal = "Silver";

  medalEl.textContent = medal;
  medalHintEl.textContent = `Max combo: ${state.maxCombo}x | Target: ${Math.round(state.targetWpm)} WPM`;
}

function updateGhost(wpm) {
  const capped = Math.max(0, Math.min(150, wpm));
  const target = Math.max(20, state.targetWpm);
  const progress = Math.min(100, Math.round((capped / target) * 100));
  ghostMeter.style.width = `${progress}%`;
  ghostLabel.textContent = `Target pace: ${Math.round(target)} WPM`;
}

function updateWeakKeys() {
  const ranked = [...state.weakKeyMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .filter((entry) => entry[1] > 0);

  weakKeysEl.textContent = ranked.length
    ? ranked.map(([key, misses]) => `${key.toUpperCase()}(${misses})`).join(" ")
    : "-";
  renderKeymap();
}

function updateAchievement(wpm, accuracy) {
  let badge = "-";
  let hint = "Reach 40 combo for Flow State.";

  if (state.maxCombo >= 60) {
    badge = "Combo Titan";
    hint = "60+ combo achieved.";
  } else if (state.maxCombo >= 40) {
    badge = "Flow State";
    hint = "40+ combo achieved.";
  } else if (wpm >= 90 && accuracy >= 97) {
    badge = "Lightning Fingers";
    hint = "90+ WPM at elite accuracy.";
  } else if (accuracy >= 99 && state.errors <= 2) {
    badge = "Surgical";
    hint = "Near-perfect precision.";
  } else if (state.mutators.hardcore && state.errors < 8) {
    badge = "Iron Mind";
    hint = "Hardcore run with low mistakes.";
  }

  state.achievement = badge;
  achievementEl.textContent = badge;
  achievementHintEl.textContent = hint;
}

function updateCoach(wpm, accuracy) {
  const stability = rhythmStability();
  const weak = [...state.weakKeyMap.entries()].sort((a, b) => b[1] - a[1])[0];
  let title = "Ready";
  let hint = "Run a test to get personalized practice advice.";

  if (!state.started && !state.finished) {
    coachTitleEl.textContent = title;
    coachHintEl.textContent = hint;
    return;
  }

  if (accuracy < 95) {
    title = "Accuracy First";
    hint = "Slow by 5-10 WPM and hold 97%+ accuracy before pushing speed.";
  } else if (stability < 62) {
    title = "Smooth Cadence";
    hint = "Your rhythm is uneven. Keep a steady pace and avoid bursts.";
  } else if (weak && weak[1] >= 4) {
    title = "Weak Key Drill";
    hint = `Your biggest miss is '${weak[0]}'. Use Drill mode for focused reps.`;
  } else if (wpm < state.targetWpm) {
    title = "Chase The Ghost";
    hint = `You are below target pace (${Math.round(state.targetWpm)}). Build combo in the first 15 seconds.`;
  } else {
    title = "Elite Control";
    hint = "Great form. Raise duration or enable Strict mode for next-level gains.";
  }

  coachTitleEl.textContent = title;
  coachHintEl.textContent = hint;
}

function updateGoalProgress(wpm, accuracy) {
  const goal = currentGoal();
  if (!goal) {
    goalMeter.style.width = "0%";
    goalLabel.textContent = "No goal selected.";
    return false;
  }

  const wpmRatio = Math.min(1, wpm / goal.wpm);
  const accRatio = Math.min(1, accuracy / goal.accuracy);
  const progress = Math.round(((wpmRatio + accRatio) / 2) * 100);
  goalMeter.style.width = `${progress}%`;
  goalLabel.textContent = `${goal.wpm} WPM / ${goal.accuracy}% target`;
  return wpm >= goal.wpm && accuracy >= goal.accuracy;
}

function currentStreak() {
  const set = new Set(state.runDays);
  let cursor = dateStamp();
  let streak = 0;
  while (set.has(cursor)) {
    streak += 1;
    cursor = prevDateStamp(cursor);
  }
  return streak;
}

function updateStreakUI() {
  const streak = currentStreak();
  streakCountEl.textContent = `${streak}`;
  streakLabelEl.textContent =
    streak > 0 ? `${streak} day streak active.` : "Complete a run today to start your streak.";
}

function markRunDay() {
  const today = dateStamp();
  if (!state.runDays.includes(today)) {
    state.runDays.push(today);
    state.runDays.sort();
    localStorage.setItem("pulsetypeRunDays", JSON.stringify(state.runDays));
  }
  updateStreakUI();
}

function verifyRun(finalWpm, accuracy, elapsed) {
  const reasons = [];
  if (!state.runFairMode) reasons.push("fair-off-at-start");
  if (state.pasteDetected) reasons.push("paste-detected");
  const suspiciousRatio = state.keyIntervals.length
    ? state.suspiciousEvents / state.keyIntervals.length
    : 0;
  if (state.keyIntervals.length > 25 && suspiciousRatio > 0.12) reasons.push("timing-anomaly");
  if (state.visibilityChanges > 0) reasons.push("window-switch");
  if (elapsed < Math.max(8, state.duration * 0.2)) reasons.push("too-short");
  if (finalWpm > 220) reasons.push("wpm-outlier");
  if (accuracy > 100 || accuracy < 0) reasons.push("accuracy-invalid");
  return { verified: reasons.length === 0, reasons };
}

function updatePaceGraph(wpm) {
  if (!paceCanvas || !state.started) return;
  const safeWpm = Math.max(0, Math.min(220, wpm));
  const now = elapsedSeconds();
  if (state.paceSamples.length === 0 || now - state.paceSamples[state.paceSamples.length - 1].t > 0.45) {
    state.paceSamples.push({ t: now, wpm: safeWpm });
    if (state.paceSamples.length > 80) state.paceSamples.shift();
  }
  drawPaceGraph();
}

function drawPaceGraph() {
  const ctx = paceCanvas.getContext("2d");
  const width = paceCanvas.width;
  const height = paceCanvas.height;
  ctx.clearRect(0, 0, width, height);

  if (state.paceSamples.length < 2) {
    paceLabel.textContent = "Live WPM trend over this run.";
    return;
  }

  const maxWpm = Math.max(80, ...state.paceSamples.map((sample) => sample.wpm));
  const totalTime = Math.max(1, state.paceSamples[state.paceSamples.length - 1].t);

  ctx.beginPath();
  state.paceSamples.forEach((sample, index) => {
    const x = (sample.t / totalTime) * width;
    const y = height - (sample.wpm / maxWpm) * (height - 8) - 4;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.lineWidth = 2.4;
  ctx.strokeStyle = "rgba(31, 95, 255, 0.9)";
  ctx.stroke();

  const avg = state.paceSamples.reduce((sum, sample) => sum + sample.wpm, 0) / state.paceSamples.length;
  const stability = rhythmStability();
  paceLabel.textContent = `Avg ${Math.round(avg)} WPM | Stability ${stability}%`;
}

function rhythmStability() {
  if (state.keyIntervals.length < 6) return 0;
  const mean = state.keyIntervals.reduce((sum, n) => sum + n, 0) / state.keyIntervals.length;
  if (mean === 0) return 0;
  const variance =
    state.keyIntervals.reduce((sum, n) => sum + (n - mean) * (n - mean), 0) /
    state.keyIntervals.length;
  const std = Math.sqrt(variance);
  const score = Math.max(0, Math.min(100, Math.round((1 - std / mean) * 100)));
  return score;
}

function updateTimer() {
  const left = Math.max(0, state.duration - Math.floor(elapsedSeconds()));
  timeLeftEl.textContent = `${left}`;
  if (left <= 0) finish();
}

function startSession() {
  state.started = true;
  state.startTime = Date.now();
  state.runFairMode = state.fairMode;
  state.visibilityChanges = 0;
  state.paceSamples = [{ t: 0, wpm: 0 }];
  typingShell.classList.add("armed");
  hintEl.textContent = "Stay smooth. Accuracy drives score.";
  state.timerId = setInterval(updateTimer, 200);
  applyFocusState();
}

function finish() {
  if (state.finished) return;
  state.finished = true;
  clearInterval(state.timerId);
  inputField.blur();
  typingShell.classList.add("finished");
  hintEl.textContent = "Run complete. Press Restart or hit Enter to run again.";

  const finalWpm = Number(wpmEl.textContent);
  const finalAccuracy = Number(accuracyEl.textContent.replace("%", ""));
  const elapsed = elapsedSeconds();
  state.lastVerification = state.runFairMode ? verifyRun(finalWpm, finalAccuracy, elapsed) : null;
  const blendedTarget = Math.round(state.targetWpm * 0.8 + finalWpm * 0.2);
  state.targetWpm = Math.max(25, blendedTarget);
  localStorage.setItem("pulsetypeTargetWpm", String(state.targetWpm));
  if (finalWpm > state.bestWpm) {
    state.bestWpm = finalWpm;
    localStorage.setItem("pulsetypeBestWpm", String(finalWpm));
    bestWpmEl.textContent = `${finalWpm}`;
    recordDeltaEl.textContent = `+${finalWpm}`;
  } else {
    recordDeltaEl.textContent = `${finalWpm - state.bestWpm}`;
  }

  saveRun(finalWpm, finalAccuracy);
  markRunDay();
  const goalHit = updateGoalProgress(finalWpm, Number(accuracyEl.textContent.replace("%", "")));
  if (goalHit) showToast("Goal achieved. Great run.");
  if (state.runFairMode && state.lastVerification) {
    if (state.lastVerification.verified && finalWpm > state.verifiedBestWpm) {
      state.verifiedBestWpm = finalWpm;
      localStorage.setItem("pulsetypeVerifiedBestWpm", String(finalWpm));
    }
    if (fairModeStatus) {
      fairModeStatus.textContent = state.lastVerification.verified
        ? `Last fair run verified (${finalWpm} WPM).`
        : `Last fair run unverified: ${state.lastVerification.reasons.join(", ")}`;
    }
    updateFairBestStatus();
    showToast(state.lastVerification.verified ? "Run verified for fair ranking." : "Run flagged: unverified.");
  }
  state.lastDrillKeys = [...state.weakKeyMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map((entry) => entry[0]);
  renderResultCard();
  if (state.dailyMode) {
    const key = dailyKey();
    const prior = state.dailyRecords[key];
    if (!prior || state.score > prior.score) {
      state.dailyRecords[key] = {
        wpm: finalWpm,
        accuracy: Number(accuracyEl.textContent.replace("%", "")),
        score: state.score,
        rank: state.rank
      };
      localStorage.setItem("pulsetypeDailyRecords", JSON.stringify(state.dailyRecords));
    }
    updateDailyStatus();
  }
  burstEffect();
  applyFocusState();
  if (state.finishView === "analyze") setView("analyze");
}

function saveRun(wpm, accuracy) {
  const stamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const snapshot = createRunSnapshot(stamp);
  const entry = {
    id: `${Date.now()}-${Math.floor(Math.random() * 99999)}`,
    stamp,
    wpm,
    accuracy,
    score: state.score,
    rank: state.rank,
    mode: state.mode,
    duration: state.duration,
    fairMode: state.runFairMode,
    verification: state.lastVerification,
    snapshot
  };
  state.runLog.unshift(entry);
  state.runLog = state.runLog.slice(0, 30);
  localStorage.setItem("pulsetypeRunLog", JSON.stringify(state.runLog));
  renderRunLog();
}

function createRunSnapshot(stamp) {
  return {
    stamp,
    mode: state.mode,
    duration: state.duration,
    dailyMode: state.dailyMode,
    drillMode: state.drillMode,
    wpm: Number(wpmEl.textContent),
    accuracy: accuracyEl.textContent,
    combo: comboEl.textContent,
    errors: Number(errorsEl.textContent),
    score: Number(scoreEl.textContent),
    rank: rankEl.textContent,
    medal: medalEl.textContent,
    medalHint: medalHintEl.textContent,
    recordDelta: recordDeltaEl.textContent,
    rhythmWidth: rhythmMeter.style.width || "0%",
    rhythmLabel: rhythmLabel.textContent,
    ghostWidth: ghostMeter.style.width || "0%",
    ghostLabel: ghostLabel.textContent,
    weakKeys: weakKeysEl.textContent,
    achievement: achievementEl.textContent,
    achievementHint: achievementHintEl.textContent,
    coachTitle: coachTitleEl.textContent,
    coachHint: coachHintEl.textContent,
    goalWidth: goalMeter.style.width || "0%",
    goalLabel: goalLabel.textContent,
    maxCombo: state.maxCombo,
    paceSamples: [...state.paceSamples],
    verification: state.lastVerification
  };
}

function verificationBadge(run) {
  if (!run.verification) return " • Legacy";
  return run.verification.verified ? " • Verified" : " • Unverified";
}

function renderRunLog() {
  runLogEl.innerHTML = "";
  if (!state.runLog.length) {
    const li = document.createElement("li");
    li.textContent = "No runs yet.";
    runLogEl.appendChild(li);
    return;
  }
  state.runLog.forEach((run) => {
    const li = document.createElement("li");
    const top = document.createElement("div");
    top.textContent = `${run.stamp} ${run.rank}${verificationBadge(run)} | ${run.wpm} WPM | ${run.accuracy}%`;
    li.appendChild(top);

    const actions = document.createElement("div");
    actions.className = "run-log-actions";

    const openBtn = document.createElement("button");
    openBtn.className = "mini-btn";
    openBtn.textContent = "Open";
    openBtn.addEventListener("click", () => openRunSnapshot(run.id));
    actions.appendChild(openBtn);

    const saveBtn = document.createElement("button");
    saveBtn.className = "mini-btn";
    saveBtn.textContent = "Save Card";
    saveBtn.addEventListener("click", () => {
      const yes = window.confirm("Download this run's result card?");
      if (!yes) return;
      renderResultCard(run.snapshot);
      downloadResultCard(run.snapshot, `${dateStamp()}-${run.mode}-${run.stamp.replace(/\\s+/g, "")}`);
    });
    actions.appendChild(saveBtn);

    li.appendChild(actions);
    runLogEl.appendChild(li);
  });
}

function openRunSnapshot(runId) {
  const run = state.runLog.find((item) => item.id === runId);
  if (!run || !run.snapshot) return;
  if (!state.viewingRunId) {
    state.liveSnapshotBeforeHistory = createRunSnapshot("live");
  }
  state.viewingRunId = runId;
  applyRunSnapshot(run.snapshot);
  setView("analyze");
  setAnalyzeGroup("overview");
  if (returnLiveBtn) returnLiveBtn.style.display = "";
  if (historyStatus) {
    let fair = "Fair mode off";
    if (run.verification) {
      fair = run.verification.verified
        ? "Verified"
        : `Unverified (${run.verification.reasons.join(", ")})`;
    } else if (run.fairMode) {
      fair = "Legacy fair run (no verification data)";
    }
    historyStatus.textContent = `Viewing saved run from ${run.stamp}. ${fair}.`;
  }
  showToast("Loaded run snapshot.");
}

function applyRunSnapshot(snapshot) {
  wpmEl.textContent = String(snapshot.wpm);
  accuracyEl.textContent = snapshot.accuracy;
  comboEl.textContent = snapshot.combo;
  errorsEl.textContent = String(snapshot.errors);
  scoreEl.textContent = String(snapshot.score);
  rankEl.textContent = snapshot.rank;
  medalEl.textContent = snapshot.medal;
  medalHintEl.textContent = snapshot.medalHint;
  recordDeltaEl.textContent = snapshot.recordDelta;
  rhythmMeter.style.width = snapshot.rhythmWidth;
  rhythmLabel.textContent = snapshot.rhythmLabel;
  ghostMeter.style.width = snapshot.ghostWidth;
  ghostLabel.textContent = snapshot.ghostLabel;
  weakKeysEl.textContent = snapshot.weakKeys;
  achievementEl.textContent = snapshot.achievement;
  achievementHintEl.textContent = snapshot.achievementHint;
  coachTitleEl.textContent = snapshot.coachTitle;
  coachHintEl.textContent = snapshot.coachHint;
  goalMeter.style.width = snapshot.goalWidth;
  goalLabel.textContent = snapshot.goalLabel;
  state.paceSamples = [...(snapshot.paceSamples || [])];
  drawPaceGraph();
  renderResultCard(snapshot);
}

function restoreLiveView() {
  state.viewingRunId = null;
  if (returnLiveBtn) returnLiveBtn.style.display = "none";
  if (historyStatus) historyStatus.textContent = "Showing live session stats.";
  if (state.liveSnapshotBeforeHistory) {
    applyRunSnapshot(state.liveSnapshotBeforeHistory);
  } else {
    updateCoach(Number(wpmEl.textContent), Number(accuracyEl.textContent.replace("%", "")));
    renderResultCard();
  }
  state.liveSnapshotBeforeHistory = null;
}

function renderKeymap() {
  if (!keymapEl) return;
  keymapEl.innerHTML = "";
  KEYMAP_KEYS.forEach((key) => {
    const misses = state.weakKeyMap.get(key) || 0;
    const intensity = Math.min(0.85, misses * 0.14);
    const node = document.createElement("div");
    node.className = "key";
    node.textContent = key;
    node.style.background = `rgba(234, 90, 42, ${0.1 + intensity})`;
    node.style.color = misses > 2 ? "#fff5f0" : "";
    keymapEl.appendChild(node);
  });
}

function dailyRecordForToday() {
  return state.dailyRecords[dailyKey()] || null;
}

function updateDailyStatus() {
  if (!dailyStatusEl) return;
  if (state.drillMode) {
    const keys = state.lastDrillKeys.length ? state.lastDrillKeys.join(", ").toUpperCase() : "A, S, E";
    dailyStatusEl.textContent = `Drill mode active. Focus keys: ${keys}`;
    return;
  }
  if (state.mode === "improve") {
    const letters = topAdaptiveLetters(3);
    if (letters.length) {
      dailyStatusEl.textContent = `Improve mode targeting: ${letters.join(", ").toUpperCase()}`;
    } else {
      dailyStatusEl.textContent = "Improve mode active. Start typing to build your error profile.";
    }
    return;
  }
  const todayRecord = dailyRecordForToday();
  if (!state.dailyMode) {
    dailyStatusEl.textContent = "Daily challenge ready.";
    return;
  }
  if (!todayRecord) {
    dailyStatusEl.textContent = `Daily ${dateStamp()} live. No score yet.`;
    return;
  }
  dailyStatusEl.textContent = `Daily best: ${todayRecord.wpm} WPM | ${todayRecord.rank} | ${todayRecord.score}`;
}

async function shareResult() {
  const lines = [
    "PulseType Run",
    `Mode: ${state.mode}${state.dailyMode ? " (Daily)" : ""}`,
    `Duration: ${state.duration}s`,
    `WPM: ${wpmEl.textContent}`,
    `Accuracy: ${accuracyEl.textContent}`,
    `Score: ${state.score}`,
    `Rank: ${state.rank}`,
    `Achievement: ${state.achievement}`,
    `Combo: ${state.maxCombo}x`
  ];
  const payload = lines.join("\n");
  try {
    await navigator.clipboard.writeText(payload);
    hintEl.textContent = "Result copied. Paste to share your run.";
    showToast("Result copied to clipboard.");
  } catch (_) {
    hintEl.textContent = "Clipboard blocked. You can manually copy from the run log.";
    showToast("Clipboard unavailable.");
  }
}

function renderResultCard(snapshot = null) {
  if (!resultCardCanvas) return;
  const ctx = resultCardCanvas.getContext("2d");
  const w = resultCardCanvas.width;
  const h = resultCardCanvas.height;
  const source = snapshot || {
    mode: state.mode,
    duration: state.duration,
    dailyMode: state.dailyMode,
    drillMode: state.drillMode,
    wpm: wpmEl.textContent,
    accuracy: accuracyEl.textContent,
    score: state.score,
    rank: state.rank,
    maxCombo: state.maxCombo,
    achievement: state.achievement
  };

  const grad = ctx.createLinearGradient(0, 0, w, h);
  if (state.theme === "arc") {
    grad.addColorStop(0, "#131533");
    grad.addColorStop(1, "#25125a");
  } else if (state.theme === "ink") {
    grad.addColorStop(0, "#f2e8cf");
    grad.addColorStop(1, "#dcc9a3");
  } else {
    grad.addColorStop(0, "#fff2dc");
    grad.addColorStop(1, "#d8efef");
  }
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = state.theme === "arc" ? "#f3f1ff" : "#20322d";
  ctx.font = "700 30px Fraunces";
  ctx.fillText("PulseType Session", 24, 44);

  ctx.font = "500 14px Space Grotesk";
  ctx.fillStyle = state.theme === "arc" ? "#c7c0ea" : "#4d6660";
  const sub = `${String(source.mode).toUpperCase()}${source.dailyMode ? " • DAILY" : ""}${source.drillMode ? " • DRILL" : ""} • ${source.duration}s`;
  ctx.fillText(sub, 24, 68);

  const rows = [
    ["WPM", String(source.wpm)],
    ["ACC", String(source.accuracy)],
    ["SCORE", String(source.score)],
    ["RANK", String(source.rank)],
    ["COMBO", `${source.maxCombo}x`],
    ["ACHIEVE", String(source.achievement)]
  ];

  rows.forEach((row, index) => {
    const col = index % 3;
    const line = Math.floor(index / 3);
    const x = 24 + col * 164;
    const y = 112 + line * 74;
    ctx.fillStyle = state.theme === "arc" ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.46)";
    ctx.fillRect(x, y - 24, 148, 58);
    ctx.fillStyle = state.theme === "arc" ? "#c7c0ea" : "#59716a";
    ctx.font = "500 12px Space Grotesk";
    ctx.fillText(row[0], x + 10, y - 4);
    ctx.fillStyle = state.theme === "arc" ? "#ffffff" : "#1f2f2a";
    ctx.font = "700 24px Space Grotesk";
    ctx.fillText(row[1], x + 10, y + 21);
  });

  ctx.fillStyle = state.theme === "arc" ? "#9e97bf" : "#6a7f79";
  ctx.font = "500 12px Space Grotesk";
  ctx.fillText(`Generated ${new Date().toLocaleString()}`, 24, h - 18);
  if (cardHintEl) cardHintEl.textContent = "Result card ready. Press Card to download PNG.";
}

function downloadResultCard(snapshot = null, slug = null) {
  renderResultCard(snapshot);
  if (!resultCardCanvas) return;
  const link = document.createElement("a");
  link.download = slug ? `pulsetype-${slug}.png` : `pulsetype-${dateStamp()}-${state.mode}.png`;
  link.href = resultCardCanvas.toDataURL("image/png");
  link.click();
  showToast("Result card downloaded.");
}

function resetSession() {
  if (state.viewingRunId) restoreLiveView();
  clearInterval(state.timerId);
  state.text = buildPrompt();
  state.started = false;
  state.finished = false;
  state.startTime = 0;
  state.prevValue = "";
  state.combo = 0;
  state.maxCombo = 0;
  state.errors = 0;
  state.weakKeyMap = new Map();
  state.paceSamples = [];
  state.keyIntervals = [];
  state.lastKeystrokeAt = 0;
  state.correct = 0;
  state.score = 0;
  state.rank = "-";
  state.achievement = "-";
  state.smoothedWpm = 0;
  state.runFairMode = false;
  state.pasteDetected = false;
  state.suspiciousEvents = 0;
  state.visibilityChanges = 0;
  state.lastVerification = null;
  state.adaptiveLastRetargetAt = 0;
  if (state.mode !== "improve") {
    state.adaptiveScores = new Map();
  }

  inputField.value = "";
  timeLeftEl.textContent = `${state.duration}`;
  wpmEl.textContent = "0";
  accuracyEl.textContent = "100%";
  comboEl.textContent = "0x";
  errorsEl.textContent = "0";
  rhythmMeter.style.width = "0%";
  rhythmLabel.textContent = "warming up...";
  medalEl.textContent = "-";
  medalHintEl.textContent = "Hit 60+ WPM with 95% accuracy for Gold.";
  recordDeltaEl.textContent = "0";
  hintEl.textContent = state.drillMode
    ? "Drill mode armed. Hunt your weak keys."
    : state.dailyMode
      ? "Daily challenge armed. Press any key to start."
      : "Press any key to start. Type with rhythm.";
  ghostMeter.style.width = "0%";
  ghostLabel.textContent = `Target pace: ${Math.round(state.targetWpm)} WPM`;
  weakKeysEl.textContent = "-";
  scoreEl.textContent = "0";
  rankEl.textContent = "-";
  achievementEl.textContent = "-";
  achievementHintEl.textContent = "Reach 40 combo for Flow State.";
  coachTitleEl.textContent = "Ready";
  coachHintEl.textContent = "Run a test to get personalized practice advice.";
  drawPaceGraph();
  renderRunLog();
  renderKeymap();
  updateDailyStatus();
  renderResultCard();
  updateCoach(0, 100);
  updateGoalProgress(0, 100);
  updateStreakUI();
  setOverdrive(false);
  applyFocusState();

  bestWpmEl.textContent = `${state.bestWpm}`;
  typingShell.classList.remove("armed", "finished");
  renderPrompt(0);
}

function handleInput() {
  if (state.finished) return;

  const value = inputField.value;
  const growing = value.length > state.prevValue.length;

  if (!state.started && value.length > 0) startSession();

  if (growing) {
    const now = performance.now();
    if (state.lastKeystrokeAt) {
      const interval = now - state.lastKeystrokeAt;
      state.keyIntervals.push(interval);
      if (state.keyIntervals.length > 50) state.keyIntervals.shift();
      if (state.fairMode && interval < 18) state.suspiciousEvents += 1;
    }
    state.lastKeystrokeAt = now;

    const idx = value.length - 1;
    if (value[idx] === state.text[idx]) {
      state.combo += 1;
      state.maxCombo = Math.max(state.maxCombo, state.combo);
      if (state.combo >= 20) setOverdrive(true);
      playTone(560, 0.02, 0.015);
      registerCorrect(value[idx]);
    } else {
      state.combo = 0;
      state.errors += 1;
      setOverdrive(false);
      playTone(170, 0.06, 0.03);
      const miss = state.text[idx];
      if (miss && miss.trim() !== "") {
        const key = miss.toLowerCase();
        state.weakKeyMap.set(key, (state.weakKeyMap.get(key) || 0) + 1);
        registerMistake(miss);
      }
    }
  }

  if (!growing && value.length < state.prevValue.length) {
    if (state.mutators.hardcore && state.started && !state.finished) {
      inputField.value = state.prevValue;
      hintEl.textContent = "Hardcore: backspace disabled.";
      return;
    }
    state.combo = 0;
    setOverdrive(false);
  }

  state.prevValue = value;
  evaluate(value);
}

function setMode(mode) {
  state.mode = mode;
  modeChips.forEach((chip) => chip.classList.toggle("active", chip.dataset.mode === mode));
  if (modeSelect) modeSelect.value = mode;
  resetSession();
}

function setDuration(seconds) {
  state.duration = Number(seconds);
  durationChips.forEach((chip) => chip.classList.toggle("active", Number(chip.dataset.time) === state.duration));
  if (durationSelect) durationSelect.value = String(state.duration);
  resetSession();
}

function setDailyMode(on) {
  state.dailyMode = on;
  if (on) {
    state.drillMode = false;
    drillBtn.classList.remove("active");
    document.body.classList.remove("drill");
  }
  dailyBtn.classList.toggle("active", on);
  if (on) hintEl.textContent = "Daily challenge active: same prompt for everyone today.";
  else hintEl.textContent = "Press any key to start. Type with rhythm.";
  resetSession();
}

function setDrillMode(on) {
  state.drillMode = on;
  if (on) {
    state.dailyMode = false;
    dailyBtn.classList.remove("active");
    document.body.classList.add("drill");
  } else {
    document.body.classList.remove("drill");
  }
  drillBtn.classList.toggle("active", on);
  resetSession();
}

function setMutator(mutator) {
  state.mutators[mutator] = !state.mutators[mutator];
  if (mutator === "hardcore") localStorage.setItem("pulsetypeHardcore", state.mutators.hardcore ? "1" : "0");
  if (mutator === "sound") localStorage.setItem("pulsetypeSound", state.mutators.sound ? "1" : "0");
  if (mutator === "strict") localStorage.setItem("pulsetypeStrict", state.mutators.strict ? "1" : "0");
  if (mutator === "strict") document.body.classList.toggle("strict", state.mutators.strict);
  mutatorChips.forEach((chip) =>
    chip.classList.toggle("active", Boolean(state.mutators[chip.dataset.mutator]))
  );
}

function setFocusEnabled(on) {
  state.focusEnabled = on;
  localStorage.setItem("pulsetypeFocus", on ? "1" : "0");
  focusBtn.classList.toggle("active", on);
  applyFocusState();
}

function updateCustomTextStatus() {
  if (!customTextStatus) return;
  const count = customPackSnippets().length;
  customTextStatus.textContent = count
    ? `Custom pack saved (${count} snippet${count === 1 ? "" : "s"}).`
    : "No custom text saved.";
}

function setCustomText(content, sourceLabel = "import") {
  const normalized = normalizeCorpus(content || "");
  state.customText = normalized;
  localStorage.setItem("pulsetypeCustomText", normalized);
  if (customTextInput) customTextInput.value = normalized;
  updateCustomTextStatus();
  if (state.textPack === "custom") resetSession();
  showToast(normalized ? `Custom text ${sourceLabel} saved.` : "Custom text cleared.");
}

function updateFairBestStatus() {
  if (!fairBestStatus) return;
  fairBestStatus.textContent = state.verifiedBestWpm
    ? `Verified best: ${state.verifiedBestWpm} WPM`
    : "Verified best: --";
}

function updateTestTypeHint() {
  if (!testTypeHint) return;
  const hints = {
    speed: "Fast general typing with dynamic word flow.",
    accuracy: "Calmer pacing with precision-first feedback.",
    code: "Real code-style text with symbols and syntax rhythm.",
    email: "Business writing flow with realistic sentence structure.",
    essay: "Long-form prose for consistency and endurance.",
    adaptive: "Machine-guided drills that target your weak letters.",
    custom: "Your imported text corpus, trained your way."
  };
  testTypeHint.textContent = hints[state.testType] || hints.speed;
}

function applyTestType(type, announce = true) {
  const map = {
    speed: { mode: "velocity", textPack: "words" },
    accuracy: { mode: "zen", textPack: "words" },
    code: { mode: "syntax", textPack: "code" },
    email: { mode: "velocity", textPack: "emails" },
    essay: { mode: "zen", textPack: "essays" },
    adaptive: { mode: "improve", textPack: "words" },
    custom: { mode: "velocity", textPack: "custom" }
  };
  const next = map[type] || map.speed;
  state.testType = type in map ? type : "speed";
  localStorage.setItem("pulsetypeTestType", state.testType);
  state.mode = next.mode;
  state.textPack = next.textPack;
  localStorage.setItem("pulsetypeTextPack", state.textPack);
  if (modeSelect) modeSelect.value = state.mode;
  if (textPackSelect) textPackSelect.value = state.textPack;
  if (testTypeSelect) testTypeSelect.value = state.testType;
  updateTestTypeHint();
  resetSession();
  if (announce) showToast(`Test type: ${state.testType}.`);
}

function setTextPack(pack, announce = true) {
  state.textPack = pack;
  localStorage.setItem("pulsetypeTextPack", state.textPack);
  if (textPackSelect) textPackSelect.value = pack;
  resetSession();
  if (announce) {
    if (pack === "custom" && customPackSnippets().length === 0) {
      showToast("Custom source selected. Import text in Settings.");
    } else {
      showToast(`Text source: ${pack}.`);
    }
  }
}

function setFairMode(on) {
  if (state.started && !state.finished) {
    showToast("Finish or restart to change Fair Mode.");
    return false;
  }
  state.fairMode = on;
  localStorage.setItem("pulsetypeFairMode", on ? "1" : "0");
  if (fairModeBtn) fairModeBtn.classList.toggle("active", on);
  if (fairModeStatus) {
    fairModeStatus.textContent = on
      ? "Fair mode on. Paste blocked and run verification enabled."
      : "Fair mode off. Verification disabled.";
  }
  return true;
}

function setDyslexiaFont(on) {
  state.dyslexiaFont = on;
  localStorage.setItem("pulsetypeDyslexia", on ? "1" : "0");
  document.body.classList.toggle("dyslexia-font", on);
  if (dyslexiaBtn) dyslexiaBtn.classList.toggle("active", on);
}

function setView(view) {
  viewTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.view === view));
  viewPages.forEach((page) => page.classList.toggle("active", page.dataset.page === view));
}

function setAnalyzeGroup(group) {
  state.analyzeGroup = group;
  localStorage.setItem("pulsetypeAnalyzeGroup", group);
  analyzeTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.group === group));
  analyzeCards.forEach((card) => {
    card.style.display = card.dataset.group === group ? "" : "none";
  });
}

function showToast(message) {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(showToast.timerId);
  showToast.timerId = setTimeout(() => toastEl.classList.remove("show"), 1500);
}

modeChips.forEach((chip) => {
  chip.addEventListener("click", () => setMode(chip.dataset.mode));
});

durationChips.forEach((chip) => {
  chip.addEventListener("click", () => setDuration(chip.dataset.time));
});

if (modeSelect) {
  modeSelect.addEventListener("change", () => setMode(modeSelect.value));
}

if (durationSelect) {
  durationSelect.addEventListener("change", () => setDuration(durationSelect.value));
}

mutatorChips.forEach((chip) => {
  chip.classList.toggle("active", Boolean(state.mutators[chip.dataset.mutator]));
  chip.addEventListener("click", () => setMutator(chip.dataset.mutator));
});

function setTheme(theme) {
  state.theme = theme;
  localStorage.setItem("pulsetypeTheme", theme);
  document.body.classList.remove("theme-arc", "theme-ink", "theme-cb-safe", "theme-cb-warm");
  if (theme === "arc") document.body.classList.add("theme-arc");
  if (theme === "ink") document.body.classList.add("theme-ink");
  if (theme === "cb-safe") document.body.classList.add("theme-cb-safe");
  if (theme === "cb-warm") document.body.classList.add("theme-cb-warm");
  themeChips.forEach((chip) => chip.classList.toggle("active", chip.dataset.theme === theme));
  if (themeSelect) themeSelect.value = theme;
  renderResultCard();
}

themeChips.forEach((chip) => {
  chip.addEventListener("click", () => setTheme(chip.dataset.theme));
});

if (themeSelect) {
  themeSelect.addEventListener("change", () => setTheme(themeSelect.value));
}

if (testTypeSelect) {
  testTypeSelect.addEventListener("change", () => {
    applyTestType(testTypeSelect.value);
  });
}

if (textPackSelect) {
  textPackSelect.addEventListener("change", () => {
    setTextPack(textPackSelect.value);
  });
}

if (saveCustomTextBtn) {
  saveCustomTextBtn.addEventListener("click", () => {
    const content = customTextInput ? customTextInput.value : "";
    setCustomText(content, "manual");
  });
}

if (importCustomTextBtn) {
  importCustomTextBtn.addEventListener("click", () => {
    if (!customTextFileInput || !customTextFileInput.files || !customTextFileInput.files[0]) {
      showToast("Choose a file first.");
      return;
    }
    const file = customTextFileInput.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      setCustomText(result, "file");
      if (state.testType !== "custom") applyTestType("custom", false);
    };
    reader.onerror = () => {
      showToast("Could not read that file.");
    };
    reader.readAsText(file);
  });
}

if (fairModeBtn) {
  fairModeBtn.addEventListener("click", () => {
    const changed = setFairMode(!state.fairMode);
    if (changed) showToast(state.fairMode ? "Fair mode enabled." : "Fair mode disabled.");
  });
}

if (dyslexiaBtn) {
  dyslexiaBtn.addEventListener("click", () => {
    setDyslexiaFont(!state.dyslexiaFont);
    showToast(state.dyslexiaFont ? "Dyslexia font enabled." : "Dyslexia font disabled.");
  });
}

if (goalSelect) {
  goalSelect.addEventListener("change", () => {
    state.goalPreset = goalSelect.value;
    localStorage.setItem("pulsetypeGoalPreset", state.goalPreset);
    updateGoalProgress(Number(wpmEl.textContent), Number(accuracyEl.textContent.replace("%", "")));
    showToast("Goal updated.");
  });
}

if (finishViewSelect) {
  finishViewSelect.addEventListener("change", () => {
    state.finishView = finishViewSelect.value;
    localStorage.setItem("pulsetypeFinishView", state.finishView);
    showToast(`After finish: ${state.finishView === "analyze" ? "Analyze" : "Stay on Test"}.`);
  });
}

viewTabs.forEach((tab) => {
  tab.addEventListener("click", () => setView(tab.dataset.view));
});

analyzeTabs.forEach((tab) => {
  tab.addEventListener("click", () => setAnalyzeGroup(tab.dataset.group));
});

restartBtn.addEventListener("click", () => {
  resetSession();
  inputField.focus();
});

dailyBtn.addEventListener("click", () => {
  setDailyMode(!state.dailyMode);
  showToast(state.dailyMode ? "Daily mode enabled." : "Daily mode disabled.");
  inputField.focus();
});

drillBtn.addEventListener("click", () => {
  setDrillMode(!state.drillMode);
  showToast(state.drillMode ? "Drill mode enabled." : "Drill mode disabled.");
  inputField.focus();
});

focusBtn.addEventListener("click", () => {
  setFocusEnabled(!state.focusEnabled);
  showToast(state.focusEnabled ? "Focus mode enabled." : "Focus mode disabled.");
  inputField.focus();
});

shareBtn.addEventListener("click", () => {
  shareResult();
});

cardBtn.addEventListener("click", () => {
  const yes = window.confirm("Download the current result card?");
  if (!yes) return;
  if (state.viewingRunId) {
    const run = state.runLog.find((entry) => entry.id === state.viewingRunId);
    if (run && run.snapshot) {
      downloadResultCard(run.snapshot, `${dateStamp()}-${run.mode}-${run.stamp.replace(/\\s+/g, "")}`);
      return;
    }
  }
  downloadResultCard();
});

if (returnLiveBtn) {
  returnLiveBtn.addEventListener("click", () => {
    restoreLiveView();
  });
}

if (dismissWelcomeBtn && welcomeCard) {
  dismissWelcomeBtn.addEventListener("click", () => {
    localStorage.setItem("pulsetypeWelcomeDismissed", "1");
    welcomeCard.style.display = "none";
  });
}

typingShell.addEventListener("click", () => inputField.focus());

typingShell.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && state.finished) {
    resetSession();
    inputField.focus();
  }
});

window.addEventListener("keydown", (event) => {
  const tag = (event.target && event.target.tagName ? event.target.tagName : "").toLowerCase();
  const typingTarget = tag === "input" || tag === "textarea" || tag === "select";
  const onTestView = document.querySelector('.view-page.active[data-page="test"]') != null;

  if (!typingTarget && !event.metaKey && !event.ctrlKey && !event.altKey) {
    const key = event.key.toLowerCase();
    if (key === "1") setView("test");
    if (key === "2") setView("analyze");
    if (key === "3") setView("settings");
    if (key === "r") resetSession();
    if (key === "f") setFocusEnabled(!state.focusEnabled);
    if (key === "d") setDailyMode(!state.dailyMode);
    if (key === "g") setDrillMode(!state.drillMode);
  }

  if (event.key === "Escape" && state.focusEnabled) {
    setFocusEnabled(false);
  }

  if (event.key === "Enter" && state.finished) {
    resetSession();
    inputField.focus();
    return;
  }

  if (event.key === "Tab") return;
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  if (event.key.length > 1 && event.key !== "Backspace" && event.key !== " ") return;
  if (!onTestView) return;
  if (typingTarget) return;
  const activeTag = (document.activeElement && document.activeElement.tagName
    ? document.activeElement.tagName
    : ""
  ).toLowerCase();
  const activeIsInteractive = ["button", "select", "textarea", "input", "a"].includes(activeTag);
  if (activeIsInteractive) return;
  if (document.activeElement !== inputField) inputField.focus();
});

inputField.addEventListener("input", handleInput);
inputField.addEventListener("beforeinput", (event) => {
  if (!state.fairMode) return;
  if (event.inputType === "insertFromPaste" || event.inputType === "insertFromDrop") {
    event.preventDefault();
    state.pasteDetected = true;
    showToast("Paste/drop blocked in fair mode.");
  }
});
inputField.addEventListener("paste", (event) => {
  if (!state.fairMode) return;
  event.preventDefault();
  state.pasteDetected = true;
  showToast("Paste blocked in fair mode.");
});
inputField.addEventListener("drop", (event) => {
  if (!state.fairMode) return;
  event.preventDefault();
  state.pasteDetected = true;
  showToast("Drop blocked in fair mode.");
});
inputField.addEventListener("keydown", (event) => {
  if (
    state.mutators.strict &&
    !state.finished &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.altKey &&
    event.key.length === 1
  ) {
    const expected = state.text[inputField.value.length];
    if (expected != null && event.key !== expected) {
      event.preventDefault();
      state.combo = 0;
      state.errors += 1;
      if (expected && expected.trim() !== "") {
        const key = expected.toLowerCase();
        state.weakKeyMap.set(key, (state.weakKeyMap.get(key) || 0) + 1);
        registerMistake(expected);
      }
      hintEl.textContent = "Strict mode: correct key only.";
      setOverdrive(false);
      playTone(170, 0.06, 0.03);
      evaluate(inputField.value);
      return;
    }
  }

  if (state.mutators.hardcore && event.key === "Backspace" && state.started && !state.finished) {
    event.preventDefault();
    hintEl.textContent = "Hardcore: no deletes, keep pushing.";
  }
});

document.addEventListener("visibilitychange", () => {
  if (!state.runFairMode || !state.started || state.finished) return;
  if (document.hidden) {
    state.visibilityChanges += 1;
  }
});

function setOverdrive(on) {
  if (on) document.body.classList.add("overdrive");
  else document.body.classList.remove("overdrive");
}

function applyFocusState() {
  const on = state.focusEnabled && state.started && !state.finished;
  document.body.classList.toggle("focus", on);
}

function getAudioCtx() {
  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) return null;
  if (!state.audioCtx) {
    state.audioCtx = new AudioCtor();
  }
  return state.audioCtx;
}

function playTone(freq, length, gain) {
  if (!state.mutators.sound) return;
  const ctx = getAudioCtx();
  if (!ctx) return;
  if (ctx.state === "suspended") ctx.resume();
  const osc = ctx.createOscillator();
  const amp = ctx.createGain();
  osc.frequency.value = freq;
  osc.type = "triangle";
  amp.gain.value = gain;
  osc.connect(amp);
  amp.connect(ctx.destination);
  osc.start();
  amp.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + length);
  osc.stop(ctx.currentTime + length);
}

function bootFX() {
  const canvas = document.getElementById("fxCanvas");
  const ctx = canvas.getContext("2d");
  const particles = Array.from({ length: 26 }, () => ({
    x: Math.random(),
    y: Math.random(),
    vx: (Math.random() - 0.5) * 0.0008,
    vy: (Math.random() - 0.5) * 0.0008,
    r: 2 + Math.random() * 3
  }));

  function resize() {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  }

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > 1) p.vx *= -1;
      if (p.y < 0 || p.y > 1) p.vy *= -1;

      const px = p.x * window.innerWidth;
      const py = p.y * window.innerHeight;
      ctx.beginPath();
      ctx.fillStyle = "rgba(29, 159, 116, 0.14)";
      ctx.arc(px, py, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(frame);
  }

  resize();
  window.addEventListener("resize", resize);
  frame();
}

function burstEffect() {
  const shellRect = typingShell.getBoundingClientRect();
  const burst = document.createElement("div");
  burst.style.position = "fixed";
  burst.style.left = `${shellRect.left + shellRect.width / 2 - 15}px`;
  burst.style.top = `${shellRect.top + 20}px`;
  burst.style.width = "30px";
  burst.style.height = "30px";
  burst.style.borderRadius = "50%";
  burst.style.border = "2px solid rgba(234,90,42,.7)";
  burst.style.pointerEvents = "none";
  burst.style.zIndex = "9";
  burst.style.animation = "burst .7s ease-out forwards";
  document.body.appendChild(burst);

  const style = document.createElement("style");
  style.textContent = "@keyframes burst {from{transform:scale(.4);opacity:1}to{transform:scale(5);opacity:0}}";
  document.head.appendChild(style);

  setTimeout(() => {
    burst.remove();
    style.remove();
  }, 700);
}

bootFX();
setTheme(state.theme);
document.body.classList.toggle("strict", state.mutators.strict);
focusBtn.classList.toggle("active", state.focusEnabled);
setFairMode(state.fairMode);
setDyslexiaFont(state.dyslexiaFont);
if (goalSelect) goalSelect.value = state.goalPreset;
if (finishViewSelect) finishViewSelect.value = state.finishView;
if (testTypeSelect) testTypeSelect.value = state.testType;
if (textPackSelect) textPackSelect.value = state.textPack;
if (customTextInput) customTextInput.value = state.customText;
updateCustomTextStatus();
updateFairBestStatus();
updateTestTypeHint();
setView("test");
setAnalyzeGroup(state.analyzeGroup);
if (welcomeCard && localStorage.getItem("pulsetypeWelcomeDismissed") === "1") {
  welcomeCard.style.display = "none";
}
applyTestType(state.testType, false);
