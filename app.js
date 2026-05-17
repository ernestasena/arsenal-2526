// Arsenal 2025/26 Season — Complete Match Data
// All data sourced from Wikipedia & Premier League sources

const MATCHES = [
  // === PREMIER LEAGUE ===
  { date: "2025-08-17", comp: "Premier League", opponent: "Manchester Utd", venue: "A", score: "1-0", result: "W", notes: "Old Trafford" },
  { date: "2025-08-23", comp: "Premier League", opponent: "Leeds United", venue: "H", score: "5-0", result: "W", notes: "Gyökeres brace on home debut" },
  { date: "2025-08-31", comp: "Premier League", opponent: "Liverpool", venue: "A", score: "0-1", result: "L", notes: "Szoboszlai free-kick" },
  { date: "2025-09-13", comp: "Premier League", opponent: "Nott'm Forest", venue: "H", score: "3-0", result: "W", notes: "Zubimendi brace" },
  { date: "2025-09-21", comp: "Premier League", opponent: "Manchester City", venue: "H", score: "1-1", result: "D", notes: "Martinelli lob equaliser" },
  { date: "2025-09-29", comp: "Premier League", opponent: "Newcastle Utd", venue: "A", score: "2-1", result: "W", notes: "Gabriel 90+ winner" },
  { date: "2025-10-04", comp: "Premier League", opponent: "West Ham Utd", venue: "H", score: "2-0", result: "W", notes: "Went top of table" },
  { date: "2025-10-18", comp: "Premier League", opponent: "Fulham", venue: "A", score: "1-0", result: "W", notes: "Trossard winner" },
  { date: "2025-10-26", comp: "Premier League", opponent: "Crystal Palace", venue: "H", score: "1-0", result: "W", notes: "Eze vs former club" },
  { date: "2025-11-01", comp: "Premier League", opponent: "Burnley", venue: "A", score: "2-0", result: "W", notes: "Gyökeres + Rice headers" },
  { date: "2025-11-08", comp: "Premier League", opponent: "Sunderland", venue: "A", score: "2-2", result: "D", notes: "Brobbey overhead equaliser" },
  { date: "2025-11-23", comp: "Premier League", opponent: "Tottenham", venue: "H", score: "4-1", result: "W", notes: "Eze hat-trick, NLD" },
  { date: "2025-11-30", comp: "Premier League", opponent: "Chelsea", venue: "A", score: "1-1", result: "D", notes: "Merino equaliser" },
  { date: "2025-12-03", comp: "Premier League", opponent: "Brentford", venue: "H", score: "2-0", result: "W", notes: "Saka stoppage time" },
  { date: "2025-12-06", comp: "Premier League", opponent: "Aston Villa", venue: "A", score: "1-2", result: "L", notes: "18-match unbeaten run ends" },
  { date: "2025-12-13", comp: "Premier League", opponent: "Wolves", venue: "H", score: "2-1", result: "W", notes: "Saka forces 2 own goals" },
  { date: "2025-12-20", comp: "Premier League", opponent: "Everton", venue: "A", score: "1-0", result: "W", notes: "Gyökeres penalty" },
  { date: "2025-12-27", comp: "Premier League", opponent: "Brighton", venue: "H", score: "2-1", result: "W", notes: "Ødegaard + Rutter OG" },
  { date: "2025-12-30", comp: "Premier League", opponent: "Aston Villa", venue: "H", score: "4-1", result: "W", notes: "Jesus first goal since Jan" },
  { date: "2026-01-03", comp: "Premier League", opponent: "Bournemouth", venue: "A", score: "3-2", result: "W", notes: "Rice brace" },
  { date: "2026-01-08", comp: "Premier League", opponent: "Liverpool", venue: "H", score: "0-0", result: "D", notes: "Goalless, tense affair" },
  { date: "2026-01-17", comp: "Premier League", opponent: "Nott'm Forest", venue: "A", score: "0-0", result: "D", notes: "2nd straight 0-0" },
  { date: "2026-01-25", comp: "Premier League", opponent: "Manchester Utd", venue: "H", score: "2-3", result: "L", notes: "1st home loss of season" },
  { date: "2026-01-31", comp: "Premier League", opponent: "Leeds United", venue: "A", score: "4-0", result: "W", notes: "Dominant response" },
  { date: "2026-02-07", comp: "Premier League", opponent: "Sunderland", venue: "H", score: "3-0", result: "W", notes: "Gyökeres brace, 9pts clear" },
  { date: "2026-02-12", comp: "Premier League", opponent: "Brentford", venue: "A", score: "1-1", result: "D", notes: "Lead cut to 4pts" },
  { date: "2026-02-18", comp: "Premier League", opponent: "Wolves", venue: "A", score: "2-2", result: "D", notes: "Last-gasp equaliser" },
  { date: "2026-02-22", comp: "Premier League", opponent: "Tottenham", venue: "A", score: "4-1", result: "W", notes: "NLD away masterclass" },
  { date: "2026-03-01", comp: "Premier League", opponent: "Chelsea", venue: "H", score: "2-1", result: "W", notes: "Timber header winner" },
  { date: "2026-03-04", comp: "Premier League", opponent: "Brighton", venue: "A", score: "1-0", result: "W", notes: "Saka 300th appearance" },
  { date: "2026-03-14", comp: "Premier League", opponent: "Everton", venue: "H", score: "2-0", result: "W", notes: "Dowman youngest PL scorer" },
  { date: "2026-04-11", comp: "Premier League", opponent: "Bournemouth", venue: "H", score: "1-2", result: "L", notes: "Title race blow" },
  { date: "2026-04-19", comp: "Premier League", opponent: "Manchester City", venue: "A", score: "1-2", result: "L", notes: "City go top on GD" },
  { date: "2026-04-25", comp: "Premier League", opponent: "Newcastle Utd", venue: "H", score: "1-0", result: "W", notes: "Eze early strike" },
  { date: "2026-05-02", comp: "Premier League", opponent: "Fulham", venue: "H", score: "3-0", result: "W", notes: "Gyökeres brace, 6pts clear" },
  { date: "2026-05-10", comp: "Premier League", opponent: "West Ham Utd", venue: "A", score: "1-0", result: "W", notes: "Trossard 83' winner, VAR drama" },
  { date: "2026-05-18", comp: "Premier League", opponent: "Burnley", venue: "H", score: "vs", result: "U", notes: "Final home game · 8pm BST" },
  { date: "2026-05-24", comp: "Premier League", opponent: "Crystal Palace", venue: "A", score: "vs", result: "U", notes: "Season finale" },

  // === CHAMPIONS LEAGUE ===
  { date: "2025-09-16", comp: "Champions League", opponent: "Athletic Bilbao", venue: "A", score: "2-0", result: "W", notes: "Martinelli + Trossard" },
  { date: "2025-10-01", comp: "Champions League", opponent: "Olympiacos", venue: "H", score: "2-0", result: "W", notes: "Martinelli, Saka 90+'" },
  { date: "2025-10-21", comp: "Champions League", opponent: "Atlético Madrid", venue: "H", score: "4-0", result: "W", notes: "Gyökeres brace, dominant" },
  { date: "2025-11-04", comp: "Champions League", opponent: "Slavia Prague", venue: "A", score: "3-0", result: "W", notes: "8 clean sheets in a row" },
  { date: "2025-11-26", comp: "Champions League", opponent: "Bayern Munich", venue: "H", score: "3-1", result: "W", notes: "Went top of league phase" },
  { date: "2025-12-10", comp: "Champions League", opponent: "Club Brugge", venue: "A", score: "3-0", result: "W", notes: "Madueke brace" },
  { date: "2026-01-20", comp: "Champions League", opponent: "Inter Milan", venue: "A", score: "3-1", result: "W", notes: "Jesus brace at San Siro" },
  { date: "2026-01-28", comp: "Champions League", opponent: "FC Kairat", venue: "H", score: "3-2", result: "W", notes: "Perfect group stage: 8/8 wins" },
  { date: "2026-03-11", comp: "Champions League", opponent: "Bayer Leverkusen", venue: "A", score: "1-1", result: "D", notes: "R16 1st leg · Havertz pen" },
  { date: "2026-03-17", comp: "Champions League", opponent: "Bayer Leverkusen", venue: "H", score: "2-0", result: "W", notes: "R16 2nd leg · Won 3-1 agg" },
  { date: "2026-04-07", comp: "Champions League", opponent: "Sporting CP", venue: "A", score: "1-0", result: "W", notes: "QF 1st leg · Havertz 90+'" },
  { date: "2026-04-15", comp: "Champions League", opponent: "Sporting CP", venue: "H", score: "0-0", result: "D", notes: "QF 2nd leg · Won 1-0 agg" },
  { date: "2026-04-29", comp: "Champions League", opponent: "Atlético Madrid", venue: "A", score: "1-1", result: "D", notes: "SF 1st leg · Gyökeres pen" },
  { date: "2026-05-05", comp: "Champions League", opponent: "Atlético Madrid", venue: "H", score: "1-0", result: "W", notes: "SF 2nd leg · Saka winner · TO THE FINAL!" },
  { date: "2026-05-30", comp: "Champions League", opponent: "TBD", venue: "N", score: "vs", result: "U", notes: "🏆 CHAMPIONS LEAGUE FINAL" },

  // === FA CUP ===
  { date: "2026-01-11", comp: "FA Cup", opponent: "Portsmouth", venue: "A", score: "4-1", result: "W", notes: "3rd round · Martinelli hat-trick" },
  { date: "2026-02-15", comp: "FA Cup", opponent: "Wigan Athletic", venue: "H", score: "4-0", result: "W", notes: "4th round · First-half blitz" },
  { date: "2026-03-07", comp: "FA Cup", opponent: "Mansfield Town", venue: "A", score: "2-1", result: "W", notes: "5th round · Eze winner" },
  { date: "2026-04-04", comp: "FA Cup", opponent: "Southampton", venue: "A", score: "1-2", result: "L", notes: "Quarter-final exit" },

  // === EFL CUP ===
  { date: "2025-09-24", comp: "EFL Cup", opponent: "Port Vale", venue: "A", score: "2-0", result: "W", notes: "3rd round · Eze 1st goal" },
  { date: "2025-10-29", comp: "EFL Cup", opponent: "Brighton", venue: "H", score: "2-0", result: "W", notes: "4th round · Rotated squad" },
  { date: "2025-12-23", comp: "EFL Cup", opponent: "Crystal Palace", venue: "H", score: "1-1", result: "D", notes: "QF · Won 8-7 on pens" },
  { date: "2026-01-14", comp: "EFL Cup", opponent: "Chelsea", venue: "A", score: "3-2", result: "W", notes: "SF 1st leg" },
  { date: "2026-02-03", comp: "EFL Cup", opponent: "Chelsea", venue: "H", score: "1-0", result: "W", notes: "SF 2nd leg · Won 4-2 agg" },
  { date: "2026-03-22", comp: "EFL Cup", opponent: "Manchester City", venue: "N", score: "0-2", result: "L", notes: "🏆 FINAL · Wembley" }
];

