import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFecthGifs } from "../../hooks/useFecthGifs";
jest.mock('../../hooks/useFecthGifs');

describe('Pruebas en el <GifGrid />', () => {
    
    const category = 'One Punch'
    
    test('debe coincidir con el Snapshot', () => {
        
        useFecthGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow( <GifGrid category={ category }/> );
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        
        const gifs = [{
            id:'ABC',
            url:'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa',
        },
        {
            id:'123',
            url:'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa',
        }];

        useFecthGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={ category }/> );

        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );


    });
        

})
