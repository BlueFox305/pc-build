// Database dei componenti
const componentsDatabase = {
    cpu: {
        budget: [
            { name: "AMD Athlon 3000G", description: "2 core, 4 thread, 3.5GHz", price: 60, tier: 1, type: "both" },
            { name: "Intel Pentium Gold G6400", description: "2 core, 4 thread, 4.0GHz", price: 70, tier: 1, type: "both" },
            { name: "AMD Ryzen 3 3200G", description: "4 core, 4 thread, 3.6GHz", price: 100, tier: 2, type: "both" },
            { name: "Intel Core i3-10100", description: "4 core, 8 thread, 3.6GHz", price: 120, tier: 2, type: "both" },
            { name: "AMD Ryzen 5 3600", description: "6 core, 12 thread, 3.6GHz", price: 180, tier: 3, type: "both" },
            { name: "Intel Core i5-10400F", description: "6 core, 12 thread, 2.9GHz", price: 160, tier: 3, type: "both" },
            { name: "AMD Ryzen 5 5600X", description: "6 core, 12 thread, 3.7GHz", price: 230, tier: 4, type: "both" },
            { name: "Intel Core i5-11600K", description: "6 core, 12 thread, 3.9GHz", price: 250, tier: 4, type: "both" },
            { name: "AMD Ryzen 7 5800X", description: "8 core, 16 thread, 3.8GHz", price: 350, tier: 5, type: "both" },
            { name: "Intel Core i7-11700K", description: "8 core, 16 thread, 3.6GHz", price: 370, tier: 5, type: "both" },
            { name: "AMD Ryzen 9 5900X", description: "12 core, 24 thread, 3.7GHz", price: 500, tier: 6, type: "both" },
            { name: "Intel Core i9-11900K", description: "8 core, 16 thread, 3.5GHz", price: 520, tier: 6, type: "both" }
        ]
    },
    motherboard: {
        budget: [
            { name: "ASRock A320M-HDV", description: "AMD A320, mATX", price: 50, tier: 1, type: "both" },
            { name: "Gigabyte H410M S2H", description: "Intel H410, mATX", price: 60, tier: 1, type: "both" },
            { name: "ASRock B450M Pro4", description: "AMD B450, mATX", price: 80, tier: 2, type: "both" },
            { name: "MSI B460M-A PRO", description: "Intel B460, mATX", price: 85, tier: 2, type: "both" },
            { name: "MSI B550M PRO-VDH", description: "AMD B550, mATX", price: 110, tier: 3, type: "both" },
            { name: "ASUS PRIME B560M-A", description: "Intel B560, mATX", price: 120, tier: 3, type: "both" },
            { name: "ASUS TUF GAMING B550-PLUS", description: "AMD B550, ATX", price: 150, tier: 4, type: "both" },
            { name: "MSI MAG B560 TOMAHAWK", description: "Intel B560, ATX", price: 160, tier: 4, type: "both" },
            { name: "ASUS ROG STRIX B550-F GAMING", description: "AMD B550, ATX", price: 190, tier: 5, type: "both" },
            { name: "MSI MPG Z590 GAMING EDGE", description: "Intel Z590, ATX", price: 210, tier: 5, type: "both" },
            { name: "ASUS ROG STRIX X570-E GAMING", description: "AMD X570, ATX", price: 300, tier: 6, type: "both" },
            { name: "ASUS ROG MAXIMUS XIII HERO", description: "Intel Z590, ATX", price: 450, tier: 6, type: "both" }
        ]
    },
    ram: {
        budget: [
            { name: "Crucial 8GB DDR4-2666", description: "1x8GB, CL19", price: 35, tier: 1, type: "both" },
            { name: "G.Skill Aegis 8GB DDR4-3000", description: "1x8GB, CL16", price: 40, tier: 1, type: "both" },
            { name: "Corsair Vengeance LPX 8GB DDR4-3200", description: "2x4GB, CL16", price: 45, tier: 2, type: "both" },
            { name: "G.Skill Ripjaws V 16GB DDR4-3200", description: "2x8GB, CL16", price: 75, tier: 3, type: "both" },
            { name: "Corsair Vengeance RGB Pro 16GB DDR4-3200", description: "2x8GB, CL16, RGB", price: 90, tier: 3, type: "both" },
            { name: "G.Skill Trident Z RGB 16GB DDR4-3600", description: "2x8GB, CL16, RGB", price: 110, tier: 4, type: "both" },
            { name: "Corsair Vengeance RGB Pro 32GB DDR4-3200", description: "2x16GB, CL16, RGB", price: 150, tier: 5, type: "both" },
            { name: "G.Skill Trident Z Neo 32GB DDR4-3600", description: "2x16GB, CL16, RGB", price: 180, tier: 5, type: "both" },
            { name: "Corsair Dominator Platinum RGB 32GB DDR4-3600", description: "2x16GB, CL18, RGB", price: 220, tier: 6, type: "both" },
            { name: "G.Skill Trident Z Royal 32GB DDR4-4000", description: "2x16GB, CL18, RGB", price: 250, tier: 6, type: "both" }
        ]
    },
    storage: {
        budget: [
            { name: "Western Digital Blue 1TB", description: "HDD, 7200RPM", price: 40, tier: 1, type: "both" },
            { name: "Kingston A400 240GB", description: "SSD, SATA", price: 35, tier: 1, type: "both" },
            { name: "Crucial BX500 480GB", description: "SSD, SATA", price: 55, tier: 2, type: "both" },
            { name: "Western Digital Blue SN550 500GB", description: "SSD, NVMe", price: 65, tier: 3, type: "both" },
            { name: "Samsung 870 EVO 1TB", description: "SSD, SATA", price: 110, tier: 3, type: "both" },
            { name: "Western Digital Blue SN550 1TB", description: "SSD, NVMe", price: 100, tier: 4, type: "both" },
            { name: "Samsung 970 EVO 1TB", description: "SSD, NVMe", price: 150, tier: 5, type: "both" },
            { name: "Samsung 980 PRO 1TB", description: "SSD, NVMe PCIe 4.0", price: 200, tier: 6, type: "both" },
            { name: "Samsung 980 PRO 2TB", description: "SSD, NVMe PCIe 4.0", price: 350, tier: 6, type: "both" }
        ]
    },
    gpu: {
        budget: [
            { name: "Integrata", description: "Grafica integrata nel processore", price: 0, tier: 1, type: "work" },
            { name: "NVIDIA GT 1030", description: "2GB GDDR5", price: 90, tier: 1, type: "gaming" },
            { name: "AMD Radeon RX 550", description: "4GB GDDR5", price: 100, tier: 1, type: "gaming" },
            { name: "NVIDIA GTX 1650", description: "4GB GDDR6", price: 180, tier: 2, type: "gaming" },
            { name: "AMD Radeon RX 5500 XT", description: "4GB GDDR6", price: 190, tier: 2, type: "gaming" },
            { name: "NVIDIA GTX 1660 Super", description: "6GB GDDR6", price: 250, tier: 3, type: "gaming" },
            { name: "AMD Radeon RX 5600 XT", description: "6GB GDDR6", price: 280, tier: 3, type: "gaming" },
            { name: "NVIDIA RTX 3060", description: "12GB GDDR6", price: 350, tier: 4, type: "gaming" },
            { name: "AMD Radeon RX 6600 XT", description: "8GB GDDR6", price: 380, tier: 4, type: "gaming" },
            { name: "NVIDIA RTX 3070", description: "8GB GDDR6", price: 500, tier: 5, type: "gaming" },
            { name: "AMD Radeon RX 6700 XT", description: "12GB GDDR6", price: 480, tier: 5, type: "gaming" },
            { name: "NVIDIA RTX 3080", description: "10GB GDDR6X", price: 700, tier: 6, type: "gaming" },
            { name: "AMD Radeon RX 6800 XT", description: "16GB GDDR6", price: 650, tier: 6, type: "gaming" }
        ]
    },
    psu: {
        budget: [
            { name: "EVGA 450W 80+ Bronze", description: "Non modulare", price: 40, tier: 1, type: "both" },
            { name: "Corsair CV550 550W", description: "80+ Bronze, Non modulare", price: 55, tier: 2, type: "both" },
            { name: "Corsair CX650M 650W", description: "80+ Bronze, Semi-modulare", price: 75, tier: 3, type: "both" },
            { name: "EVGA SuperNOVA 650 GA", description: "80+ Gold, Completamente modulare", price: 100, tier: 4, type: "both" },
            { name: "Corsair RM750x 750W", description: "80+ Gold, Completamente modulare", price: 120, tier: 5, type: "both" },
            { name: "Seasonic FOCUS GX-850", description: "80+ Gold, Completamente modulare", price: 140, tier: 6, type: "both" },
            { name: "Corsair HX1000 1000W", description: "80+ Platinum, Completamente modulare", price: 200, tier: 6, type: "both" }
        ]
    },
    case: {
        budget: [
            { name: "Cooler Master Q300L", description: "mATX, Compatto", price: 45, tier: 1, type: "both" },
            { name: "NZXT H510", description: "ATX, Mid Tower", price: 70, tier: 2, type: "both" },
            { name: "Phanteks P400A", description: "ATX, Mid Tower, Mesh frontale", price: 90, tier: 3, type: "both" },
            { name: "Corsair 4000D Airflow", description: "ATX, Mid Tower, Ottimo airflow", price: 100, tier: 4, type: "both" },
            { name: "Lian Li PC-O11 Dynamic", description: "ATX, Mid Tower, Dual chamber", price: 150, tier: 5, type: "both" },
            { name: "Corsair 5000D Airflow", description: "ATX, Full Tower, Eccellente airflow", price: 170, tier: 6, type: "both" },
            { name: "Phanteks Enthoo 719", description: "E-ATX, Full Tower, Dual system", price: 200, tier: 6, type: "both" }
        ]
    },
    cooling: {
        budget: [
            { name: "Cooler stock", description: "Incluso con il processore", price: 0, tier: 1, type: "both" },
            { name: "Cooler Master Hyper 212", description: "Air cooler, 4 heatpipes", price: 35, tier: 2, type: "both" },
            { name: "be quiet! Pure Rock 2", description: "Air cooler, 4 heatpipes", price: 45, tier: 3, type: "both" },
            { name: "Noctua NH-U12S", description: "Air cooler, Premium", price: 70, tier: 4, type: "both" },
            { name: "Corsair H100i RGB PRO XT", description: "AIO, 240mm radiatore", price: 120, tier: 5, type: "both" },
            { name: "NZXT Kraken X63", description: "AIO, 280mm radiatore", price: 150, tier: 5, type: "both" },
            { name: "Corsair H150i ELITE CAPELLIX", description: "AIO, 360mm radiatore", price: 180, tier: 6, type: "both" }
        ]
    }
};