// ── Render ────────────────────────────────────────────
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let activeFilter = "all";

function formatDate(d) {
  const date = new Date(d);
  return { day: date.getDate(), month: MONTHS[date.getMonth()] };
}

function getResultClass(r) {
  if (r === "W") return "w";
  if (r === "D") return "d";
  if (r === "L") return "l";
  return "u";
}

function getResultLabel(r) {
  if (r === "W") return "W";
  if (r === "D") return "D";
  if (r === "L") return "L";
  return "·";
}

function getCompEmoji(comp) {
  if (comp === "Premier League") return "🏆";
  if (comp === "Champions League") return "⭐";
  if (comp === "FA Cup") return "🏴";
  if (comp === "EFL Cup") return "🏆";
  return "";
}

function renderStats(filtered) {
  const completed = filtered.filter(m => m.result !== "U");
  const wins = completed.filter(m => m.result === "W").length;
  const draws = completed.filter(m => m.result === "D").length;
  const losses = completed.filter(m => m.result === "L").length;
  const total = completed.length;
  const winRate = total > 0 ? Math.round((wins / total) * 100) : 0;

  document.getElementById("stats").innerHTML = `
    <div class="stat"><div class="num green">${wins}</div><div class="label">Wins</div></div>
    <div class="stat"><div class="num gold">${draws}</div><div class="label">Draws</div></div>
    <div class="stat"><div class="num redd">${losses}</div><div class="label">Losses</div></div>
    <div class="stat"><div class="num">${winRate}%</div><div class="label">Win Rate</div></div>
  `;
}

