// ─── DATA ────────────────────────────────────────────────────────────────────

const DEFAULT_PROFILES = {
  andrew: {
    name: 'Andrew', emoji: '💪',
    targets: { kcal: 1690, protein: 200, carbs: 17, fat: 60 },
    bwHistory: [], sessions: [], photos: [],
    program: {
      name: 'PPL + Upper',
      days: [
        {
          id: 'push', label: 'Push', sub: 'Chest · Shoulders · Triceps', color: '#C0421A',
          sections: [
            { label: 'Chest', exercises: [
              { name: 'Barbell bench press', sets: 5, reps: '5/5/12/12/10', weight: '180/185/140/140/140', type: 'compound' },
              { name: 'Barbell incline bench press', sets: 3, reps: '12', weight: '115/115/115', type: 'compound' },
              { name: 'Seated cable fly', sets: 3, reps: '15', weight: '40/40/40', type: 'isolation' },
            ]},
            { label: 'Shoulders', exercises: [
              { name: 'Single arm landmine press', sets: 3, reps: '12', weight: '100/100/100', type: 'compound' },
              { name: 'Cable lateral raise', sets: 3, reps: '20', weight: '15/15/15', type: 'isolation' },
            ]},
            { label: 'Triceps', exercises: [
              { name: 'Cable overhead tricep extension', sets: 3, reps: '12', weight: '115/115/115', type: 'isolation' },
              { name: 'Cable rope tricep extension', sets: 3, reps: '12', weight: '80/80/80', type: 'isolation' },
            ]},
            { label: 'Core', exercises: [
              { name: 'Plank', sets: 3, reps: '40s', weight: 'BW', type: 'core' },
              { name: 'Ab wheel rollout', sets: 3, reps: '9', weight: 'BW', type: 'core' },
            ]},
          ]
        },
        {
          id: 'pull', label: 'Pull', sub: 'Back · Biceps · Rear Delts', color: '#2D6A4F',
          sections: [
            { label: 'Back — horizontal', exercises: [
              { name: 'Barbell row', sets: 4, reps: '12', weight: '170/175/180/185', type: 'compound' },
              { name: 'T-bar row', sets: 3, reps: '12', weight: '110/110/110', type: 'compound' },
            ]},
            { label: 'Back — vertical', exercises: [
              { name: 'Lat pulldown wide grip', sets: 3, reps: '12', weight: '180/180/180', type: 'compound' },
              { name: 'Lat pulldown neutral grip', sets: 3, reps: '12', weight: '165/165/165', type: 'compound' },
            ]},
            { label: 'Rear delt', exercises: [
              { name: 'Cross cable rear delt fly', sets: 3, reps: '15', weight: '20/20/20', type: 'isolation' },
              { name: 'Cable face pull', sets: 3, reps: '20', weight: '55/55/55', type: 'isolation' },
            ]},
            { label: 'Biceps', exercises: [
              { name: 'Cable hammer curl', sets: 3, reps: '15', weight: '55/60/65', type: 'isolation' },
              { name: 'Cable bicep curl', sets: 3, reps: '12', weight: '80/80/80', type: 'isolation' },
              { name: 'Behind the back cable bicep curl', sets: 3, reps: '12', weight: '30/30/30', type: 'isolation' },
            ]},
          ]
        },
        {
          id: 'legs', label: 'Legs', sub: 'Glutes · Quads · Hamstrings', color: '#7B4F8E',
          sections: [
            { label: 'Quads', exercises: [
              { name: 'Back squat', sets: 5, reps: '10', weight: '110/115/120/125/130', type: 'compound' },
              { name: 'Dumbbell Bulgarian split squat', sets: 3, reps: '12', weight: '25/25/25', type: 'compound' },
            ]},
            { label: 'Hamstrings', exercises: [
              { name: 'Barbell Romanian deadlift', sets: 3, reps: '12', weight: '165/165/165', type: 'compound' },
              { name: 'Single leg lying hamstring curl', sets: 3, reps: '12', weight: '30/30/30', type: 'isolation' },
            ]},
            { label: 'Glutes', exercises: [
              { name: 'Cable kickback', sets: 3, reps: '20', weight: '30/30/30', type: 'isolation' },
            ]},
            { label: 'Calves', exercises: [
              { name: 'Barbell calf raise', sets: 3, reps: '20', weight: '145/145/145', type: 'isolation' },
            ]},
            { label: 'Core', exercises: [
              { name: 'Ab wheel rollout', sets: 3, reps: '10', weight: 'BW', type: 'core' },
              { name: 'Hanging knee raise', sets: 3, reps: '12', weight: 'BW', type: 'core' },
            ]},
          ]
        },
        {
          id: 'upper', label: 'Upper', sub: 'Full Upper + Core', color: '#2D4EA0',
          sections: [
            { label: 'Chest + Back — compound', exercises: [
              { name: 'Barbell bench press', sets: 3, reps: '10', weight: '150/155/160', type: 'compound' },
              { name: 'Lat pulldown wide grip', sets: 4, reps: '12', weight: '180/180/180/180', type: 'compound' },
              { name: 'Assisted pull-up', sets: 3, reps: '8', weight: 'BW/BW/BW', type: 'compound' },
              { name: 'Meadows row', sets: 4, reps: '12', weight: '100/100/100/100', type: 'compound' },
            ]},
            { label: 'Shoulders', exercises: [
              { name: 'Barbell shoulder press', sets: 3, reps: '10', weight: '80/85/85', type: 'compound' },
            ]},
            { label: 'Arms', exercises: [
              { name: 'Cable overhead tricep extension', sets: 3, reps: '12', weight: '115/115/115', type: 'isolation' },
              { name: 'Cable bicep curl', sets: 3, reps: '15', weight: '75/80/80', type: 'isolation' },
            ]},
            { label: 'Rear delt + Core', exercises: [
              { name: 'Cable face pull', sets: 3, reps: '20', weight: '55/55/55', type: 'isolation' },
              { name: 'Cable torso rotation', sets: 3, reps: '12 ea', weight: '45/45/45', type: 'core' },
              { name: 'Hanging knee raise', sets: 3, reps: '13', weight: 'BW', type: 'core' },
            ]},
          ]
        },
      ]
    }
  },
  esme: {
    name: 'Esme', emoji: '🌸',
    targets: { kcal: 1450, protein: 110, carbs: 90, fat: 60 },
    bwHistory: [], sessions: [], photos: [],
    program: {
      name: 'PPL + Upper',
      days: [
        {
          id: 'push', label: 'Push', sub: 'Chest · Shoulders · Triceps', color: '#C0421A',
          sections: [
            { label: 'Shoulders', exercises: [
              { name: 'Dumbbell shoulder press', sets: 3, reps: '10–12', weight: '20', type: 'compound' },
              { name: 'Cable lateral raise', sets: 3, reps: '15–20', weight: '', type: 'isolation' },
              { name: 'One arm landmine press', sets: 3, reps: '10–12 ea', weight: '', type: 'compound' },
            ]},
            { label: 'Chest', exercises: [
              { name: 'Barbell bench press — flat', sets: 3, reps: '8–10', weight: '45', type: 'compound' },
              { name: 'Seated cable fly', sets: 3, reps: '12–15', weight: '', type: 'isolation' },
            ]},
            { label: 'Triceps', exercises: [
              { name: 'Tricep rope pushdown', sets: 3, reps: '12–15', weight: '', type: 'isolation' },
              { name: 'Overhead cable tricep extension', sets: 3, reps: '10–12', weight: '', type: 'isolation' },
            ]},
            { label: 'Core', exercises: [
              { name: 'Plank', sets: 3, reps: '35–45s', weight: 'BW', type: 'core' },
            ]},
          ]
        },
        {
          id: 'pull', label: 'Pull', sub: 'Back · Biceps · Rear Delts', color: '#2D6A4F',
          sections: [
            { label: 'Back — vertical', exercises: [
              { name: 'Lat pulldown — wide grip', sets: 4, reps: '10–12', weight: '', type: 'compound' },
              { name: 'Band-assisted pull-up', sets: 3, reps: '5–8', weight: 'Band #5', type: 'compound' },
            ]},
            { label: 'Back — horizontal', exercises: [
              { name: 'Seated cable row', sets: 3, reps: '10–12', weight: '', type: 'compound' },
              { name: 'Single arm dumbbell row', sets: 3, reps: '10–12 ea', weight: '', type: 'compound' },
            ]},
            { label: 'Rear delt', exercises: [
              { name: 'Cable face pull', sets: 3, reps: '15–20', weight: '', type: 'isolation' },
              { name: 'Rear delt dumbbell fly', sets: 3, reps: '15', weight: '', type: 'isolation' },
            ]},
            { label: 'Biceps', exercises: [
              { name: 'Dumbbell bicep curl', sets: 3, reps: '12', weight: '', type: 'isolation' },
              { name: 'Hammer curl', sets: 3, reps: '12', weight: '', type: 'isolation' },
            ]},
            { label: 'Core', exercises: [
              { name: 'Dead bug', sets: 3, reps: '10 ea side', weight: 'BW', type: 'core' },
            ]},
          ]
        },
        {
          id: 'legs', label: 'Legs', sub: 'Glutes · Quads · Hamstrings', color: '#7B4F8E',
          sections: [
            { label: 'Glutes — primary', exercises: [
              { name: 'Barbell hip thrust', sets: 4, reps: '10–12', weight: '55', type: 'compound' },
              { name: 'Cable kickback', sets: 3, reps: '15–20 ea', weight: '', type: 'isolation' },
              { name: 'Banded clamshell', sets: 3, reps: '20 ea', weight: 'Band', type: 'isolation' },
            ]},
            { label: 'Hamstrings', exercises: [
              { name: 'Barbell Romanian deadlift', sets: 3, reps: '10–12', weight: '55', type: 'compound' },
              { name: 'Standing cable leg curl', sets: 3, reps: '12–15', weight: '', type: 'isolation' },
            ]},
            { label: 'Quads', exercises: [
              { name: 'Goblet squat', sets: 3, reps: '12', weight: '20', type: 'compound' },
              { name: 'Bulgarian split squat', sets: 3, reps: '10–12 ea', weight: '12', type: 'compound' },
            ]},
            { label: 'Core', exercises: [
              { name: 'Hanging leg raise', sets: 3, reps: '10–15', weight: 'BW', type: 'core' },
              { name: 'Ab wheel rollout', sets: 3, reps: '8–10', weight: 'BW', type: 'core' },
            ]},
          ]
        },
        {
          id: 'upper', label: 'Upper', sub: 'Full Upper + Core', color: '#2D4EA0',
          sections: [
            { label: 'Chest + Back — compound', exercises: [
              { name: 'Barbell bench press — flat', sets: 3, reps: '10', weight: '45', type: 'compound' },
              { name: 'Lat pulldown — wide grip', sets: 4, reps: '12', weight: '', type: 'compound' },
              { name: 'Band-assisted pull-up', sets: 3, reps: '5–8', weight: 'Band #5', type: 'compound' },
              { name: 'Single arm dumbbell row', sets: 4, reps: '12 ea', weight: '', type: 'compound' },
            ]},
            { label: 'Shoulders', exercises: [
              { name: 'Dumbbell Arnold press', sets: 3, reps: '10', weight: '', type: 'compound' },
            ]},
            { label: 'Arms', exercises: [
              { name: 'Cable overhead tricep extension', sets: 3, reps: '12', weight: '', type: 'isolation' },
              { name: 'Cable bicep curl', sets: 3, reps: '15', weight: '', type: 'isolation' },
            ]},
            { label: 'Rear delt + Core', exercises: [
              { name: 'Cable face pull', sets: 3, reps: '20', weight: '', type: 'isolation' },
              { name: 'Cable torso rotation', sets: 3, reps: '12 ea', weight: '', type: 'core' },
              { name: 'Hanging knee raise', sets: 3, reps: '10–13', weight: 'BW', type: 'core' },
            ]},
          ]
        },
      ]
    }
  }
};

