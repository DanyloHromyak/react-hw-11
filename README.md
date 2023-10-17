# Критерії приймання

- При здачі домашньої роботи є посилання: на вихідні файли та робочі сторінки
  кожного проекту на `Netlify`.
- У стані компонентів зберігається мінімально необхідний набір даних, решта
  обчислюється
- Під час запуску коду завдання в консолі відсутні помилки та попередження.
- Для кожного компонента є окрема папка з файлом React-компонента та файлом
  стилів
- Все, що компонент очікує у вигляді пропсів, передається йому під час виклику.
- Імена компонентів зрозумілі та описові
- JS-код чистий і зрозумілий, використовується `Prettier`
- Стилізація виконана `CSS-модулями` або `Styled Components`.

## Завдання «Кінопошук»

Створи базову маршрутизацію для застосунку пошуку і зберігання фільмів. Прев'ю
робочого застосунку
[дивись за посиланням](https://drive.google.com/file/d/1vR0hi3n1236Q5Bg4-se-8JVKD9UKSfId/view?usp=sharing).

## API themoviedb.org

Для бекенду використовуй [themoviedb.org API](https://www.themoviedb.org/).
Необхідно зареєструватися (можна ввести довільні дані) та отримати API-ключ.
Приклад налаштування axios в `src/config/axios.js`, підставляємо свій API ключ.
У цій роботі будуть використовуватися наступні ендпоінти:

- [/trending/get-trending](https://developers.themoviedb.org/3/trending/get-trending)
  список найпопулярніших фільмів на сьогодні для створення колекції на головній
  сторінці.
- [/movies/get-movie-details](https://developers.themoviedb.org/3/movies/get-movie-details)
  запит повної інформації про фільм для сторінки кінофільму.
- [/movies/get-movie-credits](https://developers.themoviedb.org/3/movies/get-movie-credits)
  запит інформації про акторський склад для сторінки кінофільму.
- [/movies/get-movie-reviews](https://developers.themoviedb.org/3/movies/get-movie-reviews)
  запит оглядів для сторінки кінофільму.

[Посилання на документацію](https://developers.themoviedb.org/3/getting-started/introduction)

## Маршрути

У застосунку повинні бути такі маршрути. Якщо користувач зайшов за неіснуючим
маршрутом, його необхідно перенаправляти на домашню сторінку.

- `'/'` – компонент `<HomePage>`, домашня сторінка зі списком популярних
  кінофільмів.
- `'/movies/:movieId'` – компонент `<MovieDetailsPage>`, сторінка з детальною
  інформацією про кінофільм.
- `/movies/:movieId/cast` – компонент `<CastPage>`, інформація про акторський склад.
  Вкладений роут, рендериться на сторінці `<MovieDetailsPage>`.
- `/movies/:movieId/reviews` – компонент `<ReviewsPage>`, інформація про огляди.
  Вкладений роут, рендериться на сторінці `<MovieDetailsPage>`.
