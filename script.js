```javascript
'use strict';

/* ==================== データ定義(将来的にJSON外部化を想定) ==================== */
const siteData = {
  news: [
    { date: '2026-09-15', title: '「〇〇オープン」最終日、通算-12で自己ベストタイの4位タイフィニッシュ', url: '#' },
    { date: '2026-09-02', title: 'GREEN FIELD生命保険とのスポンサー契約更新のお知らせ', url: '#' },
    { date: '2026-08-20', title: 'テレビ番組「サンデーゴルフ」出演のお知らせ', url: '#' },
    { date: '2026-08-05', title: '「日本プロゴルフ選手権」出場決定', url: '#' }
  ],
  schedule: [
    { date: '2026.09.25-28', name: '日本プロゴルフ選手権大会', place: '静岡県 / 富士グリーンCC', status: 'upcoming' },
    { date: '2026.10.09-12', name: 'JGTOチャンピオンズトーナメント', place: '千葉県 / パインウッズGC', status: 'upcoming' },
    { date: '2026.10.23-26', name: 'マスターズ・オブ・ジャパン', place: '兵庫県 / 六甲ヒルズGC', status: 'upcoming' }
  ],
  nextMatch: {
    name: '日本プロゴルフ選手権大会',
    date: '2026年9月25日(金)〜28日(月)',
    place: '静岡県 / 富士グリーンCC'
  },
  recentResult: {
    name: '〇〇オープン 2026',
    result: '4位タイ',
    score: '通算 -12(自己ベストタイ)'
  },
  history: [
    { year: '2011', text: '宮崎県ジュニアゴルフ選手権 優勝。競技ゴルフを本格的に開始。' },
    { year: '2014', text: '全国高校ゴルフ選手権 団体戦出場、個人ベスト8。' },
    { year: '2015', text: '日本アマチュアゴルフ選手権 出場。' },
    { year: '2018', text: 'PGA(日本プロゴルフ協会)会員プロテスト合格、プロ転向。' },
    { year: '2019', text: 'JGTOチャレンジツアーで初優勝。' },
    { year: '2021', text: 'JGTOツアー(トップツアー)初シード権獲得。' },
    { year: '2023', text: '「〇〇クラシック」でツアー初優勝。' },
    { year: '2025', text: '「△△選手権」連覇達成、年間3勝目。' },
    { year: '2026', text: '賞金ランキング自己最高位を更新し現在に至る。' }
  ],
  qualification: {
    pgaYear: 2018,
    matches: 18,
    seedStatus: '賞金ランキング上位65位以内'
  },
  ranking: {
    seasons: {
      '2026': {
        prizeMoney: { rank: 8, points: '82,340,000円' },
        mbcPoints: { rank: 12, points: '1,204pt' },
        history: [18, 15, 14, 10, 11, 9, 8, 8]
      },
      '2025': {
        prizeMoney: { rank: 14, points: '58,120,000円' },
        mbcPoints: { rank: 20, points: '960pt' },
        history: [30, 26, 22, 20, 18, 16, 15, 14]
      },
      '2024': {
        prizeMoney: { rank: 22, points: '39,800,000円' },
        mbcPoints: { rank: 28, points: '710pt' },
        history: [42, 38, 33, 30, 27, 25, 24, 22]
      }
    }
  },
  sponsors: {
    main: [
      { name: 'TAKUMI Corporation', desc: 'ゴルフ用品の企画・製造・販売', url: '#' },
      { name: 'GREEN FIELD 生命保険', desc: '生命保険・資産形成サービス', url: '#' }
    ],
    official: [
      { name: 'ASAHI SPORTS WEAR', desc: 'ゴルフウェア・アパレル', url: '#' },
      { name: 'HAYASHI 時計工業', desc: '高級腕時計メーカー', url: '#' },
      { name: 'NEXT MOBILITY 株式会社', desc: '自動車・モビリティサービス', url: '#' }
    ],
    support: [
      { name: 'MIYAZAKI フーズ', desc: '食品製造・販売', url: '#' },
      { name: '宮崎第一信用金庫', desc: '地域金融機関', url: '#' },
      { name: 'SUNRISE トラベル', desc: '旅行代理店', url: '#' }
    ]
  },
  // ホールバイホールスコア(par: 各ホールの基準打数, strokes: 実打数)
  scores: [
    {
      tournament: '〇〇オープン 2026',
      rounds: [
        {
          label: 'Round 1',
          par:     [4,5,3,4,4,3,5,4,4, 4,3,5,4,4,3,4,5,4],
          strokes: [4,4,3,4,5,3,4,4,3, 4,3,4,4,5,3,4,4,4],
          fairwayKeep: '78%', greenInReg: '72%', avgPutt: '1.83'
        },
        {
          label: 'Round 2',
          par:     [4,5,3,4,4,3,5,4,4, 4,3,5,4,4,3,4,5,4],
          strokes: [3,5,3,3,4,4,4,4,4, 4,4,4,3,4,3,4,4,3],
          fairwayKeep: '71%', greenInReg: '67%', avgPutt: '1.78'
        },
        {
          label: 'Round 3',
          par:     [4,5,3,4,4,3,5,4,4, 4,3,5,4,4,3,4,5,4],
          strokes: [4,4,2,4,4,3,5,3,4, 3,3,4,4,3,3,4,4,4],
          fairwayKeep: '85%', greenInReg: '78%', avgPutt: '1.71'
        },
        {
          label: 'Round 4',
          par:     [4,5,3,4,4,3,5,4,4, 4,3,5,4,4,3,4,5,4],
          strokes: [4,4,3,3,4,3,4,4,3, 4,2,4,4,4,3,3,4,4],
          fairwayKeep: '80%', greenInReg: '83%', avgPutt: '1.69'
        }
      ]
    },
    {
      tournament: '△△選手権 2026',
      rounds: [
        {
          label: 'Round 1',
          par:     [4,4,3,5,4,3,4,5,4, 4,3,4,5,4,3,4,4,5],
          strokes: [4,5,3,5,4,4,4,4,4, 4,3,4,4,4,3,5,4,4],
          fairwayKeep: '75%', greenInReg: '67%', avgPutt: '1.89'
        },
        {
          label: 'Round 2',
          par:     [4,4,3,5,4,3,4,5,4, 4,3,4,5,4,3,4,4,5],
          strokes: [4,4,2,5,3,3,4,5,4, 3,3,4,5,3,3,4,4,4],
          fairwayKeep: '82%', greenInReg: '75%', avgPutt: '1.75'
        }
      ]
    }
  ]
};

/* ==================== ユーティリティ ==================== */
function scoreClass(strokes, par) {
  const diff = strokes - par;
  if (diff <= -2) return 'eagle';
  if (diff === -1) return 'birdie';
  if (diff === 0) return 'par';
  if (diff === 1) return 'bogey';
  return 'double';
}
function sum(arr) { return arr.reduce((a, b) => a + b, 0); }

/* ==================== ヘッダー・ナビ ==================== */
function initNav() {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==================== ニュースティッカー ==================== */
function renderTicker() {
  const track = document.getElementById('tickerTrack');
  if (!track) return;
  const items = siteData.news.map(n =>
    `<span><time datetime="${n.date}">${n.date}</time>${n.title}</span>`
  ).join('');
  track.innerHTML = items + items; // ループ用に複製
}

/* ==================== 次戦・直近成績 ==================== */
function renderQuickInfo() {
  const next = siteData.nextMatch;
  const recent = siteData.recentResult;
  const nextBody = document.getElementById('nextMatchBody');
  const recentBody = document.getElementById('recentResultBody');
  if (nextBody) {
    nextBody.innerHTML = `
      <p class="info-main">${next.name}</p>
      <p class="info-sub">${next.date}</p>
      <p class="info-sub">${next.place}</p>`;
  }
  if (recentBody) {
    recentBody.innerHTML = `
      <p class="info-main">${recent.name}</p>
      <p class="info-sub">${recent.score}</p>
      <span class="rank-badge">${recent.result}</span>`;
  }
}

/* ==================== スポンサーロゴ帯 & 一覧 ==================== */
function renderSponsors() {
  const strip = document.getElementById('sponsorStrip');
  if (strip) {
    const all = [...siteData.sponsors.main, ...siteData.sponsors.official];
    strip.innerHTML = all.map(s => `<span class="logo-chip">${s.name}</span>`).join('');
  }
  const tierMap = {
    sponsorMain: siteData.sponsors.main,
    sponsorOfficial: siteData.sponsors.official,
    sponsorSupport: siteData.sponsors.support
  };
  Object.entries(tierMap).forEach(([id, list]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = list.map(s => `
      <a class="sponsor-card" href="${s.url}" target="_blank" rel="noopener noreferrer">
        <p class="sponsor-name">${s.name}</p>
        <p class="sponsor-desc">${s.desc}</p>
      </a>`).join('');
  });
}

/* ==================== 経歴タイムライン ==================== */
function renderTimeline() {
  const list = document.getElementById('timelineList');
  if (!list) return;
  list.innerHTML = siteData.history.map(h => `
    <li class="timeline-item">
      <p class="timeline-year">${h.year}</p>
      <p class="timeline-text">${h.text}</p>
    </li>`).join('');
}

/* ==================== ニュース・スケジュール一覧 ==================== */
function renderNewsSchedule() {
  const newsList = document.getElementById('newsList');
  if (newsList) {
    newsList.innerHTML = siteData.news.map(n => `
      <li>
        <a href="${n.url}">
          <time datetime="${n.date}">${n.date}</time>
          <span class="news-title">${n.title}</span>
        </a>
      </li>`).join('');
  }
  const scheduleList = document.getElementById('scheduleList');
  if (scheduleList) {
    scheduleList.innerHTML = siteData.schedule.map(s => `
      <li>
        <p class="schedule-item-date">${s.date}</p>
        <p class="schedule-item-name">${s.name}</p>
        <p class="schedule-item-place">${s.place}</p>
      </li>`).join('');
  }
}

/* ==================== ランキング ==================== */
function renderRankingCards(season) {
  const wrap = document.getElementById('rankingCards');
  if (!wrap) return;
  const data = siteData.ranking.seasons[season];
  wrap.innerHTML = `
    <div class="rank-card">
      <p class="rank-title">賞金ランキング</p>
      <p class="rank-value">${data.prizeMoney.rank}<small>位</small></p>
      <p class="rank-title">${data.prizeMoney.points}</p>
    </div>
    <div class="rank-card">
      <p class="rank-title">メルセデス・ベンツポイント</p>
      <p class="rank-value">${data.mbcPoints.rank}<small>位</small></p>
      <p class="rank-title">${data.mbcPoints.points}</p>
    </div>
    <div class="rank-card">
      <p class="rank-title">出場試合数</p>
      <p class="rank-value">${data.history.length}<small>試合</small></p>
    </div>`;
}

function renderRankingChart(season) {
  const svg = document.getElementById('rankingChart');
  if (!svg) return;
  const history = siteData.ranking.seasons[season].history;
  const width = 640, height = 280, padding = 36;
  const maxRank = Math.max(...history) + 5;
  const minRank = 1;
  const stepX = (width - padding * 2) / (history.length - 1);

  function xAt(i) { return padding + i * stepX; }
  function yAt(v) {
    const t = (v - minRank) / (maxRank - minRank);
    return height - padding - t * (height - padding * 2);
  }

  let svgContent = '';
  // 軸線
  svgContent += `<line class="chart-axis" x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}"></line>`;
  svgContent += `<line class="chart-axis" x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}"></line>`;

  // 折れ線(順位は小さいほど良いのでY軸は反転済み)
  const points = history.map((v, i) => `${xAt(i)},${yAt(v)}`).join(' ');
  svgContent += `<polyline class="chart-line" points="${points}"></polyline>`;

  history.forEach((v, i) => {
    svgContent += `<circle class="chart-point" cx="${xAt(i)}" cy="${yAt(v)}" r="4"></circle>`;
    svgContent += `<text class="chart-label" x="${xAt(i)}" y="${yAt(v) - 10}" text-anchor="middle">${v}位</text>`;
    svgContent += `<text class="chart-label" x="${xAt(i)}" y="${height - padding + 16}" text-anchor="middle">第${i + 1}戦</text>`;
  });

  svg.innerHTML = svgContent;
}