const REST_TIMES = { compound: 120, isolation: 60, core: 45 };

// ─── STATE ───────────────────────────────────────────────────────────────────
let state = {
  activeProfile: 'esme',
  profiles: null,
  currentDay: 0,
  currentView: 'workout', // workout | history | nutrition | weight | photos | program
  setData: {},
  sessionDate: new Date().toISOString().split('T')[0],
  timer: { active: false, remaining: 0, total: 0, interval: null },
  editMode: false,
};

function loadState() {
  try {
    const saved = localStorage.getItem('warrior_app_v1');
    if (saved) {
      const parsed = JSON.parse(saved);
      state.profiles = parsed.profiles || JSON.parse(JSON.stringify(DEFAULT_PROFILES));
      state.activeProfile = parsed.activeProfile || 'esme';
    } else {
      state.profiles = JSON.parse(JSON.stringify(DEFAULT_PROFILES));
    }
  } catch(e) {
    state.profiles = JSON.parse(JSON.stringify(DEFAULT_PROFILES));
  }
}

function saveState() {
  try {
    localStorage.setItem('warrior_app_v1', JSON.stringify({
      profiles: state.profiles,
      activeProfile: state.activeProfile
    }));
  } catch(e) {}
}

function profile() { return state.profiles[state.activeProfile]; }
function program() { return profile().program; }
function days() { return program().days; }
function day() { return days()[state.currentDay]; }

