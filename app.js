const grid = document.getElementById('grainGrid');
const principlesGrid = document.getElementById('principlesGrid');
const seasonsGrid = document.getElementById('seasonsGrid');

let activeFilters = { dosha: 'all', season: 'all', type: 'all' };
let expandedCard = null;
let currentLang = localStorage.getItem('grain-lang') || 'en';

function getData() {
    return currentLang === 'te' ? GRAINS_DATA_TE : GRAINS_DATA;
}

function t(key) {
    if (currentLang === 'en') return null;
    const data = getData();
    return data.ui && data.ui[key];
}

function doshaStatus(effect) {
    if (effect.startsWith('Balances') || effect.startsWith('సమతుల్యం')) return 'balances';
    return 'increases';
}

function matchesFilters(grain) {
    const { dosha, season, type } = activeFilters;

    if (dosha !== 'all') {
        const effect = grain.dosha_balance[dosha];
        if (!effect.startsWith('Balances') && !effect.startsWith('సమతుల్యం')) return false;
    }

    if (season !== 'all') {
        if (!grain.seasons.includes(season)) return false;
    }

    if (type !== 'all') {
        if (grain.type !== type) return false;
    }

    return true;
}

function renderCard(grain) {
    const isExpanded = expandedCard === grain.id;
    const card = document.createElement('div');
    card.className = `grain-card${isExpanded ? ' expanded' : ''}`;
    card.dataset.id = grain.id;

    const data = getData();
    const labels = currentLang === 'te' ? {
        doshaEffects: 'దోష ప్రభావాలు',
        ayurvedicProps: 'ఆయుర్వేద లక్షణాలు',
        healthBenefits: 'ఆరోగ్య ప్రయోజనాలు',
        prepTips: 'తయారీ చిట్కాలు',
        rasa: 'రసం (Rasa)',
        virya: 'వీర్యం (Virya)',
        vipaka: 'విపాకం (Vipaka)',
        guna: 'గుణం (Guna)'
    } : {
        doshaEffects: 'Dosha Effects',
        ayurvedicProps: 'Ayurvedic Properties',
        healthBenefits: 'Health Benefits',
        prepTips: 'Preparation Tips',
        rasa: 'Rasa',
        virya: 'Virya',
        vipaka: 'Vipaka',
        guna: 'Guna'
    };

    card.innerHTML = `
        <div class="grain-header">
            <div>
                <div class="grain-name">${grain.english_name}</div>
                <div class="grain-hindi">${grain.hindi_name}</div>
                <div class="grain-sanskrit">${grain.sanskrit_name}</div>
            </div>
            <div class="dosha-badges">
                <span class="dosha-badge ${doshaStatus(grain.dosha_balance.vata)}">V</span>
                <span class="dosha-badge ${doshaStatus(grain.dosha_balance.pitta)}">P</span>
                <span class="dosha-badge ${doshaStatus(grain.dosha_balance.kapha)}">K</span>
            </div>
        </div>

        <div class="grain-summary">${grain.health_benefits[0]}</div>
        <div class="grain-season">${grain.best_season} &middot; ${grain.best_time}</div>

        <div class="grain-details">
            <div class="detail-section">
                <h4>${labels.doshaEffects}</h4>
                <div class="dosha-detail">
                    <div class="dosha-item">
                        <div class="dosha-item-name">Vata</div>
                        <div class="dosha-item-effect">${grain.dosha_balance.vata}</div>
                    </div>
                    <div class="dosha-item">
                        <div class="dosha-item-name">Pitta</div>
                        <div class="dosha-item-effect">${grain.dosha_balance.pitta}</div>
                    </div>
                    <div class="dosha-item">
                        <div class="dosha-item-name">Kapha</div>
                        <div class="dosha-item-effect">${grain.dosha_balance.kapha}</div>
                    </div>
                </div>
            </div>

            <div class="detail-section">
                <h4>${labels.ayurvedicProps}</h4>
                <div class="properties-grid">
                    <div class="property">
                        <span class="property-label">${labels.rasa}</span><br>
                        <span class="property-value">${grain.ayurvedic_properties.rasa}</span>
                    </div>
                    <div class="property">
                        <span class="property-label">${labels.virya}</span><br>
                        <span class="property-value">${grain.ayurvedic_properties.virya}</span>
                    </div>
                    <div class="property">
                        <span class="property-label">${labels.vipaka}</span><br>
                        <span class="property-value">${grain.ayurvedic_properties.vipaka}</span>
                    </div>
                    <div class="property">
                        <span class="property-label">${labels.guna}</span><br>
                        <span class="property-value">${grain.ayurvedic_properties.guna}</span>
                    </div>
                </div>
            </div>

            <div class="detail-section">
                <h4>${labels.healthBenefits}</h4>
                <ul class="detail-list">
                    ${grain.health_benefits.map(b => `<li>${b}</li>`).join('')}
                </ul>
            </div>

            <div class="detail-section">
                <h4>${labels.prepTips}</h4>
                <ul class="detail-list">
                    ${grain.preparation_tips.map(t => `<li>${t}</li>`).join('')}
                </ul>
            </div>

            <div class="contraindication">${grain.contraindications}</div>
        </div>
    `;

    card.addEventListener('click', () => {
        expandedCard = expandedCard === grain.id ? null : grain.id;
        renderGrid();
    });

    return card;
}

