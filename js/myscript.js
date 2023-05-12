


const PassengerAge = prompt ('Quanti anni hai?');
document.getElementById('YourAge').innerHTML = PassengerAge;

const KmToDo = prompt('Quanti km vuoi percorrere?');
document.getElementById('YourKm').innerHTML = KmToDo;

const FullTicket = parseInt(0.21 * KmToDo);
document.getElementById('fullPrice').innerHTML = FullTicket.toFixed(2) + '€';

const DiscountTiket = FullTicket ;
if (PassengerAge < 18){

    const DiscountTiket = (20 / 100) * FullTicket;
    document.getElementById('minorDiscount').innerHTML = DiscountTiket.toFixed(2) + '€';
    document.getElementById('FinalPrice').innerHTML = FullTicket - DiscountTiket.toFixed(2) + '€';
}  

else if (PassengerAge > 65){
    const DiscountTiket = (40 / 100) * FullTicket;
    document.getElementById('majorDiscount').innerHTML = DiscountTiket.toFixed(2) + '€';
    document.getElementById('FinalPrice').innerHTML = FullTicket - DiscountTiket.toFixed(2) + '€';

}

