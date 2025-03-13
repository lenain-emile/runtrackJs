function jourTravaille(date) {
  const joursFeries2024 = [
    new Date('2024-01-01'),  
    new Date('2024-04-01'),  
    new Date('2024-05-01'),  
    new Date('2024-05-08'),  
    new Date('2024-07-14'),  
    new Date('2024-08-15'),  
    new Date('2024-11-01'),  
    new Date('2024-12-25')  
  ];

  const joursFeries = joursFeries2024.map(jf => jf.toDateString());

  const jour = date.getDay();
  const jourMoisAnnee = `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}`;
  
 
  if (joursFeries.includes(date.toDateString())) {
    console.log(`Le ${jourMoisAnnee} est un jour férié.`);
  }
 
  else if (jour === 0 || jour === 6) {
    console.log(`Non, ${jourMoisAnnee} est un week-end.`);
  }
  
  else {
    console.log(`Oui, ${jourMoisAnnee} est un jour travaillé.`);
  }
}


jourTravaille(new Date('2024-05-01')); 
jourTravaille(new Date('2024-04-20')); 
jourTravaille(new Date('2024-04-06')); 


