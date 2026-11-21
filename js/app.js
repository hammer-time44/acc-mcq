const T = [
  { n: "Natural Sort Order", q: [
    ["What is the output of natural sorting for the following strings?\n[\"file10\", \"file2\", \"file1\", \"file20\"]", ["file1, file10, file2, file20", "file1, file2, file10, file20", "file10, file1, file20, file2", "file20, file10, file2, file1"], 1],
    ["Which Java interface is used to define custom sorting logic?", ["Runnable", "Comparator", "Serializable", "Cloneable"], 1],
    ["What is the output of \"apple\".compareTo(\"banana\")?", ["Positive value", "Zero", "Negative value", "Compilation error"], 2],
    ["Which sorting technique compares strings character by character based on their Unicode values?", ["Natural numeric sorting", "Lexicographical sorting", "Bucket sorting", "Radix sorting"], 1],
    ["Which string comes first in natural sorting?", ["test20", "test3", "test11", "test100"], 1]
  ]},
  { n: "Quick Sort", q: [
    ["What is the average time complexity of Quick Sort?", ["O(n)", "O(n log n)", "O(n²)", "O(log n)"], 1],
    ["What is the worst-case time complexity of Quick Sort?", ["O(n)", "O(n log n)", "O(n²)", "O(log n)"], 2],
    ["What is the main purpose of selecting a pivot?", ["Merge two arrays", "Partition the array", "Reverse the array", "Find the sum"], 1],
    ["Quick Sort follows which algorithmic approach?", ["Dynamic Programming", "Greedy", "Divide and Conquer", "Backtracking"], 2],
    ["Consider the array [4, 2, 7, 1, 5]. If 4 is selected as the pivot, which elements belong to the left partition in ascending-order partitioning?", ["7, 5", "2, 1", "4, 5", "1, 7"], 1]
  ]},
  { n: "Selection Sort", q: [
    ["Selection Sort repeatedly selects:", ["A random element", "The minimum element", "The middle element", "The pivot element"], 1],
    ["What is the time complexity of Selection Sort in the best case?", ["O(n)", "O(log n)", "O(n log n)", "O(n²)"], 3],
    ["What is the maximum number of swaps performed by standard Selection Sort on n elements?", ["n", "n²", "n−1", "n log n"], 2],
    ["Is standard Selection Sort stable?", ["Yes, always", "No", "Only for integers", "Only for strings"], 1],
    ["What is the auxiliary space complexity of Selection Sort?", ["O(n)", "O(log n)", "O(n²)", "O(1)"], 3]
  ]},
  { n: "Weighted Substring", q: [
    ["Assume a = 1, b = 2, c = 3, ..., z = 26.\nWhat is the weight of the substring \"cab\"?", ["5", "6", "7", "4"], 1],
    ["What is the weight of \"face\"?", ["15", "16", "17", "18"], 0, "The PDF key lists C, but f + a + c + e = 6 + 1 + 3 + 5 = 15, so A is correct."],
    ["Which technique is useful for finding a maximum-weight substring of fixed length?", ["Binary Search", "Sliding Window", "Merge Sort", "DFS"], 1],
    ["How many substrings of length k exist in a string of length n, where k is less than or equal to n?", ["n+k", "n−k", "n−k+1", "n×k"], 2],
    ["Which technique allows efficient calculation of substring weights using precomputed cumulative sums?", ["Prefix Sum", "Quick Sort", "Stack", "Tree Traversal"], 0]
  ]},
  { n: "Move Hyphen to Beginning", q: [
    ["What is the output for the input \"a-b-c-d\"?", ["abcd----", "----abcd", "a--bcd", "dcba----"], 1],
    ["Which approach can solve this problem in O(n) time?", ["Bubble Sort", "Count hyphens and construct the output", "Binary Search", "Quick Sort"], 1],
    ["What is the output for \"hello-world\"?", ["hello-world", "-helloworld", "helloworld", "worldhello"], 1],
    ["What is the time complexity of traversing a string of length n once?", ["O(1)", "O(n)", "O(n²)", "O(log n)"], 1],
    ["Which Java class is suitable for efficiently building the resulting string?", ["StringBuilder", "Scanner", "Integer", "Thread"], 0]
  ]},
  { n: "Manacher’s Algorithm", q: [
    ["Manacher’s Algorithm is used to find:", ["Longest Common Subsequence", "Longest Palindromic Substring", "Shortest Common Supersequence", "Longest Increasing Subsequence"], 1],
    ["What is the time complexity of Manacher’s Algorithm?", ["O(n²)", "O(n log n)", "O(n)", "O(2ⁿ)"], 2],
    ["Why are special characters inserted between characters?", ["To sort the string", "To handle odd and even length palindromes uniformly", "To remove duplicates", "To reverse the string"], 1],
    ["What does the palindrome radius array store?", ["Character frequency", "Original string length", "Palindrome expansion radius at each transformed position", "ASCII values"], 2],
    ["Which variable helps avoid unnecessary palindrome comparisons?", ["Current right boundary", "Array length", "Stack top", "Queue front"], 0]
  ]},
  { n: "Sorted Unique Permutation", q: [
    ["How many unique permutations can be generated from the string \"AAB\"?", ["6", "3", "2", "1"], 1],
    ["Which technique is commonly used to generate permutations?", ["Binary Search", "Backtracking", "Merge Sort", "BFS"], 1],
    ["How can duplicate permutations be avoided?", ["Skip repeated choices at the same recursion level", "Reverse the string", "Use only one loop", "Remove all repeated characters permanently"], 0],
    ["How many permutations are possible for 4 distinct elements?", ["12", "16", "24", "32"], 2],
    ["What is the time complexity of generating all permutations of n distinct elements, excluding output-copying costs?", ["O(n)", "O(n log n)", "O(n!)", "O(2ⁿ)"], 2]
  ]},
  { n: "Maneuvering (Grid Paths)", q: [
    ["In a grid, a person can move only right or down. Which technique is commonly used to count possible paths?", ["Quick Sort", "Dynamic Programming", "Binary Search", "Heap Sort"], 1],
    ["How many moves are required to reach the bottom-right corner of an m × n grid from the top-left corner?", ["m+n", "m+n−2", "m×n", "m−n"], 1],
    ["How many unique paths exist in a 3 × 3 grid when only right and down movements are allowed?", ["2", "4", "6", "8"], 2],
    ["Which recurrence relation is used for counting paths?", ["dp[i][j] = dp[i−1][j] + dp[i][j−1]", "dp[i][j] = dp[i−1][j] − dp[i][j−1]", "dp[i][j] = dp[i][j] × 2", "dp[i][j] = i+j"], 0],
    ["What is the time complexity of the standard DP solution for an m × n grid?", ["O(m+n)", "O(m×n)", "O(log n)", "O(n²+m)"], 1]
  ]},
  { n: "Combination", q: [
    ["In combinations, does the order of selected elements matter?", ["Yes", "No", "Only for integers", "Only for strings"], 1],
    ["How many ways can 2 elements be selected from 4 distinct elements?", ["4", "6", "8", "12"], 1],
    ["Which formula is used to calculate combinations?", ["n!", "n! / (r! × (n−r)!)", "n^r", "r!"], 1],
    ["Which technique is commonly used to generate combinations?", ["Backtracking", "Quick Sort", "Binary Search", "Heap Sort"], 0],
    ["How many combinations of 3 elements can be selected from 5 distinct elements?", ["5", "10", "15", "20"], 1]
  ]},
  { n: "Josephus Trap", q: [
    ["The Josephus problem is based on:", ["Sorting elements", "Elimination in a circle", "Finding shortest paths", "Searching a tree"], 1],
    ["Which data structure naturally represents the circular elimination process?", ["Stack", "Queue", "Binary Tree", "HashMap"], 1],
    ["What is the zero-indexed recurrence relation for the Josephus problem?", ["J(n,k) = (J(n−1,k)+k) % n", "J(n,k) = n×k", "J(n,k) = n−k", "J(n,k) = J(n−1,k)"], 0],
    ["For 5 people and step size 2, what is the survivor’s position using 1-based indexing?", ["1", "2", "3", "5"], 2],
    ["What is the time complexity of the iterative recurrence-based Josephus solution?", ["O(n)", "O(n²)", "O(log n)", "O(1)"], 0]
  ]},
  { n: "Maze Solving", q: [
    ["Which algorithmic technique is commonly used to solve a maze?", ["Selection Sort", "Backtracking", "Binary Search", "Counting Sort"], 1],
    ["Why is a visited array used in maze solving?", ["To sort the cells", "To prevent revisiting cells", "To increase path length", "To remove obstacles"], 1],
    ["Which data structure is commonly used for iterative Depth First Search?", ["Stack", "Priority Queue", "Heap", "Linked HashMap"], 0],
    ["What happens when a selected path leads to a dead end in backtracking?", ["The algorithm terminates immediately", "The previous choice is undone", "The entire maze is deleted", "The path is sorted"], 1],
    ["For a grid with R rows and C columns, what is the space complexity of a visited matrix?", ["O(R+C)", "O(R×C)", "O(1)", "O(log R)"], 1]
  ]},
  { n: "N Queens", q: [
    ["What is the objective of the N Queens problem?", ["Place N queens so that no two attack each other", "Place all queens in one row", "Place queens only on diagonals", "Fill every cell with a queen"], 0],
    ["How many distinct solutions exist for the 4 Queens problem?", ["1", "2", "4", "8"], 1],
    ["A queen can attack in which directions?", ["Horizontal only", "Vertical only", "Diagonal only", "Horizontal, vertical and diagonal"], 3],
    ["Which technique is commonly used to solve N Queens?", ["Greedy", "Backtracking", "Binary Search", "Merge Sort"], 1],
    ["When placing queens row by row, which conditions must be checked?", ["Column and diagonals", "Only row", "Only column", "Only distance from the corner"], 0]
  ]},
  { n: "Warnsdorff’s Algorithm", q: [
    ["Warnsdorff’s Algorithm is used to solve which problem?", ["N Queens", "Knight’s Tour", "Josephus Problem", "Maze Shortest Path"], 1],
    ["According to Warnsdorff’s rule, which square should the knight visit next?", ["Square with maximum onward moves", "Square with minimum onward moves", "Square with highest row number", "Square with lowest column number"], 1],
    ["Warnsdorff’s Algorithm is primarily:", ["A sorting algorithm", "A heuristic algorithm", "A searching algorithm only", "A hashing algorithm"], 1],
    ["How does a knight move on a chessboard?", ["One square diagonally", "Two squares in one direction and one perpendicular", "Three squares straight", "One square horizontally only"], 1],
    ["What is the main idea behind Warnsdorff’s heuristic?", ["Visit the most constrained next square first", "Always move to the center", "Always move to the corner", "Visit the square with the highest number of onward moves"], 0]
  ]},
  { n: "Hamiltonian Cycle", q: [
    ["A Hamiltonian cycle visits:", ["Every vertex exactly once and returns to the starting vertex", "Every edge exactly once", "Only adjacent vertices", "One vertex repeatedly"], 0],
    ["Which technique is commonly used to find a Hamiltonian cycle?", ["Selection Sort", "Backtracking", "Binary Search", "Counting Sort"], 1],
    ["The Hamiltonian cycle problem focuses on:", ["Vertices", "Edge weights only", "String characters", "Array indices"], 0],
    ["Does every connected graph contain a Hamiltonian cycle?", ["Yes", "No", "Only trees", "Only complete graphs"], 1],
    ["The Hamiltonian Cycle decision problem is classified as:", ["P", "NP-complete", "Always O(n)", "Always O(log n)"], 1]
  ]}
];
const GROUPS = ["CAT-1", "CAT-2", "FAT"];
T.forEach((t) => { t.g = t.n === "Natural Sort Order" ? 1 : 2; });
if (typeof EXTRA !== "undefined") T.push(...EXTRA.map((t) => ({ ...t, g: t.g - 1 })));
const COLORS = T.map(() => "var(--accent)");
const ALL = [];
T.forEach((t, ti) => t.q.forEach((x) => ALL.push({ id: ALL.length + 1, ti, text: x[0], opts: x[1], ans: x[2], note: x[3] || "" })));

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const L = "ABCD";
const pillText = (list) => tab === "m" ? list.length + " to review" : list.filter((q) => ans[q.id] != null).length + "/" + list.length + " done \u00b7 " + list.filter((q) => ans[q.id] === q.ans).length + " right";
let mode = "practice", tab = -1, sq = "", ans = {}, quiz = null;
try { ans = JSON.parse(localStorage.getItem("mcq-ans") || "{}"); } catch (e) { ans = {}; }
const save = () => { try { localStorage.setItem("mcq-ans", JSON.stringify(ans)); } catch (e) {} };
try { const st = localStorage.getItem("mcq-tab2"); if (/^g\d$/.test(st) && Number(st[1]) < GROUPS.length) tab = st; else if (/^\d+$/.test(st) && Number(st) < T.length) tab = Number(st); else if (st === "m") tab = "m"; } catch (e) {}
const words = (s) => s.toLowerCase().split(/\s+/).filter(Boolean);
const hay = (q) => (q.text + " " + q.opts.join(" ") + " " + T[q.ti].n).toLowerCase();
const matches = (q, w) => { const h = hay(q); return w.every((x) => h.includes(x)); };
const isMiss = (q) => ans[q.id] != null && ans[q.id] !== q.ans;
const pool = () => tab === "m" ? ALL.filter(isMiss) : tab === "s" ? ALL.filter((q) => matches(q, words(sq))) : typeof tab === "string" ? ALL.filter((q) => T[q.ti].g === Number(tab.slice(1))) : tab < 0 ? ALL : ALL.filter((q) => q.ti === tab);
const title = () => tab === "m" ? "Mistakes" : tab === "s" ? "Search: \u201c" + sq + "\u201d" : typeof tab === "string" ? GROUPS[Number(tab.slice(1))] : tab < 0 ? "All topics" : T[tab].n;

