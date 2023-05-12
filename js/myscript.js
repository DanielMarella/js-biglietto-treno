


const PassengerAge = prompt ('Quanti anni hai?');
document.getElementById('YourAge').innerHTML = PassengerAge;

const KmToDo = prompt('Quanti km vuoi percorrere?');
document.getElementById('YourKm').innerHTML = KmToDo;

const underageDiscount = ('20%');

const FullTicket = parseInt(0.21 * KmToDo);
document.getElementById('fullPrice').innerHTML = FullTicket;

const DiscountTiket = FullTicket ;
if (PassengerAge < 18){

    const DiscountTiket = (20 / 100) * FullTicket;
    document.getElementById('minorDiscount').innerHTML = DiscountTiket;
}  

else if (PassengerAge > 65){
    const DiscountTiket = (65 / 100) * FullTicket;
    document.getElementById('majorDiscount').innerHTML = DiscountTiket;
}



