$(function() {
    // enter items by entering text and hitting "Return" or clicking the "Add item" button 
    $('#js-shopping-list-form').on("submit", function(event) {
        event.preventDefault();
        // capture the input value
        // let value = $(this).find('input[name="shopping-list-entry"]').val();
        let value = $('input[name="shopping-list-entry"]').val();
        
        // Turn input value into a li in the in ul.shoppping-list
        let newItem = 
        `<li>
        <span class="shopping-item">${value}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
        </li>`

        $(".shopping-list").append(newItem);
    });

    // check and uncheck items on the list by clicking the "Check" button
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
        $(event.currentTarget.closest("li")).find('.shopping-item').toggleClass("shopping-item__checked");
    });

    // Remove items from the list (remove li from parent: ul.shopping-list)
    $('.shopping-list').on('click', '.shopping-item-delete', function() {
        this.closest("li").remove();
    });
});