// ── Premier League 2025/26 — Multi-Team PWA ──────────
// Data: PL table as of May 15 2026 (36-37 games played)

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// ── Team Definitions ──────────────────────────────────
const TEAMS = {
  arsenal: {
    id: "arsenal", name: "Arsenal", short: "ARS",
    color: "#EF0107", darkColor: "#9C0104", emoji: "🔴",
    table: { gp:36, w:24, d:7, l:5, gf:68, ga:26, gd:42, pts:79 },
    comps: {
      "Premier League":   { w:24, d:7, l:5, status: "1st · 79pts · 🏆 Champions" },
      "Champions League":  { w:11, d:3, l:0, status: "🏆 FINAL May 30 vs TBD" },
      "FA Cup":            { w:3,  d:0, l:1, status: "Quarter-finals" },
      "EFL Cup":           { w:4,  d:0, l:1, status: "Runners-up · Lost to City" }
    }
  },
  mancity: {
    id: "mancity", name: "Manchester City", short: "MCI",
    color: "#6CABDD", darkColor: "#1C3A5C", emoji: "🔵",
    table: { gp:36, w:23, d:8, l:5, gf:75, ga:32, gd:43, pts:77 },
    comps: {
      "Premier League":   { w:23, d:8, l:5, status: "2nd · 77pts · 2 to play" },
      "EFL Cup":           { w:5,  d:0, l:0, status: "🏆 Winners · Beat Arsenal" }
    }
  },
  manutd: {
    id: "manutd", name: "Manchester United", short: "MUN",
    color: "#DA291C", darkColor: "#8B1A12", emoji: "👹",
    table: { gp:36, w:18, d:11, l:7, gf:63, ga:48, gd:15, pts:65 },
    comps: {
      "Premier League": { w:18, d:11, l:7, status: "3rd · 65pts · 2 to play" }
    }
  },
  astonvilla: {
    id: "astonvilla", name: "Aston Villa", short: "AVL",
    color: "#670E36", darkColor: "#3D0820", emoji: "🦁",
    table: { gp:37, w:18, d:8, l:11, gf:54, ga:48, gd:6, pts:62 },
    comps: {
      "Premier League": { w:18, d:8, l:11, status: "4th · 62pts · 1 to play" }
    }
  },
  liverpool: {
    id: "liverpool", name: "Liverpool", short: "LIV",
    color: "#C8102E", darkColor: "#7A0A1C", emoji: "🐦",
    table: { gp:37, w:17, d:8, l:12, gf:62, ga:52, gd:10, pts:59 },
    comps: {
      "Premier League": { w:17, d:8, l:12, status: "5th · 59pts · 1 to play" }
    }
  },
  bournemouth: {
    id: "bournemouth", name: "Bournemouth", short: "BOU",
    color: "#DA291C", darkColor: "#8B1A12", emoji: "🍒",
    table: { gp:36, w:13, d:16, l:7, gf:56, ga:52, gd:4, pts:55 },
    comps: {
      "Premier League": { w:13, d:16, l:7, status: "6th · 55pts · 2 to play" }
    }
  },
  brighton: {
    id: "brighton", name: "Brighton", short: "BHA",
    color: "#0057B8", darkColor: "#003370", emoji: "🕊️",
    table: { gp:36, w:14, d:11, l:11, gf:52, ga:42, gd:10, pts:53 },
    comps: {
      "Premier League": { w:14, d:11, l:11, status: "7th · 53pts · 2 to play" }
    }
  },
  brentford: {
    id: "brentford", name: "Brentford", short: "BRE",
    color: "#E30613", darkColor: "#A0040D", emoji: "🐝",
    table: { gp:36, w:14, d:9, l:13, gf:52, ga:49, gd:3, pts:51 },
    comps: {
      "Premier League": { w:14, d:9, l:13, status: "8th · 51pts · 2 to play" }
    }
  },
  chelsea: {
    id: "chelsea", name: "Chelsea", short: "CHE",
    color: "#034694", darkColor: "#022A5E", emoji: "🦁",
    table: { gp:36, w:13, d:10, l:13, gf:55, ga:49, gd:6, pts:49 },
    comps: {
      "Premier League": { w:13, d:10, l:13, status: "9th · 49pts · 2 to play" },
      "EFL Cup":          { w:3,  d:0,  l:1, status: "Semi-finals · Lost to Arsenal" }
    }
  },
  everton: {
    id: "everton", name: "Everton", short: "EVE",
    color: "#003399", darkColor: "#001F5C", emoji: "🔵",
    table: { gp:36, w:13, d:10, l:13, gf:46, ga:46, gd:0, pts:49 },
    comps: {
      "Premier League": { w:13, d:10, l:13, status: "10th · 49pts · 2 to play" }
    }
  },
  fulham: {
    id: "fulham", name: "Fulham", short: "FUL",
    color: "#FFFFFF", darkColor: "#CCCCCC", emoji: "⚪",
    table: { gp:36, w:14, d:6, l:16, gf:44, ga:50, gd:-6, pts:48 },
    comps: {
      "Premier League": { w:14, d:6, l:16, status: "11th · 48pts · 2 to play" }
    }
  },
  sunderland: {
    id: "sunderland", name: "Sunderland", short: "SUN",
    color: "#DA291C", darkColor: "#8B1A12", emoji: "🐱",
    table: { gp:36, w:12, d:12, l:12, gf:37, ga:46, gd:-9, pts:48 },
    comps: {
      "Premier League": { w:12, d:12, l:12, status: "12th · 48pts · 2 to play" }
    }
  },
  newcastle: {
    id: "newcastle", name: "Newcastle United", short: "NEW",
    color: "#241F20", darkColor: "#0D0B0C", emoji: "⚫",
    table: { gp:36, w:13, d:7, l:16, gf:50, ga:52, gd:-2, pts:46 },
    comps: {
      "Premier League": { w:13, d:7, l:16, status: "13th · 46pts · 2 to play" }
    }
  },
  leeds: {
    id: "leeds", name: "Leeds United", short: "LEE",
    color: "#FFCD00", darkColor: "#B89600", emoji: "🌼",
    table: { gp:36, w:10, d:14, l:12, gf:48, ga:53, gd:-5, pts:44 },
    comps: {
      "Premier League": { w:10, d:14, l:12, status: "14th · 44pts · 2 to play" }
    }
  },
  crystalpalace: {
    id: "crystalpalace", name: "Crystal Palace", short: "CRY",
    color: "#1B458F", darkColor: "#0F2752", emoji: "🦅",
    table: { gp:36, w:11, d:11, l:14, gf:38, ga:47, gd:-9, pts:44 },
    comps: {
      "Premier League": { w:11, d:11, l:14, status: "15th · 44pts · 2 to play" }
    }
  },
  nottmforest: {
    id: "nottmforest", name: "Nottingham Forest", short: "NFO",
    color: "#DD0000", darkColor: "#990000", emoji: "🌳",
    table: { gp:36, w:11, d:10, l:15, gf:45, ga:47, gd:-2, pts:43 },
    comps: {
      "Premier League": { w:11, d:10, l:15, status: "16th · 43pts · 2 to play" }
    }
  },
  tottenham: {
    id: "tottenham", name: "Tottenham Hotspur", short: "TOT",
    color: "#132257", darkColor: "#0A1330", emoji: "🐓",
    table: { gp:36, w:9, d:11, l:16, gf:46, ga:55, gd:-9, pts:38 },
    comps: {
      "Premier League": { w:9, d:11, l:16, status: "17th · 38pts · 2 to play" }
    }
  },
  westham: {
    id: "westham", name: "West Ham United", short: "WHU",
    color: "#7A263A", darkColor: "#4A1522", emoji: "⚒️",
    table: { gp:36, w:9, d:9, l:18, gf:42, ga:62, gd:-20, pts:36 },
    comps: {
      "Premier League": { w:9, d:9, l:18, status: "18th · 36pts · 2 to play" }
    }
  },
  burnley: {
    id: "burnley", name: "Burnley", short: "BUR",
    color: "#6C1D45", darkColor: "#3D0F25", emoji: "🍷",
    table: { gp:36, w:4, d:9, l:23, gf:37, ga:73, gd:-36, pts:21 },
    relegated: true,
    comps: {
      "Premier League": { w:4, d:9, l:23, status: "19th · 21pts · Relegated" }
    }
  },
  wolves: {
    id: "wolves", name: "Wolverhampton", short: "WOL",
    color: "#FDB913", darkColor: "#C48E00", emoji: "🐺",
    table: { gp:36, w:3, d:9, l:24, gf:25, ga:66, gd:-41, pts:18 },
    relegated: true,
    comps: {
      "Premier League": { w:3, d:9, l:24, status: "20th · 18pts · Relegated" }
    }
  }
};