// ─── TIMER ───────────────────────────────────────────────────────────────────
function startTimer(seconds) {
  clearInterval(state.timer.interval);
  state.timer.active = true;
  state.timer.remaining = seconds;
  state.timer.total = seconds;
  renderTimer();
  state.timer.interval = setInterval(() => {
    state.timer.remaining--;
    if (state.timer.remaining <= 0) {
      clearInterval(state.timer.interval);
      state.timer.active = false;
      state.timer.remaining = 0;
      playBeep();
      renderTimer();
    } else {
      renderTimer();
    }
  }, 1000);
}

function skipTimer() {
  clearInterval(state.timer.interval);
  state.timer.active = false;
  state.timer.remaining = 0;
  renderTimer();
}

function addTime(secs) {
  state.timer.remaining = Math.max(0, state.timer.remaining + secs);
  renderTimer();
}

function playBeep() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    [0, 0.15, 0.3].forEach(delay => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.frequency.value = 880;
      o.type = 'sine';
      g.gain.setValueAtTime(0.4, ctx.currentTime + delay);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.18);
      o.start(ctx.currentTime + delay);
      o.stop(ctx.currentTime + delay + 0.2);
    });
  } catch(e) {}
}

function renderTimer() {
  const el = document.getElementById('timer-bar');
  if (!el) return;
  if (!state.timer.active && state.timer.remaining === 0) {
    el.style.display = 'none';
    return;
  }
  el.style.display = 'flex';
  const mins = Math.floor(state.timer.remaining / 60);
  const secs = state.timer.remaining % 60;
  const pct = state.timer.total > 0 ? (state.timer.remaining / state.timer.total * 100) : 0;
  document.getElementById('timer-time').textContent = `${mins}:${secs.toString().padStart(2,'0')}`;
  document.getElementById('timer-fill').style.width = pct + '%';
}

