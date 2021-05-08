import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas para <GifGridItem />', () => {

    const title = 'title123';
    const url = 'https://prueba.com';
    
    const wrapper = shallow( 
        <GifGridItem 
            title={ title }
            url={ url } 
        />
    );

    test('Debe de mostrar el componente GifGridItem de manera correcta', () => {  

        expect( wrapper ).toMatchSnapshot();   

    });

    test('Debe de tener un párrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    });

    test('Debe de tener la imagen igual al url y alt de los props', () => {
        
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    });

    test('Debe de tener animate__fadeIn', () => {
        
        const div = wrapper.find('div');
        expect( div.prop('className') ).toContain('animate__fadeIn');

    })
    
    
    
    
})