// ── Arsenal Full Match Data (all competitions) ────────
const ARSENAL_MATCHES = [
  // === PREMIER LEAGUE ===
  { date:"2025-08-17", comp:"Premier League", opponent:"Manchester United", venue:"A", score:"1-0", result:"W", notes:"Old Trafford" },
  { date:"2025-08-23", comp:"Premier League", opponent:"Leeds United", venue:"H", score:"5-0", result:"W", notes:"Gyökeres brace on home debut" },
  { date:"2025-08-31", comp:"Premier League", opponent:"Liverpool", venue:"A", score:"0-1", result:"L", notes:"Szoboszlai free-kick" },
  { date:"2025-09-13", comp:"Premier League", opponent:"Nottingham Forest", venue:"H", score:"3-0", result:"W", notes:"Zubimendi brace" },
  { date:"2025-09-21", comp:"Premier League", opponent:"Manchester City", venue:"H", score:"1-1", result:"D", notes:"Martinelli lob equaliser" },
  { date:"2025-09-29", comp:"Premier League", opponent:"Newcastle United", venue:"A", score:"2-1", result:"W", notes:"Gabriel 90+ winner" },
  { date:"2025-10-04", comp:"Premier League", opponent:"West Ham United", venue:"H", score:"2-0", result:"W", notes:"Went top of table" },
  { date:"2025-10-18", comp:"Premier League", opponent:"Fulham", venue:"A", score:"1-0", result:"W", notes:"Trossard winner" },
  { date:"2025-10-26", comp:"Premier League", opponent:"Crystal Palace", venue:"H", score:"1-0", result:"W", notes:"Eze vs former club" },
  { date:"2025-11-01", comp:"Premier League", opponent:"Burnley", venue:"A", score:"2-0", result:"W", notes:"Gyökeres + Rice headers" },
  { date:"2025-11-08", comp:"Premier League", opponent:"Sunderland", venue:"A", score:"2-2", result:"D", notes:"Brobbey overhead equaliser" },
  { date:"2025-11-23", comp:"Premier League", opponent:"Tottenham Hotspur", venue:"H", score:"4-1", result:"W", notes:"Eze hat-trick, NLD" },
  { date:"2025-11-30", comp:"Premier League", opponent:"Chelsea", venue:"A", score:"1-1", result:"D", notes:"Merino equaliser" },
  { date:"2025-12-03", comp:"Premier League", opponent:"Brentford", venue:"H", score:"2-0", result:"W", notes:"Saka stoppage time" },
  { date:"2025-12-06", comp:"Premier League", opponent:"Aston Villa", venue:"A", score:"1-2", result:"L", notes:"18-match unbeaten run ends" },
  { date:"2025-12-13", comp:"Premier League", opponent:"Wolverhampton", venue:"H", score:"2-1", result:"W", notes:"Saka forces 2 own goals" },
  { date:"2025-12-20", comp:"Premier League", opponent:"Everton", venue:"A", score:"1-0", result:"W", notes:"Gyökeres penalty" },
  { date:"2025-12-27", comp:"Premier League", opponent:"Brighton", venue:"H", score:"2-1", result:"W", notes:"Ødegaard + Rutter OG" },
  { date:"2025-12-30", comp:"Premier League", opponent:"Aston Villa", venue:"H", score:"4-1", result:"W", notes:"Jesus first goal since Jan" },
  { date:"2026-01-03", comp:"Premier League", opponent:"Bournemouth", venue:"A", score:"3-2", result:"W", notes:"Rice brace" },
  { date:"2026-01-08", comp:"Premier League", opponent:"Liverpool", venue:"H", score:"0-0", result:"D", notes:"Goalless, tense affair" },
  { date:"2026-01-17", comp:"Premier League", opponent:"Nottingham Forest", venue:"A", score:"0-0", result:"D", notes:"2nd straight 0-0" },
  { date:"2026-01-25", comp:"Premier League", opponent:"Manchester United", venue:"H", score:"2-3", result:"L", notes:"1st home loss of season" },
  { date:"2026-01-31", comp:"Premier League", opponent:"Leeds United", venue:"A", score:"4-0", result:"W", notes:"Dominant response" },
  { date:"2026-02-07", comp:"Premier League", opponent:"Sunderland", venue:"H", score:"3-0", result:"W", notes:"Gyökeres brace, 9pts clear" },
  { date:"2026-02-12", comp:"Premier League", opponent:"Brentford", venue:"A", score:"1-1", result:"D", notes:"Lead cut to 4pts" },
  { date:"2026-02-18", comp:"Premier League", opponent:"Wolverhampton", venue:"A", score:"2-2", result:"D", notes:"Last-gasp equaliser" },
  { date:"2026-02-22", comp:"Premier League", opponent:"Tottenham Hotspur", venue:"A", score:"4-1", result:"W", notes:"NLD away masterclass" },
  { date:"2026-03-01", comp:"Premier League", opponent:"Chelsea", venue:"H", score:"2-1", result:"W", notes:"Timber header winner" },
  { date:"2026-03-04", comp:"Premier League", opponent:"Brighton", venue:"A", score:"1-0", result:"W", notes:"Saka 300th appearance" },
  { date:"2026-03-14", comp:"Premier League", opponent:"Everton", venue:"H", score:"2-0", result:"W", notes:"Dowman youngest PL scorer" },
  { date:"2026-04-11", comp:"Premier League", opponent:"Bournemouth", venue:"H", score:"1-2", result:"L", notes:"Title race blow" },
  { date:"2026-04-19", comp:"Premier League", opponent:"Manchester City", venue:"A", score:"1-2", result:"L", notes:"City go top on GD" },
  { date:"2026-04-25", comp:"Premier League", opponent:"Newcastle United", venue:"H", score:"1-0", result:"W", notes:"Eze early strike" },
  { date:"2026-05-02", comp:"Premier League", opponent:"Fulham", venue:"H", score:"3-0", result:"W", notes:"Gyökeres brace, 6pts clear" },
  { date:"2026-05-10", comp:"Premier League", opponent:"West Ham United", venue:"A", score:"1-0", result:"W", notes:"Trossard 83' winner, VAR drama" },
  { date:"2026-05-18", comp:"Premier League", opponent:"Burnley", venue:"H", score:"vs", result:"U", notes:"Final home game · 8pm BST" },
  { date:"2026-05-24", comp:"Premier League", opponent:"Crystal Palace", venue:"A", score:"vs", result:"U", notes:"Season finale" },

  // === CHAMPIONS LEAGUE ===
  { date:"2025-09-16", comp:"Champions League", opponent:"Athletic Bilbao", venue:"A", score:"2-0", result:"W", notes:"Martinelli + Trossard" },
  { date:"2025-10-01", comp:"Champions League", opponent:"Olympiacos", venue:"H", score:"2-0", result:"W", notes:"Martinelli, Saka 90+'" },
  { date:"2025-10-21", comp:"Champions League", opponent:"Atlético Madrid", venue:"H", score:"4-0", result:"W", notes:"Gyökeres brace, dominant" },
  { date:"2025-11-04", comp:"Champions League", opponent:"Slavia Prague", venue:"A", score:"3-0", result:"W", notes:"8 clean sheets in a row" },
  { date:"2025-11-26", comp:"Champions League", opponent:"Bayern Munich", venue:"H", score:"3-1", result:"W", notes:"Went top of league phase" },
  { date:"2025-12-10", comp:"Champions League", opponent:"Club Brugge", venue:"A", score:"3-0", result:"W", notes:"Madueke brace" },
  { date:"2026-01-20", comp:"Champions League", opponent:"Inter Milan", venue:"A", score:"3-1", result:"W", notes:"Jesus brace at San Siro" },
  { date:"2026-01-28", comp:"Champions League", opponent:"FC Kairat", venue:"H", score:"3-2", result:"W", notes:"Perfect group stage: 8/8 wins" },
  { date:"2026-03-11", comp:"Champions League", opponent:"Bayer Leverkusen", venue:"A", score:"1-1", result:"D", notes:"R16 1st leg · Havertz pen" },
  { date:"2026-03-17", comp:"Champions League", opponent:"Bayer Leverkusen", venue:"H", score:"2-0", result:"W", notes:"R16 2nd leg · Won 3-1 agg" },
  { date:"2026-04-07", comp:"Champions League", opponent:"Sporting CP", venue:"A", score:"1-0", result:"W", notes:"QF 1st leg · Havertz 90+'" },
  { date:"2026-04-15", comp:"Champions League", opponent:"Sporting CP", venue:"H", score:"0-0", result:"D", notes:"QF 2nd leg · Won 1-0 agg" },
  { date:"2026-04-29", comp:"Champions League", opponent:"Atlético Madrid", venue:"A", score:"1-1", result:"D", notes:"SF 1st leg · Gyökeres pen" },
  { date:"2026-05-05", comp:"Champions League", opponent:"Atlético Madrid", venue:"H", score:"1-0", result:"W", notes:"SF 2nd leg · Saka winner · TO THE FINAL!" },
  { date:"2026-05-30", comp:"Champions League", opponent:"TBD", venue:"N", score:"vs", result:"U", notes:"🏆 CHAMPIONS LEAGUE FINAL" },

  // === FA CUP ===
  { date:"2026-01-11", comp:"FA Cup", opponent:"Portsmouth", venue:"A", score:"4-1", result:"W", notes:"3rd round · Martinelli hat-trick" },
  { date:"2026-02-15", comp:"FA Cup", opponent:"Wigan Athletic", venue:"H", score:"4-0", result:"W", notes:"4th round · First-half blitz" },
  { date:"2026-03-07", comp:"FA Cup", opponent:"Mansfield Town", venue:"A", score:"2-1", result:"W", notes:"5th round · Eze winner" },
  { date:"2026-04-04", comp:"FA Cup", opponent:"Southampton", venue:"A", score:"1-2", result:"L", notes:"Quarter-final exit" },

  // === EFL CUP ===
  { date:"2025-09-24", comp:"EFL Cup", opponent:"Port Vale", venue:"A", score:"2-0", result:"W", notes:"3rd round · Eze 1st goal" },
  { date:"2025-10-29", comp:"EFL Cup", opponent:"Brighton", venue:"H", score:"2-0", result:"W", notes:"4th round · Rotated squad" },
  { date:"2025-12-23", comp:"EFL Cup", opponent:"Crystal Palace", venue:"H", score:"1-1", result:"D", notes:"QF · Won 8-7 on pens" },
  { date:"2026-01-14", comp:"EFL Cup", opponent:"Chelsea", venue:"A", score:"3-2", result:"W", notes:"SF 1st leg" },
  { date:"2026-02-03", comp:"EFL Cup", opponent:"Chelsea", venue:"H", score:"1-0", result:"W", notes:"SF 2nd leg · Won 4-2 agg" },
  { date:"2026-03-22", comp:"EFL Cup", opponent:"Manchester City", venue:"N", score:"0-2", result:"L", notes:"🏆 FINAL · Wembley" }
];

