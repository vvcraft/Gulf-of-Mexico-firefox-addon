function replaceText(oldText, newText) {
    document.body.innerHTML = document.body.innerHTML.replace(
        new RegExp(oldText, "gi"),
        newText
    );
}

if (document.body.innerText.includes("Gulf of America")) {
	replaceText("Gulf of America", "Gulf of Mexico");

}else if(document.body.innerText.includes("Gulf of Mexico (Gulf of America)")){
	replaceText("Gulf of Mexico (Gulf of America)", "Gulf of Mexico");
}