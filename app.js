// Данные об оружии
const weaponsData = {
    ak47: {
        name: "AK-47",
        image: "https://img.icons8.com/color/96/000000/assault-rifle.png",
        price: "$2700",
        damage: "36 (голова), 27 (тело)",
        sprayPattern: "↖️ Вверх-влево, затем вправо",
        accuracy: "Высокая на короткой дистанции",
        fireRate: "600 выстр/мин",
        tips: [
            "Первые 2 пули почти без отдачи",
            "Идеален для хедшотов на средней дистанции",
            "Самый мощный автомат за свои деньги",
            "Тренируйтесь контролировать первые 10 пуль"
        ],
        proPlayers: ["s1mple", "NiKo", "electronic"],
        type: "Штурмовая винтовка"
    },
    m4a4: {
        name: "M4A4",
        image: "https://img.icons8.com/color/96/000000/rifle.png",
        price: "$3100",
        damage: "33 (голова), 23 (тело)",
        sprayPattern: "⬆️ Прямо вверх, затем вправо",
        accuracy: "Очень высокая",
        fireRate: "666 выстр/мин",
        tips: [
            "Меньшая отдача чем у AK-47",
            "Быстрее перезарядка чем у M4A1-S",
            "30 патронов в магазине",
            "Отличный выбор для контртеррористов"
        ],
        proPlayers: ["ZywOo", "ropz", "blameF"],
        type: "Штурмовая винтовка"
    },
    awp: {
        name: "AWP",
        image: "https://img.icons8.com/color/96/000000/sniper-rifle.png",
        price: "$4750",
        damage: "115 (тело), 448 (голова)",
        sprayPattern: "🌀 Массивная отдача, перезарядка 2.0с",
        accuracy: "Снайперская",
        fireRate: "41 выстр/мин",
        tips: [
            "Один выстрел - одно убийство (кроме ног)",
            "После выстрела переключайтесь на нож для скорости",
            "Используйте кнопку переключения для быстрого прицела",
            "Не стойте на одном месте после выстрела"
        ],
        proPlayers: ["s1mple", "ZywOo", "dev1ce"],
        type: "Снайперская винтовка"
    },
    glock: {
        name: "Glock-18",
        image: "https://img.icons8.com/color/96/000000/pistol.png",
        price: "$200",
        damage: "28 (голова), 18 (тело)",
        sprayPattern: "Минимальная отдача",
        accuracy: "Средняя",
        fireRate: "400 выстр/мин",
        tips: [
            "Бесплатно для террористов в пистолетный раунд",
            "Имеет режим авто-огня",
            "Отлично подходит для бега и стрельбы",
            "Мало урона через броню"
        ],
        proPlayers: ["NAF", "EliGE", "Twistzz"],
        type: "Пистолет"
    },
    usp: {
        name: "USP-S",
        image: "https://img.icons8.com/color/96/000000/silencer.png",
        price: "$200",
        damage: "35 (голова), 23 (тело)",
        sprayPattern: "Точечная точность",
        accuracy: "Высокая",
        fireRate: "352 выстр/мин",
        tips: [
            "Бесплатно для контртеррористов в пистолетный раунд",
            "Глушитель уменьшает звук и скрывает трассеры",
            "Идеален для хедшотов",
            "Можно снять глушитель для большего урона"
        ],
        proPlayers: ["coldzera", "fallen", "fer"],
        type: "Пистолет с глушителем"
    },
    deagle: {
        name: "Desert Eagle",
        image: "https://img.icons8.com/color/96/000000/handgun.png",
        price: "$700",
        damage: "63 (голова), 44 (тело)",
        sprayPattern: "Сильная отдача",
        accuracy: "Высокая при одиночных выстрелах",
        fireRate: "267 выстр/мин",
        tips: [
            "Один выстрел в голову убивает",
            "Сильная отдача требует контроля",
            "Отлично подходит для эконом-раундов",
            "Тренируйтесь стрелять с паузой между выстрелами"
        ],
        proPlayers: ["Scream", "Niko", "guardian"],
        type: "Пистолет"
    }
};

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 CS2 Helper загружается...");
    
    // Инициализируем Telegram
    if (window.Telegram && window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp;
        tg.ready();
        tg.expand();
        
        const user = tg.initDataUnsafe.user;
        if (user) {
            document.getElementById('userName').textContent = `${user.first_name}'s CS2 Helper`;
        }
    }
    
    // Делаем функции глобальными
    window.openMapsSection = openMapsSection;
    window.openCrosshairsSection = openCrosshairsSection;
    window.openWeaponsSection = openWeaponsSection;
    window.showMainSections = showMainSections;
    window.selectWeapon = selectWeapon;
    window.practiceWeapon = practiceWeapon;
    
    console.log("✅ Приложение готово!");
});

// Функции для открытия разделов
function openMapsSection() {
    showMessage("Карты", "Раскид гранат, позиции, смоки (в разработке)");
}

function openCrosshairsSection() {
    showMessage("Прицелы", "Настройки про-игроков (в разработке)");
}