// ── Team Name Mapping (for matching in Arsenal data) ──
const NAME_TO_ID = {
  "Manchester United": "manutd",
  "Leeds United": "leeds",
  "Liverpool": "liverpool",
  "Nottingham Forest": "nottmforest",
  "Manchester City": "mancity",
  "Newcastle United": "newcastle",
  "West Ham United": "westham",
  "Fulham": "fulham",
  "Crystal Palace": "crystalpalace",
  "Burnley": "burnley",
  "Sunderland": "sunderland",
  "Tottenham Hotspur": "tottenham",
  "Chelsea": "chelsea",
  "Brentford": "brentford",
  "Aston Villa": "astonvilla",
  "Wolverhampton": "wolves",
  "Everton": "everton",
  "Brighton": "brighton",
  "Bournemouth": "bournemouth"
};

// ── Build derived match cache for non-Arsenal teams ──
function deriveOpponentMatch(m) {
  const resultMap = { W:"L", L:"W", D:"D", U:"U" };
  const venueMap = { H:"A", A:"H", N:"N" };
  const [a, b] = m.score.split("-");
  return {
    date: m.date, comp: m.comp,
    opponent: "Arsenal",
    venue: venueMap[m.venue],
    score: b + "-" + a,
    result: resultMap[m.result],
    notes: (m.venue === "H" ? "at Emirates" : "at home") + (m.notes ? " · " + m.notes : "")
  };
}

