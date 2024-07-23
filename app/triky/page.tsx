import React from 'react';
import { json } from 'stream/consumers';
import fs from 'fs';
import { stringify } from 'querystring';

function AnalyzeJson() {
    const historyPath = 'public/files/RWhistory20240716.json';
    const history = fs.readFileSync(historyPath, 'utf8');
    const jsonData = JSON.parse(history);
    const justApart = jsonData['items'][0]['capitalTotalLoot'];
    let letArray = [];
    for (let i = jsonData['items'].length - 1; i >= 0; i--) {
        letArray.push(jsonData['items'][i]['capitalTotalLoot']);
    }
    console.log(letArray);
    // Perform your analysis here
    const analysis = {
        keyCount: Object.keys(jsonData).length,
        

    };

    return(
        <div>
            <h1>Analysis</h1>
            <ul className=''>
                {letArray.map((item, index) => (
                    <li key={index} className={`inline-block bg-white`} 
                    
                    style={{
                        paddingTop: `${(item/10000)}px`,
                    }}>
                        __
                        </li>
                ))}
            </ul>
        </div>
    );
    
}

const Page: React.FC = () => {
    return (
        <div className='main'>
            {AnalyzeJson()}
        </div>
    );
};

export default Page;