// ─── SET DATA ────────────────────────────────────────────────────────────────
function initSetData() {
  const key = `${state.activeProfile}_${state.currentDay}`;
  if (!state.setData[key]) {
    state.setData[key] = [];
    let ei = 0;
    day().sections.forEach(sec => {
      sec.exercises.forEach(ex => {
        state.setData[key][ei] = Array.from({length: ex.sets}, () => ({ reps:'', weight:'', rpe:'', done:false, effort:'' }));
        ei++;
      });
    });
  }
  return state.setData[key];
}

function getSets() { return initSetData(); }

function toggleSet(ei, si) {
  const sets = getSets();
  if (!sets[ei] || !sets[ei][si]) return;
  sets[ei][si].done = !sets[ei][si].done;
  if (sets[ei][si].done) {
    const exType = getExType(ei);
    startTimer(REST_TIMES[exType] || 60);
  }
  checkPR(ei);
  renderWorkout();
  updateProgress();
}

function getSetWeight(weightStr, si) {
  if (!weightStr || weightStr === 'BW' || weightStr.startsWith('Band')) return weightStr || '';
  const parts = weightStr.split('/');
  return parts[si] !== undefined ? parts[si] : parts[parts.length - 1];
}

function getExType(ei) {
  let idx = 0;
  for (const sec of day().sections) {
    for (const ex of sec.exercises) {
      if (idx === ei) return ex.type || 'isolation';
      idx++;
    }
  }
  return 'isolation';
}

function updateSetField(ei, si, field, val) {
  const sets = getSets();
  if (sets[ei] && sets[ei][si]) sets[ei][si][field] = val;
}

function setEffort(ei, si, level) {
  const sets = getSets();
  if (sets[ei] && sets[ei][si]) {
    sets[ei][si].effort = level;
  }
  renderWorkout();
}

// ─── AUTO PROGRESSION ────────────────────────────────────────────────────────
const EFFORT_INCREMENT = { easy: 5, right: 2.5, hard: 0 };
const ISOLATION_INCREMENT = { easy: 2.5, right: 2.5, hard: 0 };