const OPPONENT_MATCHES_CACHE = {};
function getOpponentMatches(teamId) {
  if (OPPONENT_MATCHES_CACHE[teamId]) return OPPONENT_MATCHES_CACHE[teamId];
  const matches = [];
  // Find team name that maps to this id
  const teamName = TEAMS[teamId].name;
  ARSENAL_MATCHES.forEach(m => {
    const oppId = NAME_TO_ID[m.opponent];
    if (oppId === teamId) {
      matches.push(deriveOpponentMatch(m));
    }
  });
  OPPONENT_MATCHES_CACHE[teamId] = matches;
  return matches;
}

// ── Get all matches for a given team ──────────────────
function getTeamMatches(teamId) {
  if (teamId === "arsenal") return ARSENAL_MATCHES;
  // For other teams: all matches we know about (derived from Arsenal data)
  return getOpponentMatches(teamId);
}

// ── Get available competitions for a team ────────────
function getTeamComps(teamId) {
  const team = TEAMS[teamId];
  const matches = getTeamMatches(teamId);
  const comps = new Set();
  matches.forEach(m => comps.add(m.comp));
  // Also include comps from team definition
  if (team.comps) {
    Object.keys(team.comps).forEach(c => comps.add(c));
  }
  return Array.from(comps);
}

