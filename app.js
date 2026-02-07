const grid = document.getElementById('grainGrid');
const principlesGrid = document.getElementById('principlesGrid');
const seasonsGrid = document.getElementById('seasonsGrid');

let activeFilters = { dosha: 'all', season: 'all', type: 'all' };
let expandedCard = null;

function doshaStatus(effect) {
    if (effect.startsWith('Balances')) return 'balances';
    return 'increases';
}

function matchesFilters(grain) {
    const { dosha, season, type } = activeFilters;

    if (dosha !== 'all') {
        const effect = grain.dosha_balance[dosha];
        if (!effect.startsWith('Balances')) return false;
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
                <h4>Dosha Effects</h4>
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
                <h4>Ayurvedic Properties</h4>
                <div class="properties-grid">
                    <div class="property">
                        <span class="property-label">Rasa</span><br>
                        <span class="property-value">${grain.ayurvedic_properties.rasa}</span>
                    </div>
                    <div class="property">
                        <span class="property-label">Virya</span><br>
                        <span class="property-value">${grain.ayurvedic_properties.virya}</span>
                    </div>
                    <div class="property">
                        <span class="property-label">Vipaka</span><br>
                        <span class="property-value">${grain.ayurvedic_properties.vipaka}</span>
                    </div>
                    <div class="property">
                        <span class="property-label">Guna</span><br>
                        <span class="property-value">${grain.ayurvedic_properties.guna}</span>
                    </div>
                </div>
            </div>

            <div class="detail-section">
                <h4>Health Benefits</h4>
                <ul class="detail-list">
                    ${grain.health_benefits.map(b => `<li>${b}</li>`).join('')}
                </ul>
            </div>

            <div class="detail-section">
                <h4>Preparation Tips</h4>
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
    const filtered = GRAINS_DATA.grains.filter(matchesFilters);

    if (filtered.length === 0) {
        grid.innerHTML = '<p style="color:#888;font-size:0.9rem;padding:20px 0;">No grains match the selected filters.</p>';
        return;
    }

    filtered.forEach(grain => {
        grid.appendChild(renderCard(grain));
    });
}

function renderPrinciples() {
    GRAINS_DATA.principles.forEach(p => {
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
    Object.entries(GRAINS_DATA.seasonal_guide).forEach(([season, data]) => {
        const card = document.createElement('div');
        card.className = 'season-card';
        card.innerHTML = `
            <h3>${season}</h3>
            <div class="season-grains">${data.grains.join(', ')}</div>
            <div class="season-reason">${data.reason}</div>
        `;
        seasonsGrid.appendChild(card);
    });
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

function renderDoshaFaq() {
    const faq = GRAINS_DATA.dosha_faq;
    const faqIntro = document.getElementById('faqIntro');
    const faqGrid = document.getElementById('faqGrid');

    faqIntro.innerHTML = `
        <p>${faq.intro}</p>
        <p class="faq-why">${faq.why_important}</p>
    `;

    // Dosha cards
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
                    <span class="dosha-section-label">Governs</span>
                    <p>${dosha.governs}</p>
                </div>
                <div class="dosha-section">
                    <span class="dosha-section-label">Body Type</span>
                    <p>${dosha.body_type}</p>
                </div>
                <div class="dosha-section">
                    <span class="dosha-section-label">Mind</span>
                    <p>${dosha.mind}</p>
                </div>
                <div class="dosha-balance-grid">
                    <div class="dosha-balanced">
                        <span class="dosha-section-label">When Balanced</span>
                        <p>${dosha.when_balanced}</p>
                    </div>
                    <div class="dosha-imbalanced">
                        <span class="dosha-section-label">When Imbalanced</span>
                        <p>${dosha.when_imbalanced}</p>
                    </div>
                </div>
                <div class="dosha-section">
                    <span class="dosha-section-label">Best Grains</span>
                    <p>${dosha.best_grains}</p>
                </div>
                <div class="dosha-section">
                    <span class="dosha-section-label">Avoid</span>
                    <p>${dosha.avoid}</p>
                </div>
                <div class="dosha-section">
                    <span class="dosha-section-label">Season</span>
                    <p>${dosha.season}</p>
                </div>
                <div class="dosha-section">
                    <span class="dosha-section-label">Tips</span>
                    <ul class="detail-list">
                        ${dosha.tips.map(t => `<li>${t}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        faqGrid.appendChild(card);
    });

    // FAQ accordion
    const faqSection = document.createElement('div');
    faqSection.className = 'faq-questions';
    faqSection.innerHTML = `
        <h3 class="faq-questions-title">Common Questions</h3>
        ${faq.faqs.map(f => `
            <div class="faq-item">
                <div class="faq-question">${f.q}</div>
                <div class="faq-answer">${f.a}</div>
            </div>
        `).join('')}
    `;
    faqGrid.parentElement.appendChild(faqSection);

    // Toggle FAQ answers
    faqSection.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('open');
        });
    });
}

renderGrid();
renderDoshaFaq();
renderPrinciples();
renderSeasons();
