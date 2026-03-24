// =========================================
// mbti field guide — main app logic
// =========================================

(function() {
    // ===== STATE =====
    let currentPage = 'game';
    let gameState = {
        currentQuestion: 0,
        scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 },
        answers: []
    };
    let storyStep = 0;
    const TOTAL_STORY_STEPS = 5;

    // ===== INIT =====
    document.addEventListener('DOMContentLoaded', () => {
        initNav();
        initTypesGrid();
        initStory();
        initGame();
        handleHash();
        window.addEventListener('hashchange', handleHash);
    });

    // ===== NAVIGATION =====
    function initNav() {
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.preventDefault();
                const page = tab.dataset.page;
                window.location.hash = page;
            });
        });
    }

    function handleHash() {
        let hash = window.location.hash.replace('#', '') || 'game';
        // handle type detail pages
        if (hash.startsWith('type/')) {
            const code = hash.split('/')[1].toUpperCase();
            if (TYPES_DATA[code]) {
                showPage('type-detail');
                renderTypeDetail(code);
                updateNav('types');
                return;
            }
        }
        showPage(hash);
        updateNav(hash);
    }

    function showPage(page) {
        document.querySelectorAll('.page').forEach(p => {
            p.classList.remove('active');
        });
        const el = document.getElementById('page-' + page);
        if (el) {
            el.classList.add('active');
            currentPage = page;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    function updateNav(page) {
        document.querySelectorAll('.nav-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.page === page);
        });
    }

    // ===== TYPES GRID =====
    function initTypesGrid() {
        const grid = document.getElementById('types-grid');
        const order = ['INTJ','INTP','ENTJ','ENTP','INFJ','INFP','ENFJ','ENFP','ISTJ','ISFJ','ESTJ','ESFJ','ISTP','ISFP','ESTP','ESFP'];
        grid.innerHTML = order.map(code => {
            const t = TYPES_DATA[code];
            return `
                <a href="#type/${code.toLowerCase()}" class="type-card">
                    <img src="${t.avatar}" alt="${code}">
                    <span class="type-code">${code}</span>
                    <span class="type-title">${t.nickname}</span>
                    <span class="type-hearts">${t.hearts}</span>
                </a>
            `;
        }).join('');
    }

    // ===== TYPE DETAIL =====
    function renderTypeDetail(code) {
        const t = TYPES_DATA[code];
        if (!t) return;
        const container = document.getElementById('type-detail-content');
        container.innerHTML = `
            <div class="type-hero">
                <img src="${t.avatar}" alt="${code}">
                <span class="type-code">${code}</span>
                <span class="type-nickname">${t.nickname}</span>
                ${t.hearts ? `<span class="type-hearts-detail">${t.hearts}</span>` : ''}
            </div>

            <div class="type-section">
                <div class="text-box">
                    <p>${t.description}</p>
                </div>
            </div>

            <div class="type-section">
                <h3 class="section-title pink">damla's take</h3>
                <div class="text-box damla-note">
                    <p>${t.damlaNote}</p>
                </div>
            </div>

            <div class="type-section">
                <h3 class="section-title gold">how to spot them</h3>
                <div class="text-box">
                    <ul class="observe-list">
                        ${t.howToSpot.map(s => `<li>${s}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <div class="type-section">
                <h3 class="section-title green">green flags</h3>
                <div class="text-box">
                    <ul class="flag-list green">
                        ${t.greenFlags.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <div class="type-section">
                <h3 class="section-title red">red flags</h3>
                <div class="text-box">
                    <ul class="flag-list red">
                        ${t.redFlags.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <div class="type-section">
                <h3 class="section-title blue">famous ${code}s</h3>
                <div class="text-box">
                    <ul class="famous-list">
                        ${t.famous.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    // ===== STORY (WHAT IS MBTI) =====
    function initStory() {
        // build dots
        const dotsContainer = document.getElementById('story-dots');
        for (let i = 0; i < TOTAL_STORY_STEPS; i++) {
            const dot = document.createElement('div');
            dot.className = 'story-dot' + (i === 0 ? ' active' : '');
            dotsContainer.appendChild(dot);
        }

        document.getElementById('story-prev').addEventListener('click', () => {
            if (storyStep > 0) {
                storyStep--;
                updateStory();
            }
        });

        document.getElementById('story-next').addEventListener('click', () => {
            if (storyStep < TOTAL_STORY_STEPS - 1) {
                storyStep++;
                updateStory();
            }
        });
    }

    function updateStory() {
        document.querySelectorAll('.story-step').forEach(step => {
            step.classList.remove('story-step-active');
        });
        const active = document.querySelector(`.story-step[data-step="${storyStep}"]`);
        if (active) active.classList.add('story-step-active');

        // dots
        document.querySelectorAll('.story-dot').forEach((dot, i) => {
            dot.className = 'story-dot';
            if (i < storyStep) dot.classList.add('done');
            if (i === storyStep) dot.classList.add('active');
        });

        // buttons
        document.getElementById('story-prev').disabled = storyStep === 0;
        const nextBtn = document.getElementById('story-next');
        if (storyStep === TOTAL_STORY_STEPS - 1) {
            nextBtn.textContent = 'done!';
            nextBtn.disabled = true;
        } else {
            nextBtn.textContent = 'next >';
            nextBtn.disabled = false;
        }
    }

    // ===== GAME =====
    function initGame() {
        document.getElementById('start-game-btn').addEventListener('click', startGame);
        document.getElementById('play-again-btn').addEventListener('click', startGame);
        document.getElementById('see-type-btn').addEventListener('click', () => {
            const result = getGameResult();
            window.location.hash = 'type/' + result.toLowerCase();
        });
    }

    function startGame() {
        gameState = {
            currentQuestion: 0,
            scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 },
            answers: []
        };
        document.getElementById('game-intro').classList.add('hidden');
        document.getElementById('game-result').classList.add('hidden');
        document.getElementById('game-play').classList.remove('hidden');
        renderQuestion();
    }

    function renderQuestion() {
        const q = GAME_QUESTIONS[gameState.currentQuestion];
        const total = GAME_QUESTIONS.length;
        const progress = ((gameState.currentQuestion) / total) * 100;

        document.getElementById('progress-fill').style.width = progress + '%';
        document.getElementById('progress-text').textContent = (gameState.currentQuestion + 1) + ' / ' + total;

        document.getElementById('q-context').textContent = q.context;
        document.getElementById('q-text').textContent = q.question;

        const optionsEl = document.getElementById('q-options');
        const keys = ['a', 'b', 'c', 'd'];
        optionsEl.innerHTML = q.options.map((opt, i) => `
            <button class="q-option" data-value="${opt.value}" data-index="${i}">
                <span class="option-key">${keys[i]}</span>
                <span>${opt.text}</span>
            </button>
        `).join('');

        // animate the card
        const card = document.getElementById('question-card');
        card.style.animation = 'none';
        card.offsetHeight; // reflow
        card.style.animation = 'slideUp 0.35s ease';

        // attach click handlers
        optionsEl.querySelectorAll('.q-option').forEach(btn => {
            btn.addEventListener('click', () => selectAnswer(btn));
        });
    }

    function selectAnswer(btn) {
        const value = btn.dataset.value;
        gameState.scores[value]++;
        gameState.answers.push(value);
        gameState.currentQuestion++;

        // visual feedback
        btn.classList.add('selected');

        setTimeout(() => {
            if (gameState.currentQuestion < GAME_QUESTIONS.length) {
                renderQuestion();
            } else {
                showResult();
            }
        }, 300);
    }

    function getGameResult() {
        const s = gameState.scores;
        const type =
            (s.E >= s.I ? 'E' : 'I') +
            (s.S >= s.N ? 'S' : 'N') +
            (s.T >= s.F ? 'T' : 'F') +
            (s.J >= s.P ? 'J' : 'P');
        return type;
    }

    function showResult() {
        const result = getGameResult();
        const t = TYPES_DATA[result];
        const s = gameState.scores;

        document.getElementById('game-play').classList.add('hidden');
        document.getElementById('game-result').classList.remove('hidden');
        document.getElementById('progress-fill').style.width = '100%';

        document.getElementById('result-avatar').src = t.avatar;
        document.getElementById('result-avatar').alt = result;
        document.getElementById('result-type-code').textContent = result;
        document.getElementById('result-type-nick').textContent = t.nickname;

        // breakdown
        const axes = [
            { left: 'E', right: 'I' },
            { left: 'S', right: 'N' },
            { left: 'T', right: 'F' },
            { left: 'J', right: 'P' }
        ];

        document.getElementById('result-breakdown').innerHTML = axes.map(ax => {
            const chosen = s[ax.left] >= s[ax.right] ? ax.left : ax.right;
            const other = chosen === ax.left ? ax.right : ax.left;
            return `
                <div class="result-axis">
                    <span class="${ax.left === chosen ? 'axis-chosen' : 'axis-not'}">${ax.left}</span>
                    /
                    <span class="${ax.right === chosen ? 'axis-chosen' : 'axis-not'}">${ax.right}</span>
                </div>
            `;
        }).join('');

        // damla's quick take
        document.getElementById('result-damla').innerHTML = `
            <div class="text-box damla-note">
                <p><strong>damla says:</strong> ${t.damlaRating}</p>
            </div>
        `;
    }
})();
