# React Novel &middot; ![node](https://img.shields.io/badge/node-v16.13.2-blue) ![react-native](https://img.shields.io/badge/react-17.0.2-blue)

Приложение-игра для создания и запуска новел.

Проект разрабатывается с помощью [Create React App](https://github.com/facebook/create-react-app).

## Скриншоты

![gameplay](https://github.com/kast96/novel/blob/master/screenshots/gameplay.png?raw=true)
![save](https://github.com/kast96/novel/blob/master/screenshots/save.png?raw=true)

## Установка

Выполните загрузку зависимостей и команду `yarn start`
```sh
yarn install
yarn start
```

## Особенности и возможности

* Вывод до 5 персонажей на игровой экран
* Смена спрайтов персонажей
* Выбор персонажа-спикера
* Воспроизведение музыкального сопровождения
* Нелинейное перемещение по сценарию
* Возможность выбора сценарных-ответов
* Система сохранения/загрузки прогресса
* Возможность создания нескольких сценариев


## Структура и создание сценариев

Сценарии хранятся в разделе `/public/scenaries/`.
Каждый сценарий - отдельная папка.
Также в данном разделе находится файл `scenaries.json`. В нем содержится список названий всех сценариев. Названия должны совпадать с названиями папок сценариев.

#### Содержимое раздела сценария

Сценарий состоит из 3 файлов и папки с ресурсами:
* `config.json` - файл конфигурации
* `resources.json` - файл ресурсов
* `story.json` - файл истории
* `assets/` - радел с ресурсами, указываемыми в `resources.json`

**config.json**
```sh
{
    "name": "Основная история",
    "version": "0.0.1"
}
```
* `name` - Название сценария
* `version` - Версия сценария

**resources.json**
```sh
{
    "player": {
        "name": "Игрок",
        "color": "#3F3"
    },
    "backgrounds": {
        "bg1": "assets/backgrounds/bg.png"
    },
    "persons": {
        "L": {
            "name": "Len",
            "color": "#FD8DFF",
            "sprites": {
                "normal": "assets/persons/lena/normal.png",
                "blue": "assets/persons/lena/blue.png"
            }
        }
    },
    "sounds": {
        "sound1": "assets/sounds/sound1.mp3",
        "sound2": "assets/sounds/sound2.mp3"
    }
}
```
* `player` - Объект с информацией об главном герое
    * `name` - имя главного героя
    * `color` - цвет имени главного героя

* `backgrounds` - Объект с информацией о фоновых изображений (ключ-значение)
    * `ключ` - уникальный символьный код фона - используется в файле истории
    * `значение` - путь к изображению фона

* `persons` - Объект с информацией о персонажах
    * `ключ` - уникальный символьный код персонажа - используется в файле истории
    * `значение`:
        * `name` - Имя персонажа
        * `color` - Цвет имени персонажа
        * `sprites` - Объект с информацией о спрайтах персонажа (ключ-значение)
            * `ключ` - уникальный символьный код спрайта - используется в файле истории
            * `значение` - путь к изображению спрайта

* `sounds` - Объект с информацией о звуковом сопровождении (ключ-значение)
    * `ключ` - уникальный символьный код музыкального произведения - используется в файле истории
    * `значение` - путь к файлу музыкального произведения

**story.json**
```sh
[
    {
        "jumpLabel": "start",
        "background": "bg1",
        "personLeft": "L",
        "personCenterLeft": "L",
        "personCenter": "L",
        "personCenterRight": "L",
        "personRight": "L",
        "speaker": "L",
        "text": "Lorem ipso",
        "sound": null
    },
    {
        "jumpLabel": "two",
        "personCenterSprite": "blue",
        "text": "qweqwe",
        "sound": "sound1"
    },
    {
        "speaker": "player",
        "text": "say player",
        "sound": "sound2"
    },
    {
        "jumpSelect": [
            {
                "jumpTo": "start",
                "text": "Jump to start"
            },
            {
                "jumpTo": "two",
                "text": "Jump to two"
            }
        ],
        "text": "1111"
    },
    {
        "jumpTo": "start"
    }
]
```

Содержит массив объектов-шагов сценария. Каждый шаг содержит набор определенных параметров, указанных ниже в документации. Параметр отвечает за определенное действие в игре, например, показ определенного фона, показ диалога или воспроизведение какого-либо музыкального произведения.

## Доступные параметры сценария

##### `background` (string)
Меняет фоновую картинку. Символьный код фона из файла `resources.json`.
```
{
    "background": "bg1"
}
```

##### `personLeft`, `personCenterLeft`, `personCenter`, `personCenterRight`, `personRight` (string)
Выводит персонажа на игровую область. Символьный код персонажа из файла `resources.json` с указанием позиционирования
```
{
    "personLeft": "L"
}
```

##### `personSpriteLeft`, `personSpriteCenterLeft`, `personSpriteCenter`, `personSpriteCenterRight`, `personSpriteRight` (string)
Меняет спрайт персонажа. Символьный код спрайта персонажа из файла `resources.json` с указанием позиционирования
```
{
    "personCenterSprite": "blue"
}
```

##### `speaker` (string)
Задает спикера для текста диалога. Символьный код персонажа из файла `resources.json`, который в данном шаге произносит диалог. Можно использовать значение `palyer` - диалог произносит главный герой.
```
{
    "speaker": "L"
}
```

##### `text` (string)
Задает выводимый текст диалога спикером. Сообщение, которе произносит персонаж-спикер
```
{
    "text": "Lorem ipso"
}
```

##### `jumpLabel` (string)
Задает метку для текущего шага. Можно будет использовать параметры `jumpTo` и `jumpSelect` для перехода к шагу с этой меткой. Символьное название метки.
```
{
    "jumpLabel": "start"
}
```

**Внимание!** Объект с данной меткой должен иметь весь набор доступных параметров т.к. после перехода на данный шаг, могут остаться другие параметры с предыдущего шага (Например может сохраниться фон или персонажи с прошлого шага).

##### `jumpTo` (string)
Выполняет переход к шагу сценария, в котором находится метка, указанная в значении параметра
```
[
    {
        "jumpLabel": "start"
    },
    {
        "jumpTo": "start"
    }
]
```

##### `jumpSelect` (array)
Показывает список выбора действия, от которого зависит переход ка шагу сценария по символьному коду метки
```
[
    {
        "jumpLabel": "start"
    },
    {
        "jumpLabel": "two"
    },
    {
        "jumpSelect": [
            {
                "jumpTo": "start",
                "text": "Jump to start"
            },
            {
                "jumpTo": "two",
                "text": "Jump to two"
            }
        ]
    }
]
```

##### `sound` (string)
Воспроизводит музыку. Символьный код музыкального произведения из файла `resources.json`. Используйте значение `null` чтобы отключить воспроизведение.
```
{
    "sound": "sound1"
}
```

## Основные технологии
React, React-Router-Dom, Redux, Axios