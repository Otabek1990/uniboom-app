import React from 'react'
import './Tekst.css'
import Border from '../assets/images/border.png'

function Tekst(props) {
  return (
    <div className="Menu" style={{width: '770px', marginLeft: '100px'}}>
      <div className="cards">
        <h1
          className="text-base font-bold text-black"
          style={{marginBottom: '20px'}}
        >
          Процессор
        </h1>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{
              color: 'rgba(153, 153, 153, 1)',
              borderColor: 'rgba(204, 204, 204, 1)',
            }}
          >
            Процессор
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)'}}
          >
            Apple M1 3200MHz
          </p>
        </div>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Количество ядер в процессоре
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)'}}
          >
            8
          </p>
        </div>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Объем кэша
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)', textAlign: 'right'}}
          >
            L2 - 2MB; <br /> L3 - 16MB;
          </p>
        </div>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Чипсет
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)'}}
          >
            Apple SoC
          </p>
        </div>
      </div>
      <div className="cards" style={{marginTop: '50px'}}>
        <h1
          className="text-base font-bold text-black"
          style={{marginBottom: '20px'}}
        >
          Изображение
        </h1>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Экран
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)', textAlign: 'right'}}
          >
            13.3” ; <br /> 2560x1600;
            <br /> Широкоформатный;
          </p>
        </div>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Тип покрытия экрана
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)'}}
          >
            Глянцевый
          </p>
        </div>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Тип матрицы экрана
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)'}}
          >
            IPS
          </p>
        </div>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Частота обновления экрана
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)'}}
          >
            60 Hz
          </p>
        </div>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Тип видеокарты
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)', textAlign: 'right'}}
          >
            Встройная
            <br /> Дискретное
          </p>
        </div>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Видео процессор
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)'}}
          >
            Apple graphics 7-core
          </p>
        </div>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Тебе видео памяти
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)'}}
          >
            SMA
          </p>
        </div>
      </div>
      <div className="cards" style={{marginTop: '30px'}}>
        <h1
          className="text-base font-bold text-black"
          style={{marginBottom: '20px'}}
        >
          Конфигурация накопители
        </h1>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            SSD
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)'}}
          >
            Apple M1 3200MHz
          </p>
        </div>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Общий объем накопителей
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)'}}
          >
            256 GB
          </p>
        </div>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Общий объем накопителей SSD
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)'}}
          >
            256 GB
          </p>
        </div>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Оптический привет
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)'}}
          >
            Нет
          </p>
        </div>
      </div>
      <div className="cards" style={{marginTop: '30px'}}>
        <h1
          className="text-base font-bold text-black"
          style={{marginBottom: '20px'}}
        >
          Связь
        </h1>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Беспроводная связь
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)', textAlign: 'right'}}
          >
            Wi-Fi IEEE 802.11ax;
            <br />
            Bluetooth 5.0;
          </p>
        </div>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Интерфейсы
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)', textAlign: 'right'}}
          >
            Микрофон/наушники Combo;
            <br />
            Thunderbolt/USB 4 x 2;
          </p>
        </div>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Функционал USB Type C
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)', textAlign: 'right'}}
          >
            Power delivery;
            <br />
            Thunderbolt 3;
            <br />
            Thunderbolt4;
          </p>
        </div>
      </div>
      <div className="cards" style={{marginTop: '30px'}}>
        <h1
          className="text-base font-bold text-black"
          style={{marginBottom: '20px'}}
        >
          Питание
        </h1>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Время работы oт аккумулятора
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)'}}
          >
            18 ч;
          </p>
        </div>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Ёмкость аккумулятора
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)'}}
          >
            49.9 watt*h;
          </p>
        </div>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Типа аккумулятора
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)'}}
          >
            Li-Pol;
          </p>
        </div>
      </div>
      <div className="cards" style={{marginTop: '30px'}}>
        <h1
          className="text-base font-bold text-black"
          style={{marginBottom: '20px'}}
        >
          Устройство ввода
        </h1>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Устройство позиционирование
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)'}}
          >
            Touchpad
          </p>
        </div>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Количество клавиш клавиатуры
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)'}}
          >
            79
          </p>
        </div>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Подсветка клавиатуры{' '}
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)'}}
          >
            Есть
          </p>
        </div>
      </div>
      <div className="cards" style={{marginTop: '30px'}}>
        <h1
          className="text-base font-bold text-black"
          style={{marginBottom: '20px'}}
        >
          Звук
        </h1>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Встроенные колонки
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)'}}
          >
            Есть
          </p>
        </div>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Встроенный микрофон
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)'}}
          >
            Есть
          </p>
        </div>
      </div>
      <div className="cards" style={{marginTop: '30px'}}>
        <h1
          className="text-base font-bold text-black"
          style={{marginBottom: '20px'}}
        >
          Дополнительно
        </h1>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Веб камера
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)', textAlign: 'right'}}
          >
            Есть;
            <br />1 МП;
          </p>
        </div>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Сканер отпечатка пальца
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)'}}
          >
            Есть
          </p>
        </div>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Особенности:
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)', textAlign: 'right'}}
          >
            Металлический корпус;
            <br />
            Пассивное охлаждение;
          </p>
        </div>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Комплектация
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)', textAlign: 'right'}}
          >
            Ноутбук;
            <br />
            Адаптер питания USB-C;
            <br />
            Шнур питания 2м;
          </p>
        </div>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Размер
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)'}}
          >
            304.1x212.4x16.1 мм
          </p>
        </div>
        <div
          className="box1"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            justifyContent: 'space-between',
          }}
        >
          <p
            className="text-base font-normal"
            style={{color: 'rgba(153, 153, 153, 1)'}}
          >
            Вес
          </p>

          <p
            className="Apple text-base font-bold"
            style={{color: 'rgba(23, 21, 21, 1)'}}
          >
            1.29 кг
          </p>
        </div>
      </div>
    </div>
  )
}

export default Tekst