// Mappatura delle icone per i componenti
const componentIcons = {
    cpu: "fas fa-microchip",
    motherboard: "fas fa-server",
    ram: "fas fa-memory",
    storage: "fas fa-hdd",
    gpu: "fas fa-tv",
    psu: "fas fa-plug",
    case: "fas fa-desktop",
    cooling: "fas fa-fan"
};

// Mappatura dei livelli di potenza
const powerLevels = {
    "poca": 1,
    "non tanta": 2,
    "normale": 3,
    "molta": 4,
    "moltissima": 5
};

// Elementi DOM
const form = document.getElementById('pc-form');
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const budgetInput = document.getElementById('budget');
const step1Next = document.getElementById('step1-next');
const step2Next = document.getElementById('step2-next');
const step2Back = document.getElementById('step2-back');
const step3Back = document.getElementById('step3-back');
const generateBtn = document.getElementById('generate-btn');
const resultsSection = document.getElementById('results-section');
const componentsList = document.getElementById('components-list');
const totalPriceEl = document.getElementById('total-price');
const initialBudgetEl = document.getElementById('initial-budget');
const loadingEl = document.getElementById('loading');
const restartBtn = document.getElementById('restart-btn');
const saveBtn = document.getElementById('save-btn');

// Gestione della navigazione tra i passaggi
step1Next.addEventListener('click', () => {
    if (validateBudget()) {
        step1.classList.remove('active');
        step2.classList.add('active');
    }
});