function applyProgression() {
  const sets = getSets();
  const exs = getAllExercises();
  const di = state.currentDay;
  let progressCount = 0;

  exs.forEach((ex, ei) => {
    if (ex.type === 'core') return; // skip core
    const exSets = sets[ei] || [];
    const effortRatings = exSets.filter(s => s.effort).map(s => s.effort);
    if (effortRatings.length === 0) return;

    // Majority vote on effort
    const counts = { easy: 0, right: 0, hard: 0 };
    effortRatings.forEach(e => { if (counts[e] !== undefined) counts[e]++; });
    const dominant = Object.entries(counts).sort((a,b) => b[1]-a[1])[0][0];

    const isIsolation = ex.type === 'isolation';
    const inc = isIsolation ? ISOLATION_INCREMENT[dominant] : EFFORT_INCREMENT[dominant];
    if (inc === 0) return;

    // Find this exercise in the program and update weights
    let secIdx = 0, exInSec = 0, running = 0;
    const d = state.profiles[state.activeProfile].program.days[di];
    outer: for (let s = 0; s < d.sections.length; s++) {
      for (let e = 0; e < d.sections[s].exercises.length; e++) {
        if (running === ei) { secIdx = s; exInSec = e; break outer; }
        running++;
      }
    }

    const progEx = d.sections[secIdx].exercises[exInSec];
    const currentWeights = progEx.weight.split('/');
    const newWeights = currentWeights.map(w => {
      if (w === 'BW' || w.startsWith('Band')) return w;
      const num = parseFloat(w);
      return isNaN(num) ? w : String(Math.round((num + inc) * 4) / 4); // round to nearest 0.25
    });
    progEx.weight = newWeights.join('/');
    progressCount++;
  });

  if (progressCount > 0) {
    saveState();
    return progressCount;
  }
  return 0;
}

function addSet(ei) {
  const sets = getSets();
  if (!sets[ei]) sets[ei] = [];
  sets[ei].push({ reps:'', weight:'', rpe:'', done:false, effort:'' });
  renderWorkout();
}

function checkPR(ei) {
  const exName = getExName(ei);
  const sessions = profile().sessions || [];
  let maxPrev = 0;
  sessions.forEach(s => {
    (s.exercises || []).forEach(ex => {
      if (ex.name === exName) (ex.sets || []).forEach(set => {
        const w = parseFloat(set.weight);
        if (!isNaN(w) && w > maxPrev) maxPrev = w;
      });
    });
  });
  if (maxPrev === 0) return false;
  const sets = getSets();
  const curMax = Math.max(...(sets[ei] || []).map(s => parseFloat(s.weight) || 0));
  return curMax > maxPrev;
}

function getExName(ei) {
  let idx = 0;
  for (const sec of day().sections) {
    for (const ex of sec.exercises) {
      if (idx === ei) return ex.name;
      idx++;
    }
  }
  return '';
}

function getAllExercises() {
  const arr = [];
  day().sections.forEach(sec => sec.exercises.forEach(ex => arr.push(ex)));
  return arr;
}

// ─── PROGRESS ────────────────────────────────────────────────────────────────
function updateProgress() {
  const sets = getSets();
  const exs = getAllExercises();
  let totalSets = 0, doneSets = 0;
  exs.forEach((ex, ei) => {
    (sets[ei] || []).forEach(s => { totalSets++; if (s.done) doneSets++; });
  });
  const pct = totalSets > 0 ? Math.round(doneSets / totalSets * 100) : 0;
  const el = document.getElementById('prog-bar');
  const lbl = document.getElementById('prog-label');
  const pctEl = document.getElementById('prog-pct');
  if (el) el.style.width = pct + '%';
  if (lbl) lbl.textContent = `${doneSets} of ${totalSets} sets done`;
  if (pctEl) pctEl.textContent = pct + '%';
}

// ─── SAVE SESSION ────────────────────────────────────────────────────────────
function saveSession() {
  const notes = document.getElementById('session-notes')?.value || '';
  const bw = document.getElementById('session-bw')?.value || '';
  const sets = getSets();
  const exs = getAllExercises();
  const exercises = exs.map((ex, ei) => ({
    name: ex.name,
    sets: (sets[ei] || []).filter(s => s.reps || s.weight)
  })).filter(ex => ex.sets.length > 0);
  if (exercises.length === 0) { showToast('Log at least one set first'); return; }
  const session = {
    date: state.sessionDate,
    day: day().label,
    dayId: day().id,
    bodyweight: bw,
    exercises,
    notes,
    ts: Date.now()
  };
  if (!profile().sessions) profile().sessions = [];
  profile().sessions.unshift(session);
  if (bw) logBodyweight(bw, state.sessionDate);

  // Apply progressive overload based on effort ratings
  const progCount = applyProgression();

  saveState();
  if (progCount > 0) {
    showToast(`Session saved ✓ · ${progCount} exercise${progCount > 1 ? 's' : ''} progressed 📈`);
  } else {
    showToast('Session saved ✓');
  }
  clearDay();
}

function clearDay() {
  const key = `${state.activeProfile}_${state.currentDay}`;
  delete state.setData[key];
  document.getElementById('session-notes').value = '';
  document.getElementById('session-bw').value = '';
  initSetData();
  renderWorkout();
  updateProgress();
}

