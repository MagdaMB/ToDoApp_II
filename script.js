document.addEventListener('DOMContentLoaded', function () {

	var notes = [
					{
					   title: "first note",
					   date: "22.02.2018"
					}, 
					{
					   title: "second note",
					   date: "22.02.2018"
					}
				]

	function showNotes() {

		for(var i=0; i<notes.length; i++) {

			var list = document.querySelector(".list");
			var newList = document.createElement("li");

			newList.classList.add("note");
			newList.innerText = `${notes[i].title} - ${notes[i].date}`;
			list.appendChild(newList);

			var newButton = document.createElement("button");
			newButton.innerText = `Usuń`;
			newButton.classList.add("delete");

			newButton.addEventListener("click", function() {

				var el = this.parentElement;
				el.parentElement.removeChild(el);
			})
			
			newList.appendChild(newButton);
		}
	}

	    showNotes();

	var addBtn = document.querySelector(".addBtn");
	var list = document.querySelector(".list");

	addBtn.addEventListener("click", function() {

		var titleNote = document.querySelector("#title").value;
		var dateNote = document.querySelector("#date").value;
		var li = document.createElement("li");

		li.classList.add("note");
		li.innerText = `${titleNote} - ${dateNote}`;

		list.appendChild(li);

		var delBtn = document.createElement("button");
		delBtn.innerText = `Usuń`;
		delBtn.classList.add("delete");

		delBtn.addEventListener('click', function() {
        const element = this.parentElement;
        element.parentElement.removeChild(element);
    });
		li.appendChild(delBtn);

	});
	})