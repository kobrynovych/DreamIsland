# Dream Island - AI Music Channel Website

Сайт-візитка для YouTube-каналу "Dream Island | Острів Мрії", який присвячений музиці, створеній штучним інтелектом. Наразі представлені дві основні категорії: WAR Music та IT Music.

## 🎵 Особливості

- **Двомовність**: Підтримка української та англійської мов
- **Теми**: Світла і темна теми з автоматичним визначенням
- **Адаптивний дизайн**: Оптимізовано для всіх пристроїв
- **Музичні категорії**: Гнучка система для додавання нових категорій
- **Інтеграція**: Прямі посилання на YouTube і Telegram канали
- **YouTube-подібний дизайн**: Червоні акценти та сучасний інтерфейс
- **Анімації**: Плавні переходи та мікро-взаємодії

## 🛠 Технології

- **Next.js 13+** з App Router
- **TypeScript** для типобезпеки
- **Tailwind CSS** для стилізації
- **shadcn/ui** для UI компонентів
- **Lucide React** для іконок

## 🚀 Встановлення та запуск

1. Клонуйте репозиторій:
```bash
git clone <your-repo-url>
cd dream-island
```

2. Встановіть залежності:
```bash
npm install
```

3. Запустіть development сервер:
```bash
npm run dev
```

4. Відкрийте [http://localhost:3000](http://localhost:3000) у браузері.

## 📦 Деплой на GitHub Pages

1. Створіть новий репозиторій на GitHub з назвою `DreamIsland`
2. Завантажте код до репозиторію:
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```


## 📁 Структура проекту

```
dream-island/
├── app/                    # Next.js App Router
│   ├── globals.css        # Глобальні стилі
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Головна сторінка
├── components/            # React компоненти
│   ├── layout/           # Компоненти макету
│   ├── sections/         # Секції сторінки
│   └── ui/               # UI компоненти
├── hooks/                # Custom React hooks
├── lib/                  # Утиліти та конфігурація
│   ├── data/            # Дані додатку
│   └── i18n/            # Інтернаціоналізація
└── types/                # TypeScript типи
```

## 🎨 Додавання нової музичної категорії

Щоб додати нову категорію, відредагуйте файл `lib/data/music-categories.ts` та додайте переклади у `lib/i18n/translations.ts`:

```typescript
// lib/data/music-categories.ts
{
  id: 'new-category',
  titleKey: 'categories.newCategory.title',
  descriptionKey: 'categories.newCategory.description',
  telegramChannel: 'https://t.me/your_new_channel',
  coverImage: 'https://example.com/cover.jpg',
  tags: ['Tag1', 'Tag2', 'Tag3']
}


// lib/i18n/translations.ts
newCategory: {
  title: 'Назва категорії',
  description: 'Опис категорії українською'
}
```

## 🌐 Конфігурація мов

Мови налаштовуються у файлі `lib/i18n/translations.ts`. Підтримуються українська (`uk`) та англійська (`en`) мови.

## 📄 Ліцензія

MIT License. Дивіться файл LICENSE для деталей.

## 🎯 Поточні категорії

### WAR Music
- Епічна оркестрова музика
- Жанри: Epic, Orchestral, Cinematic, Battle, Heroic
- Telegram: @war_music_ai

### IT Music  
- Електронна музика для IT-спеціалістів
- Жанри: Electronic, Synthwave, Cyberpunk, Ambient, Tech House
- Telegram: @it_music_ai