// ─── BODYWEIGHT ───────────────────────────────────────────────────────────────
function logBodyweight(val, date) {
  if (!profile().bwHistory) profile().bwHistory = [];
  const existing = profile().bwHistory.findIndex(e => e.date === date);
  if (existing >= 0) profile().bwHistory[existing].weight = parseFloat(val);
  else profile().bwHistory.push({ date, weight: parseFloat(val) });
  profile().bwHistory.sort((a,b) => a.date.localeCompare(b.date));
  saveState();
}

// ─── PROGRAM EDIT ────────────────────────────────────────────────────────────
function swapExercise(dayIdx, secIdx, exIdx) {
  const newName = prompt('New exercise name:');
  if (!newName) return;
  const ex = state.profiles[state.activeProfile].program.days[dayIdx].sections[secIdx].exercises[exIdx];
  ex.name = newName.trim();
  saveState();
  renderWorkout();
  showToast('Exercise updated');
}

function pushNewProgram(profileKey) {
  const name = prompt('New program name (or press OK to keep current name):');
  const json = prompt('Paste new program JSON (or press Cancel to abort):');
  if (!json) return;
  try {
    const parsed = JSON.parse(json);
    state.profiles[profileKey].program = parsed;
    if (name) state.profiles[profileKey].program.name = name;
    saveState();
    renderAll();
    showToast('Program updated — history preserved');
  } catch(e) { showToast('Invalid JSON'); }
}

// ─── RENDER HELPERS ──────────────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2400);
}

function switchProfile(key) {
  state.activeProfile = key;
  state.currentDay = 0;
  saveState();
  renderAll();
}

function switchDay(idx) {
  state.currentDay = idx;
  initSetData();
  renderWorkout();
  updateProgress();
  document.querySelectorAll('.day-tab').forEach((t,i) => t.classList.toggle('active', i === idx));
  window.scrollTo(0,0);
}

function switchView(view) {
  state.currentView = view;
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view === view));
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const el = document.getElementById('view-' + view);
  if (el) el.classList.add('active');
  if (view === 'history') renderHistory();
  if (view === 'weight') renderWeightChart();
  if (view === 'photos') renderPhotos();
  if (view === 'nutrition') renderNutrition();
  if (view === 'program') renderProgramEdit();
  window.scrollTo(0,0);
}

// ─── RENDER WORKOUT ──────────────────────────────────────────────────────────
function renderWorkout() {
  const container = document.getElementById('exercises-container');
  if (!container) return;
  const sets = getSets();
  const d = day();
  let ei = 0;
  let html = '';
  d.sections.forEach(sec => {
    html += `<div class="section-label">${sec.label}</div>`;
    sec.exercises.forEach((ex, localI) => {
      const myEi = ei;
      const exSets = sets[myEi] || [];
      const allDone = exSets.length > 0 && exSets.every(s => s.done);
      const isPR = checkPR(myEi);
      const restSec = REST_TIMES[ex.type] || 60;
      const restLabel = restSec >= 120 ? '2 min rest' : restSec === 60 ? '60s rest' : '45s rest';
      html += `<div class="ex-block${allDone ? ' done' : ''}" id="exblock-${myEi}">
        <div class="ex-header">
          <div class="ex-title-row">
            <span class="ex-name-text">${ex.name}</span>
            ${isPR ? '<span class="pr-badge">PR ✦</span>' : ''}
          </div>
          <div class="ex-meta">${ex.sets} sets · ${ex.reps}${ex.weight && ex.weight !== 'BW' && ex.weight !== 'Band' && !ex.weight.startsWith('Band') ? ' · ' + ex.weight + ' lbs' : ex.weight ? ' · ' + ex.weight : ''} · <span class="rest-label">${restLabel}</span></div>
        </div>
        <div class="sets-wrap">
          <div class="sets-header"><span></span><span>#</span><span>Reps</span><span>Weight</span><span>RPE</span></div>
          <div id="setrows-${myEi}">`;
      exSets.forEach((s, si) => {
        const setWeight = getSetWeight(ex.weight, si);
        const weightPH = (setWeight && setWeight !== 'BW' && !setWeight.startsWith('Band')) ? setWeight : 'lbs';
        const effortBtns = ex.type !== 'core' ? `
          <div class="effort-row${s.done ? '' : ' effort-hidden'}" id="effort-${myEi}-${si}">
            <span class="effort-label">How'd it feel?</span>
            <button class="effort-btn${s.effort==='easy'?' effort-selected':''}" onclick="setEffort(${myEi},${si},'easy')">😤 Easy +5</button>
            <button class="effort-btn${s.effort==='right'?' effort-selected':''}" onclick="setEffort(${myEi},${si},'right')">💪 Right +2.5</button>
            <button class="effort-btn${s.effort==='hard'?' effort-selected':''}" onclick="setEffort(${myEi},${si},'hard')">🔥 Hard =</button>
          </div>` : '';
        html += `<div class="set-row${s.done ? ' set-done' : ''}" id="setrow-${myEi}-${si}">
          <div class="set-cb" onclick="toggleSet(${myEi},${si})">
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div class="set-num">${si+1}</div>
          <input type="text" inputmode="decimal" placeholder="${ex.reps ? ex.reps.split('/')[Math.min(si, ex.reps.split('/').length-1)] : 'reps'}" value="${s.reps}" onchange="updateSetField(${myEi},${si},'reps',this.value)">
          <input type="text" inputmode="decimal" placeholder="${weightPH}" value="${s.weight}" onchange="updateSetField(${myEi},${si},'weight',this.value);checkPR(${myEi})">
          <input type="text" inputmode="decimal" placeholder="RPE" value="${s.rpe}" onchange="updateSetField(${myEi},${si},'rpe',this.value)">
        </div>${effortBtns}`;
      });
      html += `</div>
          <button class="add-set" onclick="addSet(${myEi})">+ add set</button>
        </div>`;
      if (state.editMode) {
        const di = state.currentDay;
        let secIdx = 0, exInSec = 0, running = 0;
        for (let s2 = 0; s2 < d.sections.length; s2++) {
          for (let e2 = 0; e2 < d.sections[s2].exercises.length; e2++) {
            if (running === myEi) { secIdx = s2; exInSec = e2; }
            running++;
          }
        }
        html += `<button class="swap-btn" onclick="swapExercise(${di},${secIdx},${exInSec})">✏️ Swap exercise</button>`;
      }
      html += `</div>`;
      ei++;
    });
  });
  container.innerHTML = html;
}

