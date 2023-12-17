let summa = 0;

document.querySelectorAll('#quantity1, #quantity2').forEach(produkt => {
    produkt.addEventListener('input', () => {
        summa = 0;
        document.querySelectorAll('#quantity1, #quantity2').forEach(produkt => {
            summa += Number(produkt.value) * Number(produkt.nextElementSibling.textContent.split(' ')[1]);
            });
            document.querySelector('#summa').textContent = (summa).toFixed(2) + " SEK";
          });
 });
const btn = document.querySelector('button');
const order = document.querySelector('.order')

btn.addEventListener('click', () =>{
    order.removeAttribute('hidden');
})