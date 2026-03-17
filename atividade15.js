

let lotes = [30, 100, 70, 150];

let totalIngressos = 0

for(let i = 0; i < lotes.length; i++) {

    totalIngressos += lotes[i];

    console.log(`O lote ${lotes.indexOf(lotes[i])} vendeu ${lotes[i]} `);

    console.log(`O total de ingressos vendidos foi ${totalIngressos}`);


};





