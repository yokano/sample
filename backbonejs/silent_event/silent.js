$(function() {

	// ビューの定義
	var BookListView = Backbone.View.extend({
		tagName: 'ul',
		initialize: function() {
			this.listenTo(this.model, 'add', this.render);
		},
		render: function() {
			var self = this;
			this.$el.empty();
			
			this.$el.append($('<button id="add_book">本を追加</button>'));
			this.$el.append($('<button id="add_book_silent">本を追加（サイレント）</button>'));
			
			this.model.each(function(book) {
				self.$el.append('<li>' + book.get('title') + '</li>');
			});
			
			return this;
		},
		events: {
			'click #add_book': 'addBookButtonHasClicked',
			'click #add_book_silent' : 'addBookSilentButtonHasClicked'
		},
		addBookButtonHasClicked: function() {
			var title = window.prompt('タイトルを入力してください');
			if(title == '') {
				return;
			}
			this.model.add({title: title});
		},
		addBookSilentButtonHasClicked: function() {
			var title = window.prompt('タイトルを入力してください');
			if(title == '') {
				return;
			}
			this.model.add({title: title}, {silent: true});
		}
	});

	// モデルの定義
	var Book = Backbone.Model.extend({
		default: {
			title: 'no title'
		}
	});
	var BookList = Backbone.Collection.extend({
		model: Book
	});

	// データの初期化
	var bookList = new BookList([
		{title: '森林の作り方'},
		{title: '雨水のため方２章'},
		{title: 'かならず当たる　懸賞はがき攻略本'},
		{title: 'たぬきのしっぽ'}
	]);

	// ビューの初期化
	var bookListView = new BookListView({
		model: bookList
	});

	// ビューを画面に表示
	$('body').append(bookListView.render().el);

});

