

import React, { useState, useEffect } from 'react';

import ClanWarEndTime from '../components/ClanWarEndTime'; 





const Page: React.FC = () => {
  return (


    <div className='main'>
      <div className='section'>
        <h1>
          Omega CZ
        </h1>


      </div>

      <div className='section'>
      <ClanWarEndTime />
      </div>
      




        <div className='section'>



          <p>Jsme přátelský a pohodový klan, který uvítá aktivní hráče mobilní hry 
             <a href="https://supercell.com/en/games/clashofclans/" target="_blank" rel="noopener">
              Clash of Clans</a>.
               Máme zájem i o nováčky, kterým ochotně poradíme a rádi pomůžeme k jejich postupu a vývoji.
               </p>
        </div>




        <div className='section'><p>Klanových válek se účastníme téměř nonstop a často vítězíme. V klanových hrách náš tým získává nejvyšší výhry. Díky bojům v Raid Weekend každé pondělí dostává každý člen klanu slušnou sumu raidových medailí pro vylepšování vesnice.</p></div>

        <div className='section'>
          <p>Jestli máte zájem o 
            <a href="https://link.clashofclans.com/en?action=OpenClanProfile&amp;tag=2PG29LY8J" 
            target="_blank" rel="noopener">vstup do našeho klanu</a>
          , seznamte se důkladně s 
          <a href="https://omegacz.clanweb.eu/titulka/pravidla-klanu/">pravidly klanu</a>, 
          která jsou pro každého člena závazná. Žádosti o vstup do našeho klanu akceptujeme pouze
           v češtině nebo slovenštině.</p>
           </div>
        <div className='section'><p>Převážně je členský stav klanu&nbsp; naplněný. V případě silné motivace být členem našeho klanu se ozvěte na <a href="https://discord.gg/K5XZFHXXtt" target="_blank" rel="noopener">našem Discordu</a>. Volné místo v rámci možností vytvoříme.</p></div>
        <div className='section'><p>Od dubna 2023 jsme se rozšířili o sekundární klan <a href="https://link.clashofclans.com/en?action=OpenClanProfile&amp;tag=2QJL8LULJ" target="_blank" rel="noopener">OdpadliciCZ</a>, primárně určený na pořádání klanové bojové ligy slabších radnic, které se nedostanou do Top 30 v hlavním klanu. Mimo ligovou sezónu slouží jako akademie pro méně aktivní hráče nebo nezkušené bojovníky.</p>
        </div>



      
    </div>



  );
};

export default Page;