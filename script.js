window.addEventListener("load", event => {
    const cta = document.querySelector(".cta"),
        container = document.querySelector(".container"),
        receipt = document.querySelector(".receipt");

    cta.addEventListener("click", printReceipt);

    function printReceipt() {
        container.classList.add("anime");
        cta.innerHTML = "";

        container.style.height = receipt.clientHeight + 45 + "px";
    }
});

document.getElementById('stampa').addEventListener('click', function() {
    document.getElementById('stampa').addEventListener('click', function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        const imgUrl = 'voucher.png';
        doc.addImage(imgUrl, 'PNG', 10, 10, 180, 160); 
        doc.save('voucher.pdf');
    });
});