// ─── RENDER HISTORY ──────────────────────────────────────────────────────────
function renderHistory() {
  const el = document.getElementById('history-list');
  if (!el) return;
  const sessions = profile().sessions || [];
  if (!sessions.length) { el.innerHTML = '<div class="empty">No sessions logged yet</div>'; return; }
  el.innerHTML = sessions.map((s,i) => `
    <div class="hist-card">
      <div class="hist-top">
        <div><div class="hist-date">${s.date}</div><div class="hist-day">${s.day} day</div></div>
        <div style="display:flex;align-items:center;gap:8px;">
          ${s.bodyweight ? `<span class="hist-bw">${s.bodyweight} lbs</span>` : ''}
          <button class="hist-del" onclick="deleteSession(${i})">✕</button>
        </div>
      </div>
      ${(s.exercises||[]).map(ex => `
        <div class="hist-ex">${ex.name}</div>
        <div class="hist-ex-sets">${(ex.sets||[]).map(set =>
          `${set.reps||'?'} @ ${set.weight||'?'}${set.rpe?' · RPE '+set.rpe:''}`
        ).join(' · ')}</div>`).join('')}
      ${s.notes ? `<div class="hist-notes">${s.notes}</div>` : ''}
    </div>`).join('');
}

function deleteSession(idx) {
  if (!confirm('Delete this session?')) return;
  profile().sessions.splice(idx,1);
  saveState();
  renderHistory();
}

// ─── RENDER WEIGHT CHART ─────────────────────────────────────────────────────
function renderWeightChart() {
  const el = document.getElementById('weight-chart-area');
  if (!el) return;
  const hist = (profile().bwHistory || []).slice(-30);
  if (hist.length < 2) { el.innerHTML = '<div class="empty">Log at least 2 weigh-ins to see chart</div>'; return; }
  const weights = hist.map(h => h.weight);
  const min = Math.min(...weights) - 2;
  const max = Math.max(...weights) + 2;
  const W = 320, H = 140, padL = 36, padB = 24, padT = 10, padR = 10;
  const xScale = i => padL + (i / (hist.length-1)) * (W - padL - padR);
  const yScale = w => H - padB - ((w - min) / (max - min)) * (H - padB - padT);
  const pts = hist.map((h,i) => `${xScale(i)},${yScale(h.weight)}`).join(' ');
  const firstDate = hist[0].date.slice(5);
  const lastDate = hist[hist.length-1].date.slice(5);
  el.innerHTML = `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto;">
    <polyline points="${pts}" fill="none" stroke="#8B3A52" stroke-width="2" stroke-linejoin="round"/>
    ${hist.map((h,i) => `<circle cx="${xScale(i)}" cy="${yScale(h.weight)}" r="3" fill="#8B3A52"/>`).join('')}
    <text x="${padL}" y="${H-6}" font-size="10" fill="#8a8780">${firstDate}</text>
    <text x="${W-padR}" y="${H-6}" font-size="10" fill="#8a8780" text-anchor="end">${lastDate}</text>
    <text x="${padL-4}" y="${yScale(weights[weights.length-1])+4}" font-size="10" fill="#8B3A52" text-anchor="end">${weights[weights.length-1]}</text>
  </svg>`;
}