step2Next.addEventListener('click', () => {
    if (validateUsage()) {
        step2.classList.remove('active');
        step3.classList.add('active');
    }
});

step2Back.addEventListener('click', () => {
    step2.classList.remove('active');
    step1.classList.add('active');
});

step3Back.addEventListener('click', () => {
    step3.classList.remove('active');
    step2.classList.add('active');
});

// Validazione del budget
function validateBudget() {
    const budget = parseInt(budgetInput.value);
    if (isNaN(budget) || budget < 100) {
        budgetInput.classList.add('shake');
        setTimeout(() => {
            budgetInput.classList.remove('shake');
        }, 500);
        return false;
    }
    return true;
}

// Validazione dell'utilizzo
function validateUsage() {
    const usageOptions = document.getElementsByName('usage');
    let selected = false;
    
    for (const option of usageOptions) {
        if (option.checked) {
            selected = true;
            break;
        }
    }
    
    if (!selected) {
        document.querySelector('.usage-options').classList.add('shake');
        setTimeout(() => {
            document.querySelector('.usage-options').classList.remove('shake');
        }, 500);
        return false;
    }
    
    return true;
}

// Validazione della potenza
function validatePower() {
    const powerOptions = document.getElementsByName('power');
    let selected = false;
    
    for (const option of powerOptions) {
        if (option.checked) {
            selected = true;
            break;
        }
    }
    
    if (!selected) {
        document.querySelector('.power-options').classList.add('shake');
        setTimeout(() => {
            document.querySelector('.power-options').classList.remove('shake');
        }, 500);
        return false;
    }
    
    return true;
}

