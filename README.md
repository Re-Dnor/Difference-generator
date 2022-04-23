# Вычислитель отличий

[![Actions Status](https://github.com/Re-Dnor/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Re-Dnor/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/71377ee8a77f2dd03481/maintainability)](https://codeclimate.com/github/Re-Dnor/frontend-project-lvl2/maintainability)
[![Github Actions](https://github.com/Re-Dnor/frontend-project-lvl2/actions/workflows/lint-check.yml/badge.svg?branch=main)](https://github.com/Re-Dnor/frontend-project-lvl2/actions/workflows/lint-check.yml)
[![Test Coverage](https://api.codeclimate.com/v1/badges/71377ee8a77f2dd03481/test_coverage)](https://codeclimate.com/github/Re-Dnor/frontend-project-lvl2/test_coverage)

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменении в конфигурационных файлах.
Возможности утилиты:

- Поддержка разных входных форматов: yaml, json
- Генерация отчета в виде plain text, stylish и json

## Инструкция к проекту

Предварительно нужно склонировать репозиторий: <code> git clone https://github.com/Re-Dnor/frontend-project-lvl2.git</code><br>
Затем происталлировать проект: <code>make install</code><br>

## Команды для запуска вычислений

Вывод справки: <code>gendiff -h</code><br>
Для сравнения файлов можно указывать как относительный так и абсолютный путь.<br>
Для выбора формата вывода данных используется флаг <code>-f</code> или <code>--format</code>.<br>
Варианты форматов вывода данных: <code>stylish(default), plain, json</code>.
Примеры сравнения файлов:<br>
<code>gendiff file1.json file2.json</code><br>
<code>gendiff -f plain file1.json file2.json</code><br>
<code>gendiff -f json file1.json file2.json</code><br>
