# Установка и запуск:

- npm i
- npm run start

# Избавится от лишних перерендеров 

## Задание:
- Изменить компоненты "List.js", "ListHeader.js" и "ListItem.js", чтоб по клику на каждый "ListItem" менялся только его
  цвет и "renderID", а не у всех
- Описать функцию "handleShuffle", которая должна в случайном порядке сортировать список. По клику на кнопку "Shuffle"
  цвета и "renderID" "ListHeader" и "ListItem" должны оставаться прежними

## Условия:
- Содержимое объектов массива "items" менять нельзя
- Хук "setChecked" должен выполняться только в "handleCheck", больше нигде
- Хук "setList" должен выполняться только в "handleShuffle", больше нигде
- Функция "handleCheck" и "handleShuffle" должна выполняться только в "List.js"
- Упростить, сократить код(по возможности)
  
## Пример:
- Видео примера результата https://drive.google.com/file/d/1Q5mL-dC8P3GhogcycTKY3hdp45zzjaAy