function openWeaponsSection() {
    // Скрываем основные разделы
    document.querySelector('.stats').style.display = 'none';
    // Показываем секцию выбора оружия
    document.getElementById('weaponsSection').style.display = 'block';
    // Очищаем информацию об оружии
    document.getElementById('weaponInfo').innerHTML = `
        <div class="placeholder">
            <img src="https://img.icons8.com/color/96/000000/rifle.png" 
                 alt="Выберите оружие" class="placeholder-img">
            <p>Выберите оружие для просмотра информации</p>
        </div>
    `;
}

function showMainSections() {
    // Показываем основные разделы
    document.querySelector('.stats').style.display = 'grid';
    // Скрываем секцию выбора оружия
    document.getElementById('weaponsSection').style.display = 'none';
    // Возвращаем placeholder
    document.getElementById('weaponInfo').innerHTML = `
        <div class="placeholder">
            <img src="https://img.icons8.com/color/96/000000/rifle.png" 
                 alt="Выберите раздел" class="placeholder-img">
            <p>Выберите раздел для начала работы</p>
            <div class="placeholder-tips">
                <p><strong>Карты:</strong> раскид гранат, позиции, смоки</p>
                <p><strong>Прицелы:</strong> настройки про-игроков</p>
                <p><strong>Оружие:</strong> характеристики и советы</p>
            </div>
        </div>
    `;
}

// Выбор оружия
function selectWeapon(weaponId) {
    const weapon = weaponsData[weaponId];
    if (!weapon) return;
    
    const weaponInfo = document.getElementById('weaponInfo');
    
    weaponInfo.innerHTML = `
        <div class="weapon-details">
            <div class="weapon-header">
                <img src="${weapon.image}" 
                     alt="${weapon.name}" 
                     class="weapon-header-img">
                <div>
                    <h2 class="weapon-title">${weapon.name}</h2>
                    <p class="weapon-price">${weapon.price} • ${weapon.type}</p>
                </div>
            </div>
            
            <div class="stats-grid">
                <div class="stat-box">
                    <h4>💥 Урон</h4>
                    <p>${weapon.damage}</p>
                </div>
                <div class="stat-box">
                    <h4>🎯 Точность</h4>
                    <p>${weapon.accuracy}</p>
                </div>
                <div class="stat-box">
                    <h4>🌀 Паттерн отдачи</h4>
                    <p>${weapon.sprayPattern}</p>
                </div>
                <div class="stat-box">
                    <h4>⚡ Скорострельность</h4>
                    <p>${weapon.fireRate}</p>
                </div>
            </div>
            
            <div style="margin: 20px 0; padding: 15px; background: rgba(255, 255, 255, 0.05); border-radius: 10px;">
                <h4 style="color: #ffd166; margin-bottom: 10px;">🏆 Pro игроки:</h4>
                <p>${weapon.proPlayers.map(player => 
                    `<span style="display: inline-block; background: rgba(0, 180, 216, 0.3); 
                      padding: 5px 10px; margin: 3px; border-radius: 5px;">${player}</span>`
                ).join('')}</p>
            </div>
            
            <div class="tips-box">
                <h3>💡 Советы по использованию:</h3>
                <ul class="tips-list">
                    ${weapon.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
            
            <div style="margin-top: 25px; text-align: center;">
                <button onclick="practiceWeapon('${weaponId}')" style="
                    background: linear-gradient(45deg, #00b4d8, #0077b6);
                    color: white;
                    border: none;
                    padding: 12px 30px;
                    border-radius: 10px;
                    cursor: pointer;
                    font-size: 1em;
                    font-weight: bold;
                    transition: transform 0.3s;
                " onmouseover="this.style.transform='scale(1.05)'" 
                onmouseout="this.style.transform='scale(1)'">
                    🎯 Тренировать ${weapon.name}
                </button>
            </div>
        </div>
    `;
    
    // Прокручиваем к информации
    weaponInfo.scrollIntoView({ behavior: 'smooth' });
}

// Тренировка оружия
function practiceWeapon(weaponId) {
    const weapon = weaponsData[weaponId];
    const tips = [
        `Тренируйтесь с ${weapon.name} 15 минут в день на карте Aim Botz`,
        `Используйте команду sv_showimpacts 1 для визуализации попаданий`,
        `Для ${weapon.name} попробуйте карту Recoil Master для контроля отдачи`,
        `Начните с неподвижных ботов, затем добавьте движение`,
        `Тренируйте флики (быстрые перемещения прицела) с ${weapon.name}`
    ];
    
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    
    alert(`🎯 Тренировка ${weapon.name}:\n\n${randomTip}`);
}

// Вспомогательная функция для сообщений
function showMessage(title, text) {
    document.getElementById('weaponInfo').innerHTML = `
        <div class="placeholder">
            <h2 style="color: #00b4d8; margin-bottom: 15px;">${title}</h2>
            <p style="font-size: 1.1em; margin-bottom: 20px;">${text}</p>
            <p style="color: #90e0ef; font-size: 0.9em;">
                Этот раздел находится в разработке. Скоро здесь появится полезный контент!
            </p>
        </div>
    `;
}