// ── Formatting helpers ───────────────────────────────
function formatDate(d) {
  const date = new Date(d);
  return { day: date.getDate(), month: MONTHS[date.getMonth()] };
}

function getResultClass(r) {
  return r === "W" ? "w" : r === "D" ? "d" : r === "L" ? "l" : "u";
}

function getResultLabel(r) {
  return r === "W" ? "W" : r === "D" ? "D" : r === "L" ? "L" : "·";
}

function getCompEmoji(comp) {
  if (comp === "Premier League") return "🏆";
  if (comp === "Champions League") return "⭐";
  if (comp === "FA Cup") return "🏴";
  if (comp === "EFL Cup") return "🏆";
  return "⚽";
}

function getCompClass(comp) {
  if (comp === "Champions League") return "cl";
  if (comp === "Premier League") return "pl";
  if (comp === "FA Cup") return "fac";
  if (comp === "EFL Cup") return "efl";
  return "pl";
}

// ── State ────────────────────────────────────────────
let currentTeam = "arsenal";
let activeFilter = "all";

// ── Render Header ────────────────────────────────────
function renderHeader() {
  const t = TEAMS[currentTeam];
  const rel = t.relegated ? ' <span style="font-size:11px;opacity:0.7;">(R)</span>' : '';
  document.getElementById("main-header").style.background =
    `linear-gradient(135deg, ${t.color}, ${t.darkColor})`;
  document.getElementById("header-crest").textContent = t.emoji;
  document.getElementById("header-title").textContent = t.name + " 2025/26";
  document.getElementById("header-subtitle").innerHTML =
    `#${t.short} · PL: ${t.table.w}W ${t.table.d}D ${t.table.l}L · ${t.table.pts}pts${rel}`;
  document.querySelector('meta[name="theme-color"]').content = t.color;
  document.querySelector('meta[name="apple-mobile-web-app-title"]').content = t.short + " 25/26";
  document.title = t.name + " 2025/26";
}