function renderGrid() {
    grid.innerHTML = '';
    const data = getData();
    const filtered = data.grains.filter(matchesFilters);

    if (filtered.length === 0) {
        const msg = currentLang === 'te'
            ? 'ఎంచుకున్న ఫిల్టర్లకు ధాన్యాలు సరిపోలడం లేదు.'
            : 'No grains match the selected filters.';
        grid.innerHTML = `<p style="color:#888;font-size:0.9rem;padding:20px 0;">${msg}</p>`;
        return;
    }

    filtered.forEach(grain => {
        grid.appendChild(renderCard(grain));
    });
}

function renderPrinciples() {
    principlesGrid.innerHTML = '';
    const data = getData();
    data.principles.forEach(p => {
        const card = document.createElement('div');
        card.className = 'principle-card';
        card.innerHTML = `
            <h3>${p.title}</h3>
            <ul>${p.items.map(i => `<li>${i}</li>`).join('')}</ul>
        `;
        principlesGrid.appendChild(card);
    });
}

function renderSeasons() {
    seasonsGrid.innerHTML = '';
    const data = getData();
    Object.entries(data.seasonal_guide).forEach(([season, sdata]) => {
        const card = document.createElement('div');
        card.className = 'season-card';
        card.innerHTML = `
            <h3>${sdata.name || season}</h3>
            <div class="season-grains">${sdata.grains.join(', ')}</div>
            <div class="season-reason">${sdata.reason}</div>
        `;
        seasonsGrid.appendChild(card);
    });
}

