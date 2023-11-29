const Book = function(title = '', category = '', author = '', storage = '')
{
    this.title = title;
    this.category = category;
    this.author = author;
    this.storage = storage;
}

this.show = function(){
    document.write ('<li><strong>${this.title}</strong>: <i>${this.category}</i><strong><i>${this.author}</i></strong><u>${this.storage}</u> </li>');
}

const MyBibl = function(){
    this.data = [];

    this.add = function(Book = {}){
        this.data.push(Book);
    }

    this.show = function(){
        // document.write('<ul>');

        this.data.forEach(function(item){
            item.show();
        })

        // document.write('</ul>');
    }
};

let myBibl = new MyBibl();

myBibl.add(new MyBibl('Огненная вспышка','детектив','Ричард Старк','в читальном зале'));
myBibl.add(new MyBibl('Воздушный витязь','проза','Игорь Соркин','on-line по запросу'));
myBibl.add(new MyBibl('Дракон Фенстонов','приключения','Анри Верн','в читальном зале'));
myBibl.add(new MyBibl('Заколдованное счастье','поэзия','Лев Маляков','в читальном зале'));
myBibl.add(new MyBibl('Игры теней','фантастика','Ерофей Трофимов','on-line по запросу'));
myBibl.add(new MyBibl('Пропавшие','детектив','Джейн Кейси','в читальном зале'));
myBibl.add(new MyBibl('Книга чудес','проза','Натаниель Готорн','в читальном зале'));
myBibl.add(new MyBibl('Разум океана','приключения','Станислав Гагарин','в читальном зале'));
myBibl.add(new MyBibl('Мгновения Вечности','поэзия','Владимир Кевхишвили','on-line по запросу'));
myBibl.add(new MyBibl('Прибытие на Марс','фантастика','Иван Беров','в читальном зале'));


myBibl.show();