// ── Render Team Selector ─────────────────────────────
function renderTeamSelector() {
  const order = ["arsenal","mancity","manutd","liverpool","chelsea","tottenham","newcastle","astonvilla","brighton","brentford","bournemouth","crystalpalace","everton","fulham","leeds","nottmforest","sunderland","westham","wolves","burnley"];
  let html = "";
  order.forEach(id => {
    const t = TEAMS[id];
    const active = id === currentTeam ? " active" : "";
    const rel = t.relegated ? " rel" : "";
    html += `
      <button class="team-pill${active}${rel}" data-team="${id}" style="--team-color:${t.color};--team-dark:${t.darkColor}">
        <span class="team-emoji">${t.emoji}</span>
        <span class="team-short">${t.short}</span>
        <span class="team-record">
          <span class="r-w">${t.table.w}</span>-<span class="r-d">${t.table.d}</span>-<span class="r-l">${t.table.l}</span>
        </span>
      </button>
    `;
  });
  document.getElementById("team-selector").innerHTML = html;

  // Scroll active pill into view
  setTimeout(() => {
    const activePill = document.querySelector(".team-pill.active");
    if (activePill) activePill.scrollIntoView({ behavior:"smooth", block:"nearest", inline:"center" });
  }, 100);

  // Click handlers
  document.querySelectorAll(".team-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      const teamId = btn.dataset.team;
      if (teamId !== currentTeam) {
        currentTeam = teamId;
        activeFilter = "all";
        renderAll();
      }
    });
  });
}