function renderDoshaFaq() {
    const data = getData();
    const faq = data.dosha_faq;
    const faqIntro = document.getElementById('faqIntro');
    const faqGrid = document.getElementById('faqGrid');

    faqIntro.innerHTML = `
        <p>${faq.intro}</p>
        <p class="faq-why">${faq.why_important}</p>
    `;

    faqGrid.innerHTML = '';

    const labels = currentLang === 'te' ? {
        governs: 'నియంత్రిస్తుంది',
        bodyType: 'శరీర తత్వం',
        mind: 'మనస్సు',
        whenBalanced: 'సమతుల్యంలో ఉన్నప్పుడు',
        whenImbalanced: 'అసమతుల్యంలో ఉన్నప్పుడు',
        bestGrains: 'ఉత్తమ ధాన్యాలు',
        avoid: 'నివారించండి',
        season: 'ఋతువు',
        tips: 'చిట్కాలు'
    } : {
        governs: 'Governs',
        bodyType: 'Body Type',
        mind: 'Mind',
        whenBalanced: 'When Balanced',
        whenImbalanced: 'When Imbalanced',
        bestGrains: 'Best Grains',
        avoid: 'Avoid',
        season: 'Season',
        tips: 'Tips'
    };

    faq.doshas.forEach(dosha => {
        const card = document.createElement('div');
        card.className = 'dosha-card';
        card.innerHTML = `
            <div class="dosha-card-header">
                <h3>${dosha.name} <span class="dosha-card-sanskrit">${dosha.sanskrit}</span></h3>
                <span class="dosha-elements">${dosha.elements}</span>
            </div>
            <div class="dosha-card-qualities">${dosha.qualities}</div>
            <div class="dosha-card-body">
                <div class="dosha-section">
                    <span class="dosha-section-label">${labels.governs}</span>
                    <p>${dosha.governs}</p>
                </div>
                <div class="dosha-section">
                    <span class="dosha-section-label">${labels.bodyType}</span>
                    <p>${dosha.body_type}</p>
                </div>
                <div class="dosha-section">
                    <span class="dosha-section-label">${labels.mind}</span>
                    <p>${dosha.mind}</p>
                </div>
                <div class="dosha-balance-grid">
                    <div class="dosha-balanced">
                        <span class="dosha-section-label">${labels.whenBalanced}</span>
                        <p>${dosha.when_balanced}</p>
                    </div>
                    <div class="dosha-imbalanced">
                        <span class="dosha-section-label">${labels.whenImbalanced}</span>
                        <p>${dosha.when_imbalanced}</p>
                    </div>
                </div>
                <div class="dosha-section">
                    <span class="dosha-section-label">${labels.bestGrains}</span>
                    <p>${dosha.best_grains}</p>
                </div>
                <div class="dosha-section">
                    <span class="dosha-section-label">${labels.avoid}</span>
                    <p>${dosha.avoid}</p>
                </div>
                <div class="dosha-section">
                    <span class="dosha-section-label">${labels.season}</span>
                    <p>${dosha.season}</p>
                </div>
                <div class="dosha-section">
                    <span class="dosha-section-label">${labels.tips}</span>
                    <ul class="detail-list">
                        ${dosha.tips.map(t => `<li>${t}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        faqGrid.appendChild(card);
    });

    // Remove old FAQ questions section if exists
    const oldFaqSection = document.querySelector('.faq-questions');
    if (oldFaqSection) oldFaqSection.remove();

    const faqSection = document.createElement('div');
    faqSection.className = 'faq-questions';
    const commonQTitle = currentLang === 'te' ? 'సాధారణ ప్రశ్నలు' : 'Common Questions';
    faqSection.innerHTML = `
        <h3 class="faq-questions-title">${commonQTitle}</h3>
        ${faq.faqs.map(f => `
            <div class="faq-item">
                <div class="faq-question">${f.q}</div>
                <div class="faq-answer">${f.a}</div>
            </div>
        `).join('')}
    `;
    faqGrid.parentElement.appendChild(faqSection);

    faqSection.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('open');
        });
    });
}

// Update all static text on language switch
function updateStaticText() {
    const data = getData();
    const ui = data.ui || {};

    document.getElementById('siteTitle').textContent = ui.title || 'Indian Grains';
    document.getElementById('siteSubtitle').textContent = ui.subtitle || 'Ayurvedic Wisdom for Daily Nourishment';
    document.getElementById('doshaFaqTitle').textContent = ui.understandingDoshas || 'Understanding the Doshas';
    document.getElementById('principlesTitle').textContent = ui.ayurvedicPrinciples || 'Ayurvedic Principles';
    document.getElementById('seasonalTitle').textContent = ui.seasonalGuide || 'Seasonal Guide';
    document.getElementById('footerText').textContent = ui.footer || 'Based on classical Ayurvedic texts. Consult a qualified practitioner for personalized recommendations.';

    // Update filter labels
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (ui[key]) el.textContent = ui[key];
        else if (currentLang === 'en') {
            // Reset to English defaults
            const defaults = {
                dosha: 'Dosha', season: 'Season', type: 'Type',
                all: 'All', winter: 'Winter', spring: 'Spring',
                summer: 'Summer', monsoon: 'Monsoon',
                rice: 'Rice', millets: 'Millets', other: 'Other'
            };
            if (defaults[key]) el.textContent = defaults[key];
        }
    });

    document.documentElement.lang = currentLang === 'te' ? 'te' : 'en';
}

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('grain-lang', lang);

    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');

    updateStaticText();
    renderGrid();
    renderDoshaFaq();
    renderPrinciples();
    renderSeasons();
}

// Filter handling
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        const season = btn.dataset.season;
        const type = btn.dataset.type;

        if (filter !== undefined) {
            activeFilters.dosha = filter;
            document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
        } else if (season !== undefined) {
            activeFilters.season = season;
            document.querySelectorAll('[data-season]').forEach(b => b.classList.remove('active'));
        } else if (type !== undefined) {
            activeFilters.type = type;
            document.querySelectorAll('[data-type]').forEach(b => b.classList.remove('active'));
        }

        btn.classList.add('active');
        expandedCard = null;
        renderGrid();
    });
});

// Language toggle
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        switchLanguage(btn.dataset.lang);
    });
});

// Initialize with saved language
switchLanguage(currentLang);
