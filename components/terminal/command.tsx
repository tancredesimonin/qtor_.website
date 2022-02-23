import { useState } from 'react';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js'

export interface TerminalProps {
    id: string;
    commandList: Array<Command>;
    typeSpeed?: number;
    onCompletion: () => void;
}

export interface Command {
    loadingTime?: number;
    text: string;
}

function parseCommands(commandList: Array<Command>): Array<string> {

        let string = '';
        commandList.forEach((element, index) => {
            var loadingText = element.loadingTime ? ` ^${element.loadingTime.toString()}` : ''
            var newLine = (index === 0) ? '' : ` <br/>`
            var text = (index === 0) ? element.text : ' `'+element.text+'`'
            string = string + newLine + text + loadingText
        })
        console.log(string)
        return [string];
}

export default function Terminal({commandList, typeSpeed, onCompletion, id}: TerminalProps) {



    useEffect(() => {
      // see doc https://mattboldt.github.io/typed.js
      const typed = new Typed(`#${id}`, {
        strings: parseCommands(commandList),
        typeSpeed: typeSpeed ? typeSpeed : 70,
        backSpeed: 100,
        loop: false,
        cursorChar: '_',
        loopCount: 0,
        smartBackspace: true,
        onComplete: () => { console.log('completed'); onCompletion()}
      });
  
      // Destroying
      return () => {
        console.log('destroyed')
        typed.destroy();        
      };
    }, []);

    return (
        <div className='block'>
            <span id={id} className="inline-block font-sans text-primary-50"></span>
        </div>
    )

}