// ── Render Stats Bar ────────────────────────────────
function renderStats() {
  const t = TEAMS[currentTeam];
  const matches = getTeamMatches(currentTeam);
  const filtered = activeFilter === "all"
    ? matches
    : matches.filter(m => m.comp === activeFilter);
  const completed = filtered.filter(m => m.result !== "U");

  let wins, draws, losses, total, winRate;

  if (completed.length > 0) {
    wins = completed.filter(m => m.result === "W").length;
    draws = completed.filter(m => m.result === "D").length;
    losses = completed.filter(m => m.result === "L").length;
    total = completed.length;
    winRate = Math.round((wins / total) * 100);
  } else {
    // Fall back to table data
    wins = t.table.w;
    draws = t.table.d;
    losses = t.table.l;
    total = t.table.gp;
    winRate = Math.round((wins / total) * 100);
  }

  // If filtering PL, use table data for accuracy
  if (activeFilter === "Premier League" || (activeFilter === "all" && currentTeam !== "arsenal")) {
    wins = t.table.w;
    draws = t.table.d;
    losses = t.table.l;
    total = t.table.gp;
    winRate = Math.round((wins / total) * 100);
  }

  document.getElementById("stats").innerHTML = `
    <div class="stat"><div class="num green">${wins}</div><div class="label">Wins</div></div>
    <div class="stat"><div class="num gold">${draws}</div><div class="label">Draws</div></div>
    <div class="stat"><div class="num redd">${losses}</div><div class="label">Losses</div></div>
    <div class="stat"><div class="num">${winRate}%</div><div class="label">Win Rate</div></div>
    <div class="stat"><div class="num">${t.table.gf}:${t.table.ga}</div><div class="label">GF:GA</div></div>
    <div class="stat"><div class="num" style="color:${t.table.gd >= 0 ? 'var(--green)' : 'var(--loss)'}">${t.table.gd >= 0 ? '+' : ''}${t.table.gd}</div><div class="label">GD</div></div>
  `;
}

// ── Render Trophy / Competition Pills ────────────────
function renderTrophies() {
  const t = TEAMS[currentTeam];
  if (!t.comps) { document.getElementById("trophies").innerHTML = ""; return; }

  let html = "";
  const compKeys = Object.keys(t.comps);
  compKeys.forEach(comp => {
    const c = t.comps[comp];
    const cls = getCompClass(comp);
    const emoji = getCompEmoji(comp);
    html += `<div class="trophy-pill ${cls}">${emoji} ${comp}: ${c.status}</div>`;
  });

  // Add position badge
  const posOrders = ["1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th","13th","14th","15th","16th","17th","18th","19th","20th"];
  const posColors = {
    "1st":"#FFD700","2nd":"#C0C0C0","3rd":"#CD7F32","4th":"#4CAF50",
    "5th":"#2196F3","6th":"#2196F3","7th":"#2196F3",
    "18th":"#FF1744","19th":"#FF1744","20th":"#FF1744"
  };

  document.getElementById("trophies").innerHTML = html;
}

