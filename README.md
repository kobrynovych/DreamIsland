# Dream Island - AI Music Channel Website

Сайт-візитка для YouTube-каналу "Dream Island | Острів Мрії", який присвячений музиці, створеній штучним інтелектом. Наразі представлені дві основні категорії: WAR Music та IT Music.

## 🎵 Особливості

- **Двомовність**: Підтримка української та англійської мов з миттєвим перемиканням
- **Теми**: Світла і темна теми з автоматичним визначенням
- **Адаптивний дизайн**: Оптимізовано для всіх пристроїв
- **Музичні категорії**: Гнучка система для додавання нових категорій
- **Інтеграція**: Прямі посилання на YouTube і Telegram канали
- **YouTube-подібний дизайн**: Червоні акценти та сучасний інтерфейс
- **Анімації**: Плавні переходи та мікро-взаємодії
- **GitHub Pages**: Готовий до деплою на GitHub Pages

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

Проект вже налаштований для автоматичного деплою на GitHub Pages:

1. **Створіть репозиторій на GitHub** з назвою вашого проекту (наприклад, `DreamIsland`)

2. **Завантажте код**:
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/DreamIsland.git
git push -u origin main
```

3. **Налаштуйте GitHub Pages**:
   - Перейдіть до Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: "gh-pages"
   - Folder: "/ (root)"

4. **Оновіть конфігурацію** у `next.config.js`:
   - Замініть `/DreamIsland` на назву вашого репозиторію
   - Якщо репозиторій називається `username.github.io`, видаліть `basePath` та `assetPrefix`

5. **Автоматичний деплой**: GitHub Actions автоматично збере та задеплоїть сайт при кожному push до main гілки

## 🔧 Виправлення проблем з локалізацією

Якщо мова не перемикається миттєво:

1. **Перевірте localStorage**: Відкрийте DevTools → Application → Local Storage
2. **Очистіть кеш**: Ctrl+Shift+R або Cmd+Shift+R
3. **Перевірте консоль**: Подивіться на помилки в DevTools → Console

### Основні виправлення в цій версії:
- ✅ Створено `useTranslation` хук для автоматичного оновлення
- ✅ Додано глобальний слухач подій `localeChange`
- ✅ Видалено умовне рендерінг з `isClient`
- ✅ Налаштовано правильну конфігурацію для GitHub Pages
- ✅ Додано автоматичний деплой через GitHub Actions

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