function renderTrophies() {
  const cl = MATCHES.filter(m => m.comp === "Champions League" && m.result !== "U");
  const pl = MATCHES.filter(m => m.comp === "Premier League" && m.result !== "U");
  const plPts = (pl.filter(m => m.result === "W").length * 3) + pl.filter(m => m.result === "D").length;

  document.getElementById("trophies").innerHTML = `
    <div class="trophy-pill pl">🏆 PL: ${pl.filter(m=>m.result==="W").length}W ${pl.filter(m=>m.result==="D").length}D ${pl.filter(m=>m.result==="L").length}L · ${plPts}pts</div>
    <div class="trophy-pill cl">⭐ UCL: 14 unbeaten · FINAL May 30</div>
    <div class="trophy-pill efl">🏆 EFL Cup: Runners-up</div>
    <div class="trophy-pill fac">🏴 FA Cup: Quarter-finals</div>
  `;
}

function renderMatches(filter) {
  const filtered = filter === "all"
    ? MATCHES
    : MATCHES.filter(m => m.comp === filter);

  renderStats(filtered);

  let html = "";
  let currentMonth = "";

  if (filtered.length === 0) {
    html = `<div class="empty-state"><div class="icon">⚽</div><p>No matches found</p></div>`;
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
            <div class="venue">${venueLabel}${m.notes ? ` · ${m.notes}` : ""}</div>
          </div>
          <div class="match-score">
            <div class="result-badge ${getResultClass(m.result)}">${getResultLabel(m.result)}</div>
            <div style="font-size:11px;margin-top:2px;">${m.score}</div>
          </div>
        </div>
      `;
    });
  }

  document.getElementById("matches").innerHTML = html;
}

// ── Init ────────────────────────────────────────────
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    renderMatches(activeFilter);
  });
});

renderTrophies();
renderMatches("all");

// ── Service Worker Registration ────────────────────
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