function initRanking() {
  const select = document.getElementById('seasonSelect');
  if (!select) return;
  const seasons = Object.keys(siteData.ranking.seasons).sort((a, b) => b - a);
  select.innerHTML = seasons.map(s => `<option value="${s}">${s}シーズン</option>`).join('');

  function update() {
    const season = select.value;
    renderRankingCards(season);
    renderRankingChart(season);
  }
  select.addEventListener('change', update);
  update();
}

/* ==================== ホールバイホールスコア ==================== */
function renderScoreTable(tournamentIndex) {
  const wrap = document.getElementById('scoreTableWrap');
  const statWrap = document.getElementById('statCards');
  if (!wrap) return;
  const tournament = siteData.scores[tournamentIndex];

  let tablesHtml = '';
  let totalFairway = [], totalGir = [], totalPutt = [];

  tournament.rounds.forEach(round => {
    const outPar = sum(round.par.slice(0, 9));
    const inPar = sum(round.par.slice(9, 18));
    const outStrokes = sum(round.strokes.slice(0, 9));
    const inStrokes = sum(round.strokes.slice(9, 18));
    const totalPar = outPar + inPar;
    const totalStrokes = outStrokes + inStrokes;
    const toPar = totalStrokes - totalPar;
    const toParText = toPar === 0 ? 'E' : (toPar > 0 ? `+${toPar}` : `${toPar}`);

    const holeCells = round.strokes.map((s, i) => {
      const par = round.par[i];
      const cls = scoreClass(s, par);
      return `<td class="hole-score ${cls}"><span>${s}</span></td>`;
    });

    tablesHtml += `
      <table class="score-table">
        <caption>${tournament.tournament} — ${round.label}(スコア ${toParText})</caption>
        <thead>
          <tr>
            <th>HOLE</th>
            ${round.par.slice(0, 9).map((_, i) => `<th>${i + 1}</th>`).join('')}
            <th class="total-col">OUT</th>
            ${round.par.slice(9, 18).map((_, i) => `<th>${i + 10}</th>`).join('')}
            <th class="total-col">IN</th>
            <th class="total-col">TOTAL</th>
          </tr>
          <tr>
            <th>PAR</th>
            ${round.par.slice(0, 9).map(p => `<td>${p}</td>`).join('')}
            <td class="total-col">${outPar}</td>
            ${round.par.slice(9, 18).map(p => `<td>${p}</td>`).join('')}
            <td class="total-col">${inPar}</td>
            <td class="total-col">${totalPar}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>SCORE</th>
            ${holeCells.slice(0, 9).join('')}
            <td class="total-col">${outStrokes}</td>
            ${holeCells.slice(9, 18).join('')}
            <td class="total-col">${inStrokes}</td>
            <td class="total-col">${totalStrokes}(${toParText})</td>
          </tr>
        </tbody>
      </table>`;

    totalFairway.push(parseFloat(round.fairwayKeep));
    totalGir.push(parseFloat(round.greenInReg));
    totalPutt.push(parseFloat(round.avgPutt));
  });

  wrap.innerHTML = tablesHtml;

  if (statWrap) {
    const avg = arr => (sum(arr) / arr.length).toFixed(1);
    statWrap.innerHTML = `
      <div class="stat-card">
        <p class="stat-label">フェアウェイキープ率(平均)</p>
        <p class="stat-value">${avg(totalFairway)}%</p>
      </div>
      <div class="stat-card">
        <p class="stat-label">パーオン率(平均)</p>
        <p class="stat-value">${avg(totalGir)}%</p>
      </div>
      <div class="stat-card">
        <p class="stat-label">平均パット数</p>
        <p class="stat-value">${avg(totalPutt)}</p>
      </div>`;
  }
}