const hl = (s, w) => { let h = esc(s); w.forEach((x) => { h = h.replace(new RegExp("(" + x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi"), "<mark>$1</mark>"); }); return h; };
const secOf = () => typeof tab === "number" && tab >= 0 ? T[tab].g : typeof tab === "string" && tab[0] === "g" ? Number(tab.slice(1)) : -1;
let sec = secOf();
const CHEV = '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3.5l3 3 3-3"/></svg>';
function headerBars(recenter) {
  const w = words($("#dq").value), searching = w.length > 0;
  $("#secs").innerHTML = `<button class="sec${tab === -1 ? " on" : ""}" data-t="-1">All<b>${ALL.length}</b></button>` + GROUPS.map((g, i) => {
    const n = ALL.filter((q) => T[q.ti].g === i).length, open = sec === i && !searching;
    return `<button class="sec${secOf() === i && !searching ? " on" : ""}${open ? " open" : ""}" data-s="${i}" aria-expanded="${open}">${esc(g)}<b>${n}</b>${CHEV}</button>`;
  }).join("") + `<button class="sec msec${tab === "m" && !searching ? " on" : ""}" data-t="m">Mistakes<b>${ALL.filter(isMiss).length}</b></button>`;
  const bar = $("#tbar"), keep = bar.scrollLeft;
  const chip = (val, label, meta, on, cls, mc) => `<button class="chip${on ? " on" : ""}${cls ? " " + cls : ""}" data-t="${val}">${label}${meta ? `<b${mc ? ` class="${mc}"` : ""}>${meta}</b>` : ""}</button>`;
  let html = "";
  if (searching) {
    const hits = ALL.filter((q) => matches(q, w));
    if (hits.length) html += chip("s", `All ${hits.length} match${hits.length === 1 ? "" : "es"}`, "", tab === "s", "all");
    T.forEach((t, ti) => {
      const m = hits.filter((q) => q.ti === ti).length;
      if (!m && !w.every((x) => t.n.toLowerCase().includes(x))) return;
      html += chip(ti, hl(t.n, w), esc(GROUPS[t.g]) + (m ? " \u00b7 " + m : ""), tab === ti);
    });
    if (!html) html = `<span class="dempty">No topics or questions match \u201c${esc($("#dq").value.trim())}\u201d.</span>`;
  } else if (sec >= 0) {
    html += chip("g" + sec, "All " + esc(GROUPS[sec]), "", tab === "g" + sec, "all");
    T.map((t, ti) => ({ t, ti })).filter((x) => x.t.g === sec).sort((a, b) => (a.t.n === "Natural Sort Order") - (b.t.n === "Natural Sort Order")).forEach(({ t, ti }) => {
      const qs = ALL.filter((q) => q.ti === ti);
      const dn = qs.filter((q) => ans[q.id] != null).length;
      html += chip(ti, esc(t.n), dn + "/" + qs.length, tab === ti, "", dn === 0 ? "" : dn === qs.length ? "complete" : "partial");
    });
  }
  bar.hidden = !html; bar.innerHTML = html; bar.scrollLeft = keep;
  if (recenter && !searching) { const on = bar.querySelector(".chip.on"); if (on) bar.scrollLeft = on.offsetLeft - bar.clientWidth / 2 + on.offsetWidth / 2; }
}
$("#tbar").addEventListener("wheel", (e) => { if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) { e.currentTarget.scrollLeft += e.deltaY; e.preventDefault(); } }, { passive: false });

function topicList() {
  const w = words($("#dq").value);
  const base = GROUPS.flatMap((_, g) => T.map((t, ti) => ({ t, ti })).filter((x) => x.t.g === g).sort((a, b) => (a.t.n === "Natural Sort Order") - (b.t.n === "Natural Sort Order")).map((x) => x.ti));
  if (!w.length) return base;
  const hits = ALL.filter((q) => matches(q, w));
  return base.filter((ti) => hits.some((q) => q.ti === ti) || w.every((x) => T[ti].n.toLowerCase().includes(x)));
}
function go(d) {
  const l = topicList(); if (!l.length) return;
  const i = typeof tab === "number" ? l.indexOf(tab) : -1;
  tab = l[i < 0 ? (d > 0 ? 0 : l.length - 1) : (i + d + l.length) % l.length]; sec = T[tab].g;
  try { localStorage.setItem("mcq-tab2", String(tab)); } catch (err) {}
  quiz = null; render(); window.scrollTo(0, 0);
}
let lastY = scrollY;
addEventListener("scroll", () => {
  const y = scrollY, h = $(".hdr");
  if (y < 80 || y < lastY - 4) h.classList.remove("hide");
  else if (y > lastY + 4 && !h.contains(document.activeElement)) h.classList.add("hide");
  lastY = y;
}, { passive: true });

const KW = /^(if|for|while|switch)\s*\(.*\)$/;
function pretty(src) {
  const out = []; let cur = "", depth = 0, extra = 0, par = 0, q = null, ind = 0; const ifs = [];
  const start = (o) => { if (!cur) ind = o != null ? o : depth + extra; };
  const flush = () => { if (cur.trim()) out.push("    ".repeat(ind) + cur.trim()); cur = ""; };
  const nxt = (i) => src.slice(i + 1).trimStart();
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (q) { cur += c; if (c === q && src[i - 1] !== "\\") q = null; continue; }
    if (c === " " && !cur) continue;
    if (!cur && /^else\b/.test(src.slice(i))) start(ifs.length ? ifs.pop() : depth + extra); else start();
    if (c === '"' || c === "'") { q = c; cur += c; continue; }
    if (c === "(") { par++; cur += c; continue; }
    if (c === ")") {
      par--; cur += c;
      if (par === 0 && KW.test(cur.replace(/^}\s*/, "").replace(/^else\s+/, "").trim())) {
        const n = nxt(i)[0];
        if (n && n !== "{" && n !== ";") { if (/^(if)\b/.test(cur.replace(/^}\s*/, "").replace(/^else\s+/, "").trim())) ifs.push(ind); flush(); extra++; }
        else if (n === "{" && /^if\b/.test(cur.trim())) ifs.push(ind);
      }
      continue;
    }
    if (par > 0) { cur += c; continue; }
    if (c === ";") { cur += c; flush(); extra = 0; continue; }
    if (c === "{") { cur = cur.trimEnd() + " {"; flush(); depth++; extra = 0; continue; }
    if (c === "}") { flush(); depth--; extra = 0; cur = ""; ind = depth; cur = "}"; if (/^(else|while)\b/.test(nxt(i))) { cur += " "; } else flush(); continue; }
    if (c === ":" && /^(case\b|default$)/.test(cur.trim())) { cur += c; flush(); extra = 1; continue; }
    if (/^else\b/.test(cur) && /^else$/.test(cur.trim()) && /\s/.test(c)) { flush(); const n = nxt(i)[0]; if (n !== "{") extra = ind - depth + 1; else { cur = "else"; } continue; }
    cur += c;
  }
  flush();
  return out.join("\n");
}
function fmtQ(text) {
  let m;
  if ((m = text.match(/^([^\n]*?)\n(\[.*)$/s))) return `<p class="qt">${esc(m[1])}</p><pre class="code"><code>${esc(m[2])}</code></pre>`;
  if ((m = text.match(/^Consider the code:\s*(.*?)\s*(What[^?]*\?)$/))) return `<p class="qt">Consider the code:</p><pre class="code"><code>${esc(pretty(m[1]))}</code></pre><p class="qt">${esc(m[2])}</p>`;
  if ((m = text.match(/^(What is the output of)\s+(.*?;)\s*\?$/))) return `<p class="qt">${esc(m[1])} the following?</p><pre class="code"><code>${esc(pretty(m[2]))}</code></pre>`;
  if ((m = text.match(/^([^?]*\?)\s*((?:int |for\s*\(|while\s*\(|do\s*\{|do\{)[^]*)$/))) return `<p class="qt">${esc(m[1])}</p><pre class="code"><code>${esc(pretty(m[2]))}</code></pre>`;
  return `<p class="qt">${esc(text)}</p>`;
}
const optHtml = (o) => /;|=\s|\bimport\b|\bnew\b/.test(o) ? `<code class="inl">${esc(o)}</code>` : esc(o);

function card(q, pos) {
  const p = ans[q.id];
  const opts = q.opts.map((o, i) => {
    const c = p == null ? "" : i === q.ans ? "ok" : i === p ? "bad" : "dim";
    return `<button class="opt ${c}" data-q="${q.id}" data-o="${i}" ${p == null ? "" : "disabled"}><b>${L[i]}</b><span>${optHtml(o)}</span></button>`;
  }).join("");
  const note = p != null && q.note ? `<p class="note">${esc(q.note)}</p>` : "";
  return `<article class="q ${p != null ? "done" + (p !== q.ans ? " wrong" : "") : ""}" id="q${q.id}" style="--pc:${COLORS[q.ti]}"><span class="qn${pos > 99 ? " lg" : ""}">${pos}</span><div><span class="tag">${esc(T[q.ti].n)}</span>${fmtQ(q.text)}<div class="opts">${opts}</div>${note}${tab === "m" && p != null ? `<button class="link rt" data-retry="${q.id}">Retry this question</button>` : ""}</div></article>`;
}

function practice() {
  const list = pool();
  if (tab === "m" && !list.length) { $("#view").innerHTML = `<div class="bar"><h1>Mistakes</h1></div><div class="panel"><h1>Nothing here</h1><p>Questions you get wrong will stack up here.</p></div>`; return; }
  $("#view").innerHTML = `<div class="bar"><h1>${esc(title())}</h1><span class="pr"><span class="pn"><button class="icon" data-go="-1" aria-label="Previous topic" title="Previous topic (\u2190)">\u2039</button><button class="icon" data-go="1" aria-label="Next topic" title="Next topic (\u2192)">\u203a</button></span><span class="pill">${pillText(list)}</span></span></div>` + list.map((q, i) => card(q, i + 1)).join("") + `<div class="row"><span></span>${tab === "m" ? `<button class="link" id="retryall">Retry all mistakes</button>` : `<button class="link" id="reset">Reset answers</button>`}</div>`;
}

function start() {
  const list = pool().slice().sort(() => Math.random() - 0.5);
  quiz = { list, i: 0, picks: [], done: false };
  quizView();
}

function quizView() {
  if (!quiz) {
    const n = pool().length;
    $("#view").innerHTML = `<div class="panel"><h1>${esc(title())}</h1><p>${n} questions in random order. Answers show at the end.</p><button class="btn" id="start">Start quiz</button></div>`;
    return;
  }
  const { list, i, picks } = quiz;
  if (quiz.done) {
    const right = list.filter((q, k) => picks[k] === q.ans);
    const wrong = list.map((q, k) => ({ q, p: picks[k] })).filter((x) => x.p !== x.q.ans);
    $("#view").innerHTML = `<div class="panel"><div class="score">${right.length}/${list.length}</div><p>${Math.round((right.length / list.length) * 100)}% correct in ${esc(title())}</p><div class="row" style="justify-content:center"><button class="btn" id="start">Try again</button><button class="btn ghost" id="exit">Back</button></div>` +
      (wrong.length ? `<div class="miss"><h2>Missed (${wrong.length})</h2>${wrong.map((x) => `<div>${esc(x.q.text)}<em>${L[x.q.ans]}) ${esc(x.q.opts[x.q.ans])}</em></div>`).join("")}</div>` : "") + `</div>`;
    return;
  }
  const q = list[i], p = picks[i];
  const opts = q.opts.map((o, k) => `<button class="opt ${p === k ? "sel" : ""}" data-o="${k}"><b>${L[k]}</b><span>${optHtml(o)}</span></button>`).join("");
  $("#view").innerHTML = `<div class="bar"><h1>${esc(title())}</h1><span class="pill">${i + 1} of ${list.length}</span></div><div class="prog"><u style="width:${(i / list.length) * 100}%"></u></div>` +
    `<article class="q" style="--pc:${COLORS[q.ti]}"><span class="qn">${i + 1}</span><div><span class="tag">${esc(T[q.ti].n)}</span>${fmtQ(q.text)}<div class="opts">${opts}</div></div></article>` +
    `<div class="row"><button class="link" id="exit">End quiz</button><button class="btn" id="next" ${p == null ? "disabled" : ""}>${i + 1 === list.length ? "Finish" : "Next"}</button></div>`;
}

function render() {
  { const v = $("#view"); v.classList.remove("enter"); void v.offsetWidth; v.classList.add("enter"); clearTimeout(render.t); render.t = setTimeout(() => v.classList.remove("enter"), 700); }
  headerBars(true); syncSearch();
  document.querySelectorAll("#mode button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.m === mode)));
  if (mode === "practice") practice(); else quizView();
}

document.addEventListener("click", (e) => {
  const t = e.target.closest("button"); if (!t) return;
  if (t.dataset.t != null) {
    const v = t.dataset.t;
    if (v === "s") { tab = "s"; sq = $("#dq").value.trim(); } else if (v === "m") { tab = "m"; $("#dq").value = ""; sec = -1; } else { tab = /^g/.test(v) ? v : Number(v); sec = secOf(); if (tab === -1) { $("#dq").value = ""; sec = -1; } }
    try { localStorage.setItem("mcq-tab2", tab === "s" ? "-1" : String(tab)); } catch (err) {}
    quiz = null; render(); window.scrollTo(0, 0);
  }
  else if (t.dataset.go != null) go(Number(t.dataset.go));
  else if (t.dataset.s != null) { const i = Number(t.dataset.s); $("#dq").value = ""; sec = sec === i ? -1 : i; headerBars(true); }
  else if (t.closest("#mode")) { mode = t.dataset.m; quiz = null; render(); }
  else if (t.id === "theme") {
    const el = document.documentElement, dark = getComputedStyle(el).colorScheme === "dark";
    const next = dark ? "light" : "dark"; el.setAttribute("data-theme", next);
    try { localStorage.setItem("mcq-theme", next); } catch (err) {}
  }
  else if (t.id === "sbtn") { const b = $("#sbox"); if (b.classList.contains("open") && !$("#dq").value) b.classList.remove("open"); else { b.classList.add("open"); $("#dq").focus(); } }
  else if (t.id === "keys") $("#guide").hidden = false;
  else if (t.id === "gclose") $("#guide").hidden = true;
  else if (t.id === "reset") { if (t.dataset.arm) { pool().forEach((q) => delete ans[q.id]); save(); render(); } else { t.dataset.arm = "1"; t.textContent = "Tap again to clear " + (tab < 0 ? "all answers" : "this set"); } }
  else if (t.id === "retryall") { pool().forEach((q) => delete ans[q.id]); save(); render(); }
  else if (t.dataset.retry != null) { const q = ALL[t.dataset.retry - 1], el = $("#q" + q.id), pos = Number(el.querySelector(".qn").textContent) || 1; delete ans[q.id]; save(); el.outerHTML = card(q, pos); headerBars(); }
  else if (t.id === "start") start();
  else if (t.id === "exit") { quiz = null; render(); }
  else if (t.id === "next") { if (quiz.i + 1 === quiz.list.length) quiz.done = true; else quiz.i++; quizView(); window.scrollTo(0, 0); }
  else if (t.classList.contains("opt") && t.dataset.q && ans[t.dataset.q] == null) {
    const q = ALL[t.dataset.q - 1]; ans[q.id] = Number(t.dataset.o); save();
    const el = $("#q" + q.id), pos = Number(el.querySelector(".qn").textContent) || pool().indexOf(q) + 1;
    el.outerHTML = card(q, pos);
    { const nq = $("#q" + q.id); nq.classList.add("fresh"); setTimeout(() => nq.classList.remove("fresh"), 400); }
    document.querySelector(".bar .pill").textContent = pillText(pool());
    headerBars();
  }
  else if (t.classList.contains("opt") && quiz && !quiz.done) { quiz.picks[quiz.i] = Number(t.dataset.o); quizView(); }
});

$("#dq").addEventListener("input", () => headerBars(false));
const syncSearch = () => { if (!$("#dq").value && document.activeElement !== $("#dq")) $("#sbox").classList.remove("open"); };
$("#dq").addEventListener("blur", () => setTimeout(syncSearch, 120));
$("#guide").addEventListener("click", (e) => { if (e.target.id === "guide") e.target.hidden = true; });

function curCard() {
  const cs = [...document.querySelectorAll("#view .q")];
  return cs.find((c) => c.getBoundingClientRect().bottom > 120) || cs[0];
}
function pickCard() {
  const cs = [...document.querySelectorAll("#view .q")], i = Math.max(0, cs.indexOf(curCard()));
  return cs.slice(i).find((c) => !c.classList.contains("done") && c.getBoundingClientRect().top < innerHeight) || cs[i];
}
document.addEventListener("keydown", (e) => {
  if (e.target.matches && e.target.matches("input")) {
    if (e.key === "Escape") { if ($("#dq").value) { $("#dq").value = ""; headerBars(true); } else e.target.blur(); }
    else if (e.key === "Enter") { const f = document.querySelector("#tbar .chip"); if (f) f.click(); }
    return;
  }
  if (e.ctrlKey || e.metaKey || e.altKey || e.repeat) return;
  const k = e.key.toLowerCase(), g = $("#guide");
  if (k === "escape") { g.hidden = true; return; }
  if (k === "/") { e.preventDefault(); $(".hdr").classList.remove("hide"); $("#sbox").classList.add("open"); $("#dq").focus(); return; }
  if (k === "?") { g.hidden = !g.hidden; return; }
  if (!g.hidden) return;
  if (k === "enter" && e.target.closest && e.target.closest("button")) return;
  const quizOn = mode === "quiz" && quiz && !quiz.done;
  if (k.length === 1 && "abcd1234".includes(k)) {
    const i = "abcd".includes(k) ? "abcd".indexOf(k) : Number(k) - 1;
    const scope = quizOn ? document.querySelector("#view") : mode === "practice" ? pickCard() : null;
    const o = scope && scope.querySelectorAll(".opt")[i]; if (o) { o.click(); if (!quizOn) { const nx = [...document.querySelectorAll("#view .q:not(.done)")][0]; if (nx) nx.scrollIntoView({ block: "center", behavior: "smooth" }); } }
  } else if (k === "arrowleft" || (k === "arrowright" && !quizOn)) { if (!quizOn) go(k === "arrowright" ? 1 : -1); }
  else if (k === "enter" || k === "arrowright") { const n = $("#next"); if (n && !n.disabled) n.click(); }
  else if (k === "p" || k === "q") document.querySelector('#mode [data-m="' + (k === "p" ? "practice" : "quiz") + '"]').click();
  else if (k === "t") $("#theme").click();
  else if (k === "j" && mode === "practice") {
    const cs = [...document.querySelectorAll("#view .q")], i = cs.indexOf(curCard());
    const nx = cs.slice(i + 1).concat(cs.slice(0, i + 1)).find((c) => !c.classList.contains("done"));
    if (nx) nx.scrollIntoView({ block: "start", behavior: "smooth" });
  }
});

try { const th = localStorage.getItem("mcq-theme"); if (th) document.documentElement.setAttribute("data-theme", th); } catch (e) {}
render();