// ── Render Filter Bar ────────────────────────────────
function renderFilterBar() {
  const comps = getTeamComps(currentTeam);
  let html = `<button class="filter-btn${activeFilter === 'all' ? ' active' : ''}" data-filter="all">All</button>`;

  const compOrder = ["Premier League", "Champions League", "FA Cup", "EFL Cup"];
  compOrder.forEach(comp => {
    if (comps.includes(comp)) {
      const emoji = getCompEmoji(comp);
      const short = comp === "Champions League" ? "UCL" : comp === "Premier League" ? "PL" : comp;
      html += `<button class="filter-btn${activeFilter === comp ? ' active' : ''}" data-filter="${comp}">${emoji} ${short}</button>`;
    }
  });

  document.getElementById("filter-bar").innerHTML = html;

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter;
      renderStats();
      renderMatches();
      renderFilterBar();
    });
  });
}

// ── Render Match List ────────────────────────────────
function renderMatches() {
  const matches = getTeamMatches(currentTeam);
  const filtered = activeFilter === "all"
    ? matches
    : matches.filter(m => m.comp === activeFilter);

  let html = "";
  let currentMonth = "";

  if (filtered.length === 0) {
    html = `<div class="empty-state">
      <div class="icon">📋</div>
      <p>No match data available for this view</p>
      <small style="color:var(--text-dim)">Complete fixture data pending for non-Arsenal teams</small>
    </div>`;
  } else {
    filtered.forEach(m => {
      const d = formatDate(m.date);
      const monthLabel = `${d.month} ${new Date(m.date).getFullYear()}`;
      if (monthLabel !== currentMonth) {
        currentMonth = monthLabel;
        html += `<div class="month-header">${monthLabel}</div>`;
      }

      const cls = m.result === "W" ? "win" : m.result === "D" ? "draw" : m.result === "L" ? "loss" : "upcoming";
      const emoji = getCompEmoji(m.comp);
      const venueLabel = m.venue === "H" ? "Home" : m.venue === "A" ? "Away" : "Neutral";

      html += `
        <div class="match-card ${cls}">
          <div class="match-date">
            <div class="day">${d.day}</div>
            <div class="month">${d.month}</div>
          </div>
          <div class="match-info">
            <div class="comp">${emoji} ${m.comp}</div>
            <div class="opponent">${m.opponent}</div>
            <div class="venue">${venueLabel}${m.notes ? ' · ' + m.notes : ''}</div>
          </div>
          <div class="match-score">
            <div class="result-badge ${getResultClass(m.result)}">${getResultLabel(m.result)}</div>
            <div style="font-size:11px;margin-top:2px;">${m.score}</div>
          </div>
        </div>
      `;
    });

    // For non-Arsenal teams, add a note about pending data
    if (currentTeam !== "arsenal" && (activeFilter === "all" || activeFilter === "Premier League")) {
      const t = TEAMS[currentTeam];
      const knownCount = filtered.length;
      const totalPl = t.table.gp;
      const missing = totalPl - knownCount;
      if (missing > 0) {
        html += `<div style="text-align:center;padding:20px;color:var(--text-dim);font-size:12px;border-top:1px solid var(--border);margin-top:12px;">
          📋 ${knownCount} match${knownCount !==1?'es':''} shown · ${missing} remaining PL fixture${missing !==1?'s':''} pending<br>
          <span style="opacity:0.6">Full match-by-match data only available for Arsenal</span>
        </div>`;
      }
    }
  }

  document.getElementById("matches").innerHTML = html;
}

// ── Render All ───────────────────────────────────────
function renderAll() {
  renderHeader();
  renderTeamSelector();
  renderStats();
  renderTrophies();
  renderFilterBar();
  renderMatches();
}

// ── Init ─────────────────────────────────────────────
renderAll();

// ── Service Worker Registration ──────────────────────
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