// Generazione della configurazione
generateBtn.addEventListener('click', () => {
    if (validatePower()) {
        // Raccolta dei dati dal form
        const budget = parseInt(budgetInput.value);
        const usage = document.querySelector('input[name="usage"]:checked').value;
        const power = document.querySelector('input[name="power"]:checked').value;
        
        // Mostra la sezione dei risultati
        form.closest('.configurator-card').style.display = 'none';
        resultsSection.style.display = 'block';
        loadingEl.style.display = 'flex';
        componentsList.innerHTML = '';
        
        // Simula il caricamento
        setTimeout(() => {
            // Genera la configurazione
            const configuration = generateConfiguration(budget, usage, power);
            
            // Mostra i componenti
            displayComponents(configuration);
            
            // Nascondi il caricamento
            loadingEl.style.display = 'none';
        }, 2000);
    }
});

// Funzione per generare la configurazione
function generateConfiguration(budget, usage, power) {
    const powerLevel = powerLevels[power];
    const maxBudget = budget + 50; // Margine di 50€
    
    // Allocazione del budget in base all'utilizzo e alla potenza
    let allocation = {};
    
    if (usage === 'gaming') {
        // Per gaming, priorità alla GPU
        allocation = {
            cpu: 0.20,
            motherboard: 0.10,
            ram: 0.10,
            storage: 0.10,
            gpu: 0.30,
            psu: 0.08,
            case: 0.07,
            cooling: 0.05
        };
    } else {
        // Per lavoro/scuola, priorità a CPU e RAM
        allocation = {
            cpu: 0.30,
            motherboard: 0.15,
            ram: 0.15,
            storage: 0.15,
            gpu: 0.05,
            psu: 0.08,
            case: 0.07,
            cooling: 0.05
        };
    }
    
    // Calcola il budget per ogni componente
    const componentBudgets = {};
    for (const component in allocation) {
        componentBudgets[component] = Math.floor(budget * allocation[component]);
    }
    
    // Seleziona i componenti in base al budget e al livello di potenza
    const selectedComponents = {};
    let totalPrice = 0;
    
    // Funzione per selezionare il componente migliore in base al budget e al livello di potenza
    function selectComponent(category, componentBudget, type) {
        // Filtra i componenti per tipo (gaming, work o both)
        const filteredComponents = componentsDatabase[category].budget.filter(
            comp => comp.type === type || comp.type === 'both'
        );
        
        // Ordina i componenti per tier (livello di potenza)
        const sortedByTier = [...filteredComponents].sort((a, b) => {
            // Calcola la distanza dal livello di potenza desiderato
            const distA = Math.abs(a.tier - powerLevel);
            const distB = Math.abs(b.tier - powerLevel);
            
            // Se la distanza è uguale, preferisci il componente più costoso
            if (distA === distB) {
                return b.price - a.price;
            }
            
            return distA - distB;
        });
        
        // Trova il componente migliore che rientra nel budget
        let bestComponent = null;
        
        for (const comp of sortedByTier) {
            if (comp.price <= componentBudget) {
                bestComponent = comp;
                break;
            }
        }
        
        // Se non è stato trovato un componente, prendi il più economico
        if (!bestComponent && sortedByTier.length > 0) {
            bestComponent = sortedByTier.reduce((min, comp) => 
                comp.price < min.price ? comp : min, sortedByTier[0]);
        }
        
        return bestComponent;
    }
    
    // Seleziona i componenti in ordine di priorità
    const componentOrder = ['cpu', 'gpu', 'ram', 'motherboard', 'storage', 'psu', 'cooling', 'case'];
    
    for (const category of componentOrder) {
        const remainingBudget = maxBudget - totalPrice;
        const componentBudget = Math.min(componentBudgets[category], remainingBudget);
        
        // Seleziona il componente
        const component = selectComponent(category, componentBudget, usage);
        
        if (component) {
            selectedComponents[category] = component;
            totalPrice += component.price;
        }
    }
    
    // Ritorna la configurazione completa
    return {
        components: selectedComponents,
        totalPrice: totalPrice,
        initialBudget: budget
    };
}

