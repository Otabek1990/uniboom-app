const cpu = [
  {
    text: 'Процессор',
    info: ['Apple M1 3200MHz'],
  },
  {
    text: 'Количество ядер в процессоре',
    info: ['8'],
  },
  {
    text: 'Объем кэша',
    info: ['L2 - 2MB;', ' L3 - 16MB;'],
  },
  {
    text: 'Чипсет',
    info: ['Apple SoC'],
  },
]

const img = [
  {
    text: 'Экран',
    info: ['13.3”;', ' 2560x1600;', ' Широкоформатный;'],
  },
  {
    text: 'Тип покрытия экрана',
    info: ['Глянцевый'],
  },
  {
    text: 'Тип матрицы экрана',
    info: ['IPS'],
  },
  {
    text: 'Частота обновления экрана',
    info: ['60 Hz'],
  },
  {
    text: 'Тип видеокарты',
    info: ['Встройная Дискретное'],
  },
  {
    text: 'Видео процессор',
    info: ['Apple graphics 7-core'],
  },
  {
    text: 'Тебе видео памяти',
    info: ['SMA'],
  },
]

const storageDevice = [
  {
    text: 'Конфигурация накопители',
    info: ['SSD'],
  },
  {
    text: 'Общий объем накопителей',
    info: ['256 GB'],
  },
  {
    text: 'Общий объем накопителей SSD',
    info: ['256 GB'],
  },
  {
    text: 'Оптический привет',
    info: ['Нет'],
  },
]
const connection = [
  {
    text: 'Беспроводная связь',
    info: ['Wi-Fi IEEE 802.11ax;', ' Bluetooth 5.0;'],
  },
  {
    text: 'Интерфейсы',
    info: ['Микрофон/наушники Combo;', ' Thunderbolt/USB 4 x 2;'],
  },
  {
    text: 'Функционал USB Type C',
    info: ['Power delivery;', ' Thunderbolt 3;', ' Thunderbolt4;'],
  },
]
const battery = [
  {
    text: 'Время работы oт аккумулятора',
    info: ['18 ч;'],
  },
  {
    text: 'Ёмкость аккумулятора',
    info: ['49.9 watt*h;'],
  },
  {
    text: 'Типа аккумулятора',
    info: ['Li-Pol;'],
  },
]
const inputDevice = [
  {
    text: 'Устройство позиционирование',
    info: ['Touchpad'],
  },
  {
    text: 'Количество клавиш клавиатуры',
    info: ['79'],
  },
  {
    text: 'Подсветка клавиатуры',
    info: ['Есть'],
  },
]
const sound = [
  {
    text: 'Встроенные колонки',
    info: ['Есть'],
  },
  {
    text: 'Встроенный микрофон',
    info: ['Есть'],
  },
]

const moreInfo = [
  {
    text: 'Веб камера',
    info: ['Есть;', ' 1 МП;'],
  },
  {
    text: 'Сканер отпечатка пальца',
    info: ['Есть'],
  },
  {
    text: 'Особенности:',
    info: ['Металлический корпус;', 'Пассивное охлаждение;'],
  },
  {
    text: 'Комплектация',
    info: ['Ноутбук;', ' Адаптер питания USB-C;', ' Шнур питания 2м;'],
  },
  {
    text: 'Размер',
    info: ['304.1x212.4x16.1 мм'],
  },
  {
    text: 'Вес',
    info: ['1.29 кг'],
  },
]

export const productSpecs = [
  {
    about: 'Процессор',
    info: cpu,
  },
  {
    about: 'Изображение',
    info: img,
  },
  {
    about: 'Устройство хранения данных',
    info: storageDevice,
  },
  {
    about: 'Связь',
    info: connection,
  },
  {
    about: 'Питание',
    info: battery,
  },
  {
    about: 'Устройство ввода',
    info: inputDevice,
  },
  {
    about: 'Звук',
    info: sound,
  },
  {
    about: 'Дополнительно',
    info: moreInfo,
  },
]
