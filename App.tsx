
import React from 'react';
import TariffSelector from './TariffSelector';
import FeatureSelector from './FeatureSelector';
import AdditionalOptions from './AdditionalOptions';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Настройте тариф под ваши задачи</h1>
      <p>Выберите нужные параметры и функции, чтобы настроить план под себя</p>
      <TariffSelector />
      <FeatureSelector />
      <AdditionalOptions />
      <button className="get-price-button">Получить расчет</button>
    </div>
  );
};

export default App;

TariffSelector.tsx

import React from 'react';

const TariffSelector: React.FC = () => {
  return (
    <div className="tariff-selector">
      <h2>Хранилище</h2>
      <div className="storage-options">
        <label>
          <input type="radio" name="storage" value="50Mb" />
          50 Mb
        </label>
        <label>
          <input type="radio" name="storage" value="1Gb" />
          1 Gb
        </label>
        <label>
          <input type="radio" name="storage" value="5Gb" />
          5 Gb
        </label>
        <label>
          <input type="radio" name="storage" value="25Gb" />
          25 Gb
        </label>
      </div>

      <h2>Количество документов</h2>
      <div className="document-options">
        <label>
          <input type="radio" name="documents" value="500" />
          до 500
        </label>
        <label>
          <input type="radio" name="documents" value="2000" />
          до 2000
        </label>
        <label>
          <input type="radio" name="documents" value="5000" />
          до 5000
        </label>
        <label>
          <input type="radio" name="documents" value="unlimited" />
          ∞
        </label>
      </div>

      <h2>Макс. размер файла</h2>
      <div className="file-size-options">
        <label>
          <input type="radio" name="file-size" value="10Mb" />
          10 Mb
        </label>
        <label>
          <input type="radio" name="file-size" value="50Mb" />
          50 Mb
        </label>
        <label>
          <input type="radio" name="file-size" value="100Mb" />
          100 Mb
        </label>
        <label>
          <input type="radio" name="file-size" value="unlimited" />
          ∞
        </label>
      </div>
    </div>
  );
};

export default TariffSelector;

FeatureSelector.tsx

import React from 'react';

const FeatureSelector: React.FC = () => {
  return (
    <div className="feature-selector">
      <h2>Выделите параметры, которые вам нужны</h2>
      <div className="feature-grid">
        <div className="feature">
          <h3>Обмен файлами</h3>
          <p>Передача базы между пользователями и совладельцами</p>
          <p>Доступ к документам</p>
        </div>
        <div className="feature">
          <h3>Импорт заметок из приложений</h3>
          <p>Перенос существующих заметок из сторонних сервисов в систему</p>
        </div>
        <div className="feature">
          <h3>Совместная работа</h3>
          <p>Одновременное редактирование и взаимодействие нескольких пользователей в проекте</p>
        </div>
        <div className="feature">
          <h3>Цифрование ваших данных</h3>
          <p>Защищенное хранение данных с использованием современных методов шифрования</p>
        </div>
        <div className="feature">
          <h3>Резервное копирование базы данных</h3>
          <p>Автоматическое сохранение копий базы данных для восстановления при сбоях</p>
        </div>
        <div className="feature">
          <h3>История версий</h3>
          <p>Сохранение изменений документов с возможностью возврата к предыдущим
версиям</p>
        </div>
        <div className="feature">
          <h3>Приоритетная поддержка</h3>
          <p>Ускоренная поддержка при обращении и решении вопросов</p>
        </div>
        <div className="feature">
          <h3>Компоненты кастомные модули</h3>
          <p>Подключение пользовательских модулей, созданных сообществом платформы</p>
        </div>
        <div className="feature">
          <h3>Персональная инфраструктура</h3>
          <p>Выделенные ресурсы и изолированная среда для индивидуальных проектов</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSelector;

AdditionalOptions.tsx

import React from 'react';

const AdditionalOptions: React.FC = () => {
  return (
    <div className="additional-options">
      <h2>Дополнительные возможности</h2>
      <div className="option">
        <h3>SLA</h3>
        <div className="sla-options">
          <label>
            <input type="radio" name="sla" value="base" />
            Базовое
          </label>
          <label>
            <input type="radio" name="sla" value="premium" />
            Премиум
          </label>
        </div>
      </div>
      <div className="option">
        <h3>Расширенное API</h3>
        <div className="api-options">
          <label>
            <input type="radio" name="api" value="base" />
            Базовое
          </label>
          <label>
            <input type="radio" name="api" value="standard" />
            Стандартное
          </label>
          <label>
            <input type="radio" name="api" value="premium" />
            Премиум
          </label>
        </div>
      </div>
      <div className="option">
        <h3>Расширенная аналитика и логи</h3>
        <div className="analytics-options">
          <label>
            <input type="radio" name="analytics" value="standard" />
            Стандартная
          </label>
          <label>
            <input type="radio" name="analytics" value="extended" />
            Расширенная
          </label>
          <label>
            <input type="radio" name="analytics" value="full" />
            Полная
          </label>
        </div>
      </div>
    </div>
  );
};

export default AdditionalOptions;

index.css

body {
  font-family: Arial, sans-serif;
  background-color: #222;
  color: #fff;
  margin: 0;
  padding: 0;
}

.app {
  padding: 20px;
}

.tariff-selector,
.feature-selector,
.additional-options {
  margin-bottom: 20px;
}

.storage-options,
.document-options,
.file-size-options,
.sla-options,
.api-options,
.analytics-options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.feature {
  background-color: #333;
  padding: 10px;
  border-radius: 5px;
}

.get-price-button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
