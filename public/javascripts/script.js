(() => {
    document.getElementById("purchasingForm").addEventListener("submit",onPurchasing);
    function onPurchasing(event){
        let name= document.getElementById("name").value;
        alert(`${name}, благодарим за поръчката!`);
    }
})()