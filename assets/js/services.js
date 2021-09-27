function sendMessage1(event) {
    event.preventDefault();

    const apiKey = "1962825897:AAFV5XPksDucPrMUQHBm9Y522rofR9GgmTQ";
    const chatId = "-522762922";

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const phoneErrorMessageElement = document.getElementById("phoneErrorMessage1");

    if (!phone.match(/\d{10}/)) {
        phoneErrorMessageElement.style.display = "block";
        phoneErrorMessageElement.innerHTML = "Неправильно введений телефон!";
        return;
    } else {
        phoneErrorMessageElement.style.display = "none";
    }

    async function postData() {
        await fetch(`https://api.telegram.org/bot${apiKey}/sendMessage`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "chat_id": chatId,
                "text": `Ім'я - ${name}, телефон - ${phone}`,
            })
        });
    };

    postData().then(() => {
        document.location.href = "/thanks.html"
    });
}