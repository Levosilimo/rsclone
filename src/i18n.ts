import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en_us',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en_us: {
        translation: {
          mainPage: "Main",
          gamePage: "Game",
          usersPage: "Users",
          login: "Log in",
          createAccount: "Create account",
          logout: "Log out",
          description: "Help Froggy and friends by writing CSS code! In this game, you must bring the frogs home to their lilypads by mastering CSS flexbox, a powerful new module that makes layout a breeze. With it you can control alignment, spacing, and wrapping of elements on the webpage using only one or two lines of code.",
          startGame: "Start Game",
          rightsReserved: "All rights reserved © 2023",
          developedBy: "Developed by:",
          languageTitle: "Language:",
          volumeTitle: "Volume:",
          themeTitle: "Theme:",
          greenTheme: "Green",
          redTheme: "Red",
          yellowTheme: "Yellow",
          loading: "Loading ...",
          loginLabel: "Login",
          loginPlaceholder: "Enter your email or username",
          obligatoryFieldError: "This field is required",
          usernameLabel: "Username",
          usernamePlaceholder: "Enter your username",
          usernameErrorMessage: "This field is required",
          emailLabel: "E-mail",
          emailPlaceholder: "Enter your email",
          emailErrorMessage: "Invalid e-mail",
          adminPasswordLabel: "Admin password",
          adminPasswordRemark: "R$cl0n34dm1n",
          adminPasswordPlaceholder: "Enter administrator password",
          passwordLabel: "Password",
          passwordPlaceholder: "Password must be at least 6 characters long",
          returnToLogin: "Return to login form",
          returnToRegister: "Don't have an account yet? Create one",
          admin: "Administrator",
          user: "User",
          userUpdating: "Updating...",
          userUpdate: "Update user",
          changeAvatar: "Change avatar",
          dragNdropHere: "Drag & Drop file here or click to select file",
          removeUnsupportedFile: "Please remove the unsupported file.",
          uploadFile: "Upload File",
          errorUploadingFile: "Error Uploading File",
          fileUploading: "Uploading File...",
          newUsernameLabel: "New Username",
          changeUsername: "Change Username",
          newUsernamePlaceholder: "Enter new username",
          profileLabel: "Profile",
          profileInfo: "Info",
          profileName: "Name",
          profileAccessLevel: "Access Level",
          profileGameProgress: "Game Progress",
          profileTop10: "Top 10 Players",
          profileLevelsPassed: "Levels passed"
        },
      },
      es_es: {
        translation: {
          mainPage: "Portada",
          gamePage: "Juego",
          usersPage: "Usuarios",
          login: "Entrar",
          createAccount: "Crear cuenta",
          logout: "Desconectarme",
          description: "¡Ayuda a Froggy y sus amigos escribiendo código CSS! En este juego, debes llevar las ranas a sus nenúfares dominando CSS flexbox, un nuevo y poderoso módulo que hace que el diseño sea muy sencillo. Con él, puede controlar la alineación, el espaciado y el ajuste de los elementos en la página web usando solo una o dos líneas de código.",
          startGame: "Empezar Juego",
          rightsReserved: "Todos los derechos reservados © 2023",
          developedBy: "Desarrollado por:",
          languageTitle: "Idioma:",
          volumeTitle: "Volumen:",
          themeTitle: "Tema:",
          greenTheme: "Verde",
          redTheme: "Rojo",
          yellowTheme: "Amarillo",
          loading: "Cargando ...",
          loginLabel: "Login",
          loginPlaceholder: "Introduzca tu correo electrónico o nombre de usuario",
          obligatoryFieldError: "Este campo es obligatorio",
          usernameLabel: "Nombre de usuario",
          usernamePlaceholder: "Introduzca nombre de usuario",
          emailLabel: "Correo electrónico",
          emailPlaceholder: "Introduzca correo electrónico",
          emailErrorMessage: "Correo electrónico no válida",
          adminPasswordLabel: "Contraseña de administrador",
          adminPasswordRemark: "R$cl0n34dm1n",
          adminPasswordPlaceholder: "Introduzca la contraseña de administrador",
          passwordLabel: "Contraseña",
          passwordPlaceholder: "La contraseña debe tener al menos 6 caracteres de longitud",
          returnToLogin: "Volver al login",
          returnToRegister: "¿No tienes una cuenta todavía? Crear una",
          admin: "Administrador",
          user: "Usuario",
          userUpdating: "Actualizando...",
          userUpdate: "Actualizar usuario",
          changeAvatar: "Cambiar avatar",
          dragNdropHere: "Arrastre y suelte el archivo aquí o haga clic para seleccionar el archivo",
          removeUnsupportedFile: "Por favor, elimine el archivo no compatible.",
          uploadFile: "Subir archivo",
          errorUploadingFile: "Hubo un error subiendo el archivo",
          fileUploading: "Subiendo archivo...",
          newUsernameLabel: "Nuevo nombre de usuario",
          changeUsername: "Cambiar nombre de usuario",
          newUsernamePlaceholder: "Introduzca nuevo nombre de usuario",
          profileLabel: "Perfil",
          profileInfo: "Información",
          profileName: "Nombre",
          profileAccessLevel: "Nivel de acceso",
          profileGameProgress: "Progreso del juego",
          profileTop10: "Top 10 Jugadores",
          profileLevelsPassed: "Niveles superados"
        },
      },
      ru: {
        translation: {
          mainPage: "Главная",
          gamePage: "Игра",
          usersPage: "Пользователи",
          login: "Войти",
          createAccount: "Создать аккаунт",
          logout: "Выйти",
          description: "Помогите Фрогги и его друзьям, написав код CSS! В этой игре вы должны привести лягушек домой к их кувшинкам, освоив CSS flexbox, новый мощный модуль, который упрощает верстку. С его помощью вы можете контролировать расположение, интервалы и перенос элементов на веб-странице, используя всего одну или две строки кода.",
          startGame: "Начать Игру",
          rightsReserved: "Все права защищены © 2023",
          developedBy: "Разработано:",
          languageTitle: "Язык:",
          volumeTitle: "Громкость:",
          themeTitle: "Тема:",
          greenTheme: "Зелёная",
          redTheme: "Красная",
          yellowTheme: "Жёлтая",
          loading: "Загрузка ...",
          loginLabel: "Логин",
          loginPlaceholder: "Введите адрес электронной почты или имя пользователя",
          obligatoryFieldError: "Это поле обязательное",
          usernameLabel: "Имя пользователя",
          usernamePlaceholder: "Введите имя пользователя",
          emailLabel: "Электронная почта",
          emailPlaceholder: "Введите адрес электронной почты",
          emailErrorMessage: "Неправильный адрес электронной почты",
          adminPasswordLabel: "Пароль администратора",
          adminPasswordRemark: "R$cl0n34dm1n",
          adminPasswordPlaceholder: "Введите пароль администратора",
          passwordLabel: "Пароль",
          passwordPlaceholder: "Пароль должен быть хотя бы 6 символов в длину",
          returnToLogin: "Вернуться на страницу входа",
          returnToRegister: "Еще нет аккаунта? Зарегистрируйтесь",
          admin: "Администратор",
          user: "Пользователь",
          userUpdating: "Обновляем...",
          userUpdate: "Обновить пользователя",
          changeAvatar: "Сменить аватар",
          dragNdropHere: "Перетащите файл сюда или кликните по надписи для выбора файла",
          removeUnsupportedFile: "Пожалуйста, удалите неподдерживаемый файл.",
          uploadFile: "Загрузить файл",
          errorUploadingFile: "Возникла ошибка при загрузке файла",
          fileUploading: "Загружаем...",
          newUsernameLabel: "Новое имя пользователя",
          changeUsername: "Изменить имя пользователя",
          newUsernamePlaceholder: "Введите новое имя пользователя",
          profileLabel: "Профиль",
          profileInfo: "Информация",
          profileName: "Имя",
          profileAccessLevel: "Уровень доступа",
          profileGameProgress: "Игровой прогресс",
          profileTop10: "Топ 10 Игроков",
          profileLevelsPassed: "Уровней пройдено"
        },
      },
      uk: {
        translation: {
          mainPage: "Головна",
          gamePage: "Гра",
          usersPage: "Користувачі",
          login: "Увійти",
          createAccount: "Створити аккаунт",
          logout: "Вийти",
          description: "Допоможіть Фроггі та друзям, написавши код CSS! У цій грі ви повинні повернути жаб додому до їх латаття, опанувавши CSS flexbox, новий потужний модуль, який спрощує верстку. За його допомогою ви можете керувати розміщенням, інтервалами та перенесенням елементів на веб-сторінці, використовуючи лише один або два рядки коду.",
          startGame: "Почати Гру",
          rightsReserved: "Усі права захищені © 2023",
          developedBy: "Розроблено:",
          languageTitle: "Мова:",
          volumeTitle: "Гучність:",
          themeTitle: "Тема:",
          greenTheme: "Зелена",
          redTheme: "Червона",
          yellowTheme: "Жовта",
          loading: "Завантаження ...",
          loginLabel: "Логін",
          loginPlaceholder: "Уведіть адресу електронної пошти або ім'я користувача",
          obligatoryFieldError: "Це поле є обов'язковим",
          usernameLabel: "Ім'я користувача",
          usernamePlaceholder: "Уведіть ім'я користувача",
          emailLabel: "Електронна пошта",
          emailPlaceholder: "Уведіть адресу електронної пошти",
          emailErrorMessage: "Неправильна адреса електронної пошти",
          adminPasswordLabel: "Пароль адміністратора",
          adminPasswordRemark: "R$cl0n34dm1n",
          adminPasswordPlaceholder: "Уведіть пароль адміністратора",
          passwordLabel: "Пароль",
          passwordPlaceholder: "Пароль має бути хоча б шість символів завдовжки",
          returnToLogin: "Повернутися на сторінку входу",
          returnToRegister: "Ще не зареєстровані? Зареєструйтеся",
          admin: "Адміністратор",
          user: "Користувач",
          userUpdating: "Оновлюємо...",
          userUpdate: "Оновити користувача",
          changeAvatar: "Змінити аватар",
          dragNdropHere: "Перетягніть файли сюди або клікніть на напис щоб вибрати файли",
          removeUnsupportedFile: "Будь ласка, вилучіть непідтримуваний файл.",
          uploadFile: "Завантажити файл",
          errorUploadingFile: "Під час завантаження файлу виникла помилка.",
          fileUploading: "Завантажуємо...",
          newUsernameLabel: "Нове ім'я користувача",
          changeUsername: "Змінити ім'я користувача",
          newUsernamePlaceholder: "Уведіть нове ім'я користувача",
          profileLabel: "Профіль",
          profileInfo: "Інформація",
          profileName: "Ім'я",
          profileAccessLevel: "Рівень доступу",
          profileGameProgress: "Ігровий прогресс",
          profileTop10: "Топ 10 Гравців",
          profileLevelsPassed: "Рівнів пройдено"
        },
      },
    },
  });

export default i18n;
