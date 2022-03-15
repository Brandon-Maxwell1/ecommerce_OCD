import React from 'react';
import Grid from '@material-ui/core';


const products = [
    { id: 1, name: 'Easy Peezy Package', description: 'Reach-in Closet & Small walk-in' },
    { id: 2, name: 'No Problemo', description: 'Medium walk-in' },
    { id: 3, name: 'Walk Hard', description: 'Large walk-in' },
    { id: 4, name: 'Cozy Cubbard', description: 'Kitchen Pantry(Standard Size)' },
    { id: 5, name: 'Just Right', description: 'Kitchen Pantry(Medium)' },
    { id: 6, name: 'Personal Mini Mart', description: 'Kitchen Pantry(Large)' },
    { id: 7, name: 'Clear the Calendar', description: 'Bedroom turned Closet' },


]

const Products = () => {
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                    <Product />
                </Grid>
            ))}
        </Grid>

    </main >

}

export default Products;