// ─── RENDER NUTRITION ────────────────────────────────────────────────────────
function renderNutrition() {
  const el = document.getElementById('nutrition-content');
  if (!el) return;
  const t = profile().targets;
  el.innerHTML = `
    <div class="nutr-grid">
      <div class="nutr-card"><div class="nutr-val">${t.kcal}</div><div class="nutr-label">Calories</div></div>
      <div class="nutr-card"><div class="nutr-val">${t.protein}g</div><div class="nutr-label">Protein</div></div>
      <div class="nutr-card"><div class="nutr-val">${t.carbs}g</div><div class="nutr-label">Net Carbs</div></div>
      <div class="nutr-card"><div class="nutr-val">${t.fat}g</div><div class="nutr-label">Fat</div></div>
    </div>`;
}

// ─── RENDER PHOTOS ───────────────────────────────────────────────────────────
function renderPhotos() {
  const el = document.getElementById('photos-list');
  if (!el) return;
  const photos = profile().photos || [];
  if (!photos.length) { el.innerHTML = '<div class="empty">No photos logged yet</div>'; return; }
  el.innerHTML = photos.slice().reverse().map((p,i) => `
    <div class="photo-card">
      <div class="photo-date">${p.date} · ${p.weight ? p.weight + ' lbs' : ''}</div>
      <img src="${p.dataUrl}" style="width:100%;border-radius:8px;margin-top:6px;">
      <div class="photo-note">${p.note || ''}</div>
    </div>`).join('');
}

function handlePhoto(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    const date = document.getElementById('photo-date').value || new Date().toISOString().split('T')[0];
    const weight = document.getElementById('photo-weight').value;
    const note = document.getElementById('photo-note').value;
    if (!profile().photos) profile().photos = [];
    profile().photos.push({ date, weight, note, dataUrl: ev.target.result, ts: Date.now() });
    saveState();
    renderPhotos();
    showToast('Photo saved');
  };
  reader.readAsDataURL(file);
}

// ─── RENDER PROGRAM EDIT ─────────────────────────────────────────────────────
function renderProgramEdit() {
  const el = document.getElementById('program-content');
  if (!el) return;
  const p = program();
  el.innerHTML = `
    <div class="prog-name">${p.name}</div>
    ${days().map((d,di) => `
      <div class="prog-day-card">
        <div class="prog-day-label" style="color:${d.color}">${d.label} — ${d.sub}</div>
        ${d.sections.map((sec,si) => `
          <div class="prog-sec-label">${sec.label}</div>
          ${sec.exercises.map((ex,ei) => `
            <div class="prog-ex-row">
              <span>${ex.name} · ${ex.sets}×${ex.reps}</span>
              <button class="swap-btn-sm" onclick="swapExerciseFromEdit(${di},${si},${ei})">Swap</button>
            </div>`).join('')}
        `).join('')}
      </div>`).join('')}`;
}

function swapExerciseFromEdit(di, si, ei) {
  const newName = prompt('New exercise name:');
  if (!newName) return;
  state.profiles[state.activeProfile].program.days[di].sections[si].exercises[ei].name = newName.trim();
  saveState();
  renderProgramEdit();
  showToast('Exercise updated — history preserved');
}

// ─── RENDER ALL ──────────────────────────────────────────────────────────────
function renderAll() {
  // Profile buttons
  document.querySelectorAll('.profile-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.profile === state.activeProfile);
  });
  // Day tabs
  const tabsEl = document.getElementById('day-tabs');
  if (tabsEl) {
    tabsEl.innerHTML = days().map((d,i) => `
      <button class="day-tab${i === state.currentDay ? ' active' : ''}" onclick="switchDay(${i})" style="${i === state.currentDay ? 'border-color:'+d.color+';color:'+d.color : ''}">
        ${d.label}
      </button>`).join('');
  }
  initSetData();
  renderWorkout();
  updateProgress();
  switchView(state.currentView);
}

// ─── INIT ────────────────────────────────────────────────────────────────────
// Init called by lock screen in index.html
