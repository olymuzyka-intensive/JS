const Book = function(title = '', category = '', author = '', rating = ''){
    this.title = title;
    this.category = category;
    this.author = author;
    this.rating = rating;


this.show = function(){
    console.log(`${this.title} ${this.author} (${this.category}) ${this.rating}`);
    // document.write ('<li><strong>${this.title}</strong>: <i>${this.category}</i><strong><i>${this.author}</i></strong><u>${this.rating}</u> </li>');
    }
}
const MyBooks = function(){
    this.data = [];

    this.add = function(Book = {}){
        this.data.push(Book);
    }

    this.show = function(){
        // document.write('<ul>');

        this.data.forEach(function(item){
            item.show();
        });

        // document.write('</ul>');
    }
};

let myBooks = new MyBooks();

myBooks.add(new Book('Огненная вспышка','детектив','Ричард Старк', 5));
myBooks.add(new Book('Воздушный витязь','проза','Игорь Соркин', 4));
myBooks.add(new Book('Дракон Фенстонов','приключения','Анри Верн', 3));
myBooks.add(new Book('Заколдованное счастье','поэзия','Лев Маляков', 5));
myBooks.add(new Book('Игры теней','фантастика','Ерофей Трофимов', 5));
myBooks.add(new Book('Пропавшие','детектив','Джейн Кейси', 4));
myBooks.add(new Book('Книга чудес','проза','Натаниель Готорн', 4));
myBooks.add(new Book('Разум океана','приключения','Станислав Гагарин', 5));
myBooks.add(new Book('Мгновения Вечности','поэзия','Владимир Кевхишвили', 3));
myBooks.add(new Book('Прибытие на Марс','фантастика','Иван Беров', 2));

myBooks.show();