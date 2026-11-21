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
const COLORS = T.map(() => "var(--accent)");
const ALL = [];
T.forEach((t, ti) => t.q.forEach((x) => ALL.push({ id: ALL.length + 1, ti, text: x[0], opts: x[1], ans: x[2], note: x[3] || "" })));

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const L = "ABCD";
let mode = "practice", tab = -1, ans = {}, quiz = null;
try { ans = JSON.parse(localStorage.getItem("mcq-ans") || "{}"); } catch (e) { ans = {}; }
const save = () => { try { localStorage.setItem("mcq-ans", JSON.stringify(ans)); } catch (e) {} };
const pool = () => (tab < 0 ? ALL : ALL.filter((q) => q.ti === tab));
const title = () => (tab < 0 ? "All topics" : T[tab].n);

function tabsHtml() {
  const mk = (i, name, n) => `<button class="tab" role="tab" data-t="${i}" aria-selected="${tab === i}">${esc(name)}<b>${n}</b></button>`;
  $("#tabs").innerHTML = mk(-1, "All", ALL.length) + T.map((t, i) => mk(i, t.n, t.q.length)).join("");
}

function card(q) {
  const p = ans[q.id];
  const opts = q.opts.map((o, i) => {
    const c = p == null ? "" : i === q.ans ? "ok" : i === p ? "bad" : "dim";
    return `<button class="opt ${c}" data-q="${q.id}" data-o="${i}" ${p == null ? "" : "disabled"}><b>${L[i]}</b><span>${esc(o)}</span></button>`;
  }).join("");
  const note = p != null && q.note ? `<p class="note">${esc(q.note)}</p>` : "";
  return `<article class="q ${p != null ? "done" : ""}" id="q${q.id}" style="--pc:${COLORS[q.ti]}"><span class="qn">${q.id}</span><div><span class="tag">${esc(T[q.ti].n)}</span><p class="qt">${esc(q.text)}</p><div class="opts">${opts}</div>${note}</div></article>`;
}

function practice() {
  const list = pool();
  const done = list.filter((q) => ans[q.id] != null).length;
  const right = list.filter((q) => ans[q.id] === q.ans).length;
  $("#view").innerHTML = `<div class="bar"><h1>${esc(title())}</h1><span class="pill">${done}/${list.length} done · ${right} right</span></div>` + list.map(card).join("") + `<div class="row"><span></span><button class="link" id="reset">Reset answers</button></div>`;
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
  const opts = q.opts.map((o, k) => `<button class="opt ${p === k ? "sel" : ""}" data-o="${k}"><b>${L[k]}</b><span>${esc(o)}</span></button>`).join("");
  $("#view").innerHTML = `<div class="bar"><h1>${esc(title())}</h1><span class="pill">${i + 1} of ${list.length}</span></div><div class="prog"><u style="width:${(i / list.length) * 100}%"></u></div>` +
    `<article class="q" style="--pc:${COLORS[q.ti]}"><span class="qn">${i + 1}</span><div><span class="tag">${esc(T[q.ti].n)}</span><p class="qt">${esc(q.text)}</p><div class="opts">${opts}</div></div></article>` +
    `<div class="row"><button class="link" id="exit">End quiz</button><button class="btn" id="next" ${p == null ? "disabled" : ""}>${i + 1 === list.length ? "Finish" : "Next"}</button></div>`;
}

function render() {
  tabsHtml();
  document.querySelectorAll("#mode button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.m === mode)));
  if (mode === "practice") practice(); else quizView();
}

document.addEventListener("click", (e) => {
  const t = e.target.closest("button"); if (!t) return;
  if (t.dataset.t != null) { tab = Number(t.dataset.t); quiz = null; render(); window.scrollTo(0, 0); }
  else if (t.closest("#mode")) { mode = t.dataset.m; quiz = null; render(); }
  else if (t.id === "theme") {
    const el = document.documentElement, dark = getComputedStyle(el).colorScheme === "dark";
    const next = dark ? "light" : "dark"; el.setAttribute("data-theme", next);
    try { localStorage.setItem("mcq-theme", next); } catch (err) {}
  }
  else if (t.id === "keys") $("#guide").hidden = false;
  else if (t.id === "gclose") $("#guide").hidden = true;
  else if (t.id === "reset") { if (confirm("Clear your answers" + (tab < 0 ? "?" : " for " + T[tab].n + "?"))) { pool().forEach((q) => delete ans[q.id]); save(); render(); } }
  else if (t.id === "start") start();
  else if (t.id === "exit") { quiz = null; render(); }
  else if (t.id === "next") { if (quiz.i + 1 === quiz.list.length) quiz.done = true; else quiz.i++; quizView(); window.scrollTo(0, 0); }
  else if (t.classList.contains("opt") && t.dataset.q && ans[t.dataset.q] == null) {
    const q = ALL[t.dataset.q - 1]; ans[q.id] = Number(t.dataset.o); save();
    $("#q" + q.id).outerHTML = card(q);
    const list = pool(), done = list.filter((x) => ans[x.id] != null).length, right = list.filter((x) => ans[x.id] === x.ans).length;
    document.querySelector(".bar .pill").textContent = done + "/" + list.length + " done · " + right + " right";
  }
  else if (t.classList.contains("opt") && quiz && !quiz.done) { quiz.picks[quiz.i] = Number(t.dataset.o); quizView(); }
});

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
  if (e.ctrlKey || e.metaKey || e.altKey || e.repeat) return;
  const k = e.key.toLowerCase(), g = $("#guide");
  if (k === "escape") { g.hidden = true; return; }
  if (k === "?") { g.hidden = !g.hidden; return; }
  if (!g.hidden) return;
  if (k === "enter" && e.target.closest && e.target.closest("button")) return;
  const quizOn = mode === "quiz" && quiz && !quiz.done;
  if (k.length === 1 && "abcd1234".includes(k)) {
    const i = "abcd".includes(k) ? "abcd".indexOf(k) : Number(k) - 1;
    const scope = quizOn ? document.querySelector("#view") : mode === "practice" ? pickCard() : null;
    const o = scope && scope.querySelectorAll(".opt")[i]; if (o) { o.click(); if (!quizOn) { const nx = [...document.querySelectorAll("#view .q:not(.done)")][0]; if (nx) nx.scrollIntoView({ block: "center", behavior: "smooth" }); } }
  } else if (k === "enter" || k === "arrowright") { const n = $("#next"); if (n && !n.disabled) n.click(); }
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