function initScores() {
  const select = document.getElementById('tournamentSelect');
  if (!select) return;
  select.innerHTML = siteData.scores.map((t, i) =>
    `<option value="${i}">${t.tournament}</option>`).join('');
  select.addEventListener('change', () => renderScoreTable(Number(select.value)));
  renderScoreTable(0);
}

/* ==================== お問い合わせフォーム ==================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form) return;

  function setError(row, message) {
    row.classList.add('error');
    let msg = row.querySelector('.error-msg');
    if (!msg) {
      msg = document.createElement('p');
      msg.className = 'error-msg';
      row.appendChild(msg);
    }
    msg.textContent = message;
  }
  function clearError(row) {
    row.classList.remove('error');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    const rows = form.querySelectorAll('.form-row');
    rows.forEach(clearError);

    const name = form.elements['name'];
    const email = form.elements['email'];
    const category = form.elements['category'];
    const message = form.elements['message'];

    if (!name.value.trim()) {
      setError(name.closest('.form-row'), 'お名前を入力してください');
      valid = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      setError(email.closest('.form-row'), '正しいメールアドレスを入力してください');
      valid = false;
    }
    if (!category.value) {
      setError(category.closest('.form-row'), 'お問い合わせ種別を選択してください');
      valid = false;
    }
    if (!message.value.trim()) {
      setError(message.closest('.form-row'), 'お問い合わせ内容を入力してください');
      valid = false;
    }

    if (!valid) {
      status.textContent = '入力内容をご確認ください。';
      status.className = 'form-status error';
      return;
    }

    status.textContent = 'お問い合わせを受け付けました。担当者より折り返しご連絡いたします。';
    status.className = 'form-status success';
    form.reset();
  });
}

/* ==================== 初期化 ==================== */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderTicker();
  renderQuickInfo();
  renderSponsors();
  renderTimeline();
  renderNewsSchedule();
  initRanking();
  initScores();
  initContactForm();
});
```

3ファイルの実装が完了しました。デザイン仕様の10セクション(トップ〜お問い合わせ)を1ページ構成で実装し、スコア・ランキング・スポンサーはJSに`siteData`オブジェクトとして分離(将来JSON外部化しやすい構造)、ホールバイホールスコアはパー差分に応じて自動で色分けしています。氏名・所属先・生年月日などの【 】部分は仮のサンプル値で埋めているので、確定情報が出次第`siteData`と`.profile-table`内を差し替えてください。