// Funzione per visualizzare i componenti
function displayComponents(configuration) {
    // Aggiorna il prezzo totale
    totalPriceEl.textContent = `€${configuration.totalPrice}`;
    initialBudgetEl.textContent = `€${configuration.initialBudget}`;
    
    // Visualizza i componenti
    const components = configuration.components;
    
    // Ordine di visualizzazione dei componenti
    const displayOrder = ['cpu', 'motherboard', 'ram', 'gpu', 'storage', 'psu', 'cooling', 'case'];
    
    for (const category of displayOrder) {
        const component = components[category];
        
        if (component) {
            const componentItem = document.createElement('div');
            componentItem.className = 'component-item';
            
            componentItem.innerHTML = `
                <div class="component-icon">
                    <i class="${componentIcons[category]}"></i>
                </div>
                <div class="component-details">
                    <div class="component-name">${component.name}</div>
                    <div class="component-description">${component.description}</div>
                </div>
                <div class="component-price">€${component.price}</div>
            `;
            
            componentsList.appendChild(componentItem);
            
            // Aggiungi un'animazione di entrata con ritardo
            setTimeout(() => {
                componentItem.style.opacity = '1';
            }, 100 * componentsList.children.length);
        }
    }
}

// Gestione del pulsante di riavvio
restartBtn.addEventListener('click', () => {
    // Resetta il form
    form.reset();
    
    // Torna al primo passaggio
    step1.classList.add('active');
    step2.classList.remove('active');
    step3.classList.remove('active');
    
    // Nascondi i risultati e mostra il configuratore
    resultsSection.style.display = 'none';
    form.closest('.configurator-card').style.display = 'block';
});

// Gestione del pulsante di salvataggio
saveBtn.addEventListener('click', () => {
    // Crea un elemento temporaneo per il download
    const a = document.createElement('a');
    
    // Ottieni i dati della configurazione
    const configData = {
        components: Array.from(componentsList.children).map(item => ({
            name: item.querySelector('.component-name').textContent,
            description: item.querySelector('.component-description').textContent,
            price: item.querySelector('.component-price').textContent
        })),
        totalPrice: totalPriceEl.textContent,
        initialBudget: initialBudgetEl.textContent,
        date: new Date().toLocaleDateString()
    };
    
    // Crea un blob con i dati
    const blob = new Blob([JSON.stringify(configData, null, 2)], { type: 'application/json' });
    
    // Crea un URL per il blob
    const url = URL.createObjectURL(blob);
    
    // Configura l'elemento per il download
    a.href = url;
    a.download = `pc-configuration-${new Date().toISOString().slice(0, 10)}.json`;
    
    // Simula un click per avviare il download
    document.body.appendChild(a);
    a.click();
    
    // Pulisci
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Mostra un messaggio di conferma
    alert('Configurazione salvata con successo!');
});

// Aggiungi animazioni ai pulsanti
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.classList.add('pulse');
    });
    
    button.addEventListener('mouseleave', () => {
        button.classList.remove('pulse');
    });
});

// Validazione in tempo reale del budget
budgetInput.addEventListener('input', () => {
    const budget = parseInt(budgetInput.value);
    if (isNaN(budget) || budget < 100) {
        budgetInput.style.borderColor = 'var(--danger-color)';
    } else {
        budgetInput.style.borderColor = 'var(--success-color)';
    }
});