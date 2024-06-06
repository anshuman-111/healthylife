import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
    it('should have a heading with the text "17 goals to transform our world"', () => {
        // Render the TileContainer component
        render(<Home />);
        
        // Select all Tile components within the container
        const tile = screen.getByRole('heading', { name: '17 goals to transform our world' });
        expect(tile).toBeInTheDocument();

     
    });
});