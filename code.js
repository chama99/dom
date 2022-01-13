
//Ajustez la quantité de chaque article à l'aide des boutons "+" et "-".//
function quantityButtons() {
    var $qtyAdd = $('.js-qty-add'),
        $qtyRemove = $('.js-qty-remove'),
        $qtyInput = $('.quantity__input');

    $qtyAdd.on('click', addQty);
    $qtyRemove.on('click', removeQty);

    function addQty() {
        var $qtyInput = $('.quantity__input'),
        $qtyRemove = $('.js-qty-remove'),
        $i = $qtyInput.val();

        $i++;
        $qtyRemove.attr("disabled", !$i);
        $qtyInput.val($i);
    }

    function removeQty() {
        var $qtyInput = $('.quantity__input'),
        $qtyRemove = $('.js-qty-remove'),
        $i = $qtyInput.val();

        if ($i >= 1) {
            $i--;
            $qtyInput.val($i);
        } else {
            $qtyRemove.attr("disabled", true);
        }
    }

    $qtyRemove.attr("disabled", !$qtyInput.val());
}


// Supprimer des articles du panier. //
var btn = document.getElementById("supp-command");
function deleteItemSelect(e, items) {
    let index = e.target.classList[1].slice();
    items.splice(index, 1);
    localStorage.setItem('anyItem', JSON.stringify(items));
 
    if (items.length === 0) {
        localStorage.removeItem('anyItem');
    }
    updateNumberArticles();
}
const deleteItem = document.querySelectorAll(".delete__item");
        deleteItem.forEach((btn) => {
            btn.addEventListener('click', e => {
            deleteItemSelect(e, items);
            });
 

