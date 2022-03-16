import React from 'react';
import Grid from '@material-ui/core';

import TheProduct from './TheProduct';


const products = [
    { id: 1, name: 'Easy Peezy Package', description: 'Reach-in Closet & Small walk-in', price: '$185' },
    { id: 2, name: 'No Problemo', description: 'Medium walk-in', price: '$275' },
    { id: 3, name: 'Walk Hard', description: 'Large walk-in', price: '$350' },
    { id: 4, name: 'Cozy Cubbard', description: 'Kitchen Pantry(Standard Size)', price: '$200' },
    { id: 5, name: 'Just Right', description: 'Kitchen Pantry(Medium)', price: '$220' },
    { id: 6, name: 'Personal Mini Mart', description: 'Kitchen Pantry(Large)', price: '$260' },
    { id: 7, name: 'Clear the Calendar', description: 'Bedroom turned Closet', price: '$500' },


]

const Products = () => {
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                    <TheProduct product={product} />
                </Grid>
            ))}
        </Grid>

    </main >

}

export default Products;
